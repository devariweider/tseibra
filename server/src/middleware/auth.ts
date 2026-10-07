import { randomUUID } from 'node:crypto';
import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { env } from '../env.js';
import { HttpError } from '../lib/http-error.js';
import { getDb } from '../db/client.js';
import type { PublicUser, SessionRow, UserRow } from '../db/types.js';
import { toPublicUser } from '../db/types.js';

export const AUTH_COOKIE = 'tseibra_session';

export interface SessionClaims {
  sub: string;
  sid: string;
  role: PublicUser['role'];
}

declare global {
  namespace Express {
    interface Request {
      user?: PublicUser;
      session?: SessionRow;
    }
  }
}

const claimsSchema = z.object({
  sub: z.string().min(1),
  sid: z.string().min(1),
  role: z.enum(['aluno', 'instrutor', 'admin']),
});

const cookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  secure: env.isProduction,
  path: '/',
  ...(env.cookieDomain ? { domain: env.cookieDomain } : {}),
} as const;

export function signSessionToken(claims: SessionClaims): string {
  return jwt.sign(claims, env.jwt.secret, {
    expiresIn: env.jwt.expiresInSeconds,
    issuer: env.jwt.issuer,
  });
}

export async function createSession(
  userId: string,
  meta: { userAgent?: string | undefined; ipAddress?: string | undefined },
): Promise<{ token: string; session: SessionRow }> {
  const db = getDb();
  const sessionId = randomUUID();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + env.jwt.expiresInSeconds * 1000);

  await db.run(
    `INSERT INTO sessions (id, user_id, created_at, expires_at, revoked_at, user_agent, ip_address)
     VALUES (?, ?, ?, ?, NULL, ?, ?)`,
    sessionId,
    userId,
    now.toISOString(),
    expiresAt.toISOString(),
    meta.userAgent ?? null,
    meta.ipAddress ?? null,
  );

  const session = await db.get<SessionRow>('SELECT * FROM sessions WHERE id = ?', sessionId);
  if (!session) throw HttpError.internal('Não foi possível criar a sessão.');

  return { token: signSessionToken({ sub: userId, sid: sessionId, role: 'aluno' }), session };
}

export function setAuthCookie(res: Response, token: string): void {
  res.cookie(AUTH_COOKIE, token, { ...cookieOptions, maxAge: env.jwt.expiresInSeconds * 1000 });
}

export function clearAuthCookie(res: Response): void {
  res.clearCookie(AUTH_COOKIE, cookieOptions);
}

export async function revokeSession(sessionId: string): Promise<void> {
  await getDb().run(
    'UPDATE sessions SET revoked_at = ? WHERE id = ? AND revoked_at IS NULL',
    new Date().toISOString(),
    sessionId,
  );
}

export async function revokeAllUserSessions(userId: string): Promise<void> {
  await getDb().run(
    'UPDATE sessions SET revoked_at = ? WHERE user_id = ? AND revoked_at IS NULL',
    new Date().toISOString(),
    userId,
  );
}

async function loadUserFromToken(token: string): Promise<{ user: PublicUser; session: SessionRow } | null> {
  let claims: SessionClaims;
  try {
    claims = claimsSchema.parse(jwt.verify(token, env.jwt.secret, { issuer: env.jwt.issuer }));
  } catch {
    return null;
  }

  const db = getDb();
  const session = await db.get<SessionRow>('SELECT * FROM sessions WHERE id = ?', claims.sid);
  if (!session || session.user_id !== claims.sub) return null;
  if (session.revoked_at !== null) return null;
  if (new Date(session.expires_at).getTime() <= Date.now()) return null;

  const row = await db.get<UserRow>('SELECT * FROM users WHERE id = ?', claims.sub);
  if (!row || !row.active) return null;

  return { user: toPublicUser(row), session };
}

function readToken(req: Request): string | null {
  const cookies = req.cookies as Record<string, string> | undefined;
  const fromCookie = cookies?.[AUTH_COOKIE];
  if (fromCookie) return fromCookie;

  const header = req.header('authorization');
  if (header?.startsWith('Bearer ')) return header.slice('Bearer '.length);
  return null;
}

/** Popula req.user quando houver sessão válida; nunca bloqueia a requisição. */
export function attachUser(req: Request, _res: Response, next: NextFunction): void {
  const token = readToken(req);
  if (!token) {
    next();
    return;
  }

  loadUserFromToken(token)
    .then((result) => {
      if (result) {
        req.user = result.user;
        req.session = result.session;
      }
      next();
    })
    .catch(() => next());
}

export function requireAuth(req: Request, _res: Response, next: NextFunction): void {
  if (!req.user) {
    next(HttpError.unauthorized('Sessão expirada ou não autenticado. Faça login novamente.'));
    return;
  }
  next();
}

export function requireRole(...roles: PublicUser['role'][]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(HttpError.unauthorized());
      return;
    }
    if (!roles.includes(req.user.role)) {
      next(HttpError.forbidden('Perfil sem permissão para esta área.'));
      return;
    }
    next();
  };
}
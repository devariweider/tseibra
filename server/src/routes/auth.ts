import { randomUUID } from 'node:crypto';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { getDb } from '../db/client.js';
import type { UserRow } from '../db/types.js';
import { toPublicUser } from '../db/types.js';
import { hashPassword, normalizeEmail, verifyPassword } from '../lib/crypto.js';
import { HttpError } from '../lib/http-error.js';
import { validate } from '../middleware/error.js';
import {
  clearAuthCookie,
  createSession,
  revokeAllUserSessions,
  revokeSession,
  requireAuth,
  setAuthCookie,
} from '../middleware/auth.js';

export const authRouter = Router();

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 20,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    error: {
      code: 'too_many_requests',
      message: 'Muitas tentativas de login. Tente novamente em alguns minutos.',
    },
  },
});

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    error: { code: 'too_many_requests', message: 'Limite de cadastros atingido para este IP.' },
  },
});

const passwordSchema = z
  .string()
  .min(8, 'A senha deve ter ao menos 8 caracteres.')
  .max(128, 'A senha deve ter no máximo 128 caracteres.')
  .regex(/[a-zA-Z]/, 'A senha deve conter ao menos uma letra.')
  .regex(/\d/, 'A senha deve conter ao menos um número.');

const loginSchema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(1, 'Informe a senha.'),
});

const registerSchema = z.object({
  name: z.string().trim().min(3, 'Informe seu nome completo.').max(120),
  email: z.string().email('E-mail inválido.'),
  organization: z.string().trim().max(120).optional(),
  password: passwordSchema,
});

authRouter.post('/login', loginLimiter, validate({ body: loginSchema }), (req, res) => {
  const { email, password } = req.body as z.infer<typeof loginSchema>;
  const db = getDb();
  const row = db.get<UserRow>('SELECT * FROM users WHERE email = ?', normalizeEmail(email));

  // Mensagem genérica e comparação de hash mesmo sem usuário, para não
  // revelar se o e-mail existe e para uniformizar o tempo de resposta.
  const invalid = HttpError.unauthorized('E-mail ou senha inválidos.');
  if (!row) {
    verifyPassword(password, hashPassword('timing-equalizer'));
    throw invalid;
  }
  if (!verifyPassword(password, row.password_hash)) throw invalid;
  if (row.active !== 1) {
    throw HttpError.forbidden('Usuário desativado. Procure o administrador da plataforma.');
  }

  const { token } = createSession(row.id, {
    userAgent: req.header('user-agent'),
    ipAddress: req.ip,
  });
  setAuthCookie(res, token);
  res.json({ user: toPublicUser(row) });
});

authRouter.post('/register', registerLimiter, validate({ body: registerSchema }), (req, res) => {
  const { name, email, organization, password } = req.body as z.infer<typeof registerSchema>;
  const db = getDb();
  const normalizedEmail = normalizeEmail(email);

  if (db.get<{ id: string }>('SELECT id FROM users WHERE email = ?', normalizedEmail)) {
    throw HttpError.conflict('Já existe uma conta com este e-mail.');
  }

  const now = new Date().toISOString();
  const id = randomUUID();
  db.run(
    `INSERT INTO users (id, name, email, password_hash, role, organization, active, created_at, updated_at)
     VALUES (?, ?, ?, ?, 'aluno', ?, 1, ?, ?)`,
    id,
    name.trim(),
    normalizedEmail,
    hashPassword(password),
    organization ?? null,
    now,
    now,
  );

  const row = db.get<UserRow>('SELECT * FROM users WHERE id = ?', id);
  if (!row) throw HttpError.internal('Falha ao criar a conta.');

  const { token } = createSession(row.id, {
    userAgent: req.header('user-agent'),
    ipAddress: req.ip,
  });
  setAuthCookie(res, token);
  res.status(201).json({ user: toPublicUser(row) });
});

authRouter.post('/logout', (req, res) => {
  const sessionId = req.session?.id;
  if (sessionId) revokeSession(sessionId);
  clearAuthCookie(res);
  res.status(204).end();
});

authRouter.get('/me', requireAuth, (req, res) => {
  res.json({ user: req.user });
});

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Informe a senha atual.'),
  newPassword: passwordSchema,
});

authRouter.post(
  '/change-password',
  requireAuth,
  validate({ body: changePasswordSchema }),
  (req, res) => {
    const { currentPassword, newPassword } = req.body as z.infer<typeof changePasswordSchema>;
    const db = getDb();
    const row = db.get<UserRow>('SELECT * FROM users WHERE id = ?', req.user!.id);
    if (!row) throw HttpError.notFound('Usuário não encontrado.');
    if (!verifyPassword(currentPassword, row.password_hash)) {
      throw HttpError.badRequest('Senha atual incorreta.');
    }

    db.run(
      'UPDATE users SET password_hash = ?, updated_at = ? WHERE id = ?',
      hashPassword(newPassword),
      new Date().toISOString(),
      row.id,
    );

    // Invalida todas as sessões (inclusive a atual) por segurança.
    revokeAllUserSessions(row.id);
    clearAuthCookie(res);
    res.json({ ok: true, message: 'Senha alterada. Faça login novamente.' });
  },
);
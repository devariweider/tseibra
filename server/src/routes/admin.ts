import { randomUUID } from 'node:crypto';
import { Router } from 'express';
import { z } from 'zod';
import { getCurriculum } from '@tseibra/content';
import { getDb } from '../db/client.js';
import { requireParam } from '../db/query.js';
import type { LessonProgressRow, Role, UserRow } from '../db/types.js';
import { toPublicUser } from '../db/types.js';
import { hashPassword, normalizeEmail } from '../lib/crypto.js';
import { HttpError } from '../lib/http-error.js';
import { revokeAllUserSessions, requireRole } from '../middleware/auth.js';
import { validate } from '../middleware/error.js';

export const adminRouter = Router();
adminRouter.use(requireRole('admin'));

interface StudentOverview {
  userId: string;
  name: string;
  email: string;
  organization: string | null;
  role: Role;
  active: boolean;
  completedLessons: number;
  totalLessons: number;
  averageScore: number | null;
  studySeconds: number;
  lastActivityAt: string | null;
}

adminRouter.get('/users', (_req, res) => {
  const db = getDb();
  const totals = getCurriculum().totals.lessons;
  const users = db.all<UserRow>('SELECT * FROM users ORDER BY created_at ASC');

  const overview: StudentOverview[] = users.map((user) => {
    const progress = db.all<LessonProgressRow>(
      'SELECT * FROM lesson_progress WHERE user_id = ?',
      user.id,
    );
    const study = db.get<{ total: number | null }>(
      'SELECT COALESCE(SUM(seconds), 0) AS total FROM study_sessions WHERE user_id = ?',
      user.id,
    );
    const lastAttempt = db.get<{ created_at: string }>(
      'SELECT created_at FROM quiz_attempts WHERE user_id = ? ORDER BY created_at DESC LIMIT 1',
      user.id,
    );

    const scored = progress.filter((row) => row.best_score !== null);
    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      organization: user.organization,
      role: user.role,
      active: user.active === 1,
      completedLessons: progress.filter((row) => row.status === 'concluido').length,
      totalLessons: totals,
      averageScore:
        scored.length === 0
          ? null
          : Math.round(scored.reduce((sum, row) => sum + (row.best_score ?? 0), 0) / scored.length),
      studySeconds: Number(study?.total ?? 0),
      lastActivityAt: lastAttempt?.created_at ?? null,
    };
  });

  res.json({ users: overview });
});

const createUserSchema = z.object({
  name: z.string().trim().min(3, 'Informe o nome completo.').max(120),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'A senha deve ter ao menos 8 caracteres.').max(128),
  role: z.enum(['aluno', 'instrutor', 'admin']).default('aluno'),
  organization: z.string().trim().max(120).optional(),
});

adminRouter.post('/users', validate({ body: createUserSchema }), (req, res) => {
  const payload = req.body as z.infer<typeof createUserSchema>;
  const db = getDb();
  const email = normalizeEmail(payload.email);

  if (db.get<{ id: string }>('SELECT id FROM users WHERE email = ?', email)) {
    throw HttpError.conflict('Já existe uma conta com este e-mail.');
  }

  const now = new Date().toISOString();
  const id = randomUUID();
  db.run(
    `INSERT INTO users (id, name, email, password_hash, role, organization, active, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?)`,
    id,
    payload.name.trim(),
    email,
    hashPassword(payload.password),
    payload.role,
    payload.organization ?? null,
    now,
    now,
  );

  const row = db.get<UserRow>('SELECT * FROM users WHERE id = ?', id);
  if (!row) throw HttpError.internal('Falha ao criar o usuário.');
  res.status(201).json({ user: toPublicUser(row) });
});

const updateUserSchema = z
  .object({
    name: z.string().trim().min(3).max(120).optional(),
    role: z.enum(['aluno', 'instrutor', 'admin']).optional(),
    active: z.boolean().optional(),
    password: z.string().min(8).max(128).optional(),
    organization: z.string().trim().max(120).nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: 'Informe ao menos um campo para alteração.',
  });

adminRouter.patch('/users/:userId', validate({ body: updateUserSchema }), (req, res) => {
  const userId = requireParam(req.params, 'userId');
  const payload = req.body as z.infer<typeof updateUserSchema>;
  const db = getDb();
  const row = db.get<UserRow>('SELECT * FROM users WHERE id = ?', userId);
  if (!row) throw HttpError.notFound('Usuário não encontrado.');

  if (payload.active === false && userId === req.user!.id) {
    throw HttpError.badRequest('Você não pode desativar a própria conta.');
  }
  if (payload.role !== undefined && userId === req.user!.id && payload.role !== 'admin') {
    throw HttpError.badRequest('Você não pode remover o próprio perfil de administrador.');
  }

  const updates: string[] = [];
  const values: Array<string | null> = [];

  // Só encerra as sessões quando um campo sensível realmente muda de valor.
  // Sem esta checagem, reenviar o mesmo perfil derrubaria a sessão do próprio
  // administrador logo após ele salvar a edição.
  let shouldRevokeSessions = false;

  if (payload.name !== undefined) {
    updates.push('name = ?');
    values.push(payload.name.trim());
  }
  if (payload.role !== undefined) {
    updates.push('role = ?');
    values.push(payload.role);
    shouldRevokeSessions ||= payload.role !== row.role;
  }
  if (payload.active !== undefined) {
    updates.push('active = ?');
    values.push(payload.active ? '1' : '0');
    shouldRevokeSessions ||= (payload.active ? 1 : 0) !== row.active;
  }
  if (payload.organization !== undefined) {
    updates.push('organization = ?');
    values.push(payload.organization);
  }
  if (payload.password !== undefined) {
    updates.push('password_hash = ?');
    values.push(hashPassword(payload.password));
    shouldRevokeSessions = true;
  }

  updates.push('updated_at = ?');
  values.push(new Date().toISOString(), userId);

  db.run(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, ...values);

  if (shouldRevokeSessions) {
    revokeAllUserSessions(userId);
  }

  const updated = db.get<UserRow>('SELECT * FROM users WHERE id = ?', userId);
  if (!updated) throw HttpError.notFound('Usuário não encontrado.');
  res.json({ user: toPublicUser(updated) });
});

adminRouter.get('/users/:userId/progress', (req, res) => {
  const userId = requireParam(req.params, 'userId');
  const rows = getDb().all<LessonProgressRow>(
    'SELECT * FROM lesson_progress WHERE user_id = ? ORDER BY updated_at DESC',
    userId,
  );
  res.json({
    progress: rows.map((row) => ({
      lessonId: row.lesson_id,
      status: row.status,
      bestScore: row.best_score,
      lastScore: row.last_score,
      attemptsCount: row.attempts_count,
      completedAt: row.completed_at,
      updatedAt: row.updated_at,
    })),
  });
});

adminRouter.post('/users/:userId/reset-progress', (req, res) => {
  const userId = requireParam(req.params, 'userId');
  if (userId === req.user!.id) {
    throw HttpError.badRequest('Não é possível zerar o próprio progresso.');
  }
  const result = getDb().run('DELETE FROM lesson_progress WHERE user_id = ?', userId);
  res.json({ removed: Number(result.changes) });
});
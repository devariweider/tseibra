import { randomUUID } from 'node:crypto';
import { Router } from 'express';
import { z } from 'zod';
import {
  allLessonIds,
  getCurriculum,
  getLessonById,
  gradeQuizAttempt,
  PASS_THRESHOLD,
} from '@tseibra/content';
import { getDb } from '../db/client.js';
import { requireParam } from '../db/query.js';
import type { LessonProgressRow, QuizAttemptRow, StudySessionRow } from '../db/types.js';
import { HttpError } from '../lib/http-error.js';
import { requireAuth } from '../middleware/auth.js';
import { asyncHandler, validate } from '../middleware/error.js';

export const progressRouter = Router();

// Autenticação aplicada por prefixo de rota (evita bloquear rotas não
// relacionadas, como /api/health e as rotas públicas de conteúdo).
progressRouter.use('/progress', requireAuth);
progressRouter.use('/study-sessions', requireAuth);
progressRouter.use('/dashboard', requireAuth);

const lessonIdSchema = z.object({ lessonId: z.string().min(1) });

interface ProgressDto {
  lessonId: string;
  status: 'nao_iniciado' | 'em_andamento' | 'concluido';
  bestScore: number | null;
  lastScore: number | null;
  attemptsCount: number;
  startedAt: string | null;
  completedAt: string | null;
}

function toProgressDto(row: LessonProgressRow): ProgressDto {
  return {
    lessonId: row.lesson_id,
    status: row.status,
    bestScore: row.best_score,
    lastScore: row.last_score,
    attemptsCount: row.attempts_count,
    startedAt: row.started_at,
    completedAt: row.completed_at,
  };
}

function assertKnownLesson(lessonId: string): void {
  if (!allLessonIds.includes(lessonId)) {
    throw HttpError.notFound('Aula não encontrada no conteúdo do curso.');
  }
}

async function loadProgressRow(userId: string, lessonId: string): Promise<LessonProgressRow> {
  const row = await getDb().get<LessonProgressRow>(
    'SELECT * FROM lesson_progress WHERE user_id = ? AND lesson_id = ?',
    userId,
    lessonId,
  );
  if (!row) throw HttpError.internal('Progresso não encontrado.');
  return row;
}

progressRouter.get(
  '/progress',
  asyncHandler(async (req, res) => {
    const rows = await getDb().all<LessonProgressRow>(
      'SELECT * FROM lesson_progress WHERE user_id = ?',
      req.user!.id,
    );
    res.json({ progress: rows.map(toProgressDto) });
  }),
);

progressRouter.get(
  '/progress/:lessonId',
  validate({ params: lessonIdSchema }),
  asyncHandler(async (req, res) => {
    const lessonId = requireParam(req.params, 'lessonId');
    assertKnownLesson(lessonId);
    const row = await getDb().get<LessonProgressRow>(
      'SELECT * FROM lesson_progress WHERE user_id = ? AND lesson_id = ?',
      req.user!.id,
      lessonId,
    );
    res.json({ progress: row ? toProgressDto(row) : null });
  }),
);

/** Marca a aula como iniciada (idempotente). */
progressRouter.post(
  '/progress/:lessonId/start',
  validate({ params: lessonIdSchema }),
  asyncHandler(async (req, res) => {
    const lessonId = requireParam(req.params, 'lessonId');
    assertKnownLesson(lessonId);
    const db = getDb();
    const now = new Date().toISOString();

    await db.run(
      `INSERT INTO lesson_progress (user_id, lesson_id, status, attempts_count, started_at, updated_at)
       VALUES (?, ?, 'em_andamento', 0, ?, ?)
       ON CONFLICT(user_id, lesson_id) DO UPDATE SET
         status = CASE WHEN lesson_progress.status = 'nao_iniciado' THEN 'em_andamento' ELSE lesson_progress.status END,
         started_at = COALESCE(lesson_progress.started_at, excluded.started_at),
         updated_at = excluded.updated_at`,
      req.user!.id,
      lessonId,
      now,
      now,
    );

    res.json({ progress: toProgressDto(await loadProgressRow(req.user!.id, lessonId)) });
  }),
);

const submissionSchema = z.object({
  answers: z.record(z.string(), z.number().int().min(0)),
  secondsSpent: z.number().int().min(0).max(60 * 60 * 12).optional(),
});

/**
 * Registra a tentativa, atualiza o progresso da aula e devolve o gabarito comentado.
 * Regra de progressão: a aula é concluída quando o aproveitamento >= 70%.
 */
progressRouter.post(
  '/progress/:lessonId/submissions',
  validate({ params: lessonIdSchema, body: submissionSchema }),
  asyncHandler(async (req, res) => {
    const lessonId = requireParam(req.params, 'lessonId');
    const { answers } = req.body as z.infer<typeof submissionSchema>;
    assertKnownLesson(lessonId);

    const ref = getLessonById(lessonId);
    if (!ref) throw HttpError.notFound('Aula não encontrada.');

    // Rejeita perguntas que não pertencem à aula (evita sujar o histórico).
    const validQuestionIds = new Set(ref.lesson.quiz.map((question) => question.id));
    for (const questionId of Object.keys(answers)) {
      if (!validQuestionIds.has(questionId)) {
        throw HttpError.badRequest(`Questão desconhecida nesta aula: ${questionId}`);
      }
    }

    const graded = gradeQuizAttempt(lessonId, answers);
    if (!graded) throw HttpError.notFound('Aula não encontrada.');

    const db = getDb();
    const now = new Date().toISOString();
    const passed = graded.score >= PASS_THRESHOLD;

    await db.transaction(async (tx) => {
      await tx.run(
        `INSERT INTO quiz_attempts (id, user_id, lesson_id, score, total, answers, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        randomUUID(),
        req.user!.id,
        lessonId,
        graded.score,
        graded.total,
        JSON.stringify(answers),
        now,
      );

      await tx.run(
        `INSERT INTO lesson_progress
           (user_id, lesson_id, status, best_score, attempts_count, last_score, started_at, completed_at, updated_at)
         VALUES (?, ?, ?, ?, 1, ?, ?, ?, ?)
         ON CONFLICT(user_id, lesson_id) DO UPDATE SET
           status = CASE WHEN excluded.status = 'concluido' THEN 'concluido' ELSE lesson_progress.status END,
           best_score = excluded.best_score,
           attempts_count = lesson_progress.attempts_count + 1,
           last_score = excluded.last_score,
           started_at = COALESCE(lesson_progress.started_at, excluded.started_at),
           completed_at = COALESCE(lesson_progress.completed_at, excluded.completed_at),
           updated_at = excluded.updated_at`,
        req.user!.id,
        lessonId,
        passed ? 'concluido' : 'em_andamento',
        graded.score,
        graded.score,
        now,
        passed ? now : null,
        now,
      );
    });

    res.json({ result: graded, progress: toProgressDto(await loadProgressRow(req.user!.id, lessonId)) });
  }),
);

/** Registro de tempo de estudo (enviado pelo front ao sair da aula). */
const studySessionSchema = z.object({
  startedAt: z.string().datetime(),
  seconds: z.number().int().min(0).max(60 * 60 * 12),
});

progressRouter.post(
  '/study-sessions',
  validate({ body: studySessionSchema }),
  asyncHandler(async (req, res) => {
    const { startedAt, seconds } = req.body as z.infer<typeof studySessionSchema>;
    await getDb().run(
      'INSERT INTO study_sessions (id, user_id, started_at, ended_at, seconds) VALUES (?, ?, ?, ?, ?)',
      randomUUID(),
      req.user!.id,
      startedAt,
      new Date().toISOString(),
      seconds,
    );
    res.status(201).json({ ok: true });
  }),
);

interface ModuleProgressDto {
  moduleId: string;
  moduleTitle: string;
  totalLessons: number;
  completedLessons: number;
  averageScore: number | null;
}

interface DashboardPayload {
  totals: { modules: number; lessons: number; questions: number; minutes: number };
  completedLessons: number;
  startedLessons: number;
  inProgressPercent: number;
  averageScore: number | null;
  studySeconds: number;
  streakDays: number;
  byModule: ModuleProgressDto[];
  recentAttempts: Array<{
    lessonId: string;
    lessonTitle: string;
    score: number;
    total: number;
    createdAt: string;
  }>;
  continueStudying: { lessonId: string; moduleId: string; title: string } | null;
}

progressRouter.get(
  '/dashboard',
  asyncHandler(async (req, res) => {
    const db = getDb();
    const curriculum = getCurriculum();
    const userId = req.user!.id;

    const progressRows = await db.all<LessonProgressRow>(
      'SELECT * FROM lesson_progress WHERE user_id = ?',
      userId,
    );
    const attempts = await db.all<QuizAttemptRow>(
      'SELECT lesson_id, score, total, created_at FROM quiz_attempts WHERE user_id = ? ORDER BY created_at DESC',
      userId,
    );
    const studyRows = await db.all<StudySessionRow>(
      'SELECT seconds, started_at FROM study_sessions WHERE user_id = ?',
      userId,
    );

    const completedLessons = progressRows.filter((row) => row.status === 'concluido').length;
    const startedLessons = progressRows.filter((row) => row.status !== 'nao_iniciado').length;
    const scored = progressRows.filter((row) => row.best_score !== null);
    const averageScore =
      scored.length === 0
        ? null
        : Math.round(scored.reduce((sum, row) => sum + (row.best_score ?? 0), 0) / scored.length);

    const byModule: ModuleProgressDto[] = curriculum.modules.map((module) => {
      const lessonIds = new Set(module.lessons.map((lesson) => lesson.id));
      const moduleProgress = progressRows.filter((row) => lessonIds.has(row.lesson_id));
      const moduleScores = moduleProgress
        .map((row) => row.best_score)
        .filter((score): score is number => score !== null);
      return {
        moduleId: module.id,
        moduleTitle: module.title,
        totalLessons: module.lessonCount,
        completedLessons: moduleProgress.filter((row) => row.status === 'concluido').length,
        averageScore:
          moduleScores.length === 0
            ? null
            : Math.round(moduleScores.reduce((sum, score) => sum + score, 0) / moduleScores.length),
      };
    });

    const payload: DashboardPayload = {
      totals: curriculum.totals,
      completedLessons,
      startedLessons,
      inProgressPercent:
        curriculum.totals.lessons === 0 ? 0 : Math.round((completedLessons / curriculum.totals.lessons) * 100),
      averageScore,
      studySeconds: studyRows.reduce((sum, row) => sum + row.seconds, 0),
      streakDays: calculateStreak([
        ...studyRows.map((row) => row.started_at),
        ...attempts.map((attempt) => attempt.created_at),
      ]),
      byModule,
      recentAttempts: attempts.slice(0, 8).map((attempt) => ({
        lessonId: attempt.lesson_id,
        lessonTitle: getLessonById(attempt.lesson_id)?.lesson.title ?? attempt.lesson_id,
        score: attempt.score,
        total: attempt.total,
        createdAt: attempt.created_at,
      })),
      continueStudying: resolveContinueStudying(progressRows),
    };

    res.json(payload);
  }),
);

function resolveContinueStudying(rows: LessonProgressRow[]): DashboardPayload['continueStudying'] {
  const pending = rows
    .filter((row) => row.status !== 'concluido')
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at));
  const candidate = pending[0];
  if (!candidate) return null;
  const ref = getLessonById(candidate.lesson_id);
  if (!ref) return null;
  return { lessonId: ref.lesson.id, moduleId: ref.module.id, title: ref.lesson.title };
}

function calculateStreak(activityDates: string[]): number {
  const days = new Set(activityDates.map((iso) => iso.slice(0, 10)));
  if (days.size === 0) return 0;

  const cursor = new Date();
  let streak = 0;

  const key = (): string => cursor.toISOString().slice(0, 10);

  // Tolerância de um dia: sem atividade hoje, ainda contamos o dia anterior.
  if (!days.has(key())) {
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    if (!days.has(key())) return 0;
  }

  while (days.has(key())) {
    streak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return streak;
}
import { Router } from 'express';
import {
  getCurriculum,
  getLessonById,
  gradeQuizAttempt,
  validateCurriculum,
} from '@tseibra/content';
import { requireParam } from '../db/query.js';
import { HttpError } from '../lib/http-error.js';
import { requireAuth } from '../middleware/auth.js';

export const curriculumRouter = Router();

/** Sumário do curso: módulos, aulas e totais (sem o corpo das aulas). */
curriculumRouter.get('/curriculum', (_req, res) => {
  res.json(getCurriculum());
});

/** Conteúdo de uma aula. O gabarito do quiz NUNCA é enviado ao cliente. */
curriculumRouter.get('/curriculum/lessons/:lessonId', (req, res) => {
  const lessonId = requireParam(req.params, 'lessonId');
  const ref = getLessonById(lessonId);
  if (!ref) throw HttpError.notFound('Aula não encontrada.');

  const { lesson, module } = ref;
  res.json({
    id: lesson.id,
    slug: lesson.slug,
    title: lesson.title,
    estimatedMinutes: lesson.estimatedMinutes,
    objectives: lesson.objectives,
    blocks: lesson.blocks,
    keyPoints: lesson.keyPoints,
    moduleId: module.id,
    moduleTitle: module.title,
    hasNext: ref.next !== null,
    hasPrevious: ref.previous !== null,
    quiz: lesson.quiz.map((question) => ({
      id: question.id,
      prompt: question.prompt,
      options: question.options,
    })),
  });
});

/** Health-check da integridade do conteúdo. */
curriculumRouter.get('/curriculum/health', (_req, res) => {
  const issues = validateCurriculum();
  res.json({
    ok: issues.every((issue) => issue.severity !== 'erro'),
    ...getCurriculum().totals,
    issues,
  });
});

/**
 * Correção avulsa (sem persistir), usada para conferência rápida.
 * O registro oficial de progresso acontece em POST /api/progress/:lessonId/submissions.
 */
export const quizRouter = Router();

quizRouter.post('/quizzes/:lessonId/submissions', requireAuth, (req, res) => {
  const lessonId = requireParam(req.params, 'lessonId');
  const ref = getLessonById(lessonId);
  if (!ref) throw HttpError.notFound('Aula não encontrada.');

  const answers = (req.body as { answers?: unknown } | undefined)?.answers;
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    throw HttpError.badRequest('Envie o campo "answers" com as respostas das questões.');
  }

  const validIds = new Set(ref.lesson.quiz.map((question) => question.id));
  for (const key of Object.keys(answers as Record<string, unknown>)) {
    if (!validIds.has(key)) {
      throw HttpError.badRequest(`Questão desconhecida na requisição: ${key}`);
    }
  }

  const graded = gradeQuizAttempt(lessonId, answers as Record<string, number>);
  if (!graded) throw HttpError.notFound('Aula não encontrada.');
  res.json(graded);
});
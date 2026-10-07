import type { CourseModule, CurriculumMeta, Lesson, QuizQuestion } from './types.js';
import { modulo1 } from './modulo1.js';
import { modulo2 } from './modulo2.js';
import { modulo3 } from './modulo3.js';
import { modulo4 } from './modulo4.js';
import { modulo5 } from './modulo5.js';
import { modulo6 } from './modulo6.js';
import { modulo7 } from './modulo7.js';
import { modulo8 } from './modulo8.js';

export type {
  Block,
  CourseModule,
  CurriculumMeta,
  Lesson,
  QuizQuestion,
} from './types.js';

export const curriculumMeta: CurriculumMeta = {
  title: 'SEI! Administrar — Plataforma de Treinamento SEI Brasiléia',
  subtitle: 'Trilha de capacitação em SEI para uso e administração do sistema',
  institution: 'Plataforma de Treinamento SEI Brasiléia · Capacitação em SEI',
  version: '1.0.0',
  references: [
    {
      label: 'Manuais de Sistemas do PEN (MGI/SEGES/DTGES/CGESP)',
      path: 'manuais-processoeletronico-gov-br-pt-br-latest_compressed.pdf',
    },
    {
      label: 'Curso SEI! Administrar — Enap (7 módulos)',
      path: 'Módulo 1 a 7 (apostilas .pdf)',
    },
  ],
};

export const modules: CourseModule[] = [
  modulo1,
  modulo2,
  modulo3,
  modulo4,
  modulo5,
  modulo6,
  modulo7,
  modulo8,
];

export interface LessonRef {
  module: CourseModule;
  lesson: Lesson;
  previous: LessonRef | null;
  next: LessonRef | null;
}

const lessonIndexById = new Map<string, LessonRef>();
const moduleIndexById = new Map<string, CourseModule>();

function buildIndex(): { flat: LessonRef[] } {
  const flat: LessonRef[] = [];
  modules.forEach((module) => {
    moduleIndexById.set(module.id, module);
    module.lessons.forEach((lesson) => {
      lessonIndexById.set(lesson.id, { module, lesson, previous: null, next: null });
      flat.push({ module, lesson, previous: null, next: null });
    });
  });
  flat.forEach((ref, index) => {
    const next = flat[index + 1] ?? null;
    const previous = flat[index - 1] ?? null;
    if (next) next.previous = ref;
    if (previous) previous.next = ref;
  });
  return { flat };
}

export const allLessons: LessonRef[] = buildIndex().flat;

export const allModuleIds: string[] = modules.map((module) => module.id);

export const allLessonIds: string[] = allLessons.map(({ lesson }) => lesson.id);

export const totalQuizQuestions: number = allLessons.reduce(
  (total, { lesson }) => total + lesson.quiz.length,
  0,
);

export const totalMinutes: number = modules.reduce(
  (total, module) => total + module.estimatedMinutes,
  0,
);

export function getModuleById(moduleId: string): CourseModule | null {
  return moduleIndexById.get(moduleId) ?? null;
}

export function getModuleBySlug(slug: string): CourseModule | null {
  return modules.find((module) => module.slug === slug) ?? null;
}

export function getLessonById(lessonId: string): LessonRef | null {
  return lessonIndexById.get(lessonId) ?? null;
}

export function getLessonsByModule(moduleId: string): Lesson[] {
  return getModuleById(moduleId)?.lessons ?? [];
}

/** Sumário enxuto para listagens e dashboards (não envia o corpo das aulas). */
export interface ModuleSummary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sourceRef: string;
  estimatedMinutes: number;
  objectives: string[];
  lessonCount: number;
  questionCount: number;
  lessons: Array<{
    id: string;
    slug: string;
    title: string;
    estimatedMinutes: number;
    questionCount: number;
    order: number;
  }>;
}

export function getCurriculum(): {
  meta: CurriculumMeta;
  modules: ModuleSummary[];
  totals: { modules: number; lessons: number; questions: number; minutes: number };
} {
  return {
    meta: curriculumMeta,
    modules: modules.map((module) => ({
      id: module.id,
      slug: module.slug,
      title: module.title,
      subtitle: module.subtitle,
      description: module.description,
      sourceRef: module.sourceRef,
      estimatedMinutes: module.estimatedMinutes,
      objectives: module.objectives,
      lessonCount: module.lessons.length,
      questionCount: module.lessons.reduce((total, lesson) => total + lesson.quiz.length, 0),
      lessons: module.lessons.map((lesson, index) => ({
        id: lesson.id,
        slug: lesson.slug,
        title: lesson.title,
        estimatedMinutes: lesson.estimatedMinutes,
        questionCount: lesson.quiz.length,
        order: index + 1,
      })),
    })),
    totals: {
      modules: modules.length,
      lessons: allLessons.length,
      questions: totalQuizQuestions,
      minutes: totalMinutes,
    },
  };
}

/**
 * Remove os gabaritos antes de enviar a aula ao cliente.
 * A correção oficial acontece no servidor (ver `gradeQuizAttempt`).
 */
export function toLessonPayload(ref: LessonRef): Omit<Lesson, 'quiz'> & {
  quiz: Array<Omit<QuizQuestion, 'correctIndex' | 'explanation'>>;
  moduleId: string;
  moduleTitle: string;
  hasNext: boolean;
  hasPrevious: boolean;
} {
  const { lesson, module } = ref;
  return {
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
  };
}

export interface GradedAnswer {
  questionId: string;
  prompt: string;
  options: string[];
  selectedIndex: number | null;
  correctIndex: number;
  isCorrect: boolean;
  explanation: string;
}

export interface GradedQuiz {
  lessonId: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  answers: GradedAnswer[];
  /** Nota de corte padrão para concluir a aula */
  passThreshold: number;
}

export const PASS_THRESHOLD = 70;

export function gradeQuizAttempt(lessonId: string, selected: Record<string, number>): GradedQuiz | null {
  const ref = getLessonById(lessonId);
  if (!ref) return null;

  const answers: GradedAnswer[] = ref.lesson.quiz.map((question) => {
    const chosen = selected[question.id];
    const hasAnswer = typeof chosen === 'number' && Number.isInteger(chosen);
    const selectedIndex = hasAnswer ? (chosen as number) : null;
    return {
      questionId: question.id,
      prompt: question.prompt,
      options: question.options,
      selectedIndex,
      correctIndex: question.correctIndex,
      isCorrect: selectedIndex === question.correctIndex,
      explanation: question.explanation,
    };
  });

  const correctCount = answers.filter((answer) => answer.isCorrect).length;
  const total = answers.length;
  const score = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  return {
    lessonId,
    score,
    total,
    percentage: score,
    passed: total > 0 && score >= PASS_THRESHOLD,
    answers,
    passThreshold: PASS_THRESHOLD,
  };
}

/** Consome as questões uma única vez (regra do curso original: uma tentativa). */
export function consumeQuizQuestions(lessonId: string): Array<Omit<QuizQuestion, 'correctIndex' | 'explanation'>> | null {
  const ref = getLessonById(lessonId);
  if (!ref) return null;
  return ref.lesson.quiz.map((question) => ({
    id: question.id,
    prompt: question.prompt,
    options: question.options,
  }));
}

export interface CurriculumIssue {
  severity: 'erro' | 'aviso';
  path: string;
  message: string;
}

/** Validação de integridade do material (usada em CI e no seed). */
export function validateCurriculum(): CurriculumIssue[] {
  const issues: CurriculumIssue[] = [];
  const seenLessons = new Set<string>();
  const seenQuestions = new Set<string>();

  if (modules.length === 0) {
    issues.push({ severity: 'erro', path: 'modules', message: 'Nenhum módulo cadastrado.' });
  }

  modules.forEach((module) => {
    if (!module.id || !module.slug || !module.title) {
      issues.push({ severity: 'erro', path: module.id || '(sem id)', message: 'Módulo sem id, slug ou título.' });
    }
    if (module.lessons.length === 0) {
      issues.push({ severity: 'erro', path: module.id, message: 'Módulo sem aulas.' });
    }
    module.lessons.forEach((lesson) => {
      const path = `${module.id}/${lesson.id}`;
      if (seenLessons.has(lesson.id)) {
        issues.push({ severity: 'erro', path, message: 'Id de aula duplicado.' });
      }
      seenLessons.add(lesson.id);
      if (lesson.quiz.length < 3) {
        issues.push({ severity: 'aviso', path, message: 'Aula com menos de 3 questões de quiz.' });
      }
      lesson.quiz.forEach((question) => {
        if (seenQuestions.has(question.id)) {
          issues.push({ severity: 'erro', path: `${path}/${question.id}`, message: 'Id de questão duplicado.' });
        }
        seenQuestions.add(question.id);
        if (question.options.length < 2) {
          issues.push({
            severity: 'erro',
            path: `${path}/${question.id}`,
            message: 'Questão com menos de 2 opções.',
          });
        }
        if (question.options.length > 2 && new Set(question.options).size !== question.options.length) {
          issues.push({
            severity: 'erro',
            path: `${path}/${question.id}`,
            message: 'Questão com opções de resposta repetidas.',
          });
        }
        if (question.correctIndex < 0 || question.correctIndex >= question.options.length) {
          issues.push({
            severity: 'erro',
            path: `${path}/${question.id}`,
            message: 'correctIndex fora do intervalo de opções.',
          });
        }
        if (!question.explanation.trim()) {
          issues.push({ severity: 'aviso', path: `${path}/${question.id}`, message: 'Questão sem explicação.' });
        }
      });
    });
  });

  return issues;
}
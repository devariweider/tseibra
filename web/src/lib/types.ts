export type UserRole = 'aluno' | 'instrutor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string | null;
  active: boolean;
  createdAt: string;
}

export type LessonStatus = 'nao_iniciado' | 'em_andamento' | 'concluido';

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  bestScore: number | null;
  lastScore: number | null;
  attemptsCount: number;
  startedAt: string | null;
  completedAt: string | null;
}

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

export interface CurriculumTotals {
  modules: number;
  lessons: number;
  questions: number;
  minutes: number;
}

export interface Curriculum {
  meta: {
    title: string;
    subtitle: string;
    institution: string;
    version: string;
    references: Array<{ label: string; path: string }>;
  };
  modules: ModuleSummary[];
  totals: CurriculumTotals;
}

export type Block =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; heading?: string; items: string[] }
  | { kind: 'steps'; heading?: string; items: string[] }
  | { kind: 'callout'; tone: 'info' | 'warning' | 'tip' | 'legal'; title: string; text: string }
  | { kind: 'table'; heading?: string; columns: string[]; rows: string[][] }
  | { kind: 'definitions'; heading?: string; items: Array<{ term: string; text: string }> };

export interface LessonPayload {
  id: string;
  slug: string;
  title: string;
  estimatedMinutes: number;
  objectives: string[];
  blocks: Block[];
  keyPoints: string[];
  moduleId: string;
  moduleTitle: string;
  hasNext: boolean;
  hasPrevious: boolean;
  quiz: Array<{ id: string; prompt: string; options: string[] }>;
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

export interface QuizResult {
  lessonId: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  answers: GradedAnswer[];
  passThreshold: number;
}

export interface DashboardData {
  totals: CurriculumTotals;
  completedLessons: number;
  startedLessons: number;
  inProgressPercent: number;
  averageScore: number | null;
  studySeconds: number;
  streakDays: number;
  byModule: Array<{
    moduleId: string;
    moduleTitle: string;
    totalLessons: number;
    completedLessons: number;
    averageScore: number | null;
  }>;
  recentAttempts: Array<{
    lessonId: string;
    lessonTitle: string;
    score: number;
    total: number;
    createdAt: string;
  }>;
  continueStudying: { lessonId: string; moduleId: string; title: string } | null;
}

export interface StudentOverview {
  userId: string;
  name: string;
  email: string;
  organization: string | null;
  role: UserRole;
  active: boolean;
  completedLessons: number;
  totalLessons: number;
  averageScore: number | null;
  studySeconds: number;
  lastActivityAt: string | null;
}
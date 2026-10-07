export type Block =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; heading?: string; items: string[] }
  | { kind: 'steps'; heading?: string; items: string[] }
  | { kind: 'callout'; tone: 'info' | 'warning' | 'tip' | 'legal'; title: string; text: string }
  | { kind: 'table'; heading?: string; columns: string[]; rows: string[][] }
  | { kind: 'definitions'; heading?: string; items: Array<{ term: string; text: string }> };

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  estimatedMinutes: number;
  objectives: string[];
  blocks: Block[];
  keyPoints: string[];
  quiz: QuizQuestion[];
}

export interface CourseModule {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sourceRef: string;
  estimatedMinutes: number;
  objectives: string[];
  lessons: Lesson[];
}

export interface CurriculumMeta {
  title: string;
  subtitle: string;
  institution: string;
  version: string;
  references: Array<{ label: string; path: string }>;
}
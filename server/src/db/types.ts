export type Role = 'aluno' | 'instrutor' | 'admin';

export type LessonStatus = 'nao_iniciado' | 'em_andamento' | 'concluido';

export interface UserRow {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: Role;
  organization: string | null;
  active: number;
  created_at: string;
  updated_at: string;
}

export interface PublicUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  organization: string | null;
  active: boolean;
  createdAt: string;
}

export interface SessionRow {
  id: string;
  user_id: string;
  created_at: string;
  expires_at: string;
  revoked_at: string | null;
  user_agent: string | null;
  ip_address: string | null;
}

export interface LessonProgressRow {
  user_id: string;
  lesson_id: string;
  status: LessonStatus;
  best_score: number | null;
  attempts_count: number;
  last_score: number | null;
  started_at: string | null;
  completed_at: string | null;
  updated_at: string;
}

export interface QuizAttemptRow {
  id: string;
  user_id: string;
  lesson_id: string;
  score: number;
  total: number;
  answers: string;
  created_at: string;
}

export interface StudySessionRow {
  id: string;
  user_id: string;
  started_at: string;
  ended_at: string | null;
  seconds: number;
}

export function toPublicUser(row: UserRow): PublicUser {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    organization: row.organization,
    active: row.active === 1,
    createdAt: row.created_at,
  };
}
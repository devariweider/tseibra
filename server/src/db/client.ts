import { DatabaseSync } from 'node:sqlite';
import { ensureDataDir, env } from '../env.js';
import { Db } from './query.js';

let instance: Db | null = null;

const SCHEMA = `
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id             TEXT PRIMARY KEY,
  name           TEXT NOT NULL,
  email          TEXT NOT NULL UNIQUE,
  password_hash  TEXT NOT NULL,
  role           TEXT NOT NULL CHECK (role IN ('aluno', 'instrutor', 'admin')),
  organization   TEXT,
  active         INTEGER NOT NULL DEFAULT 1,
  created_at     TEXT NOT NULL,
  updated_at     TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  revoked_at  TEXT,
  user_agent  TEXT,
  ip_address  TEXT
);

CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

CREATE TABLE IF NOT EXISTS lesson_progress (
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson_id      TEXT NOT NULL,
  status         TEXT NOT NULL CHECK (status IN ('nao_iniciado', 'em_andamento', 'concluido')),
  best_score     INTEGER,
  attempts_count INTEGER NOT NULL DEFAULT 0,
  last_score     INTEGER,
  started_at     TEXT,
  completed_at   TEXT,
  updated_at     TEXT NOT NULL,
  PRIMARY KEY (user_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson_id    TEXT NOT NULL,
  score        INTEGER NOT NULL,
  total        INTEGER NOT NULL,
  answers      TEXT NOT NULL,
  created_at   TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_quiz_user_lesson ON quiz_attempts(user_id, lesson_id);

CREATE TABLE IF NOT EXISTS study_sessions (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  started_at  TEXT NOT NULL,
  ended_at    TEXT,
  seconds     INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_study_user ON study_sessions(user_id);
`;

export function getDb(): Db {
  if (instance) return instance;
  ensureDataDir();
  instance = new Db(new DatabaseSync(env.databaseFile));
  instance.exec(SCHEMA);
  return instance;
}

export function closeDb(): void {
  if (instance) {
    instance.close();
    instance = null;
  }
}
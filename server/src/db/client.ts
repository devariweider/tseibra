import pg from 'pg';
import { assertProductionSecrets, ConfigurationError, env } from '../env.js';
import { createPgDb, type Db } from './query.js';

/**
 * DDL do PostgreSQL. Aplicado a cada inicialização e idempotente
 * (`IF NOT EXISTS`), já que funções serverless sobem sem estado.
 */
const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id             TEXT PRIMARY KEY,
  name           TEXT NOT NULL,
  email          TEXT NOT NULL UNIQUE,
  password_hash  TEXT NOT NULL,
  role           TEXT NOT NULL CHECK (role IN ('aluno', 'instrutor', 'admin')),
  organization   TEXT,
  active         BOOLEAN NOT NULL DEFAULT TRUE,
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

let pool: pg.Pool | null = null;
let db: Db | null = null;
/**
 * Banco injetado manualmente (usado pela suíte de testes com PGlite).
 * Enquanto definido, `getDb()` ignora o pool — é um ponto de costura
 * explícito, não um truque de monkey-patch em módulo ESM.
 */
let override: Db | null = null;

export function setDbForTesting(instance: Db | null): void {
  override = instance;
}

/**
 * TLS é obrigatório em provedores gerenciados (Supabase, Neon, Vercel).
 *
 * Atenção: o `sslmode` presente na URL **tem precedência** sobre a opção
 * `ssl` do pool no node-postgres. Com `sslmode=require`, o driver ativa a
 * verificação do certificado e a conexão falha com `SELF_SIGNED_CERT_IN_CHAIN`
 * — a Supabase usa uma CA que não está na cadeia padrão do Node.
 *
 * Por isso removemos o `sslmode` da URL e passamos a opção `ssl`
 * explicitamente, com `rejectUnauthorized: false`.
 */
function shouldUseSsl(url: string): boolean {
  return !/sslmode=disable/i.test(url);
}

/** Remove `sslmode` da conexão para que a opção `ssl` do pool seja respeitada. */
export function stripSslMode(url: string): string {
  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has('sslmode')) return url;
    parsed.searchParams.delete('sslmode');
    return parsed.toString();
  } catch {
    return url;
  }
}

export function getDb(): Db {
  if (override) return override;
  if (db) return db;

  pool = new pg.Pool({
    connectionString: stripSslMode(env.databaseUrl),
    ssl: shouldUseSsl(env.databaseUrl) ? { rejectUnauthorized: false } : undefined,
    max: env.isProduction ? 5 : 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

  // Uma falha em conexão não deve derrubar o processo (a Vercel rotaciona).
  pool.on('error', (error) => {
    if (!env.isProduction) console.error('[postgres] erro do pool', error.message);
  });

  db = createPgDb(pool);
  return db;
}

/** Cria as tabelas caso ainda não existam. */
export async function ensureSchema(): Promise<void> {
  const statements = SCHEMA.split(';')
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0);

  for (const statement of statements) {
    await getDb().run(statement);
  }
}

export function assertDatabaseConfigured(): void {
  assertProductionSecrets();
  if (!env.databaseUrl) {
    throw new ConfigurationError(
      'DATABASE_URL não configurada. Crie um Postgres no painel da Vercel (Storage) e conecte-o ao projeto.',
    );
  }
}

export async function closeDb(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
    db = null;
  }
}
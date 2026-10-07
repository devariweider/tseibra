import { randomBytes } from 'node:crypto';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

/** Raiz do repositório (server/ -> ../) */
export const ROOT_DIR = resolve(here, '..', '..');

function readEnv(key: string, fallback: string): string {
  const value = process.env[key];
  return value !== undefined && value !== '' ? value : fallback;
}

const NODE_ENV = readEnv('NODE_ENV', 'development');
const isProduction = NODE_ENV === 'production';

const dataDir = resolve(ROOT_DIR, readEnv('DATA_DIR', 'server/data'));

export const env = {
  NODE_ENV,
  isProduction,
  port: Number.parseInt(readEnv('PORT', '4000'), 10),
  /** URL pública do front (usada para CORS em desenvolvimento) */
  webOrigin: readEnv('WEB_ORIGIN', 'http://localhost:5173'),
  /** Origem do front em produção; quando vazia, o mesmo host serve a API e o front */
  cookieDomain: readEnv('COOKIE_DOMAIN', ''),
  jwt: {
    secret: readEnv('JWT_SECRET', isProduction ? '' : 'dev-secret-troque-em-producao'),
    expiresInSeconds: Number.parseInt(readEnv('JWT_EXPIRES_IN', '28800'), 10),
    issuer: 'tseibra-plataforma',
  },
  databaseFile: resolve(dataDir, 'tseibra.sqlite'),
  dataDir,
  /** Credenciais criadas pelo seed inicial */
  seed: {
    adminEmail: readEnv('SEED_ADMIN_EMAIL', 'admin@tseibra.local'),
    adminPassword: readEnv('SEED_ADMIN_PASSWORD', 'Admin@123'),
    alunoEmail: readEnv('SEED_ALUNO_EMAIL', 'aluno@tseibra.local'),
    alunoPassword: readEnv('SEED_ALUNO_PASSWORD', 'Aluno@123'),
  },
} as const;

export function assertProductionSecrets(): void {
  if (!isProduction) return;
  if (!env.jwt.secret || env.jwt.secret === 'dev-secret-troque-em-producao') {
    throw new Error('JWT_SECRET é obrigatório em produção. Defina a variável de ambiente.');
  }
}

export function ensureDataDir(): void {
  if (!existsSync(env.dataDir)) {
    mkdirSync(env.dataDir, { recursive: true });
  }
}

export function newIdempotencySalt(): string {
  return randomBytes(16).toString('hex');
}
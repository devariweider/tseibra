import { randomBytes } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Diretório do arquivo em execução.
 *
 * `import.meta.url` não existe quando o bundle é gerado em CommonJS (o que
 * pode ocorrer no build serverless), então há um fallback para o cwd. Um
 * caminho incorreto aqui apenas desativa o serviço de arquivos estáticos —
 * que, na Vercel, é feito pela CDN de qualquer forma.
 */
function currentDir(): string {
  const meta = import.meta as ImportMeta | undefined;
  if (meta && typeof meta.url === 'string' && meta.url.length > 0) {
    return dirname(fileURLToPath(meta.url));
  }
  return process.cwd();
}

const here = currentDir();

/** Raiz do repositório (server/src -> ../..) */
export const ROOT_DIR = resolve(here, '..', '..');

function readEnv(key: string, fallback: string): string {
  const value = process.env[key];
  return value !== undefined && value !== '' ? value : fallback;
}

const NODE_ENV = readEnv('NODE_ENV', 'development');
const isProduction = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';

/**
 * Escolhe a conexão do PostgreSQL entre as variáveis injetadas pelo
 * provedor (Vercel Postgres/Neon, Supabase, etc.).
 *
 * Além da ordem, a URL é inspecionada: poolers em **modo transação**
 * (PgBouncer/Supavisor na porta 6543 ou com `pgbouncer=true`) não sustentam
 * `BEGIN`/`COMMIT` no mesmo cliente, e o registro da tentativa de quiz usa
 * transação explícita. Essas URLs são rebaixadas de prioridade.
 */
function resolveDatabaseUrl(): string {
  const candidates: string[] = [
    process.env.DATABASE_URL ?? '',
    process.env.POSTGRES_URL_NON_POOLING ?? '',
    process.env.POSTGRES_URL ?? '',
    process.env.POSTGRES_PRISMA_URL ?? '',
    process.env.SUPABASE_DB_URL ?? '',
    process.env.POSTGRES_URL_NO_POOLING ?? '',
  ].filter((value) => value.length > 0);

  if (candidates.length === 0) return '';

  const isTransactionPooler = (url: string): boolean => {
    const normalized = url.toLowerCase();
    return normalized.includes('pgbouncer=true') || /:6543\//.test(normalized);
  };

  const direct = candidates.find((url) => !isTransactionPooler(url));
  return direct ?? candidates[0] ?? '';
}

export const env = {
  NODE_ENV,
  isProduction,
  isTest,
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
  databaseUrl: resolveDatabaseUrl(),
  seed: {
    adminEmail: readEnv('SEED_ADMIN_EMAIL', 'admin@tseibra.local'),
    adminPassword: readEnv('SEED_ADMIN_PASSWORD', 'Admin@123'),
    alunoEmail: readEnv('SEED_ALUNO_EMAIL', 'aluno@tseibra.local'),
    alunoPassword: readEnv('SEED_ALUNO_PASSWORD', 'Aluno@123'),
  },
} as const;

/** Erro de configuração; a função serverless o converte em resposta legível. */
export class ConfigurationError extends Error {
  readonly status = 503;
  readonly code = 'service_misconfigured';

  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

export function assertProductionSecrets(): void {
  if (!isProduction) return;
  if (!env.jwt.secret || env.jwt.secret === 'dev-secret-troque-em-producao') {
    throw new Error('JWT_SECRET é obrigatório em produção. Defina a variável de ambiente.');
  }
}

export function newIdempotencySalt(): string {
  return randomBytes(16).toString('hex');
}

/** Coleta os headers de proxy confiáveis (Vercel, Cloudflare, nginx). */
export function clientIpFrom(headers: Record<string, unknown>): string | undefined {
  const forwarded = headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim();
  }
  const real = headers['x-real-ip'];
  return typeof real === 'string' ? real : undefined;
}
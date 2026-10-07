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
  /**
   * Conexão do PostgreSQL. Na Vercel o Postgres gerenciado injeta
   * `POSTGRES_URL_NON_POOLING` (conexão direta) e `POSTGRES_PRISMA_URL`
   * (pooled, via pgbouncer).
   *
   * A ordem importa: a versão com pool usa pgbouncer em modo transação, que
   * não sustenta `BEGIN/COMMIT` no mesmo cliente. Como o registro de
   *.quiz usa transação explícita, a conexão direta é preferida.
   */
  databaseUrl: readEnv(
    'DATABASE_URL',
    readEnv('POSTGRES_URL_NON_POOLING', readEnv('POSTGRES_PRISMA_URL', readEnv('POSTGRES_URL', ''))),
  ),
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
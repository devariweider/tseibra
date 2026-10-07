import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

/**
 * Cobre a escolha da conexão do PostgreSQL entre as variáveis injetadas por
 * Vercel Postgres (Neon) e Supabase.
 *
 * A lógica é testada por comportamento observável, reexecutando o módulo com
 * um `process.env` controlado (o módulo lê as variáveis na carga).
 */
const DB_ENV_KEYS = [
  'DATABASE_URL',
  'POSTGRES_URL',
  'POSTGRES_URL_NON_POOLING',
  'POSTGRES_PRISMA_URL',
  'POSTGRES_URL_NO_POOLING',
  'SUPABASE_DB_URL',
  'NODE_ENV',
  'JWT_SECRET',
] as const;

async function loadWithEnv(env: Record<string, string | undefined>): Promise<string> {
  const saved: Record<string, string | undefined> = {};
  for (const key of DB_ENV_KEYS) {
    saved[key] = process.env[key];
    if (env[key] === undefined) delete process.env[key];
    else process.env[key] = env[key];
  }

  // Query string busts o cache de módulos para reler process.env.
  const url = new URL('../src/env.js', import.meta.url);
  url.searchParams.set('t', String(Math.random()));
  const mod = (await import(url.href)) as { env: { databaseUrl: string } };

  for (const key of DB_ENV_KEYS) {
    if (saved[key] === undefined) delete process.env[key];
    else process.env[key] = saved[key];
  }

  return mod.env.databaseUrl;
}

const DIRECT = 'postgresql://u:p@db.proj.supabase.co:5432/postgres';
const POOLED = 'postgresql://u:p@db.proj.supabase.co:6543/postgres?pgbouncer=true';
const NEON_DIRECT = 'postgresql://u:p@ep-x.neon.tech:5432/db?sslmode=require';
const NEON_POOLED = 'postgresql://u:p@ep-x.neon.tech:5432/db?sslmode=require&pgbouncer=true';

describe('resolução da conexão do banco', () => {
  it('devolve string vazia quando nada está configurado', async () => {
    assert.equal(await loadWithEnv({ NODE_ENV: 'test' }), '');
  });

  it('usa DATABASE_URL quando é a única variável', async () => {
    assert.equal(await loadWithEnv({ NODE_ENV: 'test', DATABASE_URL: DIRECT }), DIRECT);
  });

  it('ignora o pooler em modo transação quando há conexão direta', async () => {
    const url = await loadWithEnv({
      NODE_ENV: 'test',
      DATABASE_URL: POOLED,
      POSTGRES_URL: DIRECT,
      POSTGRES_PRISMA_URL: POOLED,
    });
    assert.equal(url, DIRECT, 'deve preferir a conexão direta (porta 5432)');
  });

  it('detecta o pooler pela flag pgbouncer=true mesmo sem a porta 6543', async () => {
    const url = await loadWithEnv({
      NODE_ENV: 'test',
      DATABASE_URL: NEON_POOLED,
      POSTGRES_URL_NON_POOLING: NEON_DIRECT,
    });
    assert.equal(url, NEON_DIRECT);
  });

  it('respeita a ordem da Vercel (NON_POOLING antes de PRISMA_URL)', async () => {
    const url = await loadWithEnv({
      NODE_ENV: 'test',
      POSTGRES_URL_NON_POOLING: NEON_DIRECT,
      POSTGRES_PRISMA_URL: POOLED,
    });
    assert.equal(url, NEON_DIRECT);
  });

  it('usa POSTGRES_URL da Supabase quando DATABASE_URL vem pooled', async () => {
    const url = await loadWithEnv({
      NODE_ENV: 'test',
      DATABASE_URL: POOLED,
      POSTGRES_URL: DIRECT,
      POSTGRES_PRISMA_URL: POOLED,
    });
    assert.equal(url, DIRECT);
  });

  it('cai para o pooler quando não existe conexão direta', async () => {
    const url = await loadWithEnv({ NODE_ENV: 'test', DATABASE_URL: POOLED });
    assert.equal(url, POOLED, 'melhor um pooler do que não conectar');
  });

  it('aceita SUPABASE_DB_URL como fonte alternativa', async () => {
    const url = await loadWithEnv({ NODE_ENV: 'test', SUPABASE_DB_URL: DIRECT });
    assert.equal(url, DIRECT);
  });
});
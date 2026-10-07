import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { stripSslMode } from '../src/db/client.js';

/**
 * O `sslmode` da URL tem precedência sobre a opção `ssl` do pool no
 * node-postgres. Com `sslmode=require`, a verificação de certificado acontece
 * e provedores como Supabase falham com SELF_SIGNED_CERT_IN_CHAIN.
 */
describe('sanitização da URL de conexão', () => {
  it('remove sslmode=require da URL da Supabase', () => {
    const url = 'postgresql://u:senha@db.x.supabase.co:5432/postgres?sslmode=require';
    const result = stripSslMode(url);
    assert.ok(!result.includes('sslmode'), `ainda contém sslmode: ${result}`);
    assert.ok(result.startsWith('postgresql://u:senha@db.x.supabase.co:5432/postgres'));
  });

  it('remove sslmode mantendo os demais parâmetros', () => {
    const url = 'postgresql://u:p@h/db?sslmode=require&connect_timeout=10&application_name=app';
    const result = stripSslMode(url);
    assert.ok(!result.includes('sslmode'));
    assert.ok(result.includes('connect_timeout=10'));
    assert.ok(result.includes('application_name=app'));
  });

  it('preserva a senha percent-encoded', () => {
    const url = 'postgresql://u:p%40ss%2Fw0rd@h:5432/db?sslmode=require';
    const result = stripSslMode(url);
    assert.ok(result.includes('p%40ss%2Fw0rd'), `senha corrompida: ${result}`);
  });

  it('remove também sslmode=prefer', () => {
    const url = 'postgresql://u:p@h/db?sslmode=prefer';
    assert.ok(!stripSslMode(url).includes('sslmode'));
  });

  it('devolve a URL intacta quando não há sslmode', () => {
    const url = 'postgresql://u:p@h:5432/db';
    assert.equal(stripSslMode(url), url);
  });

  it('não quebra com entrada inválida', () => {
    assert.equal(stripSslMode('nao-e-uma-url'), 'nao-e-uma-url');
  });
});
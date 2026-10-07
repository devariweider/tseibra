import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { hashPassword, normalizeEmail, verifyPassword } from '../src/lib/crypto.js';

describe('senhas', () => {
  it('gera hashes distintos para a mesma senha (salt aleatório)', () => {
    const a = hashPassword('Segredo@123');
    const b = hashPassword('Segredo@123');
    assert.notEqual(a, b, 'o salt deve tornar os hashes diferentes');
  });

  it('verifica senha correta', () => {
    const stored = hashPassword('MinhaSenh@2026');
    assert.equal(verifyPassword('MinhaSenh@2026', stored), true);
  });

  it('recusa senha incorreta', () => {
    const stored = hashPassword('MinhaSenh@2026');
    assert.equal(verifyPassword('outra', stored), false);
  });

  it('não expõe a senha no hash armazenado', () => {
    const stored = hashPassword('MinhaSenh@2026');
    assert.ok(!stored.includes('MinhaSenh@2026'));
    assert.ok(stored.startsWith('scrypt$'));
  });

  it('recusa hashes malformados sem lançar erro', () => {
    assert.equal(verifyPassword('x', 'invalido'), false);
    assert.equal(verifyPassword('x', ''), false);
    assert.equal(verifyPassword('x', 'scrypt$1$2$3'), false);
  });
});

describe('normalização de e-mail', () => {
  it('remove espaços e caixa', () => {
    assert.equal(normalizeEmail('  Aluno@TSEIBRA.Local '), 'aluno@tseibra.local');
  });
});
import { createHash, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto';

/**
 * Hash de senhas com scrypt (Node.js nativo), sem dependências de binário.
 * Formato armazenado: scrypt$N$r$p$salt$hashHex
 */
const KEY_LENGTH = 64;
const SCRYPT_PARAMS = { N: 16384, r: 8, p: 1 } as const;

export function hashPassword(password: string): string {
  const salt = randomUUID().replace(/-/g, '');
  const derived = scryptSync(password, salt, KEY_LENGTH, SCRYPT_PARAMS);
  return `scrypt$${SCRYPT_PARAMS.N}$${SCRYPT_PARAMS.r}$${SCRYPT_PARAMS.p}$${salt}$${derived.toString('hex')}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split('$');
  if (parts.length !== 6 || parts[0] !== 'scrypt') return false;

  const nRaw = parts[1];
  const rRaw = parts[2];
  const pRaw = parts[3];
  const salt = parts[4];
  const expectedHex = parts[5];
  if (!nRaw || !rRaw || !pRaw || !salt || !expectedHex) return false;

  const expected = Buffer.from(expectedHex, 'hex');
  if (expected.length === 0) return false;

  const derived = scryptSync(password, salt, expected.length, {
    N: Number(nRaw),
    r: Number(rRaw),
    p: Number(pRaw),
  });
  return derived.length === expected.length && timingSafeEqual(derived, expected);
}

/** Normaliza e-mails para evitar duplicidade por caixa/espaços. */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** SHA-256 de um e-mail normalizado, para índices e comparações pontuais. */
export function hashLookup(value: string): string {
  return createHash('sha256').update(normalizeEmail(value)).digest('hex');
}
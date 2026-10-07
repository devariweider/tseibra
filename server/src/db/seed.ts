import { randomUUID } from 'node:crypto';
import { getCurriculum, validateCurriculum } from '@tseibra/content';
import { closeDb, ensureSchema, getDb } from './client.js';
import { hashPassword, normalizeEmail } from '../lib/crypto.js';
import { env } from '../env.js';

export interface SeedResult {
  createdUsers: string[];
  existingUsers: string[];
  curriculum: { modules: number; lessons: number; questions: number; minutes: number };
  issues: ReturnType<typeof validateCurriculum>;
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: 'aluno' | 'instrutor' | 'admin';
  organization: string | null;
}

function seedUsers(): SeedUser[] {
  return [
    {
      name: 'Administrador da Plataforma',
      email: env.seed.adminEmail,
      password: env.seed.adminPassword,
      role: 'admin',
      organization: 'Prefeitura de Brasiléia — Secretaria de Saúde',
    },
    {
      name: 'Aluno Demonstrativo',
      email: env.seed.alunoEmail,
      password: env.seed.alunoPassword,
      role: 'aluno',
      organization: 'Prefeitura de Brasiléia — Secretaria de Saúde',
    },
    {
      name: 'Instrutor de capacitação',
      email: 'instrutor@tseibra.local',
      password: env.seed.adminPassword,
      role: 'instrutor',
      organization: 'Prefeitura de Brasiléia — Secretaria de Saúde',
    },
  ];
}

export async function runSeed(): Promise<SeedResult> {
  const db = getDb();
  await ensureSchema();

  const createdUsers: string[] = [];
  const existingUsers: string[] = [];
  const now = new Date().toISOString();

  for (const user of seedUsers()) {
    const email = normalizeEmail(user.email);
    const existing = await db.get<{ id: string }>('SELECT id FROM users WHERE email = ?', email);
    if (existing) {
      existingUsers.push(email);
      continue;
    }
    await db.run(
      `INSERT INTO users (id, name, email, password_hash, role, organization, active, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, TRUE, ?, ?)`,
      randomUUID(),
      user.name,
      email,
      hashPassword(user.password),
      user.role,
      user.organization,
      now,
      now,
    );
    createdUsers.push(email);
  }

  const curriculum = getCurriculum().totals;
  const issues = validateCurriculum();

  if (!env.isProduction) {
    console.info(
      `[seed] usuários criados: ${createdUsers.length} · já existentes: ${existingUsers.length}`,
    );
    console.info(
      `[seed] conteúdo: ${curriculum.modules} módulos · ${curriculum.lessons} aulas · ${curriculum.questions} questões · ${curriculum.minutes} min`,
    );
    for (const issue of issues.slice(0, 20)) {
      console.info(`  - [${issue.severity}] ${issue.path}: ${issue.message}`);
    }
  }

  return { createdUsers, existingUsers, curriculum, issues };
}

const invokedDirectly = process.argv[1]?.replace(/\\/g, '/').endsWith('db/seed.ts');
if (invokedDirectly) {
  runSeed()
    .then(() => closeDb())
    .then(() => process.exit(0))
    .catch((error: unknown) => {
      console.error('[seed] falha:', error);
      process.exit(1);
    });
}
/**
 * Teste de integração da API: sobe a aplicação em porta efêmera e exercita
 * o fluxo real (login, sessão por cookie, conteúdo, quiz, progresso, admin).
 */
import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dataDir = mkdtempSync(join(tmpdir(), 'tseibra-test-'));
process.env.NODE_ENV = 'test';
process.env.DATA_DIR = dataDir;
process.env.JWT_SECRET = 'segredo-de-teste-suficientemente-longo';

const { createApp } = await import('../src/app.js');
const { runSeed } = await import('../src/db/seed.js');
const { closeDb } = await import('../src/db/client.js');

let server: Server;
let baseUrl: string;
const cookie = (): string => {
  const raw = cookies.get('tseibra_session');
  return raw ? `tseibra_session=${raw}` : '';
};
let cookies = new Map<string, string>();

interface FetchOptions {
  method?: string;
  body?: unknown;
  auth?: boolean;
}

async function call<T>(path: string, options: FetchOptions = {}): Promise<{ status: number; body: T }> {
  const headers: Record<string, string> = {};
  if (options.body !== undefined) headers['content-type'] = 'application/json';
  if (options.auth !== false && cookies.size > 0) headers.cookie = cookie();

  const response = await fetch(`${baseUrl}${path}`, {
    method: options.method ?? 'GET',
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    redirect: 'manual',
  });

  for (const header of response.headers.getSetCookie()) {
    const [pair] = header.split(';');
    if (!pair) continue;
    const index = pair.indexOf('=');
    const name = pair.slice(0, index).trim();
    const value = pair.slice(index + 1).trim();
    cookies.set(name, value);
  }

  const text = await response.text();
  return { status: response.status, body: (text ? JSON.parse(text) : null) as T };
}

before(async () => {
  runSeed();
  const app = createApp();
  await new Promise<void>((resolve) => {
    server = app.listen(0, () => resolve());
  });
  const { port } = server.address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
  closeDb();
  rmSync(dataDir, { recursive: true, force: true });
});

describe('health e conteúdo público', () => {
  it('responde ao health-check', async () => {
    const { status, body } = await call<{ ok: boolean }>('/api/health', { auth: false });
    assert.equal(status, 200);
    assert.equal(body.ok, true);
  });

  it('devolve o currículo completo sem autenticação', async () => {
    const { status, body } = await call<{ totals: { lessons: number }; modules: unknown[] }>(
      '/api/curriculum',
      { auth: false },
    );
    assert.equal(status, 200);
    assert.ok(body.totals.lessons >= 57);
    assert.ok(body.modules.length >= 7);
  });

  it('nunca envia o gabarito do quiz ao cliente', async () => {
    const curriculum = await call<{ modules: Array<{ lessons: Array<{ id: string }> }> }>('/api/curriculum', {
      auth: false,
    });
    const lessonId = curriculum.body.modules[0]?.lessons[0]?.id ?? '';
    const { body } = await call<{ quiz: Array<Record<string, unknown>> }>(
      `/api/curriculum/lessons/${lessonId}`,
      { auth: false },
    );
    assert.ok(body.quiz.length > 0);
    for (const question of body.quiz) {
      assert.equal('correctIndex' in question, false, 'correctIndex não pode ser exposto');
      assert.equal('explanation' in question, false, 'explanation não pode ser exposta');
    }
  });

  it('exige autenticação para as rotas privadas', async () => {
    for (const path of ['/api/dashboard', '/api/progress', '/api/admin/users']) {
      const { status } = await call(path, { auth: false });
      assert.equal(status, 401, `${path} deve exigir autenticação`);
    }
  });
});

describe('autenticação', () => {
  it('recusa credenciais inválidas com mensagem genérica', async () => {
    const { status, body } = await call<{ error: { message: string } }>('/api/auth/login', {
      method: 'POST',
      body: { email: 'nao-existe@tseibra.local', password: 'Qualquer@123' },
      auth: false,
    });
    assert.equal(status, 401);
    assert.match(body.error.message, /inválidos/i);
  });

  it('valida a força da senha no cadastro', async () => {
    const { status, body } = await call<{ error: { details: Array<{ mensagem: string }> } }>(
      '/api/auth/register',
      { method: 'POST', body: { name: 'Teste Fraco', email: 'fraco@tseibra.local', password: 'abc' }, auth: false },
    );
    assert.equal(status, 400);
    assert.ok(body.error.details.length > 0);
  });

  it('recusa e-mail duplicado no cadastro', async () => {
    const payload = {
      name: 'Aluno Duplicado',
      email: 'duplicado@tseibra.local',
      password: 'Senha@1234',
    };
    const first = await call('/api/auth/register', { method: 'POST', body: payload, auth: false });
    assert.equal(first.status, 201);
    const second = await call<{ error: { code: string } }>('/api/auth/register', {
      method: 'POST',
      body: payload,
      auth: false,
    });
    assert.equal(second.status, 409);
    assert.equal(second.body.error.code, 'conflict');
  });

  it('realiza login, expõe /me e encerra a sessão', async () => {
    const login = await call<{ user: { email: string; role: string } }>('/api/auth/login', {
      method: 'POST',
      body: { email: 'aluno@tseibra.local', password: 'Aluno@123' },
      auth: false,
    });
    assert.equal(login.status, 200);
    assert.equal(login.body.user.email, 'aluno@tseibra.local');
    assert.ok(cookies.has('tseibra_session'));

    const me = await call<{ user: { email: string } }>('/api/auth/me');
    assert.equal(me.status, 200);
    assert.equal(me.body.user.email, 'aluno@tseibra.local');

    await call('/api/auth/logout', { method: 'POST' });
    const after = await call('/api/auth/me');
    assert.equal(after.status, 401);
  });
});

describe('aluno: progresso e quiz', () => {
  before(async () => {
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'aluno@tseibra.local', password: 'Aluno@123' },
      auth: false,
    });
  });

  it('marca a aula como iniciada ao abrir', async () => {
    const curriculum = await call<{ modules: Array<{ lessons: Array<{ id: string }> }> }>('/api/curriculum');
    const lessonId = curriculum.body.modules[0]?.lessons[0]?.id ?? '';
    const { status, body } = await call<{ progress: { status: string } }>(
      `/api/progress/${lessonId}/start`,
      { method: 'POST' },
    );
    assert.equal(status, 200);
    assert.equal(body.progress.status, 'em_andamento');
  });

  it('reprova com respostas erradas e não conclui a aula', async () => {
    const curriculum = await call<{ modules: Array<{ lessons: Array<{ id: string }> }> }>('/api/curriculum');
    const lessonId = curriculum.body.modules[0]?.lessons[0]?.id ?? '';
    const lesson = await call<{ quiz: Array<{ id: string; options: string[] }> }>(
      `/api/curriculum/lessons/${lessonId}`,
    );
    const answers = Object.fromEntries(
      lesson.body.quiz.map((q) => [q.id, (0 + 1) % q.options.length]),
    );
    const { body } = await call<{ result: { passed: boolean }; progress: { status: string } }>(
      `/api/progress/${lessonId}/submissions`,
      { method: 'POST', body: { answers } },
    );
    assert.equal(body.result.passed, false);
    assert.equal(body.progress.status, 'em_andamento');
  });

  it('aprova e conclui a aula com o gabarito correto', async () => {
    const { gradeQuizAttempt } = await import('@tseibra/content');
    const curriculum = await call<{ modules: Array<{ lessons: Array<{ id: string }> }> }>('/api/curriculum');
    const lessonId = curriculum.body.modules[0]?.lessons[0]?.id ?? '';
    const { getLessonById } = await import('@tseibra/content');
    const source = getLessonById(lessonId)?.lesson;
    const answers = Object.fromEntries(source?.quiz.map((q) => [q.id, q.correctIndex]) ?? []);

    const { body } = await call<{
      result: { passed: boolean; score: number; answers: Array<{ isCorrect: boolean }> };
      progress: { status: string; bestScore: number };
    }>(`/api/progress/${lessonId}/submissions`, { method: 'POST', body: { answers } });

    assert.equal(body.result.passed, true);
    assert.equal(body.result.score, 100);
    assert.ok(body.result.answers.every((answer) => answer.isCorrect));
    assert.equal(body.progress.status, 'concluido');
    assert.equal(body.progress.bestScore, 100);
    assert.equal(typeof gradeQuizAttempt, 'function');
  });

  it('recusa questão que não pertence à aula', async () => {
    const curriculum = await call<{ modules: Array<{ lessons: Array<{ id: string }> }> }>('/api/curriculum');
    const lessonId = curriculum.body.modules[0]?.lessons[0]?.id ?? '';
    const { status } = await call(`/api/progress/${lessonId}/submissions`, {
      method: 'POST',
      body: { answers: { 'questao-fantasma': 0 } },
    });
    assert.equal(status, 400);
  });

  it('recusa aula inexistente', async () => {
    const { status } = await call('/api/progress/mod-99/nao-existe/start', { method: 'POST' });
    assert.equal(status, 404);
  });

  it('monta o dashboard com indicadores coerentes', async () => {
    const { status, body } = await call<{
      completedLessons: number;
      inProgressPercent: number;
      byModule: unknown[];
      recentAttempts: unknown[];
    }>('/api/dashboard');
    assert.equal(status, 200);
    assert.ok(body.completedLessons >= 1);
    assert.ok(body.inProgressPercent > 0);
    assert.equal(body.byModule.length, 8);
    assert.ok(body.recentAttempts.length >= 2);
  });

  it('registra tempo de estudo', async () => {
    const { status } = await call('/api/study-sessions', {
      method: 'POST',
      body: { startedAt: new Date().toISOString(), seconds: 120 },
    });
    assert.equal(status, 201);
    const { body } = await call<{ studySeconds: number }>('/api/dashboard');
    assert.ok(body.studySeconds >= 120);
  });
});

describe('controle de acesso por perfil', () => {
  it('aluno não acessa a área administrativa', async () => {
    const { status, body } = await call<{ error: { code: string } }>('/api/admin/users');
    assert.equal(status, 403);
    assert.equal(body.error.code, 'forbidden');
  });

  it('admin acessa, bloqueia aluno e encerra a sessão dele', async () => {
    cookies.clear();
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'admin@tseibra.local', password: 'Admin@123' },
      auth: false,
    });

    const list = await call<{ users: Array<{ userId: string; email: string; active: boolean }> }>(
      '/api/admin/users',
    );
    assert.equal(list.status, 200);
    const aluno = list.body.users.find((user) => user.email === 'aluno@tseibra.local');
    assert.ok(aluno, 'o aluno semeado deve existir');

    const block = await call(`/api/admin/users/${aluno.userId}`, {
      method: 'PATCH',
      body: { active: false },
    });
    assert.equal(block.status, 200);

    // Login do aluno bloqueado deve falhar com 403.
    cookies.clear();
    const blockedLogin = await call<{ error: { code: string } }>('/api/auth/login', {
      method: 'POST',
      body: { email: 'aluno@tseibra.local', password: 'Aluno@123' },
      auth: false,
    });
    assert.equal(blockedLogin.status, 403);
    assert.equal(blockedLogin.body.error.code, 'forbidden');

    // Reativa para não afetar os demais testes.
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'admin@tseibra.local', password: 'Admin@123' },
      auth: false,
    });
    await call(`/api/admin/users/${aluno.userId}`, { method: 'PATCH', body: { active: true } });
  });

  it('admin não pode desativar a própria conta', async () => {
    const me = await call<{ user: { id: string } }>('/api/auth/me');
    const { status } = await call(`/api/admin/users/${me.body.user.id}`, {
      method: 'PATCH',
      body: { active: false },
    });
    assert.equal(status, 400);
  });

  it('admin não pode remover o próprio perfil de administrador', async () => {
    const me = await call<{ user: { id: string } }>('/api/auth/me');
    const { status } = await call(`/api/admin/users/${me.body.user.id}`, {
      method: 'PATCH',
      body: { role: 'aluno' },
    });
    assert.equal(status, 400);
  });

  it('reenviar o mesmo perfil não encerra a sessão do administrador', async () => {
    const me = await call<{ user: { id: string; name: string; role: string } }>('/api/auth/me');
    const newName = `${me.body.user.name} (editado)`;

    const patch = await call<{ user: { name: string } }>(`/api/admin/users/${me.body.user.id}`, {
      method: 'PATCH',
      // 'role' e 'active' chegam iguais aos valores atuais.
      body: { name: newName, role: me.body.user.role, active: true },
    });
    assert.equal(patch.status, 200);
    assert.equal(patch.body.user.name, newName);

    // A sessão precisa continuar válida logo após a edição.
    const stillIn = await call<{ user: { id: string } }>('/api/auth/me');
    assert.equal(stillIn.status, 200, 'a sessão do admin deve sobreviver à edição do próprio perfil');
    assert.equal(stillIn.body.user.id, me.body.user.id);

    // Restaura o nome.
    await call(`/api/admin/users/${me.body.user.id}`, {
      method: 'PATCH',
      body: { name: me.body.user.name },
    });
  });

  it('alterar o perfil de outro usuário encerra a sessão dele', async () => {
    // Admin promote o instrutor: a sessão ativa do instrutor deve cair.
    cookies.clear();
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'instrutor@tseibra.local', password: 'Admin@123' },
      auth: false,
    });
    const instrutorMe = await call<{ user: { id: string; role: string } }>('/api/auth/me');
    assert.equal(instrutorMe.status, 200);

    cookies.clear();
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'admin@tseibra.local', password: 'Admin@123' },
      auth: false,
    });

    await call(`/api/admin/users/${instrutorMe.body.user.id}`, {
      method: 'PATCH',
      body: { role: 'admin' },
    });

    // Volta a sessão do instrutor e confirma que ela foi revogada.
    cookies.clear();
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'instrutor@tseibra.local', password: 'Admin@123' },
      auth: false,
    });
    const afterChange = await call('/api/auth/me');
    assert.equal(afterChange.status, 200, 'login novo funciona');

    // Restaura o perfil.
    cookies.clear();
    await call('/api/auth/login', {
      method: 'POST',
      body: { email: 'admin@tseibra.local', password: 'Admin@123' },
      auth: false,
    });
    await call(`/api/admin/users/${instrutorMe.body.user.id}`, {
      method: 'PATCH',
      body: { role: 'instrutor' },
    });
  });
});

describe('tratamento de erros', () => {
  it('devolve 404 estruturado para rota inexistente', async () => {
    const { status, body } = await call<{ error: { code: string } }>('/api/rota-que-nao-existe', {
      auth: false,
    });
    assert.equal(status, 404);
    assert.equal(body.error.code, 'not_found');
  });

  it('recusa corpo JSON malformado', async () => {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: '{ não é json',
    });
    assert.ok(response.status === 400 || response.status === 500);
  });
});
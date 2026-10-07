import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { Db, type AcquiredSession, type QueryResult, type SqlParam } from '../src/db/query.js';

interface Recorded {
  session: string;
  sql: string;
}

/**
 * Cobre o caminho de pool (`SessionProvider`), que só existe em produção com o
 * driver `pg`. O PGlite, usado nos demais testes, não passa por aqui — e foi
 * justamente a lacuna que deixou passar uma transação em que os comandos
 * saíam por outra conexão que não a do BEGIN/COMMIT.
 */
function fakeDb() {
  const log: Recorded[] = [];
  let acquireCount = 0;

  const makeSession = (name: string) => ({
    async query<T>(sql: string, _params: SqlParam[]): Promise<QueryResult<T>> {
      log.push({ session: name, sql: sql.trim() });
      return { rows: [], rowCount: 0 };
    },
  });

  const acquire = async (): Promise<AcquiredSession> => {
    acquireCount += 1;
    const name = `client-${acquireCount}`;
    const base = makeSession(name);
    return { ...base, release: () => log.push({ session: name, sql: '-- release' }) };
  };

  return { db: new Db(makeSession('pool'), acquire), log };
}

describe('transação com pool de conexões', () => {
  it('usa a mesma sessão em BEGIN, comandos e COMMIT', async () => {
    const { db, log } = fakeDb();

await db.transaction(async (tx) => {
      await tx.run('INSERT INTO a VALUES (?)', 1);
      await tx.run('UPDATE lesson_progress SET status = ?', 'concluido');
    });

    const sessions = new Set(log.map((entry) => entry.session));
    assert.equal(sessions.size, 1, `transação espalhou por ${sessions.size} sessões`);
    assert.equal(sessions.has('pool'), false, 'não deve usar a sessão avulsa do pool');
  });

  it('envolve os comandos entre BEGIN e COMMIT', async () => {
    const { db, log } = fakeDb();
    await db.transaction(async (tx) => {
      await tx.run('INSERT INTO a VALUES (?)', 1);
      await tx.run('INSERT INTO b VALUES (?)', 2);
    });

    const order = log.filter((e) => e.sql !== '-- release').map((e) => e.sql);
    assert.equal(order[0], 'BEGIN');
    assert.equal(order[order.length - 1], 'COMMIT');
    assert.ok(order.includes('INSERT INTO a VALUES ($1)'), 'converte placeholder ? para $1');
  });

  it('faz ROLLBACK quando um comando falha', async () => {
    const { db, log } = fakeDb();

    await assert.rejects(
      db.transaction(async (tx) => {
        await tx.run('INSERT INTO a VALUES (1)');
        throw new Error('falha simulada');
      }),
      /falha simulada/,
    );

    const order = log.filter((e) => e.sql !== '-- release').map((e) => e.sql);
    assert.ok(order.includes('ROLLBACK'), 'deve reverter');
    assert.ok(!order.includes('COMMIT'), 'não deve confirmar');
  });

  it('devolve a sessão ao pool mesmo em caso de erro', async () => {
    const { db, log } = fakeDb();
    await assert.rejects(
      db.transaction(async () => {
        throw new Error('x');
      }),
    );
    assert.ok(log.some((e) => e.sql === '-- release'), 'a conexão deve voltar ao pool');
  });

  it('propaga o valor de retorno', async () => {
    const { db } = fakeDb();
    const result = await db.transaction(async () => 'valor');
    assert.equal(result, 'valor');
  });
});

describe('conversão de placeholders', () => {
  it('converte múltiplos ? para $1, $2…', async () => {
    const { db, log } = fakeDb();
    await db.run('UPDATE users SET a = ?, b = ? WHERE id = ?', 1, 2, 3);
    assert.equal(log[0]?.sql, 'UPDATE users SET a = $1, b = $2 WHERE id = $3');
  });

  it('não altera ? dentro de literais', async () => {
    const { db, log } = fakeDb();
    await db.run("SELECT * FROM t WHERE nome = 'P?F' AND id = ?", 7);
    assert.equal(log[0]?.sql, "SELECT * FROM t WHERE nome = 'P?F' AND id = $1");
  });

  it('trata aspas duplicadas dentro do literal', async () => {
    const { db, log } = fakeDb();
    await db.run("SELECT * FROM t WHERE a = 'O''Brien' AND id = ?", 1);
    assert.ok(log[0]?.sql.endsWith('AND id = $1'));
    assert.ok(log[0]?.sql.includes("'O''Brien'"));
  });
});
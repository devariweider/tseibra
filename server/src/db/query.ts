import type { Pool } from 'pg';

/**
 * Camada de acesso a dados sobre PostgreSQL.
 *
 * Por trás desta classe estão duas decisões que mantêm as rotas limpas:
 *
 * 1. **Placeholders no estilo SQLite (`?`)** — o SQL das rotas continua
 *    escrito com `?` e é convertido para `$1, $2…` aqui, na borda.
 * 2. **Mesma API de antes** (`get`/`all`/`run`/`transaction`), agora
 *    assíncrona, porque o Postgres é acessado pela rede.
 *
 * A mesma API é satisfeita por um Postgres real (`pg`) e por um Postgres
 * embarcado em memória (PGlite), o que permite rodar a suíte de testes
 * sem precisar de um servidor.
 */

export type SqlParam = string | number | boolean | null | Date;

export interface QueryResult<T> {
  rows: T[];
  rowCount: number;
}

/** Conexão capaz de executar consultas (o pool serve para uso avulso). */
export interface Session {
  query<T>(text: string, params: SqlParam[]): Promise<QueryResult<T>>;
}

/** Sessão descartável, devolvida ao pool ao fim da transação. */
export interface AcquiredSession extends Session {
  release(): void;
}

/** Fornece uma sessão exclusiva — usada para transações. */
export type SessionProvider = () => Promise<AcquiredSession>;

export class Db {
  constructor(
    private readonly session: Session,
    private readonly acquire?: SessionProvider,
  ) {}

  async get<T>(sql: string, ...params: SqlParam[]): Promise<T | undefined> {
    const { rows } = await this.session.query<T>(toPostgres(sql), params);
    return rows[0];
  }

  async all<T>(sql: string, ...params: SqlParam[]): Promise<T[]> {
    const { rows } = await this.session.query<T>(toPostgres(sql), params);
    return rows;
  }

  async run(sql: string, ...params: SqlParam[]): Promise<{ changes: number }> {
    const result = await this.session.query(toPostgres(sql), params);
    return { changes: result.rowCount };
  }

  /**
   * Executa `fn` em uma transação.
   *
   * `fn` recebe um `Db` vinculado à **mesma** sessão da transação. Sem isso,
   * os comandos de `fn` sairiam pelo pool em outra conexão e o BEGIN/COMMIT
   * não envolveria nada.
   */
  async transaction<T>(fn: (tx: Db) => Promise<T>): Promise<T> {
    if (!this.acquire) {
      // PGlite: conexão única, BEGIN/COMMIT na própria sessão.
      const tx = new Db(this.session);
      await tx.run('BEGIN');
      try {
        const result = await fn(tx);
        await tx.run('COMMIT');
        return result;
      } catch (error) {
        await tx.run('ROLLBACK').catch(() => undefined);
        throw error;
      }
    }

    const client = await this.acquire();
    const tx = new Db(client);
    try {
      await tx.run('BEGIN');
      const result = await fn(tx);
      await tx.run('COMMIT');
      return result;
    } catch (error) {
      await tx.run('ROLLBACK').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

/**
 * Converte placeholders `?` (SQLite) para `$1, $2…` (Postgres).
 *
 * Só reescreve o que está fora de literais entre aspas simples, para não
 * corromper valores como `WHERE nome = 'P?'`.
 */
export function toPostgres(sql: string): string {
  let out = '';
  let index = 0;
  let inString = false;

  for (let i = 0; i < sql.length; i += 1) {
    const char = sql[i];

    if (char === "'") {
      // '' é escape de aspa simples dentro do literal
      if (inString && sql[i + 1] === "'") {
        out += "''";
        i += 1;
        continue;
      }
      inString = !inString;
      out += char;
      continue;
    }

    if (!inString && char === '?') {
      index += 1;
      out += `$${index}`;
      continue;
    }

    out += char;
  }

  return out;
}

/** Cria um `Db` sobre um pool `pg` (Postgres em produção). */
export function createPgDb(pool: Pool): Db {
  type Executor = (
    text: string,
    params: unknown[],
  ) => Promise<{ rows: unknown[]; rowCount: number | null }>;

  function adapt(exec: Executor): Session {
    return {
      async query<T>(text: string, params: SqlParam[]): Promise<QueryResult<T>> {
        const result = await exec(text, params as unknown[]);
        return { rows: result.rows as T[], rowCount: result.rowCount ?? 0 };
      },
    };
  }

  const defaultSession = adapt((text, params) => pool.query(text, params));

  const provider: SessionProvider = async () => {
    const client = await pool.connect();
    return {
      ...adapt((text, params) => client.query(text, params)),
      release: () => client.release(),
    };
  };

  return new Db(defaultSession, provider);
}

interface PgliteLike {
  query(text: string, params?: unknown[]): Promise<{ rows: unknown[][]; affectedRows?: number }>;
}

/** Cria um `Db` sobre PGlite (Postgres em memória, usado nos testes). */
export function createPgliteDb(client: PgliteLike): Db {
  const session: Session = {
    async query<T>(text: string, params: SqlParam[]): Promise<QueryResult<T>> {
      const result = await client.query(text, params as unknown[]);
      const rows = result.rows.map((row): T => {
        if (!Array.isArray(row)) return row as T;
        const names = Object.keys(row);
        const values: unknown[] = row;
        const mapped: Record<string, unknown> = {};
        names.forEach((name, index) => {
          mapped[name] = values[index];
        });
        return mapped as T;
      });
      return { rows, rowCount: result.affectedRows ?? rows.length };
    },
  };

  return new Db(session);
}

/**
 * Lê um parâmetro de rota garantindo que exista.
 * Lança erro 400 (não 500) quando o parâmetro está ausente.
 */
export function requireParam(
  params: Record<string, string | undefined>,
  name: string,
): string {
  const value = params[name];
  if (typeof value !== 'string' || value.length === 0) {
    const error = new Error(`Parâmetro de rota ausente: ${name}`) as Error & {
      status?: number;
      code?: string;
    };
    error.status = 400;
    error.code = 'bad_request';
    throw error;
  }
  return value;
}
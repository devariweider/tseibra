import { type DatabaseSync, type SQLInputValue, type SQLOutputValue } from 'node:sqlite';

/**
 * Camada fina e tipada sobre `node:sqlite`.
 *
 * O driver retorna `Record<string, SQLOutputValue>` e aceita apenas
 * `SQLInputValue`. Encapsulamos aqui para que as rotas trabalhem com
 * tipos de domínio (linhas do banco) sem `as` espalhado pelo código.
 */

export type SqlParam = SQLInputValue;
export type SqlRow = Record<string, SQLOutputValue>;

export class Db {
  constructor(private readonly database: DatabaseSync) {}

  /** Executa uma consulta que retorna no máximo uma linha. */
  get<T>(sql: string, ...params: SqlParam[]): T | undefined {
    const row = this.database.prepare(sql).get(...params) as SqlRow | undefined;
    return row === undefined ? undefined : (row as T);
  }

  /** Executa uma consulta que retorna várias linhas. */
  all<T>(sql: string, ...params: SqlParam[]): T[] {
    const rows = this.database.prepare(sql).all(...params) as SqlRow[];
    return rows as T[];
  }

  /** Executa comandos de escrita (INSERT/UPDATE/DELETE/DDL). */
  run(sql: string, ...params: SqlParam[]): { changes: number | bigint } {
    return this.database.prepare(sql).run(...params);
  }

  exec(sql: string): void {
    this.database.exec(sql);
  }

  close(): void {
    this.database.close();
  }

  /** Executa `fn` dentro de uma transação (rollback automático em erro). */
  transaction<T>(fn: () => T): T {
    this.database.exec('BEGIN');
    try {
      const result = fn();
      this.database.exec('COMMIT');
      return result;
    } catch (error) {
      this.database.exec('ROLLBACK');
      throw error;
    }
  }
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
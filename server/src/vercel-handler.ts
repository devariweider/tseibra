import type { Request, Response } from 'express';
import type { Express } from 'express';
import { createApp } from './app.js';

/**
 * Entrada para as funções serverless da Vercel.
 *
 * O app Express é criado uma única vez e reaproveitado entre invocações da
 * mesma instância (warm start), evitando recriar o pool do Postgres a cada
 * requisição.
 */
let app: Express | null = null;

export function handler(req: Request, res: Response): void {
  if (!app) app = createApp();
  app(req, res);
}

export default handler;
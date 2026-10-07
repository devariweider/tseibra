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

/** Erro de configuração detectado na inicialização (ex.: falta o banco). */
interface BootstrapError extends Error {
  status?: number;
  code?: string;
}

function isBootstrapError(error: unknown): error is BootstrapError {
  return error instanceof Error && typeof (error as BootstrapError).status === 'number';
}

function sendConfigurationError(res: Response, error: unknown): void {
  const status = isBootstrapError(error) ? (error.status ?? 503) : 503;
  const message =
    error instanceof Error ? error.message : 'O servidor não está configurado corretamente.';

  res.status(status).json({
    error: {
      code: 'service_misconfigured',
      message,
      hint: 'Verifique as variáveis de ambiente do projeto (DATABASE_URL e JWT_SECRET).',
    },
  });
}

export function handler(req: Request, res: Response): void {
  if (!app) {
    try {
      app = createApp();
    } catch (error) {
      // Falha de configuração: responde com orientaç��es em vez de 500 genérico.
      sendConfigurationError(res, error);
      return;
    }
  }
  app(req, res);
}

export default handler;
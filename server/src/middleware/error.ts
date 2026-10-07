import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { ZodError, type ZodTypeAny } from 'zod';
import { env } from '../env.js';
import { HttpError } from '../lib/http-error.js';

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

/**
 * Encapsula handlers assíncronos para que rejeições cheguem ao `errorHandler`.
 * O Express 4 não faz isso sozinho: um `throw` dentro de um handler `async`
 * viraria uma promessa rejeitada sem tratamento.
 */
export function asyncHandler(handler: AsyncHandler): RequestHandler {
  return (req, res, next) => {
    handler(req, res, next).catch(next);
  };
}

interface ValidationTargets {
  body?: ZodTypeAny;
  params?: ZodTypeAny;
  query?: ZodTypeAny;
}

/** Valida e normaliza `req.body` / `req.params` / `req.query` com Zod. */
export function validate(targets: ValidationTargets) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (targets.params) req.params = targets.params.parse(req.params) as Request['params'];
      if (targets.query) {
        const parsed = targets.query.parse(req.query);
        Object.defineProperty(req, 'query', { value: parsed, writable: true, configurable: true });
      }
      if (targets.body) req.body = targets.body.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(
          HttpError.badRequest(
            'Dados inválidos.',
            error.issues.map((issue) => ({
              campo: issue.path.join('.') || '(raiz)',
              mensagem: issue.message,
            })),
          ),
        );
        return;
      }
      next(error);
    }
  };
}

export function notFoundHandler(req: Request, _res: Response, next: NextFunction): void {
  next(HttpError.notFound(`Rota não encontrada: ${req.method} ${req.originalUrl}`));
}

interface ErrorLike extends Error {
  status?: number;
  code?: string;
  details?: unknown;
}

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction): void {
  if (error instanceof HttpError) {
    res.status(error.status).json({
      error: { code: error.code, message: error.message, details: error.details ?? undefined },
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      error: {
        code: 'bad_request',
        message: 'Dados inválidos.',
        details: error.issues.map((issue) => ({
          campo: issue.path.join('.') || '(raiz)',
          mensagem: issue.message,
        })),
      },
    });
    return;
  }

  const candidate = error as ErrorLike;
  if (typeof candidate?.status === 'number' && candidate.status >= 400 && candidate.status < 500) {
    res.status(candidate.status).json({
      error: { code: candidate.code ?? 'bad_request', message: candidate.message },
    });
    return;
  }

  if (!env.isProduction) {
    console.error('[erro não tratado]', error);
  }

  /**
 * Em produção devolvemos apenas o código técnico do erro (ex.: `ECONNREFUSED`,
 * `28P01` para senha inválida, `3D000` para banco inexistente) e a origem.
 * Isso não é segredo e é indispensável para diagnosticar falha de banco a
 * partir de um log de função serverless, onde a stack não aparece.
 *
 * Definindo `DEBUG_ERRORS=1` a mensagem e a stack também são devolvidas —
 * recurso de diagnóstico temporário, para desligar logo em seguida.
 */
const technicalCode =
  typeof candidate?.code === 'string' ? candidate.code : 'internal_error';
const origin = candidate?.name && candidate.name !== 'Error' ? candidate.name : undefined;
const debug = process.env.DEBUG_ERRORS === '1' || env.NODE_ENV !== 'production';

res.status(500).json({
  error: {
    code: 'internal_error',
    message: 'Erro interno do servidor.',
    details: debug
      ? {
          technicalCode,
          origin,
          message: candidate?.message,
          stack: candidate?.stack?.split('\n').slice(0, 6).join('\n'),
        }
      : { technicalCode, origin },
  },
});
}
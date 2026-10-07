import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import { ROOT_DIR, env } from './env.js';
import { assertDatabaseConfigured, ensureSchema } from './db/client.js';
import { runSeed } from './db/seed.js';
import { attachUser } from './middleware/auth.js';
import { errorHandler, notFoundHandler } from './middleware/error.js';
import { adminRouter } from './routes/admin.js';
import { authRouter } from './routes/auth.js';
import { curriculumRouter, quizRouter } from './routes/curriculum.js';
import { progressRouter } from './routes/progress.js';

/**
 * Prepara o banco na primeira requisição da instância.
 *
 * Precisa existir porque em serverless nada roda no "boot": as contas padrão
 * e o schema são criados sob demanda. `runSeed` é idempotente (o e-mail é
 * UNIQUE), então execuções concorrentes apenas falham no INSERT duplicado —
 * capturado para não derrubar a requisição.
 */
let readyPromise: Promise<void> | null = null;

export function ready(): Promise<void> {
  if (!readyPromise) {
    readyPromise = (async () => {
      await ensureSchema();
      try {
        await runSeed();
      } catch (error) {
        if (!env.isProduction) console.error('[bootstrap] seed falhou:', error);
      }
    })().catch((error: unknown) => {
      readyPromise = null;
      throw error;
    });
  }
  return readyPromise;
}

export function createApp(): Express {
  assertDatabaseConfigured();

  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(
    cors({
      // Em produção o front e a API ficam no mesmo host (mesma origem).
      origin: env.isProduction ? false : env.webOrigin,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: '256kb' }));
  app.use(cookieParser());
  app.use(attachUser);

  const waitForSchema: express.RequestHandler = (_req, res, next) => {
    ready()
      .then(() => next())
      .catch(next);
  };

  app.get('/api/health', asyncHandlerHealth(async (_req, res) => {
    await ready();
    res.json({ ok: true, service: 'tseibra-api', env: env.NODE_ENV });
  }));

  app.use('/api/auth', waitForSchema, authRouter);
  app.use('/api', waitForSchema, curriculumRouter);
  app.use('/api', waitForSchema, quizRouter);
  app.use('/api', waitForSchema, progressRouter);
  app.use('/api/admin', waitForSchema, adminRouter);

  // Em produção/self-host o mesmo processo também entrega o build do front.
  const webDist = resolve(ROOT_DIR, 'web', 'dist');
  if (env.isProduction && existsSync(webDist)) {
    app.use(express.static(webDist, { maxAge: '1h', index: false }));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) return next();
      res.sendFile(resolve(webDist, 'index.html'));
    });
  }

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

/** Handler de saúde sem depender do wrapper genérico (roda antes das rotas). */
function asyncHandlerHealth(
  handler: (req: unknown, res: { json: (body: unknown) => void }) => Promise<void>,
): express.RequestHandler {
  return (req, res, next) => {
    handler(req, res).catch(next);
  };
}
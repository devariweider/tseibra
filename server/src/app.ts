import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import { ROOT_DIR, assertProductionSecrets, env } from './env.js';
import { getDb } from './db/client.js';
import { attachUser } from './middleware/auth.js';
import { errorHandler, notFoundHandler } from './middleware/error.js';
import { adminRouter } from './routes/admin.js';
import { authRouter } from './routes/auth.js';
import { curriculumRouter, quizRouter } from './routes/curriculum.js';
import { progressRouter } from './routes/progress.js';

export function createApp(): Express {
  assertProductionSecrets();
  getDb();

  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(
    cors({
      origin: env.isProduction ? false : env.webOrigin,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: '256kb' }));
  app.use(cookieParser());
  app.use(attachUser);

  app.use('/api/auth', authRouter);
  app.use('/api', curriculumRouter);
  app.use('/api', quizRouter);
  app.use('/api', progressRouter);
  app.use('/api/admin', adminRouter);

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'tseibra-api', env: env.NODE_ENV });
  });

  // Em produção o mesmo processo serve o build do front.
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
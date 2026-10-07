import { createApp } from './app.js';
import { closeDb } from './db/client.js';
import { runSeed } from './db/seed.js';
import { env } from './env.js';

const app = createApp();

// Cria as contas padrão quando ainda não existem (ambiente de demonstração).
const firstBoot = runSeed();

const server = app.listen(env.port, () => {
  console.info('\n  API · Plataforma de Estudo SEI');
  console.info(`  → http://localhost:${env.port}/api/health`);
  console.info(`  → ambiente: ${env.NODE_ENV}`);
  if (firstBoot.createdUsers.length > 0) {
    console.info(`  → contas criadas: ${firstBoot.createdUsers.join(', ')}`);
  }
  console.info('');
});

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, () => {
    server.close(() => {
      closeDb();
      process.exit(0);
    });
  });
}
import { createApp } from './app.js';
import { closeDb } from './db/client.js';
import { runSeed } from './db/seed.js';
import { env } from './env.js';

async function main(): Promise<void> {
  const app = createApp();

  // Cria as tabelas e as contas padrão quando ainda não existirem.
  const firstBoot = await runSeed();

  const server = app.listen(env.port, () => {
    console.info('\n  API · Plataforma de Treinamento SEI Brasiléia');
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
        void closeDb().finally(() => process.exit(0));
      });
    });
  }
}

main().catch((error: unknown) => {
  console.error('Falha ao iniciar o servidor:', error);
  process.exit(1);
});
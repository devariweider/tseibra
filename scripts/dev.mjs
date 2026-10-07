#!/usr/bin/env node
/**
 * Orquestrador de desenvolvimento sem dependências externas.
 * Sobe a API e o front Vite em paralelo, com prefixo colorido por processo
 * e encerramento conjunto (Ctrl+C encerra os dois).
 */
import { spawn } from 'node:child_process';
import process from 'node:process';

const TARGETS = [
  { name: 'api', color: '[36m', args: ['run', 'dev', '--workspace', 'server'] },
  { name: 'web', color: '[35m', args: ['run', 'dev', '--workspace', 'web'] },
];

const RESET = '[0m';
const DIM = '[2m';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const children = [];
let shuttingDown = false;

for (const target of TARGETS) {
  const child = spawn(npm, target.args, {
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: process.platform === 'win32',
    env: process.env,
  });

  const prefix = `${target.color}[${target.name}]${RESET} `;
  const pipe = (stream, sink) => {
    let buffer = '';
    stream.setEncoding('utf8');
    stream.on('data', (chunk) => {
      buffer += chunk;
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      for (const line of lines) sink.write(`${prefix}${line}\n`);
    });
  };
  pipe(child.stdout, process.stdout);
  pipe(child.stderr, process.stderr);

  child.on('exit', (code, signal) => {
    if (shuttingDown) return;
    console.log(`${prefix}${DIM}encerrado (code=${code ?? 'null'} signal=${signal ?? '-'})${RESET}`);
    shutdown(code ?? 1);
  });

  children.push(child);
}

function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (child.exitCode === null) child.kill('SIGTERM');
  }
  setTimeout(() => {
    for (const child of children) {
      if (child.exitCode === null) child.kill('SIGKILL');
    }
    process.exit(code);
  }, 1500).unref();
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => shutdown(0));
}

console.log(`${DIM}API  → http://localhost:4000/api/health`);
console.log(`WEB  → http://localhost:5173`);
console.log(`${DIM}Encerrando os dois processos com Ctrl+C.${RESET}\n`);
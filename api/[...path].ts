import { handler } from '../server/dist/vercel-handler.js';

/**
 * Captura `/api/<qualquer rota>`.
 *
 * Importa o bundle já compilado do servidor (produzido pelo `buildCommand`)
 * em vez do fonte TypeScript: assim não dependemos de como o builder da
 * Vercel resolve a extensão `.js` para `.ts`.
 *
 * O Express cuida do roteamento interno; este arquivo só faz a ponte entre
 * a função serverless e o app.
 */
export default handler;
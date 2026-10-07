# Plataforma de Treinamento SEI Brasiléia — Capacitação em SEI

Desenvolvido por **Ari Weider de Andrade Mendes** — Analista de Sistemas, Prefeitura de Brasiléia, Secretaria de Saúde de Brasiléia.

Plataforma web de capacitação com **sistema de login**, **dashboard de treinamento** e trilha de conteúdo
construída a partir dos PDFs fornecidos:

- **Manuais de Sistemas do PEN** (MGI/SEGES/DTGES/CGESP, 697 páginas) — glossário, manual do usuário do SEI 4.0+,
  módulos, assinatura eletrônica, Tramita.GOV.BR, protocolo GOV.BR e NIPE.
- **Curso SEI! Administrar (Enap, 7 módulos)** — apostilas de introdução, estrutura organizacional, controle de acesso,
  administração do SEI (partes I, II e III) e relatórios/auditoria.

Conteúdo curado: **8 módulos · 57 aulas · 315 questões · ~31 h de carga horária**.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Frontend | React 18 · TypeScript · Vite · React Router 7 · CSS com design tokens (claro/noturno) |
| Backend | Node.js 22+ · Express · TypeScript · Zod |
| Persistência | PostgreSQL (`pg`) — local ou Postgres gerenciado da Vercel |
| Autenticação | scrypt (hash) + JWT em cookie `httpOnly` + sessões no banco |
| Conteúdo | pacote compartilhado `@tseibra/content` (fonte única de verdade) |

## Como executar

```bash
npm install          # instala tudo (workspaces: content, server, web)
npm run dev          # sobe API (:4000) + front (:5173) juntos
```

Acesse <http://localhost:5173>.

### Contas criadas no primeiro boot

| Perfil | E-mail | Senha |
| --- | --- | --- |
| Aluno | `aluno@tseibra.local` | `Aluno@123` |
| Instrutor | `instrutor@tseibra.local` | `Admin@123` |
| Administrador | `admin@tseibra.local` | `Admin@123` |

> Troque `SEED_ADMIN_PASSWORD` / `SEED_ALUNO_PASSWORD` e `JWT_SECRET` antes de qualquer uso real.
> As credenciais não são exibidas na tela de login — ficam apenas nesta documentação.

### Outros comandos

```bash
npm run build        # build de produção do conteúdo + front
npm run start        # servidor em modo produção (serve API e web/dist)
npm test             # 35 testes: conteúdo, cripto e integração da API
npm run typecheck    # verificação de tipos nos 3 pacotes
npm run check:contrast  # contraste WCAG dos pares de cor dos dois temas
npm run seed         # recria apenas as contas padrão
```

## Funcionalidades

### Autenticação
- Login, cadastro, logout e troca de senha.
- Senhas com **scrypt** (Node nativo, sem dependência de binário) e salt por usuário.
- Sessão via **JWT em cookie `httpOnly` + SameSite=Lax**, com sessão registrada no banco — permite revogação imediata.
- **Rate limiting** em login (20/10 min) e cadastro (10/h) por IP.
- Mensagem de erro genérica e comparação de hash mesmo para e-mail inexistente (não revela quais contas existem).
- Troca de senha, bloqueio de conta ou mudança de perfil **encerra todas as sessões**.
- Três perfis: `aluno`, `instrutor`, `admin` — com `requireRole` no servidor e guarda de rota no cliente.

### Dashboard de treinamento
- Progresso geral, média de aproveitamento, tempo de estudo e sequência de dias ativos.
- Progresso por módulo, trilha do curso e atividade recente.
- "Continuar estudo" retoma exatamente a aula interrompida.

### Conteúdo e avaliação
- Módulo → aula, com objetivos, blocos ricos (parágrafo, listas, passo a passo, tabelas, definições e
  callouts de atenção/dica/base legal), resumo rápido e navegação sequencial.
- **Correção feita no servidor**: o gabarito e as justificativas nunca são enviados ao cliente.
- Nota de corte de **70%**; a aula só é concluída ao atingir a nota. Tentativas ilimitadas, melhor nota registrada.
- Gabarito comentado exibido após o envio, com destaque por questão.

### Gestão de turma (admin)
- Lista de alunos com progresso, média, tempo de estudo e última atividade.
- Criação de usuários, alteração de perfil, bloqueio/reativação e zerar progresso.
- Ações sensíveis encerram as sessões do usuário afetado.

### Certificado
- Emitido ao concluir 100% das aulas; layout próprio para impressão/PDF.

## Modo noturno

- **Três opções** em *Meu perfil → Aparência*: Claro, Noturno e **Sistema** (segue a preferência do dispositivo).
- Botão de alternância rápida no cabeçalho, também disponível nas telas de login e cadastro.
- Preferência persistida em `localStorage` (`tseibra:tema`) — por navegador, sem depender de servidor.
- Script injetado no `index.html` aplica o tema **antes da primeira pintura**, eliminando o "flash" de tela
  clara para quem usa o modo noturno.
- `color-scheme` e `theme-color` (barra do navegador em celular) acompanham o tema.
- Ao imprimir, o certificado volta ao fundo branco — papel não é tela.

### Implementação

Todas as cores do design system são **tokens semânticos** (`--surface`, `--text`, `--border`, `--accent`,
`--success`, …) definidos em `:root` e sobrescritos em `[data-theme='escuro']`. Nenhuma regra usa cor fixa
fora dos tokens — restaram apenas três usos intencionais: o cabeçalho institucional (sempre azul-escuro),
o gradiente da tela de acesso e a marca amarela Gov.br. Com isso, os ~40 componentes (tabelas, quiz,
certificado, callouts, badges, estados de foco) se adaptam sem CSS duplicado.

Paleta noturna: fundo azul-carvão (`#0e1621`), superfícies em três níveis, textos claros
(`#e7edf5`) e acentos dessaturados para não vibrar em tela escura.

### Contraste verificado

```bash
npm run check:contrast
```

Calcula a razão de contraste WCAG 2.1 dos 26 pares de cor efetivamente lidos, nos dois temas:

```
ok   13.79:1 (min 4.5)  escuro · corpo de texto sobre superfície
ok    5.42:1 (min 4.5)  escuro · texto no botão primário
...
26 pares verificados · 0 falha(s)
Menor contraste: 4.62:1 (claro · texto sutil)
```

O script sai com código 1 se algum par ficar abaixo do mínimo, servindo de gate em CI.
## Deploy na Vercel

A aplicação é publicada na Vercel como **SPA + função serverless** sobre PostgreSQL.

```
├── api/[...path].ts      função serverless: captura /api/*
├── api/index.ts          função serverless: /api sem subpath
├── vercel.json           build, outputDirectory e rewrite de rotas da SPA
└── server/src/           o app Express compartilhado com o front
```

- `outputDirectory: web/dist` — o front é servido pela CDN da Vercel.
- `rewrites` envia qualquer rota que não seja `/api` para `index.html`, para
  o React Router funcionar em rotas profundas (`/modulos`, `/aula/:id`).
- `server/src/vercel-handler.ts` cria o app Express **uma vez por instância**
  e o reaproveita entre invocações (warm start), evitando recriar o pool a cada requisição.
- O schema e as contas padrão são criados na **primeira requisição**
  (`ready()`), já que em serverless não existe "boot".

### Por que PostgreSQL e não SQLite

Funções serverless têm sistema de arquivos efêmero: um arquivo `.sqlite` seria
perdido a cada invocação. O Postgres é gerenciado pela própria Vercel
(Neon) e recebe as variáveis `POSTGRES_PRISMA_URL` / `POSTGRES_URL_NON_POOLING`
automaticamente.

### O que foi adapted na migração

| Antes (SQLite) | Agora (PostgreSQL) |
| --- | --- |
| `node:sqlite` (síncrono) | `pg` (assíncrono) — handlers Express agora usam `asyncHandler` |
| placeholders `?` | convertidos para `$1…` dentro de `db/query.ts` (rotas inalteradas) |
| `active INTEGER` (0/1) | `active BOOLEAN` |
| `PRAGMA journal_mode` | removido (o pool já gerencia concorrência) |

Nenhuma rota mudou de SQL: o wrapper `Db` continua expondo `get`/`all`/`run`/`transaction`.

### Testes

A suíte roda sobre **PGlite** (Postgres compilado para WebAssembly, dentro do
processo do Node), de modo que `ON CONFLICT`, tipos e transações são testados
com a mesma semântica de produção — sem precisar de um servidor de banco.

## Arquitetura

## Arquitetura

```
TSEIBRA/
├── content/              @tseibra/content — módulos, aulas e questões (fonte única)
│   ├── src/types.ts      schema dos blocos, aulas e questões
│   ├── src/modulo1..8.ts conteúdo curado a partir dos PDFs
│   └── src/index.ts      agregação, índice, validação e correção
├── server/               API REST (Express + PostgreSQL)
│   ├── src/app.ts        montagem do app, CORS, estáticos, handler de erros
│   ├── src/env.ts        configuração por ambiente
│   ├── src/db/           schema, wrapper tipado do Postgres e seed
│   ├── src/lib/          crypto (scrypt) e HttpError
│   ├── src/middleware/   autenticação, papéis, validação Zod
│   ├── src/routes/       auth · curriculum · progress · admin
│   └── tests/            35 testes (node:test)
├── web/                  React + Vite
│   ├── src/lib/          cliente HTTP tipado, tipos e formatação pt-BR
│   ├── src/features/     contextos de tema, autenticação e progresso
│   ├── src/components/   AppShell, guardas de rota, blocos de conteúdo e UI
│   ├── src/pages/        login, cadastro, painel, módulos, aula, progresso…
│   └── src/styles/       design system em CSS com custom properties
└── scripts/dev.mjs      orquestrador de desenvolvimento
```

Decisões relevantes:

- **Conteúdo compartilhado, não duplicado.** `web` e `server` importam o mesmo pacote; assim a trilha exibida
  e a corrigida no servidor não podem divergir.
- **Correção no servidor.** O cliente recebe apenas `id`, `enunciado` e `opções`.
- **Wrapper de banco (`db/query.ts`)** isola o driver: as rotas escrevem SQL com `?` e recebem Promises, sem conhecer `pg`.
- **TypeScript estrito** (`strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`) nos três pacotes.

## Endpoints principais

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/api/auth/login` · `/register` · `/logout` | autenticação |
| `GET` | `/api/auth/me` | sessão atual |
| `POST` | `/api/auth/change-password` | troca de senha (revoga sessões) |
| `GET` | `/api/curriculum` | trilha (módulos, aulas, totais) |
| `GET` | `/api/curriculum/lessons/:id` | conteúdo da aula (sem gabarito) |
| `GET` | `/api/dashboard` | indicadores do aluno |
| `POST` | `/api/progress/:id/start` | inicia a aula |
| `POST` | `/api/progress/:id/submissions` | corrige e registra a tentativa |
| `POST` | `/api/study-sessions` | tempo de estudo |
| `GET`/`POST`/`PATCH` | `/api/admin/users` | gestão de turma (admin) |

## Configuração

Todas as variáveis são opcionais em desenvolvimento.

| Variável | Padrão | Descrição |
| --- | --- | --- |
| `PORT` | `4000` | porta da API |
| `WEB_ORIGIN` | `http://localhost:5173` | origem permitida no CORS (dev) |
| `DATABASE_URL` | — | **obrigatório**: conexão do PostgreSQL (a Vercel injeta no Postgres gerenciado) |
| `JWT_SECRET` | valor de dev | **obrigatório em produção** |
| `JWT_EXPIRES_IN` | `28800` | validade da sessão (8 h) |
| `COOKIE_DOMAIN` | — | domínio do cookie (necessário atrás de proxy) |
| `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` | — | credenciais do admin |
| `SEED_ALUNO_EMAIL` / `SEED_ALUNO_PASSWORD` | — | credenciais do aluno |

Em produção (`NODE_ENV=production`) o próprio servidor entrega o `web/dist`, então uma única porta
serve a aplicação inteira.

## Segurança

- Hash de senha **scrypt** com salt aleatório e comparação em tempo constante.
- JWT `httpOnly` + `SameSite=Lax` + `Secure` em produção; a sessão é validada contra o banco a cada requisição.
- **CORS restrito** à origem configurada; `x-powered-by` desabilitado; limite de 256 kB no corpo das requisições.
- Autorização verificada **no servidor** — ocultar o menu no cliente não é o controle de acesso.
- Gabarito do quiz mantido apenas no servidor.
- Consultas SQL parametrizadas em toda a aplicação.

## Acessibilidade e responsividade

Navegação por teclado, foco visível (o anel de foco ganha contraste em cada tema), `aria-*` nos componentes
interativos, contraste medido por script, suporte a `prefers-reduced-motion` e layout do celular ao desktop.

#!/usr/bin/env bash
#
# setup.sh — executado automaticamente ao criar o Codespaces.
# Instala dependências, sobe o PostgreSQL, cria o banco, faz o build do
# conteúdo e popula as contas padrão.
set -euo pipefail

echo "[setup] configurando ambiente de desenvolvimento…"

# --- 1. Variáveis de ambiente para desenvolvimento -------------------------
if [ ! -f .env ]; then
  cat > .env <<'EOF'
PORT=4000
NODE_ENV=development
WEB_ORIGIN=http://localhost:5173
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/tseibra
JWT_SECRET=dev-secret-codespaces-troque-em-producao
JWT_EXPIRES_IN=28800
SEED_ADMIN_EMAIL=admin@tseibra.local
SEED_ADMIN_PASSWORD=Admin@123
SEED_ALUNO_EMAIL=aluno@tseibra.local
SEED_ALUNO_PASSWORD=Aluno@123
EOF
  echo "[setup] .env criado (valores de desenvolvimento)."
else
  echo "[setup] .env já existe, mantendo."
fi

# --- 2. Dependências (workspaces: content, server, web) --------------------
echo "[setup] npm install (pode demorar alguns minutos)…"
npm install

# --- 3. Aguardar o PostgreSQL estar disponível -----------------------------
echo "[setup] aguardando PostgreSQL em localhost:5432…"
for i in $(seq 1 30); do
  if PGPASSWORD=postgres psql -h localhost -U postgres -d postgres -c "SELECT 1" >/dev/null 2>&1; then
    echo "[setup] PostgreSQL pronto."
    break
  fi
  sleep 2
done

# --- 4. Criar banco de dados -----------------------------------------------
if ! PGPASSWORD=postgres psql -h localhost -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname='tseibra'" | grep -q 1; then
  PGPASSWORD=postgres createdb -h localhost -U postgres tseibra
  echo "[setup] banco 'tseibra' criado."
else
  echo "[setup] banco 'tseibra' já existe."
fi

# --- 5. Build do conteúdo compartilhado (@tseibra/content) -----------------
echo "[setup] build do conteúdo (@tseibra/content)…"
npm run build -w @tseibra/content

# --- 6. Seed: tabelas + contas padrão --------------------------------------
echo "[setup] executando seed (tabelas + contas padrão)…"
npm run seed

echo ""
echo "=============================================="
echo "  Ambiente TSEIBRA pronto!"
echo ""
echo "  API  : http://localhost:4000"
echo "  Web  : http://localhost:5173   <- abra esta porta no Codespaces"
echo "  DB   : localhost:5432"
echo "         usuário: postgres | senha: postgres | banco: tseibra"
echo ""
echo "  Contas padrão:"
echo "    admin@tseibra.local  / Admin@123"
echo "    instrutor@tseibra.local / Admin@123"
echo "    aluno@tseibra.local   / Aluno@123"
echo ""
echo "  Para iniciar (se não subir sozinho): npm run dev"
echo "=============================================="

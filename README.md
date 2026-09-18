# Remedia Já — Painel Admin

Painel web para o administrador acompanhar uso do app (cuidadores/idosos
ativos, adesão ao tratamento, doses perdidas). Next.js + TypeScript +
Tailwind, consumindo o `remedia-ja-backend`.

## Como rodar localmente

1. `cp .env.example .env` e ajuste `API_URL` para o backend local.
2. `npm install`
3. `npm run dev` — painel em `http://localhost:3000`.

## Status deste scaffold

Dashboard consumindo `/admin/metrics` do backend, mas **sem autenticação
real ainda** — o token de admin está com `TODO` em `app/page.tsx`. Antes de
qualquer uso real: `backend-dev` (login de admin), `ui-designer` (revisão
completa de identidade visual — hoje só herda a paleta do mobile, sem
passar pela checklist de "nunca parecer feito por IA"), `security-reviewer`
e `qa-e2e-tester`.

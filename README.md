<h1 align="center">Olá, eu sou o David Marques 👋</h1>

<p align="center">
  Desenvolvedor Full Stack · Brasil
</p>

<p align="center">
  <!-- TODO: troque pelo domínio da Vercel após o primeiro deploy -->
  <a href="https://osenhord.vercel.app"><img src="https://img.shields.io/badge/Portfólio-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfólio" /></a>
  <a href="https://www.linkedin.com/in/davidmarques123/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:dev.davidmarques@gmail.com"><img src="https://img.shields.io/badge/E--mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" /></a>
</p>

## Sobre mim

Construo aplicações web modernas, rápidas e bem cuidadas — do back-end à interface.

- 🔭 Trabalhando atualmente em: _seu projeto atual_
- 🌱 Aprendendo: _o que você está estudando_
- 💬 Me pergunte sobre: React, TypeScript, Node.js

## Tecnologias

<p>
  <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,nodejs,express,postgres,prisma,git,docker,vercel,linux" alt="Tecnologias" />
</p>

## Estatísticas

<p>
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=OSenhorD&show_icons=true&hide_border=true&theme=transparent" alt="GitHub stats" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=OSenhorD&layout=compact&hide_border=true&theme=transparent" alt="Linguagens mais usadas" />
</p>

---

<details>
<summary><strong>Sobre este repositório</strong></summary>

Este repositório tem duas funções:

1. **README do perfil do GitHub** — este arquivo aparece em [github.com/OSenhorD](https://github.com/OSenhorD).
2. **Código-fonte do portfólio** — um site em React hospedado na Vercel.

### Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

### Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # build de produção em dist/
npm run lint     # oxlint
```

### Editando o conteúdo

Todo o conteúdo do site (nome, bio, habilidades, projetos, experiência e links)
fica em [`src/data/portfolio.ts`](src/data/portfolio.ts).

### Adicionando componentes do shadcn/ui

```bash
npx shadcn@latest add <componente>
```

### Estrutura

```
src/
├── components/      # header, footer, tema e componentes compartilhados
│   └── ui/          # componentes do shadcn/ui
├── data/            # conteúdo do portfólio
├── hooks/
├── lib/
└── sections/        # seções da página (hero, sobre, projetos...)
```

### Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe este repositório.
2. A Vercel detecta o Vite automaticamente (configuração em `vercel.json`).
3. Cada push na branch principal gera um novo deploy; PRs ganham previews.

</details>

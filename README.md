<h1 align="center">Olá, eu sou o David Marques 👋</h1>

<p align="center">
  Desenvolvedor Full Stack · Brasil
</p>

<p align="center">
  <!-- TODO: troque pelo domínio da Vercel após o primeiro deploy -->
  <a href="https://osenhord.vercel.app"><img src="https://img.shields.io/badge/Portfólio-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfólio" /></a>
  <a href="https://www.linkedin.com/in/davidmarques123/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:dev.davidmarques@gmail.com"><img src="https://img.shields.io/badge/E--mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" /></a>
  <a href="https://wa.me/5542999027693"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
  <a href="https://www.99freelas.com.br/user/davidmarques-dev"><img src="https://img.shields.io/badge/99Freelas-★_4,71-1E88E5?style=for-the-badge" alt="99Freelas: nota 4,71" /></a>
</p>

## Sobre mim

Desenvolvedor Full Stack com foco em **integrações de sistemas** e **automação de processos**.

- 🔌 Construo APIs e integrações entre plataformas — ERP, sistemas web e serviços externos
- 🤖 Uso inteligência artificial para ganho de produtividade e geração de valor
- 🧭 Atuo do levantamento de requisitos com clientes à implementação e sustentação das soluções
- 🎯 Foco em eficiência, escalabilidade e resolução de problemas reais
- ⭐ Mais de 5 anos de experiência · 24 projetos concluídos como freelancer, com nota 4,71 em 25 avaliações na [99Freelas](https://www.99freelas.com.br/user/davidmarques-dev)

## Projetos em destaque

- **Portal de Chamados** — aplicação de chamados semelhante ao GLPI, com permissões, chat, notificações, e-mail e quadro Kanban
- **Portal CloudDiamond** — cadastro de tickets e acompanhamento de entregas de máquinas virtuais, com agenda de locação
- **Dashboards de Módulos de ERP** — painéis em Angular 17, Angular Material e ApexCharts consumindo as APIs do ERP

## Tecnologias

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,react,postgres,aws,js,php,py,laravel,nextjs,angular,vue,sass,mongodb,mysql,redis,supabase,rabbitmq,docker,linux,nginx,jenkins,github,gitlab,vscode&perline=12" alt="Tecnologias" />
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

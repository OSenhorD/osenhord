// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para
// atualizar o site — os componentes apenas leem estes dados.

export type SocialLink = {
  label: string
  href: string
  icon: "github" | "linkedin" | "whatsapp" | "mail"
}

export type Project = {
  title: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
}

export type Experience = {
  role: string
  company: string
  type?: string
  period?: string
  highlights?: string[]
  stack?: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const profile = {
  name: "David Marques",
  handle: "OSenhorD",
  role: "Desenvolvedor Full Stack",
  location: "Brasil",
  headline:
    "Com foco em integrações de sistemas e automação de processos.",
  about: [
    "Experiência na construção de APIs, integrações entre plataformas (ERP, sistemas web, serviços externos) e uso de inteligência artificial para ganho de produtividade e geração de valor.",
    "Atuo desde o levantamento de requisitos com clientes até a implementação e sustentação das soluções, sempre com foco em eficiência, escalabilidade e resolução de problemas reais.",
    "Stack principal: Node.js, React, PostgreSQL, AWS.",
  ],
  email: "dev.davidmarques@gmail.com",
  phone: "(42) 99902-7693",
  whatsapp: "https://wa.me/5542999027693",
  github: "https://github.com/OSenhorD",
  available: true,
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/OSenhorD", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidmarques123/", icon: "linkedin" },
  { label: "WhatsApp", href: profile.whatsapp, icon: "whatsapp" },
  { label: "E-mail", href: `mailto:${profile.email}`, icon: "mail" },
]

export const skills: SkillGroup[] = [
  {
    title: "Stack principal",
    items: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    title: "Linguagens",
    items: ["JavaScript", "PHP", "Python"],
  },
  {
    title: "Front-end e mobile",
    items: [
      "React",
      "React Hooks",
      "Next.js",
      "Angular",
      "Vue.js",
      "SASS",
      "React Native",
      "Capacitor",
      "Apple Store",
      "Play Store",
    ],
  },
  {
    title: "Back-end",
    items: [
      "Node.js",
      "APIs REST",
      "Laravel",
      "FilamentPHP",
      "Composer",
      "Supabase",
      "RabbitMQ",
      "MQTT",
    ],
  },
  {
    title: "Bancos de dados",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Design de banco de dados", "Workbench"],
  },
  {
    title: "DevOps e ferramentas",
    items: [
      "AWS",
      "DigitalOcean",
      "Docker",
      "Linux",
      "Nginx",
      "SSH",
      "CI/CD",
      "Jenkins",
      "GitHub",
      "GitLab",
      "VSCode",
    ],
  },
  {
    title: "IA e automação",
    items: [
      "Inteligência artificial",
      "OpenAI",
      "APIs de LLM",
      "n8n",
      "Microsoft Copilot",
      "Automação de processos",
    ],
  },
  {
    title: "Integrações",
    items: [
      "ERP",
      "CRM",
      "Tray",
      "Pagamentos",
      "Autenticação",
      "Notificações",
      "Software de impressão",
    ],
  },
  {
    title: "Produto e negócio",
    items: [
      "Análise de requisitos",
      "Gestão de projetos",
      "Suporte ao cliente",
      "SaaS",
      "Aplicativos web",
      "Criação de sites",
    ],
  },
]

// TODO: substitua pelos seus projetos reais
export const projects: Project[] = [
  {
    title: "Portfólio",
    description:
      "Este site! Feito com React, TypeScript, Tailwind CSS e shadcn/ui, hospedado na Vercel.",
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    repo: "https://github.com/OSenhorD/osenhord",
  },
  {
    title: "Projeto Exemplo",
    description:
      "Descreva aqui o problema que o projeto resolve, as principais funcionalidades e o que você aprendeu.",
    tags: ["Node.js", "PostgreSQL"],
    repo: "https://github.com/OSenhorD",
  },
  {
    title: "Outro Projeto",
    description:
      "Uma breve descrição do projeto, destacando tecnologias e resultados alcançados.",
    tags: ["React", "API"],
    repo: "https://github.com/OSenhorD",
    demo: "https://vercel.com",
  },
]

export const experience: Experience[] = [
  {
    role: "Desenvolvedor web freelancer",
    company: "Autônomo",
    highlights: [
      "Desenvolvimento de integrações entre sistemas utilizando APIs REST",
      "Criação de automações de processos para redução de tarefas manuais",
      "Implementação de APIs e serviços backend com Node.js e Laravel",
      "Integração com serviços externos (pagamentos, autenticação, notificações)",
      "Estruturação de bancos de dados SQL (PostgreSQL/MySQL)",
      "Utilização de IA (OpenAI, automações com n8n) para análise de dados e aumento de produtividade",
      "Integração com APIs de LLM para geração e processamento de informações",
      "Deploy e gestão de aplicações em AWS e DigitalOcean",
      "Levantamento de requisitos e contato direto com clientes",
    ],
    stack: ["Node.js", "Laravel", "PostgreSQL", "MySQL", "OpenAI", "n8n", "AWS", "DigitalOcean"],
  },
  {
    role: "Consultor de TI",
    company: "Vamilly Inovações em Soluções de TI Ltda",
    type: "Tempo integral",
    period: "set. 2020 — ago. 2023 · 3 anos",
  },
]

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
]

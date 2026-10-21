// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para
// atualizar o site — os componentes apenas leem estes dados.

export type SocialLink = {
  label: string
  href: string
  icon: "github" | "linkedin" | "whatsapp" | "mail"
}

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  title: string
  description: string
  images?: ProjectImage[]
  highlights?: string[]
  tags?: string[]
  repo?: string
  demo?: string
}

export type Testimonial = {
  project: string
  quote: string
  rating: number
  date: string
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
    "São mais de 5 anos de experiência: comecei dando suporte a projetos legados em AngularJS e PHP e, com o tempo, passei a criar portais e sistemas de gestão personalizados com Node.js, React, Next.js, Vue.js, PostgreSQL, Redis e RabbitMQ.",
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
    items: ["JavaScript", "TypeScript", "PHP", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Front-end e mobile",
    items: [
      "React",
      "React Hooks",
      "Next.js",
      "Angular",
      "Angular Material",
      "AngularJS",
      "Vue.js",
      "SASS",
      "ApexCharts",
      "WordPress",
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
      "Express",
      "Laravel",
      "FilamentPHP",
      "CodeIgniter",
      "Composer",
      "Supabase",
      "RabbitMQ",
      "MQTT",
    ],
  },
  {
    title: "Bancos de dados",
    items: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Redis",
      "Design de banco de dados",
      "Workbench",
    ],
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

export const projects: Project[] = [
  {
    title: "Portal de Chamados",
    description:
      "Aplicação de chamados, semelhante ao GLPI, focada nos recursos necessários do contratante.",
    images: [
      { src: "/projects/portal-de-chamados/kanban.webp", alt: "Quadro Kanban com as tarefas do chamado" },
      {
        src: "/projects/portal-de-chamados/chamado-chat.webp",
        alt: "Edição de chamado com chat e anexos",
      },
      { src: "/projects/portal-de-chamados/tarefa.webp", alt: "Cadastro de tarefa do chamado" },
      { src: "/projects/portal-de-chamados/login.webp", alt: "Tela de login" },
    ],
    highlights: [
      "Login e permissões de acesso",
      "Segurança dupla, no front-end e no back-end",
      "Criação, edição e chat para chamados",
      "Notificações e envio de e-mail",
      "Tarefas realizadas, backlog ou a fazer, com quadro Kanban",
    ],
  },
  {
    title: "Portal CloudDiamond",
    description:
      "Aplicação para cadastro de tickets e acompanhamento de entregas de máquinas virtuais para empresa cliente.",
    images: [
      {
        src: "/projects/clouddiamond/horas-avulsas.webp",
        alt: "Contratação de horas avulsas com escolha de máquina",
      },
      {
        src: "/projects/clouddiamond/horarios-disponiveis.webp",
        alt: "Lista de horários disponíveis para locação",
      },
      {
        src: "/projects/clouddiamond/maquina-selecionada.webp",
        alt: "Máquina e horário selecionados",
      },
      { src: "/projects/clouddiamond/login.webp", alt: "Tela de login" },
    ],
    highlights: [
      "Login e permissões de acesso",
      "Segurança dupla, no front-end e no back-end",
      "Criação e edição de tickets",
      "Listagem de máquinas e horários disponíveis para locação",
    ],
  },
  {
    title: "Dashboards de Módulos de ERP",
    description:
      "Interface gráfica amigável para os clientes do ERP visualizarem os dados da sua empresa e filial, consumindo as APIs do ERP.",
    images: [
      {
        src: "/projects/dashboards-erp/faturamento.webp",
        alt: "Dashboard de faturamento por mês e por estado",
      },
    ],
    tags: ["Angular 17", "Angular Material", "ApexCharts", "APIs de ERP"],
  },
  {
    title: "Portfólio",
    description:
      "Este site! Feito com React, TypeScript, Tailwind CSS e shadcn/ui, hospedado na Vercel.",
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    repo: "https://github.com/OSenhorD/osenhord",
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

export const freelance = {
  platform: "99Freelas",
  url: "https://www.99freelas.com.br/user/davidmarques-dev",
  rating: 4.71,
  reviews: 25,
  completedProjects: 24,
  memberSince: "abr. 2024",
}

// Avaliações de clientes no perfil da 99Freelas
export const testimonials: Testimonial[] = [
  {
    project: "Plataforma de IoT responsiva",
    quote:
      "Esperava 1 dev, mas me entregou 2, o que foi excelente, já que meu prazo era curto. Resolveu rapidamente os desafios e entregou um resultado muito bem feito. Farei negócios novamente.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Criar landing page para empresa de guaraná",
    quote:
      "Excelente profissional. Comunicação clara e constante, cumpriu todos os prazos e entregou um trabalho de alta qualidade. Demonstrou domínio técnico e proatividade, sugerindo melhorias que agregaram valor ao projeto. Recomendo fortemente e contrataria novamente sem hesitar.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Landing page institucional para cervejaria",
    quote:
      "Trabalho impecável. Entregou exatamente o que foi combinado, com organização, qualidade técnica e ótimo relacionamento profissional. Muito satisfeito com o resultado.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Melhorias e personalizações na loja Tray",
    quote:
      "Excelente profissional. Comunicação clara, entregas rápida e qualidade acima do esperado. Recomendo fortemente.",
    rating: 5,
    date: "dez. 2025",
  },
]

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
]

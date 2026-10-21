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

export type Service = {
  title: string
  description: string
  icon: "integrations" | "automation" | "systems" | "sites"
}

export type DeliveredProject = {
  title: string
  period: string
  url?: string
  tags?: string[]
  inProgress?: boolean
}

export type Testimonial = {
  project: string
  url?: string
  quote: string
  rating: number
  date: string
}

export type Experience = {
  role: string
  company: string
  type?: string
  period?: string
  summary?: string
  highlights?: string[]
  stack?: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const profile = {
  name: "David Marques",
  domain: "davidmarques.com.br",
  role: "Desenvolvedor Full Stack",
  location: "Brasil",
  headline: "Com foco em integrações de sistemas e automação de processos.",
  about: [
    "Experiência na construção de APIs, integrações entre plataformas (ERP, sistemas web, serviços externos) e uso de inteligência artificial para ganho de produtividade e geração de valor.",
    "Atuo desde o levantamento de requisitos com clientes até a implementação e sustentação das soluções, sempre com foco em eficiência, escalabilidade e resolução de problemas reais.",
    "São cerca de 6 anos de experiência prática: comecei dando suporte a projetos legados em AngularJS e PHP e, com o tempo, passei a criar portais e sistemas de gestão personalizados com Node.js, React, Next.js, Vue.js, PostgreSQL, Redis e RabbitMQ.",
    "Stack principal: Node.js, React, PostgreSQL, AWS.",
  ],
  avatar: "/avatar.webp",
  languages: [
    { name: "Português", level: "nativo" },
    { name: "Inglês", level: "básico" },
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

export const services: Service[] = [
  {
    title: "Integrações e APIs",
    description:
      "APIs REST e integrações entre ERP, sistemas web e serviços externos, como pagamentos, autenticação e notificações.",
    icon: "integrations",
  },
  {
    title: "Automação e IA",
    description:
      "Automação de processos para reduzir tarefas manuais, com n8n, OpenAI e APIs de LLM, incluindo assistentes e automações no WhatsApp.",
    icon: "automation",
  },
  {
    title: "Sistemas web e apps",
    description:
      "Portais, sistemas de gestão e dashboards sob medida, e apps para iOS e Android com React Native e Capacitor.",
    icon: "systems",
  },
  {
    title: "Sites e e-commerce",
    description: "Landing pages, páginas de vendas e melhorias e personalizações em lojas Tray.",
    icon: "sites",
  },
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
      {
        src: "/projects/portal-de-chamados/kanban.webp",
        alt: "Quadro Kanban com as tarefas do chamado",
      },
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

// Histórico de projetos no perfil da 99Freelas (projetos cancelados ficam de fora)
export const deliveredProjects: DeliveredProject[] = [
  {
    title: "Sistema de controle de gado com cadastro de pastos e app mobile",
    period: "Desde dez. 2025",
    inProgress: true,
  },
  {
    title: "Converter web React/Supabase para apps nativos com Capacitor",
    period: "jan. — fev. 2026",
    url: "https://www.99freelas.com.br/project/converter-web-react-supabase-para-apps-nativos-com-capacitor-715422",
    tags: ["React", "Supabase", "Capacitor"],
  },
  {
    title: "Plataforma de IoT responsiva",
    period: "dez. 2025",
    url: "https://www.99freelas.com.br/project/plataforma-de-iot-responsiva-714932",
    tags: ["IoT"],
  },
  {
    title: "Melhorias e personalizações na loja Tray",
    period: "dez. 2025",
    url: "https://www.99freelas.com.br/project/melhorias-e-personalizacoes-na-loja-tray-714934",
    tags: ["Tray"],
  },
  {
    title: "Landing page institucional para cervejaria",
    period: "dez. 2025",
    url: "https://www.99freelas.com.br/project/landing-page-institucional-para-cervejaria-714689",
  },
  {
    title: "Criar landing page para empresa de guaraná",
    period: "dez. 2025",
    url: "https://www.99freelas.com.br/project/criar-landing-page-para-empresa-de-guarana-714690",
  },
  {
    title: "Desenvolvimento de web app para cadastro de vendedoras",
    period: "ago. 2024 — out. 2025",
    url: "https://www.99freelas.com.br/project/desenvolvimento-de-web-app-para-cadastro-de-vendedoras-570455",
  },
  {
    title: "Especialista N8N para corrigir um bug assistente financeiro WhatsApp",
    period: "jul. — ago. 2025",
    url: "https://www.99freelas.com.br/project/especialista-n8n-para-corrigir-um-bug-assistente-financeiro-whatsapp-672965",
    tags: ["n8n"],
  },
  {
    title: "Automação de follow-up e nutrição de leads via WhatsApp",
    period: "jul. — ago. 2025",
    url: "https://www.99freelas.com.br/project/automacao-de-follow-up-e-nutricao-de-leads-via-whatsapp-666389",
  },
  {
    title: "Desenvolver HTML de uma página de vendas (desktop e mobile)",
    period: "jun. — jul. 2025",
    url: "https://www.99freelas.com.br/project/desenvolver-html-de-uma-pagina-de-vendas-desktop-e-mobile-663534",
    tags: ["HTML"],
  },
  {
    title: "Adicionar campos em site Tray através de HTML",
    period: "jun. 2025",
    url: "https://www.99freelas.com.br/project/adicionar-campos-em-site-tray-atraves-de-html-661377",
    tags: ["Tray"],
  },
  {
    title: "Desenvolvimento de site com mapa fictício",
    period: "ago. — dez. 2024",
    url: "https://www.99freelas.com.br/project/desenvolvimento-de-site-com-mapa-ficticio-566489",
  },
  {
    title: "Sistema de horários com localização em tempo real",
    period: "ago. — dez. 2024",
    url: "https://www.99freelas.com.br/project/sistema-de-horarios-com-localizacao-em-tempo-real-572136",
  },
  {
    title: "Correção e melhorias em sistema Node.js",
    period: "ago. 2024",
    url: "https://www.99freelas.com.br/project/correcao-e-melhorias-em-sistema-node-js-570484",
    tags: ["Node.js"],
  },
  {
    title: "Ajustes de página web - Node.js + EJS",
    period: "jul. — ago. 2024",
    url: "https://www.99freelas.com.br/project/ajustes-de-pagina-web-node-js-ejs-566068",
    tags: ["Node.js", "EJS"],
  },
  {
    title: "Desenvolvimento de sistema para evitar uso offline de conteúdo de cálculo",
    period: "jul. — ago. 2024",
    url: "https://www.99freelas.com.br/project/desenvolvimento-de-sistema-para-evitar-uso-offline-de-conteudo-de-calculo-565735",
  },
  {
    title: "Desenvolver página front-end - Node.js + EJS + mobile",
    period: "jun. — jul. 2024",
    url: "https://www.99freelas.com.br/project/desenvolver-pagina-front-end-node-js-ejs-mobile-557490",
    tags: ["Node.js", "EJS"],
  },
  {
    title: "Desenvolvimento de website de dashboard IoT com integração MariaDB",
    period: "jun. 2024",
    url: "https://www.99freelas.com.br/project/desenvolvimento-de-website-de-dashboard-iot-com-integracao-mariadb-551203",
    tags: ["IoT", "MariaDB"],
  },
  {
    title: "Desenvolvedor Full Stack / Node.js e React para melhorias em sistema",
    period: "mai. — jun. 2024",
    url: "https://www.99freelas.com.br/project/desenvolvedor-full-stack-node-js-e-react-para-melhorias-em-sistema-546116",
    tags: ["Node.js", "React"],
  },
  {
    title: "Desenvolvimento de um mapa online sobre conflitos e guerras",
    period: "jun. 2024",
    url: "https://www.99freelas.com.br/project/desenvolvimento-de-um-mapa-online-sobre-conflitos-e-guerras-553352",
  },
  {
    title: "Aplicação web com dashboard e login (apenas front-end)",
    period: "mai. — jun. 2024",
    url: "https://www.99freelas.com.br/project/aplicacao-web-com-dashboard-e-login-apenas-front-end-543073",
  },
  {
    title: "Sistema para buscas e exportação",
    period: "mai. 2024",
    url: "https://www.99freelas.com.br/project/sistema-para-buscas-e-exportacao-david-m-547722",
  },
  {
    title: "Integração de API de localização Google Maps em landing page HTML",
    period: "mai. 2024",
    url: "https://www.99freelas.com.br/project/integracao-de-api-de-localizacao-google-maps-em-landing-page-html-544704",
    tags: ["Google Maps"],
  },
  {
    title: "Criação de API de localização",
    period: "mai. 2024",
    url: "https://www.99freelas.com.br/project/criacao-de-api-de-localizacao-543555",
  },
  {
    title: "Instalação do N8N em uma VPS",
    period: "abr. 2024",
    url: "https://www.99freelas.com.br/project/instalacao-do-n8n-em-uma-vps-539078",
    tags: ["n8n"],
  },
]

export const experience: Experience[] = [
  {
    role: "Desenvolvedor web freelancer",
    company: "Autônomo",
    period: "Até o momento",
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
    type: "Tempo integral · Presencial",
    period: "set. 2020 — ago. 2023 · 3 anos",
    summary:
      "Atuação presencial em projetos para clientes da carteira da empresa, como a Makita, com as mesmas frentes do trabalho como freelancer:",
    highlights: [
      "Integrações entre sistemas via APIs REST e com serviços externos (pagamentos, autenticação, notificações)",
      "APIs e serviços backend com Node.js e Laravel, com bancos de dados SQL (PostgreSQL/MySQL)",
      "Automação de processos e uso de IA (OpenAI, n8n, APIs de LLM) para ganho de produtividade",
      "Deploy e gestão de aplicações em AWS e DigitalOcean",
      "Levantamento de requisitos e contato direto com os clientes",
    ],
    stack: ["Node.js", "Laravel", "PostgreSQL", "MySQL", "OpenAI", "n8n", "AWS", "DigitalOcean"],
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
    url: "https://www.99freelas.com.br/project/plataforma-de-iot-responsiva-714932",
    quote:
      "Esperava 1 dev, mas me entregou 2, o que foi excelente, já que meu prazo era curto. Resolveu rapidamente os desafios e entregou um resultado muito bem feito. Farei negócios novamente.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Criar landing page para empresa de guaraná",
    url: "https://www.99freelas.com.br/project/criar-landing-page-para-empresa-de-guarana-714690",
    quote:
      "Excelente profissional. Comunicação clara e constante, cumpriu todos os prazos e entregou um trabalho de alta qualidade. Demonstrou domínio técnico e proatividade, sugerindo melhorias que agregaram valor ao projeto. Recomendo fortemente e contrataria novamente sem hesitar.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Landing page institucional para cervejaria",
    url: "https://www.99freelas.com.br/project/landing-page-institucional-para-cervejaria-714689",
    quote:
      "Trabalho impecável. Entregou exatamente o que foi combinado, com organização, qualidade técnica e ótimo relacionamento profissional. Muito satisfeito com o resultado.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Melhorias e personalizações na loja Tray",
    url: "https://www.99freelas.com.br/project/melhorias-e-personalizacoes-na-loja-tray-714934",
    quote:
      "Excelente profissional. Comunicação clara, entregas rápida e qualidade acima do esperado. Recomendo fortemente.",
    rating: 5,
    date: "dez. 2025",
  },
  {
    project: "Desenvolvimento de site com mapa fictício",
    url: "https://www.99freelas.com.br/project/desenvolvimento-de-site-com-mapa-ficticio-566489",
    quote:
      "David surpreendeu com um site bastante amigável em que posso cadastrar e alterar facilmente os elementos. E foi bastante atencioso me passando instruções para que eu possa gerir o site e fazer algumas modificações com autonomia.",
    rating: 5,
    date: "dez. 2024",
  },
  {
    project: "Correção e melhorias em sistema Node.js",
    url: "https://www.99freelas.com.br/project/correcao-e-melhorias-em-sistema-node-js-570484",
    quote:
      "O David entende fez um trabalho complexo em um tempo muito bom.. Teve algumas dificuldades, mas não desistiu e até simplificou o que ja existia.. Recomendo o seu trabalho.",
    rating: 5,
    date: "ago. 2024",
  },
  {
    project: "Integração de API de localização Google Maps em landing page HTML",
    url: "https://www.99freelas.com.br/project/integracao-de-api-de-localizacao-google-maps-em-landing-page-html-544704",
    quote:
      "Excelente profissional, dedicado, prestativo, sempre disponivel para ajudar e fazer as alterações necessárias! Virou meu parceiro de negócios, sempre que tiver serviços é este que irei querer.",
    rating: 5,
    date: "mai. 2024",
  },
  {
    project: "Criação de API de localização",
    url: "https://www.99freelas.com.br/project/criacao-de-api-de-localizacao-543555",
    quote:
      "Muito atencioso e respeitoso! Realmente se envolveu no projeto, buscando compreender as necessidades e o modelo do projeto. Entrega rápida e fez todas as alterações necessárias para realmente chegar na expectativa final.",
    rating: 5,
    date: "mai. 2024",
  },
]

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
]

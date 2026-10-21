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
  period: string
  description: string
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
    "Construo aplicações web modernas, rápidas e bem cuidadas — do back-end à interface.",
  about: [
    "Sou desenvolvedor de software com foco em criar produtos úteis e bem construídos. Gosto de transformar problemas complexos em soluções simples, com código limpo e boa experiência para quem usa.",
    "Atualmente trabalho principalmente com o ecossistema JavaScript/TypeScript, React e Node.js, sempre buscando aprender novas ferramentas e boas práticas.",
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
    title: "Front-end",
    items: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub Actions", "Docker", "Vercel", "Linux"],
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

// TODO: substitua pela sua experiência profissional
export const experience: Experience[] = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Empresa Atual",
    period: "2024 — Presente",
    description:
      "Desenvolvimento e manutenção de aplicações web, criação de APIs e melhorias de performance.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Desenvolvedor Front-end",
    company: "Empresa Anterior",
    period: "2022 — 2024",
    description:
      "Criação de interfaces responsivas e acessíveis, integração com APIs e componentização.",
    stack: ["React", "TypeScript"],
  },
]

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
]

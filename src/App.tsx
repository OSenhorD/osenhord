import { useEffect } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { projects } from "@/data/portfolio"
import { NotFound } from "@/pages/not-found"
import { ProjectPage } from "@/pages/project-page"
import { About } from "@/sections/about"
import { Contact } from "@/sections/contact"
import { Experience } from "@/sections/experience"
import { Hero } from "@/sections/hero"
import { Projects } from "@/sections/projects"
import { Services } from "@/sections/services"
import { Skills } from "@/sections/skills"
import { Testimonials } from "@/sections/testimonials"

// Roteamento simples: as páginas de projeto são arquivos estáticos gerados no build
// (veja vite.config.ts), então cada link é um carregamento normal de página.
const projectMatch = window.location.pathname.match(/^\/projetos\/([^/]+)\/?$/)
const isHome = window.location.pathname === "/"
const project = projectMatch && projects.find((item) => item.slug === projectMatch[1])

function Home() {
  // Ao voltar de uma página de projeto (/#projetos), rola até a seção
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {project ? <ProjectPage project={project} /> : isHome ? <Home /> : <NotFound />}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default App

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { About } from "@/sections/about"
import { Contact } from "@/sections/contact"
import { Experience } from "@/sections/experience"
import { Hero } from "@/sections/hero"
import { Projects } from "@/sections/projects"
import { Skills } from "@/sections/skills"

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App

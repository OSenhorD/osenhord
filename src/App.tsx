import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { About } from "@/sections/about"
import { Contact } from "@/sections/contact"
import { Experience } from "@/sections/experience"
import { Hero } from "@/sections/hero"
import { Projects } from "@/sections/projects"
import { Services } from "@/sections/services"
import { Skills } from "@/sections/skills"
import { Testimonials } from "@/sections/testimonials"

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}

export default App

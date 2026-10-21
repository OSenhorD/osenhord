import { ArrowUpRight } from "lucide-react"

import { DeliveredProjects } from "@/components/delivered-projects"
import { ProjectCard } from "@/components/project-card"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { profile, projects, type Project } from "@/data/portfolio"

const highlighted = projects.filter((project) => !project.allOnly)

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projetos" eyebrow="04. Projetos" title="Coisas que construí">
      <Tabs defaultValue="destaques" className="gap-6">
        <TabsList>
          <TabsTrigger value="destaques" className="px-3">
            Destaques ({highlighted.length})
          </TabsTrigger>
          <TabsTrigger value="todos" className="px-3">
            Todos os projetos ({projects.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="destaques">
          <ProjectGrid items={highlighted} />
        </TabsContent>
        <TabsContent value="todos">
          <ProjectGrid items={projects} />
        </TabsContent>
      </Tabs>

      <DeliveredProjects />

      <div className="mt-8 flex justify-center">
        <Button variant="link" asChild>
          <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">
            Ver todos os repositórios no GitHub
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </Section>
  )
}

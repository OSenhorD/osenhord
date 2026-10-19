import { ArrowUpRight, ExternalLink } from "lucide-react"

import { Section } from "@/components/section"
import { SocialIcon } from "@/components/social-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { profile, projects } from "@/data/portfolio"

export function Projects() {
  return (
    <Section id="projetos" eyebrow="03. Projetos" title="Coisas que construí">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="transition-colors hover:border-foreground/20">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-pretty">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="mt-auto gap-2">
              {project.repo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <SocialIcon icon="github" />
                    Código
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

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

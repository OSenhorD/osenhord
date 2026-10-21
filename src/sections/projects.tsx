import { ArrowUpRight, ExternalLink } from "lucide-react"

import { ProjectGallery } from "@/components/project-gallery"
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
import { deliveredProjects, freelance, profile, projects } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function Projects() {
  return (
    <Section id="projetos" eyebrow="04. Projetos" title="Coisas que construí">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className={cn("transition-colors hover:border-foreground/20", project.images && "pt-0")}
          >
            {project.images && <ProjectGallery title={project.title} images={project.images} />}
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-pretty">{project.description}</CardDescription>
            </CardHeader>
            {(project.highlights || project.tags) && (
              <CardContent className="space-y-4">
                {project.highlights && (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-foreground/40">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            )}
            {(project.repo || project.demo) && (
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
            )}
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-heading text-xl font-semibold tracking-tight">
          Outros projetos entregues como freelancer
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Histórico do meu perfil na{" "}
          <a
            href={freelance.url}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {freelance.platform}
          </a>
          .
        </p>
        <ul className="mt-6 divide-y rounded-xl border">
          {deliveredProjects.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{item.title}</span>
                {item.inProgress && <Badge variant="secondary">Em andamento</Badge>}
                {item.tags?.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
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

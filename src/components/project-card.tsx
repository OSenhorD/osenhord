import { ExternalLink } from "lucide-react"

import { ProjectGallery } from "@/components/project-gallery"
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
import type { Project } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className={cn("transition-colors hover:border-foreground/20", project.images && "pt-0")}>
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
  )
}

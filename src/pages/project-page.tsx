import { ArrowLeft, ArrowRight, ArrowUpRight, Mail } from "lucide-react"
import { useEffect } from "react"

import { SocialIcon } from "@/components/social-icon"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { profile, projects, type Project } from "@/data/portfolio"

export function ProjectPage({ project }: { project: Project }) {
  const video = project.images?.find((image) => image.youtubeId)
  const screens = project.images?.filter((image) => !image.youtubeId) ?? []
  const others = projects.filter((item) => item.slug && item.slug !== project.slug)
  const whatsapp = `${profile.whatsapp}?text=${encodeURIComponent(
    `Olá, David! Vi o projeto ${project.title} no seu portfólio e gostaria de conversar.`,
  )}`

  useEffect(() => {
    document.title = `${project.title} · ${profile.name}`
    window.scrollTo(0, 0)
  }, [project])

  return (
    <article className="mx-auto max-w-5xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
      <Button variant="ghost" size="sm" className="-ml-2" asChild>
        <a href="/#projetos">
          <ArrowLeft data-icon="inline-start" />
          Voltar para projetos
        </a>
      </Button>

      <header className="mt-6">
        <p className="font-mono text-sm text-muted-foreground">Projeto</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-pretty text-muted-foreground">
          {project.description}
        </p>
        {project.tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <SocialIcon icon="whatsapp" />
              Quero um sistema assim
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title)}`}>
              <Mail data-icon="inline-start" />
              Enviar e-mail
            </a>
          </Button>
        </div>
      </header>

      {video?.youtubeId && (
        <section className="mt-12" aria-label="Vídeo de demonstração">
          <YouTubeEmbed videoId={video.youtubeId} title={video.alt} thumbnail={video.src} />
          <Button variant="link" className="mt-2 px-0" asChild>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noreferrer"
            >
              Assistir no YouTube
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </section>
      )}

      {project.highlights && (
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            O que o sistema faz
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl border bg-card px-4 py-3 text-pretty text-muted-foreground"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      )}

      {screens.length > 0 && (
        <section className="mt-12">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Telas</h2>
          <div className="mt-5 space-y-8">
            {screens.map((image) => (
              <figure key={image.src}>
                <a href={image.src} target="_blank" rel="noreferrer">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full rounded-xl border bg-muted"
                  />
                </a>
                <figcaption className="mt-2 text-sm text-muted-foreground">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">Outros projetos</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {others.map((item) => (
              <a key={item.slug} href={`/projetos/${item.slug}`} className="group">
                <Card className="h-full pt-0 transition-colors group-hover:border-foreground/20">
                  {item.images?.[0] && (
                    <img
                      src={item.images[0].src}
                      alt=""
                      loading="lazy"
                      className="aspect-video w-full border-b object-cover object-top"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between gap-2">
                      {item.title}
                      <ArrowRight className="mt-0.5 size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </section>
      )}

      <Card className="mt-16">
        <CardContent className="flex flex-col items-start gap-4 py-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty text-muted-foreground">
            Precisa de um sistema sob medida para o seu negócio? Vamos conversar.
          </p>
          <Button asChild>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <SocialIcon icon="whatsapp" />
              Falar no WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>
    </article>
  )
}

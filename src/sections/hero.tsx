import { ArrowRight, MapPin } from "lucide-react"

import { SocialIcon } from "@/components/social-icon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile, socials } from "@/data/portfolio"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28 md:flex-row-reverse md:items-center md:justify-between md:gap-12">
        <img
          src={profile.avatar}
          alt={`Foto de ${profile.name}`}
          width={400}
          height={400}
          className="size-24 shrink-0 rounded-full object-cover ring-4 ring-background outline outline-1 outline-border sm:size-28 md:size-56 lg:size-64"
        />
        <div>
          {profile.available && (
            <Badge variant="outline" className="gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Disponível para novos projetos
            </Badge>
          )}

          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Olá, eu sou {profile.name}.
            <span className="block text-muted-foreground">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
            {profile.headline}
          </p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {profile.location}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="/#projetos">
                Ver projetos
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/#contato">Entrar em contato</a>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {socials.map((social) => (
                <Button key={social.label} variant="ghost" size="icon-lg" asChild>
                  <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                    <SocialIcon icon={social.icon} className="size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

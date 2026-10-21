import { Languages } from "lucide-react"

import { Section } from "@/components/section"
import { profile } from "@/data/portfolio"

export function About() {
  return (
    <Section id="sobre" eyebrow="01. Sobre" title="Quem sou eu">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Languages className="size-4" />
        <span className="font-medium text-foreground">Idiomas:</span>
        {profile.languages.map((language) => `${language.name} (${language.level})`).join(" · ")}
      </p>
    </Section>
  )
}

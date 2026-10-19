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
    </Section>
  )
}

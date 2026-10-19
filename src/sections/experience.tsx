import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/portfolio"

export function Experience() {
  return (
    <Section id="experiencia" eyebrow="04. Experiência" title="Onde já trabalhei">
      <ol className="relative space-y-10 border-l pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span className="absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full border-2 border-background bg-foreground sm:-left-[calc(2rem+5px)]" />
            <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold">
              {item.role} <span className="text-muted-foreground">· {item.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">{item.description}</p>
            {item.stack && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}

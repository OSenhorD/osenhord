import { ArrowUpRight, Star } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { freelance, testimonials } from "@/data/portfolio"

const stats = [
  { value: freelance.rating.toLocaleString("pt-BR"), label: "nota média" },
  { value: String(freelance.reviews), label: "avaliações" },
  { value: String(freelance.completedProjects), label: "projetos concluídos" },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Nota ${rating} de 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < rating ? "size-4 fill-amber-400 text-amber-400" : "size-4 text-muted-foreground/40"
          }
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <Section id="avaliacoes" eyebrow="06. Avaliações" title="O que dizem os clientes">
      <p className="max-w-2xl text-muted-foreground">
        Avaliações reais do meu perfil de freelancer na {freelance.platform}, onde atuo desde{" "}
        {freelance.memberSince}.
      </p>

      <dl className="mt-8 grid grid-cols-3 divide-x rounded-xl border">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col px-3 py-5 text-center sm:px-6">
            <dt className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
            <dd className="order-first font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.project}>
            <CardHeader>
              <Stars rating={testimonial.rating} />
            </CardHeader>
            <CardContent>
              <blockquote className="text-pretty">“{testimonial.quote}”</blockquote>
            </CardContent>
            <CardFooter className="mt-auto flex-col items-start gap-0.5">
              <CardTitle className="text-sm">
                {testimonial.url ? (
                  <a
                    href={testimonial.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {testimonial.project}
                  </a>
                ) : (
                  testimonial.project
                )}
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Cliente na {freelance.platform} · {testimonial.date}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="link" asChild>
          <a href={freelance.url} target="_blank" rel="noreferrer">
            Ver todas as avaliações na {freelance.platform}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </Section>
  )
}

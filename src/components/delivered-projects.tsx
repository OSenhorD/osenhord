import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { deliveredProjects, freelance } from "@/data/portfolio"

const INITIAL_COUNT = 8

export function DeliveredProjects() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? deliveredProjects : deliveredProjects.slice(0, INITIAL_COUNT)
  const hidden = deliveredProjects.length - INITIAL_COUNT

  return (
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
        , do mais recente ao mais antigo.
      </p>
      <ul id="projetos-entregues" className="mt-6 divide-y rounded-xl border">
        {visible.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {item.title}
                </a>
              ) : (
                <span className="font-medium">{item.title}</span>
              )}
              {item.inProgress && <Badge variant="secondary">Em andamento</Badge>}
              {item.tags?.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">{item.period}</span>
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            aria-expanded={expanded}
            aria-controls="projetos-entregues"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? (
              <>
                Mostrar menos
                <ChevronUp data-icon="inline-end" />
              </>
            ) : (
              <>
                Mostrar todos ({deliveredProjects.length})
                <ChevronDown data-icon="inline-end" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

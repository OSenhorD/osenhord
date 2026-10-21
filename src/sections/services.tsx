import { AppWindow, Bot, Globe, Plug } from "lucide-react"

import { Section } from "@/components/section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services, type Service } from "@/data/portfolio"

const icons: Record<Service["icon"], typeof Plug> = {
  integrations: Plug,
  automation: Bot,
  systems: AppWindow,
  sites: Globe,
}

export function Services() {
  return (
    <Section id="servicos" eyebrow="02. Serviços" title="Como posso ajudar">
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <Card key={service.title}>
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border bg-muted">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

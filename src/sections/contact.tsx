import { Mail } from "lucide-react"

import { Section } from "@/components/section"
import { SocialIcon } from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { profile, socials } from "@/data/portfolio"

export function Contact() {
  return (
    <Section id="contato" eyebrow="05. Contato" title="Vamos conversar">
      <Card>
        <CardContent className="flex flex-col items-start gap-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty text-muted-foreground">
            Tem um projeto em mente, uma vaga ou só quer trocar uma ideia? Minha caixa de
            entrada está sempre aberta.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail data-icon="inline-start" />
                Enviar e-mail
              </a>
            </Button>
            {socials
              .filter((social) => social.icon !== "mail")
              .map((social) => (
                <Button key={social.label} size="lg" variant="outline" asChild>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <SocialIcon icon={social.icon} />
                    {social.label}
                  </a>
                </Button>
              ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}

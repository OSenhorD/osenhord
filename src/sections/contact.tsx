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
        <CardContent className="flex flex-col items-start gap-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-3 lg:max-w-md">
            <p className="text-pretty text-muted-foreground">
              Tem um projeto em mente, uma vaga ou só quer trocar uma ideia? Minha caixa de
              entrada está sempre aberta.
            </p>
            <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:underline">
                {profile.phone}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:shrink-0">
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

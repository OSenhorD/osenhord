import { SocialIcon } from "@/components/social-icon"
import { profile, socials } from "@/data/portfolio"

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. Feito com React + shadcn/ui.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="transition-colors hover:text-foreground"
            >
              <SocialIcon icon={social.icon} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

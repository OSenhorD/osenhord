import { Menu, X } from "lucide-react"
import { useState } from "react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { navigation, profile } from "@/data/portfolio"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-mono text-sm font-semibold tracking-tight">
          {profile.handle}
          <span className="text-muted-foreground">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
          <ModeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

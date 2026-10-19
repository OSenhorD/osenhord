import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Section({
  id,
  eyebrow,
  title,
  className,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-mono text-sm text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

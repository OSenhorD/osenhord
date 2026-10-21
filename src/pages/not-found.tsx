import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
        Página não encontrada
      </h1>
      <p className="mt-3 text-muted-foreground">O endereço que você abriu não existe.</p>
      <Button className="mt-8" asChild>
        <a href="/">
          <ArrowLeft data-icon="inline-start" />
          Voltar para o início
        </a>
      </Button>
    </section>
  )
}

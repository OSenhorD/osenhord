import { ChevronLeft, ChevronRight, Images } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { ProjectImage } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ProjectGallery({ title, images }: { title: string; images: ProjectImage[] }) {
  const [index, setIndex] = useState(0)
  const [cover] = images
  const current = images[index]
  const hasMany = images.length > 1

  const go = (step: number) => setIndex((i) => (i + step + images.length) % images.length)

  return (
    <Dialog onOpenChange={(open) => open && setIndex(0)}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Ver imagens de ${title}`}
          className="group/cover relative block aspect-video w-full overflow-hidden border-b bg-muted"
        >
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className="size-full object-cover object-top transition-transform duration-300 group-hover/cover:scale-[1.02]"
          />
          {hasMany && (
            <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-md bg-background/90 px-2 py-1 text-xs font-medium shadow-sm">
              <Images className="size-3.5" />
              {images.length} imagens
            </span>
          )}
        </button>
      </DialogTrigger>

      <DialogContent
        className="max-h-[90svh] overflow-y-auto sm:max-w-5xl"
        onKeyDown={(e) => {
          if (!hasMany) return
          if (e.key === "ArrowLeft") go(-1)
          if (e.key === "ArrowRight") go(1)
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          {current.alt}
          {hasMany && ` · ${index + 1} de ${images.length}`}
        </DialogDescription>

        <div className="relative overflow-hidden rounded-lg border bg-muted">
          <img src={current.src} alt={current.alt} className="w-full" />
          {hasMany && (
            <>
              <Button
                variant="outline"
                size="icon"
                aria-label="Imagem anterior"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-2 -translate-y-1/2"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Próxima imagem"
                onClick={() => go(1)}
                className="absolute top-1/2 right-2 -translate-y-1/2"
              >
                <ChevronRight />
              </Button>
            </>
          )}
        </div>

        {hasMany && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={image.alt}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "w-24 shrink-0 overflow-hidden rounded-md border-2 transition-opacity",
                  i === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100",
                )}
              >
                <img src={image.src} alt="" loading="lazy" className="aspect-video object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

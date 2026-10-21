import { Play } from "lucide-react"
import { useState } from "react"

// Mostra a miniatura e só carrega o player do YouTube quando a pessoa clica
export function YouTubeEmbed({
  videoId,
  title,
  thumbnail,
}: {
  videoId: string
  title: string
  thumbnail: string
}) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="aspect-video w-full rounded-xl border"
      />
    )
  }

  return (
    <button
      type="button"
      aria-label={`Assistir: ${title}`}
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border bg-muted"
    >
      <img src={thumbnail} alt="" className="size-full object-cover" />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
        <span className="flex size-16 items-center justify-center rounded-full bg-background/90 shadow-lg">
          <Play className="ml-1 size-7 fill-current" />
        </span>
      </span>
    </button>
  )
}

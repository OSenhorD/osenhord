import { SocialIcon } from "@/components/social-icon"
import { profile } from "@/data/portfolio"

export function WhatsAppButton() {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:right-6 sm:bottom-6 sm:size-14"
    >
      <SocialIcon icon="whatsapp" className="size-6 sm:size-7" />
    </a>
  )
}

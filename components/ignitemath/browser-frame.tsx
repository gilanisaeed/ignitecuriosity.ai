import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrowserFrameProps {
  src: string
  alt: string
  /** Tailwind aspect-ratio utility, e.g. "aspect-video". Keeps the showcase grid even. */
  aspect?: string
  /** object-position helper so the most important part of each shot stays visible when cropped. */
  objectPosition?: string
  /** object-fit helper. Use "object-contain" for shots that must show in full without cropping. */
  fit?: string
  priority?: boolean
  sizes?: string
  className?: string
}

/**
 * Frames a dark product screenshot inside a light, flat browser window so it
 * reads as an intentional product view against the cream site background.
 * One consistent frame style for every shot: same radius, thin border, no drop shadow.
 */
export function BrowserFrame({
  src,
  alt,
  aspect = "aspect-video",
  objectPosition = "object-top",
  fit = "object-cover",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
}: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border bg-card", className)}>
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
      </div>
      <div className={cn("relative w-full bg-[#0f0f14]", aspect)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(fit, objectPosition)}
        />
      </div>
    </div>
  )
}

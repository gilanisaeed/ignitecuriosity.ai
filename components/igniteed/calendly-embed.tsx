"use client"

import { useEffect } from "react"

interface CalendlyEmbedProps {
  url?: string
}

export function CalendlyEmbed({ url = "https://calendly.com/ignitecuriositylab/ai-readiness-review" }: CalendlyEmbedProps) {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js")
    script.setAttribute("type", "text/javascript")
    script.setAttribute("async", "true")
    head?.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = head?.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        head?.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full min-h-[600px] rounded-lg overflow-hidden"
      data-url={url}
      style={{ minWidth: "320px", height: "600px" }}
    />
  )
}

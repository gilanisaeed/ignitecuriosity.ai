"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const anchors = [
  { id: "how-it-works", label: "How it works" },
  { id: "see-it", label: "See it" },
  { id: "why-us", label: "Why us" },
  { id: "faq", label: "FAQ" },
]

export function StickyNav() {
  const [active, setActive] = useState<string>("how-it-works")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    anchors.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <div className="sticky top-16 z-40 border-y border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container px-6 md:px-12">
        <div className="flex items-center justify-between gap-4 py-3">
          <nav aria-label="Page sections" className="flex items-center gap-1 overflow-x-auto">
            {anchors.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#final-cta" onClick={(e) => handleClick(e, "final-cta")} className="hidden sm:block shrink-0">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Request a Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

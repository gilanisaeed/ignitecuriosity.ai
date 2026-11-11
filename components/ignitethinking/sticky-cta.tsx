"use client"

import { useEffect, useRef } from "react"
import { c } from "@/app/ignitethinking/cx"

// The mobile sticky beta button (shown under 760 px by the page CSS), ported
// from the draft's second <script> (v3.25): it appears once the visitor has
// scrolled past the maze and steps aside while the beta section is on screen.
// Measured on scroll, not with IntersectionObserver, so a jump straight past
// the maze (such as the announcement link) still counts. Without JavaScript
// it stays shown on small screens, as in the draft.

export function StickyCta() {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const bar = barRef.current
    const demo = document.getElementById("try")
    const beta = document.getElementById("beta")
    if (!bar || !demo || !beta || !window.requestAnimationFrame) return
    const off = c("off")
    let queued = false
    const upd = () => {
      queued = false
      const past = demo.getBoundingClientRect().bottom < 0
      const b = beta.getBoundingClientRect()
      const atBeta = b.top < window.innerHeight && b.bottom > 0
      bar.classList.toggle(off, !past || atBeta)
    }
    const ask = () => {
      if (!queued) {
        queued = true
        window.requestAnimationFrame(upd)
      }
    }
    window.addEventListener("scroll", ask, { passive: true })
    window.addEventListener("resize", ask)
    upd()
    return () => {
      window.removeEventListener("scroll", ask)
      window.removeEventListener("resize", ask)
    }
  }, [])

  return (
    <div className={c("sticky-cta")} ref={barRef}>
      <a className={c("btn btn-primary")} href="#beta">
        Request beta access
      </a>
    </div>
  )
}

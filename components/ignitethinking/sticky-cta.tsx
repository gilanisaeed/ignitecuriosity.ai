"use client"

import { useEffect, useRef } from "react"
import { c } from "@/app/ignitethinking/cx"

// The pinned beta bar, ported from the draft's second <script> (v3.25, widened
// in v3.42 W-1 to every screen size): it appears once the visitor has scrolled
// past the maze and steps aside while the beta section is on screen. Measured
// on scroll, not with IntersectionObserver (v3.52: once the beta section is
// reached it stays hidden, so it never returns over the footer), so a jump straight past the maze
// (such as the announcement link) still counts. It starts hidden ("off"), as
// in the draft's markup.

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
      /* v3.52: reached or passed, so it never returns over the footer */
      const atBeta = b.top < window.innerHeight
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
    <div className={c("sticky-cta off")} ref={barRef} role="region" aria-label="Founding Families beta">
      <div className={c("wrap pin")}>
        <p className={c("pin-t")}>
          <b>Founding Families beta</b>
          <span>Opens late November 2026</span>
          <span>Grades 4 and 5</span>
        </p>
        <a className={c("btn btn-primary")} href="#beta">
          Request beta access
        </a>
      </div>
    </div>
  )
}

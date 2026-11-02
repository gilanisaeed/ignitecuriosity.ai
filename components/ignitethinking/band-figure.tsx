"use client"

import { useEffect, useRef } from "react"
import styles from "@/app/ignitethinking/page.module.css"

// The independence figure in the honest band, ported from the tail of the
// draft's <script>: scroll-driven where the browser supports
// animation-timeline, otherwise played once on entry. Never loops, and
// without JavaScript it rests in its final state.

export function BandFigure() {
  const figRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const fig = figRef.current
    if (!fig) return
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.CSS && CSS.supports && CSS.supports("animation-timeline: view()")) return
    if (!("IntersectionObserver" in window)) {
      fig.classList.add(styles.play)
      return
    }
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            fig.classList.add(styles.play)
            io.disconnect()
          }
        })
      },
      { threshold: 0.35 },
    )
    io.observe(fig)
    return () => io.disconnect()
  }, [])

  return (
    <figure
      ref={figRef}
      style={{ margin: 0 }}
      aria-label="Support decreasing over time, from assisted to less assisted to independent"
    >
      <div className={styles.track}>
        <div className={styles.support}></div>
        <div className={styles.walker}></div>
      </div>
      <div className={styles.stages}>
        <span>Assisted</span>
        <span>Less assisted</span>
        <span>Independent</span>
      </div>
    </figure>
  )
}

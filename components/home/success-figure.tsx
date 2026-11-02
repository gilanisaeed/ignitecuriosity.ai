"use client"

import { useEffect, useRef } from "react"
import styles from "@/app/page.module.css"

// Ported from the home draft's only <script> (motion only; nothing on the
// page depends on it). Where the browser drives the figure from scroll
// (animation-timeline: view()), it does nothing; otherwise it plays the
// figure once when it enters view. Per the handoff, if IntersectionObserver
// is missing the figure plays immediately.

export function SuccessFigure() {
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
      className={styles["s-fig"]}
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

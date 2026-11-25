"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./site-chrome.module.css"

// The phone menu button, ported from home draft v8.30's header script: the
// button opens and closes the links (aria-expanded), Escape closes them and
// returns focus to the button, and following a link closes them. It toggles
// .open on the header, which the CSS reads. The links are hidden only while
// the root carries the "js" class (set in app/layout.tsx before paint), so
// without script they simply show.

export function SiteMenuButton({ controls }: { controls: string }) {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const bar = ref.current?.closest("header")
    if (!bar) return
    bar.classList.toggle(styles.open, open)
  }, [open])

  useEffect(() => {
    const btn = ref.current
    const bar = btn?.closest("header")
    if (!btn || !bar) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setOpen(false)
        btn.focus()
      }
    }
    const onLink = (e: Event) => {
      if ((e.target as Element).closest("nav a")) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    bar.addEventListener("click", onLink)
    return () => {
      document.removeEventListener("keydown", onKey)
      bar.removeEventListener("click", onLink)
    }
  }, [])

  return (
    <button
      ref={ref}
      className={styles["menu-btn"]}
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      onClick={() => setOpen((o) => !o)}
    >
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
        <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      Menu
    </button>
  )
}

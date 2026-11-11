import Link from "next/link"
import styles from "./site-chrome.module.css"

// Ported from the drafts' <footer> (docs/handoff-2026-11-01/source/; the
// dark tone from home v8.17 in docs/handoff-2026-11-10/source/). The drafts'
// "Draft v…" tail label is review-only and does not ship (handoff section 4.2).

type SiteFooterProps = {
  /** "dark": home v8.17's deep purple footer. */
  tone?: "light" | "dark"
}

export function SiteFooter({ tone = "light" }: SiteFooterProps) {
  return (
    <footer className={`${styles.footer}${tone === "dark" ? ` ${styles.dark}` : ""}`}>
      <div className={styles.wrap}>
        <span className={styles.tag}>Learning to think with AI, not just use it.</span>
        <span>&copy; 2026 Ignite Curiosity Lab</span>
        <Link href="/privacy/">Privacy notice</Link>
        <a href="mailto:hello@ignitecuriosity.ai">Contact</a>
        <a href="https://app.ignitecuriosity.ai/">Log in</a>
      </div>
    </footer>
  )
}

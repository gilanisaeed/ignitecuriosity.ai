import Link from "next/link"
import styles from "./site-chrome.module.css"

// Ported from the 1 Nov 2026 drafts' <footer>
// (docs/handoff-2026-11-01/source/). The drafts' "Draft v…" tail label is
// review-only and does not ship (handoff section 4.2).

type SiteFooterProps = {
  /** "deep" for the deep purple footer (IgniteThinking v3.21). */
  tone?: "deep"
}

export function SiteFooter({ tone }: SiteFooterProps = {}) {
  return (
    <footer className={tone ? `${styles.footer} ${styles[tone]}` : styles.footer}>
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

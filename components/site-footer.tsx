import Link from "next/link"
import styles from "./site-chrome.module.css"

// Ported from home draft v8.20's <footer> (docs/handoff-2026-11-10/source/),
// used site-wide outside IgniteEd. The Instagram and LinkedIn links open in a
// new tab, as the draft has them (v8.18). The draft's "Draft v…" tail label is
// review-only and does not ship (handoff section 4.2).

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <span className={styles.tag}>Learning to think with AI, not just use it.</span>
        <span>&copy; 2026 Ignite Curiosity Lab</span>
        <Link href="/privacy/">Privacy notice</Link>
        <a href="mailto:hello@ignitecuriosity.ai">Contact</a>
        <a href="https://app.ignitecuriosity.ai/">Log in</a>
        <a href="https://www.instagram.com/ignitecuriositylab/" target="_blank" rel="noopener">
          Instagram
        </a>
        <a href="https://www.linkedin.com/company/ignite-curiosity-lab/" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

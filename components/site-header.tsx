import Link from "next/link"
import styles from "./site-chrome.module.css"

// Ported from the 1 Nov 2026 drafts' <header class="topbar">
// (docs/handoff-2026-11-01/source/). Markup and copy as in the drafts;
// the <details> menu works without JavaScript.

const navItems = [
  { key: "ignitethinking", href: "/ignitethinking/", label: "IgniteThinking" },
  { key: "igniteed", href: "/igniteed/", label: "IgniteEd" },
  { key: "science", href: "/science/", label: "The Science" },
  { key: "about", href: "/about/", label: "About" },
] as const

type SiteHeaderProps = {
  /** Which nav link carries aria-current="page"; "home" puts it on the brandmark. */
  current?: "home" | "ignitethinking" | "igniteed" | "science" | "about"
  /** The small mono label right of the nav. */
  tail?: string
}

export function SiteHeader({ current, tail = "A research-driven product lab" }: SiteHeaderProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.brandmark} aria-current={current === "home" ? "page" : undefined}>
          Ignite Curiosity Lab
        </Link>
        <details className={styles.menu}>
          <summary aria-label="Open menu">
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Menu
          </summary>
        </details>
        <nav aria-label="Products and pages">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href} aria-current={current === item.key ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <span className={`${styles.lab} ${styles.tail}`}>{tail}</span>
        <a className={styles.login} href="https://app.ignitecuriosity.ai/">
          Log in
        </a>
      </div>
    </header>
  )
}

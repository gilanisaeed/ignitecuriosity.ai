import Link from "next/link"
import styles from "./site-chrome.module.css"

// Ported from home draft v8.17's <header class="topbar"> and announcement
// bar (docs/handoff-2026-11-10/source/), used site-wide outside IgniteEd.
// The Science is out of the main menu (23 Sep ruling, restored in v8.5);
// /science/ stays reachable from the pages that link to it. Markup and copy
// as in the draft; the <details> menu works without JavaScript.

const navItems = [
  { key: "ignitethinking", href: "/ignitethinking/", label: "IgniteThinking" },
  { key: "igniteed", href: "/igniteed/", label: "IgniteEd" },
  { key: "about", href: "/about/", label: "About" },
] as const

type SiteHeaderProps = {
  /** Which nav link carries aria-current="page"; "home" puts it on the brandmark. */
  current?: "home" | "ignitethinking" | "igniteed" | "science" | "about"
  /** The small mono label right of the nav. */
  tail?: string
  /** Home v8.11+: the orange announcement bar above the header. */
  announce?: boolean
}

export function SiteHeader({
  current,
  tail = "A research-driven product lab",
  announce = false,
}: SiteHeaderProps) {
  return (
    <>
      {announce && (
        <div className={styles.announce}>
          IgniteThinking Founding Families beta &middot; opens late November 2026
          <Link href="/ignitethinking/">See IgniteThinking</Link>
        </div>
      )}
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
    </>
  )
}

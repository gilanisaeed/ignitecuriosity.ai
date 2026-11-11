import Link from "next/link"
import styles from "./site-chrome.module.css"

// Ported from the drafts' <header class="topbar">
// (docs/handoff-2026-11-01/source/ and, for the dark tone, the announcement
// bar and the menu without The Science, docs/handoff-2026-11-10/source/
// home v8.17). Markup and copy as in the drafts; the <details> menu works
// without JavaScript.

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
  /** "dark": home v8.17's deep purple header with the orange Log in. */
  tone?: "light" | "dark"
  /** Home v8.5+: The Science is out of the main menu (23 Sep ruling). */
  hideScience?: boolean
  /** Home v8.11+: the orange announcement bar above the header. */
  announce?: boolean
}

export function SiteHeader({
  current,
  tail = "A research-driven product lab",
  tone = "light",
  hideScience = false,
  announce = false,
}: SiteHeaderProps) {
  const items = hideScience ? navItems.filter((item) => item.key !== "science") : navItems
  return (
    <>
      {announce && (
        <div className={styles.announce}>
          IgniteThinking Founding Families beta &middot; opens late November 2026
          <Link href="/ignitethinking/">See IgniteThinking</Link>
        </div>
      )}
      <header className={`${styles.topbar}${tone === "dark" ? ` ${styles.dark}` : ""}`}>
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
            {items.map((item) => (
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

import styles from "./page.module.css"

/** Map the draft's space-separated class names to this page's CSS Module names. */
export const c = (names: string) =>
  names
    .split(" ")
    .filter(Boolean)
    .map((n) => styles[n] ?? n)
    .join(" ")

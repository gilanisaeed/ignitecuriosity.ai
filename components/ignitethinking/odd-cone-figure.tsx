import styles from "@/app/ignitethinking/page.module.css"

// The Warm-Up card's figure, from the draft's inline SVG: four ice-cream
// cones, A to D, each stacked with scoops in a repeating pattern. C breaks
// it. The draft repeats one cone four times; only the position, the scoop
// colours (bottom to top) and the letter change, so they are data here.

const SCOOP =
  "M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z"
const PINK = "#F58FB0"
const BLUE = "#5AB0C9"
const GREEN = "#59C36A"
const BROWN = "#8B5A2B"

const CONES = [
  { x: 27, label: "A", scoops: [PINK, BLUE, PINK, BLUE] },
  { x: 65, label: "B", scoops: [GREEN, BROWN, GREEN, BROWN] },
  { x: 103, label: "C", scoops: [BLUE, PINK, PINK, BLUE] },
  { x: 141, label: "D", scoops: [GREEN, BLUE, GREEN, BLUE] },
]

export function OddConeFigure() {
  return (
    <svg
      className={styles.pzv}
      viewBox="0 0 168 100"
      role="img"
      aria-label="Four ice-cream cones, A to D, each stacked with scoops in a repeating pattern. One of them quietly breaks the pattern."
    >
      <defs>
        <clipPath id="oc-cl">
          <path d="M-10 0L10 0L0 26Z" />
        </clipPath>
      </defs>
      {CONES.map((cone) => (
        <g key={cone.label} transform={`translate(${cone.x} 0)`}>
          <ellipse cx="0" cy="88.5" rx="10" ry="1.9" fill="var(--app-line)" />
          <g transform="translate(0 61)">
            <path d="M-10 0L10 0L0 26Z" fill="var(--app-gold)" />
            <g clipPath="url(#oc-cl)" fill="none" stroke="#CB3B1B" strokeOpacity=".3" strokeWidth=".8">
              <path d="M-14 2l28 28M-14 10l28 28M-14-6l28 28M14 2l-28 28M14 10l-28 28M14-6l-28 28" />
            </g>
            <path d="M-10 0L10 0L0 26Z" fill="none" stroke="var(--app-ink2)" strokeWidth=".7" strokeLinejoin="round" />
          </g>
          {cone.scoops.map((fill, i) => (
            <g key={i} transform={`translate(0 ${58 - i * 10})`}>
              <path
                d={SCOOP}
                fill={fill}
                stroke="var(--app-ink2)"
                strokeOpacity=".5"
                strokeWidth=".7"
                strokeLinejoin="round"
              />
              <path
                d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4"
                fill="none"
                stroke="#FFFFFF"
                strokeOpacity=".7"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>
          ))}
          <path
            d="M0 17.5c.4-2.6 1.6-4.2 3.4-5"
            fill="none"
            stroke="var(--app-ink2)"
            strokeWidth=".8"
            strokeLinecap="round"
          />
          <circle cx="0" cy="19.6" r="2.9" fill="var(--app-coral)" />
          <text
            x="0"
            y="99"
            textAnchor="middle"
            style={{ fontFamily: "var(--font-m)" }}
            fontSize="6.5"
            fill="var(--app-ink2)"
          >
            {cone.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

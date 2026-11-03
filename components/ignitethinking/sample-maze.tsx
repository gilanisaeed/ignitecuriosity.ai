"use client"

import { useEffect, useRef } from "react"
import styles from "@/app/ignitethinking/page.module.css"

// The playable sample maze, ported from the draft's <script> in
// docs/handoff-2026-11-03/source/IgniteThinking-Page-v3_21.html with the
// logic as written. It is a sample written only for the website and is NOT
// one of the app's puzzles; nothing here is a stored answer: a walk is
// checked by following the arrows. The guide's help is written in advance
// and never receives the answer, only how many walks there have been.
// Without JavaScript the grid stays empty, exactly as in the draft file.

type Dir = "R" | "D" | "L" | "U"

const START: (Dir | null)[][] = [
  ["R", "D", "L"],
  ["D", "L", "D"],
  ["U", "L", null],
]
const HOUSE = { r: 2, c: 2 }
const STEP: Record<Dir, [number, number]> = { R: [0, 1], D: [1, 0], L: [0, -1], U: [-1, 0] }
const GLYPH: Record<Dir, string> = { R: "→", D: "↓", L: "←", U: "↑" }
const WORD: Record<Dir, string> = { R: "right", D: "down", L: "left", U: "up" }
const TURN: Dir[] = ["R", "D", "L", "U"]

const HINTS = [
  "Watch the walk again. Which square does it reach a second time? That is where the circle closes.",
  "Work backwards. Which squares could step straight into the House? Can your walk ever reach one of them?",
  "List the squares your walk visits, in order. For each one, ask: if this arrow pointed another way, where would the walk go next, and could that lead to the House?",
]
const OPENING = "Walk the path once before you change anything, and watch where it goes."

export function SampleMaze() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)

    const mazeEl = root.querySelector("#maze") as HTMLDivElement
    const say = root.querySelector("#say") as HTMLDivElement
    const route = root.querySelector("#route") as HTMLParagraphElement
    const walkBtn = root.querySelector("#walk") as HTMLButtonElement
    const nudgeBtn = root.querySelector("#nudge") as HTMLButtonElement
    const resetBtn = root.querySelector("#reset") as HTMLButtonElement
    const whyEl = root.querySelector("#why-box") as HTMLParagraphElement
    const chipEl = root.querySelector("#trychip") as HTMLButtonElement
    const sparkEl = root.querySelector(`.${styles.spark}`) as SVGElement | null

    let grid: (Dir | null)[][]
    let changed: { r: number; c: number } | null
    let walks: number
    let solved: boolean
    let busy: boolean
    let hintIndex = 0
    let walkTimer: ReturnType<typeof setTimeout> | undefined

    const guide = {
      opening: OPENING,
      nudge(w: number) {
        if (w === 0) return "Try one walk first. Press Walk the path and watch where it goes."
        if (hintIndex < HINTS.length) return HINTS[hintIndex++]
        return "That is all the help I have for this maze. The last move is yours."
      },
      reset() {
        hintIndex = 0
      },
    }

    function inside(r: number, c: number) {
      return r >= 0 && r < 3 && c >= 0 && c < 3
    }
    function valid(r: number, c: number, d: Dir) {
      return inside(r + STEP[d][0], c + STEP[d][1])
    }
    function speak(t: string) {
      say.innerHTML = ""
      const s = document.createElement("span")
      s.className = styles.who
      s.textContent = "Ignite"
      say.appendChild(s)
      say.appendChild(document.createTextNode(t))
    }
    function name(r: number, c: number) {
      return "row " + (r + 1) + ", column " + (c + 1)
    }

    function label(btn: HTMLButtonElement, r: number, c: number) {
      const d = grid[r][c] as Dir
      btn.setAttribute(
        "aria-label",
        (r === 0 && c === 0 ? "Start square, " : "") +
          name(r, c) +
          ": arrow points " +
          WORD[d] +
          (changed && changed.r === r && changed.c === c ? ", changed" : "") +
          ". Tap to turn it.",
      )
    }

    function build() {
      mazeEl.innerHTML = ""
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 3; c++) {
          if (r === HOUSE.r && c === HOUSE.c) {
            const h = document.createElement("div")
            h.className = `${styles.cell} ${styles.house}`
            h.id = "cell-" + r + "-" + c
            h.setAttribute("role", "img")
            h.setAttribute("aria-label", "The House, " + name(r, c))
            h.innerHTML =
              '<svg viewBox="0 0 34 34" aria-hidden="true"><path d="M5 16 17 5l12 11" fill="none" stroke="#CB3B1B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 14v14h16V14" fill="#FFFFFF" stroke="#2C2440" stroke-width="2.4" stroke-linejoin="round"/><rect x="15" y="20" width="5" height="8" rx="1" fill="#F7B23B"/></svg>'
            mazeEl.appendChild(h)
            continue
          }
          const b = document.createElement("button")
          b.type = "button"
          b.className = styles.cell
          b.id = "cell-" + r + "-" + c
          b.innerHTML =
            (r === 0 && c === 0 ? `<span class="${styles.start}" aria-hidden="true">Start</span>` : "") +
            `<span class="${styles.arrow}" aria-hidden="true">` +
            GLYPH[grid[r][c] as Dir] +
            "</span>"
          b.addEventListener("click", () => turn(r, c))
          label(b, r, c)
          mazeEl.appendChild(b)
        }
    }

    function cell(r: number, c: number) {
      return document.getElementById("cell-" + r + "-" + c) as HTMLElement
    }
    function clearMarks() {
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 3; c++) {
          const e = cell(r, c)
          e.classList.remove(styles.on, styles.again, styles.reached)
          const n = e.querySelector(`.${styles.stepn}`)
          if (n) n.remove()
        }
    }
    function paintChanged() {
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 3; c++) {
          if (r === HOUSE.r && c === HOUSE.c) continue
          const e = cell(r, c)
          e.classList.toggle(styles.changed, !!(changed && changed.r === r && changed.c === c))
          ;(e.querySelector(`.${styles.arrow}`) as HTMLElement).textContent = GLYPH[grid[r][c] as Dir]
          label(e as HTMLButtonElement, r, c)
        }
    }

    function turn(r: number, c: number) {
      if (solved || busy) return
      clearMarks()
      let note = ""
      if (changed && (changed.r !== r || changed.c !== c)) {
        grid[changed.r][changed.c] = START[changed.r][changed.c]
        note = "Only one arrow may change, so the first one went back. "
      }
      let k = TURN.indexOf(grid[r][c] as Dir)
      do {
        k = (k + 1) % 4
      } while (!valid(r, c, TURN[k]))
      grid[r][c] = TURN[k]
      changed = grid[r][c] === START[r][c] ? null : { r, c }
      paintChanged()
      if (note) speak(note + "Walk the path to see what your change does.")
    }

    function simulate() {
      let r = 0,
        c = 0
      const seen: Record<string, 1> = { "0,0": 1 }
      const path: [number, number][] = [[0, 0]]
      while (true) {
        if (r === HOUSE.r && c === HOUSE.c) return { home: true, path }
        const d = STEP[grid[r][c] as Dir]
        r += d[0]
        c += d[1]
        path.push([r, c])
        if (seen[r + "," + c]) return { home: false, path }
        seen[r + "," + c] = 1
      }
    }

    type Sim = ReturnType<typeof simulate>

    function finish(res: Sim) {
      busy = false
      walks++
      const steps = res.path.length - 1
      route.textContent =
        "Your walk: " +
        res.path.map((p) => (p[0] === HOUSE.r && p[1] === HOUSE.c ? "the House" : name(p[0], p[1]))).join(", then ") +
        "."
      if (res.home) {
        solved = true
        walkBtn.disabled = true
        nudgeBtn.disabled = true
        speak(
          "You reached the House in " +
            steps +
            " steps, and you found the fix, not me. Now ask yourself: why did that one square matter, and not the others?",
        )
      } else if (!changed) {
        speak(
          "The walk came back to a square it had already visited, so it would go round forever. Which square starts the circle?",
        )
      } else {
        speak("Still a circle. Try a different arrow, or turn this one another way, and walk again.")
      }
    }

    function mark(p: [number, number], i: number, last: boolean, res: Sim) {
      const e = cell(p[0], p[1])
      if (p[0] === HOUSE.r && p[1] === HOUSE.c) {
        e.classList.add(styles.reached)
        return
      }
      if (last && !res.home) {
        e.classList.add(styles.again)
        return
      }
      e.classList.add(styles.on)
      const n = document.createElement("span")
      n.className = styles.stepn
      n.setAttribute("aria-hidden", "true")
      n.textContent = String(i + 1)
      e.appendChild(n)
    }

    const onWalk = () => {
      if (solved || busy) return
      clearMarks()
      const res = simulate()
      if (reduce) {
        res.path.forEach((p, i) => mark(p, i, i === res.path.length - 1, res))
        finish(res)
        return
      }
      busy = true
      let i = 0
      const next = () => {
        mark(res.path[i], i, i === res.path.length - 1, res)
        i++
        if (i < res.path.length) walkTimer = setTimeout(next, 280)
        else finish(res)
      }
      next()
    }
    const onNudge = () => {
      if (!solved && !busy) speak(guide.nudge(walks))
    }

    function init() {
      grid = START.map((row) => row.slice())
      changed = null
      walks = 0
      solved = false
      busy = false
      guide.reset()
      walkBtn.disabled = false
      nudgeBtn.disabled = false
      build()
      route.textContent = ""
      speak(guide.opening)
    }

    /* There is no way to ask for the answer, here or in the app.
       The chip points a curious grown-up at why. */
    const onChip = () => {
      whyEl.classList.remove(styles.lit)
      void whyEl.offsetWidth
      whyEl.classList.add(styles.lit)
      whyEl.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" })
    }

    walkBtn.addEventListener("click", onWalk)
    nudgeBtn.addEventListener("click", onNudge)
    resetBtn.addEventListener("click", init)
    chipEl.addEventListener("click", onChip)
    init()

    let sparkAnim: Animation | undefined
    if (!reduce && sparkEl && "animate" in sparkEl) {
      sparkAnim = sparkEl.animate(
        [
          { opacity: 0.4, transform: "scale(.86)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 520, iterations: 1, easing: "cubic-bezier(.34,1.4,.64,1)" },
      )
    }

    return () => {
      walkBtn.removeEventListener("click", onWalk)
      nudgeBtn.removeEventListener("click", onNudge)
      resetBtn.removeEventListener("click", init)
      chipEl.removeEventListener("click", onChip)
      if (walkTimer) clearTimeout(walkTimer)
      if (sparkAnim) sparkAnim.cancel()
    }
  }, [])

  return (
    <div className={styles.demo} id="try" ref={rootRef}>
      <div className={styles["demo-head"]}>
        <span className={styles.dot} aria-hidden="true"></span>
        <span className={styles.t}>Try it yourself</span>
        <span className={`${styles.t} ${styles.right}`}>Sample maze · Explorer style</span>
      </div>
      <div className={styles["demo-body"]}>
        <p className={styles.q}>
          Start at the flag. On each square you must go the way its arrow points. Right now the walk goes round in
          circles and never reaches the House. You may change <strong>one</strong> arrow. Which one opens the path?
        </p>
        <div className={styles["maze-wrap"]}>
          <div
            className={styles.maze}
            id="maze"
            role="group"
            aria-label="Arrow maze, 3 squares by 3. Start is top left, the House is bottom right."
          ></div>
        </div>
        <p className={styles["map-cap"]}>Tap a square to turn its arrow. Then walk the path.</p>
        <div className={styles.controls}>
          <button className={`${styles.abtn} ${styles["abtn-pri"]}`} type="button" id="walk">
            Walk the path
          </button>
          <button className={`${styles.abtn} ${styles["abtn-gho"]}`} type="button" id="nudge">
            Need a nudge?
          </button>
          <button className={`${styles.abtn} ${styles["abtn-gho"]}`} type="button" id="reset">
            Start over
          </button>
        </div>
        <div className={styles.guide} id="guide">
          <div className={styles["guide-row"]}>
            <svg className={styles.spark} viewBox="0 0 40 40" aria-hidden="true">
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#FB5A3C" />
                  <stop offset="1" stopColor="#F7B23B" />
                </linearGradient>
              </defs>
              <path d="M20 3c2 8 7 13 15 15-8 2-13 7-15 15-2-8-7-13-15-15C13 16 18 11 20 3Z" fill="url(#sg)" />
            </svg>
            <div className={styles.bubble} id="say" aria-live="polite">
              <span className={styles.who}>Ignite</span>Walk the path once before you change anything, and watch where
              it goes.
            </div>
          </div>
          <p className={styles["sr-only"]} id="route" aria-live="polite"></p>
          <button className={styles.chip} type="button" id="trychip">
            There is no box to ask for the answer. Why?
          </button>
        </div>
        <p className={styles.why} id="why-box">
          <b>We do not ask the guide to keep the answer secret. The guide is never given it.</b> And there is no chat
          box, here or in the app, so there is nowhere to ask and nothing to talk out of. In the app, every hint is
          written in advance, not generated on the spot.
        </p>
        <p className={styles["aside-note"]}>
          A sample maze written for this page, in the style of the app&rsquo;s Explorer puzzles. It runs in your
          browser, with written hints and no AI.
        </p>
      </div>
    </div>
  )
}

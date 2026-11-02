import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Baloo_2, Nunito } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SampleMaze } from "@/components/ignitethinking/sample-maze"
import { BandFigure } from "@/components/ignitethinking/band-figure"
import styles from "./page.module.css"

// Ported from docs/handoff-2026-11-01/source/IgniteThinking-Page-v3_4.html.
// Copy is final and audited (handoff rule 3): port verbatim, no edits.
// Review-only elements (draft banner, todo chips, draft footer tail,
// version-history comments) do not ship; the two screenshot slots are
// gated behind SCREENSHOTS_READY until the files exist (handoff 4.2).

// The app-skin fonts for the product depictions (demo frame, puzzle cards),
// self-hosted via next/font like the site fonts; ruled in by Saeed, 1 Nov
// 2026, deviating from handoff 4.3's three-font list.
const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-baloo", display: "swap" })
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-nunito", display: "swap" })

const SCREENSHOTS_READY = false

export const metadata: Metadata = {
  title: "IgniteThinking",
  description:
    "IgniteThinking, for grades 4 and 5: a thinking app designed to build independent reasoning. Your child works computational thinking puzzles and math puzzles through a design thinking process, with help in small steps from a guide that is never given the answer.",
}

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 8.6l3.6 3.6L14 3.8" fill="none" stroke="#56457F" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export default function IgniteThinkingPage() {
  return (
    <div className={`min-h-screen flex flex-col ${styles.shell} ${baloo.variable} ${nunito.variable}`}>
      <SiteHeader current="ignitethinking" tail="Grades 4 and 5 · at home" />
      <main className={`flex-1 ${styles.page}`}>
        {/* ============================== HERO ============================== */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles["hero-grid"]}`}>
            <div>
              <span className={styles.kicker}>IgniteThinking · Founding Families beta</span>
              <h1>
                Your child solves it.<b>The guide is never given the answer.</b>
              </h1>
              <p className={styles.sub}>A thinking app for grades 4 and 5, designed to build independent reasoning.</p>
              <p className={styles.lede}>
                Children work through computational thinking puzzles and math puzzles with a design thinking process:
                they say what is being asked, put down more than one idea, test it, revise as often as they like, and
                explain what they found. Help comes in small steps, written in advance, and only after a real try.
                There is no chat box.
              </p>
              <div className={styles["cta-row"]}>
                <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#try">
                  Try a puzzle
                </a>
                <a className={`${styles.btn} ${styles["btn-onphoto"]}`} href="#beta">
                  Request beta access
                </a>
              </div>
            </div>

            {/* ---------- a sample puzzle, playable ---------- */}
            <SampleMaze />
          </div>
        </section>
        <div className={styles.facts}>
          <div className={styles.wrap}>
            <span>Grades 4 and 5 · ages 9 to 11</span>
            <span>Used at home</span>
            <span>No chat box</span>
            <span>Founding Families beta</span>
          </div>
        </div>

        {/* ========================== WHY REASONING ========================== */}
        <section>
          <div className={`${styles.wrap} ${styles["why-band"]}`}>
            <div>
              <div className={styles.rule} aria-hidden="true"></div>
              <h2>Why reasoning?</h2>
            </div>
            <div>
              <p>
                Your child already has tools that produce answers, and tools that will show the reasoning behind them
                too. IgniteThinking gives them practice at the part we choose not to outsource: framing a problem,
                trying an approach, noticing when it fails, revising it, and explaining why the one that works, works.
              </p>
              <h3>Why grades 4 and 5</h3>
              <p>
                Grades 3 to 5 are when children begin to justify why something is always true, instead of relying on a
                single example. <span className={styles.cite}>NCTM 2000</span> That is the adaptive reasoning the
                National Research Council counts as a core strand of mathematical proficiency.{" "}
                <span className={styles.cite}>NRC 2001</span> Grades 4 and 5 sit inside that window. Reasoning does not
                begin here. It is where we start.
              </p>
              <p style={{ margin: 0 }}>
                <Link href="/science/">How learning science shapes what we build &rarr;</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ========================= HOW A PUZZLE GOES ========================= */}
        <section>
          <div className={styles.wrap}>
            <div className={`${styles.head} ${styles.prose}`}>
              <div className={styles.rule} aria-hidden="true"></div>
              <h2>A consistent thinking loop</h2>
              <p className={styles.muted}>
                Every puzzle runs through the same steps, so your child is never working out how the app behaves. The
                puzzles change. The thinking does not.
              </p>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <h3>Understand</h3>
                <p>Read the situation. Say what is actually being asked before touching a method.</p>
              </div>
              <div className={styles.step}>
                <h3>Define</h3>
                <p>Name the real goal. Most answers that miss are answers to a different question.</p>
              </div>
              <div className={styles.step}>
                <h3>Ideate</h3>
                <p>Put down more than one way it could be done. One idea is not a choice.</p>
              </div>
              <div className={styles.step}>
                <h3>Prototype</h3>
                <p>Build the attempt, with a picture or a tool to think with.</p>
              </div>
              <div className={styles.step}>
                <h3>Test</h3>
                <p>Check it. An attempt that does not work is not the end. It is information, and the child reads it.</p>
              </div>
            </div>
            <div className={styles.branch}>
              <span className={styles.n}>Always available</span>
              <div>
                <h3>Reflect</h3>
                <p>
                  Reflection closes every puzzle, and a child can reach it without having solved anything. A child who
                  stays stuck is never handed the answer to move on.
                </p>
              </div>
            </div>
            <div className={SCREENSHOTS_READY ? styles.two : undefined} style={{ marginTop: 36 }}>
              {SCREENSHOTS_READY && (
                <div className={styles.shot}>
                  <div className={styles["shot-bar"]} aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <div className={styles["shot-slot"]}>
                    <span className={styles.lab}>Screenshot 1 of 2</span>
                    <p>The workspace mid-puzzle, at the moment a hint appears. 16:10.</p>
                  </div>
                </div>
              )}
              <div>
                <h3>What a hint looks like</h3>
                <p>
                  Help comes in small steps, and only after a real try: first a nudge, then a strategy, then a
                  step-by-step scaffold. Every step is written in advance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= MANY PUZZLES ========================= */}
        <section className={styles.tinted}>
          <div className={styles.wrap}>
            <div className={`${styles.head} ${styles.prose}`}>
              <div className={styles.rule} aria-hidden="true"></div>
              <h2>Many puzzles. The same habit of mind.</h2>
              <p className={styles.muted}>
                The maze at the top of this page is a sample written for the website. In the app, puzzles come in
                three bands, and they are not all about numbers.
              </p>
            </div>
            <div className={styles.pz}>
              <div className={styles.pzc} style={{ "--pa": "var(--band-easy)" } as CSSProperties}>
                <span className={styles.bd}>
                  <i aria-hidden="true"></i>Warm-Up
                </span>
                <svg
                  className={styles.pzv}
                  viewBox="0 0 168 100"
                  role="img"
                  aria-label="Five numbered recipe steps in a column, and a question mark: one step is in the wrong place."
                >
                  <g fill="#FFFFFF" stroke="var(--app-line)" strokeWidth="1.5">
                    <rect x="34" y="6" width="96" height="14" rx="4" />
                    <rect x="34" y="24" width="96" height="14" rx="4" />
                    <rect x="34" y="42" width="96" height="14" rx="4" />
                    <rect x="34" y="60" width="96" height="14" rx="4" />
                    <rect x="34" y="78" width="96" height="14" rx="4" />
                  </g>
                  <g fill="var(--app-ink2)" style={{ fontFamily: "var(--font-m)" }} fontSize="9">
                    <text x="40" y="16">1</text>
                    <text x="40" y="34">2</text>
                    <text x="40" y="52">3</text>
                    <text x="40" y="70">4</text>
                    <text x="40" y="88">5</text>
                  </g>
                  <g stroke="var(--app-line)" strokeWidth="3" strokeLinecap="round">
                    <path d="M52 13h56M52 31h48M52 49h60M52 67h44M52 85h52" />
                  </g>
                  <circle cx="148" cy="49" r="11" fill="var(--pa)" opacity=".16" />
                  <text x="148" y="54" style={{ fontFamily: "var(--font-app-h)" }} fontSize="14" textAnchor="middle" fill="var(--app-ink)">
                    ?
                  </text>
                </svg>
                <h3>The Broken Recipe</h3>
                <p>Find the step that&rsquo;s out of place.</p>
                <span className={styles.ct}>Debugging: tracing each step to find where it breaks</span>
              </div>
              <div className={styles.pzc} style={{ "--pa": "var(--band-medium)" } as CSSProperties}>
                <span className={styles.bd}>
                  <i aria-hidden="true"></i>Explorer
                </span>
                <svg
                  className={styles.pzv}
                  viewBox="0 0 168 100"
                  role="img"
                  aria-label="Five blank map regions, A through E, that share borders"
                >
                  <g fill="#FFFFFF" stroke="var(--app-line)" strokeWidth="1.5">
                    <path d="M40 6h88v18H40z" />
                    <path d="M40 24h88v20H40z" />
                    <path d="M40 44h44v26H40z" />
                    <path d="M84 44h44v26H84z" />
                    <path d="M40 70h88v22H40z" />
                  </g>
                  <g fill="var(--app-ink2)" style={{ fontFamily: "var(--font-app-h)" }} fontSize="11" textAnchor="middle">
                    <text x="84" y="19">E</text>
                    <text x="84" y="39">D</text>
                    <text x="62" y="62">A</text>
                    <text x="106" y="62">B</text>
                    <text x="84" y="85">C</text>
                  </g>
                </svg>
                <h3>Fewest Colours</h3>
                <p>Color the map with as few colors as you can.</p>
                <span className={styles.ct}>Abstraction: graph coloring</span>
              </div>
              <div className={styles.pzc} style={{ "--pa": "var(--band-hard)" } as CSSProperties}>
                <span className={styles.bd}>
                  <i aria-hidden="true"></i>Challenger
                </span>
                <svg
                  className={styles.pzv}
                  viewBox="0 0 168 100"
                  role="img"
                  aria-label="A snowflake branch that splits into three, and each tip splits into three again"
                >
                  <g fill="none" stroke="var(--app-ink2)" strokeWidth="2" strokeLinecap="round">
                    <path d="M84 96V62" />
                    <path d="M84 62L56 40M84 62V30M84 62l28-22" />
                    <path d="M56 40l-12-6M56 40l-6-12M56 40l2-13" />
                    <path d="M84 30l-9-9M84 30V17M84 30l9-9" />
                    <path d="M112 40l12-6M112 40l6-12M112 40l-2-13" />
                  </g>
                  <g fill="var(--pa)">
                    <circle cx="44" cy="34" r="2.6" />
                    <circle cx="50" cy="28" r="2.6" />
                    <circle cx="58" cy="27" r="2.6" />
                    <circle cx="75" cy="21" r="2.6" />
                    <circle cx="84" cy="17" r="2.6" />
                    <circle cx="93" cy="21" r="2.6" />
                    <circle cx="124" cy="34" r="2.6" />
                    <circle cx="118" cy="28" r="2.6" />
                    <circle cx="110" cy="27" r="2.6" />
                  </g>
                </svg>
                <h3>The Copycat Snowflake</h3>
                <p>Count the tips before you can&rsquo;t.</p>
                <span className={styles.ct}>Recursion and self-similarity</span>
              </div>
            </div>
            <p className={styles.muted} style={{ marginTop: 20, fontSize: ".95rem" }}>
              Logic, patterns, planning, constraints and optimization, across three difficulty bands, alongside math
              puzzles on grade 4 and 5 ideas such as fractions, common multiples, proportional reasoning and volume. No
              coding required.
            </p>
          </div>
        </section>

        {/* ======================= THE GROWN-UP VIEW ======================= */}
        <section>
          <div className={`${styles.wrap} ${SCREENSHOTS_READY ? styles.two : ""}`.trim()}>
            <div>
              <div className={styles.rule} aria-hidden="true"></div>
              <h2>See the thinking, not just the score.</h2>
              <p>
                You get your child&rsquo;s thinking, in their own words, next to a plain view of how much help they
                used, so you can ask a better question at dinner.
              </p>
              <ul className={styles.ticks}>
                <li>
                  <Check />
                  <span>The journal: what your child wrote at each step, kept in their own words.</span>
                </li>
                <li>
                  <Check />
                  <span>Which puzzles were solved outright, and which were solved with help.</span>
                </li>
                <li>
                  <Check />
                  <span>
                    Whether your child is needing less help over time, and whether a later attempt was completed
                    without opening any help.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>The reflections, which are often the most interesting thing on the page.</span>
                </li>
                <li>
                  <Check />
                  <span>Read-only, always. Nothing here lets a grown-up edit a child&rsquo;s work.</span>
                </li>
              </ul>
              <p className={styles.muted} style={{ marginTop: 18, fontSize: ".94rem" }}>
                No points. No streaks. No leaderboards.
              </p>
            </div>
            {SCREENSHOTS_READY && (
              <div className={styles.shot}>
                <div className={styles["shot-bar"]} aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className={styles["shot-slot"]}>
                  <span className={styles.lab}>Screenshot 2 of 2</span>
                  <p>The grown-up review, captured from the running app. 16:10.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================= THE HONEST BAND ========================= */}
        <section className={styles.tinted}>
          <div className={styles.wrap}>
            <div className={styles.band}>
              <div>
                <span className={styles.lab}>What we will say plainly</span>
                <h2>The learner needs us less.</h2>
                <p>
                  No chat box, and nothing generated on the spot: every word of guidance your child sees was written in
                  advance by our team. We measure what matters most to us:{" "}
                  <strong>whether your child needs less help as they go, and still solves without it.</strong>
                </p>
                <p>
                  Independent reasoning is what the app is designed to build, and we will report it once we have
                  measured it.
                </p>
              </div>
              <BandFigure />
            </div>
          </div>
        </section>

        {/* ============================== BETA ============================== */}
        <section id="beta">
          <div className={styles.wrap}>
            <div className={styles.beta}>
              <div>
                <div className={styles.rule} aria-hidden="true"></div>
                <h2>The Founding Families beta opens in late November</h2>
                <p>
                  Your child gets the whole puzzle library, computational thinking puzzles and math puzzles, and a
                  guide that will not do the work for them. Your family helps us learn what works, what is confusing,
                  and what we should fix. We are keeping the group small, so we can answer every family who writes to
                  us.
                </p>
                <div className={styles["cta-row"]}>
                  <a
                    className={`${styles.btn} ${styles["btn-primary"]}`}
                    href="mailto:hello@ignitecuriosity.ai?subject=IgniteThinking%20beta"
                  >
                    Request beta access
                  </a>
                </div>
                <p className={styles.have}>
                  Already a Founding Family? <a href="https://app.ignitecuriosity.ai/">Log in</a>. Have an invite code?{" "}
                  <a href="https://app.ignitecuriosity.ai/register">Set up your family</a>.
                </p>
              </div>
              <div>
                <p className={styles.lab} style={{ marginBottom: 12 }}>
                  What a family gets
                </p>
                <ul>
                  <li>
                    <Check />
                    <span>The full puzzle library, across three difficulty bands, all open from the first day.</span>
                  </li>
                  <li>
                    <Check />
                    <span>The guide, with every hint written in advance.</span>
                  </li>
                  <li>
                    <Check />
                    <span>The journal and the grown-up review.</span>
                  </li>
                  <li>
                    <Check />
                    <span>A direct line to the people who built it, and a say in what changes.</span>
                  </li>
                </ul>
                <p className={styles.bridge}>
                  IgniteThinking is where <Link href="/">Ignite Curiosity Lab</Link> starts. We are a research-driven
                  product lab: learning science, AI engineering, and a habit of claiming only what our data supports.{" "}
                  <Link href="/science/">The science &rarr;</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles["sticky-cta"]}>
          <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#beta">
            Request beta access
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

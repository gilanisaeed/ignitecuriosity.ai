import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Baloo_2, Nunito } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SampleMaze } from "@/components/ignitethinking/sample-maze"
import { BetaForm } from "@/components/ignitethinking/beta-form"
import { OddConeFigure } from "@/components/ignitethinking/odd-cone-figure"
import styles from "./page.module.css"

// Ported from docs/handoff-2026-11-03/source/IgniteThinking-Page-v3_21.html.
// Copy is final and audited (handoff rule 3): port verbatim, no edits.
// Review-only elements (draft banner, todo chips, draft footer tail,
// version-history comments) do not ship (handoff 4.2). The draft's three
// embedded screenshots live in public/images/ignitethinking/.

// The app-skin fonts for the product depictions (demo frame, puzzle cards),
// self-hosted via next/font like the site fonts; ruled in by Saeed, 1 Nov
// 2026, deviating from handoff 4.3's three-font list.
const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-baloo", display: "swap" })
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-nunito", display: "swap" })

// v3.21 hides the privacy section ("What we collect, and what we never do")
// while its content is researched and completed. The markup stays here;
// set this to true to bring it back.
const PRIVACY_SECTION_READY = false

export const metadata: Metadata = {
  title: "IgniteThinking",
  description:
    "IgniteThinking: building independent reasoning through computational thinking and math puzzles, solved with a design thinking process. For grades 4 and 5. The guide is never given the answer.",
}

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 8.6l3.6 3.6L14 3.8" fill="none" stroke="#56457F" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function Shot({
  src,
  width,
  height,
  alt,
  eager,
}: {
  src: string
  width: number
  height: number
  alt: string
  eager?: boolean
}) {
  return (
    <figure className={styles.shot}>
      <div className={styles["shot-bar"]} aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        decoding={eager ? "async" : undefined}
        loading={eager ? undefined : "lazy"}
      />
    </figure>
  )
}

export default function IgniteThinkingPage() {
  return (
    <div className={`min-h-screen flex flex-col ${styles.shell} ${baloo.variable} ${nunito.variable}`}>
      <SiteHeader current="ignitethinking" tail="Grades 4 and 5 · at home" tone="white" />
      <main className={`flex-1 ${styles.page}`}>
        {/* ============================== HERO ============================== */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles["hero-grid"]}`}>
            <div>
              <span className={styles.kicker}>Grades 4 and 5 · Founding Families beta</span>
              <h1>
                <span className={styles.nm}>IgniteThinking:</span>building independent reasoning through computational
                thinking and math puzzles, solved with a design thinking process.
              </h1>
              <p className={styles.sub}>
                Your child solves it.<b>The guide is never given the answer.</b>
              </p>
              <p className={styles.lede}>
                Your child says what is being asked, puts down more than one idea, tests it, revises as often as they
                like, and explains what they found. When they get stuck, the guide helps in small steps, each one
                written in advance.
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

            {/* ---------- a sample puzzle, written for this page, playable ---------- */}
            <SampleMaze />
          </div>
        </section>
        <div className={styles.facts}>
          <div className={styles.wrap}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <b>24</b>
                <span>puzzles</span>
              </div>
              <div className={styles.stat}>
                <b>6</b>
                <span>parts to the loop</span>
              </div>
              <div className={styles.stat}>
                <b>0</b>
                <span>answers handed over</span>
              </div>
            </div>
            <div className={styles["facts-tags"]}>
              <span>Grades 4 and 5</span>
              <span>Used at home</span>
              <span>No chat box</span>
              <span>Founding Families beta</span>
            </div>
          </div>
        </div>

        {/* ========================= THE LOOP ========================= */}
        <section id="loop">
          <div className={styles.wrap}>
            <div className={`${styles.head} ${styles["split-head"]}`}>
              <div>
                <span className={`${styles.lab} ${styles.eyebrow}`}>How every puzzle works</span>
                <h2>A six-part design thinking loop</h2>
              </div>
              <p className={styles.muted}>
                The puzzles change; the loop does not, so your child never has to work out how the app behaves.
              </p>
            </div>

            <div className={styles.loop}>
              <ol className={styles["loop-track"]} aria-label="The six parts of the loop">
                {[
                  ["01", "Understand", "Read the situation and say what is actually being asked."],
                  [
                    "02",
                    "Define",
                    "Name the real goal before choosing a method. The wrong question can still get a confident answer.",
                  ],
                  ["03", "Ideate", "Put down more than one way it could be done. One idea is not a choice."],
                  ["04", "Prototype", "Build the attempt, with a picture or a tool to think with."],
                  ["05", "Test", "Check it. An attempt that fails is not the end; it is information your child reads."],
                ].map(([n, nm, desc]) => (
                  <li key={n} className={styles.node}>
                    <span className={styles.dot} aria-hidden="true">
                      {n}
                    </span>
                    <span className={styles.txt}>
                      <span className={styles.nm}>{nm}</span>
                      <span className={styles.desc}>{desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className={styles["loop-ret"]}>
                <div className={styles["loop-back"]} aria-hidden="true"></div>
                <p className={styles["loop-note"]}>An attempt that does not work comes back to Ideate.</p>
              </div>

              <div className={styles["loop-last"]}>
                <span className={styles.dot} aria-hidden="true">
                  06
                </span>
                <div>
                  <span className={styles.nm}>Reflect</span>
                  <span className={styles.lab}>Always available</span>
                  <p>
                    Reflection closes every puzzle, solved or not. A child who stays stuck is never handed the answer to
                    move on.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={styles.two}
              style={{
                marginTop: "clamp(34px,4.2vw,50px)",
                paddingTop: "clamp(30px,3.6vw,42px)",
                borderTop: "1px solid var(--line)",
              }}
            >
              <div>
                <Shot
                  src="/images/ignitethinking/ideate-fewest-colours.jpg"
                  width={1600}
                  height={1171}
                  eager
                  alt="The IgniteThinking app at the Ideate step of the Fewest Colours puzzle. Understand and Define are ticked; two empty boxes ask for ways to solve it; on a map of five regions, two neighbours share a colour and a red line flags the clash."
                />
                <p className={styles["shot-cap"]}>
                  Ideate, in the app: your child writes down ways to try before choosing, and the map flags any clash.
                </p>
              </div>
              <div>
                <span className={styles.lab}>Back at Ideate</span>
                <h3 style={{ margin: "10px 0 8px" }}>And when it does not work</h3>
                <p>
                  The loop sends your child back to choose again, with help in small steps, each one written in advance.
                  The guide is never given the answer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================== WHY REASONING ========================== */}
        <section id="why" className={styles.tinted}>
          <div className={styles.wrap}>
            <div className={styles["why-top"]}>
              <div>
                <span className={`${styles.lab} ${styles.eyebrow}`}>Why now</span>
                <h2>Why reasoning, and why now?</h2>
              </div>
              <p className={styles.pull}>
                Your child can already get an answer in seconds, and increasingly, explanations too. What no tool will
                hand them is <b>the experience of working something out</b> when it is genuinely hard.
              </p>
            </div>

            <div className={styles["why-grid"]}>
              <div className={styles["why-card"]}>
                <span className={styles.lab}>Why grades 4 and 5</span>
                <div className={styles["shift-row"]}>
                  <p className={`${styles.say} ${styles.from}`}>
                    <span className={styles.tag}>From</span>&ldquo;It worked three times, so it must always work.&rdquo;
                  </p>
                  <svg
                    className={styles["shift-arrow"]}
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="#A097B7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 13h17M15 7l6 6-6 6" />
                  </svg>
                  <p className={`${styles.say} ${styles.to}`}>
                    <span className={styles.tag}>To</span>&ldquo;Let me try to break it. If I can&rsquo;t, here&rsquo;s
                    why.&rdquo;
                  </p>
                </div>
                <p>
                  Grades 4 and 5 sit inside the years when math standards expect this change: from trusting a few
                  examples to making a claim, hunting for a counterexample, and explaining why it holds.{" "}
                  <span className={styles.cite}>NCTM 2000</span>
                </p>
              </div>
              <div className={`${styles["why-card"]} ${styles["is-anchor"]}`}>
                <span className={styles.lab}>Why reasoning</span>
                <p className={styles["glue-word"]}>&ldquo;Glue&rdquo;</p>
                <p>
                  The National Research Council&rsquo;s word for reasoning: the part that turns facts, procedures and
                  concepts into a coherent whole rather than a list of isolated rules.{" "}
                  <span className={styles.cite}>NRC 2001</span>
                </p>
              </div>
            </div>

            <div className={styles.habits}>
              <p className={styles.lab} style={{ margin: 0 }}>
                The habits the puzzles ask for
              </p>
              <div className={styles["habit-row"]}>
                <div className={styles.habit}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 16.5l5-8 3.5 5 2-3 4.5 6z" />
                    <path d="M13 10.5V3.5l3.6 1.7L13 6.9" />
                  </svg>
                  <span>Make sense of it, and stick with it</span>
                </div>
                <div className={styles.habit}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="5.5" height="5.5" rx="1" />
                    <rect x="11.5" y="3" width="5.5" height="5.5" rx="1" />
                    <rect x="3" y="11.5" width="5.5" height="5.5" rx="1" />
                    <rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1" />
                  </svg>
                  <span>Look for structure</span>
                </div>
                <div className={styles.habit}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3.5 9.5V8a3 3 0 0 1 3-3h10" />
                    <path d="M14 2.5l2.5 2.5L14 7.5" />
                    <path d="M16.5 10.5V12a3 3 0 0 1-3 3h-10" />
                    <path d="M6 17.5L3.5 15 6 12.5" />
                  </svg>
                  <span>Notice what repeats</span>
                </div>
                <div className={styles.habit}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 4.5h14v9H9l-4 3v-3H3z" />
                    <path d="M7 9.2l2 2 4-4" />
                  </svg>
                  <span>Make a case for the answer</span>
                </div>
              </div>
              <p className={styles["habit-src"]}>
                From the Common Core Standards for Mathematical Practice: how mathematicians think, not what they know.
              </p>
            </div>
            {/* the draft links /#science, which the home page does not have yet; /science/ is the live page */}
            <p style={{ margin: 0 }}>
              <Link href="/science/">How learning science shapes what we build &rarr;</Link>
            </p>
          </div>
        </section>

        {/* ===================== THE BAND WALK ===================== */}
        <section className={styles.brand} id="puzzles">
          <div className={styles.wrap}>
            <div className={`${styles.head} ${styles["split-head"]}`}>
              <div>
                <span className={`${styles.lab} ${styles.eyebrow}`}>The puzzles</span>
                <h2>Three levels, all open from day one.</h2>
              </div>
              <p className={styles.muted}>
                Nothing is locked behind a score: a child can move up when ready, or back down for an easier win.
              </p>
            </div>
            <div className={styles["lv-grid"]}>
              <div className={`${styles.pzc} ${styles.lv}`} style={{ "--pa": "#17A67B" } as CSSProperties}>
                <OddConeFigure />
                <span className={styles.bd}>Warm-Up</span>
                <h3>One idea to find</h3>
                <p>A short situation, a visual to move, and one insight inside it.</p>
                <div className={styles["pz-tag"]}>
                  <span className={styles["pz-k"]}>Example puzzle</span>
                  <span className={styles["pz-nm"]}>Spot the Odd Cone</span>
                  <span className={styles["pz-bl"]}>Find the one that breaks the rule.</span>
                </div>
              </div>
              <div className={`${styles.pzc} ${styles.lv}`} style={{ "--pa": "#4C8DF6" } as CSSProperties}>
                <svg
                  className={styles.pzv}
                  viewBox="0 0 168 100"
                  role="img"
                  aria-label="An illustrative map of five blank regions, A to E, that share borders"
                >
                  <g
                    fill="#FFFFFF"
                    stroke="var(--app-ink2)"
                    strokeOpacity=".55"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  >
                    <path d="M34 8h50v28H34z" />
                    <path d="M84 8h50v28H84z" />
                    <path d="M34 36h100v26H34z" />
                    <path d="M34 62h50v30H34z" />
                    <path d="M84 62h50v30H84z" />
                  </g>
                  <g
                    fill="var(--app-ink2)"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    <text x="59" y="27">
                      A
                    </text>
                    <text x="109" y="27">
                      B
                    </text>
                    <text x="84" y="53">
                      C
                    </text>
                    <text x="59" y="82">
                      D
                    </text>
                    <text x="109" y="82">
                      E
                    </text>
                  </g>
                </svg>
                <span className={styles.bd}>Explorer</span>
                <h3>More than one thing to hold</h3>
                <p>Choose an approach, not a trick, and try a second way when the first one fails.</p>
                <div className={styles["pz-tag"]}>
                  <span className={styles["pz-k"]}>Example puzzle</span>
                  <span className={styles["pz-nm"]}>Fewest Colours</span>
                  <span className={styles["pz-bl"]}>Color the map with as few colors as you can.</span>
                </div>
              </div>
              <div className={`${styles.pzc} ${styles.lv}`} style={{ "--pa": "#7B61FF" } as CSSProperties}>
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
                  <g fill="#7B61FF">
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
                <span className={styles.bd}>Challenger</span>
                <h3>Nothing obvious to try first</h3>
                <p>Find a way in before choosing a method. These take longer, by design.</p>
                <div className={styles["pz-tag"]}>
                  <span className={styles["pz-k"]}>Example puzzle</span>
                  <span className={styles["pz-nm"]}>The Copycat Snowflake</span>
                  <span className={styles["pz-bl"]}>Count the tips before you can&rsquo;t.</span>
                </div>
              </div>
            </div>
            <div className={styles["lv-facts"]}>
              <div>
                <span className={styles.lab}>Reading level</span>
                <p>
                  Written for a fourth-grade reader in Warm-Up and a fifth-grade reader above it, so the difficulty is
                  in the thinking, not the reading.
                </p>
              </div>
              <div>
                <span className={styles.lab}>Kinds of thinking</span>
                <p>Logic, patterns, planning, debugging, constraints and optimization. No coding needed.</p>
              </div>
              <div>
                <span className={styles.lab}>Math puzzles too</span>
                <p>
                  Math puzzles on grade 4 and 5 ideas such as fractions, common multiples, proportional reasoning and
                  volume, and math along the way in the others.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== THE GROWN-UP REVIEW ==================== */}
        <section id="grown-up">
          <div className={`${styles.wrap} ${styles.two} ${styles.top}`}>
            <div>
              <span className={`${styles.lab} ${styles.eyebrow}`}>For parents · the grown-up review</span>
              <h2>You get the evidence, not a verdict.</h2>
              <p>
                Your own read-only view of how your child worked, in their own words and drawings. Enough to ask a
                better question at dinner, not enough to supervise from another room.
              </p>
              <ul className={styles.spec}>
                <li>
                  <span className={styles.k}>Tried</span>
                  <span>Every idea they came up with, the plan they picked, and the sketch they made.</span>
                </li>
                <li>
                  <span className={styles.k}>Help</span>
                  <span>How much help they opened, and at which step.</span>
                </li>
                <li>
                  <span className={styles.k}>Tested</span>
                  <span>
                    What happened when they tested it, including the tries that didn&rsquo;t work and what they changed.
                  </span>
                </li>
                <li>
                  <span className={styles.k}>Skill</span>
                  <span>The thinking skill each puzzle practiced.</span>
                </li>
                <li>
                  <span className={styles.k}>In their words</span>
                  <span>What they wrote at the end, word for word, and one question to ask them about it.</span>
                </li>
                <li>
                  <span className={styles.k}>Over time</span>
                  <span>
                    How much help they needed, puzzle by puzzle, beside the ones they did on their own. No score.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Shot
                src="/images/ignitethinking/grown-up-review.jpg"
                width={1389}
                height={868}
                alt="The grown-up review in the IgniteThinking app: puzzles started and solved, ideas tried, independence over time, and puzzles set aside."
              />
              <p className={styles["shot-cap"]}>The grown-up review, captured from the running app on 2 Nov 2026.</p>
              <div className={styles.nottell}>
                <span className={styles.lab}>What it will not tell you</span>
                <p>
                  Help is not failure. One solve is not mastery. A longer reflection is not better thinking. A trend in
                  how much help they needed is one line about one app, never an assessment of your child.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.inbuild}>
              <div>
                <span className={styles.lab}>Coming later · in build</span>
                <h3>A map of what the puzzles practice: thinking skills and math</h3>
                <p>
                  We&rsquo;re building a parent view that shows how the thinking skills and the{" "}
                  <span style={{ whiteSpace: "nowrap" }}>fourth- and fifth-grade</span> math ideas in the puzzles
                  connect, which ones your child has worked on, and which they solved on their own.
                </p>
                <ul>
                  <li>Thinking skills come first; the math your child ran into sits beside them.</li>
                  <li>
                    Each item says what happened on a puzzle: solved on their own, solved with help, working on it, or
                    not met yet.
                  </li>
                  <li>No scores, no rankings, and no comparison with other children.</li>
                </ul>
              </div>
              <div>
                <Shot
                  src="/images/ignitethinking/thinking-map-preview.jpg"
                  width={1600}
                  height={1000}
                  alt="Preview of the parent thinking map in the grown-up review: kinds of thinking on the left, the math they ran into on the right, with lines joining them through the puzzles."
                />
                <p className={styles["shot-cap"]}>
                  The parent view in build, shown with a sample child. It is not in the app yet, and details may change
                  before it ships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TRUST AND ACCESS ==================== */}
        <section id="trust" className={styles.tinted}>
          <div className={styles.wrap}>
            <div className={`${styles.head} ${styles.prose}`}>
              <span className={`${styles.lab} ${styles.eyebrow}`}>Access for every child</span>
              <h2>Reading and typing should not be the barrier.</h2>
              <p className={styles.muted}>
                A child who can think through a hard problem may still struggle to read it or type the answer. Those are
                separate abilities, and the app treats them that way.
              </p>
            </div>
            <div className={styles.aids}>
              <div className={styles.aid}>
                <div className={styles["aid-h"]}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="var(--slate)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 8h2.5L10 5v10L6.5 12H4z" />
                    <path d="M13 7.5a3.5 3.5 0 0 1 0 5" />
                    <path d="M15.4 5.4a7 7 0 0 1 0 9.2" />
                  </svg>
                  <h3>Listen to any of it</h3>
                </div>
                <p>Instructions, hints and worked examples can be read aloud, at the press of a button.</p>
              </div>
              <div className={styles.aid}>
                <div className={styles["aid-h"]}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="var(--slate)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="7.5" y="2.5" width="5" height="9" rx="2.5" />
                    <path d="M4.5 9.5a5.5 5.5 0 0 0 11 0" />
                    <path d="M10 15v2.5" />
                  </svg>
                  <h3>Speak instead of typing</h3>
                </div>
                <p>
                  On devices that can turn speech into text by themselves, your child can press and talk instead of
                  typing.
                </p>
              </div>
              <div className={styles.aid}>
                <div className={styles["aid-h"]}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="var(--slate)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="7.5" y="2.5" width="5" height="9" rx="2.5" />
                    <path d="M4.5 9.5a5.5 5.5 0 0 0 11 0" />
                    <path d="M10 15v2.5" />
                    <path d="M3.4 3.4l13.2 13.2" />
                  </svg>
                  <h3>The sound stays on the device</h3>
                </div>
                <p>
                  Speech becomes text on your child&rsquo;s device. The audio is never sent to us or kept: no storage,
                  no training, no voiceprint.
                </p>
              </div>
              <div className={styles.aid}>
                <div className={styles["aid-h"]}>
                  <svg
                    className={styles.mk}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="var(--slate)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2.5" y="5.5" width="15" height="9" rx="2" />
                    <path d="M6 8.6h.01M9 8.6h.01M11.6 8.6h.01M14.4 8.6h.01M6.6 11.6h6.8" />
                  </svg>
                  <h3>Built for the keyboard</h3>
                </div>
                <p>Built to work from the keyboard, including the pieces meant to be dragged.</p>
              </div>
            </div>
            <p className={styles.bridge}>
              Designed to meet WCAG 2.1 AA. Read-aloud is on from the start for every child and can be turned off. It
              speaks only what is already on your child&rsquo;s screen.
            </p>
          </div>
        </section>

        {/* ==================== PRIVACY (hidden in v3.21) ==================== */}
        {PRIVACY_SECTION_READY && (
          <section id="privacy" className={styles.deep}>
            <div className={styles.wrap}>
              <div>
                <div className={`${styles.head} ${styles.prose}`}>
                  <span className={`${styles.lab} ${styles.eyebrow}`}>Privacy</span>
                  <h2>What we collect, and what we never do.</h2>
                  <p className={styles.muted}>
                    Built for children under 13, so every family gets the full protections whether or not we know a
                    child&rsquo;s age.
                  </p>
                </div>
                <div className={styles.privacy}>
                  <div className={styles.aid}>
                    <div className={styles["aid-h"]}>
                      <svg
                        className={styles.mk}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="var(--slate)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 5.5h12M4 10h7.5M4 14.5h3.5" />
                      </svg>
                      <h3>The minimum, and no more</h3>
                    </div>
                    <p>
                      Your first name and email, and for your child a nickname, an age band and the work they make. No
                      birth date, photo, school or location.
                    </p>
                  </div>
                  <div className={styles.aid}>
                    <div className={styles["aid-h"]}>
                      <svg
                        className={styles.mk}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="var(--slate)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="10" cy="10" r="7" />
                        <path d="M5.1 14.9L14.9 5.1" />
                      </svg>
                      <h3>No ads, no selling, no chat</h3>
                    </div>
                    <p>No advertisers, no data brokers, no third-party trackers, and nobody in the app to message.</p>
                  </div>
                  <div className={styles.aid}>
                    <div className={styles["aid-h"]}>
                      <svg
                        className={styles.mk}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="var(--slate)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2.5" y="4" width="15" height="12" rx="2" />
                        <path d="M2.5 8h15" />
                        <path d="M5.4 6h.01M7.9 6h.01" />
                      </svg>
                      <h3>Trying it sends nothing</h3>
                    </div>
                    <p>The sample puzzle on this page runs in your browser and sends us nothing.</p>
                  </div>
                  <div className={styles.aid}>
                    <div className={styles["aid-h"]}>
                      <svg
                        className={styles.mk}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="var(--slate)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M1.8 10S4.7 4.8 10 4.8 18.2 10 18.2 10 15.3 15.2 10 15.2 1.8 10 1.8 10Z" />
                        <circle cx="10" cy="10" r="2.3" />
                      </svg>
                      <h3>You can see it, and end it</h3>
                    </div>
                    <p>Ask to see your child&rsquo;s data or have it deleted, or withdraw consent, at any time.</p>
                  </div>
                </div>
                <p className={styles.bridge}>
                  Full detail in the <Link href="/privacy/">privacy notice</Link>.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ============================== BETA ============================== */}
        <section id="beta" className={styles["band-orange"]}>
          <div className={styles.wrap}>
            <div className={styles.beta}>
              <div>
                <span className={`${styles.lab} ${styles.eyebrow}`}>Founding Families</span>
                <h2>The Founding Families beta opens in late November</h2>
                <p>
                  Your family helps us learn what works, what confuses, and what to fix. We are keeping the group small
                  so we can answer every family who writes.
                </p>
                <BetaForm />
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
                    <span>
                      24 puzzles, 18 computational thinking and 6 math, across three levels, all open from the first
                      day.
                    </span>
                  </li>
                  <li>
                    <Check />
                    <span>
                      The guide, with every hint written in advance. Its AI, which fits the help to your child&rsquo;s
                      work, comes in a later update.
                    </span>
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
                <p className={styles.muted} style={{ margin: "16px 0 0", fontSize: ".95rem" }}>
                  Starting without AI has its own benefits: your child sees help exactly as we wrote it, no AI responds
                  to anything they write or say, and when the AI arrives we can tell whether it helps or gets in the
                  way, because we will know how children did without it.
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
      <SiteFooter tone="deep" />
    </div>
  )
}

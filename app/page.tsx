import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SuccessFigure } from "@/components/home/success-figure"
import styles from "./page.module.css"

// Ported from docs/handoff-2026-11-10/source/ICL-Home-Philosophy-v8_28.html
// (first ported from v8.4, docs/handoff-2026-11-01/source/).
// Copy is final and audited (handoff rule 3): port verbatim, no edits.
// Review-only elements (draft banner, todo chips, draft footer tail,
// version-history comments) do not ship (handoff 4.2).

function Dash() {
  return <span className={styles.dash} aria-hidden="true"></span>
}

function CheckDot() {
  return (
    <svg className={styles.ck} width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
      <circle cx="13" cy="13" r="13" fill="var(--orange)" />
      <path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="var(--purple-900)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader current="home" announce />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles["hero-grid"]}`}>
            <div>
              <span className={styles.kicker}>A research-driven product lab · Shaped by Stanford LEAD</span>
              <h1>
                Learning to think with AI,
                <br />
                <b>not just use it.</b>
              </h1>
              <p className={styles.mission}>
                <span className={styles.mlab}>Our mission</span>Ignite Curiosity Lab creates AI learning experiences
                that build independent reasoning skills in K-12 students, where AI guides their thinking instead of
                giving them answers.
              </p>
              <p className={styles.lede}>
                As AI makes answers effortless, we design learning in which the student does the reasoning: forms the
                idea, tests it, revises it and explains it. One question guides everything we build:{" "}
                <strong className={styles.q}>What thinking must remain with the learner?</strong>
              </p>
              <div className={styles["cta-row"]}>
                <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#build">
                  See what we build
                </a>
                <a className={`${styles.btn} ${styles["btn-onphoto"]}`} href="#science">
                  Explore the science
                </a>
              </div>
            </div>

            <figure
              className={styles.trace}
              aria-label="A learner's thinking trace: from question to first idea, through a wrong turn and a revision, to insight and explanation. The system adds only a question and a scaffold along the way."
            >
              <svg viewBox="0 0 640 410" role="img" aria-hidden="true">
                <path
                  className={styles.ghost}
                  d="M40 300 C120 282 150 200 210 190 C272 178 318 232 352 254 C408 290 420 346 362 350 C300 354 276 274 324 232 C382 185 440 150 500 140 C542 133 580 108 600 80"
                />
                <path
                  className={styles.line}
                  d="M40 300 C120 282 150 200 210 190 C272 178 318 232 352 254 C408 290 420 346 362 350 C300 354 276 274 324 232 C382 185 440 150 500 140 C542 133 580 108 600 80"
                />
                <path className={styles.ai} d="M168 128 L204 182" />
                <circle className={styles.aidot} cx="164" cy="124" r="4" />
                <text className={styles["ai-t"]} x="60" y="118">
                  AI: a question
                </text>
                <path className={styles.ai} d="M452 372 L392 346" />
                <circle className={styles.aidot} cx="456" cy="374" r="4" />
                <text className={styles["ai-t"]} x="468" y="380">
                  AI: a scaffold
                </text>
                <circle className={styles.node} cx="40" cy="300" r="7" />
                <text x="22" y="334">Question</text>
                <circle className={styles.node} cx="210" cy="190" r="7" />
                <text x="196" y="170">First idea</text>
                <circle className={styles.ring} cx="366" cy="349" r="16" />
                <circle className={`${styles.node} ${styles.turn}`} cx="366" cy="349" r="9" />
                <text x="296" y="386">Wrong turn</text>
                <circle className={styles.node} cx="324" cy="232" r="7" />
                <text x="246" y="222">Revise</text>
                <circle className={styles.node} cx="500" cy="140" r="7" />
                <text x="478" y="120">Insight</text>
                <circle className={`${styles.node} ${styles.end}`} cx="600" cy="80" r="8" />
                <text x="530" y="60">Explains why</text>
              </svg>
              <figcaption>The line is the learner&rsquo;s. The marks are ours.</figcaption>
            </figure>
          </div>
        </section>
        <div className={styles.creds}>
          <div className={styles.wrap}>
            <span>
              <span className={styles.ci}>NVIDIA Inception</span> &middot; <span className={styles.ci}>Stanford LEAD</span>{" "}
              &middot; <span className={styles.ci}>LISA Cohort 11</span> &middot;{" "}
              <span className={styles.ci}>Me2We 2026 Top-10 (Stanford GSB)</span>
            </span>
            <span>Workshop and poster, Khan Lab School AI in Education Summit 2026</span>
            <span className={styles.people}>
              Every IgniteThinking hint is written and reviewed by Dr. Azin Sanjari, Assistant Professor of Mathematics
              Education, University of Central Arkansas
            </span>
          </div>
        </div>

        {/* 1 · the frame */}
        <section>
          <div className={styles.wrap}>
            <div className={styles["frame-head"]}>
              <div>
                <span className={`${styles.lab} ${styles.eyebrow}`}>From prompts to pedagogy</span>
                <h2>We make pedagogy part of the architecture.</h2>
              </div>
              <p>
                A common approach in educational AI is to ask the model to follow pedagogical instructions. We go
                further: when a learning principle matters, we design the system around it.
              </p>
            </div>
            <div className={styles.vs2}>
              <div className={`${styles.vcard} ${styles.dflt}`}>
                <span className={styles.tag}>The default</span>
                <h3>Prompt-level guidance</h3>
                <ul>
                  <li>
                    <Dash />
                    <span>The model is instructed to follow a pedagogical rule.</span>
                  </li>
                  <li>
                    <Dash />
                    <span>Reliability depends on model compliance and prompt robustness.</span>
                  </li>
                  <li>
                    <Dash />
                    <span>Behavior can drift across prompts, models, and model updates.</span>
                  </li>
                </ul>
              </div>
              <div className={`${styles.vcard} ${styles.ours}`}>
                <span className={styles.tag}>What we build</span>
                <h3>System-level learning design</h3>
                <ul>
                  <li>
                    <CheckDot />
                    <span>
                      Critical constraints are <strong>enforced by the system</strong>, not requested of the model.
                    </span>
                  </li>
                  <li>
                    <CheckDot />
                    <span>
                      Any model we use works inside explicit system boundaries, and{" "}
                      <strong>it is never given the answer</strong>.
                    </span>
                  </li>
                  <li>
                    <CheckDot />
                    <span>
                      Those constraints are <strong>checked directly</strong>: we test for answer leakage instead of
                      assuming it away.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.boundary} style={{ marginTop: 22 }}>
              When pedagogy is critical, we prefer enforceable constraints over model promises.
            </p>
          </div>
        </section>

        {/* 2 · the question */}
        <section className={styles.dark} id="question">
          <div className={styles.wrap}>
            <div className={styles["q-head"]}>
              <span className={`${styles.lab} ${styles.eyebrow}`}>The question we ask</span>
              <p className={styles.bigq}>
                Instead of asking what AI can do for the learner, we ask <em>what thinking must remain with the learner.</em>
              </p>
            </div>
            <div className={styles.own} aria-label="What AI can support, and what the learner must own">
              <div className={`${styles["own-card"]} ${styles.sys}`}>
                <span className={`${styles.lab} ${styles["own-lab"]}`}>System</span>
                <h3>AI can support</h3>
                <ul>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      01
                    </span>
                    <span>Ask a question</span>
                  </li>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      02
                    </span>
                    <span>Surface a pattern</span>
                  </li>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      03
                    </span>
                    <span>Offer a scaffold</span>
                  </li>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      04
                    </span>
                    <span>Prompt reflection</span>
                  </li>
                </ul>
              </div>
              <div className={styles["own-line"]}>
                <p className={styles["own-pill"]}>The boundary is the product.</p>
              </div>
              <div className={`${styles["own-card"]} ${styles.lrn}`}>
                <span className={`${styles.lab} ${styles["own-lab"]}`}>Learner</span>
                <h3>The learner must own</h3>
                <ul>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      01
                    </span>
                    <span>Form the hypothesis</span>
                  </li>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      02
                    </span>
                    <span>Choose the approach</span>
                  </li>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      03
                    </span>
                    <span>Make the mistake</span>
                  </li>
                  <li>
                    <span className={styles.n} aria-hidden="true">
                      04
                    </span>
                    <span>Explain the reasoning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3 · the evidence */}
        <section id="science">
          <div className={styles.wrap}>
            <div className={styles["ev-head"]}>
              <div>
                <span className={`${styles.lab} ${styles.eyebrow}`}>The science</span>
                <h2>Built on cognitive and learning science</h2>
                <p className={styles.muted} style={{ margin: "14px 0 0", maxWidth: "46ch" }}>
                  We use the research as a design input. It is not evidence that our products work; only our own pilots
                  can be that. Every finding on this page resolves in our evidence base.
                </p>
              </div>
              <aside className={styles.ladder}>
                <span className={styles.lab}>Our claims ladder</span>
                <h3>Evidence before amplification</h3>
                <div className={styles.rungs}>
                  <div className={styles.rung}>
                    <span>Rung 1</span>
                    <b>Engagement</b>
                  </div>
                  <div className={styles.rung}>
                    <span>Rung 2</span>
                    <b>Process</b>
                  </div>
                  <div className={styles.rung}>
                    <span>Rung 3</span>
                    <b>Learning outcomes: change, not cause</b>
                  </div>
                </div>
                <p>
                  We do not claim above the rung our data supports. Our Founding Families beta opens in late November
                  2026, and a supervised research pilot follows in early 2027. Showing that scores changed is not the same as
                  showing we caused it, and that needs a controlled comparison we have not yet run.
                </p>
              </aside>
            </div>
            <div className={styles["sub-head"]}>
              <h3>Three findings, three design decisions</h3>
            </div>
            <div className={styles.beliefs}>
              <div className={styles.belief}>
                <span className={styles.n}>01</span>
                <h3>Struggle is only productive by design</h3>
                <span className={styles.tag}>Finding</span>
                <p>
                  Problem solving before instruction can deepen understanding and transfer, but the effect depends on
                  age, task, guidance, and implementation. In the meta-analysis, learners in grades 2 to 5 did better
                  with instruction first.
                </p>
                <span className={styles.src}>Kapur 2008, 2016 · Sinha &amp; Kapur 2021, meta-analysis</span>
                <div className={styles.dd}>
                  <span className={styles.tag}>Design decision</span>
                  <p>
                    We protect the learner&rsquo;s effort without assuming struggle itself teaches. We scaffold support
                    and design each struggle to resolve in sense-making.
                  </p>
                </div>
              </div>
              <div className={styles.belief}>
                <span className={styles.n}>02</span>
                <h3>Assisted performance is not enough</h3>
                <span className={styles.tag}>Finding</span>
                <p>
                  About 1,000 high-school math students in Turkey, randomized. With unrestricted GPT-4, practice
                  performance improved, but later unaided exam performance was 17 percent lower than the no-AI control.
                  A guided version that gave hints instead of answers showed no significant reduction.
                </p>
                <span className={styles.src}>Bastani et al. 2025, PNAS</span>
                <div className={styles.dd}>
                  <span className={styles.tag}>Design decision</span>
                  <p>
                    We record the help behind every attempt, so an assisted score is never mistaken for what a learner
                    can do alone. And the AI is never given the answer, so the restraint does not rest on instructions
                    to the model.
                  </p>
                </div>
              </div>
              <div className={styles.belief}>
                <span className={styles.n}>03</span>
                <h3>Support can create dependence</h3>
                <span className={styles.tag}>Finding</span>
                <p>
                  1,625 university students across ten courses, randomized. For four weeks, AI prompts flagged weak
                  comments in their peer feedback, without writing it. When the prompts were withdrawn, their comments
                  were flagged as low quality significantly more often. The researchers concluded that students tended
                  to rely on the assistance rather than learn from it.
                </p>
                <span className={styles.src}>Darvishi et al. 2024, Computers &amp; Education</span>
                <div className={styles.dd}>
                  <span className={styles.tag}>Design decision</span>
                  <p>
                    Support should work itself out of a job. Falling hint use counts as progress only if the learner
                    still solves without it.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.success}>
              <div>
                <span className={styles.lab}>What does success look like?</span>
                <h2>The learner needs us less.</h2>
                <p>
                  Most software measures success by how often people come back. We ask a harder question:{" "}
                  <strong>does the learner need less help as they go, and still solve without it?</strong>
                </p>
              </div>
              <SuccessFigure />
            </div>
          </div>
        </section>

        {/* 4 · products */}
        <section className={styles.dark} id="build">
          <div className={styles.wrap}>
            <div className={`${styles.head} ${styles.prose}`}>
              <span className={`${styles.lab} ${styles.eyebrow}`}>Our products</span>
              <h2>What we build</h2>
            </div>
            <div className={styles.pb}>
              <article className={`${styles.pcard} ${styles.feat}`}>
                <span className={styles.state}>Founding Families beta · late November 2026</span>
                <h3>IgniteThinking</h3>
                <p>
                  A thinking app for grades 4 and 5 (ages 9 to 11), designed to build independent reasoning. Students
                  work computational thinking puzzles and math puzzles through a design thinking process, and the guide
                  is never given the answer.
                </p>
                <div className={styles.pstats}>
                  <div className={styles.pstat}>
                    <b>24</b>
                    <span>puzzles</span>
                  </div>
                  <div className={styles.pstat}>
                    <b>3</b>
                    <span>levels, all open from day one</span>
                  </div>
                  <div className={styles.pstat}>
                    <b>0</b>
                    <span>chat boxes</span>
                  </div>
                </div>
                <div className={styles.pcta}>
                  <Link className={`${styles.btn} ${styles["btn-primary"]}`} href="/ignitethinking/">
                    See IgniteThinking &rarr;
                  </Link>
                  <Link className={`${styles.btn} ${styles["btn-outline"]}`} href="/ignitethinking/#beta">
                    Request beta access
                  </Link>
                </div>
              </article>
              <div className={styles["pb-side"]}>
                <article className={`${styles.pcard} ${styles.side}`}>
                  <span className={styles.state}>For educators and schools</span>
                  <h3>IgniteEd</h3>
                  <p>
                    Practical AI literacy for educators and school teams, held to the same rule as everything we make:
                    we claim only what our data supports.
                  </p>
                  <Link className={styles.go} href="/igniteed/">
                    Visit IgniteEd &rarr;
                  </Link>
                </article>
                <article className={`${styles.pcard} ${styles.soon}`}>
                  <span className={styles.state}>Coming soon</span>
                  <h3>IgniteBuild</h3>
                  <p>Where future builders ship. For high schools. Stay tuned.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · commitments (warm white) */}
        <section>
          <div className={styles.wrap}>
            <div className={`${styles.strip} ${styles.strip2}`} aria-label="What we hold ourselves to">
              <div>
                <span className={styles.pic} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3.2 19.2c0-3.1 2.6-5.2 5.8-5.2s5.8 2.1 5.8 5.2" />
                    <path d="M15.6 5a3.2 3.2 0 0 1 0 6" />
                    <path d="M17.4 14.4c2 .7 3.4 2.4 3.4 4.8" />
                  </svg>
                </span>
                <h3>Human-led, AI-supported</h3>
                <p>
                  Human judgment stays central. Teachers direct the tools they use in class, and in learner-facing
                  experiences the learner owns the reasoning. AI supports both. It replaces neither.
                </p>
              </div>
              <div>
                <span className={styles.pic} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
                    <circle cx="12" cy="12" r="2.8" />
                  </svg>
                </span>
                <h3>Explainable by design</h3>
                <p>
                  Every AI intervention has a pedagogical purpose we can name. Where the system steps in, we design
                  that step to be visible to the teacher or parent, not hidden inside the experience.
                </p>
              </div>
              <div>
                <span className={styles.pic} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 2.8v5.4c0 4.4-2.9 8-7 9.8-4.1-1.8-7-5.4-7-9.8V5.8L12 3z" />
                    <path d="M8.8 12.2l2.3 2.3 4.2-4.6" />
                  </svg>
                </span>
                <h3>Privacy is part of the architecture</h3>
                <p>
                  We minimize the data we collect about a learner, define clear retention boundaries, never sell or
                  rent it, and design for age-appropriate privacy from the start.
                </p>
                <Link className={styles.more} href="/privacy/">
                  Our privacy approach &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · close (orange band) */}
        <section className={styles["close-dark"]}>
          <div className={styles.wrap}>
            <div className={`${styles["close-band"]} ${styles.cb2}`}>
              <div className={styles["close-copy"]}>
                <div className={styles["cc-l"]}>
                  <span className={`${styles.lab} ${styles.eyebrow}`}>Work with us</span>
                  <h2>Build AI that leaves people more capable than it found them.</h2>
                </div>
                <div className={styles["cc-r"]}>
                  <p>That is the standard we hold our products, our research, and our partnerships to.</p>
                  <div className={styles["cta-row"]}>
                    <a className={`${styles.btn} ${styles["btn-onorange"]}`} href="mailto:hello@ignitecuriosity.ai">
                      Partner with us
                    </a>
                    <a className={`${styles.btn} ${styles["btn-onorange-ghost"]}`} href="#build">
                      Explore our products
                    </a>
                  </div>
                </div>
              </div>
              <ul className={styles.doors}>
                <li>
                  <h3>Families</h3>
                  <p>Join the IgniteThinking Founding Families beta.</p>
                  <Link href="/ignitethinking/#beta">Request beta access &rarr;</Link>
                </li>
                <li>
                  <h3>Educators and schools</h3>
                  <p>Practical AI literacy for your team, through IgniteEd.</p>
                  <Link href="/igniteed/">Visit IgniteEd &rarr;</Link>
                </li>
                <li>
                  <h3>Researchers and funders</h3>
                  <p>Help us study how children reason after the hints are gone.</p>
                  <a href="mailto:hello@ignitecuriosity.ai?subject=Research%20with%20Ignite%20Curiosity%20Lab">
                    Write to us &rarr;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

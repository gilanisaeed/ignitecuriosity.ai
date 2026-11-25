import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SuccessFigure } from "@/components/home/success-figure"
import styles from "./page.module.css"

// Ported from docs/handoff-2026-11-10/source/ICL-Home-Philosophy-v8_30.html
// (25 Nov 2026); first ported from v8.4 (docs/handoff-2026-11-01/source/).
// Copy is final and audited (handoff rule 3): port verbatim, no edits. Class
// names are the draft's, mapped to the CSS Module by c(). Review-only elements
// (draft banner, todo chips, draft footer tail, version-history comments) do
// not ship (handoff 4.2). The app screenshot embedded in the draft is
// public/home/ideate-fewest-colours.jpg. The draft's one script (motion only)
// is SuccessFigure.

const c = (names: string) =>
  names
    .split(" ")
    .filter(Boolean)
    .map((n) => styles[n] ?? n)
    .join(" ")

// Share tags (v8.30). The draft's share image (assets/icl-home-share-1200x630.png, "confirm
// its address at deploy") is not in this repo yet, so the site's default image stands in.
export const metadata: Metadata = {
  alternates: { canonical: "https://ignitecuriosity.ai/" },
  openGraph: {
    type: "website",
    siteName: "Ignite Curiosity Lab",
    title: "Ignite Curiosity Lab | Learning to think with AI, not just use it",
    description:
      "Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
    url: "https://ignitecuriosity.ai/",
    images: [{ url: "/images/icl-mainpage.jpg", width: 1280, height: 720, alt: "Ignite Curiosity Lab" }],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader current="home" announce />
      <main id="main" className={c("page")}>
        <section className={c("hero")}>
          <div className={c("wrap hero-grid")}>
          <div>
            <h1>Learning to think with AI,<br /><b>not just use it.</b></h1>
            <p className={c("mission")}><span className={c("mlab")}>Our mission</span>Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.</p>
            <div className={c("cta-row")}>
              <a className={c("btn btn-primary")} href="/ignitethinking/">Explore IgniteThinking</a>
              <a className={c("btn btn-onphoto")} href="#science">Explore the science</a>
            </div>
          </div>

          <figure className={c("trace")}>
            <svg viewBox="0 0 640 410" role="img" aria-label="A learner’s thinking trace: from question to first idea, through a wrong turn and a revision, to insight and explanation. The system adds only a question and a scaffold along the way.">
              <path className={c("ghost")} d="M40 300 C120 282 150 200 210 190 C272 178 318 232 352 254 C408 290 420 346 362 350 C300 354 276 274 324 232 C382 185 440 150 500 140 C542 133 580 108 600 80" />
              <path className={c("line")} pathLength="1" d="M40 300 C120 282 150 200 210 190 C272 178 318 232 352 254 C408 290 420 346 362 350 C300 354 276 274 324 232 C382 185 440 150 500 140 C542 133 580 108 600 80" />
              <g><circle className={c("node")} cx="40" cy="300" r="7" /><text x="22" y="334">Question</text></g>
              <g className={c("stop")} style={{ animationDelay: "0.67s" }}><circle className={c("node")} cx="210" cy="190" r="7" /><text x="224" y="172">First idea</text></g>
              <g className={c("stop")} style={{ animationDelay: "1.01s" }}><circle className={c("ring")} cx="366" cy="349" r="16" /><circle className={c("node")} cx="366" cy="349" r="9" /><text x="296" y="386">Wrong turn</text></g>
              <g className={c("stop")} style={{ animationDelay: "1.20s" }}><circle className={c("node")} cx="324" cy="232" r="7" /><text x="288" y="258" textAnchor="end">Revise</text></g>
              <g className={c("stop")} style={{ animationDelay: "1.47s" }}><circle className={c("node")} cx="500" cy="140" r="7" /><text x="506" y="118" textAnchor="end">Insight</text></g>
              <g className={c("stop")} style={{ animationDelay: "1.86s" }}><circle className={c("node end")} cx="600" cy="80" r="8" /><text x="634" y="60" textAnchor="end">Explains why</text></g>
              <g className={c("aimark")} style={{ animationDelay: "1.96s" }}><path className={c("ai")} d="M168 128 L204 182" /><circle className={c("aidot")} cx="164" cy="124" r="4" /><text className={c("ai-t")} x="60" y="108">AI: a question</text></g>
              <g className={c("aimark")} style={{ animationDelay: "2.10s" }}><path className={c("ai")} d="M452 372 L392 346" /><circle className={c("aidot")} cx="456" cy="374" r="4" /><text className={c("ai-t r")} x="468" y="380">AI: a scaffold</text></g>
            </svg>
            <figcaption>The line is the learner&rsquo;s. The marks are ours.</figcaption>
          </figure>
          </div>
        </section>
        <div className={c("creds")}><div className={c("wrap")}>
          <span><span className={c("ci")}>NVIDIA Inception</span> &middot; <span className={c("ci")}>Stanford LEAD</span> &middot; <span className={c("ci")}>LISA Cohort 11</span> &middot; <span className={c("ci")}>Me2We 2026 Top-10 (Stanford GSB)</span></span>
          <span>Workshop and poster, Khan Lab School AI in Education Summit 2026</span>
        </div></div>

        {/* 1 · products (moved up in v8.29: the product is the first thing after the hero) */}
        <section className={c("tinted")} id="build">
          <div className={c("wrap")}>
            <div className={c("head")}><h2>What we build</h2></div>
            <article className={c("pcard feat")}>
              <div className={c("pf-copy")}>
                <span className={c("state")}>Founding Families beta &middot; late November 2026</span>
                <h3>IgniteThinking</h3>
                <p>A thinking app for grades 4 and 5 (ages 9 to 11), designed to build independent reasoning. Students work computational thinking puzzles and math puzzles through a design thinking process, and the guide is never given the answer.</p>
                <div className={c("pstats")}>
                  <div className={c("pstat")}><b>24</b><span>puzzles</span></div>
                  <div className={c("pstat")}><b>3</b><span>levels, all open from day one</span></div>
                  <div className={c("pstat")}><b>0</b><span>chat boxes</span></div>
                </div>
                <p className={c("hint-author")}>Every IgniteThinking hint is written and reviewed by Dr. Azin Sanjari, Assistant Professor of Mathematics Education, University of Central Arkansas.</p>
                <div className={c("pcta")}>
                  <a className={c("btn btn-primary")} href="/ignitethinking/">See IgniteThinking &rarr;</a>
                  <a className={c("btn btn-outline")} href="/ignitethinking/#beta">Request beta access</a>
                </div>
              </div>
              <figure className={c("shot")}>
                <div className={c("shot-bar")} aria-hidden="true"><i></i><i></i><i></i></div>
                <img src="/home/ideate-fewest-colours.jpg" width="1600" height="1171" decoding="async" alt="The IgniteThinking app at the Ideate step of the Fewest Colours puzzle. Understand and Define are ticked; two empty boxes ask for ways to solve it; on a map of five regions, two neighbours share a colour and a red line flags the clash." />
              </figure>
            </article>
            <div className={c("pb-side")}>
              <article className={c("pcard side")}>
                <span className={c("state")}>For educators and schools</span>
                <h3>IgniteEd</h3>
                <p>Practical AI literacy for educators and school teams, held to the same rule as everything we make: we claim only what our data supports.</p>
                <a className={c("go")} href="/igniteed/">Visit IgniteEd &rarr;</a>
              </article>
              <article className={c("pcard soon")}>
                <span className={c("state")}>Coming soon</span>
                <h3>IgniteBuild</h3>
                <p>Ship something real. For high schools. Stay tuned.</p>
              </article>
            </div>
          </div>
        </section>

        {/* 2 · the frame */}
        <section>
          <div className={c("wrap")}>
            <div className={c("frame-head")}>
              <h2>We make pedagogy part of the architecture.</h2>
              <p>A common approach in educational AI is to ask the model to follow pedagogical instructions. We go further: when a learning principle matters, we design the system around it.</p>
            </div>
            <div className={c("vs2")}>
              <div className={c("vcard dflt")}>
                <span className={c("tag")}>The default</span>
                <h3>Prompt-level guidance</h3>
                <ul>
                  <li><span className={c("dash")} aria-hidden="true"></span><span>The model is instructed to follow a pedagogical rule.</span></li>
                  <li><span className={c("dash")} aria-hidden="true"></span><span>Reliability depends on model compliance and prompt robustness.</span></li>
                  <li><span className={c("dash")} aria-hidden="true"></span><span>Behavior can drift across prompts, models, and model updates.</span></li>
                </ul>
              </div>
              <div className={c("vcard ours")}>
                <span className={c("tag")}>Our approach</span>
                <h3>System-level learning design</h3>
                <ul>
                  <li><svg className={c("ck")} width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--orange)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="var(--purple-900)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Critical constraints are <strong>enforced by the system</strong>, not requested of the model.</span></li>
                  <li><svg className={c("ck")} width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--orange)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="var(--purple-900)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Any model we use works inside explicit system boundaries, and <strong>it is never given the answer</strong>.</span></li>
                  <li><svg className={c("ck")} width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--orange)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="var(--purple-900)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Those constraints are <strong>checked directly</strong>: we test for answer leakage instead of assuming it away.</span></li>
                </ul>
              </div>
            </div>
            <p className={c("principle")}>When pedagogy is critical, we prefer enforceable constraints over model promises.</p>
          </div>
        </section>

        {/* 3 · the question */}
        <section className={c("dark")} id="question">
          <div className={c("wrap")}>
            <div className={c("q-head")}>
              <span className={c("lab eyebrow")}>The question we ask</span>
              <h2 className={c("bigq")}>Instead of asking what AI can do for the learner, we ask <em>what thinking must remain with the learner.</em></h2>
            </div>
            <div className={c("own")} aria-label="What AI can support, and what the learner must own">
              <div className={c("own-card sys")}>
                <span className={c("lab own-lab")}>System</span>
                <h3>AI can support</h3>
                <ul>
                  <li><span className={c("n")} aria-hidden="true">01</span><span>Ask a question</span></li>
                  <li><span className={c("n")} aria-hidden="true">02</span><span>Surface a pattern</span></li>
                  <li><span className={c("n")} aria-hidden="true">03</span><span>Offer a scaffold</span></li>
                  <li><span className={c("n")} aria-hidden="true">04</span><span>Prompt reflection</span></li>
                </ul>
              </div>
              <div className={c("own-line")} aria-hidden="true"></div>
              <div className={c("own-card lrn")}>
                <span className={c("lab own-lab")}>Learner</span>
                <h3>The learner must own</h3>
                <ul>
                  <li><span className={c("n")} aria-hidden="true">01</span><span>Form the hypothesis</span></li>
                  <li><span className={c("n")} aria-hidden="true">02</span><span>Choose the approach</span></li>
                  <li><span className={c("n")} aria-hidden="true">03</span><span>Make the mistake</span></li>
                  <li><span className={c("n")} aria-hidden="true">04</span><span>Explain the reasoning</span></li>
                </ul>
              </div>
            </div>
            <p className={c("own-pill")}>The boundary is the product.</p>
          </div>
        </section>

        {/* 4 · the evidence */}
        <section id="science">
          <div className={c("wrap")}>
            <div className={c("ev-head")}>
              <div>
                <span className={c("lab eyebrow")}>The science</span>
                <h2>Built on cognitive and learning science</h2>
                <p className={c("muted")} style={{ margin: "14px 0 0", maxWidth: "46ch" }}>We use the research as a design input. It is not evidence that our products work; only our own pilots can be that. Every finding on this page resolves in our evidence base.</p>
              </div>
              <aside className={c("ladder")}>
                <span className={c("lab")}>Our claims ladder</span>
                <h3>Evidence before amplification</h3>
                <div className={c("rungs")}>
                  <div className={c("rung")}><span>Rung 1</span><b>Engagement</b></div>
                  <div className={c("rung")}><span>Rung 2</span><b>Process</b></div>
                  <div className={c("rung")}><span>Rung 3</span><b>Learning outcomes: change, not cause</b></div>
                </div>
                <p>We do not claim above the rung our data supports. Our Founding Families beta opens in late November 2026, and a supervised research pilot follows in early 2027. Showing that scores changed is not the same as showing we caused it, and that needs a controlled comparison we have not yet run.</p>
              </aside>
            </div>
            <div className={c("sub-head")}><h3>Three findings, three design decisions</h3></div>
            <div className={c("beliefs")}>
              <div className={c("belief")}>
                <span className={c("n")}>01</span>
                <h3>Struggle is only productive by design</h3>
                <span className={c("tag")}>Finding</span>
                <p>Problem solving before instruction can deepen understanding and transfer, but the effect depends on age, task, guidance, and implementation. In the meta-analysis, learners in grades 2 to 5 did better with instruction first.</p>
                <span className={c("src")}>Kapur 2008, 2016 &middot; Sinha &amp; Kapur 2021, meta-analysis</span>
                <div className={c("dd")}><span className={c("tag")}>Design decision</span><p>We protect the learner&rsquo;s effort without assuming struggle itself teaches. We scaffold support and design each struggle to resolve in sense-making. For grades 4 and 5, that means guided struggle, not unguided: every puzzle opens with Understand and Define, and when a child is stuck, help comes in small steps written and reviewed by educators.</p></div>
              </div>
              <div className={c("belief")}>
                <span className={c("n")}>02</span>
                <h3>Assisted performance is not enough</h3>
                <span className={c("tag")}>Finding</span>
                <p>About 1,000 high-school math students in Turkey, randomized. With unrestricted GPT-4, practice performance improved, but later unaided exam performance was 17 percent lower than the no-AI control. A guided version that gave hints instead of answers showed no significant reduction.</p>
                <span className={c("src")}>Bastani et al. 2025, PNAS</span>
                <div className={c("dd")}><span className={c("tag")}>Design decision</span><p>We record the help behind every attempt, so an assisted score is never mistaken for what a learner can do alone.</p></div>
              </div>
              <div className={c("belief")}>
                <span className={c("n")}>03</span>
                <h3>Support can create dependence</h3>
                <span className={c("tag")}>Finding</span>
                <p>1,625 university students across ten courses, randomized. For four weeks, AI prompts flagged weak comments in their peer feedback, without writing it. When the prompts were withdrawn, their comments were flagged as low quality significantly more often. The researchers concluded that students tended to rely on the assistance rather than learn from it.</p>
                <span className={c("src")}>Darvishi et al. 2024, Computers &amp; Education</span>
                <div className={c("dd")}><span className={c("tag")}>Design decision</span><p>Support should work itself out of a job. Falling hint use counts as progress only if the learner still solves without it.</p></div>
              </div>
            </div>

            <div className={c("success")}>
              <div className={c("s-copy")}>
                <span className={c("lab")}>What does success look like?</span>
                <h2>The learner needs us less.</h2>
                <p>Most software measures success by how often people come back. We ask a harder question: <strong>does the learner need less help as they go, and still solve without it?</strong></p>
              </div>
              <SuccessFigure />
            </div>
          </div>
        </section>

        {/* 5 · commitments (lavender in v8.29, so it does not run into the white science section above) */}
        <section className={c("tinted")}>
          <div className={c("wrap")}>
            <div className={c("head")}><h2>What we hold ourselves to</h2></div>
            <div className={c("strip")}>
              <div><span className={c("pic")} aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.2 19.2c0-3.1 2.6-5.2 5.8-5.2s5.8 2.1 5.8 5.2" /><path d="M15.6 5a3.2 3.2 0 0 1 0 6" /><path d="M17.4 14.4c2 .7 3.4 2.4 3.4 4.8" /></svg></span><h3>Human-led, AI-supported</h3><p>Human judgment stays central. Teachers direct the tools they use in class, and in learner-facing experiences the learner owns the reasoning. AI supports both. It replaces neither.</p></div>
              <div><span className={c("pic")} aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></svg></span><h3>Explainable by design</h3><p>Every AI intervention has a pedagogical purpose we can name. Where the system steps in, we design that step to be visible to the teacher or parent, not hidden inside the experience.</p></div>
              <div><span className={c("pic")} aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 2.8v5.4c0 4.4-2.9 8-7 9.8-4.1-1.8-7-5.4-7-9.8V5.8L12 3z" /><path d="M8.8 12.2l2.3 2.3 4.2-4.6" /></svg></span><h3>Privacy is part of the architecture</h3><p>We minimize the data we collect about a learner, define clear retention boundaries, never sell or rent it, and design for age-appropriate privacy from the start.</p><a className={c("go")} href="/privacy/">Our privacy approach &rarr;</a></div>
            </div>
          </div>
        </section>

        {/* 6 · close (orange band) */}
        <section className={c("close-band")}>
          <div className={c("wrap")}>
            <div className={c("close-copy")}>
              <div className={c("cc-l")}>
                <span className={c("lab eyebrow")}>Work with us</span>
                <h2>Build AI that leaves people more capable than it found them.</h2>
              </div>
              <div className={c("cc-r")}>
                <p>That is the standard we hold our products, our research, and our partnerships to.</p>
                <div className={c("cta-row")}>
                  <a className={c("btn btn-onorange")} href="mailto:hello@ignitecuriosity.ai">Partner with us</a>
                </div>
              </div>
            </div>
            <ul className={c("doors")}>
              <li><h3>Families</h3><p>Join the IgniteThinking Founding Families beta.</p><a className={c("go")} href="/ignitethinking/#beta">Request beta access &rarr;</a></li>
              <li><h3>Educators and schools</h3><p>Practical AI literacy for your team, through IgniteEd.</p><a className={c("go")} href="/igniteed/">Visit IgniteEd &rarr;</a></li>
              <li><h3>Researchers and funders</h3><p>Help us study how children reason after the hints are gone.</p><a className={c("go")} href="mailto:hello@ignitecuriosity.ai?subject=Research%20with%20Ignite%20Curiosity%20Lab">Write to us &rarr;</a></li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

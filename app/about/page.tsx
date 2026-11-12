import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import styles from "./page.module.css"

// Ported from docs/handoff-2026-11-10/source/ICL-About-v1_4.html (11 Nov 2026),
// replacing the July About page. Copy is final and audited (handoff rule 3):
// port verbatim, no edits. Class names are the draft's, mapped to the CSS
// Module by c(). Review-only elements (draft banner, todo chips, draft footer
// tail, version-history comments) do not ship (handoff 4.2); the one paragraph
// that held only a review note is left out with it. The three portraits,
// embedded in the draft, are files in public/about/. The draft has no script.

const c = (names: string) =>
  names
    .split(" ")
    .filter(Boolean)
    .map((n) => styles[n] ?? n)
    .join(" ")

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and why we started: educators, researchers and engineers building AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader current="about" announce />
      <main className={`flex-1 ${c("page")}`}>
        {/* 1 · hero */}
        <section className={c("hero")}>
          <div className={c("wrap hero-grid")}>
          <div>
            <span className={c("kicker")}>About Ignite Curiosity Lab</span>
            <h1>We build AI that leaves the thinking <b>with the learner.</b></h1>
            <p className={c("mission")}><span className={c("mlab")}>Our mission</span>Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.</p>
            <p className={c("lede")}>We are educators, researchers and engineers. We start with how children learn to reason, then ask what technology can add. Never the other way around.</p>
            <div className={c("cta-row")}>
              <a className={c("btn btn-primary")} href="#team">Meet the team</a>
              <a className={c("btn btn-onphoto")} href="#rule">Our standing rule</a>
            </div>
          </div>

          <figure className={c("says")}>
            <div className={c("say not")}><span className={c("who")}>Not this</span><q>“The AI told me.”</q></div>
            <div className={c("say yes")}><span className={c("who")}>This</span><q>“I figured it out.”</q></div>
            <figcaption>The sentence we build for</figcaption>
          </figure>
          </div>
        </section>
        <div className={c("creds")}><div className={c("wrap")}>
          <span><span className={c("ci")}>NVIDIA Inception</span> &middot; <span className={c("ci")}>Stanford LEAD</span> &middot; <span className={c("ci")}>LISA Cohort 11</span> &middot; <span className={c("ci")}>Me2We 2026 Top-10 (Stanford GSB)</span> &middot; <span className={c("ci")}>Patent pending</span></span>
          <span>Workshop and poster, Khan Lab School AI in Education Summit 2026</span>
        </div></div>

        {/* 2 · why we started (white) */}
        <section id="story">
          <div className={c("wrap story-grid")}>
            <div>
              <span className={c("lab eyebrow")}>Why we started</span>
              <h2>Answers are nearly free now. The thinking still has to be the child’s.</h2>
              <div className={c("prose")}>
                <p>AI can make knowledge more accessible than at any moment in history. It can also make it remarkably easy to stop thinking. For a child, the shortcut is one tap away, and AI can do children’s thinking for them.</p>
                <p>So the skill that matters is no longer knowing the answer. It is knowing what to ask, how to test an idea, and how to think alongside intelligent machines without handing over your own mind.</p>
                <p>We started Ignite Curiosity Lab to design for that. The order matters: first a theory of how children learn to reason and what we want to strengthen in them, then the question of what technology can add.</p>
                <p>And we build for the student without a tutor at home. Learning technology that reaches only the children who already have every advantage is incomplete.</p>
              </div>
            </div>
            <aside>
              <blockquote className={c("pull")}>
                <p>A learning company that happens to use AI. <span>Not an AI company that happens to sell to schools.</span></p>
                <cite>Azade Sanjari, Co-Founder and CEO</cite>
              </blockquote>
              <div className={c("roots")}>
                <span className={c("lab")}>Where we come from</span>
                <p>Years in classrooms and community learning centers teaching children to code and reason, in mathematics education research, and in building production AI systems. Ignite is where those three meet.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* 3 · team (deep purple) */}
        <section className={c("dark")} id="team">
          <div className={c("wrap")}>
            <div className={c("team-head")}>
              <div>
                <span className={c("lab eyebrow")}>The team</span>
                <h2>Where learning science directs AI engineering.</h2>
              </div>
              <p>The order in that sentence is deliberate. The learning design comes first, and the engineering makes it hold.</p>
            </div>
            <div className={c("team")}>
              <article className={c("member")} id="azade">
                <img src="/about/azade-sanjari.jpg" alt="Portrait of Azade Sanjari" width="520" height="520" />
                <div className={c("body")}>
                  <h3>Azade Sanjari</h3>
                  <span className={c("role")}>Co-Founder, CEO and AI Architect</span>
                  <p>Designed Ignite’s answer-isolation architecture (patent pending). Built production machine learning, computer vision and data systems in industry, including at Octave Bioscience and Zadar Labs. Alongside that work she co-founded the Children of Mehr Foundation, which opened ten library and learning centers, and, working with Code.org, taught more than 1,500 students in Iran AI literacy, coding and algorithmic thinking. Stanford GSB LEAD; LISA alum and mentor.</p>
                </div>
              </article>
              <article className={c("member")} id="azin">
                <img src="/about/azin-sanjari.jpg" alt="Portrait of Dr. Azin Sanjari" width="520" height="520" />
                <div className={c("body")}>
                  <h3>Dr. Azin Sanjari</h3>
                  <span className={c("role")}>Co-Founder and Chief Learning Scientist</span>
                  <p>Assistant Professor of Mathematics Education at the University of Central Arkansas. Azin is our learning scientist: she leads Ignite’s learning science and research, including the research pilot with schools and its ethics review.</p>
                </div>
              </article>
              <article className={c("member")} id="saeed">
                <img src="/about/saeed-gilani.jpg" alt="Portrait of Saeed Gilani" width="520" height="520" />
                <div className={c("body")}>
                  <h3>Saeed Gilani</h3>
                  <span className={c("role")}>Co-Founder and CTO</span>
                  <p>Built and runs the IgniteThinking app. Brings software infrastructure experience from large technology companies, including Amazon.</p>
                </div>
              </article>
            </div>
            <div className={c("advisors")}>
              <div className={c("adv-lab")}><span className={c("lab")}>Advisors</span></div>
              <div><b>Dr. Shiva Houshmand</b><span className={c("aff")}>Associate Professor of Mathematics and Computer Science, Santa Clara University</span></div>
              <div><b>Kaveh Mir</b><span className={c("aff")}>Program Manager, Google &middot; sales and partnerships</span></div>
            </div>
          </div>
        </section>

        {/* 4 · standing rule (white) */}
        <section id="rule">
          <div className={c("wrap rule-grid")}>
            <div>
              <span className={c("lab eyebrow")}>Our standing rule</span>
              <p className={c("stage")}>Today every hint your child sees is written and reviewed by educators.</p>
              <p className={c("promise")}>The AI won’t hand over <span>the answer.</span></p>
            </div>
            <div>
              <p className={c("proof")}><span className={c("lab")}>Why you can hold us to it</span>It is built without the answer, it only phrases help our educators approved, every line in the first AI release is read by a learning scientist, and live phrasing ships only after it passes a leakage test and a learning test.</p>
              <ol className={c("layers")}>
                <li><span className={c("n")}>01</span><b>Built without the answer</b></li>
                <li><span className={c("n")}>02</span><b>Phrases only help our educators approved</b></li>
                <li><span className={c("n")}>03</span><b>Every line of the first AI release read by a learning scientist</b></li>
                <li><span className={c("n")}>04</span><b>Live phrasing only after a leakage test and a learning test</b></li>
              </ol>
              <a className={c("morelink")} href="/#science">How learning science shapes what we build &rarr;</a>
            </div>
          </div>
        </section>

        {/* 5 · where we're going (deep purple) */}
        <section className={c("dark")} id="path">
          <div className={c("wrap")}>
            <div className={c("path-head")}>
              <span className={c("lab eyebrow")}>Where we’re going</span>
              <h2>IgniteThinking is where we start.</h2>
              <p>Subject matter is the vehicle. Independent reasoning is the point. Each step widens the grades and subjects, and one gate decides when we take it.</p>
            </div>
            <ol className={c("path")}>
              <li className={c("step")}><span className={c("when")}>Now</span><h3>IgniteThinking</h3><p>Grades 4 and 5. Computational thinking puzzles and math puzzles, worked through a design thinking process.</p></li>
              <li className={c("step")}><span className={c("when")}>Next</span><h3>Full grade 4 and 5 math</h3><p>The same grades and subject, as the puzzle catalog completes.</p></li>
              <li className={c("step gate")}><span className={c("when")}>Evidence gate</span><h3>Measured first</h3><p>A controlled study shows a gain in independent reasoning.</p></li>
              <li className={c("step")}><span className={c("when")}>Later</span><h3>Across K-12</h3><p>New grade bands and subjects, each with its own validation.</p></li>
            </ol>
            <p className={c("constant")}>At every step, the AI guides the thinking and is never given the answer.</p>
            <p className={c("path-src")}>A review commissioned by UNESCO reaches the same rule we hold: evidence that a system benefits one age group does not necessarily transfer to another (Livingstone et al., 2026).</p>

            <div className={c("also")}>
              <span className={c("lab")}>Also from the lab</span>
              <div className={c("cards")}>
                <article className={c("card")}>
                  <h3>IgniteEd</h3>
                  <p>Practical AI literacy for educators and school teams, held to the same rule as everything we make: we claim only what our data supports.</p>
                  <a className={c("go")} href="/igniteed/">Visit IgniteEd &rarr;</a>
                </article>
                <article className={c("card")}>
                  <span className={c("state")}>Coming soon</span>
                  <h3>IgniteBuild</h3>
                  <p>Where future builders ship. For high schools. Stay tuned.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · close (orange band, as home) */}
        <section className={c("close-dark")}>
          <div className={c("wrap")}>
            <div className={c("close-band")}>
              <div className={c("close-copy")}>
              <span className={c("lab eyebrow")}>Work with us</span>
              <h2>Build AI that leaves people more capable than it found them.</h2>
              <p className={c("prose")} style={{ margin: "14px 0 0" }}>That is the standard we hold our products, our research, and our partnerships to.</p>
              <div className={c("cta-row")} style={{ marginTop: "24px" }}>
                <a className={c("btn btn-onorange")} href="mailto:hello@ignitecuriosity.ai">Partner with us</a>
                <a className={c("btn btn-onorange-ghost")} href="/ignitethinking/">See IgniteThinking</a>
              </div>
              </div>
              <ul className={c("doors")}>
                <li><span className={c("lab")}>Families</span><p>Join the IgniteThinking Founding Families beta.</p><a href="/ignitethinking/#beta">Request beta access &rarr;</a></li>
                <li><span className={c("lab")}>Educators and schools</span><p>Practical AI literacy for your team, through IgniteEd.</p><a href="/igniteed/">Visit IgniteEd &rarr;</a></li>
                <li><span className={c("lab")}>Researchers and funders</span><p>Help us study how children reason after the hints are gone.</p><a href="mailto:hello@ignitecuriosity.ai?subject=Research%20with%20Ignite%20Curiosity%20Lab">Write to us &rarr;</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

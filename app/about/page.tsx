import type { CSSProperties } from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import styles from "./page.module.css"

// Ported from docs/handoff-2026-11-10/source/ICL-About-v1_7.html (20 Nov 2026);
// first ported from v1.4 (11 Nov 2026), replacing the July About page. Copy is final and audited (handoff rule 3):
// port verbatim, no edits. Class names are the draft's, mapped to the CSS
// Module by c(). Review-only elements (draft banner, todo chips, draft footer
// tail, version-history comments) do not ship (handoff 4.2); the one paragraph
// that held only a review note is left out with it (as are the two team
// link lines that hold only a "link needed" note). The portraits embedded
// in the draft (three team portraits and the quote's small one) are files in
// public/about/. The draft has no script.

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
  alternates: { canonical: "https://ignitecuriosity.ai/about/" },
  // Share tags (v1.7). The draft's share image (assets/icl-about-share-1200x630.png,
  // "confirm its address at deploy") is not in this repo yet, so the site's default
  // image stands in until it is.
  openGraph: {
    type: "website",
    siteName: "Ignite Curiosity Lab",
    title: "About | Ignite Curiosity Lab",
    description:
      "Who we are and why we started: educators, researchers and engineers building AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
    url: "https://ignitecuriosity.ai/about/",
    images: [{ url: "/images/icl-mainpage.jpg", width: 1280, height: 720, alt: "Ignite Curiosity Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ignite Curiosity Lab",
    description:
      "Who we are and why we started: educators, researchers and engineers building AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.",
    images: ["/images/icl-mainpage.jpg"],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader current="about" announce />
      <main id="main" className={`flex-1 ${c("page")}`}>
        {/* 1 · hero */}
        <section className={c("hero")}>
          <div className={c("wrap hero-grid")}>
          <div>
            <h1>We build AI that leaves the thinking <b>with the learner.</b></h1>
            <p className={c("mission")}><span className={c("mlab")}>Our mission</span>Ignite Curiosity Lab creates AI learning experiences that build independent reasoning skills in K-12 students, where AI guides their thinking instead of giving them answers.</p>
            <p className={c("lede")}>We are educators, researchers and engineers. We start with how children learn to reason, then ask what technology can add. Never the other way around.</p>
            <div className={c("cta-row")}>
              <a className={c("btn btn-primary")} href="#team">Meet the team</a>
              <a className={c("btn btn-onphoto")} href="#rule">Our standing rule</a>
            </div>
          </div>

          <figure className={c("slip")}>
            <figcaption>The sentence we build for</figcaption>
            <p className={c("no")}><span className={c("who")}>Not this</span><span className={c("sq")}><s>“The AI told me.”</s></span></p>
            <p className={c("yes")}><span className={c("who")}>This</span><span className={c("sq")}>“I figured it out.”<svg viewBox="0 0 300 10" preserveAspectRatio="none" aria-hidden="true"><path d="M3 6.5C52 2 98 8.5 150 5.5S252 2.5 297 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" /></svg></span></p>
          </figure>
          </div>
        </section>
        <div className={c("creds")}><div className={c("wrap")}>
          <ul aria-label="Recognition and programs">
            <li><b>NVIDIA Inception</b></li>
            <li><b>Stanford LEAD</b></li>
            <li><b>LISA Cohort 11</b></li>
            <li><b>Me2We 2026 Top-10</b><span>Stanford GSB</span></li>
            <li><b>Patent pending</b></li>
            <li><b>Khan Lab School AI in Education Summit 2026</b><span>Workshop and poster</span></li>
          </ul>
        </div></div>

        {/* 2 · why we started (white) */}
        <section id="story">
          <div className={c("wrap")}>
            <div className={c("why-grid")}>
              <div className={c("why-head")}>
                <span className={c("lab eyebrow")}>Why we started</span>
                <h2>Answers are nearly free now. The thinking still has to be the child’s.</h2>
              </div>
              <div className={c("prose")}>
                <p>AI can make knowledge more accessible than at any moment in history. It can also make it remarkably easy to stop thinking. For a child, the shortcut is one tap away, and AI can do children’s thinking for them.</p>
                <p>So the skill that matters is no longer knowing the answer. It is knowing what to ask, how to test an idea, and how to think alongside intelligent machines without handing over your own mind.</p>
                <p>We started Ignite Curiosity Lab to design for that. The order matters: first a theory of how children learn to reason and what we want to strengthen in them, then the question of what technology can add.</p>
                <p>And we build for the student without a tutor at home. Learning technology that reaches only the children who already have every advantage is incomplete.</p>
              </div>
            </div>
            <div className={c("stance")}>
              <figure>
                <blockquote><p>A learning company that happens to use AI. <span>Not an AI company that happens to sell to schools.</span></p></blockquote>
                <figcaption>
                  <img src="/about/azade-sanjari-avatar.jpg" alt="" width="52" height="52" />
                  <span><b>Azade Sanjari</b><span className={c("ttl")}>Co-Founder and CEO</span></span>

                </figcaption>
              </figure>
              <div className={c("origin")}>
                <span className={c("lab")}>Where we come from</span>
                <p>Years in <strong>classrooms and community learning centers</strong> teaching children to code and reason, in <strong>mathematics education research</strong>, and in building <strong>production AI systems</strong>. Ignite is where those three meet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 · team (pale lavender) */}
        <section className={c("tinted")} id="team">
          <div className={c("wrap")}>
            <div className={c("team-head")}>
              <div>
                <span className={c("lab eyebrow")}>The team</span>
                <h2>Where learning science directs AI engineering.</h2>
              </div>
              <p>The order in that sentence is deliberate. The learning design comes first, and the engineering makes it hold.</p>
            </div>
            <ul className={c("team2")}>
              <li className={c("person")} id="azade">
                <span className={c("ph")} style={{ "--z": "1.2", "--ox": "8%", "--oy": "9%" } as CSSProperties}><img loading="lazy" decoding="async" src="/about/azade-sanjari.jpg" alt="Portrait of Azade Sanjari" width="520" height="520" /></span>
                <div className={c("pn")}><h3>Azade Sanjari</h3><p className={c("role2")}>Co-Founder, CEO and AI Architect</p></div>
                <p className={c("bio")}>Designed Ignite’s answer-isolation architecture (patent pending). Built production machine learning, computer vision and data systems in industry, including at Octave Bioscience and Zadar Labs. Alongside that work she co-founded the Children of Mehr Foundation, which opened ten library and learning centers, and, working with Code.org, taught more than 1,500 students in Iran AI literacy, coding and algorithmic thinking. Stanford GSB LEAD; LISA alum and mentor.</p>
                <p className={c("links")}><a className={c("go")} href="https://www.linkedin.com/in/azadesanjari" target="_blank" rel="noopener">LinkedIn &rarr;</a></p>
              </li>
              <li className={c("person")} id="azin">
                <span className={c("ph")}><img loading="lazy" decoding="async" src="/about/azin-sanjari.jpg" alt="Portrait of Dr. Azin Sanjari" width="520" height="520" /></span>
                <div className={c("pn")}><h3>Dr. Azin Sanjari</h3><p className={c("role2")}>Co-Founder and Chief Learning Scientist</p></div>
                <p className={c("bio")}>Assistant Professor of Mathematics Education at the University of Central Arkansas. Azin is our learning scientist: she leads Ignite’s learning science and research, including the research pilot with schools and its ethics review.</p>
              </li>
              <li className={c("person")} id="saeed">
                <span className={c("ph")} style={{ "--z": "1.1", "--ox": "0%", "--oy": "45%" } as CSSProperties}><img loading="lazy" decoding="async" src="/about/saeed-gilani.jpg" alt="Portrait of Saeed Gilani" width="520" height="520" /></span>
                <div className={c("pn")}><h3>Saeed Gilani</h3><p className={c("role2")}>Co-Founder and CTO</p></div>
                <p className={c("bio")}>Built and runs the IgniteThinking app. Brings software infrastructure experience from large technology companies, including Amazon.</p>
              </li>
            </ul>
            <div className={c("advisors")}>
              <div className={c("adv-lab")}><span className={c("lab")}>Advisors</span></div>
              <div><b>Dr. Shiva Houshmand</b><span className={c("aff")}>Associate Professor of Mathematics and Computer Science, Santa Clara University</span><a className={c("go")} href="https://www.scu.edu/cas/mathcs/faculty-and-staff/shiva-houshmand/" target="_blank" rel="noopener">Faculty page &rarr;</a></div>
              <div><b>Kaveh Mir</b><span className={c("aff")}>Program Manager, Google &middot; sales and partnerships</span></div>
            </div>
          </div>
        </section>

        {/* 4 · standing rule (deep purple, the one dark section) */}
        <section className={c("dark")} id="rule">
          <div className={c("wrap rule2")}>
            <div>
              <span className={c("lab eyebrow")}>Our standing rule</span>
              <p className={c("stage")}>Today every hint your child sees is written and reviewed by educators.</p>
              <h2 className={c("promise")}>The AI won’t hand over <span>the answer.</span></h2>
            </div>
            <div className={c("holds")}>
              <span className={c("lab")}>Why you can hold us to it</span>
              {/* the Core v1.9 proof line, word for word, set as four lines (v1.7); it reads as one sentence */}
              <p className={c("proofline")}>
                <span className={c("pl")}><svg className={c("ck")} width="22" height="22" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--teal-strong)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg><span>It is built without the answer,</span></span>
                <span className={c("pl")}><svg className={c("ck")} width="22" height="22" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--teal-strong)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg><span>it only phrases help our educators approved,</span></span>
                <span className={c("pl")}><svg className={c("ck")} width="22" height="22" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--teal-strong)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg><span>every line in the first AI release is read by a learning scientist,</span></span>
                <span className={c("pl")}><svg className={c("ck")} width="22" height="22" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="13" fill="var(--teal-strong)" /><path d="M7.8 13.4l3.4 3.4 7-7.4" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg><span>and live phrasing ships only after it passes a leakage test and a learning test.</span></span>
              </p>
              <a className={c("go")} href="/#science">How learning science shapes what we build &rarr;</a>
            </div>
          </div>
        </section>

        {/* 5 · where we're going (white) */}
        <section id="path">
          <div className={c("wrap")}>
            <div className={c("path-head")}>
              <div>
                <span className={c("lab eyebrow")}>Where we’re going</span>
                <h2>IgniteThinking is where we start.</h2>
              </div>
              <p>Subject matter is the vehicle. Independent reasoning is the point. Each step widens the grades and subjects, and one gate decides when we take it.</p>
            </div>
            <ol className={c("track2")}>
              <li className={c("st now")}><span className={c("node")} aria-hidden="true"></span><span className={c("when")}>Now</span><h3>IgniteThinking</h3><p>Grades 4 and 5. Computational thinking puzzles and math puzzles, worked through a design thinking process.</p></li>
              <li className={c("st")}><span className={c("node")} aria-hidden="true"></span><span className={c("when")}>Next</span><h3>Full grade 4 and 5 math</h3><p>The same grades and subject, as the puzzle catalog completes.</p></li>
              <li className={c("st gate")}><span className={c("node")} aria-hidden="true"></span><span className={c("when")}>Evidence gate</span><h3>Measured first</h3><p>A controlled study shows a gain in independent reasoning.</p></li>
              <li className={c("st")}><span className={c("node")} aria-hidden="true"></span><span className={c("when")}>Later</span><h3>Across K-12</h3><p>New grade bands and subjects, each with its own validation.</p></li>
            </ol>
            <p className={c("constant")}>At every step, the AI guides the thinking and is never given the answer.</p>
            <p className={c("path-src")}>A review commissioned by UNESCO reaches the same rule we hold: evidence that a system benefits one age group does not necessarily transfer to another (Livingstone et al., 2026).</p>

            <div className={c("also")}>
              <span className={c("lab")}>Also from the lab</span>
              <div className={c("also2")}>
                <article className={c("acard ed")}>
                  <h3>IgniteEd</h3>
                  <p>Practical AI literacy for educators and school teams, held to the same rule as everything we make: we claim only what our data supports.</p>
                  <a className={c("go")} href="/igniteed/">Visit IgniteEd &rarr;</a>
                </article>
                <article className={c("acard soon")}>
                  <span className={c("state")}>Coming soon</span>
                  <h3>IgniteBuild</h3>
                  <p>Ship something real. For high schools. Stay tuned.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 6 · close (orange band, same structure as home v8.29) */}
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

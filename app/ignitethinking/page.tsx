import type { CSSProperties } from "react"
import type { Metadata } from "next"
import { Baloo_2, Nunito } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SampleMaze } from "@/components/ignitethinking/sample-maze"
import { BetaForm } from "@/components/ignitethinking/beta-form"
import { StickyCta } from "@/components/ignitethinking/sticky-cta"
import { c } from "./cx"

// Ported from docs/handoff-2026-11-10/source/IgniteThinking-Page-v3_52.html
// (25 Nov 2026), replacing the v3.4 port. Copy is final and audited
// (handoff rule 3): port verbatim, no edits. Class names are the draft's,
// mapped to the CSS Module by c(). Review-only elements (draft banner, todo
// chips, draft footer tail, version-history comments) do not ship
// (handoff 4.2); paragraphs that held only a review note go with them. The
// two app screenshot crops and the hint author's portrait, embedded in the
// draft, are files in public/ignitethinking/. The draft's two scripts are client components:
// SampleMaze, and BetaForm with StickyCta.

// The app-skin fonts for the product depictions (demo frame, puzzle cards),
// self-hosted via next/font like the site fonts; ruled in by Saeed, 1 Nov
// 2026, deviating from handoff 4.3's three-font list.
const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-baloo", display: "swap" })
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-nunito", display: "swap" })

// The privacy section: shown again in draft v3.37 for review, but the draft says it must not
// go live before the privacy notice is signed and published (/privacy/ is still a placeholder).
const PRIVACY_SECTION_READY = false

// The Thinking Map Explorer (draft v1.0, proposed at /ignitethinking/thinking-map/) is not on
// the site yet; its link and the sentence that introduces it wait for it.
const THINKING_MAP_READY = false

export const metadata: Metadata = {
  title: "IgniteThinking",
  description:
    "IgniteThinking: building independent reasoning through computational thinking and math puzzles, solved with a design thinking process. For grades 4 and 5. The guide is never given the answer.",
  alternates: { canonical: "https://ignitecuriosity.ai/ignitethinking/" },
  // Share tags (v3.50). The draft's share image (assets/ignitethinking-share-1200x630.png,
  // "confirm its address at deploy") is not in this repo yet, so the site's default
  // image stands in until it is.
  openGraph: {
    type: "website",
    siteName: "Ignite Curiosity Lab",
    title: "IgniteThinking | Ignite Curiosity Lab",
    description:
      "IgniteThinking: building independent reasoning through computational thinking and math puzzles, solved with a design thinking process. For grades 4 and 5. The guide is never given the answer.",
    url: "https://ignitecuriosity.ai/ignitethinking/",
    images: [{ url: "/images/icl-mainpage.jpg", width: 1280, height: 720, alt: "Ignite Curiosity Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IgniteThinking | Ignite Curiosity Lab",
    description:
      "IgniteThinking: building independent reasoning through computational thinking and math puzzles, solved with a design thinking process. For grades 4 and 5. The guide is never given the answer.",
    images: ["/images/icl-mainpage.jpg"],
  },
}

export default function IgniteThinkingPage() {
  return (
    <div className={`min-h-screen flex flex-col ${c("shell")} ${baloo.variable} ${nunito.variable}`}>
      <SiteHeader
        current="ignitethinking"
        tail="Grades 4 and 5 · at home"
        announce={{ href: "#beta", label: "Request beta access" }}
      />
      <main id="main" className={`flex-1 ${c("page")}`}>
        {/* ============================== HERO ============================== */}
        <section className={c("hero")}>
          <div className={c("wrap hero-grid")}>
            <div className={c("hero-copy")}>
              <h1><span className={c("nm")}>IgniteThinking<span className={c("sr-only")}>:</span></span> <span className={c("hl")}>Building independent reasoning through computational thinking and math puzzles, solved with a design thinking process.</span></h1>
              <p className={c("sub")}>Your child solves it.<b>The guide is never given the answer.</b></p>
              <p className={c("lede")}>Your child puts down more than one idea, tests one, and explains what they found. When they get stuck, help comes in small steps, written and reviewed by educators.</p>
              <div className={c("cta-row")}>
                <a className={c("btn btn-primary")} href="#beta">Request beta access</a>
                <a className={c("btn btn-onphoto")} href="#try" id="try-link">Try the maze</a>
              </div>
            </div>
            {/* ---------- a sample puzzle, written for this page, playable ---------- */}
            <div className={c("hero-play")}>
            <SampleMaze />
            {/* shown by the maze script when the House is reached (v3.50); the words are the ruled pair from the hero */}
            <div className={c("solved")} id="solved" hidden>
              <p>Your child solves it.<b>The guide is never given the answer.</b></p>
              <a className={c("btn btn-primary")} href="#beta">Request beta access</a>
            </div>
            </div>
            <div className={c("hstats")}>
              <div className={c("hstat")}><b>24</b><span>puzzles</span></div>
              <div className={c("hstat")}><b>3</b><span>levels, all open from day one</span></div>
              <div className={c("hstat")}><b>0</b><span>chat boxes</span></div>
            </div>
          </div>
        </section>
        {/* ===================== THE PUZZLES (second in v3.50, on lavender) ===================== */}
        <section className={c("tinted")} id="puzzles">
          <div className={c("wrap")}>
            <div className={c("head split-head")}>
              <div>
                <h2>Three levels, all open from day one.</h2>
              </div>
              <p className={c("muted")}>Nothing is locked behind a score: a child can move up when ready, or back down for an easier win.</p>
            </div>
            <div className={c("lv-grid")}>
              <div className={c("pzc lv")} style={{ "--pa": "#17A67B" } as CSSProperties}>
                  <svg className={c("pzv")} viewBox="0 0 168 100" role="img" aria-label="Four ice-cream cones, A to D, each stacked with scoops in a repeating pattern. One of them quietly breaks the pattern."><defs><clipPath id="oc-cl"><path d="M-10 0L10 0L0 26Z" /></clipPath></defs><g transform="translate(27 0)"><ellipse cx="0" cy="88.5" rx="10" ry="1.9" fill="var(--app-line)" /><g transform="translate(0 61)"><path d="M-10 0L10 0L0 26Z" fill="var(--app-gold)" /><g clipPath="url(#oc-cl)" fill="none" stroke="#CB3B1B" strokeOpacity=".3" strokeWidth=".8"><path d="M-14 2l28 28M-14 10l28 28M-14-6l28 28M14 2l-28 28M14 10l-28 28M14-6l-28 28" /></g><path d="M-10 0L10 0L0 26Z" fill="none" stroke="var(--app-ink2)" strokeWidth=".7" strokeLinejoin="round" /></g><g transform="translate(0 58)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#F58FB0" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 48)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#5AB0C9" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 38)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#F58FB0" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 28)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#5AB0C9" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><path d="M0 17.5c.4-2.6 1.6-4.2 3.4-5" fill="none" stroke="var(--app-ink2)" strokeWidth=".8" strokeLinecap="round" /><circle cx="0" cy="19.6" r="2.9" fill="var(--app-coral)" /><text x="0" y="99" textAnchor="middle" fontSize="6.5" fill="var(--app-ink2)" style={{ fontFamily: "var(--font-m)" }}>A</text></g><g transform="translate(65 0)"><ellipse cx="0" cy="88.5" rx="10" ry="1.9" fill="var(--app-line)" /><g transform="translate(0 61)"><path d="M-10 0L10 0L0 26Z" fill="var(--app-gold)" /><g clipPath="url(#oc-cl)" fill="none" stroke="#CB3B1B" strokeOpacity=".3" strokeWidth=".8"><path d="M-14 2l28 28M-14 10l28 28M-14-6l28 28M14 2l-28 28M14 10l-28 28M14-6l-28 28" /></g><path d="M-10 0L10 0L0 26Z" fill="none" stroke="var(--app-ink2)" strokeWidth=".7" strokeLinejoin="round" /></g><g transform="translate(0 58)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#59C36A" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 48)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#8B5A2B" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 38)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#59C36A" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 28)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#8B5A2B" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><path d="M0 17.5c.4-2.6 1.6-4.2 3.4-5" fill="none" stroke="var(--app-ink2)" strokeWidth=".8" strokeLinecap="round" /><circle cx="0" cy="19.6" r="2.9" fill="var(--app-coral)" /><text x="0" y="99" textAnchor="middle" fontSize="6.5" fill="var(--app-ink2)" style={{ fontFamily: "var(--font-m)" }}>B</text></g><g transform="translate(103 0)"><ellipse cx="0" cy="88.5" rx="10" ry="1.9" fill="var(--app-line)" /><g transform="translate(0 61)"><path d="M-10 0L10 0L0 26Z" fill="var(--app-gold)" /><g clipPath="url(#oc-cl)" fill="none" stroke="#CB3B1B" strokeOpacity=".3" strokeWidth=".8"><path d="M-14 2l28 28M-14 10l28 28M-14-6l28 28M14 2l-28 28M14 10l-28 28M14-6l-28 28" /></g><path d="M-10 0L10 0L0 26Z" fill="none" stroke="var(--app-ink2)" strokeWidth=".7" strokeLinejoin="round" /></g><g transform="translate(0 58)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#5AB0C9" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 48)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#F58FB0" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 38)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#F58FB0" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 28)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#5AB0C9" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><path d="M0 17.5c.4-2.6 1.6-4.2 3.4-5" fill="none" stroke="var(--app-ink2)" strokeWidth=".8" strokeLinecap="round" /><circle cx="0" cy="19.6" r="2.9" fill="var(--app-coral)" /><text x="0" y="99" textAnchor="middle" fontSize="6.5" fill="var(--app-ink2)" style={{ fontFamily: "var(--font-m)" }}>C</text></g><g transform="translate(141 0)"><ellipse cx="0" cy="88.5" rx="10" ry="1.9" fill="var(--app-line)" /><g transform="translate(0 61)"><path d="M-10 0L10 0L0 26Z" fill="var(--app-gold)" /><g clipPath="url(#oc-cl)" fill="none" stroke="#CB3B1B" strokeOpacity=".3" strokeWidth=".8"><path d="M-14 2l28 28M-14 10l28 28M-14-6l28 28M14 2l-28 28M14 10l-28 28M14-6l-28 28" /></g><path d="M-10 0L10 0L0 26Z" fill="none" stroke="var(--app-ink2)" strokeWidth=".7" strokeLinejoin="round" /></g><g transform="translate(0 58)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#59C36A" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 48)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#5AB0C9" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 38)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#59C36A" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><g transform="translate(0 28)"><path d="M-10 2C-10-6-5-9 0-9C5-9 10-6 10 2C10 4.2 8.2 4.8 7 3.6C6 5.8 3.6 5.8 2.4 4.2C1.2 6.2-1.2 6.2-2.4 4.2C-3.6 5.8-6 5.8-7 3.6C-8.2 4.8-10 4.2-10 2Z" fill="#5AB0C9" stroke="var(--app-ink2)" strokeOpacity=".5" strokeWidth=".7" strokeLinejoin="round" /><path d="M-5.6-4.6a6.5 6.5 0 0 1 4-2.4" fill="none" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="1.4" strokeLinecap="round" /></g><path d="M0 17.5c.4-2.6 1.6-4.2 3.4-5" fill="none" stroke="var(--app-ink2)" strokeWidth=".8" strokeLinecap="round" /><circle cx="0" cy="19.6" r="2.9" fill="var(--app-coral)" /><text x="0" y="99" textAnchor="middle" fontSize="6.5" fill="var(--app-ink2)" style={{ fontFamily: "var(--font-m)" }}>D</text></g></svg>
                  <span className={c("bd")}>Warm-Up</span>
                  <h3>One idea to find</h3>
                  <p>A short situation, a visual to move, and one insight inside it.</p>
                  <div className={c("pz-tag")}><span className={c("pz-k")}>Example puzzle</span><span className={c("pz-nm")}>Spot the Odd Cone</span><span className={c("pz-bl")}>Find the one that breaks the rule.</span><details className={c("pz-more")}><summary><span className={c("s-closed")}>Show details</span><span className={c("s-open")}>Hide details</span><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary><p><span className={c("pz-k")}>The story your child reads</span>Every cone from this ice-cream machine follows the same secret recipe. The cones look almost identical. But one of them quietly breaks the rule. &lsquo;Almost&rsquo; is the clue.</p></details></div>
              </div>
              <div className={c("pzc lv")} style={{ "--pa": "#4C8DF6" } as CSSProperties}>
                  <svg className={c("pzv")} viewBox="0 0 168 100" role="img" aria-label="An illustrative map of five blank regions, A to E, that share borders">
                  <g fill="#FFFFFF" stroke="var(--app-ink2)" strokeOpacity=".55" strokeWidth="1.3" strokeLinejoin="round">
                    <path d="M34 8h50v28H34z" /><path d="M84 8h50v28H84z" />
                    <path d="M34 36h100v26H34z" />
                    <path d="M34 62h50v30H34z" /><path d="M84 62h50v30H84z" /></g>
                  <g fill="var(--app-ink2)" fontSize="12" textAnchor="middle" style={{ fontFamily: "var(--font-app-h)" }}>
                    <text x="59" y="27">A</text><text x="109" y="27">B</text><text x="84" y="53">C</text><text x="59" y="82">D</text><text x="109" y="82">E</text></g>
                </svg>
                  <span className={c("bd")}>Explorer</span>
                  <h3>More than one thing to hold</h3>
                  <p>Choose an approach, not a trick, and try a second way when the first one fails.</p>
                  <div className={c("pz-tag")}><span className={c("pz-k")}>Example puzzle</span><span className={c("pz-nm")}>Fewest Colors</span><span className={c("pz-bl")}>Color the map with as few colors as you can.</span><details className={c("pz-more")}><summary><span className={c("s-closed")}>Show details</span><span className={c("s-open")}>Hide details</span><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary><p><span className={c("pz-k")}>The story your child reads</span>Mapmakers play a quiet game: color every region so neighbors never match, using as FEW colors as you can. Five regions. Surely that takes five colors&hellip; or does it?</p></details></div>
              </div>
              <div className={c("pzc lv")} style={{ "--pa": "#7B61FF" } as CSSProperties}>
                  <svg className={c("pzv")} viewBox="0 0 168 100" role="img" aria-label="A snowflake branch that splits into three, and each tip splits into three again">
                  <g fill="none" stroke="var(--app-ink2)" strokeWidth="2" strokeLinecap="round">
                    <path d="M84 96V62" /><path d="M84 62L56 40M84 62V30M84 62l28-22" />
                    <path d="M56 40l-12-6M56 40l-6-12M56 40l2-13" />
                    <path d="M84 30l-9-9M84 30V17M84 30l9-9" />
                    <path d="M112 40l12-6M112 40l6-12M112 40l-2-13" /></g>
                  <g fill="#7B61FF">
                    <circle cx="44" cy="34" r="2.6" /><circle cx="50" cy="28" r="2.6" /><circle cx="58" cy="27" r="2.6" />
                    <circle cx="75" cy="21" r="2.6" /><circle cx="84" cy="17" r="2.6" /><circle cx="93" cy="21" r="2.6" />
                    <circle cx="124" cy="34" r="2.6" /><circle cx="118" cy="28" r="2.6" /><circle cx="110" cy="27" r="2.6" /></g>
                </svg>
                  <span className={c("bd")}>Challenger</span>
                  <h3>Nothing obvious to try first</h3>
                  <p>Find a way in before choosing a method. These take longer, by design.</p>
                  <div className={c("pz-tag")}><span className={c("pz-k")}>Example puzzle</span><span className={c("pz-nm")}>The Copycat Snowflake</span><span className={c("pz-bl")}>Count the tips before you can&rsquo;t.</span><details className={c("pz-more")}><summary><span className={c("s-closed")}>Show details</span><span className={c("s-open")}>Hide details</span><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary><p><span className={c("pz-k")}>The story your child reads</span>The snowflake grows by one strange rule: every tip sprouts a tiny copy of the whole branch. Stage 2 is pretty. Stage 3 is crowded. Stage 4 has far too many tips to count, unless you never actually count them.</p></details></div>
              </div>
            </div>
                <div className={c("lv-facts")}>
              <div><span className={c("lab")}>Reading level</span><p>Fourth-grade reading in Warm-Up, fifth-grade above it: the difficulty is in the thinking, not the reading.</p></div>
              <div><span className={c("lab")}>Math puzzles too</span><p>Grade 4 and 5 ideas such as fractions, common multiples, proportional reasoning and volume. No coding needed.</p></div>
            </div>
          </div>
        </section>
        {/* ========================= THE LOOP ========================= */}
        <section id="loop" className={c("dark")}>
          <div className={c("wrap")}>
            <div className={c("head split-head")}>
              <div>
                <h2>A six-part design thinking loop</h2>
              </div>
              <p className={c("muted")}>The puzzles change; the loop does not, so your child never has to work out how the app behaves.</p>
            </div>
            <div className={c("loop")}>
              <ol className={c("loop-track")} aria-label="The six parts of the loop">
                <li className={c("node")}><span className={c("dot")} aria-hidden="true">01</span><span className={c("txt")}><span className={c("nm")}>Understand</span><span className={c("desc")}>Read the situation and say what is actually being asked.</span></span></li>
                <li className={c("node")}><span className={c("dot")} aria-hidden="true">02</span><span className={c("txt")}><span className={c("nm")}>Define</span><span className={c("desc")}>Name the real goal before choosing a method.</span></span></li>
                <li className={c("node")}><span className={c("dot")} aria-hidden="true">03</span><span className={c("txt")}><span className={c("nm")}>Ideate</span><span className={c("desc")}>Put down more than one way it could be done. One idea is not a choice.</span></span></li>
                <li className={c("node")}><span className={c("dot")} aria-hidden="true">04</span><span className={c("txt")}><span className={c("nm")}>Prototype</span><span className={c("desc")}>Build the attempt, with a picture or a tool to think with.</span></span></li>
                <li className={c("node")}><span className={c("dot")} aria-hidden="true">05</span><span className={c("txt")}><span className={c("nm")}>Test</span><span className={c("desc")}>Check it. A failed attempt is information, not the end.</span></span></li>
              </ol>
              <div className={c("loop-ret")}>
                <div className={c("loop-back")} aria-hidden="true"></div>
                <p className={c("loop-note")}>An attempt that does not work comes back to Ideate.</p>
              </div>
              <div className={c("loop-last")}>
                <span className={c("dot")} aria-hidden="true">06</span>
                <div><span className={c("nm")}>Reflect</span><span className={c("lab")}>Always available</span>
                  <p>Reflection closes every puzzle, solved or not. A child who stays stuck is never handed the answer to move on.</p></div>
              </div>
            </div>
            <div className={c("loop-two")}>
              <div>
                <figure className={c("shot")}>
                  <div className={c("shot-bar")} aria-hidden="true"><i></i><i></i><i></i></div>
                  <img src="/ignitethinking/ideate-ways-crop.jpg" width="1022" height="762" loading="lazy" decoding="async" alt="From the IgniteThinking app at the Ideate step of the Fewest Colors puzzle. The guide says not to pick an answer yet and to think of one way to try first. Under “Ways I could solve it”, two empty boxes wait for the child’s ideas, with a button to add another." />
                </figure>
                <p className={c("shot-cap")}>Ideate, in the app: your child writes down ways to try before choosing.</p>
              </div>
              <div className={c("does")}>
                <h3>What your child does in every puzzle</h3>
                <ul className={c("verbs")}>
                  <li><span className={c("where")}>Understand and Ideate</span><b>Tries first</b><span className={c("d")}>A real attempt comes before any hint.</span></li>
                  <li><span className={c("where")}>Prototype and Test</span><b>Predicts, then tests</b><span className={c("d")}>They say what they expect before the picture runs.</span></li>
                  <li><span className={c("where")}>Back at Ideate</span><b>Tries another way</b><span className={c("d")}>When a test fails, they are invited to choose again.</span></li>
                  <li><span className={c("where")}>Reflect</span><b>Explains what they found</b><span className={c("d")}>In their own words.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== THE GROWN-UP REVIEW ==================== */}
        <section id="grown-up">
          <div className={c("wrap")}>
          <div className={c("gu")}>
            <div>
              <span className={c("lab eyebrow")}>For parents &middot; the grown-up review</span>
              <h2>You get the evidence, not a verdict.</h2>
              <p>Your own read-only view of how your child worked, in their own words and drawings. Enough to ask a better question at dinner, not enough to supervise from another room.</p>
              <ul className={c("spec")}>
                <li><span className={c("k")}>Tried</span><span>Every idea they came up with, the plan they picked, and the sketch they made.</span></li>
                <li><span className={c("k")}>Help</span><span>How much help they opened, and at which step.</span></li>
                <li><span className={c("k")}>Tested</span><span>What happened when they tested it: the tries that didn&rsquo;t work, and what they changed.</span></li>
                <li><span className={c("k")}>Skill</span><span>The thinking skill each puzzle practiced.</span></li>
                <li><span className={c("k")}>In their words</span><span>What they wrote at the end, word for word, and one question to ask them about it.</span></li>
                <li><span className={c("k")}>Over time</span><span>How much help they needed, puzzle by puzzle, beside the ones they did on their own. No score.</span></li>
              </ul>
            </div>
            <div>
              <figure className={c("shot")}>
                <div className={c("shot-bar")} aria-hidden="true"><i></i><i></i><i></i></div>
                <img src="/ignitethinking/grown-up-review-crop.jpg" width="1076" height="388" loading="lazy" decoding="async" alt="From the grown-up review in the IgniteThinking app: a line saying the learner has worked on 6 puzzles and solved 1; counts of puzzles started, solved, ideas tried and flagged to review; and the independence over time panel." />
              </figure>
              <p className={c("shot-cap")}>From the grown-up review, captured from the running app on 2 Nov 2026.</p>
              <div className={c("nottell")}>
                <span className={c("lab")}>What it will not tell you</span>
                <ul className={c("nt-list")}>
                  <li>Help is not failure.</li>
                  <li>One solve is not mastery.</li>
                  <li>A longer reflection is not better thinking.</li>
                </ul>
                <p>A trend in how much help they needed is one line about one app, never an assessment of your child.</p>
              </div>
            </div>
          </div>
            {/* the thinking map, coming later: folded in here in v3.50 as a strip (its preview picture stays in v3.49) */}
            <div className={c("inbuild")} id="map">
              <div>
                <span className={c("lab")}>Coming later &middot; in build</span>
                <h3>A map of what the puzzles practice: thinking skills and math</h3>
                <p>We&rsquo;re building a parent view that shows how the thinking skills and the <span style={{ whiteSpace: "nowrap" }}>fourth- and fifth-grade</span> math ideas in the puzzles connect, which ones your child has worked on, and which they solved on their own.</p>
              </div>
              <div>
                <ul>
                  <li>Each item says what happened on a puzzle: solved on their own, solved with help, working on it, or not met yet.</li>
                  <li>No scores, no rankings, and no comparison with other children.</li>
                </ul>
                {THINKING_MAP_READY && (
        <>
        <p className={c("map-now")}>You can explore the map of our puzzles today. It describes the puzzles, not any child.</p>
                <div className={c("map-link")}><a className={c("btn btn-ghost")} href="/ignitethinking/thinking-map/">Explore the thinking map</a></div>
        </>
        )}
              </div>
            </div>
          </div>
        </section>
        {/* ========================== WHY REASONING ========================== */}
        <section id="why" className={c("tinted")}>
          <div className={c("wrap")}>
            <div className={c("why-top")}>
              <div>
                <h2>Why reasoning, and why now?</h2>
              </div>
              <div>
                <p className={c("ask")}>When the help is gone, can your child reason through an unfamiliar puzzle on their own?</p>
                <p className={c("pull")}>Your child can already get an answer in seconds, and increasingly, explanations too. What no tool will hand them is <b>the experience of working something out</b> when it is genuinely hard.</p>
              </div>
            </div>
            <div className={c("why-grid")}>
              <div className={c("why-card")}>
                <span className={c("lab")}>Why grades 4 and 5</span>
                <div className={c("shift-row")}>
                  <p className={c("say from")}><span className={c("tag")}>From</span>&ldquo;It worked three times, so it must always work.&rdquo;</p>
                  <svg className={c("shift-arrow")} viewBox="0 0 26 26" fill="none" stroke="#A097B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 13h17M15 7l6 6-6 6" /></svg>
                  <p className={c("say to")}><span className={c("tag")}>To</span>&ldquo;Let me try to break it. If I can&rsquo;t, here&rsquo;s why.&rdquo;</p>
                </div>
                <p>Grades 4 and 5 sit inside the years when math standards expect this change: from trusting a few examples to making a claim, hunting for a counterexample, and explaining why it holds. <span className={c("cite")}>NCTM 2000</span></p>
              </div>
              <div className={c("why-card is-anchor")}>
                <span className={c("lab")}>Why reasoning</span>
                <p className={c("glue-word")}>&ldquo;Glue&rdquo;</p>
                <p>The National Research Council&rsquo;s word for reasoning: the part that turns facts, procedures and concepts into a coherent whole. <span className={c("cite")}>NRC 2001</span></p>
              </div>
            </div>
            <div className={c("habits")}>
              <p className={c("lab")}>The habits the puzzles ask for</p>
              <div className={c("habit-row")}>
                <div className={c("habit")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 16.5l5-8 3.5 5 2-3 4.5 6z" /><path d="M13 10.5V3.5l3.6 1.7L13 6.9" /></svg><span>Make sense of it, and stick with it</span></div><div className={c("habit")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="5.5" height="5.5" rx="1" /><rect x="11.5" y="3" width="5.5" height="5.5" rx="1" /><rect x="3" y="11.5" width="5.5" height="5.5" rx="1" /><rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1" /></svg><span>Look for structure</span></div><div className={c("habit")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 9.5V8a3 3 0 0 1 3-3h10" /><path d="M14 2.5l2.5 2.5L14 7.5" /><path d="M16.5 10.5V12a3 3 0 0 1-3 3h-10" /><path d="M6 17.5L3.5 15 6 12.5" /></svg><span>Notice what repeats</span></div><div className={c("habit")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4.5h14v9H9l-4 3v-3H3z" /><path d="M7 9.2l2 2 4-4" /></svg><span>Make a case for the answer</span></div>
              </div>
              <p className={c("habit-src")}>From the Common Core Standards for Mathematical Practice: how mathematicians think, not what they know.</p>
            </div>
            <p className={c("tail-link")}><a className={c("go")} href="/#science">How learning science shapes what we build &rarr;</a></p>
          </div>
        </section>
        {/* ==================== OUR VISION FOR AI (v3.26) ==================== */}
        <section id="ai-vision">
          <div className={c("wrap")}>
            <div className={c("ai-top")}>
            <div className={c("head")}>
              <span className={c("lab eyebrow")}>Our vision for AI</span>
              <h2>Where AI belongs in your child&rsquo;s thinking.</h2>
              <p className={c("muted")}>AI can do children&rsquo;s thinking for them. We are designing the opposite: AI that steps in only after your child has tried, to help them think, not to think for them.</p>
            </div>
            <div className={c("promise")}>
              <p className={c("stage")}>Today every hint your child sees is written and reviewed by educators.</p>
              <p><b>The AI won&rsquo;t hand over the answer.</b> It is built without the answer, it only phrases help our educators approved, every line in the first AI release is read by a learning scientist, and live phrasing ships only after it passes a leakage test and a learning test.</p>
            </div>
            </div>
            <ul className={c("road")}>
              <li className={c("feat")}>
                <div className={c("feat-h")}>
                  <span className={c("where")}>Before any help</span>
                  <h3>Your child thinks first</h3>
                </div>
                <p>Hints come only after a real attempt, one small step at a time. Help with reading and the rules is always there.</p>
              </li>
              <li className={c("feat")}>
                <div className={c("feat-h")}>
                  <span className={c("where")}>When a hint appears</span>
                  <h3>Hints for every reader</h3>
                </div>
                <p>The same hint, worded for different readers. AI drafts the wording from our puzzle material, never from your child&rsquo;s writing, and a learning scientist reads every line first.</p>
              </li>
              <li className={c("feat")}>
                <div className={c("feat-h")}>
                  <span className={c("where")}>When your child predicts</span>
                  <h3>Help built on your child&rsquo;s idea</h3>
                </div>
                <p>A hint that picks up your child&rsquo;s own prediction and asks them to check it. Only on puzzles where it helps, only with your consent, and only after a legal review, a leakage test and a learning test.</p>
              </li>
            </ul>
            <details className={c("more-ai")}>
              <summary><span className={c("s-closed")}>See the rest of our vision for AI</span><span className={c("s-open")}>Hide the rest</span><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
              <ul className={c("road")}>
              <li className={c("feat")}>
                <div className={c("feat-h")}>
                  <span className={c("where")}>From one puzzle to the next</span>
                  <h3>Memory that keeps your child remembering</h3>
                </div>
                <p>If we add it, it will record what your child did, never labels about who they are, and let old conclusions fade. Switched on only after a legal review, testing and your consent.</p>
              </li>
              <li className={c("feat")}>
                <div className={c("feat-h")}>
                  <span className={c("where")}>As the puzzles grow</span>
                  <h3>More math to think through</h3>
                </div>
                <p>The puzzles grow to cover grade 4 and 5 math. AI may draft hints for new puzzles; educators approve every one.</p>
              </li>
              <li className={c("feat")}>
                <div className={c("feat-h")}>
                  <span className={c("where")}>Beyond solving</span>
                  <h3>Your child makes the puzzle</h3>
                </div>
                <p>We are designing a way for your child to make a puzzle of their own and choose the kind of thinking it asks for. No AI is given the solution.</p>
              </li>
              </ul>
            </details>
            <p className={c("never")}><b>What the guide will not have:</b> open chat, web access, or a way to change itself. No unchecked text reaches your child.</p>
          </div>
        </section>
        {/* ==================== TRUST AND ACCESS ==================== */}
        <section id="trust" className={c("dark")}>
          <div className={c("wrap")}>
            <div className={c("sec-top")}>
            <div className={c("head")}>
              <span className={c("lab eyebrow")}>Access for every child</span>
              <h2>Reading and typing should not be the barrier.</h2>
              <p className={c("muted")}>A child who can think through a hard problem may still struggle to read it or type the answer. The app treats those as separate abilities.</p>
            </div>
            <div className={c("aids")}>
              <div className={c("aid")}>
                <div className={c("aid-h")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h2.5L10 5v10L6.5 12H4z" /><path d="M13 7.5a3.5 3.5 0 0 1 0 5" /><path d="M15.4 5.4a7 7 0 0 1 0 9.2" /></svg><h3>Listen to any of it</h3></div>
                <p>Instructions, hints and worked examples, read aloud at the press of a button.</p>
              </div>
              <div className={c("aid")}>
                <div className={c("aid-h")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="5.5" width="15" height="9" rx="2" /><path d="M6 8.6h.01M9 8.6h.01M11.6 8.6h.01M14.4 8.6h.01M6.6 11.6h6.8" /></svg><h3>Built for the keyboard</h3></div>
                <p>Everything works from the keyboard, including the pieces meant to be dragged.</p>
              </div>
            </div>
            </div>
            <p className={c("bridge")}>Designed to meet WCAG 2.1 AA. Read-aloud is on from the start and can be turned off.</p>
          </div>
        </section>
        {/* ==================== QUESTIONS (v3.42: W-4 FAQ and W-5 who writes the hints) ==================== */}
        <section id="faq">
          <div className={c("wrap faq-grid")}>
            <div className={c("faq-side")}>
              <h2>Questions parents ask.</h2>
              <div className={c("hintby")}>
                <p className={c("lab")}>Who writes the hints</p>
                <div className={c("hintby-row")}>
                  <img src="/ignitethinking/azin-sanjari.jpg" alt="Portrait of Dr. Azin Sanjari" width="104" height="104" loading="lazy" decoding="async" />
                  <div><b>Dr. Azin Sanjari</b><span>Co-Founder and Chief Learning Scientist</span></div>
                </div>
                <p>Every hint in the puzzle bank is written and reviewed by Dr. Azin Sanjari, Assistant Professor of Mathematics Education at the University of Central Arkansas.</p>
                <a className={c("go")} href="/about/#azin">Meet the team &rarr;</a>
                      </div>
            </div>
            <div className={c("faq-list")}>
              <details className={c("qa")} open>
                <summary><h3>Is there AI in the app today?</h3><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
                <div className={c("qa-a")}>
                  <p>Today every hint your child sees is written and reviewed by educators. The guide&rsquo;s AI comes in a later update, once it passes its tests.</p>
                  <p><a className={c("go")} href="#ai-vision">Our vision for AI, and how it is held to the promise &rarr;</a></p>
                </div>
              </details>
              <details className={c("qa")}>
                <summary><h3>What will I see as a parent?</h3><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
                <div className={c("qa-a")}>
                  <p>The grown-up review: your own read-only view of how your child worked, in their own words and drawings. It shows what they tried, how much help they opened and at which step, what happened when they tested it, and what they wrote at the end, word for word. You get the evidence, not a verdict.</p>
                  <p><a className={c("go")} href="#grown-up">See the grown-up review &rarr;</a></p>
                </div>
              </details>
              <details className={c("qa")}>
                <summary><h3>Is reading a barrier?</h3><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
                <div className={c("qa-a")}>
                  <p>It should not be. Instructions, hints and worked examples can be read aloud at the press of a button. Read-aloud is on from the start and can be turned off.</p>
                  <p><a className={c("go")} href="#trust">Access for every child &rarr;</a></p>
                </div>
              </details>
              <details className={c("qa")}>
                <summary><h3>What do you collect about my child?</h3><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
                <div className={c("qa-a")}>
                  <p>A nickname, an age band and the work they make. From you, your first name and email. No birth date, photo, school or location. We never use your child&rsquo;s work, words or voice to train AI models.</p>
                  {PRIVACY_SECTION_READY && (
        <>
        <p><a className={c("go")} href="#privacy">What we collect, and what we never do &rarr;</a></p>
        </>
        )}
                </div>
              </details>
              <details className={c("qa")}>
                <summary><h3>Is this a course or a tutor?</h3><svg className={c("chev")} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
                <div className={c("qa-a")}>
                  <p>Neither. It is an app for learning. Your child works through puzzles on their own, and help comes in small steps when they get stuck. There is no chat box, and nobody in the app to message.</p>
                </div>
              </details>
              <p className={c("faq-more")}>Something else? <a href="mailto:hello@ignitecuriosity.ai?subject=A%20question%20about%20IgniteThinking">Ask us</a>.</p>
            </div>
          </div>
        </section>
        {PRIVACY_SECTION_READY && (
        <>
        {/* ==================== PRIVACY: four promises and a link to the full notice (v3.45). Must not go live before the notice is signed and published. ==================== */}
        <section id="privacy" className={c("dark")}>
          <div className={c("wrap")}>
            <div className={c("pv-grid")}>
            <div className={c("head")}>
              <span className={c("lab eyebrow")}>Privacy</span>
              <h2>What we collect, and what we never do.</h2>
              <p className={c("muted")}>Built for children under 13, so every family gets the full protections whether or not we know a child&rsquo;s age.</p>
            </div>
            <div className={c("privacy")}>
              <div className={c("aid")}>
                <div className={c("aid-h")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5.5h12M4 10h7.5M4 14.5h3.5" /></svg><h3>The minimum, and no more</h3></div>
                <p>Your first name and email, and for your child a nickname, an age band and the work they make. No birth date, photo, school or location.</p>
              </div>
              <div className={c("aid")}>
                <div className={c("aid-h")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="5" width="10" height="10" rx="2" /><path d="M8 2.5v2.5M12 2.5v2.5M8 15v2.5M12 15v2.5M2.5 8h2.5M2.5 12h2.5M15 8h2.5M15 12h2.5" /></svg><h3>Educators write every hint</h3></div>
                <p>Every hint your child sees is written and reviewed by educators. The app picks the hint from your child&rsquo;s progress, and nothing your child makes is sent to an AI provider. Before any AI feature goes on, we name the provider, say what it receives and tell you first.</p>
              </div>
              <div className={c("aid")}>
                <div className={c("aid-h")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2.5l6 2.5v4.5c0 3.6-2.6 6.4-6 8-3.4-1.6-6-4.4-6-8V5z" /><path d="M7.5 10l1.8 1.8 3.4-3.6" /></svg><h3>Never used to train AI</h3></div>
                <p>We never use your child&rsquo;s work, words or voice to train AI models, and any provider we use must agree to the same in writing.</p>
              </div>
              <div className={c("aid")}>
                <div className={c("aid-h")}><svg className={c("mk")} width="20" height="20" viewBox="0 0 20 20" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1.8 10S4.7 4.8 10 4.8 18.2 10 18.2 10 15.3 15.2 10 15.2 1.8 10 1.8 10Z" /><circle cx="10" cy="10" r="2.3" /></svg><h3>You can see it, and end it</h3></div>
                <p>Ask to see your child&rsquo;s data, have it deleted, or withdraw consent, at any time.</p>
              </div>
            </div>
            <div className={c("notice")}>
              <p>The rest is in the full notice: every provider we use, how long we keep each kind of data, research consent, and what we do if there is a security problem.</p>
              <a className={c("btn btn-onphoto")} href="/privacy/">Read the full privacy notice &rarr;</a>
            </div>
            </div>
          </div>
        </section>
        </>
        )}
        {/* ============================== BETA ============================== */}
        <section id="beta" className={c("beta-band")}>
          <div className={c("wrap")}>
            <div className={c("beta")}>
              <div className={c("beta-head")}>
                <span className={c("lab eyebrow")}>Founding Families</span>
                <h2>The Founding Families beta opens in late November</h2>
                <p>Your family helps us learn what works, what confuses, and what to fix. We are keeping the group small so we can answer every family who writes.</p>
              </div>
              <div className={c("beta-form")}>
                <BetaForm />
                <p className={c("have")}>Have an invite code? <a href="https://app.ignitecuriosity.ai/register">Set up your family</a>.</p>
              </div>
              <div className={c("beta-gets")}>
                <p className={c("lab")}>What a family gets</p>
                <ul>
                  <li><svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8.6l3.6 3.6L14 3.8" fill="none" stroke="#56457F" strokeWidth="2.4" strokeLinecap="round" /></svg><span>24 puzzles, 18 computational thinking and 6 math, across three levels, all open from the first day.</span></li>
                  <li><svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8.6l3.6 3.6L14 3.8" fill="none" stroke="#56457F" strokeWidth="2.4" strokeLinecap="round" /></svg><span>The guide, with every hint written and reviewed by educators. Its AI comes in a later update, once it passes its tests.</span></li>
                  <li><svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8.6l3.6 3.6L14 3.8" fill="none" stroke="#56457F" strokeWidth="2.4" strokeLinecap="round" /></svg><span>The journal and the grown-up review.</span></li>
                  <li><svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8.6l3.6 3.6L14 3.8" fill="none" stroke="#56457F" strokeWidth="2.4" strokeLinecap="round" /></svg><span>A direct line to the people who built it, and a say in what changes.</span></li>
                </ul>
                <p className={c("more")}>Starting without AI has its own benefits: your child sees help exactly as we wrote it, no AI responds to anything they write or say, and when the AI arrives we can tell whether it helps, because we will know how children did without it.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StickyCta />
      <SiteFooter />
    </div>
  )
}

# HANDOFF: ship the new ignitecuriosity.ai and connect it to the IgniteThinking login

**For:** a Claude Code agent (or a developer) picking this up cold. **From:** Azade Sanjari, CEO, Ignite Curiosity Lab. Written 1 Nov 2026. **Status of the work:** design and copy are final drafts. Nothing below is built yet. **This file is self-contained.** Everything it refers to is in ./source/ next to it, or in the two GitHub repos named below.

-----

## 0\. Read this first (operating rules for the agent)

1.  **Two repos, two independent pull requests.** Workstream A is the website. Workstream B is the app. Do A first. B is small.
2.  **Open draft pull requests. Never merge. Never push to** **main****.** On the website repo, merging to main deploys to the live domain within minutes. Azade merges when the launch blockers in section 7 are cleared.
3.  **Copy is final. Port it verbatim.** Do not rewrite, shorten, "improve" or re-order any sentence. Every claim on these pages was audited line by line against the company's legal and evidence rules (source/Website-Claims-Audit-2026-10-29-v1\_3.md). A well-meant edit can create a legal or scientific claim the company cannot support.
4.  **The two HTML drafts are the visual source of truth.** Match them at 1366 px and 375 px wide. Do not redesign them into the repo's existing shadcn look.
5.  **No em dashes (U+2014) in any rendered text.** Use a period, comma or colon.
6.  **No new third-party scripts, trackers, analytics, embeds or fonts** beyond what section 4.3 allows.
7.  **Stop and ask** (do not guess) in the situations listed in section 8.

Read order: this file, then source/IgniteThinking-Landing-and-Login-Wiring-2026-11-01.md (2 pages, the decision), then open the two HTML files in a browser, then skim the claims audit sections 4 and 7.

-----

## 1\. Context in five lines

  - **Ignite Curiosity Lab** builds AI learning experiences where the AI guides a student's thinking instead of giving answers.
  - **IgniteThinking** is its first product: a puzzle app for grades 4 and 5 (ages 9 to 11). The live app is app.ignitecuriosity.ai.
  - The company website www.ignitecuriosity.ai still shows July copy about an older product (IgniteMath) that has been removed from the site.
  - **Ruling (Azade, 1 Nov 2026):** ignitecuriosity.ai/ignitethinking/ is IgniteThinking's public landing page, and app.ignitecuriosity.ai is the login. No separate domain.
  - A Founding Families paid beta opens in late November 2026. Families request access by email, receive an invite code, and register in the app.

-----

## 2\. What is in ./source/

|  |  |  |
| :-: | :-: | :-: |
| \*\*File\*\* | \*\*What it is\*\* | \*\*Used by\*\* |
| ICL-Home-Philosophy-v8\\\_4.html | \*\*The new home page\*\* (draft v8.4). Single file: HTML, CSS, one small script | Workstream A |
| IgniteThinking-Page-v3\\\_4.html | \*\*The IgniteThinking landing page\*\* (draft v3.4), including a playable sample maze | Workstream A |
| Website-Claims-Audit-2026-10-29-v1\\\_3.md | Why every sentence says what it says. Section 4 = launch blockers, section 7 = how the site deploys | Background for A |
| IgniteThinking-Landing-and-Login-Wiring-2026-11-01.md | The 1 Nov decision and the link map between site and app | A and B |
| IgniteThinking-Front-Door-Dev-Handoff-2026-10-30.md | The app's planned sign-in front door (separate, already assigned to Saeed) | Background for B |
| IgniteThinking-Front-Door-Prototype-2026-10-30.html | Clickable prototype of that front door | Background for B |

The HTML drafts contain review-only elements that **must not ship** (section 4.2). Everything else in them ships.

-----

## 3\. The link map (the whole point of this work)

|  |  |  |
| :-: | :-: | :-: |
| \*\*From\*\* | \*\*Link text\*\* | \*\*Goes to\*\* |
| Site header, every page | \*\*Log in\*\* (outlined pill, right side; visible on phones next to Menu) | https://app.ignitecuriosity.ai/ |
| Site header nav, every page | IgniteThinking · IgniteEd · The Science · About | /ignitethinking/ · /igniteed/ · /science/ · /about/ |
| Home, "What we build", IgniteThinking card | See IgniteThinking → | /ignitethinking/ |
| IgniteThinking page, hero | Request beta access | \\\#beta (same page) |
| IgniteThinking page, beta section | Request beta access (button) | mailto:hello@ignitecuriosity.ai?subject=IgniteThinking%20beta |
| IgniteThinking page, beta section | "Already a Founding Family? \*\*Log in\*\*." | https://app.ignitecuriosity.ai/ |
| IgniteThinking page, beta section | "Have an invite code? \*\*Set up your family\*\*." | https://app.ignitecuriosity.ai/register |
| Site footer, every page | Privacy notice · Contact · Log in | /privacy/ · mailto:hello@ignitecuriosity.ai · https://app.ignitecuriosity.ai/ |
| App sign-in and register pages (Workstream B) | About IgniteThinking | https://www.ignitecuriosity.ai/ignitethinking/ |
| App sign-in page (Workstream B) | Request beta access | https://www.ignitecuriosity.ai/ignitethinking/\\\#beta |

All of these are already in the HTML drafts except the two app rows. Plain \<a href\> for external links: no target="\_blank", no tracking parameters.

-----

## 4\. Workstream A: the website repo

### 4.1 Repo facts (verified 1 Nov 2026)

  - **Repo:** github.com/gilanisaeed/ignitecuriosity.ai (public). Default branch main. Last commit 3cbd02e, 12 Jul 2026.
  - **Stack:** Next.js 16.0.10 (App Router), React 19.2.0, TypeScript, Tailwind CSS 4, shadcn/ui components in components/ui/. Package manager **pnpm** (CI uses pnpm 11, Node 22).
  - **Build:** next.config.mjs has output: 'export', trailingSlash: true, images.unoptimized: true, and **typescript.ignoreBuildErrors: true**. So pnpm build will not catch type errors: run pnpm exec tsc --noEmit yourself.
  - **Deploy:** .github/workflows/deploy.yml builds and publishes out/ to **GitHub Pages on every push to** **main**. public/CNAME is www.ignitecuriosity.ai. (A Vercel project also exists from July; it does not serve the domain. Ignore it.)
  - **Fonts:** app/layout.tsx loads Montserrat, Roboto and Roboto Mono via next/font/google as CSS variables --font-heading, --font-body, --font-mono. The drafts use the same three families by name.
  - **Tokens:** app/globals.css already defines the brand palette (--background \#fbf8f3, --foreground \#2c2a33, --primary \#56457f, --secondary \#c0531f, --muted \#efedf5, --border \#e3dfea, and more). styles/globals.css is an unused leftover; do not import it.
  - **Current routes:** /, /about/, /science/, /problem/, /solution/, /ignitemath/, /igniteed/ (+ program, impact, about, pricing, readiness-review). IgniteEd has its own layout.tsx, nav and footer.
  - **Shared chrome today:** components/site-header.tsx (nav with IgniteMath, a dead "Request a Demo" button) and components/site-footer.tsx (a "Ready to spark curiosity in your classroom?" band, WaitlistForm, IgniteMath link). Used by /, /about/, /science/, /problem/, /solution/, /ignitemath/.
  - **Known problems you are fixing along the way:**

      - components/waitlist-form.tsx shows "You're on the list" but stores nothing. **Remove it from the site.**
      - components/reveal.tsx keeps content at opacity 0 until an IntersectionObserver fires, with no fallback, so sections can stay invisible (the "stuck hero" bug).
      - app/layout.tsx metadata says "Teacher-Directed AI for Mathematical Reasoning" with em dashes, and generator: 'v0.app'.
      - app/layout.tsx renders \<Analytics /\> from @vercel/analytics. On GitHub Pages it cannot work (it requests /\_vercel/insights/script.js, which 404s).

### 4.2 What must NOT ship from the drafts

Remove these when porting. Record each in the PR description (section 6) so Azade can see what is still open.

|  |  |  |
| :-: | :-: | :-: |
| \*\*Element\*\* | \*\*Where\*\* | \*\*What to do\*\* |
| \\\<div class="draft-banner"\\\> | top of both drafts | Do not port |
| \\\<span class="todo"\\\>…\\\</span\\\> chips | 4 on home, 4 on IgniteThinking | Do not port the chip. \*\*Keep the sentence it sits next to.\*\* List each chip's text in the PR |
| Footer \\\<span class="tail lab"\\\>Draft v8.4 · 1 Nov 2026\\\</span\\\> and Draft v3.4 | both footers | Do not port |
| Two screenshot slots (\\\<figure class="shot"\\\> with .shot-slot "awaiting file") | IgniteThinking page, "How a puzzle goes" and "The grown-up view" | Port the markup but \*\*do not render it\*\* until images exist: gate behind a constant SCREENSHOTS\\\_READY = false in the page module. When false, the surrounding layout must still look intentional (check at both widths) |
| HTML comments carrying version history | both | Do not port |

The todo chips are, for the PR list:

  - Home: "new line, confirm" (KLS summit credential line) · "re-check the date at every deploy" (late November) · "blocker: page must exist before launch" (privacy) · "blocker: needs a real page" (footer privacy link).
  - IgniteThinking: "awaiting file" (screenshot 1) · "awaiting file; rule on the 0 to 100 independence bars first" (screenshot 2) · "on readiness; re-check before publishing" (beta date) · "blocker: needs a real page" (footer privacy link).

### 4.3 Implementation rules

  - **Branch:** claude/website-v8\_4-ignitethinking-v3\_4 off main.
  - **First commit:** copy this whole handoff folder into the repo at docs/handoff-2026-11-01/ (it is outside app/, so Next does not build it). Reviewers diff the port against it.
  - **Styling approach:** port each draft's \<style\> block into a **CSS Module** next to its page (app/page.module.css, app/ignitethinking/page.module.css, and a shared components/site-chrome.module.css for header and footer). Keep class names, values and media queries as written. Replace the drafts' font stacks with the next/font variables (var(--font-heading), var(--font-body), var(--font-mono)). Remove the Google Fonts \<link\> tags; next/font already self-hosts them. Do not translate the drafts into Tailwind utilities.
  - **Tokens:** each draft declares its tokens on :root (--purple-900 … --purple-300, --orange, --orange-strong, --orange-hover, --orange-50, --coral, --slate, --bg, --surface, --tint, --ink, --ink-muted, --line, and others). Move each page's token block to its module scoped under the page's root class (CSS Modules cannot target :root), unchanged. **Do not introduce any colour that is not already in one of the two drafts.** Do not edit app/globals.css token values (IgniteEd depends on them).
  - **Tailwind preflight:** the app's Tailwind base resets margins, list styles and so on. The drafts assume browser defaults in places. Check headings, lists and \<details\> against the drafts and restore what the reset removed inside the modules.
  - **Scripts:** each draft has exactly one \<script\>. Port each into one small client component ("use client"), keeping the logic. Nothing on either page may be hidden at load and wait for JavaScript: if a script fails, all content must still show.
  - **Images:** the drafts use inline SVG only. Keep the SVGs inline as JSX (convert attributes: stroke-width → strokeWidth, class → className, and so on).
  - **Accessibility:** keep every aria-\*, role, alt, heading level and the \<details\> mobile menu exactly. Keep prefers-reduced-motion rules. Buttons and links stay at least 44 px tall.
  - **Allowed fonts:** Montserrat, Roboto, Roboto Mono via next/font/google (already configured). Nothing else.

### 4.4 Tasks, in order

**A1. Shared header and footer.** Replace components/site-header.tsx and components/site-footer.tsx with the drafts' \<header class="topbar"\> and \<footer\>. Make them one component each with props:

  - current?: "ignitethinking" | "igniteed" | "science" | "about" (sets aria-current="page" on that nav link; on home the brandmark carries aria-current).
  - tail: string (the small mono label right of the nav: home A research-driven product lab, IgniteThinking Grades 4 and 5 · at home; for /science/ and /about/ use A research-driven product lab).
  - Header contents exactly as the drafts: brandmark "Ignite Curiosity Lab" → /; \<details class="menu"\> with the hamburger SVG and "Menu"; nav IgniteThinking, IgniteEd, The Science, About; the tail label; the **Log in** pill → https://app.ignitecuriosity.ai/.
  - Footer contents exactly as the drafts: tagline "Learning to think with AI, not just use it." · "© 2026 Ignite Curiosity Lab" · Privacy notice → /privacy/ · Contact → mailto:hello@ignitecuriosity.ai · Log in → app.
  - Use the new header and footer on /, /ignitethinking/, /science/, /about/, /problem/, /solution/, /privacy/. **Do not touch IgniteEd's own nav and footer.**
  - Delete components/waitlist-form.tsx and every use of it. Delete the "Request a Demo" buttons.

**A2. Home page** **/** **from** **ICL-Home-Philosophy-v8\_4.html****.** Rebuild app/page.tsx from the draft's \<main\>, in order: hero (kicker, H1 "Learning to think with AI, not just use it.", the "Our mission" sentence, two buttons, the thinking-trace figure, credentials strip) · 1 the frame · 2 the question · 3 the evidence (three findings with source lines) · 4 "What we build" (IgniteThinking, IgniteEd, IgniteBuild cards; IgniteThinking card links /ignitethinking/, IgniteBuild has no link) · 5 commitments · 6 closing dark band. Port the draft's one script (an IntersectionObserver that adds .play to .s-fig to start a CSS animation) as a client component; if IntersectionObserver is missing, add .play immediately. Delete the old home components once nothing imports them: hero-section.tsx, philosophy-section.tsx, product-spotlight.tsx, lab-promise-section.tsx (check with grep first; about-section.tsx is used by /about/, keep it).

**A3. IgniteThinking page** **/ignitethinking/** **from** **IgniteThinking-Page-v3\_4.html****.** New app/ignitethinking/page.tsx. Sections in order: hero (kicker, H1 "Your child solves it. / The guide is never given the answer.", sub, lede, two buttons) with the **sample maze** demo (id="try") · Why reasoning (with "Why grades 4 and 5") · How a puzzle goes (five steps plus Reflect, "What a hint looks like", screenshot slot 1 gated) · Many puzzles (three puzzle cards: The Broken Recipe, Fewest Colours, The Copycat Snowflake; keep the UK spelling "Colours", it matches the app) · The grown-up view (screenshot slot 2 gated) · The honest band ("The learner needs us less.") · Beta (id="beta", button, the new Log in / invite line, "What a family gets", the bridge paragraph) · mobile sticky "Request beta access" bar (shown under 760 px only, as in the draft).

  - **The sample maze** (components/ignitethinking/sample-maze.tsx, client component): port the draft's script logic as written: the 3 by 3 START grid, HOUSE at row 2 col 2, STEP/GLYPH/WORD/TURN tables, the walk animation, the guide object with its three written hints and its closing line, the rule that a hint asked for before the first walk is held back, Start over, and the reduced-motion path. It is a sample written only for the website and is **not** one of the app's puzzles. Do not import, fetch or copy anything from the app repo into it.
  - Page metadata: title IgniteThinking | Ignite Curiosity Lab; description exactly as the draft's \<meta name="description"\>.

**A4. Privacy route** **/privacy/****.** Create app/privacy/page.tsx with the new header and footer and a single section: H1 "Privacy notice" and the sentence "Our privacy notice is being finalized and will be published here before the IgniteThinking beta opens." **Do not write, paste or adapt any legal text.** The real notice comes from counsel. This is a launch blocker (section 7), not something to solve in code.

**A5. Remove IgniteMath from the site.** Delete app/ignitemath/ and components/ignitemath/. Remove every remaining link to /ignitemath (grep -rn ignitemath app components; today: site header, site footer, hero-section.tsx, and about-section.tsx line \~168). In about-section.tsx remove only the link or button element that points at /ignitemath; do not edit other About copy (it is out of scope, see section 7). Static export cannot redirect; a 404 at /ignitemath/ is acceptable.

**A6. Site metadata in** **app/layout.tsx****.** Default title Ignite Curiosity Lab | Learning to think with AI, not just use it; template %s | Ignite Curiosity Lab; description, Open Graph and Twitter description = the home draft's \<meta name="description"\> text; remove "IgniteMath" and "teacher-directed AI" from keywords; remove generator. Keep metadataBase, icons and viewport. No em dashes anywhere in metadata.

**A7. Remove** **@vercel/analytics****.** Delete \<Analytics /\> and its import from app/layout.tsx and the dependency from package.json (update pnpm-lock.yaml with pnpm install). Reason for the PR: it cannot load on GitHub Pages, and there is no approved analytics decision for a page parents of young children will visit. Azade may veto.

**A8. Fix** **components/reveal.tsx** if anything still uses it after A2 (/science/ and /about/ may). Make content visible when IntersectionObserver is unavailable, and add a fallback timer (about 1500 ms after mount) that reveals regardless. Keep the reduced-motion path.

**A9. README.** Update README.md: the site structure (home, IgniteThinking, IgniteEd, Science, About, Privacy; IgniteMath removed), the deploy note, and a line pointing to docs/handoff-2026-11-01/.

### 4.5 Verify before opening the PR

1.  pnpm install, pnpm exec tsc --noEmit (zero errors in files you touched), pnpm build (must succeed and produce out/ignitethinking/index.html, out/privacy/index.html; out/ignitemath/ must not exist).
2.  Serve out/ locally (pnpm dlx serve out) and open /, /ignitethinking/, /privacy/, /science/, /about/, /igniteed/.
3.  **Visual parity:** with Playwright (or a browser), screenshot / and /ignitethinking/ at 1366×900 and 375×812, full page, and the two drafts in docs/handoff-2026-11-01/source/ at the same sizes. Compare side by side. Spacing, type sizes, colours and order should match; the only intended differences are section 4.2's removals.
4.  **No horizontal scroll** at 375 px on any of those routes (document.documentElement.scrollWidth \<= 375).
5.  **Links:** every row of section 3's site-side table resolves as stated. The mobile Menu opens and shows the four nav links. The sticky beta bar appears only under 760 px.
6.  **Maze:** play it: Walk the path; ask for a hint before walking (held back); walk, then ask for three hints in turn, then the closing line; change one arrow and reach the House; Start over resets. Repeat with reduced motion emulated.
7.  **Copy scan over** **out/\*\*/\*.html** (rendered text, not source):

      - zero em dash characters (U+2014);
      - none of: IgniteMath, Teacher-Directed, Request a Demo, on the list, never has the answer, property of how, cannot give, cannot hand, reviewed by, scoreboard, this fall, $, per month, subscription, Draft v, awaiting file, blocker:;
      - the guide is never given the answer (case-insensitive) appears on both / and /ignitethinking/.
8.  **Copy diff:** extract the visible text of each built page and of its draft (strip tags), normalise whitespace, and diff. The only differences allowed are the removals in section 4.2. Paste the diff summary into the PR.
9.  No requests to any host other than the site itself when loading / and /ignitethinking/ (check the network panel or Playwright page.on('request')).

### 4.6 Done means

A **draft** PR titled Home v8.4 + IgniteThinking landing page v3.4, Log in to app, remove IgniteMath against main, with the PR body from section 6, screenshots attached, all checks in 4.5 passed. Not merged.

-----

## 5\. Workstream B: the app repo (small)

### 5.1 Repo facts (verified 1 Nov 2026)

  - **Repo:** github.com/gilanisaeed/ignitethinking. Last commit 4a9bc34, 12 Oct 2026.
  - **Read** **CLAUDE.md****,** **AGENTS.md** **and** **DESIGN.md** **before touching anything.** They are binding. The rules that matter here: pnpm qa must be green; no em dashes in rendered copy (gate HS1); no third-party scripts or analytics; adult-facing screens follow standard WCAG AA; update CHANGELOG.md and TODO.md.
  - Relevant routes: app/family/login/page.tsx (H1 "Family sign-in", renders components/account/login-form.tsx), app/register/page.tsx (H1 "Create your family account", renders components/account/register-form.tsx). components/a11y.test.tsx covers both.
  - data/authoring.config.json → featureFlags.familyAccounts is false. **Do not change it.**
  - The 30 Oct front door (sign-in as the first page at /) is assigned to Saeed and was not in main at 4a9bc34. Before you start, run git fetch origin and gh pr list --state all --search "front door" (or look for branches mentioning FA-4 / front door).

      - If a front-door PR or branch exists and is unmerged: **stop and ask** whether to build on it.
      - If it has merged: put the links below on the new front door, following source/IgniteThinking-Front-Door-Dev-Handoff-2026-10-30.md (its "New here?" block gains the second row).
      - Otherwise: put them on /family/login and /register as below.

### 5.2 Changes

On /family/login (inside or directly under the sign-in card, after the existing reset link):

New here?

Have an invite code?  \[Set up your family\]            -\> /register

No invite yet? Founding Families open in late November.  \[Request beta access\]  -\> https://www.ignitecuriosity.ai/ignitethinking/\#beta

\[About IgniteThinking\]                                -\> https://www.ignitecuriosity.ai/ignitethinking/

On /register, under the intro paragraph:

No invite code yet? \[Request beta access\]  -\> https://www.ignitecuriosity.ai/ignitethinking/\#beta

\[About IgniteThinking\]                     -\> https://www.ignitecuriosity.ai/ignitethinking/

  - Plain \<a href\>, same tab, no tracking parameters, underlined like the existing reset link. Targets at least 44 px tall.
  - Use the app's existing tokens and type. Do not import website CSS.
  - Wherever these pages show a contact or help email, it is hello@ignitecuriosity.ai.
  - Keep components/a11y.test.tsx green; if you add a new component, cover it there.
  - CHANGELOG.md: one entry. TODO.md: note that the links go live with the website page.

### 5.3 Verify and done

pnpm qa green. Screenshots of both pages at 1280 and 375 px in the PR. A **draft** PR titled Link sign-in and register to the IgniteThinking landing page. Not merged. In the PR body, state: "Merge only after www.ignitecuriosity.ai/ignitethinking/ is live, or these links 404."

-----

## 6\. PR description template (Workstream A)

\#\# What

Ports home v8.4 and the IgniteThinking landing page v3.4 (Azade's 1 Nov 2026 ruling):

ignitecuriosity.ai/ignitethinking is the landing page, app.ignitecuriosity.ai is the login.

New shared header/footer with Log in. IgniteMath removed. Waitlist stub and Request a Demo removed.

Vercel Analytics removed (cannot run on GitHub Pages; no analytics ruling). Reveal fallback fixed.

Design source: docs/handoff-2026-11-01/source/

\#\# Not shipped from the drafts (review chips, still open)

\- Home: KLS summit credential line "new line, confirm"

\- Home + IgniteThinking: late November beta date "re-check before publishing"

\- IgniteThinking: screenshot 1 and 2 hidden (SCREENSHOTS\_READY = false); screenshot 2 needs a ruling on the 0 to 100 independence bars

\- Privacy: /privacy/ is a placeholder; real notice needed from counsel

\#\# Launch blockers (do not merge until all are ticked)

\- \[ \] Privacy notice text approved and in /privacy/

\- \[ \] IGNITETHINKING trademark clearance

\- \[ \] hello@ignitecuriosity.ai is a live inbox

\- \[ \] Beta date confirmed

\- \[ \] Screenshots supplied, or launch without them confirmed

\- \[ \] Azade has reviewed the preview

\#\# Checks

tsc, build, visual parity screenshots (attached), 375 px no-scroll, links, maze, copy scan, copy diff vs drafts, no third-party requests.

\#\# Out of scope

/science/ and /about/ body copy (July copy, separate review). IgniteEd section untouched.

-----

## 7\. Launch blockers and owners (not the agent's to solve)

|  |  |
| :-: | :-: |
| \*\*Blocker\*\* | \*\*Owner\*\* |
| Privacy notice text (counsel review of Privacy Notice v0.2) | Azade |
| IGNITETHINKING trademark clearance | Azade |
| hello@ignitecuriosity.ai live inbox | Azade / Saeed |
| Two product screenshots, and the ruling on the 0 to 100 independence bars | Azade, then Saeed |
| Beta date ("late November, on readiness") | Azade |
| /science/ and /about/ still carry July copy | Separate audit |
| The app's front door (30 Oct handoff) | Saeed |

**Launch order:** website PR merges first (page live) → app PR merges the same week. If home went live without /ignitethinking/, its card would 404, which is why both pages ship in one PR.

-----

## 8\. Stop and ask Azade (do not guess) when

  - any sentence in a draft seems wrong, stale or risky (do not fix it; list it in the PR);
  - the drafts and this file disagree;
  - matching the draft would require a new colour, font, library or external request;
  - a draft element depends on something that does not exist in the repo;
  - you do not have push access (then commit locally, produce git format-patch output, and stop);
  - in the app repo: a front-door branch exists, or any pnpm qa gate fails for a reason outside your change;
  - anything would need a merge to main to test (it would deploy).

-----

## 9\. Quick reference

  - Live site: <https://www.ignitecuriosity.ai> · App: <https://app.ignitecuriosity.ai>
  - Website repo: <https://github.com/gilanisaeed/ignitecuriosity.ai> (GitHub Pages, deploys on push to main)
  - App repo: <https://github.com/gilanisaeed/ignitethinking>
  - Contact address used on the site: <hello@ignitecuriosity.ai>
  - Source of these files on Azade's Mac: \~/Claude/Projects/ICL-Website/handoff-2026-11-01-website-and-login/

# Website claims audit: home page and IgniteThinking page

29 October 2026. For Azade Sanjari. INTERNAL. Proposed copy only; rulings go in `DECISIONS.md` as usual.

**Reviewed:** the Drive copies of `ICL-Home-Philosophy-v7.html` (v7.3, 22 Sep) and `IgniteThinking-Page-v2.html` (v2.3, 22 Sep), plus every v7.9 and v7.6 line quoted in the 20 Oct review. The Mac versions (home v7.9 of 24 Sep, product page v7.6 of 26 Sep) were not reachable from this session, so diff them against the new files before filing.

**Checked against:** Company Core v1.6 (29 Oct); the IgniteThinking app repo (`gilanisaeed/ignitethinking`, HEAD 12 Oct: `data/puzzles.json`, `data/authoring.config.json`, `AGENTS.md`, `DESIGN.md`, the review and workspace components); the IgniteThinking Build Review of 26 Oct (the live app); Evidence Base v1.1 (24 Sep); US Business Strategy V2.3; the website repo (`gilanisaeed/ignitecuriosity.ai`); and your own stated facts on IgniteMath, the KLS summit, Me2We and NVIDIA Inception.

**Output:** `ICL-Home-Philosophy-v8_3.html` (draft v8.3) and `IgniteThinking-Page-v3_3.html` (draft v3.3), new files. Nothing canonical was edited.

**Rulings since the first pass (Azade, 29 Oct):**
- Home row 4 (hero kicker) is kept as it was in v7.9.
- Home row 21: IgniteMath was first kept as in v7.9, then removed from the site: no card, no nav link, on either page.
- IgniteThinking row 25: no price on the website.
- "Learning to think with AI, not just use it." is the home headline, the page title and the site-wide footer tagline, with the mission directly under the headline, labelled "Our mission". This departs from the Core's website row, so the matching Core change is proposed in section 8. Use the same line on the LinkedIn and Instagram profiles.
- IgniteBuild joins "What we build" as the third card, next to IgniteThinking and IgniteEd: "Coming soon", its tagline "Where future builders ship.", "For high schools. Stay tuned." No link until it has a page.

---

## 1. Verdict

Most of both pages still holds. What broke falls into five groups.

1. **Facts that moved.** "This fall" (now late November, on readiness), the bank (now computational thinking puzzles and math puzzles), and the evidence gate (ruled today to cover IgniteThinking only, which made the IgniteEd card wrong).
2. **Claims the live app does not support today.** The v7.6 line that "the guide's AI personalizes help approved by our learning scientist" (the shipped app contains no generative AI, and the learning scientist's final wording is not loaded); "reviewed by people" (same reason); "the visual tools never solve it for you" (four puzzle pictures still compute or flag the answer); "you are not handed a scoreboard" (the grown-up review shows a 0 to 100 independence bar per puzzle); "we report what each release's checks covered" (no such report exists).
3. **Held claims under the Core.** "Never has the answer" and "a property of how it is built, not a rule". Replaced with the public claim: the guide is never given the answer.
4. **Citation wording.** Bastani (about 840 in the analysis, "largely removed the harm") and Darvishi ("several measures declined", "never gave answers") now match the Core and the Evidence Base.
5. **The demo.** The Meeting Point is half of a research pair and one of the two free-sampler puzzles, and the page published its answer logic. Replaced with a sample maze written only for the website.

The finding that changes the plan most is in section 7: the live site does not deploy from Vercel. It deploys from a GitHub repo, so updating it is a pull request.

---

## 2. Home page, claim by claim (v7.3/v7.9 to v8.0)

| # | Claim on the page | Verdict | Source | v8.0 |
|---|---|---|---|---|
| 1 | Title and meta: "Learning to think with AI, not just use it" / "a research-driven product lab ... reasoning, curiosity, and human judgment" | **Title kept (your ruling, 29 Oct); meta replaced** | Core website row (change proposed in section 8) | Title: "Ignite Curiosity Lab \| Learning to think with AI, not just use it". Meta description: the extended mission sentence |
| 2 | H1 "Learning to think with AI, not just use it." | **Kept (your ruling, 29 Oct)** | Core website row (change proposed in section 8) | H1 stays. Directly under it, the extended mission sentence, labelled "Our mission". The same line closes every page as the footer tagline |
| 3 | Lede "research-driven product lab ... strengthen reasoning, curiosity, and human judgment" | Replace | Core | "...we design learning experiences in which the student does the reasoning: forms the idea, tests it, revises it and explains it." The one question stays |
| 4 | Kicker "A research-driven product lab · Shaped by Stanford LEAD" | **Kept as v7.9 (your ruling, 29 Oct)** | The Core website row asks for the hero to be labelled as the mission | Unchanged from v7.9. The "Our mission" label now sits on the mission sentence under the headline, so "build" reads as purpose, not results |
| 5 | Thinking trace ("AI: a question", "AI: a scaffold") | Holds | It illustrates the design, not a product feature | Unchanged |
| 6 | "NVIDIA Inception member" | Holds | Your note, Oct 2026 | Unchanged |
| 7 | "Stanford LEAD · LISA Cohort 11 · Me2We 2026 Top 10" | Holds | Your profile; Me2We Top 10 at Stanford GSB, used in your Sep applications | Review chip removed |
| 8 | (new) "Workshop and poster, Khan Lab School AI in Education Summit 2026" | True (24 Oct) | KLS summit | Added with a confirm chip |
| 9 | "Critical constraints are enforced by the system, not requested of the model" | Holds | App invariant 1: the solution never reaches the device or any model | Unchanged (20 Oct lean: keep) |
| 10 | "The model operates inside explicit system boundaries" | Fix | IgniteThinking ships no model at all (`AGENTS.md`) | "Any model we use works inside explicit system boundaries, and it is never given the answer." |
| 11 | "...checked directly, and we report what each release's checks covered" | False | No release report exists | "...checked directly: we test for answer leakage instead of assuming it away." (Core v1.5 public level; leakage audits run in CI on every commit) |
| 12 | "Every finding on this page resolves in our evidence base" | Holds | Evidence Base v1.1 lists Kapur 2008 and 2016, Sinha and Kapur 2021, Bastani 2025, Darvishi 2024 | Unchanged |
| 13 | Ladder: "Our first pilots open this fall ... a comparison group we have not yet commissioned" | Stale | Core v1.6 current facts | "Our first pilot opens in late November 2026, and a supervised research pilot follows in early 2027 ... a controlled comparison we have not yet run." Chip: re-check the date at every deploy |
| 14 | Finding 01 (Kapur; Sinha and Kapur) | Holds | Evidence Base §1 and caveats | Unchanged |
| 15 | Finding 02: "about 840 students in the analysis"; "Prompt-level guardrails largely removed the harm" | Fix | Core: about 1,000; "no significant reduction"; never "removed the harm" | "About 1,000 high-school math students in Turkey, randomized ... A guided version that gave hints instead of answers showed no significant reduction." |
| 16 | Finding 02 design decision: "...build the restraint into the system rather than rely only on instructions" | Fix | Core public claim | "We measure what a learner can do unaided, and we never give the AI the answer, so the restraint does not rest on instructions to the model." |
| 17 | Finding 03: "several measures of quality declined"; "The prompts never gave answers" | Fix | Evidence Base §7: comments were flagged as low quality significantly more often; the prompts never wrote the feedback | Reworded to match |
| 18 | Finding 03 design decision: "We design help to fade" | Soften | Fading is specified (`DESIGN.md` §4), not shipped as a setting; measuring help over time is shipped | "We measure whether a learner needs less help over time, and still solves without it." |
| 19 | Success band "The learner needs us less" | Holds | | Unchanged |
| 20 | IgniteThinking card: "Beta opens this fall"; "ages 9 to 11 ... built so the answer is not something it has" | Fix | Core: late November; "designed to build"; both kinds of puzzle; "never given" | "Founding Families beta · late November 2026"; grades 4 and 5 (ages 9 to 11), designed to build independent reasoning, both kinds of puzzle, "the guide is never given the answer". Link is "Request beta access", because the product page is gated |
| 21 | IgniteMath: "Planned for January 2027 ... The teacher will set the constraints" | **Removed (your ruling, 29 Oct)** | Core v1.6 lists IgniteMath's place on the expansion path as open; the 13 Aug note postponed the product and the decision to January 2027 | Card and nav item removed on both pages |
| 22 | IgniteEd: "to be built to the same evidence rules as our products" | Fix | You ruled today that the evidence gate covers IgniteThinking only | "held to the same rule as everything we make: we claim only what our data supports" |
| 23 | IgniteEd card in teal | Fix | Teal is IgniteAstro's accent since 24 Sep | Purple-400 |
| 24 | "In the classroom, teachers direct the system" | Soften | No classroom product is live | "Teachers direct the tools they use in class" |
| 25 | "Explainable by design" | Holds | In-tool help is logged and shown in the grown-up review | Unchanged |
| 26 | Privacy: "minimize ... retention boundaries ... never sell or rent ... age-appropriate" | Holds in the app (retention sweep, no third-party SDKs, id-only telemetry) | | **Blocker:** `/privacy/` exists neither on the site nor in the app |
| 27 | Closing band | Holds | | Unchanged |

---

## 3. IgniteThinking page, claim by claim (v2.3/v7.6 to v3.0)

| # | Claim on the page | Verdict | Source | v3.0 |
|---|---|---|---|---|
| 1 | Banner: gated on trademark clearance and the provisional filing receipt | Half cleared | Provisional filed 22 Oct (USPTO 64/182,050); trademark clearance still open on the 20 Oct 90-Day Plan | Banner now names trademark, privacy notice and screenshots |
| 2 | Kicker and chips: "Ages 9 to 11 · at home · beta opens this fall" | Fix | Core website row; dates go stale | "Grades 4 and 5 · ages 9 to 11"; "Founding Families beta"; the date appears once, in the beta section |
| 3 | H1 "The answer is never the guide's to give" (v2.3) / "The guide doesn't have the answer" (v7.6) | Fix | Core public claim | "Your child solves it. The guide is never given the answer." |
| 4 | "A thinking app for ages 9 to 11." | Fix | Core website row | "A thinking app for grades 4 and 5, designed to build independent reasoning." |
| 5 | (v7.6) "Its AI has one important job: to take help approved by our learning scientist and personalize it to your child's work" | **False today** | The shipped app has no generative AI and no runtime model (`AGENTS.md`); `lsRatified` is false; the build review says Azin's final wording is not loaded | Removed. "Help comes in small steps, written in advance, and only after a real try. There is no chat box." |
| 6 | "asked for more than one approach before they commit" | Holds as "asked" | The Ideate step prompts for it; a second approach is flagged to the grown-up, not required | "put down more than one idea" |
| 7 | "That is a property of how the app is built, not a rule it has been asked to follow." | Held claim | Core: approved only once the output side is verified | Removed |
| 8 | Demo: The Meeting Point | Must change | `puzzles.json`: paired with a math puzzle (research pair); `entitlement.samplerPuzzleIds` lists it as one of two free puzzles; the page published its answer logic | Replaced with a 3 by 3 arrow maze written for the website, not in the bank. Its single fix was confirmed unique by exhaustive search; the check follows the arrows and stores no answer; three written hints (nudge, strategy, scaffold) unlock only after the first walk |
| 9 | Demo "Why?": "The answer is not something it has." | Fix | Core public claim | "The guide is never given it." |
| 10 | "every one of them written and reviewed before a child sees it" | "Reviewed" not yet supportable | UXR-30 not loaded; `lsRatified` false | "In the app, every hint is written in advance, not generated on the spot." Add "and reviewed by our learning scientist" once UXR-30 ships |
| 11 | "No chat box, here or in the app" | Holds | No chat input anywhere in the app | Unchanged |
| 12 | "Why reasoning?" | Holds | | Added "Why grades 4 and 5" from the Core (NCTM 2000, NRC 2001; both in Evidence Base §9), ending "Reasoning does not begin here. It is where we start." |
| 13 | Loop: Understand, Define, Ideate, Prototype, Test, plus Reflect | Holds | App stepper; Core design thinking row | "Phase contract pending" chip removed |
| 14 | Prototype: "The visual tools help you think; they never solve it for you." | **False today** | Build review gap 4: River Crossing counts crossings, Class Party's meter, Pancake's clock and Who Rooms' wish flags still compute or flag the answer; the 24-puzzle leakage audit is owed | "Build the attempt, with a picture or a tool to think with." Restore the line after UXR-2 wave 2 and the audit |
| 15 | Reflect: reachable without solving; a stuck child is never handed the answer | Holds | Un-gated Reflect path in `reflection.tsx`; answer reveal (CR-19) cancelled | Unchanged |
| 16 | Hints: "a scaffold that walks the method and stops before the last move. The last step is always the child's." | Partly | Three tiers and attempt gating hold (`helpTiers`, `helpTierRule`, Core public level). "Stops before the last move" is tier content, internal under Core v1.5; "always the child's" is an output-side claim that the picture leaks contradict | "first a nudge, then a strategy, then a step-by-step scaffold. Every step is written in advance." |
| 17 | Cards: Fix the Arrow Maze, Fewest Colours, Crack the Passcode | Fix | Passcode is half of a research pair; the arrow maze now overlaps the demo | The Broken Recipe (Warm-Up), Fewest Colours (Explorer), The Copycat Snowflake (Challenger), all unpaired; titles, blurbs and concepts from `puzzles.json` |
| 18 | "Logic, patterns, planning, constraints and optimization ... No coding required" | Holds | | Adds the math puzzles: fractions, common multiples, proportional reasoning and volume (puzzles 19 to 24) |
| 19 | "You are not handed a scoreboard." | Contradicted | `grown-up-review.tsx` renders "Independence over time", a 0 to 100 bar per solved puzzle | "You get your child's thinking, in their own words, next to a plain view of how much help they used" |
| 20 | Ticks: journal, solved outright or with help, reflections, read-only | Hold | | Added "whether your child is needing less help over time, and whether a later attempt was completed without opening any help" (independence trend; CR-22 re-solve line) |
| 21 | "No points. No streaks. No leaderboards." | Holds | | Unchanged. Note: the app shows a per-puzzle badge after Reflect, which `DESIGN.md` §2 bans; that is an app fix, not a page fix |
| 22 | Honest band: "every word of guidance ... written and reviewed by people" | "Reviewed" pending UXR-30 | | "written in advance by our team"; added the Core promise line: designed to build, reported once measured |
| 23 | (v7.6) "The guide's AI never invents help of its own." | Removed | No AI in the first release | |
| 24 | Beta: "opens this fall"; "the whole puzzle library" | Date stale; library holds | Core v1.6: late November, on readiness. All three bands unlock "open"; the paywall is design-only | "The Founding Families beta opens in late November" with a re-check chip |
| 25 | "No price is shown here yet." | **Ruled 29 Oct: no price on the website** | The Founding Families price is decided (D53; Strategy Decision 8) but stays off the site | No price line and no price note |
| 26 | What a family gets | Mostly holds | | "every hint written and reviewed by people" becomes "written in advance". The v7.6 line "Its AI ... comes in a later update" is not carried: parent pages describe Horizon 1 only, with no roadmap |
| 27 | Bridge | Holds | Core language rule | Now opens "IgniteThinking is where Ignite Curiosity Lab starts." |

---

## 4. Blockers before either page goes live

1. **Privacy notice.** Both pages link `/privacy/`; nothing exists on the site or in the app, and the beta button collects family emails. The COPPA review (#48) is still open.
2. **Trademark clearance** for IgniteThinking (the product page and the nav link).
3. **The two screenshots**, and before screenshot 2, a product ruling on the 0 to 100 independence bars.
4. **Pages the new copy links to but this audit did not cover:** `/science/` and `/about/` still carry July copy. The new pages no longer link to `/ignitemath/` (row 21), but the page stays live and reachable from search, and it carries the held claim ("by design it can't hand the answer over") and mechanism language ("jailbreak resistance built into the architecture"). Take it down when the new home goes live.
5. **`hello@ignitecuriosity.ai`** must be a live inbox (every call to action uses it).

## 5. Rulings needed (proposed, not ruled)

Ruled 29 Oct: the hero kicker stays as in v7.9; IgniteMath comes off the site; no price on the website; "Learning to think with AI, not just use it." is the headline, title and tagline (approve the Core wording in section 8); IgniteBuild joins "What we build" as a coming-soon card.

1. Add the KLS AIED Summit line to the credentials strip.
2. Drop "its AI comes in a later update" from parent copy (drafted as dropped).
3. Whether IgniteAstro joins "What we build". Not added.
4. Ask Azin to read the sample maze's three hints and its result lines, since children will read them.

## 6. App fixes these pages exposed (not website copy)

- UK spellings in puzzle names and text ("Fewest Colours", "flavours"); the site uses US spelling, so the card title follows the app until the app changes.
- "Mastery badge" on the solved screen (UXR-19) against `DESIGN.md` §2.
- The internal pedagogy config (thresholds) ships in the client bundle (build review), against the Core v1.5 rule that thresholds stay internal.

## 7. How the site actually deploys

- `www.ignitecuriosity.ai` is served by **GitHub Pages from `gilanisaeed/ignitecuriosity.ai`**: a Next.js static export, `public/CNAME` set to the domain, and `.github/workflows/deploy.yml` deploying on every push to `main`. Last commit 12 Jul 2026. The Vercel project `v0-ignite-curiosity-lab-website` (last deploy 9 Jul) is not what serves the domain, so the September note that "the code exists only inside the v0 chat" is out of date.
- Updating the site is a pull request to that repo. Port v8.0 into `app/page.tsx` and its components (`hero-section.tsx`, `lab-promise-section.tsx`, `site-footer.tsx`); add `app/ignitethinking/page.tsx` once cleared; add `app/privacy/page.tsx`; remove `app/ignitemath/` and its nav link. Merging deploys.
- Fix the stuck-hero bug in the same pull request. `components/reveal.tsx` holds content at opacity 0 until an IntersectionObserver fires, with no fallback.

## 8. Proposed Company Core change (for your approval; not made)

The website row of "How each document uses this" in Company Core v1.6, "Opens with" column:

- **Now:** Homepage hero = the mission sentence, labeled as the mission ("build" states purpose, not results); subhead = the extended sentence.
- **Proposed:** Homepage headline = the brand line "Learning to think with AI, not just use it."; directly under it, the extended mission sentence, labeled as the mission ("build" states purpose, not results). The brand line is also the site's page title and tagline.

Why: the mission stays in the hero and stays labelled, so nothing the row protects is lost; the headline gets the line people remember. Edit it into Core v1.7 with a change note, as usual; the "IgniteThinking appears as" and "Keep out" columns are unchanged.

## How this was checked

Every claim was traced to the Core, the app source, the build review, the Evidence Base or a stated fact. Both pages were rendered in Chromium at 1366 and 375 px widths. Neither scrolls sideways and neither throws a script error; only the font request fails, in the sandbox. The maze was played end to end. A hint asked for before the first walk is held back, a second changed arrow resets the first, and the fix reaches the House in four steps. Text scans found no em dashes, no banned phrases and no held or stale claims. Every colour is a design-system token, except the ruled coral card accent on home and the app's own tokens inside the product depictions (the demo frame and the puzzle cards). New text-on-background pairs were computed at 4.5:1 or better.

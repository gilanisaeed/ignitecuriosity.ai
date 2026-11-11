# Home draft v8.20 and IgniteThinking draft v3.34 (10 Nov 2026)

`source/ICL-Home-Philosophy-v8_20.html` is the visual and copy source of truth
for `/`, superseding v8.17 (kept alongside for the diff) and
`../handoff-2026-11-01/source/ICL-Home-Philosophy-v8_4.html`. v8.18 adds the
Instagram and LinkedIn footer links (shown site-wide, since the footer is
shared); v8.19 and v8.20 bring Curiosity Teal to the science section.
`source/IgniteThinking-Page-v3_34.html` is the source for `/ignitethinking/`,
superseding `../handoff-2026-11-01/source/IgniteThinking-Page-v3_4.html`. Its
three screenshots are embedded in the draft; the site serves them from
`public/ignitethinking/`. Its privacy section is hidden in the draft (v3.21) and
stays hidden on the site behind `PRIVACY_SECTION_READY` in the page module.
The rules in `../handoff-2026-11-01/HANDOFF.md` still apply: copy is ported
verbatim, and the review-only elements (draft banner, todo chips, the draft
footer tail, version-history comments) do not ship.

Todo chips left in home v8.20 (not shipped, still open):

- "re-check the date at every deploy" (late November beta date, claims ladder)
- "blocker: page must exist before launch" (privacy link in the commitments strip)
- "blocker: needs a real page" (footer privacy link)

Todo chips left in IgniteThinking v3.34 (not shipped, still open):

- Over time row: "publish only once TC-8 Growing view ships"
- Grown-up review screenshot: "test profile; retake once the review's interpretive wording is replaced (UXR-16) and the independence-bar ruling lands"
- Ideate screenshot: "screenshot of 1 Nov; retake once the app's story text drops its em dash"
- Thinking map preview: "replace with a capture from the app once the thinking map ships (TM tickets) and the parent gate is on"
- AI vision lede: "from the product poster v7 (10 Nov); re-check each card before publishing"
- Speak instead of typing: "as deployed this is Safari only (workstreams list A13, 2 Nov): no button on Chromebooks or in Chrome. Name the devices or keep as is"
- Built for the keyboard: "2 Nov audit WG-5: the sign-in PIN pad does not take keyboard input yet; fix before publishing"
- WCAG line: "read-aloud on by default ships with AX-4 (ruled 3 Nov); read-aloud coverage and the dictation devices to verify in the release; the Privacy Notice must say on-device too; contrast fixes WG-3, WG-4, WG-6, WG-13 (2 Nov audit) to ship before claiming AA"
- Beta heading: "on readiness; re-check before publishing"
- Beta form note: "form endpoint pending"
- Footer privacy link: "blocker: needs a real page"
- (hidden privacy section: three more chips, not shown while the section is hidden)

v8.17 also changes the site chrome: a deep purple header with an orange Log
in, a deep purple footer, and The Science out of the main menu. On Azade's
ruling (10 Nov 2026) these apply site-wide, on every page outside IgniteEd.
The draft has no current-page style for the dark menu, so the current link is
white with an orange underline. The orange announcement bar shows on `/` (linking to
`/ignitethinking/`) and on `/ignitethinking/` (linking to `#beta`), through
`SiteHeader`'s `announce` prop.

This folder is outside `app/`, so Next.js does not build or ship it.

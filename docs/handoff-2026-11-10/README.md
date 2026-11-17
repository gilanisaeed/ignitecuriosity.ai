# Home draft v8.28, IgniteThinking draft v3.48 and About draft v1.6 (10 to 17 Nov 2026)

`source/ICL-Home-Philosophy-v8_28.html` (16 Nov 2026) is the visual and copy
source of truth for `/`, superseding v8.17, v8.20, v8.21 and v8.22 (kept
alongside for the diff) and
`../handoff-2026-11-01/source/ICL-Home-Philosophy-v8_4.html`. v8.18 adds the
Instagram and LinkedIn footer links (shown site-wide, since the footer is
shared); v8.19 and v8.20 bring Curiosity Teal to the science section; v8.21
(11 Nov) splits the closing orange band into two columns, with the three doors
as white cards on the right; v8.22 gives those cards the site's card pattern
(Montserrat title, card-size copy, the "What we build" link style).
v8.23 to v8.28 (15 and 16 Nov) add a line to the credentials band, "Every
IgniteThinking hint is written and reviewed by Dr. Azin Sanjari, ...", and
restructure five sections from Azade's reference screenshots (structure only,
no copy changed except where noted): the pedagogy comparison becomes two cards
(v8.25); "The question we ask" puts the headline on top and two numbered cards
below, with "The boundary is the product." as the line between them (v8.24);
"What we build" makes IgniteThinking the featured card, with IgniteEd and
IgniteBuild stacked beside it (v8.26), the IgniteThinking page's numbers row
and a second button, Request beta access, and the label "For educators and
schools" on IgniteEd (v8.27); the three commitments gain an icon and a heading
each (v8.26); and the closing band puts the headline left, the lede and buttons
right and the three doors in a row below (v8.28).

Todo chips left in home v8.28 (not shipped, still open):

- Credentials band, hint author: "needs Azin's agreement to be named here; wording from deck v36, slide 2" (the line ships, as the "Who writes the hints" box does on IgniteThinking)
- Evidence, beta date: "re-check the date at every deploy"
- Privacy commitment link: "blocker: page must exist before launch"
- Footer privacy link: "blocker: needs a real page"
`source/IgniteThinking-Page-v3_48.html` (16 Nov 2026) is the source for
`/ignitethinking/`, superseding v3.34, v3.40 and v3.41 (kept alongside for the
diff) and `../handoff-2026-11-01/source/IgniteThinking-Page-v3_4.html`. Its four
images (three screenshots and the hint-author portrait) are embedded in the
draft; the site serves them from `public/ignitethinking/`.

v3.42 to v3.48 (15 to 16 Nov) add "What your child does in every puzzle", the
puzzle stories on "Show details", "Questions parents ask" with "Who writes the
hints", a one-field beta form and a pinned beta bar on every screen; make
"IgniteThinking" the large hero title; reword six AI lines; redesign the AI and
access sections; and bring Curiosity Teal to the AI section. Earlier: v3.36 the
schools section and thinking-map link, v3.38 two access cards, v3.40 the beta
card layout, v3.41 the schools section hidden.

Three parts stay hidden on the site, each behind a switch in the page module:

- `PRIVACY_SECTION_READY`: the draft shows the privacy section (four promises
  and a link to the full notice since v3.45) for review, but says it must not go
  live before the privacy notice is signed and published. The FAQ's link to it
  ("What we collect, and what we never do") waits behind the same switch.
- `THINKING_MAP_READY`: the "Explore the thinking map" and "See every standard on
  the map" buttons, and the sentence that introduces the first, link to
  `/ignitethinking/thinking-map/`, which is not on the site yet (Thinking Map
  Explorer v1.0 is a separate draft; its address is still to confirm).
- `SCHOOLS_SECTION_READY`: the "For teachers and schools" section, hidden (not
  deleted) in the draft itself from v3.41.

Todo chips left in IgniteThinking v3.48 (not shipped, still open):

- Over time row: "publish only once TC-8 Growing view ships"
- Grown-up review screenshot: "test profile; retake once the review's interpretive wording is replaced (UXR-16) and the independence-bar ruling lands"
- Ideate screenshot: "screenshot of 1 Nov; retake once the app's story text drops its em dash"
- Puzzle stories: "stories from the app's puzzle file (15 Nov), in US spelling with the dashes replaced; confirm they may be shown before publishing" (the paragraph held only this note; the stories ship)
- Thinking map link (hidden): "links to Thinking Map Explorer v1.0 (draft); address to confirm"
- Thinking map preview: "replace with a capture from the app once the thinking map ships (TM tickets) and the parent gate is on"
- AI vision lede: "checked 15 Nov against AI Master List v1.2, CEO Brief v0.7 and Privacy Notice v0.8; the consent lines wait on counsel's sign-off of the notice" (the consent lines ship)
- Built for the keyboard: "2 Nov audit WG-5: the sign-in PIN pad does not take keyboard input yet; fix before publishing"
- WCAG line: "read-aloud on by default ships with AX-4 (ruled 3 Nov); read-aloud coverage to verify in the release (talk-to-type is off at launch, ruled 14 Nov); contrast fixes WG-3, WG-4, WG-6, WG-13 (2 Nov audit) to ship before claiming AA"
- Who writes the hints: "needs Azin's agreement to be named on this page; wording from deck v36, slide 2" (the box ships; the note's own paragraph does not)
- FAQ, reading: "same release checks as the Access section (AX-4)"
- FAQ, more: "held until you rule or we have the fact: how long a puzzle takes, devices and browser, what happens after the beta"
- Schools (section hidden): "draft mapping (CS standards brief v0.2, 2 Nov): Azin to review before publishing"; "pilot wording: Azade to confirm"
- Beta heading: "on readiness; re-check before publishing"
- Beta form note: "form endpoint pending"
- Beta form: "W-2: the form now asks for an email only. Privacy Notice v0.8, section 3, still lists first name, grade and a question: align one of them before publishing" (the paragraph held only this note)
- Footer privacy link: "blocker: needs a real page"
- (hidden privacy section: four more chips, on Privacy Notice v0.7/v0.8, counsel and "Do not publish this section before the notice is live")

v8.17 also changes the site chrome: a deep purple header with an orange Log
in, a deep purple footer, and The Science out of the main menu. On Azade's
ruling (10 Nov 2026) these apply site-wide, on every page outside IgniteEd.
The draft has no current-page style for the dark menu, so the current link is
white with an orange underline. The orange announcement bar shows on `/` (linking to
`/ignitethinking/`) and on `/ignitethinking/` (linking to `#beta`), through
`SiteHeader`'s `announce` prop.

## About page

`source/ICL-About-v1_6.html` (17 Nov 2026) is the source for `/about/`,
superseding v1.4 (kept alongside for the diff), which replaced the July About
page and its `components/about-section.tsx`. Its portraits (three team
portraits and a small one beside the pull quote) are embedded in the draft;
the site serves them from `public/about/`.

v1.6 compares the page section by section with a proposed redesign and takes
its structures, in our colours, with every word unchanged: the hero figure as
one card ("The AI told me." struck through, "I figured it out." underlined);
the credentials as six separate items; "Why we started" with the heading beside
the text and the quote and "Where we come from" on their own row; the team
without card boxes, on pale lavender; the standing rule as the page's one dark
section, its proof in a white card; the path as a line with the evidence gate;
and "Also from the lab" as the home v8.26 pair of cards. The closing band takes
the home v8.28 structure (v1.5 had given the doors card titles). Not taken from
the redesign: its cream background, orange in the headline, the missing "Our
mission" label and the missing proof sentence.

Todo chips left in About v1.6 (not shipped, still open; unchanged from v1.4):

- Why we started: "optional: the moment that started Ignite, in one true sentence" (the paragraph held only this note, so it does not ship)
- Why we started: "sign-off: belief 04, moved here from home on 9 Sep" (the "student without a tutor at home" sentence ships)
- Pull quote: "confirm: from your 2030 Manifesto"
- Advisors: "confirm both agree to be named"
- Standing rule: "check with Saeed: the 29 Oct audit found “reviewed” not yet true in the app" (the sentence "Today every hint your child sees is written and reviewed by educators." ships, as it does on IgniteThinking)
- Footer privacy link: "blocker: needs a real page"

This folder is outside `app/`, so Next.js does not build or ship it.

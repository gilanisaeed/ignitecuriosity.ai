# Home draft v8.30, IgniteThinking draft v3.52 and About draft v1.7 (10 to 25 Nov 2026)

`source/ICL-Home-Philosophy-v8_30.html` (25 Nov 2026) is the visual and copy
source of truth for `/`, superseding v8.17, v8.20, v8.21, v8.22, v8.28 and v8.29
(kept alongside for the diff) and
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

v8.29 (20 Nov), after a design and motion review of v8.28, consolidates the
stylesheet into one (the page module is regenerated from it) and:

- moves "What we build" up to follow the credentials band; the IgniteThinking
  card carries the app screenshot (the Ideate step, as on the IgniteThinking
  page; `public/home/ideate-fewest-colours.jpg`), with IgniteEd and IgniteBuild
  in a row under it;
- removes the hero kicker and lede paragraph (headline and mission unchanged),
  the eyebrows on "What we build" and the pedagogy section, and the closing
  band's second button ("Explore our products");
- changes two labels: the pedagogy card tag "What we build" becomes "Our
  approach", and the IgniteBuild line becomes "Ship something real. For high
  schools. Stay tuned." (20 Nov tagline, company brain);
- redraws the hero trace (2.4 s, each stop appearing as the line reaches it),
  puts the commitments on lavender, sets the credentials in sentence case, and
  keeps every label at 12 px or more;
- adds a skip link, a real h2 for the question and a hidden h2 for the
  commitments.

Its header changes apply site-wide, since the header is shared: the tagline
label hides below 1000 px so Log in never drops to a second row; below 760 px
Log in moves into the menu; a "Skip to content" link leads to each page's
`<main id="main">` (the first section on `/solution/`).

v8.30 (25 Nov), after an outside review of v8.29:

- "What we build" moves to lavender, so the top is no longer four dark bands
  in a row; the hero's primary button is "Explore IgniteThinking", to
  `/ignitethinking/`;
- the hint-author line moves from the credentials band into the
  IgniteThinking card (still pending Azin's agreement);
- "The boundary is the product." reads horizontally under the two cards, with
  the orange line running into it; the commitments heading is visible;
- Finding 01's design decision gains a sentence on grades 4 and 5, and Finding
  02's drops "And the AI is never given the answer, so the restraint does not
  rest on instructions to the model." (the pedagogy section keeps it);
- the trace finishes by about 2.1 s and "AI: a scaffold" moves in on phones;
- share tags (canonical, Open Graph URL); the draft's share image and its
  responsive WebP versions of the app screenshot are not in the repo yet, so
  the site's default share image and the one JPEG stay.

Its header changes again apply site-wide: Log in is a white-outline pill (so
orange on the first screen means "new visitor"), and the phone menu is a real
button (`components/site-menu-button.tsx`: aria-expanded, Escape closes it and
returns focus). `app/layout.tsx` marks the root with a `js` class before paint,
so without script the phone menu's links simply show.

Todo chips left in home v8.30 (not shipped, still open; unchanged from v8.28):

- IgniteThinking card, hint author (in the credentials band before v8.30): "needs Azin's agreement to be named here; wording from deck v36, slide 2" (the line ships, as the "Who writes the hints" box does on IgniteThinking)
- Evidence, beta date: "re-check the date at every deploy"
- Privacy commitment link: "blocker: page must exist before launch"
- Footer privacy link: "blocker: needs a real page"
`source/IgniteThinking-Page-v3_52.html` (25 Nov 2026) is the source for
`/ignitethinking/`, superseding v3.34, v3.40, v3.41, v3.48, v3.49 and v3.50 (kept
alongside for the diff) and `../handoff-2026-11-01/source/IgniteThinking-Page-v3_4.html`.
Its three images (two app screenshot crops and the hint-author portrait) are
embedded in the draft; the site serves them from `public/ignitethinking/`.

v3.42 to v3.48 (15 to 16 Nov) add "What your child does in every puzzle", the
puzzle stories on "Show details", "Questions parents ask" with "Who writes the
hints", a one-field beta form and a pinned beta bar on every screen; make
"IgniteThinking" the large hero title; reword six AI lines; redesign the AI and
access sections; and bring Curiosity Teal to the AI section. Earlier: v3.36 the
schools section and thinking-map link, v3.38 two access cards, v3.40 the beta
card layout, v3.41 the schools section hidden.

v3.49 (16 Nov) takes three layouts from a proposed redesign, words and colours
unchanged: the numbers strip as three equal columns with dividers; the three
"What it will not tell you" statements on their own lines; and the "Coming
later" thinking map in a dashed outline, the home page's sign for coming soon.

v3.50 (20 Nov), after a design and motion review of v3.49, consolidates the
stylesheet into one (the page module and markup are regenerated from it) and:

- cuts: the hero label; the numbers strip and its tag row (the three numbers
  move into the hero); in the beta card, Log in, "Ask us a question" and the
  educators line (the form and the invite-code line stay); the thinking map's
  picture (the map becomes a strip inside the grown-up review); the AI section
  shows three cards, with the other three behind "See the rest of our vision";
- reorders: hero, puzzles, loop, grown-up review, why, AI, access, questions,
  privacy (hidden here), beta; puzzles and why sit on lavender; the labels
  above four headings are removed;
- adds: after a solve, one line and Request beta access under the maze; the
  maze arrows are one drawing that turns when tapped; squares answer a press
  and the House settles on a solve; the email field shows its error state;
  share tags (the draft's share image is not in the repo yet, so the site's
  default image stands in);
- shows the two app screenshots as larger crops, keeps every label at 12 px or
  more, and gives stand-alone links 44 px targets. Header, buttons and footer
  as home v8.29. The schools section and the other blocks hidden in v3.49 are
  removed from the draft.

v3.51 and v3.52 (25 Nov) take the home v8.30 header (already shared) and apply
a second outside review:

- the hero's primary button is Request beta access, with Try the maze beside
  it; Try the maze brings the maze into view, rings it briefly and puts focus
  on Walk the path;
- the maze shows "Arrows turned: 0 of 1", Start over clears the solved
  message, and a browser without script sees a short note in the maze;
- the FAQ's AI answer drops its repeated paragraph; its link reads "Our vision
  for AI, and how it is held to the promise";
- "Fewest Colours" is "Fewest Colors" (puzzle name and screenshot alt text);
- the email check is stricter ("Please check the email address. It looks
  incomplete."), the mail-app route adds a Copy email button, and the form is
  ready for HubSpot (`HS` portal and form IDs in `beta-form.tsx`, empty until
  the form exists and Privacy Notice v0.9 is live);
- the pinned bar stays hidden once the beta section is reached, so it never
  returns over the footer; the Access band is tighter; section headings are
  Deep Curiosity Purple.

The draft's note on responsive WebP versions of the three images
(`assets/ignitethinking-*`) is for later: those files are not in the repo.

Two parts stay hidden on the site, each behind a switch in the page module:

- `PRIVACY_SECTION_READY`: the draft shows the privacy section (four promises
  and a link to the full notice since v3.45) for review, but says it must not go
  live before the privacy notice is signed and published. The FAQ's link to it
  ("What we collect, and what we never do") waits behind the same switch.
- `THINKING_MAP_READY`: the "Explore the thinking map" button, and the
  sentence that introduces it, link to `/ignitethinking/thinking-map/`, which
  is not on the site yet (Thinking Map Explorer v1.0 is a separate draft; its
  address is still to confirm).

Todo chips left in IgniteThinking v3.52 (not shipped, still open):

- Over time row: "publish only once TC-8 Growing view ships"
- Grown-up review screenshot: "test profile; retake once the review's interpretive wording is replaced (UXR-16) and the independence-bar ruling lands"
- Ideate screenshot: "crop of the 1 Nov screenshot (assets/ignitethinking-ideate-ways-crop.jpg)"
- Puzzle stories: "stories from the app's puzzle file (15 Nov), in US spelling with the dashes replaced; confirm they may be shown before publishing" (the paragraph held only this note; the stories ship)
- Thinking map link (hidden): "links to Thinking Map Explorer v1.0 (draft); address to confirm"
- AI vision lede: "checked 15 Nov against AI Master List v1.2, CEO Brief v0.7 and Privacy Notice v0.8; the consent lines wait on counsel's sign-off of the notice" (the consent lines ship)
- Built for the keyboard: "2 Nov audit WG-5: the sign-in PIN pad does not take keyboard input yet; fix before publishing"
- WCAG line: "read-aloud on by default ships with AX-4 (ruled 3 Nov); read-aloud coverage to verify in the release (talk-to-type is off at launch, ruled 14 Nov); contrast fixes WG-3, WG-4, WG-6, WG-13 (2 Nov audit) to ship before claiming AA"
- Who writes the hints: "needs Azin's agreement to be named on this page; wording from deck v36, slide 2" (the box ships; the note's own paragraph does not)
- FAQ, reading: "same release checks as the Access section (AX-4)"
- FAQ, more: "held until you rule or we have the fact: how long a puzzle takes, devices and browser, what happens after the beta"
- Beta heading: "on readiness; re-check before publishing"
- Beta form note: "HubSpot form (ruled 25 Nov): add the portal and form IDs in the script (HS); then this note changes to say the email reaches us through HubSpot. Needs Privacy Notice v0.9 live first"
- Beta form: "W-2 closed 25 Nov: Privacy Notice v0.9 says the form collects an email only and names HubSpot; counsel review pending" (the paragraph held only this note)
- Footer privacy link: "blocker: needs a real page"
- (hidden privacy section: three more chips, on Privacy Notice v0.8, counsel and "Do not publish this section before the notice is live")

v8.17 also changes the site chrome: a deep purple header with an orange Log
in, a deep purple footer, and The Science out of the main menu. On Azade's
ruling (10 Nov 2026) these apply site-wide, on every page outside IgniteEd.
The draft has no current-page style for the dark menu, so the current link is
white with an orange underline. The orange announcement bar shows on `/` (linking to
`/ignitethinking/`) and on `/ignitethinking/` (linking to `#beta`), through
`SiteHeader`'s `announce` prop.

## About page

`source/ICL-About-v1_7.html` (20 Nov 2026) is the source for `/about/`,
superseding v1.4 and v1.6 (kept alongside for the diff); v1.4 replaced the July About
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

v1.7 (20 Nov), after a design and motion review of v1.6, consolidates the
stylesheet into one (the page module and markup are regenerated from it) and:

- removes the hero label above the headline; the hero card is straight, and its
  strike and underline start at 0.4 s;
- makes the promise a real h2 and says the proof once: the Core v1.9 sentence,
  word for word, set as four lines with check marks (the four numbered rows go);
- shows square team portraits, capped at 260 px and scaled so the three heads
  match, with a LinkedIn link for Azade and a faculty link for Dr. Shiva
  Houshmand (the other links are still to find);
- sets "Where we're going" with the heading left and the paragraph right;
- takes the home v8.29 closing band (one button), buttons, labels (12 px or
  more), focus rings and shadows; IgniteBuild reads "Ship something real.";
- adds share tags (the draft's share image is not in the repo yet, so the
  site's default image stands in). No other word changed.

Todo chips left in About v1.7 (not shipped, still open):

- Why we started: "optional: the moment that started Ignite, in one true sentence" (the paragraph held only this note, so it does not ship)
- Why we started: "sign-off: belief 04, moved here from home on 9 Sep" (the "student without a tutor at home" sentence ships)
- Pull quote: "confirm: from your 2030 Manifesto"
- Advisors: "confirm both agree to be named"; Dr. Shiva Houshmand's faculty link: "confirm link" (the link ships); Kaveh Mir: "LinkedIn address needed"
- Team links: Dr. Azin Sanjari, "link needed: the only public faculty page found is at Arkansas Tech University; confirm which page to link"; Saeed Gilani, "LinkedIn address needed" (both lines held only the note, so neither ships)
- Standing rule: "check with Saeed: the 29 Oct audit found “reviewed” not yet true in the app" (the sentence "Today every hint your child sees is written and reviewed by educators." ships, as it does on IgniteThinking)
- Footer privacy link: "blocker: needs a real page"

This folder is outside `app/`, so Next.js does not build or ship it.

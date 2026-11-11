# Home draft v8.17 (10 Nov 2026)

`source/ICL-Home-Philosophy-v8_17.html` is the visual and copy source of truth
for `/`, superseding `../handoff-2026-11-01/source/ICL-Home-Philosophy-v8_4.html`.
The rules in `../handoff-2026-11-01/HANDOFF.md` still apply: copy is ported
verbatim, and the review-only elements (draft banner, todo chips, the draft
footer tail, version-history comments) do not ship.

Todo chips left in v8.17 (not shipped, still open):

- "re-check the date at every deploy" (late November beta date, claims ladder)
- "blocker: page must exist before launch" (privacy link in the commitments strip)
- "blocker: needs a real page" (footer privacy link)

v8.17 also changes the site chrome: a deep purple header with an orange Log
in, a deep purple footer, and The Science out of the main menu. On Azade's
ruling (10 Nov 2026) these apply site-wide, on every page outside IgniteEd.
The draft has no current-page style for the dark menu, so the current link is
white with an orange underline. The orange announcement bar shows on `/` only
(`SiteHeader`'s `announce` prop).

This folder is outside `app/`, so Next.js does not build or ship it.

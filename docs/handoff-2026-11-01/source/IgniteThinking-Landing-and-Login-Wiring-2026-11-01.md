# IgniteThinking landing page and login: how they connect

1 November 2026. For Azade, and Saeed for the two repos. INTERNAL.

## The ruling (Azade, 1 Nov 2026)

- **ignitecuriosity.ai/ignitethinking** is IgniteThinking's public landing page. The page is the IgniteThinking product page in this folder, now `IgniteThinking-Page-v3_4.html` (v3.3 plus the login links below).
- **app.ignitecuriosity.ai** is the login. Logged out, it opens on Family sign-in (front door handoff of 30 Oct, `IgniteThinking/06-dev-tickets/IgniteThinking-Front-Door-Dev-Handoff-2026-10-30.md`).
- No separate IgniteThinking domain.

**Superseded by this note:** the "IgniteThinking Landing Page" canvas made earlier on 1 Nov and `IgniteThinking/06-dev-tickets/IgniteThinking-Landing-Page-Dev-Handoff-2026-11-01.md`. Both designed a new page from scratch; the page is the one in this folder. Do not build from either.

## What changed in the pages (no copy or claim changed)

**`IgniteThinking-Page-v3_4.html`** (from v3.3)
- Header: "Log in" button, right side, to `https://app.ignitecuriosity.ai/`. Visible on phones next to Menu.
- Beta section, under "Request beta access": "Already a Founding Family? Log in. Have an invite code? Set up your family." Log in goes to the app; Set up your family goes to `https://app.ignitecuriosity.ai/register` (the route as deployed).
- Footer: "Log in".
- "Request beta access" still opens an email to hello@ignitecuriosity.ai, as in v3.3.

**`ICL-Home-Philosophy-v8_4.html`** (from v8.3)
- IgniteThinking card: link changed from "Request beta access" (email) to "See IgniteThinking →" `/ignitethinking/`. The audit chose email only because the product page was gated; now that the page is the landing page, the card leads to it. **Launch both together**, or keep v8.3's email link until the IgniteThinking page is live.
- Header and footer: "Log in" to the app, same style as the product page.

Checked: both render at 1366 and 375 px with no sideways scroll and no script error; every new link resolves to the URLs above; no em dashes; the one new style uses existing tokens only (`--purple-600`, `--purple-700`, `--tint`, `--ink-muted`).

## Website repo (`gilanisaeed/ignitecuriosity.ai`, GitHub Pages)

Per the claims audit §7, updating the site is a pull request; merging to `main` deploys.
1. Port home v8.4 into `app/page.tsx` and its components.
2. Add `app/ignitethinking/page.tsx` from `IgniteThinking-Page-v3_4.html` (the sample maze script moves into a client component).
3. Add `app/privacy/page.tsx`. Remove `app/ignitemath/` and its nav link.
4. Header "Log in" and the beta line are plain external links. No auth code on the website.

## App repo (`gilanisaeed/ignitethinking`): front door links back to the page

Amends the 30 Oct front door handoff. Ship in the same week the IgniteThinking page goes live, so these never point at a 404.
- Slim top bar or footer link: "About IgniteThinking" to `https://www.ignitecuriosity.ai/ignitethinking/`.
- "New here?" block, second row under the invite-code row: "No invite yet? Request beta access" to `https://www.ignitecuriosity.ai/ignitethinking/#beta`.
- Footer Help: `hello@ignitecuriosity.ai`, to match the website (the front door used azade@).

## Still blocking launch (from the claims audit §4, unchanged)

1. Privacy notice: `/privacy/` exists nowhere, and the beta button collects family emails.
2. IGNITETHINKING trademark clearance.
3. The two screenshots, and the product ruling on the 0 to 100 independence bars first.
4. `hello@ignitecuriosity.ai` must be a live inbox.

## Founder judgment call

The beta opens in late November. If trademark clearance is not done by then, there is no public landing page and families can only arrive by invite and email. Either start the clearance search now, or accept an invite-only November and launch the page when it clears.

## Proposed DECISIONS.md entry (not added; paste if you agree)

> ## 2026-11-01 · IgniteThinking landing page and login · RULED by Azade
> The IgniteThinking page (`IgniteThinking-Page-v3_4.html`) is the public landing page at ignitecuriosity.ai/ignitethinking, and app.ignitecuriosity.ai is the login. No separate domain. v3.4 adds Log in (header, footer, beta section) and the invite-code link; home v8.4 points the IgniteThinking card at the page and adds Log in. No copy or claim changed.

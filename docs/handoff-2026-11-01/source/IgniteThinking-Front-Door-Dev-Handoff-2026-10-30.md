# IgniteThinking front door: sign-in as the first page (dev handoff for Saeed)

**Date:** 30 Oct 2026 · **Owner:** Azade (CEO) · **Builder:** Saeed · **Ticket prefix:** FA (extends FA-4 and FA-6)
**Design prototype (clickable):** https://claude.ai/artifact/YS3dx8Uv1FUcQmMGG3F45B (local copy: `06-dev-tickets/IgniteThinking-Front-Door-Prototype-2026-10-30.html`)
**Builds on:** `family-accounts-dev-handoff.md` (24 Jul) and D62 (12 Oct: family accounts ON for the pilot deployment).

## Why

Today `app.ignitecuriosity.ai/` opens straight onto the puzzle gallery with no sign-in, and Grown-ups is open to the child (UXR-4, F12). The FA pages exist (`/family/login`, `/register`, `/family`) but sit behind the `familyAccounts` switch, are unstyled, and nothing links to them (Build Review 26 Oct). The pilot needs a stable child ID (PD-3, D61), so the front door must become sign-in.

## The rule

**Parents sign in. Children never do.** One email-and-password sign-in per family device (90-day session, FA-4). After that the child taps their picture (FA-6). Kids never see an email or password field on their path.

## Routing (what `/` shows)

| Device state | `/` shows | Notes |
|---|---|---|
| No family session | **Front door: Family sign-in** (prototype state 1) | Replaces the gallery as the first page. Gallery and `/puzzle/*` redirect here |
| Family session, no active profile | **Who's thinking today?** picker (state 2) | Today's `/family`. Can stay at `/family`; `/` redirects there |
| Family session + active profile | **Gallery** (unchanged) | Header gets a small profile chip with "Switch" (FA-6, KT-5) |
| Child taps a profile with a PIN | **PIN pad** (state 3) | 5 wrong tries falls back to parent password, no lockout copy (FA-6) |

- `/review`, settings, "Add a thinker", Sign out: behind the parent gate (FA-8, password re-entry, about 15 min).
- Deep links (e.g. a puzzle URL in a parent email) go through sign-in, then return to the requested page (`?next=`, same-origin paths only).
- **Try-it mode:** no link to it from the front door during the pilot (see open decision below).

## Front door contents (state 1)

**Left, welcome panel (purple):** IgniteThinking wordmark · eyebrow "From Ignite Curiosity Lab" · headline "Pick a puzzle. Think it through." · one line: "Every puzzle is a little mystery. The guide asks questions and offers hints. No answers handed out, so your child does the thinking." · three steps (grown-up signs in once / child taps their picture / they pick a puzzle, no clock, no score) · a teaser card for The Meeting Point (decorative grid, no solution shown).

**Right, sign-in card:**
- Title "Family sign-in", sub "For parents and caregivers."
- Kids note: "Kids: ask a grown-up to sign in here once. After that, you just tap your picture."
- Email (`type=email`, `autocomplete=username`), Password (`autocomplete=current-password`) with Show/Hide toggle.
- "Forgot your password?" → `/family/reset`
- Primary button "Sign in" (shows "Signing in…" while pending).
- "New here?" block: "Got an invite code from your school? Set up your family account in two minutes." → `/register` (the handoff said `/family/register`; keep `/register` as deployed and redirect the other).
- Privacy line: "We only ask for a grown-up's email. Children use a nickname, never their real name, and nothing is shared with advertisers."
- Footer: © 2026 Ignite Curiosity Lab, Inc. · Privacy · Terms · Help.

**Errors (generic, no account enumeration, FA-4):**
- Wrong credentials or unknown email: "That email and password don't match. Check them and try again, or reset your password."
- Empty fields: "Enter your email and password to sign in."
- Rate-limited (FA-10): "Too many tries. Wait a few minutes, then try again, or reset your password."

Mobile (under 860px): sign-in card first, welcome panel below it.

## Picker (state 2) and PIN (state 3)

- Heading "Who's thinking today?", sub "Tap your picture to open your puzzles." Avatar cards (preset art, nickname, "Has a code" marker if a PIN is set), plus "Add a thinker" (grown-ups only, parent gate). "Grown-ups" link top right.
- PIN: "Hi, {nickname}!" · "Type your 4-number code." · 4 dots · large keypad (min 68px keys) · wrong code: "Not quite. Try again." in amber, never red · after 5: "Let's get a grown-up to help. They can sign in to open your puzzles."

## Visual tokens

Colours are from the Ignite Curiosity Lab website palette (Azade's standing rule for Ignite visual output). Fonts stay the app's own: Baloo 2 (display) and Nunito (body).

| Role | Light | Dark |
|---|---|---|
| Page | `#FBF8F3` | `#1C1924` |
| Surface / card | `#FFFFFF` | `#25212E` |
| Inset / tint | `#F8F7F5` | `#2E2939` |
| Ink / secondary ink | `#2C2A33` / `#6E6A75` | `#F5F3F8` / `#B7B2C2` |
| Border | `#E5E7EB` | `#38324A` |
| Welcome panel | `#56457F` (Deep Curiosity Purple) | `#2E2939` |
| Links, focus ring | `#56457F` | `#B3A6D6` |
| Brand accent (wordmark "Thinking", spark) | `#F27A37` | `#F27A37` |
| Primary button / hover | `#C0531F` / `#AC4B1F`, white text (4.7:1) | same |
| Error border | `#D1483F` | `#D1483F` |
| "Not yet" amber (PIN) | `#D0972F` tint | `#D0972F` tint |
| Avatar fills | tints of `#F27A37`, `#4FAF7D` | same |

Radii 14 / 20 / 28 px, pill buttons, inputs and buttons at least 50px tall, 3px visible focus ring, `prefers-reduced-motion` honoured.

**Heads-up on palette:** the deployed app (gallery, workspace) still runs the July app palette (coral `#FB5A3C`, plum ink `#2C2440`). The front door uses the website palette, so the sign-in page and the gallery will differ in colour until the app is moved over. Implement the front door's colours as their own tokens so a later app re-skin is one token swap.

## Guardrails (unchanged from FA)

No social login, no analytics SDKs, no third-party auth widgets. The front door adds no events and no payload fields. No grade labels. Password fields never on the child path. Pilot launch still waits on FA-10 gates green and the consent packet sent to every registered family.

## Acceptance

1. Logged-out `/` shows the front door at 400px and 1280px, light and dark, no horizontal scroll.
2. Signing in lands on the picker; choosing a profile lands on the gallery as that profile; a PIN profile shows the pad first.
3. `/`, `/puzzle/*`, `/journal`, `/review` are unreachable without a family session; `/review` also needs the parent gate.
4. Wrong password, unknown email and empty fields show the generic messages above; rate limit works.
5. Password manager autofill works (correct `autocomplete` values).
6. `familyAccounts` switch ON in the pilot deployment (D62).

## Decisions Azade owns

1. **Try-it mode during the pilot.** Recommendation: hide it. A no-account path gives children with no stable ID, which breaks the D61 join, and leaves Grown-ups open again. If a public demo is needed for investors or schools, run it as a separate demo account or host, not a link on the family front door.
2. **Palette alignment.** Front door on the website palette now; decide when the gallery and workspace move over.
3. **Help contact.** Footer Help currently points to azade@ignitecuriosity.ai; swap in a support address if one is created.

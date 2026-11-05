# ignitecuriosity.ai

Marketing site for Ignite Curiosity Lab. Learning to think with AI, not just use it.

Built with Next.js (App Router) + Tailwind CSS, statically exported and deployed to GitHub Pages at [www.ignitecuriosity.ai](https://www.ignitecuriosity.ai).

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Outputs a fully static site to `out/`. The build does not fail on type errors (`typescript.ignoreBuildErrors` is set), so run `pnpm exec tsc --noEmit` as well.

## Site structure

- **Home** — `/`, the lab's main page (draft v8.13)
- **IgniteThinking** — `/ignitethinking/`, the product's public landing page (draft v3.21); the login lives at [app.ignitecuriosity.ai](https://app.ignitecuriosity.ai)
- **IgniteEd** — `/igniteed/` (with `/program`, `/impact`, `/about`, `/pricing`, `/readiness-review` subpages), components in `components/igniteed/`, assets in `public/igniteed/`
- **The Science** — `/science/` · **About** — `/about/` · **Privacy** — `/privacy/` (placeholder until counsel approves the notice)
- IgniteMath has been removed from the site; fresh content comes later.

The home and IgniteThinking pages are ports of the HTML drafts in `docs/handoff-2026-11-03/source/` (home v8.13, IgniteThinking v3.21), which are the visual and copy source of truth; see `docs/handoff-2026-11-01/` for the full handoff and rules before editing their copy.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages at the live domain within minutes. The custom domain is set via `public/CNAME`.

> **One-time setup:** in the repo settings on GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

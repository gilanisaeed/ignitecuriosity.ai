# ignitecuriosity.ai

Marketing site for Ignite Curiosity Lab — teacher-directed AI for mathematical reasoning.

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

Outputs a fully static site to `out/`.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. The custom domain is set via `public/CNAME`.

> **One-time setup:** in the repo settings on GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

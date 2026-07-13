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

## IgniteEd subsite

The IgniteEd pages served at [/igniteed/](https://www.ignitecuriosity.ai/igniteed/) are a separate Next.js app whose source lives in `~/workspace/ignite-ed-website-design`. Its static build output is checked in under `public/igniteed/` so it deploys with the main site. To update it:

```bash
cd ~/workspace/ignite-ed-website-design
pnpm install && pnpm build   # exports to out/ with basePath /igniteed
rm -rf <this-repo>/public/igniteed
cp -R out/ <this-repo>/public/igniteed/
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. The custom domain is set via `public/CNAME`.

> **One-time setup:** in the repo settings on GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

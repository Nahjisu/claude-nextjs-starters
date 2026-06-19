# Next Starter

A batteries-included Next.js starter kit — pre-wired with TypeScript, Tailwind CSS, shadcn/ui, and dark mode — so you can skip the boilerplate and start building.

## Stack

- **[Next.js](https://nextjs.org)** (App Router) + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-based config — see `app/globals.css`)
- **[shadcn/ui](https://ui.shadcn.com)** — accessible components in `components/ui`
- **[lucide-react](https://lucide.dev)** — icon set
- **[next-themes](https://github.com/pacocoursey/next-themes)** — light/dark/system theming with no flash-of-incorrect-theme

> [!NOTE]
> This project pins a recent Next.js version whose APIs and conventions may differ from what you're used to (see `AGENTS.md`). When in doubt, check `node_modules/next/dist/docs/`.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app. Start editing `app/page.tsx` — it auto-updates as you save.

## Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Start the dev server (Turbopack)  |
| `pnpm build`        | Build for production              |
| `pnpm start`        | Run the production build          |
| `pnpm lint`         | Lint with ESLint                  |
| `pnpm format`       | Format the codebase with Prettier |
| `pnpm format:check` | Check formatting without writing  |

## Project structure

```
app/                  Routes (App Router) — layout, page, global styles
components/
  ui/                 shadcn/ui primitives (Button, Card, Dialog, …)
  layout/             Site shell — header, footer
  demo/               Landing-page sections that showcase the kit
  theme-provider.tsx  next-themes wrapper
  theme-toggle.tsx    Light / dark / system switcher
config/
  site.ts             Site name, description, nav links — single source of truth
hooks/
  use-mobile.ts       Responsive breakpoint hook
lib/
  utils.ts            `cn()` class-name helper
```

## Adding more shadcn/ui components

```bash
pnpm dlx shadcn@latest add <component>
```

New components land in `components/ui` following the conventions already configured in `components.json`.

## Theming

Colors, radii, and fonts are defined as CSS variables in `app/globals.css` (`:root` / `.dark`) and mapped into Tailwind via the `@theme` block — edit them there to restyle the whole app. The theme toggle in the header switches between light, dark, and system via [next-themes](https://github.com/pacocoursey/next-themes).

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

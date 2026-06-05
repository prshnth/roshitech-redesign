# AGENTS.md

Guidance for AI agents and human contributors working in this repository. Keep this file current
when conventions change.

## What this is

A single-page marketing site for Roshi Tech, Inc. — an Apple-inspired redesign of roshitech.com.
React 19 + TypeScript + Vite + Tailwind CSS v4, organized with atomic design.
The visual design and all original site copy are intentional and should be preserved.

## Commands

pnpm is pinned via Corepack — prefix commands with `corepack` (or install pnpm globally and drop it):

```bash
corepack pnpm install      # install deps
corepack pnpm dev          # dev server, http://localhost:5173
corepack pnpm build        # tsc -b && vite build  (this is what Vercel runs)
corepack pnpm typecheck    # tsc -b, no emit
corepack pnpm format       # prettier --write .
```

Always run `corepack pnpm build` before considering a change done — it type-checks the whole
project and produces the production bundle.

## Architecture: atomic design

Components live in `src/components/<layer>/` and compose strictly upward. A layer may import from
the layers below it, never from the same layer's siblings' internals or from a layer above:

```
atoms  →  molecules  →  organisms  →  templates  →  pages
```

- **atoms** — styling/markup primitives (`Button`, `Container`, `Section`, `Logo`, `Eyebrow`,
  `SectionTitle`, `Reveal`, `Dot`). No business content.
- **molecules** — small reusable composites (`SectionHead`, `StatItem`, `ServiceAccordion`,
  `ModelCard`, `ClientGroupCard`, `FeatureCard`, `ContactDetail`, `FormField`).
- **organisms** — complete page sections (`Navbar`, `Hero`, `StatsBand`, `About`, `Services`,
  `Models`, `Testimonial`, `Clients`, `Leadership`, `Careers`, `Contact`, `Footer`).
- **templates** — page shell (`SiteLayout` = Navbar + main + Footer).
- **pages** — `HomePage` composes the organisms in order.

Each layer has a barrel `index.ts`; import via the barrel (e.g. `@/components/atoms`).

## Content is data-driven

All copy lives in `src/data/` as typed modules (`services.ts`, `clients.ts`, `leadership.ts`,
`stats.ts`, `site.ts`, …) with shared interfaces in `src/data/types.ts`. Components are
presentational — **to change wording or add a service/client/role, edit `src/data/`, not the JSX.**

## Styling: Tailwind v4, CSS-first

`src/styles.css` is the single styling source. It contains:

- `@import 'tailwindcss';`
- `@theme { … }` — design tokens. Colors (`ink`, `ink-2`, `muted`, `line`, `line-soft`, `paper`,
  `paper-2/3`, `night`, `night-2`, `night-card`, `on-night`, `on-night-muted`, `accent`,
  `accent-press/deep/sky`), fonts (`--font-sans`, `--font-serif`), and shadows (`--shadow-soft`,
  `--shadow-card`, `--shadow-float`). These auto-generate utilities like `bg-paper-2`,
  `text-on-night`, `border-line-soft`, `hover:shadow-card`.
- `@layer base` — resets, smooth scroll, reduced-motion handling.
- `@layer components` — effects that can't be plain utilities: `text-gradient`, `bg-hero`,
  `hero-orb*`, `feature-glow`, `feature-mark`, `reveal`, the open-accordion animation, `select-dark`.

Conventions:

- Prefer Tailwind utility classes in components. Only touch `styles.css` for tokens or for visual
  effects (gradients, keyframe animation) that utilities can't express.
- **Tailwind v4 gradient utilities are `bg-linear-*` / `bg-radial-*`**, not the v3 `bg-gradient-*`.
- Use the `cn()` helper (`src/lib/cn.ts`) to join conditional class names.
- Path alias: `@/*` → `src/*`.

## Motion

- `Reveal` (atom) wraps content and fades/lifts it in on first scroll via the `useInView` hook
  (IntersectionObserver, fires once). Pass `delay` for staggered cascades.
- `useCountUp` animates the stats band. It returns a plain integer — do **not** add thousands
  separators (the "1996 — Founded" stat must read `1996`, not `1,996`).
- Respect `prefers-reduced-motion`; the base layer already disables animation/reveal for it.

## Rendering

This is a single-page site with no router. `src/main.tsx` mounts `SiteLayout` (Navbar + main +
Footer) wrapping `HomePage`, which composes the organisms top to bottom. In-page navigation is
plain hash anchors (`#services`, `#contact`, …) resolved by `scroll-behavior: smooth`. If the site
ever needs multiple URLs, reintroduce a router at the `pages`/entry layer.

## Gotchas

- Use `corepack pnpm …` — there is no global pnpm shim in this environment.
- The services accordion grid uses `items-start` so an opened `<details>` doesn't stretch its row
  sibling. Keep it.
- Native `<details>`/`<summary>` powers the service accordions (free accessibility); chevron and
  icon states are driven by the `group-open:` variant.
- The contact form is intentionally client-only (no backend): submit is prevented and a status
  message is shown.

## Deployment

`vercel.json` targets a Vite SPA: build with `pnpm build` → `dist/`, catch-all rewrite to
`/index.html`. Vercel honors the pinned pnpm version through Corepack (`packageManager` in
`package.json`).

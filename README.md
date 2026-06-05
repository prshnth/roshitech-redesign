# Roshi Tech — Website

An Apple-inspired redesign of [roshitech.com](https://roshitech.com): a single-page marketing
site for Roshi Tech, Inc. Built as a modern, type-safe, mobile-first React application.

## Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | React 19 + TypeScript                               |
| Build tool     | Vite                                                |
| Routing        | TanStack Router (file-based)                         |
| Styling        | Tailwind CSS v4 (CSS-first config) + design tokens   |
| Architecture   | Atomic design (atoms → molecules → organisms → …)    |
| Package manager | pnpm (via Corepack)                                 |
| Formatting     | Prettier + `prettier-plugin-tailwindcss`            |

## Getting started

This repo pins pnpm through [Corepack](https://nodejs.org/api/corepack.html) (see the
`packageManager` field in `package.json`), so you do not need a global pnpm install:

```bash
corepack pnpm install     # install dependencies
corepack pnpm dev         # start the dev server at http://localhost:5173
```

> If you have pnpm installed globally you can drop the `corepack` prefix.

## Scripts

| Command                    | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `corepack pnpm dev`        | Start Vite dev server (HMR) on port 5173          |
| `corepack pnpm build`      | Type-check (`tsc -b`) then build to `dist/`       |
| `corepack pnpm preview`    | Serve the production build locally                |
| `corepack pnpm typecheck`  | Type-check without emitting                       |
| `corepack pnpm format`     | Format the codebase with Prettier                 |

## Project structure

```
src/
├── components/
│   ├── atoms/        Primitives: Button, Container, Section, Logo, Reveal, …
│   ├── molecules/    Composites: SectionHead, ServiceAccordion, FormField, …
│   ├── organisms/    Full sections: Navbar, Hero, Services, Contact, Footer, …
│   ├── templates/    Page shells: SiteLayout
│   └── pages/        Route pages: HomePage
├── data/             Typed content modules (all site copy lives here)
├── hooks/            useInView, useCountUp, useScrolled
├── lib/              cn() class-name helper
├── routes/           TanStack Router route files (__root.tsx, index.tsx)
├── routeTree.gen.ts  Auto-generated route tree (committed — do not edit)
├── styles.css        Tailwind import + design tokens + custom effects
└── main.tsx          App entry (RouterProvider)
```

All site content is data-driven: to change copy, edit the modules in `src/data/` rather than
the components. See [AGENTS.md](AGENTS.md) for architecture conventions and contributor guidance.

## Deployment (Vercel)

The repo includes a `vercel.json` configured for a Vite SPA (build to `dist/`, with a catch-all
rewrite to `index.html` so deep links resolve). Import the repository into Vercel and deploy —
no extra configuration required. Vercel uses Corepack to honor the pinned pnpm version.

# CLAUDE.md

Guidance for Claude Code in this repository. The full architecture and contributor conventions live
in **AGENTS.md** — read it first:

@AGENTS.md

## Quick reference

- Package manager is pnpm via Corepack: run everything as `corepack pnpm <script>`.
- Verify changes with `corepack pnpm build` (runs `tsc -b` then `vite build`) before finishing.
- All site copy is data-driven — edit `src/data/*`, not the components, to change content.
- Components follow atomic design (`src/components/{atoms,molecules,organisms,templates,pages}`)
  and compose strictly upward.
- Styling is Tailwind v4 CSS-first; tokens and custom effects are in `src/styles.css`. Remember
  gradients are `bg-linear-*` (v4), and `src/routeTree.gen.ts` is generated + committed.

## Previewing

A Claude Code preview config is checked in at `.claude/launch.json` (named `roshitech`, runs
`corepack pnpm dev` on port 5173). Use the preview tooling to start it and screenshot at desktop
and mobile widths when validating UI changes.

## Scope

This is a faithful, Apple-inspired redesign — preserve the existing visual design and original
content unless explicitly asked to change them.

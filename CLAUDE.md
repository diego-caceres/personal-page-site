# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

There are no tests or linting scripts configured.

## Architecture

Single-page portfolio site. All sections are React `.tsx` components assembled in `src/pages/index.astro` inside a `Layout.astro` wrapper.

**Hydration strategy:**
- `Navbar` and `Hero` use `client:load` (hydrated immediately)
- All other sections use `client:visible` (hydrated when scrolled into view)

**Styling:**
- Tailwind CSS v4 — configured via `@import "tailwindcss"` in `src/styles/global.css`, **not** via `tailwind.config.js`
- Theme colors are CSS custom properties (`--color-bg`, `--color-text`, `--color-muted`, `--color-accent-1/2/3`, `--color-card`, `--color-border`) defined in `:root` and overridden under `.dark`
- Reusable CSS classes `gradient-text`, `gradient-border`, and `section-container` are defined in `global.css` under `@layer components`

**Dark mode:**
- Toggled by adding/removing the `dark` class on `<html>`
- Persisted in `localStorage` under key `"theme"`
- An inline `is:inline` script in `Layout.astro` reads this before first paint to avoid FOUC

**Animations:**
- Framer Motion 12.x with `useInView({ once: true })` for scroll-triggered reveal on all sections

**Fonts:** DM Sans + DM Mono loaded from Google Fonts in `Layout.astro`.

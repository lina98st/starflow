@AGENTS.md

# Starflow — Project Overview

## Purpose
Starflow is a futuristic space-themed landing page. The goal is a visually striking first impression with a dark space aesthetic, glassmorphism UI, and smooth animations.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19 — breaking API changes vs. earlier versions; always read the docs in `node_modules/next/dist/docs/` before writing code.
- **Styling:** Tailwind CSS v4 — no `tailwind.config.js`; configuration goes in `@theme` blocks inside `app/globals.css`. Import syntax: `@import "tailwindcss"` (not `@tailwind base` etc.).
- **Animations:** Framer Motion v12 — used for scroll-reveal, fade-in, and float animations inside Client Components.
- **Fonts:** `next/font/google` (Geist) — exposed via CSS custom property `--font-geist-sans`.
- **Language:** TypeScript.
- **Potential extension:** Three.js / React Three Fiber for 3D background elements (not yet added).

## Project Structure
```
app/
  _components/           # Non-routable UI components (Client Components)
    StarField.tsx        # Animated star field — DOM-based, no canvas
    HeroSection.tsx      # Hero with large title, badge, and CTAs
    FeaturesSection.tsx  # Feature cards in a responsive grid
    CTASection.tsx       # Call-to-action at the bottom of the page
  globals.css            # Tailwind import, @theme block, CSS animations (twinkle, float, nebula-drift …)
  layout.tsx             # Root layout with metadata
  page.tsx               # Main page (Server Component) — composes all sections
```

## Key Conventions
- Interactive components (Framer Motion, useState, useEffect) require `'use client'` at the top.
- Server Components (page.tsx, layout.tsx) have no `'use client'` and must not use browser APIs.
- CSS animations (`twinkle`, `float`, `nebula-drift`, `pulse-glow`) are defined in `globals.css`; utility classes like `.glass`, `.glow-text`, and `.star` live there too as plain CSS.
- Use Tailwind classes directly in JSX; reach for CSS Modules only when Tailwind utilities fall short.
- No `tailwind.config.js` — custom colors and tokens are defined in the `@theme inline` block in `globals.css`.

## Design System
- **Background:** `#050a14` (deep dark blue-black)
- **Accent colors:** Cyan `#4fc3f7`, Purple `#ce93d8`, Teal `#80deea`
- **Glassmorphism:** `.glass` class (`backdrop-filter: blur(16px)`, `bg-white/4`, `border-white/8`)
- **Glow:** `.glow-text` (cyan text-shadow), `.glow-text-purple` (purple text-shadow)
- **Typography:** Geist Sans, oversized headings (`text-7xl` to `text-[9rem]`), `font-black`

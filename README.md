<div align="center">

# ✦ Starflow

**Where science meets the stars.**

A futuristic astrology and astronomy landing page built with Next.js 16, Tailwind CSS v4, and Framer Motion. Explore star charts, natal charts, planetary transits, and deep space science — wrapped in a dark space aesthetic with glassmorphism UI and smooth animations.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

</div>

---

## About

Starflow sits at the intersection of astrology and astrophysics. The site presents six core features — natal charts, a live sky map, planetary transits, a lunar calendar, a cosmic events tracker, and a deep space science feed — all framed around the idea that ancient astrological traditions and modern science are looking at the same sky.

---

## Features

- **Animated star field** — 180 individually twinkling DOM stars with randomised size, color, duration, and delay
- **Nebula blobs** — radial-gradient layers that slowly drift across the background
- **Custom cursor** — glowing cyan dot with a lagging ring, driven by `requestAnimationFrame`
- **Glassmorphism UI** — `backdrop-filter: blur` cards and nav with hover glow transitions
- **Framer Motion animations** — fade-up on hero entry, scroll-triggered reveal on feature cards and CTA
- **Orbit rings** — concentric rings rotating at different speeds, positioned as right-side decoration
- **Asymmetric layout** — left-aligned hero content, orbit rings anchored to the right
- **Space Mono nav font** — monospace typeface on navigation links, buttons, and footer
- **Responsive layout** — mobile-first grid, collapses cleanly from 3-column to single-column

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| Fonts | Geist Sans + Space Mono via `next/font/google` |
| Language | TypeScript 5 |

---

## Project Structure

```
starflow/
├── app/
│   ├── _components/
│   │   ├── StarField.tsx        # Fixed star field + nebula blobs (Client Component)
│   │   ├── HeroSection.tsx      # Hero title, badge, CTAs, stats, orbit rings
│   │   ├── FeaturesSection.tsx  # Scroll-reveal feature cards grid (6 topics)
│   │   ├── CTASection.tsx       # Bottom call-to-action panel
│   │   └── CustomCursor.tsx     # Glowing cursor with lagging ring (rAF loop)
│   ├── globals.css              # Tailwind import, @theme tokens, CSS keyframes
│   ├── layout.tsx               # Root layout + metadata + font setup
│   └── page.tsx                 # Page entry (Server Component)
├── public/
├── CLAUDE.md                    # AI assistant context for this repo
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Install & run

```bash
# Clone the repo
git clone https://github.com/lina98st/starflow.git
cd starflow

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Design System

### Color palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#050a14` | Page background |
| Cyan | `#4fc3f7` | Primary accent, glow, CTA |
| Purple | `#ce93d8` | Gradient midpoint, headings |
| Teal | `#80deea` | Gradient endpoint, star color |

### CSS utility classes

| Class | Effect |
|---|---|
| `.glass` | `backdrop-blur(16px)` + semi-transparent border |
| `.glass-hover` | Smooth glow transition on hover |
| `.glow-text` | Cyan multi-layer `text-shadow` |
| `.glow-text-purple` | Purple multi-layer `text-shadow` |
| `.star` | Positioned element with `twinkle` animation |
| `.float` | Gentle vertical oscillation |
| `.btn-glow` | Pulsing `box-shadow` animation |
| `.orbit-ring` | Slow-rotating border ring |

### Tailwind v4 note

This project uses **Tailwind CSS v4**, which drops `tailwind.config.js` entirely. Custom tokens are registered in the `@theme inline` block inside `app/globals.css`:

```css
@theme inline {
  --color-star-blue: #4fc3f7;
  --color-star-purple: #ce93d8;
  /* ... */
}
```

---

## Architecture Notes

### Server vs. Client Components

- `page.tsx` and `layout.tsx` are **Server Components** — no `'use client'`, no browser APIs.
- All animation and interactivity lives in `app/_components/` as **Client Components** (marked with `'use client'`).
- This keeps the JS bundle lean: static markup is streamed from the server, client JS hydrates only what needs it.

### Animation strategy

- **Entry animations** (hero): Framer Motion `variants` with staggered `custom` delays — no `useEffect` needed.
- **Scroll animations** (features, CTA): `useInView` from Framer Motion with `once: true` so cards animate in once and stay visible.
- **Continuous animations** (stars, rings, nebula): pure CSS `@keyframes` — zero JS overhead at runtime.
- **Custom cursor**: `requestAnimationFrame` loop with linear interpolation (`lerp`) so the ring lags naturally behind the dot.

---

## Planned Extensions

- [ ] Three.js / React Three Fiber 3D background scene
- [ ] Interactive star chart with real constellation data
- [ ] Natal chart generator with user birth date input
- [ ] Cosmic events calendar with countdown timers
- [ ] Waitlist / email capture form
- [ ] Page transition animations with `AnimatePresence`

---

## A note on how this was built

This is my first project built with [Claude Code](https://claude.ai/code). I wanted to try out AI-assisted development to see what the workflow feels like — this isn't how I normally work. Overall a fun experiment, and a good way to get a polished starting point up quickly.

---

## License

MIT © 2026 Starflow

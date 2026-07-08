# webCipta — Digital Agency Website

## Overview
Landing page for webCipta, an Indonesian digital agency. Built with Next.js 16, React 19, Tailwind CSS v4, and a fully custom component library.

## Stack
- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui component library
- **Fonts:** Geist & Geist Mono (Google Fonts via next/font)
- **Animations:** Custom CSS keyframes, Intersection Observer, mouse-follow effects
- **Package Manager:** pnpm

## Project Structure
```
app/
  globals.css       # CSS variables, Tailwind theme, custom animations
  layout.tsx        # Root layout with metadata and fonts
  page.tsx          # Main page composing all sections
components/
  navbar.tsx        # Sticky nav with scroll-hide, active section tracking, mobile menu
  hero.tsx          # Full-page hero with parallax, animated counter, TextScramble badge
  services.tsx      # 6 service cards in responsive grid (TiltCard + animated stats)
  portfolio.tsx     # Filterable portfolio grid with category tabs
  process.tsx       # 4-step interactive process timeline (auto-progress)
  testimonials.tsx  # Auto-rotating testimonial carousel with client logos
  cta.tsx           # Contact section with form
  footer.tsx        # Newsletter + links grid + social icons
  cursor.tsx        # Custom mouse cursor (desktop only)
  magnetic-button.tsx # Mouse-follow magnetic effect
  parallax.tsx      # Parallax scroll + mouse parallax layer
  tilt-card.tsx     # 3D tilt effect on hover with glare
  text-reveal.tsx   # FadeIn, SplitText, StaggerChildren scroll-triggered animations
  text-scramble.tsx # Character scramble animation
  animated-counter.tsx # Number count-up animation
  marquee.tsx       # Infinite marquee for tech stack
  animated-blob.tsx # Background SVG blob
  smooth-scroll.tsx # Smooth scroll utility
  scroll-progress.tsx # Page scroll progress bar
  theme-provider.tsx # Theme context provider
  ui/               # shadcn/ui component library (buttons, cards, forms, etc.)
```

## Development
```bash
pnpm run dev    # starts on port 5000, binds 0.0.0.0
pnpm run build  # production build
pnpm run start  # production start on port 5000
```

## Replit Configuration
- Dev server: port 5000, host 0.0.0.0
- `allowedDevOrigins` set in next.config.mjs allows `*.replit.dev`, `*.riker.replit.dev`, `*.kirk.replit.dev`, `*.pike.replit.dev`, `*.repl.co`, and dynamically includes `process.env.REPLIT_DEV_DOMAIN` so HMR works regardless of which Replit region/subdomain serves the preview
- Workflow: "Start application" runs `pnpm run dev`
- Dependencies installed via `pnpm install`; run `pnpm run dev` to start locally

## UI/UX Notes
- Dark theme only (no light/dark toggle)
- Custom cursor visible on desktop (pointer:fine) only
- Floating parallax icons in hero hidden on mobile/tablet (xl+ only) to prevent overlap
- All sections have responsive padding: mobile (py-20) → tablet (md:py-28) → desktop (lg:py-36+)
- Portfolio cards use min-height to prevent content overflow on small screens
- body has overflow-x:hidden to prevent horizontal scroll
- scroll-padding-top:80px set for smooth anchor nav with fixed navbar
- Newsletter form stacks vertically on mobile (flex-col sm:flex-row)
- Tech stack marquee at bottom of hero uses reduced padding on mobile

## SEO
Target keywords: "jasa pembuatan website", "jasa pembuatan website di lampung" (local SEO — business is based in Bandar Lampung, Indonesia).
- `app/layout.tsx`: full `Metadata` (title template, description, keywords, OpenGraph, Twitter card, robots directives, `metadataBase: https://webcipta.my.id`) plus JSON-LD (`@graph` with `ProfessionalService`/LocalBusiness + `WebSite`) injected via a `<script type="application/ld+json">`.
- `app/page.tsx` and `app/portfolio/page.tsx` each set their own `alternates.canonical` (do not rely on root layout canonical — it does not safely propagate per-route).
- `app/robots.ts` and `app/sitemap.ts` — Next.js App Router metadata routes; sitemap includes `/` and `/portfolio`.
- `app/icon.svg` — favicon (fixes prior 404s on non-existent icon files).
- `components/hero.tsx` — headline wrapped in a real `<h1>` (all inner text-effect wrappers use `<span>`, not `<div>`, since heading elements must only contain phrasing content) with an `sr-only` keyword-rich phrase; visible location label is "Lampung" (was "Jakarta" — a NAP inconsistency, since footer/contact info are Bandar Lampung).
- `components/navbar.tsx` — mobile menu phone number matches the real number used elsewhere (`0853-6619-5381`); previously showed an unrelated placeholder number.
- `components/faq.tsx` + `lib/faq-data.ts` — FAQ accordion section targeting long-tail/local queries, paired with `FAQPage` JSON-LD in `app/page.tsx`. FAQ content lives in `lib/faq-data.ts` (plain module, not the `"use client"` component file) — Turbopack/Next.js does not safely expose a "use client" module's plain data exports to server components, so shared data must live in a separate non-client file.
- `components/portfolio.tsx` / `app/portfolio/portfolio-client.tsx` — project thumbnails are CSS `background-image` divs (not `<img>`); given `role="img"` + `aria-label` for image/alt-text signal.
- No dedicated OG image (1200×630) exists yet — flagged as a follow-up if social-share previews matter.
- Off-codebase levers not addressed here (matter significantly for local "...di lampung" ranking): Google Business Profile setup/optimization, backlink building, review acquisition. No one can guarantee a #1 ranking — these are outside what code changes can control.

## Design System (Updated)
- Background: `oklch(0.07 0.005 240)` — very deep blue-black for more depth and richness
- Card: `oklch(0.11 0.005 240)` — slightly warm dark card
- Border: `oklch(0.22 0.005 240)` — slightly cool tint on borders
- Primary: `oklch(0.72 0.17 195)` — vivid cyan (brand color)
- Gradient pattern: `from-primary via-cyan-400 to-emerald-400` used consistently across all CTAs and headings
- All CTA buttons use animated gradient (from-primary to-emerald-500) for brand consistency
- Navbar "Konsultasi Gratis" button uses the same gradient as CTAs
- Service cards: each has per-color top border line, corner glow on hover, icon-matching check colors
- Section headers: consistent label → heading → subtitle hierarchy across all sections
- All section label lines use gradient fade: `bg-gradient-to-r from-primary to-transparent`
- Footer: social links as icon buttons; year updated to 2025
- Scrollbar thumb hover: glows with primary color

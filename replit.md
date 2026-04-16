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
- `allowedDevOrigins` set in next.config.mjs to allow `*.replit.dev` and `*.riker.replit.dev` for HMR in Replit preview
- Workflow: "Start application" runs `pnpm run dev`

## UI/UX Notes
- Dark theme only (no light/dark toggle)
- Custom cursor visible on desktop (pointer:fine) only
- Floating parallax icons in hero hidden on mobile/tablet (xl+ only) to prevent overlap
- All sections have responsive padding: mobile (py-20) → tablet (md:py-28) → desktop (lg:py-40+)
- Portfolio cards use min-height to prevent content overflow on small screens
- body has overflow-x:hidden to prevent horizontal scroll
- scroll-padding-top:80px set for smooth anchor nav with fixed navbar
- Newsletter form stacks vertically on mobile (flex-col sm:flex-row)
- Tech stack marquee at bottom of hero uses reduced padding on mobile

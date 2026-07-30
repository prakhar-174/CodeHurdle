# CodeHurdle - DSA Learning Platform

> A production-ready landing page for a premier DSA learning platform designed for ambitious software engineers cracking top tech interviews.

## 1. Project Setup

Install the required dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 2. Folder Structure

```
codehurdle-landing/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Lenis init, ThemeProvider
│   ├── page.tsx                # Assembles all sections in order
│   └── globals.css             # CSS vars (tokens), base resets, marquee keyframe
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with dark mode toggle
│   │   ├── Footer.tsx          # 4-col footer
│   │   ├── ThemeProvider.tsx   # Context wrapper for dark mode
│   │   └── LenisProvider.tsx   # Wrapper to initialize smooth scroll
│   ├── sections/
│   │   ├── Hero.tsx            # S1 — animated hero and card mockup
│   │   ├── TrustBar.tsx        # S2 — scrolling marquee
│   │   ├── Stats.tsx           # S3 — animated counters
│   │   ├── Features.tsx        # S4 — 8-card grid
│   │   ├── MockInterview.tsx   # S5 — interview card spotlight
│   │   ├── Testimonials.tsx    # S6 — snapping mobile carousel
│   │   ├── FAQ.tsx             # S7 — accordion
│   │   └── FinalCTA.tsx        # S8 — final call to action
│   └── ui/
│       ├── Button.tsx          # Primary / Secondary / Ghost variants
│       ├── Badge.tsx           # Eyebrow pill tags
│       ├── AnimatedCard.tsx    # Framer wrapper: whileInView pop
│       ├── StatCounter.tsx     # Animated number counter
│       ├── SkillBar.tsx        # Animated progress bar
│       ├── Accordion.tsx       # Single accordion item
│       └── ThemeToggle.tsx     # Sun/moon icon switch
├── hooks/
│   ├── useTheme.ts             # Dark/light toggle with localStorage
│   ├── useCountUp.ts           # Number animation hook (inView trigger)
│   └── useLenis.ts             # Lenis smooth scroll init
├── lib/
│   └── data.ts                 # All static content
├── tailwind.config.ts          # Extended theme with custom tokens
├── tsconfig.json
├── package.json
└── README.md
```

## 3. Libraries Used

- **Next.js 15 (App Router)**: The underlying framework providing SSR, optimized assets, and modern React 19 capabilities.
- **Tailwind CSS v4**: Utility-first CSS framework for rapid and highly customizable styling matching exactly the design tokens.
- **Framer Motion**: The industry standard for complex declarative React animations.
- **Lenis**: A lightweight, performant smooth-scroll library that adds a luxurious feel.
- **Lucide React**: Tree-shakeable, beautiful, and consistent SVG icons.
- **React Intersection Observer**: Performant viewport detection to trigger the stat counters and animations.

## 4. Key Engineering Decisions

1. **No Zustand** — Dark mode is a single boolean. React Context (`ThemeContext`) is the right tool; Zustand adds unnecessary bundle size for one state value.
2. **No shadcn/ui** — All components built from scratch to demonstrate component architecture skill. Uses Tailwind variants pattern for consistency.
3. **`next/font/google`** — Zero layout shift, fonts load before paint.
4. **`lib/data.ts`** — All content decoupled from components. In production this becomes an API call. Demonstrates separation of concerns.
5. **`AnimatedCard` wrapper** — Single Framer Motion `whileInView` wrapper used across all sections. No per-component animation duplication.
6. **Lenis** — Initialized once in a `useLenis` hook, called in root layout. Cleans up on unmount. Respects user's `prefers-reduced-motion` settings.
7. **CSS-only marquee** — The trust bar uses a CSS `@keyframes marquee` animation. No JS scroll listener, zero performance overhead.
8. **`useCountUp` hook** — Combines `react-intersection-observer` with a simple RAF counter. No external counter library needed.

## 5. Assumptions

- No real auth/backend — CTAs link to `#` or `/signup` (non-functional for now).
- No real avatar images — initials-based avatar component (colored bg + white initials) is used in the testimonials.
- Company names in trust bar are aspirational ("where our alumni work"), not claimed partnerships.
- Dark mode preference is seamlessly persisted in `localStorage`.
- No i18n is currently needed.

## 6. Future Improvements

- **Authentication Integration**: Hook up Clerk or Supabase for a robust Next.js authentication flow.
- **API-Driven Content**: Shift static lists in `lib/data.ts` (especially FAQs and Features) to a headless CMS (like Sanity) or a database for non-developer updates.
- **A/B Testing on CTAs**: Use Vercel Edge Config or Optimizely to test messaging and placement for the "Get Started" buttons.
- **Storybook for Component Docs**: Deploy a visual component catalog to isolate UI development and empower designers.
- **E2E tests with Playwright**: Implement critical-path end-to-end tests covering theme toggling, mobile drawer nav, and the main conversion flow.

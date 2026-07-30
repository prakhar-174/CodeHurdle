# CodeHurdle — Project Context
> Feed this file to the AI IDE alongside design.md before every prompt session. It contains all real content, folder structure, tech decisions, and constraints.

---

## Project Overview

| Field            | Value                                                       |
|------------------|-------------------------------------------------------------|
| Project          | CodeHurdle Frontend Engineer Hiring Assessment              |
| Output           | Production-ready landing page for codehurdle.com            |
| Stack            | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS |
| Optional libs    | Framer Motion, Lucide React, Lenis                          |
| Deployment       | Vercel                                                      |

---

## Tech Stack Decisions (Justify in README)

| Decision                    | Chosen                   | Why                                                   |
|-----------------------------|--------------------------|-------------------------------------------------------|
| Framework                   | Next.js 15 App Router    | Required by assessment                                |
| Styling                     | Tailwind CSS v4          | Required; utility-first, fast iteration               |
| Animation                   | Framer Motion            | Best-in-class React animation, not overkill           |
| Smooth Scroll               | Lenis                    | Lightweight, luxurious feel                           |
| Icons                       | Lucide React             | Tree-shakeable, consistent style                      |
| State (dark mode)           | React Context + hook     | No need for Zustand for a single toggle               |
| Font loading                | `next/font/google`       | Automatic optimization, no CLS                        |
| NO UI kit                   | No shadcn/ui             | Custom components show more skill to evaluators       |

---

## Folder Structure

```
codehurdle-landing/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Lenis init, ThemeProvider
│   ├── page.tsx                # Assembles all sections in order
│   └── globals.css             # CSS vars (tokens), base resets, marquee keyframe
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with dark mode toggle
│   │   └── Footer.tsx          # 4-col footer
│   ├── sections/
│   │   ├── Hero.tsx            # S1
│   │   ├── TrustBar.tsx        # S2 — scrolling marquee
│   │   ├── Stats.tsx           # S3 — animated counters
│   │   ├── Features.tsx        # S4 — 8-card grid
│   │   ├── MockInterview.tsx   # S5 — interview card spotlight
│   │   ├── Testimonials.tsx    # S6
│   │   ├── FAQ.tsx             # S7 — accordion
│   │   └── FinalCTA.tsx        # S8
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
│   └── data.ts                 # All static content (features, testimonials, FAQs, stats)
├── public/
│   └── (no images needed — use CSS/SVG only)
├── tailwind.config.ts          # Extended theme with custom tokens
├── tsconfig.json
├── package.json
└── README.md
```

---

## All Static Content (`lib/data.ts`)

### Stats
```typescript
export const STATS = [
  { value: 5000, suffix: '+', label: 'Active Learners' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 1000, suffix: '+', label: 'Practice Problems' },
  { value: 24, suffix: '/7', label: 'Live Sessions' },
];
```

### Features
```typescript
export const FEATURES = [
  {
    icon: 'Code2',
    title: 'DSA Mastery',
    description: '1000+ curated problems with detailed solutions and video explanations.',
  },
  {
    icon: 'Target',
    title: 'Pattern-Based Questions',
    description: 'Focus on high-yield patterns frequently asked in top interviews.',
  },
  {
    icon: 'CheckCircle',
    title: 'Practice Tracker',
    description: 'Verify your solutions and track progress across topics.',
  },
  {
    icon: 'BookOpen',
    title: 'Training Grounds',
    description: 'Structured learning paths for all experience levels.',
  },
  {
    icon: 'BarChart2',
    title: 'Performance Analytics',
    description: 'Detailed insights with metrics and improvement suggestions.',
  },
  {
    icon: 'Users',
    title: 'Expert Mentorship',
    description: '1:1 guidance sessions with engineers from top companies.',
  },
  {
    icon: 'Mic',
    title: 'Mock Interviews',
    description: 'Realistic interview simulations with personalized feedback.',
  },
  {
    icon: 'Globe',
    title: 'Global Community',
    description: 'Connect with 5000+ learners solving problems together.',
  },
];
```

### Trust Bar Companies
```typescript
export const TRUST_COMPANIES = [
  'Google', 'Amazon', 'Microsoft', 'Flipkart', 'Razorpay',
  'CRED', 'Meesho', 'PhonePe', 'Groww', 'Zepto',
  'Swiggy', 'Zomato', 'Paytm', 'InMobi', 'Freshworks',
];
```

### Testimonials
```typescript
export const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    role: 'SDE-1 @ Amazon',
    initials: 'AM',
    stars: 5,
    quote:
      'CodeHurdle\'s pattern-based approach changed how I think about problems. Cracked Amazon in 3 months of consistent practice here.',
  },
  {
    name: 'Priya Sharma',
    role: 'Software Engineer @ Google',
    initials: 'PS',
    stars: 5,
    quote:
      'The mock interviews are incredibly realistic. The feedback I got helped me fix my communication gaps that I didn\'t even know I had.',
  },
  {
    name: 'Rohan Das',
    role: 'Backend Engineer @ Razorpay',
    initials: 'RD',
    stars: 5,
    quote:
      'I had failed 4 interviews before CodeHurdle. The structured learning path and mentor sessions made all the difference.',
  },
];
```

### FAQs
```typescript
export const FAQS = [
  {
    q: 'What topics are covered in the DSA course?',
    a: 'We cover all major DSA topics including Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, Recursion, Heaps, and more — plus competitive programming patterns from Codeforces, CodeChef, and AtCoder.',
  },
  {
    q: 'Are there any prerequisites for enrolling?',
    a: 'None. We have beginner tracks that start from absolute basics, and advanced tracks for those who already know DSA fundamentals and want to go deeper.',
  },
  {
    q: 'Is the course content updated regularly?',
    a: 'Yes. Our team adds new problems, video solutions, and interview patterns every week based on the latest rounds reported by our community.',
  },
  {
    q: 'How long does it take to complete the full course?',
    a: 'It depends on your current level and time commitment. Most students complete the core curriculum in 3–4 months, practicing 2–3 hours daily.',
  },
  {
    q: 'Is there a free plan available?',
    a: 'Yes. Our free plan gives you access to 100+ problems, community discussions, and one mock interview per month. No credit card required to get started.',
  },
];
```

### Mock Interview Card Data
```typescript
export const MOCK_INTERVIEW_DEMO = {
  type: 'Company-Based Interview',
  duration: '60 mins',
  difficulty: 'Medium-Hard',
  interviewer: 'Engineers with CP experience',
  rating: 4.8,
  skills: [
    { label: 'Technical Skills', value: 85 },
    { label: 'Communication', value: 78 },
    { label: 'Problem Solving', value: 92 },
  ],
};
```

---

## Tailwind Config Extensions

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F6F3EE',
          dark: '#0F0F0F',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#1C1C1C',
        },
        border: {
          DEFAULT: '#E2DDD6',
          dark: '#2A2A2A',
        },
        ink: {
          DEFAULT: '#1A1714',
          muted: '#6B6560',
          dark: '#F2EFE9',
          'muted-dark': '#8A8480',
        },
        accent: {
          DEFAULT: '#2D5BE3',
          soft: '#EEF2FF',
          dark: '#4F7EFF',
        },
        tag: {
          bg: '#F0EDFF',
          ink: '#3730A3',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        accent: ['Caveat', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Key Engineering Decisions (for README)

1. **No Zustand** — Dark mode is a single boolean. React Context (`ThemeContext`) is the right tool; Zustand adds unnecessary bundle size for one state value.
2. **No shadcn/ui** — All components built from scratch to demonstrate component architecture skill. Uses Tailwind variants pattern for consistency.
3. **`next/font/google`** — Zero layout shift, fonts load before paint.
4. **`lib/data.ts`** — All content decoupled from components. In production this becomes an API call. Demonstrates separation of concerns.
5. **`AnimatedCard` wrapper** — Single Framer Motion `whileInView` wrapper used across all sections. No per-component animation duplication.
6. **Lenis** — Initialized once in a `useLenis` hook, called in root layout. Cleans up on unmount.
7. **CSS-only marquee** — The trust bar uses a CSS `@keyframes marquee` animation. No JS scroll listener, zero performance overhead.
8. **`useCountUp` hook** — Combines `react-intersection-observer` with a simple RAF counter. No external counter library needed.

---

## Assumptions

- No real auth/backend — CTAs link to `#` or `/signup` (non-functional).
- No real avatar images — initials-based avatar component (colored bg + white initials).
- Company names in trust bar are aspirational ("where our alumni work"), not claimed partnerships.
- Dark mode preference persisted in `localStorage`.
- No i18n needed.

---

## Performance Targets

| Metric         | Target  |
|----------------|---------|
| LCP            | < 2.5s  |
| CLS            | < 0.1   |
| FID            | < 100ms |
| Bundle size    | < 200KB JS (gzipped) |

Achieved by: no images, CSS-only decorative elements, font subsetting via `next/font`, tree-shakeable icon imports.
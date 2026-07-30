# CodeHurdle Landing Page — Design System
> For AI IDE use. Every token, component rule, and layout decision is defined here. Do not deviate without explicit instruction.

---

## 0. Design Philosophy

**Product:** CodeHurdle — a DSA/competitive programming learning platform for aspiring engineers cracking top tech companies.
**Audience:** Engineering students and early-career devs (18–26 yrs), India-first, ambitious, slightly overwhelmed.
**Page Job:** Convert a first-time visitor into a sign-up within 8 seconds.
**Design Personality:** Confident, structured, slightly playful — like a senior engineer who is also a great teacher. NOT corporate, NOT generic SaaS.

**The Signature Element:** A large, animated "Difficulty Meter" in the hero that counts from 0→2500+ students — communicating momentum and community instantly before the user reads a single word.

---

## 1. Color Tokens

```css
/* Light Mode (default) */
--canvas:       #F6F3EE;   /* warm off-white — NOT standard cream, slightly greener */
--card:         #FFFFFF;
--border:       #E2DDD6;
--ink:          #1A1714;   /* near-black with warmth */
--ink-muted:    #6B6560;
--accent:       #2D5BE3;   /* electric blue — ownable, not green/orange defaults */
--accent-soft:  #EEF2FF;
--success:      #16A34A;
--tag-bg:       #F0EDFF;
--tag-ink:      #3730A3;

/* Dark Mode */
--canvas-dark:      #0F0F0F;
--card-dark:        #1C1C1C;
--border-dark:      #2A2A2A;
--ink-dark:         #F2EFE9;
--ink-muted-dark:   #8A8480;
--accent-dark:      #4F7EFF;  /* slightly lighter blue for dark bg contrast */
```

---

## 2. Typography

| Role        | Font                   | Weight  | Notes                                  |
|-------------|------------------------|---------|----------------------------------------|
| Display     | `Plus Jakarta Sans`    | 800     | Hero headline, section titles          |
| Body        | `Inter`                | 400/500 | All paragraph text                     |
| Code/Mono   | `JetBrains Mono`       | 400     | Code snippets, stats labels            |
| Accent      | `Caveat`               | 600     | Hand-drawn annotations only (sparingly)|

**Import in `globals.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@600&display=swap');
```

**Type Scale (Tailwind custom + defaults):**
- Hero H1: `text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]`
- Section H2: `text-3xl md:text-5xl font-bold leading-tight`
- Card H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg font-normal leading-relaxed`
- Label/Caption: `text-sm font-medium tracking-wide uppercase`
- Mono stat: `font-mono text-4xl font-bold`

---

## 3. Spacing & Layout

- **Max content width:** `max-w-6xl mx-auto px-4 md:px-8`
- **Section vertical rhythm:** `py-20 md:py-28`
- **Card padding:** `p-6 md:p-10`
- **Grid gap:** `gap-5 md:gap-7`
- **Border radius system:**
  - Cards: `rounded-2xl` (16px)
  - Buttons: `rounded-full`
  - Tags/pills: `rounded-full`
  - Large hero card: `rounded-3xl` (24px)

> ❌ Do NOT use `rounded-[3rem]` / `rounded-[48px]` — it looks cartoonish at desktop sizes. Use `rounded-3xl` (24px) for major containers.

---

## 4. Component Specifications

### 4.1 Navbar
```
- Sticky, `backdrop-blur-md bg-canvas/80`
- Logo left | Nav links center (hidden on mobile) | CTA button right
- Mobile: hamburger → slide-down drawer
- Border: `border-b border-border`
- Height: `h-16`
- CTA: "Get Started" — accent fill button
```

### 4.2 Buttons
```
Primary:    bg-accent text-white rounded-full px-6 py-3 font-semibold
            hover: bg-accent/90, shadow-md, translate-y-[-1px]
            active: translate-y-0, shadow-sm
Secondary:  border-2 border-ink text-ink rounded-full px-6 py-3
            hover: bg-ink text-white
Ghost:      text-accent underline-offset-4 hover:underline
```
> Use `transition-all duration-150` on all buttons. NO 3px bottom-border sticker effect — it looks dated.

### 4.3 Cards (Feature / Testimonial / FAQ)
```
- bg-card border border-border rounded-2xl p-6 md:p-8
- hover: shadow-lg border-accent/30 (on feature cards only)
- transition: shadow 200ms, border-color 200ms
```

### 4.4 Stat Block
```
- Large mono number (text-4xl font-mono font-bold text-accent)
- Small label below (text-sm text-ink-muted uppercase tracking-widest)
- Inline dividers between stats (hidden on mobile — stack vertically)
```

### 4.5 Badge / Tag
```
- bg-tag-bg text-tag-ink text-xs font-semibold px-3 py-1 rounded-full
- Used above section headings as eyebrows ("✦ Features", "✦ Social Proof")
```

### 4.6 Testimonial Card
```
- Has quote mark (large " in accent color, Caveat font, text-7xl leading-none)
- Star rating (5 gold stars, text-yellow-400)
- Avatar: rounded-full w-10 h-10 bg-gray-200 (initials fallback)
- Name + role beneath avatar
```

### 4.7 FAQ Accordion
```
- Each item: border-b border-border
- Question: font-semibold text-ink, cursor-pointer, flex justify-between items-center
- Answer: text-ink-muted, max-h-0 → max-h-96, overflow-hidden, transition-all duration-300
- Icon: chevron that rotates 180° on open (Framer Motion rotateX or CSS transform)
```

### 4.8 Scrolling Marquee (Trust Bar)
```
- Infinite horizontal scroll, CSS animation (not JS scroll)
- `animation: marquee 25s linear infinite`
- Pause on hover: `hover:[animation-play-state:paused]`
- Content: text-only company names in ink-muted, font-mono, text-sm — no fake logos
- Separator: · (centered dot) between items
```

---

## 5. Animation Rules

**Library:** Framer Motion only. No GSAP, no raw CSS keyframes except the marquee.

| Trigger          | Animation                                         | Duration  |
|------------------|---------------------------------------------------|-----------|
| Page load        | Navbar fade-in from top (y: -20 → 0)             | 400ms     |
| Hero H1          | Stagger words: y: 40 → 0, opacity 0→1            | 600ms     |
| Hero CTA buttons | Scale 0.9→1 after headline stagger                | 300ms     |
| Section entry    | `whileInView` y: 30 → 0, opacity 0→1, once: true | 500ms     |
| Card grid        | Stagger children 0.08s delay                     | 400ms/card|
| Stat counter     | `useCountUp` hook on `inView`                    | 1.5s      |
| Accordion        | `AnimatePresence` height collapse                 | 250ms     |
| Hover (cards)    | scale: 1.01 (feature cards only)                 | 150ms     |

> ❌ No floating/looping animations. No parallax. No cursor trails. These scream AI-generated.
> ✅ All `whileInView` must have `viewport={{ once: true }}` — no re-triggering on scroll back.

**Smooth Scroll:** Use `lenis` npm package initialized in root layout.

---

## 6. Section-by-Section Layout

### S1 — Hero
```
Layout: Two-column on desktop (text left, visual right) | Single column mobile (text top)
Visual: Floating card mockup of the platform dashboard — a dark card with:
  - "Daily Problem" header
  - A fake difficulty badge (Medium)
  - 3 placeholder lines of code in JetBrains Mono
  - "Submit Solution" button
  - Subtle glow: box-shadow with accent color
Card has: slight rotation (-2deg) and a hover: rotate(0deg) transition
Background: No image. Subtle grid dot pattern via CSS (background-image: radial-gradient)
```

### S2 — Trust Bar
```
Layout: Full-width strip, py-8, border-y border-border
"Trusted by learners from" label + scrolling marquee of company names
Companies: Google, Amazon, Microsoft, Flipkart, Razorpay, CRED, Meesho, PhonePe, Groww, Zepto
```

### S3 — Stats / Social Numbers
```
Layout: Horizontal 4-col grid | 2-col on tablet | 2-col on mobile
Stats from site: 5k+ Active Learners | 95% Success Rate | 1000+ Practice Problems | 24/7 Live Sessions
Each stat: large mono number + label + icon
Background: accent-soft rounded-3xl container
```

### S4 — Features (Everything You Need)
```
Layout: Eyebrow tag + 2-line H2 | 3-col card grid (8 feature cards)
Features from site:
  1. DSA Mastery — 1000+ curated problems
  2. Pattern-Based Questions — high-yield interview patterns
  3. Practice Tracker — verify & track progress
  4. Training Grounds — structured paths
  5. Performance Analytics — detailed insights
  6. Expert Mentorship — 1:1 guidance
  7. Mock Interviews — realistic practice
  8. Global Community — connect worldwide
Each card: icon (Lucide) + title + 1-line description + hover lift
```

### S5 — Mock Interview Spotlight
```
Layout: Left: text block | Right: animated mock interview card
The card replicates the site's interview stats card:
  - "Mock Interview" badge
  - Duration: 60 mins | Difficulty: Medium-Hard
  - Skill bars: Technical 85% | Communication 78% | Problem Solving 92%
  - "Schedule Mock Interview" CTA button
Animate skill bars on whileInView (width 0% → actual %)
```

### S6 — Testimonials
```
Layout: Eyebrow + H2 | 3-col grid (3 testimonials) | 1-col mobile
Testimonials: fabricated but realistic — CS students who cracked FAANG/startups
Each card: star rating + quote + name + company placed
```

### S7 — FAQ
```
Layout: Centered, max-w-3xl
5 questions from the site's FAQ section
Accordion — one open at a time
```

### S8 — Final CTA
```
Layout: Full-width card, accent-soft bg, centered, py-20
Big H2 + subtext + two buttons (Primary: "Get Started Now" | Secondary: "Explore Features")
Note below: "No credit card required · Free forever plan · 14-day money-back guarantee"
```

### S9 — Footer
```
Layout: 4-column grid | 2-col tablet | 1-col mobile
Col 1: Logo + tagline + social icons (LinkedIn, X, Instagram, YouTube)
Col 2: Company links (About, Contact, Privacy, Terms)
Col 3: DSA Playlists (YouTube links)
Col 4: Contact (support@codehurdle.com) + Newsletter input
Bottom bar: © 2026 CodeHurdle · Privacy Policy · Terms
```

---

## 7. Responsive Breakpoints

| Breakpoint | Tailwind prefix | Width   | Notes                        |
|------------|-----------------|---------|------------------------------|
| Mobile     | (default)       | <768px  | Single column, stacked       |
| Tablet     | `md:`           | ≥768px  | 2-col grids, larger type     |
| Desktop    | `lg:`           | ≥1024px | Full layout, side-by-side    |
| Wide       | `xl:`           | ≥1280px | Max content width kicks in   |

**Mobile-specific rules:**
- Hero: text centered, visual card hidden or shown below fold (not beside text)
- Nav: hamburger only, full-screen slide drawer
- Feature grid: 1 col on mobile, 2 col on md, 3 col on lg
- Stat bar: 2×2 grid on mobile
- Testimonials: horizontal scroll snap (overflow-x: auto, scroll-snap-type: x mandatory)

---

## 8. Accessibility Checklist

- All interactive elements have `focus-visible:ring-2 ring-accent ring-offset-2`
- Color contrast: all text/bg pairs pass AA (checked against tokens above)
- All images have `alt` text; decorative images: `alt=""`
- `<motion.div>` wrappers check `prefers-reduced-motion` via Framer's `useReducedMotion()`
- Accordion uses `aria-expanded`, `aria-controls`, `role="region"` on panel
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>` (testimonials), `<footer>`

---

## 9. What NOT to Do

| ❌ Avoid                                | ✅ Instead                                    |
|----------------------------------------|----------------------------------------------|
| `rounded-[3rem]` on all cards          | `rounded-2xl` / `rounded-3xl` selectively   |
| Looping floating animations            | One-time scroll-triggered reveals            |
| Gradient text everywhere               | Gradient text ONLY on hero H1 accent word   |
| Glassmorphism (backdrop-filter heavy)  | Clean flat cards with subtle borders        |
| 3px bottom-border "sticker" buttons    | Standard pill buttons with shadow hover     |
| Fake logo images in trust bar          | Text-only marquee, honest and clean         |
| Dark mode as default                   | Light mode default, dark toggle in nav      |
| `text-8xl` body copy                   | Reserve max sizes for hero display only     |
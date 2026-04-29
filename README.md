# Accredian Enterprise Landing Page

A modern, production-ready marketing landing page for **Accredian's enterprise learning solutions**, built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Overview

This project is a fully responsive B2B landing page designed to capture enterprise leads for Accredian's corporate upskilling programs. It features a polished UI, animated interactions, a lead capture form with API integration, and a clean component architecture ready to scale.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | Inter (via `next/font/google`) |
| Routing / Links | Next.js `Link` |
| API | Next.js Route Handlers (`/api/leads`) |

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, Navbar, Footer
│   ├── page.tsx                # Home page — assembles all sections
│   ├── globals.css             # Global styles
│   └── api/
│       └── leads/
│           └── route.ts        # POST /api/leads — lead capture endpoint
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with scroll effect + mobile menu
│   │   └── Footer.tsx          # Footer with link columns and social icons
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with stats row
│   │   ├── Solution.tsx        # Solutions grid (6 feature cards)
│   │   ├── CTASection.tsx      # Contact section with lead capture form
│   │   └── TrustBanner.tsx     # Trusted-by logo ticker
│   │
│   ├── ui/
│   │   ├── Button.tsx          # Polymorphic button (renders as <button> or <Link>)
│   │   ├── SectionWrapper.tsx  # Consistent section padding + background variants
│   │   └── LeadCaptureForm.tsx # Controlled form with validation and submission states
│   │
│   └── lib/
│       └── constants.ts        # All site copy, nav links, solution data, stats
```

---

## Features

**Landing Page Sections**
- **Hero** — Headline, subheadline, dual CTAs, and an animated stats row (500+ partners, 50K+ trained, 95% satisfaction)
- **Solutions** — Responsive 3-column card grid showcasing 6 enterprise offerings (custom learning paths, analytics, AI-powered delivery, and more)
- **Trust Banner** — Logo strip featuring partner brands (Google, Microsoft, Infosys, etc.)
- **CTA / Contact** — Full lead capture form with benefits checklist

**UI & Interaction**
- Scroll-aware navbar with backdrop blur effect
- Mobile-responsive hamburger menu with animated open/close
- Hover lift + gradient reveal on solution cards
- Polymorphic `Button` component supporting 4 variants (`primary`, `secondary`, `outline`, `ghost`) and 3 sizes

**Lead Capture API**
- `POST /api/leads` validates name, email, and company; sanitizes input; logs the lead
- Form handles `idle`, `submitting`, `success`, and `error` states with inline feedback
- Ready for a real persistence layer — swap the `console.log` for your DB call

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git https://github.com/saifahmad01/accredian-clone
cd accredian-enterprise
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Configuration

All site copy and navigation data lives in a single file — no hunting through components:

```
components/lib/constants.ts
```

Update `SITE_CONFIG` for the site name, tagline, and URL. Edit `HERO_CONTENT` to change the headline, stats, and CTAs. Modify `SOLUTIONS` to add, remove, or reorder feature cards.

---

## Connecting a Database

The `/api/leads` route is pre-wired for persistence. Replace the placeholder comment with your preferred client:

```ts
// route.ts
// await db.leads.create({ data: lead });   ← Prisma example
// await supabase.from('leads').insert(lead) ← Supabase example
```

The validated `lead` object contains `name`, `email`, and `company` (trimmed and normalized).

---

## Customization

**Adding a new nav link** — add an entry to `NAV_LINKS` in `constants.ts`.

**Adding a new section** — create a component in `components/sections/`, wrap it in `<SectionWrapper>`, and import it in `app/page.tsx`.

**Changing the color theme** — the design uses Tailwind's `blue-600` / `indigo-600` as the primary palette. A global find-and-replace on those values will re-theme the entire site.

---

## SEO

Metadata is configured in `app/layout.tsx` using Next.js 14's `Metadata` API, including Open Graph and Twitter card tags. Update `SITE_CONFIG.url` and add an `opengraph-image` file to `app/` for full social previews.

---
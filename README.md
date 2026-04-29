# Accredian Enterprise Landing Page

A modern, production-ready B2B marketing landing page for Accredian's enterprise learning solutions, built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/saifahmad01/accredian-clone
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

No environment variables are required to run the project locally. When connecting a real database or email provider for lead capture, create a `.env.local` file:


## Approach Taken

The goal was to build a clean, scalable B2B landing page that is easy to maintain and extend. Here is how the project was structured:

**Component-driven architecture** — The UI is broken into small, single-responsibility components (`Button`, `SectionWrapper`, `LeadCaptureForm`) and composed into full page sections (`Hero`, `Solutions`, `CTASection`). This keeps each file focused and easy to reason about independently.

**Single source of truth for content** — All site copy, navigation links, solution cards, and stats live in `components/lib/constants.ts`. Updating the site's text never requires touching layout or UI components.

**Polymorphic Button component** — The `Button` component uses a TypeScript discriminated union to render as either a native `<button>` or a Next.js `<Link>` depending on whether an `href` prop is passed, keeping the API consistent across the entire codebase.

**API route for lead capture** — The form submits to a Next.js Route Handler at `POST /api/leads`. Input is validated and sanitized server-side before being persisted. The database layer is intentionally abstracted so any client (Prisma, Supabase, MongoDB) can be dropped in with minimal changes.

**Form state machine** — The lead capture form manages four explicit states (`idle`, `submitting`, `success`, `error`) using React's `useState`, making the user feedback flow predictable and straightforward to extend.

**Responsive-first design** — Layouts use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) throughout. The navbar collapses into an animated mobile menu, and section grids reflow from single-column on mobile to three-column on desktop.

---

## AI Usage Explanation

During this project, I used AI tools (specifically Claude and ChatGpt) mainly to speed up routine and repetitive tasks, not to make core decisions.

AI helped with generating some initial boilerplate code, like TypeScript interfaces, component prop types, and Tailwind class combinations. It was also useful for drafting early versions of UI copy, such as the hero section text, feature descriptions, and constants.

I relied on it occasionally to debug TypeScript issues, especially around more complex cases like the polymorphic Button component and handling readonly arrays in components like FooterColumn.

Additionally, I used it as a second pair of eyes for code review—catching small issues like missing key props, suggesting accessibility improvements (like adding aria-label), and helping maintain consistent naming.

That said, all major architectural decisions, component structure, styling, and final implementations were done and verified by me. AI was used strictly as a productivity tool, not as a substitute for engineering thinking or decision-making.

---

## Improvements I Would Make With More Time

**1. Persist leads to a real database**
The `/api/leads` route currently logs submissions to the console. I would integrate Prisma with PostgreSQL (or Supabase for faster setup) and add a transactional email via Resend or SendGrid so the sales team receives an alert on every new submission.

**2. Add a Testimonials section**
The navbar already links to `#testimonials` but the section is not yet built. I would add a carousel or grid of customer quotes with company logos and star ratings to complete the social proof story.

**3. Animated stat counters in the Hero**
The stats row renders static numbers. With a small `useCountUp` hook and an Intersection Observer, the numbers would animate upward when scrolled into view — a small detail that adds meaningful polish on B2B landing pages.

**4. Form validation with Zod**
Client-side validation is currently minimal. I would add a Zod schema shared between the frontend form and the API route to enforce consistent rules in both places and provide richer per-field error messages to the user.

**5. Analytics and conversion tracking**
There is no event tracking in place. I would integrate `next/third-parties` for Google Analytics and fire custom events on CTA clicks and form submissions so the marketing team can measure conversion rates and optimise the page.

**6. End-to-end and unit tests**
No tests are currently written. I would add Vitest for unit tests on utility functions and API validation logic, and Playwright for E2E tests covering the full lead form submission flow.

**7. CMS integration for content**
All copy currently lives in `constants.ts`, which requires a developer to make any text change. Integrating a headless CMS like Contentful or Sanity would let the marketing team update headlines, solution cards, and testimonials independently, without a deployment.
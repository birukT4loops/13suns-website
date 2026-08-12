# 13 Suns Tours — Next.js Site

A rebuild of the 13 Suns Tours WordPress site (`13suns.com`) as a modern Next.js 16 (App Router) application. Built from a full content/asset backup and crawl of the original WordPress install — see [Migration Source](#migration-source) below.

**This project stands entirely on its own — it does not read from, write to, or depend on the original WordPress installation at runtime.**

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — design tokens defined in `app/globals.css`
- **next/font** (Playfair Display for headings, Inter for body) — no external font requests
- **next/image** for all imagery — automatic responsive srcsets, no layout shift
- **Nodemailer** for the contact form's email delivery (see below)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values before deploying:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` — required for the contact form (`/contact-us`) to actually deliver email. Without these, the form still validates input correctly but returns a clear "not configured yet" error instead of a fake success — nothing is silently lost (submissions are logged server-side).
- `CONTACT_EMAIL_TO` — where contact form submissions are sent. Defaults to the address used by the original site's contact form.
- `NEXT_PUBLIC_SITE_URL` — used for canonical URLs, Open Graph tags, and `sitemap.xml`/`robots.txt`. Set to the real production domain before deploying.

## Project structure

```
app/
  page.tsx                 Home
  about-us/, contact-us/, faq/, visa-passport/,
  transportation/, accommodation/                One page each, static content
  [tour]/page.tsx           Shared template for all 14 tour/destination pages
                             (data-driven — see lib/tours.ts)
  api/contact/route.ts      Contact form submission handler
  sitemap.ts, robots.ts     Auto-generated SEO files

components/                 Reusable UI: Header, Footer, Hero, TourCard, Gallery,
                             FaqAccordion, Itinerary, TourFacts, ContactForm, etc.

lib/
  types.ts                  Shared TypeScript types
  tours.ts                  All 14 tour pages' content (title, facts, itinerary, gallery)
  pages.ts                  Content for Home/About/Contact/FAQ/Visa/Transportation/Accommodation
  nav.ts                    Primary navigation + footer link structure

public/images/
  tours/                    Original tour/destination photography (full resolution)
  site/                     Logo and trust badges
```

Adding a new tour page means adding one object to `lib/tours.ts` — no new route file needed, `app/[tour]/page.tsx` picks it up automatically via `generateStaticParams`.

## URL structure

Every URL from the original WordPress site is preserved exactly (e.g. `/about-us`, `/danakil-depression-with-lalibela`), **except** `/transportation-2` (a leftover WordPress slug for the "Accommodation" page, caused by the page being cloned from Transportation and never renamed). That content now lives at the correct `/accommodation`, with a permanent redirect configured in `next.config.ts` so any old bookmarks/links still work.

## What's intentionally different from the WordPress original

This was a redesign, not a 1:1 visual clone — see the project's migration documentation for the full rationale. In short: same content, navigation, contact info, and functionality; new visual design system, component structure, responsive behavior, and accessibility baseline (WCAG 2.1 AA, verified with axe-core — zero violations across all page types at time of writing).

## Migration source

Content and images were sourced from a complete backup and crawl of the original WordPress site, at `/home/fourloopstechnologies/13suns-migration-backup-2026-08-11/` on the machine this was built on. That backup's `migration-docs/` folder documents the original site's full page inventory, navigation structure, and known content quirks (e.g. a duplicated FAQ itinerary block that was excluded here as a content error, not real FAQ content).

# CLAUDE.md - The Natural Cat Litter

This file provides guidance to Claude Code when working with this codebase.

## Project Overview

**TheNaturalCatLitter.com** is a static marketing site promoting natural cat litter options. It serves as a satellite site for [Purrify.ca](https://purrify.ca), an activated carbon cat litter additive.

**Tech Stack:**
- SvelteKit 2 with Svelte 5
- TypeScript
- Tailwind CSS 3
- Static adapter (generates static HTML)

## Project Structure

```
src/
├── routes/              # Page routes
│   ├── +layout.svelte   # Main layout (Header, Footer)
│   ├── +layout.ts       # Layout config (prerender)
│   ├── +page.svelte     # Homepage
│   ├── benefits/        # Health benefits page
│   ├── guide/           # Buying guide page
│   ├── types/           # Litter types comparison
│   └── why-natural/     # Why choose natural litter
├── lib/
│   ├── components/
│   │   ├── layout/      # Header.svelte, Footer.svelte
│   │   └── seo/         # Schema.org components
│   └── utils/
│       └── purrify.ts   # UTM link generator for Purrify
├── app.css              # Global styles + Tailwind
└── app.html             # HTML template
static/
├── favicon.svg          # Site favicon
├── og-*.svg             # Open Graph images
├── robots.txt           # Robots configuration
└── sitemap.xml          # XML sitemap
```

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type check
```

## Key Patterns

### Purrify Links
Use the `purrifyLinks` utility for tracking:
```typescript
import { purrifyLinks } from '$lib/utils/purrify';
// Returns: https://purrify.ca/products?utm_source=thenaturalcatlitter&utm_medium=referral&utm_campaign=homepage-cta
purrifyLinks.products('homepage-cta')
```

### SEO Components
Each page includes structured data using components in `$lib/components/seo/`:
- `WebsiteSchema.svelte` - Organization/WebSite schema
- `FAQSchema.svelte` - FAQ page schema
- `ArticleSchema.svelte` - Article schema

### Styling
The site uses a custom color palette in Tailwind:
- `forest-*` - Green tones (primary)
- `earth-*` - Brown tones (text)
- `sand-*` - Beige tones (backgrounds)

Custom classes defined in `app.css`:
- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`, `.card-natural`
- `.section-heading`, `.section-subheading`

## Deployment

This is a static site built with `@sveltejs/adapter-static`. The `build/` directory contains the production-ready files.

Deploy to any static host:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## Content Guidelines

- All pages link to Purrify.ca using UTM-tracked links
- Focus on natural, chemical-free, eco-friendly messaging
- Target audience: eco-conscious cat owners

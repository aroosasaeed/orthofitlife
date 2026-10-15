# OrthofitLife

**Everyday Comfort. Better Support. Better Living.**

A production-quality, standalone website for **OrthofitLife** — a Pakistani orthopedic and ergonomic wellness brand combining commerce, education, and research-informed product discovery.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (85 static pages)
npm run start      # serve the production build
npm run lint       # ESLint (0 warnings/errors)
npm run typecheck  # tsc --noEmit
```

No backend is required — all product/content data is local sample data.

## What's inside

- 21 original sample products across 9 categories (neck, contour, lumbar, back, coccyx, knee, insoles, seats, ergonomic supports)
- 10 guides (blog), 5 research explainers with real DOI-verified sources, 5 problem→solution case studies
- Find Your Support quiz, "Your Day, Your Support" scroll story, A Day at the Desk hotspots, instant search (⌘K)
- localStorage cart + wishlist, promo codes (`ORTHO10`, `WELCOME5`), free-shipping threshold, compare page
- SEO: Metadata API, Open Graph, sitemap.xml, robots.txt, Product/FAQ/Article structured data, breadcrumbs

**Content integrity:** all ratings, reviews and statistics are clearly labelled demonstration data. Research articles cite real publications (Dunstan 2012, Biswas 2015, WHO 2020, Ren 2016, Landorf 2006, Lee 2021, Cochrane 2008). No medical claims — products are described by what they are *designed* to do.

## Architecture

- `app/` — App Router pages (server components first)
- `components/` — ui/ layout/ hero/ products/ discovery/ home/ research/ forms/ visuals/
- `lib/api/` — ProductRepository interface + mock implementation + factory (swap point)
- `lib/data/` — sample products, categories, personas, blog, research, case studies
- `lib/constants/` — site config, navigation, env-driven contact placeholders
- `lib/analytics/` — provider-agnostic track() event bus
- `store/` — cart, wishlist, toast contexts (client)
- `types/` — product.ts, content.ts — the data contracts

### Swapping the data layer

The UI imports only from `lib/api/index.ts`. To connect a real backend: implement `ProductRepository` against Shopify Storefront API / custom REST / GraphQL, return it from `getProductRepository()` for the new `NEXT_PUBLIC_DATA_SOURCE` value — no UI components change.

## Configuration

Copy `.env.example` → `.env.local` and fill in real values (site URL, contact details, social links, analytics IDs). Never commit `.env.local`.

## Made in Pakistan 🇵🇰

orthofitlife.com · © OrthofitLife

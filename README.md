# GeoEskort Landing Page

Production-ready SEO landing page for [geoeskort.com](https://geoeskort.com), built to rank for escort-related keywords in Georgia and redirect users to [kama.biz](https://kama.biz).

## Tech Stack

- Next.js 14 (App Router)
- TypeScript 5
- Tailwind CSS 3
- Static Site Generation (SSG)
- Deployed on Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
cp .env.example .env.local
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

### Lint

```bash
npm run lint
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_MAIN_SITE_URL` | Main site URL for CTAs and links | `https://kama.biz` |

## Project Structure

```
app/
  layout.tsx      # Root layout, metadata, fonts, JSON-LD
  page.tsx        # Main landing page
  sitemap.ts      # Auto-generated sitemap
  robots.ts       # robots.txt
  globals.css     # Global styles
components/
  Hero.tsx        # Hero section
  Cities.tsx      # City cards (Tbilisi, Batumi, Kutaisi)
  About.tsx       # About section with keywords
  CTAButton.tsx   # Reusable CTA button
  Footer.tsx      # Footer + CTA banner
lib/
  site.ts         # Site constants and city data
  structured-data.ts  # JSON-LD schema generators
public/
  og-image.jpg    # Open Graph image
```

## SEO Features

- Multilingual metadata (Georgian, Russian, English)
- hreflang alternate links
- JSON-LD structured data (WebSite, Organization, LocalBusiness ×3)
- Auto-generated `sitemap.xml` and `robots.txt`
- Open Graph and Twitter Card tags
- Canonical URL: `https://geoeskort.com`

## Deployment (Vercel)

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variable: `NEXT_PUBLIC_MAIN_SITE_URL=https://kama.biz`
4. Add custom domain: `geoeskort.com`
5. Deploy

The `vercel.json` file configures cache headers and `X-Robots-Tag: index, follow`.

## Verify After Deploy

- `https://geoeskort.com/sitemap.xml`
- `https://geoeskort.com/robots.txt`
- View page source for JSON-LD scripts and meta tags
- Test all CTA links point to `https://kama.biz`

## License

Private — GeoEskort.com

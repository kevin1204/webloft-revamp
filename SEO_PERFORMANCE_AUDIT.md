# SEO & Performance Audit — Webloft Studio
**Date:** May 9, 2026
**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · Deployed on Vercel

---

## Executive Summary

The site is built on a solid technical foundation and shows genuine SEO intent throughout — canonical tags, structured data, a dynamic sitemap, local landing pages, and Google Analytics are all in place. However, several implementation details undercut that effort: one critical image optimization setting effectively disables all Next.js image processing, five Google Font families add unnecessary load weight, a hardcoded canonical in the root layout can conflict with page-level canonicals, and multiple pieces of schema data contain inaccurate or placeholder content. These are fixable issues that, when addressed, could meaningfully improve Core Web Vitals scores and search visibility.

---

## 1. SEO Audit

### 1.1 Metadata

| Check | Status | Notes |
|---|---|---|
| `metadataBase` set | ✅ | Set to `https://webloftstudio.com` in root layout |
| Global title/description | ✅ | Present in root `layout.tsx` |
| Page-level title overrides | ✅ | Most pages export their own `metadata` |
| OpenGraph tags | ✅ | Configured globally + per key page |
| Twitter Card tags | ✅ | `summary_large_image` set across pages |
| Canonical URLs | ⚠️ | See critical issue below |
| Contact page metadata | ❌ | Contact page is `'use client'` with no `layout.tsx` — no metadata title/description will be exported |
| About page metadata depth | ⚠️ | Layout sets a title ("Toronto's premier web design company") that conflicts slightly with the page's copy ("Toronto + Remote") |

**Critical — Duplicate/Conflicting Canonical:**
The root `layout.tsx` has a hardcoded `<link rel="canonical" href="https://webloftstudio.com" />` inside the `<head>`. This renders the **homepage URL as the canonical on every single page** in the raw HTML, even though Next.js's `alternates.canonical` API also injects page-specific canonicals. Most crawlers will handle this gracefully, but it creates duplicate canonical tags in the HTML head and introduces unnecessary ambiguity. Every page except the homepage could have two conflicting canonical tags.

**Homepage title (page-level):**
`'Webloft Studio — Websites that convert'` is a clean brand-first title but contains no primary keyword. The global `layout.tsx` title is keyword-rich (`"Professional Web Design Services | Custom Websites | Webloft Studio"`), but the page-level export overrides it. The homepage — the most authoritative page — misses the keyword opportunity.

---

### 1.2 Structured Data (JSON-LD)

| Schema | Location | Status | Issues |
|---|---|---|---|
| `Organization` | `page.tsx` (homepage) | ✅ | Well-formed, includes `areaServed`, `hasOfferCatalog` |
| `Organization` + `Service` | `StructuredData.tsx` component | ⚠️ | Component exists but is **not imported anywhere** — it's dead code |
| `LocalBusiness` | `web-design-toronto/page.tsx` | ⚠️ | See issues below |
| `BlogPosting` | `BlogPostStructuredData.tsx` | ⚠️ | See issues below |
| `AggregateRating` | `web-design-toronto` | ⚠️ | See issues below |

**LocalBusiness Schema Problems (`/web-design-toronto`):**
- `streetAddress: "123 Bay Street"` — this appears to be a placeholder. The contact page shows `695 Talbot St` (London, ON). Fake addresses in `LocalBusiness` schema are a Google guideline violation and can result in the schema being ignored or penalized.
- `openingHours` lists Saturday hours — ensure this is accurate.
- `aggregateRating` claims `ratingValue: "4.9"` with `reviewCount: "47"` with no third-party source backing it up. Google increasingly ignores or discounts self-asserted ratings with no verifiable review source (e.g., Google Business Profile, Trustpilot). This carries E-E-A-T risk.
- `sameAs` links include Facebook and Twitter handles — verify these accounts actually exist.

**BlogPosting Schema Problems (`BlogPostStructuredData.tsx`):**
- `wordCount` is calculated as `Math.ceil(description.length * 2.5)` — this derives word count from the meta description, not the actual article content. This is inaccurate and could mislead crawlers.
- `dateModified` is hardcoded to equal `datePublished` — if articles are ever updated, this won't reflect that.
- `author` is set to the Organization (`"Webloft Studio"`), not a `Person`. Google prefers `Person` authors for `BlogPosting` articles for E-E-A-T signals.

**Testimonial Schema (`TestimonialStructuredData.tsx`):**
- The testimonials on `/web-design-toronto` use a name `"Sergio Amigon"` with company `"TechStart Solutions"` while the shown project is `"Amigo Contracting Services"`. The company name doesn't match the client's actual business — this inconsistency could raise trust flags.

---

### 1.3 Sitemap

The sitemap is dynamically generated via `src/app/sitemap.ts` and registered in `robots.txt`. Good.

**Missing from sitemap:**
- `/template-based-websites` — page and layout exist, not in sitemap
- `/demo/*` pages — these exist but are not blocked in `robots.txt` either (see §1.5)
- `/services/landing-pages` — needs to be verified against service page slugs list
- `/services/lead-capture-automation` — same check needed
- `/services/conversion-rate-optimization` — present as a layout.tsx; confirm it's in `servicePageSlugs`

**`lastModified: new Date()` on every entry:**
Every URL in the sitemap always has today's date as its `lastModified`. This means Googlebot sees every page as "modified today" on every crawl. This can reduce the signal value of `lastModified` and cause unnecessary re-crawling of unchanged pages. Use static dates or dates tied to actual content changes.

**`/case-study` vs `/case-studies/*`:**
Both exist. `/case-study` (singular) is in the sitemap alongside `/case-studies/aeries`, etc. If `/case-study` is a landing page and `/case-studies/*` are detail pages, they need strong internal linking. If `/case-study` is outdated, it risks cannibalizing the individual case study pages.

---

### 1.4 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://webloftstudio.com/sitemap.xml
```

Clean and correct. One recommendation:

**`/demo/*` pages are fully crawlable.** The demo pages (`/demo/dental-pro`, `/demo/smile-pro`, `/demo/startup-venture`, `/demo/roofing-pro/*`) are thin template showcase pages with content that doesn't represent the real business. If Google indexes these, it may interpret them as low-quality or duplicate content. Consider adding `Disallow: /demo/` to robots.txt.

---

### 1.5 Local SEO

**Strengths:**
- Three dedicated local landing pages: `/web-design-toronto`, `/web-design-london-ontario`, `/web-design-mississauga`
- Local Business schema on the Toronto page
- Location-specific copy and service mentions

**Gaps:**
- The physical address used in schema (`123 Bay Street`) doesn't match the contact page (`695 Talbot St, London`). For local SEO, **NAP consistency** (Name, Address, Phone) across the site and all directories is critical. Pick one accurate address and use it everywhere.
- The London Ontario and Mississauga pages should ideally also have `LocalBusiness` schema with their respective location data.
- No Google Business Profile link or explicit citation strategy is visible in the code.

---

### 1.6 Blog & Content

**Strengths:**
- 6 blog posts with well-structured metadata (title, description, keywords, canonical, OG, Twitter Card)
- Each post exports proper `metadata` via `getBlogPostMetadata()`
- Blog images exist and are correctly referenced
- `BlogPosting` structured data is applied per post

**Gaps:**
- The blog newsletter form on `/blog` has no `onSubmit` handler, no API endpoint, and no action — it is **completely non-functional**. Submitting it does nothing. This is a broken UX element that could hurt credibility.
- Blog content is managed as a static TypeScript array (`BLOG_POSTS` in `blog-posts.ts`) — there's no CMS, so adding new posts requires code deployments. This limits editorial velocity.
- Only 6 posts exist. For competitive web design/SEO keywords in Toronto, regular content publication is important. This is a content strategy note, not a code issue.

---

## 2. Performance Audit

### 2.1 Images — Critical Issue

**`unoptimized: true` in `next.config.mjs`:**

```js
images: {
  formats: ['image/webp', 'image/avif'],
  unoptimized: true, // Disable optimization for static export
},
```

This single setting **completely disables** Next.js image optimization. Despite using the `<Image>` component throughout the site, no automatic:
- WebP/AVIF conversion
- Responsive sizing
- Quality compression
- Lazy loading optimization from the Next.js image pipeline

...is happening. The comment says "for static export" but `vercel.json` confirms deployment to Vercel as a Next.js app (not static export — there's no `output: 'export'` in `next.config.mjs`). This setting is unnecessary and actively harmful to performance.

**Raw image sizes being served unoptimized:**

| File | Size | Notes |
|---|---|---|
| `PROJECTS/LILAHART.png` | **4.2 MB** | Served as-is |
| `kevin4.png` | **4.1 MB** | Served as-is |
| `PROJECTS/AMIGO CONTRACTING SERVICES.png` | **3.5 MB** | Spaces in filename |
| `PROJECTS/SPORTLINK.png` | **2.7 MB** | Served as-is |
| `PROJECTS/AERIES.png` | **1.8 MB** | Served as-is |
| `gallery/sportlink1-min.png` | **1.9 MB** | Named "min" but still ~2MB |
| `gallery/amigo-contracting-1-min.png` | **1.6 MB** | Hero image, loaded with `priority` |
| `blog/blog-04-mistakes.jpg` | **556 KB** | Uncompressed |

The hero section's primary image (`amigo-contracting-1-min.png` at 1.6 MB, served full-size with `priority`) directly impacts **Largest Contentful Paint (LCP)** — the most important Core Web Vitals metric.

**Filename issue:** `"AMIGO CONTRACTING SERVICES.png"` contains spaces. While browsers handle this, spaces in filenames can cause issues with some caching layers and CDN configurations. Use hyphens instead.

---

### 2.2 Font Loading

Five Google Font families are loaded simultaneously:

```js
Geist, Geist_Mono, Space_Grotesk, Instrument_Serif, JetBrains_Mono
```

Each font family requires one or more network requests. While Next.js font optimization (`next/font/google`) handles self-hosting and subsetting, **five separate font families** still:
- Increase the total bytes of font assets downloaded
- Risk **Cumulative Layout Shift (CLS)** if fallbacks don't match closely
- Add to Total Blocking Time if loading is not carefully managed

The site visually uses monospace fonts for UI labels, a display serif for accents, and sans-serif for body. Evaluate whether all 5 are distinct enough from each other to justify the weight. Geist and Geist Mono may overlap significantly with Space Grotesk and JetBrains Mono in practice.

---

### 2.3 JavaScript Overhead

**Client Components on every page:**
- `CustomCursor` — renders on every page, continuously tracks mouse position on mousemove. This runs a JS event listener at all times.
- `RevealObserver` — Intersection Observer for scroll animations. Relatively lightweight.
- `ServiceWorkerRegistration` — good for caching, but includes a `controllerchange` listener that calls `window.location.reload()`. If the service worker updates while a user is mid-form, this will force a page reload and lose their data.
- `ParticleTextAnimation` (on `/web-design-toronto`) — Canvas-based particle animation. These are among the most expensive visual effects for **Total Blocking Time (TBT)** and can cause jank on lower-end mobile devices.

**HeroSection and ServicesSection are `'use client'`:**
Both key above-the-fold components are client components. This means they are not server-rendered for the initial HTML response — the content is hydrated client-side. The `HeroSection` especially, being the primary LCP candidate, would benefit from being a Server Component (or at minimum, ensuring the LCP image starts loading immediately via `priority`). The `priority` prop is already set on the hero image, which is good.

---

### 2.4 Service Worker

The service worker (`/public/sw.js`) caches static assets and implements a cache-first strategy. This is good for repeat visits.

**Issues:**
- The service worker caches `/favicon-16x16.png`, `/favicon-32x32.png`, `/favicon-192x192.png`, `/favicon-512x512.png` in `STATIC_ASSETS` — but these files **don't exist** in `public/`. Only `wflogo.svg`, `favicon.ico`, and `apple-touch-icon.png` are present. The service worker's `install` event will fail silently or cause partial caching failures.
- `window.location.reload()` on `controllerchange` (in `ServiceWorkerRegistration.tsx`) is aggressive. If the SW updates mid-session, it force-reloads the page. For a contact form page, this is a UX problem — it would wipe the user's form input.

---

### 2.5 Security Headers

Configured in `vercel.json`:

| Header | Status |
|---|---|
| `X-Content-Type-Options: nosniff` | ✅ |
| `X-Frame-Options: DENY` | ✅ |
| `X-XSS-Protection: 1; mode=block` | ✅ |
| `Referrer-Policy` | ❌ Missing |
| `Permissions-Policy` | ❌ Missing |
| `Strict-Transport-Security` | ❌ Missing (Vercel adds HSTS automatically, but explicit is better) |
| `Content-Security-Policy` | ❌ Missing |

`X-XSS-Protection` is deprecated in modern browsers and can actually introduce vulnerabilities in some edge cases (it's no longer recommended by OWASP). The protection it offered is now handled by CSP.

---

## 3. Prioritized Recommendations

### Priority 1 — Critical (Immediate Impact)

**P1-A: Remove `unoptimized: true` from `next.config.mjs`**
This is the single highest-impact change. Removing this line re-enables automatic WebP/AVIF conversion, responsive sizing, and compression for every `<Image>` component. It will dramatically reduce image payload across the site and improve LCP scores. The comment referencing "static export" does not apply — the site runs on Vercel as a standard Next.js app.

**P1-B: Remove the hardcoded canonical from root `layout.tsx`**
Delete the `<link rel="canonical" href="https://webloftstudio.com" />` from the `<head>` in root layout. The `alternates.canonical` in each page/layout's exported `metadata` object handles this correctly through the Next.js API. The hardcoded tag creates duplicate canonicals on every non-homepage page.

**P1-C: Add metadata to the Contact page**
Create a `src/app/contact/layout.tsx` that exports proper `metadata` (title, description, canonical). The current contact page is `'use client'` and cannot export metadata directly, so a layout wrapper is the correct solution.

**P1-D: Fix the fake/inaccurate address in LocalBusiness schema**
Replace `"123 Bay Street"` with the real business address (or remove the `streetAddress` field if the business is remote-first). NAP inconsistency across the site (`695 Talbot St` on contact page vs `123 Bay Street` in schema) is a local SEO penalty risk.

---

### Priority 2 — High (SEO Impact)

**P2-A: Compress and convert project images to WebP**
The unoptimized gallery PNGs (up to 4.2 MB each) should be converted to WebP manually and resized to their actual display dimensions before upload. Even after re-enabling image optimization, excessively large source files slow down optimization and increase storage. Target under 200 KB per image at 2x display size.

**P2-B: Update homepage page.tsx title to include primary keyword**
Change from `'Webloft Studio — Websites that convert'` to something like `'Custom Web Design for Service Businesses | Webloft Studio'`. The homepage is the most authoritative page and losing keyword targeting there is a missed opportunity.

**P2-C: Add `Disallow: /demo/` to robots.txt**
The demo pages are thin template showcases not representative of the business. Blocking them prevents potential thin content dilution in the index.

**P2-D: Add `/template-based-websites` to the sitemap**
This page has a layout.tsx and content but is missing from `sitemap.ts`.

**P2-E: Fix `lastModified` in sitemap.ts**
Replace `new Date()` (always today's date) with static dates or dates derived from actual content last-modified timestamps. This makes the sitemap signal meaningful to Googlebot.

---

### Priority 3 — Medium (Quality & Trust)

**P3-A: Fix the BlogPosting structured data**
- Replace estimated `wordCount` with an accurate value (count the actual words in the article sections).
- Change `author` from `Organization` to `Person` (add author name) for better E-E-A-T.
- Update `dateModified` when content is actually updated.

**P3-B: Fix or remove the non-functional newsletter form**
The newsletter subscription form on `/blog` has no handler and does nothing when submitted. Either wire it up to an email service (Mailchimp, ConvertKit, Resend, etc.) or remove it. A broken form damages credibility.

**P3-C: Fix the blog testimonial data inconsistency**
On `/web-design-toronto`, `"Sergio Amigon"` is listed under `"TechStart Solutions"` but their project is `"Amigo Contracting Services"`. Align the testimonial name, company, and project consistently.

**P3-D: Verify `sameAs` social profiles in LocalBusiness schema**
The schema lists LinkedIn, Twitter, Facebook, and Instagram. Confirm all four of these accounts exist and are active. Broken or non-existent `sameAs` references reduce schema quality.

**P3-E: Remove `StructuredData.tsx` or use it**
The `StructuredData` component is never imported or used anywhere in the app. It's dead code. Either integrate it where appropriate or remove it.

---

### Priority 4 — Performance Polish

**P4-A: Audit Google Font usage — reduce to 3 families**
Evaluate whether all five font families are visibly distinct in the final design. Consider dropping one of the two monospace fonts (Geist Mono vs JetBrains Mono) and one of the sans-serif options (Geist vs Space Grotesk). Fewer font files = faster Time to First Byte and less CLS risk.

**P4-B: Fix service worker static asset list**
The SW tries to cache `favicon-16x16.png`, `favicon-32x32.png`, `favicon-192x192.png`, and `favicon-512x512.png` — none of which exist in `public/`. Update `STATIC_ASSETS` in `sw.js` to only list files that actually exist, or the install step will fail.

**P4-C: Reconsider the `controllerchange` reload in ServiceWorkerRegistration**
`window.location.reload()` on service worker update is disruptive, especially on the multi-step contact form. Consider displaying a "New version available — click to refresh" toast instead of auto-reloading.

**P4-D: Add missing security headers**
Add `Referrer-Policy: strict-origin-when-cross-origin` and `Permissions-Policy` to `vercel.json`. Consider a `Content-Security-Policy` if feasible given the inline scripts used (Google Analytics, Turnstile, structured data).

**P4-E: Rename image files with spaces**
`"AMIGO CONTRACTING SERVICES.png"` should be renamed to `amigo-contracting-services.png`. Spaces in filenames are URL-encoded as `%20` and can cause issues with CDNs and caching layers.

---

## 4. What's Working Well

Before closing, these things are genuinely solid:

- **Next.js App Router architecture** — correct use of layout files for metadata inheritance, server components where sensible
- **GA4 integration** — loaded with `afterInteractive` strategy (no blocking), custom event tracking functions for forms, CTAs, and blog reads are well thought out
- **Canonical URL structure** — the `generateCanonicalUrl()` utility and per-page `alternates.canonical` pattern is clean
- **robots.txt** — simple, correct, and includes the sitemap URL
- **Cloudflare Turnstile on the contact form** — proper bot protection without reCAPTCHA UX friction
- **Honeypot field** on the contact form — additional spam protection layer
- **Local landing page strategy** — Toronto, London Ontario, and Mississauga pages targeting geo-specific keywords is the right approach for a local agency
- **Blog post metadata** — title, description, OG, Twitter card, and canonical all properly set per article via the utility function
- **`priority` on hero images** — correctly tells the browser to preload the LCP image

---

*Audit performed via static code analysis of the repository. Actual Lighthouse/Core Web Vitals scores should be measured against the live production URL at `https://webloftstudio.com` using PageSpeed Insights or Chrome DevTools for real-world performance numbers.*

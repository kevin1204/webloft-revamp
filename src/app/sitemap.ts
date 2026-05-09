import { MetadataRoute } from 'next'
import { servicePageSlugs } from '@/lib/service-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webloftstudio.com'

  return [
    // ── Core pages ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/free-website-audit`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web-design-pricing-guide`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/high-converting-websites`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/template-based-websites`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // ── Legal ────────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // ── Blog ─────────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/web-design-services-toronto-ontario`,
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/why-webflow-best-platform-small-medium-businesses`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/real-roi-great-website-investment-not-expense`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/seo-local-seo-secret-getting-found-online`,
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/5-common-website-mistakes-costing-clients`,
      lastModified: new Date('2025-01-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-often-update-website-why-matters`,
      lastModified: new Date('2025-01-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // ── Service pages ─────────────────────────────────────────────────────────
    ...servicePageSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // ── Local SEO pages ───────────────────────────────────────────────────────
    {
      url: `${baseUrl}/web-design-toronto`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-design-london-ontario`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-design-mississauga`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-design-toronto/webflow-development`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Case studies ──────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/case-studies/aeries`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/amigo-contracting-services`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/flowga-yoga-studio`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/lila-hart`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/sportlink-events`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

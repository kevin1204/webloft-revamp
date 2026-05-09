'use client';

import Link from 'next/link';
import { SERVICE_PAGES, type ServicePageData } from '@/lib/service-pages';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function buildSchema(service: ServicePageData) {
  const url = `https://webloftstudio.com/services/${service.slug}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDescription,
      url,
      serviceType: service.title,
      provider: {
        '@type': 'Organization',
        name: 'Webloft Studio',
        url: 'https://webloftstudio.com',
      },
      areaServed: [
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} deliverables`,
        itemListElement: service.includes.map((item, index) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.text,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Services',
          item: 'https://webloftstudio.com/services',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: service.title,
          item: url,
        },
      ],
    },
  ];
}

export default function ServicePage({ service }: { service: ServicePageData }) {
  const relatedServices = service.related.map((slug) => SERVICE_PAGES.find((item) => item.slug === slug)).filter(Boolean) as ServicePageData[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(service)) }}
      />

      <main className="wl-service-page">
        <section className="wl-service-hero">
          <div className="ds-container">
            <div className="wl-service-meta reveal">
              <div className="eyebrow">
                <span className="dot" />
                {service.eyebrow}
              </div>
              <div className="wl-service-index">({service.number}) - Services</div>
            </div>

            <div className="wl-service-hero-grid">
              <div className="reveal">
                <h1 className="h-display wl-service-title">
                  {service.heroTitle}{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                    {service.heroAccent}
                  </span>
                </h1>
                <p className="body-lg wl-service-summary">{service.summary}</p>
                <div className="wl-service-actions">
                  <Link href="/contact" className="ds-btn ds-btn-primary">
                    Start a project <ArrowIcon />
                  </Link>
                  <Link href="/projects" className="ds-btn ds-btn-ghost">
                    View work <ArrowIcon />
                  </Link>
                </div>
              </div>

              <aside className="wl-service-panel reveal" aria-label={`${service.title} snapshot`}>
                <div className="wl-service-panel-head">
                  <span>{service.number}</span>
                  <span>{service.shortTitle}</span>
                </div>
                <div className="wl-service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="wl-service-snapshot">
                  {service.snapshot.map((item) => (
                    <div key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="wl-service-section wl-service-intro">
          <div className="ds-container">
            <div className="wl-service-copy-grid">
              <div className="wl-service-section-kicker reveal">Why it matters</div>
              <div className="wl-service-long-copy reveal">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wl-service-section">
          <div className="ds-container">
            <div className="wl-service-section-head reveal">
              <div>
                <div className="eyebrow">
                  <span className="dot" />
                  What is included
                </div>
                <h2 className="h-2">
                  Practical work with a clear{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                    business purpose.
                  </span>
                </h2>
              </div>
              <p className="body-lg">
                Each deliverable is shaped around the same goal: make the website easier to understand, easier to trust, and easier to act on.
              </p>
            </div>

            <div className="wl-service-card-grid">
              {service.includes.map((item, index) => (
                <article className="wl-service-card ds-card reveal" key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wl-service-section wl-service-process">
          <div className="ds-container">
            <div className="wl-service-process-layout">
              <div className="reveal">
                <div className="eyebrow">
                  <span className="dot" />
                  Process
                </div>
                <h2 className="h-2">
                  A focused path from strategy to{' '}
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                    launch.
                  </span>
                </h2>
              </div>

              <div className="wl-service-steps">
                {service.process.map((step, index) => (
                  <article className="wl-service-step reveal" key={step.title}>
                    <div>{String(index + 1).padStart(2, '0')}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wl-service-section">
          <div className="ds-container">
            <div className="wl-service-proof reveal">
              <div>
                <div className="eyebrow">
                  <span className="dot" />
                  Outcomes
                </div>
                <h2 className="h-2">{service.proof.title}</h2>
                <p className="body-lg">{service.proof.text}</p>
              </div>
              <ul>
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="wl-service-section wl-service-faq-section">
          <div className="ds-container">
            <div className="wl-service-faq-grid">
              <div className="reveal">
                <div className="eyebrow">
                  <span className="dot" />
                  Common questions
                </div>
                <h2 className="h-2">
                  Answers before we start.
                </h2>
              </div>
              <div className="wl-service-faqs">
                {service.faqs.map((faq) => (
                  <article className="wl-service-faq reveal" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wl-service-section wl-service-related-section">
          <div className="ds-container">
            <div className="wl-service-related-head reveal">
              <div className="eyebrow">
                <span className="dot" />
                Related services
              </div>
              <Link href="/services" className="ds-btn ds-btn-ghost">
                All services <ArrowIcon />
              </Link>
            </div>
            <div className="wl-service-related-grid">
              {relatedServices.map((related) => (
                <Link href={`/services/${related.slug}`} className="wl-service-related-card ds-card reveal" key={related.slug}>
                  <span>{related.number}</span>
                  <h3>{related.title}</h3>
                  <p>{related.summary}</p>
                  <div>
                    Explore service <ArrowIcon />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="wl-service-cta-section">
          <div className="ds-container">
            <div className="wl-service-cta reveal">
              <p className="eyebrow">Ready when you are</p>
              <h2 className="h-2">Need this service on your website?</h2>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Start a project <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .wl-service-page {
          background: var(--bg);
          color: var(--ink);
          overflow-x: clip;
        }

        .wl-service-hero {
          padding: clamp(112px, 12vw, 180px) 0 clamp(72px, 9vw, 128px);
          border-bottom: 1px solid var(--line);
          background:
            linear-gradient(180deg, color-mix(in oklch, var(--accent), transparent 96%), transparent 48%),
            var(--bg);
        }

        .wl-service-meta,
        .wl-service-section-head,
        .wl-service-related-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .wl-service-index,
        .wl-service-section-kicker,
        .wl-service-panel-head,
        .wl-service-card span,
        .wl-service-step > div,
        .wl-service-related-card span {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .wl-service-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
          gap: clamp(40px, 7vw, 112px);
          align-items: end;
          margin-top: clamp(56px, 7vw, 96px);
        }

        .wl-service-title {
          max-width: 1030px;
          font-size: clamp(48px, 8vw, 132px);
        }

        .wl-service-summary {
          max-width: 720px;
          margin: clamp(32px, 4vw, 52px) 0 0;
        }

        .wl-service-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .wl-service-panel {
          position: relative;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          background: linear-gradient(145deg, var(--bg-elev-2), var(--bg-elev));
          padding: clamp(22px, 3vw, 32px);
          overflow: hidden;
          isolation: isolate;
        }

        .wl-service-panel::before {
          content: "";
          position: absolute;
          inset: -1px;
          background:
            linear-gradient(135deg, color-mix(in oklch, var(--accent), transparent 75%), transparent 34%),
            radial-gradient(circle at 78% 18%, color-mix(in oklch, var(--accent), transparent 82%), transparent 34%);
          opacity: 0.42;
          z-index: -1;
        }

        .wl-service-panel-head {
          display: flex;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .wl-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 34px;
        }

        .wl-service-tags span {
          border: 1px solid color-mix(in oklch, var(--accent), var(--line-strong) 60%);
          border-radius: 999px;
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          padding: 7px 10px;
          text-transform: uppercase;
        }

        .wl-service-snapshot {
          display: grid;
          gap: 18px;
        }

        .wl-service-snapshot div {
          border-top: 1px solid var(--line);
          padding-top: 16px;
        }

        .wl-service-snapshot span {
          display: block;
          color: var(--ink-mute);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .wl-service-snapshot strong {
          color: var(--ink);
          display: block;
          font-family: var(--font-display);
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.08;
        }

        .wl-service-section {
          padding: clamp(76px, 9vw, 132px) 0;
          border-bottom: 1px solid var(--line);
          background: var(--bg);
        }

        .wl-service-intro,
        .wl-service-process,
        .wl-service-related-section {
          background: var(--bg-elev);
        }

        .wl-service-copy-grid,
        .wl-service-process-layout,
        .wl-service-faq-grid {
          display: grid;
          grid-template-columns: minmax(180px, 0.42fr) minmax(0, 1fr);
          gap: clamp(36px, 7vw, 112px);
        }

        .wl-service-long-copy {
          display: grid;
          gap: 24px;
          max-width: 900px;
        }

        .wl-service-long-copy p {
          color: var(--ink-dim);
          font-size: clamp(20px, 2.1vw, 34px);
          letter-spacing: -0.025em;
          line-height: 1.28;
          margin: 0;
        }

        .wl-service-section-head {
          margin-bottom: clamp(40px, 5vw, 72px);
        }

        .wl-service-section-head .h-2 {
          margin-top: 22px;
          max-width: 780px;
        }

        .wl-service-section-head .body-lg {
          max-width: 440px;
          margin: 34px 0 0;
        }

        .wl-service-card-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .wl-service-card {
          min-height: 310px;
          padding: clamp(22px, 2.4vw, 30px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .wl-service-card:hover {
          background: var(--bg-elev-2);
          border-color: color-mix(in oklch, var(--accent), var(--line-strong) 55%);
          transform: translateY(-6px);
        }

        .wl-service-card h3,
        .wl-service-step h3,
        .wl-service-faq h3,
        .wl-service-related-card h3 {
          color: var(--ink);
          font-family: var(--font-display);
          font-size: clamp(22px, 2.1vw, 30px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0;
        }

        .wl-service-card p,
        .wl-service-step p,
        .wl-service-faq p,
        .wl-service-related-card p {
          color: var(--ink-dim);
          font-size: 15px;
          line-height: 1.6;
          margin: 18px 0 0;
        }

        .wl-service-steps {
          border-top: 1px solid var(--line);
        }

        .wl-service-step {
          display: grid;
          grid-template-columns: 80px minmax(180px, 0.36fr) minmax(0, 1fr);
          gap: clamp(18px, 4vw, 56px);
          padding: clamp(26px, 4vw, 44px) 0;
          border-bottom: 1px solid var(--line);
        }

        .wl-service-step p {
          margin: 0;
          max-width: 620px;
        }

        .wl-service-proof {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 480px);
          gap: clamp(36px, 7vw, 112px);
          align-items: end;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          background: var(--bg-elev);
          padding: clamp(28px, 5vw, 64px);
        }

        .wl-service-proof .h-2 {
          margin: 22px 0 24px;
          max-width: 800px;
        }

        .wl-service-proof ul {
          display: grid;
          gap: 14px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .wl-service-proof li {
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          line-height: 1.4;
          padding: 12px 14px;
          text-transform: uppercase;
        }

        .wl-service-faqs {
          border-top: 1px solid var(--line);
        }

        .wl-service-faq {
          padding: clamp(24px, 3vw, 36px) 0;
          border-bottom: 1px solid var(--line);
        }

        .wl-service-faq h3 {
          font-size: clamp(20px, 2vw, 28px);
        }

        .wl-service-faq p {
          max-width: 760px;
        }

        .wl-service-related-head {
          align-items: center;
          margin-bottom: 34px;
        }

        .wl-service-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .wl-service-related-card {
          display: flex;
          min-height: 280px;
          flex-direction: column;
          padding: clamp(22px, 2.4vw, 30px);
          text-decoration: none;
        }

        .wl-service-related-card h3 {
          margin-top: auto;
        }

        .wl-service-related-card div {
          align-items: center;
          color: var(--accent);
          display: flex;
          font-family: var(--font-mono);
          font-size: 12px;
          gap: 10px;
          letter-spacing: 0.08em;
          margin-top: 26px;
          text-transform: uppercase;
        }

        .wl-service-related-card:hover {
          background: var(--bg-elev-2);
          border-color: color-mix(in oklch, var(--accent), var(--line-strong) 55%);
          transform: translateY(-5px);
        }

        .wl-service-related-card:hover .ds-arrow {
          transform: translate(3px, -3px);
        }

        .wl-service-cta-section {
          background: var(--bg);
          padding: clamp(76px, 9vw, 132px) 0;
        }

        .wl-service-cta {
          align-items: center;
          background: var(--accent);
          border-radius: var(--r-lg);
          color: var(--accent-ink);
          display: grid;
          gap: 24px;
          grid-template-columns: 1fr auto;
          padding: clamp(28px, 5vw, 64px);
        }

        .wl-service-cta .eyebrow,
        .wl-service-cta .h-2 {
          color: var(--accent-ink);
        }

        .wl-service-cta .eyebrow {
          grid-column: 1 / -1;
          opacity: 0.76;
        }

        .wl-service-cta .h-2 {
          max-width: 760px;
        }

        .wl-service-cta .ds-btn-primary {
          background: var(--accent-ink);
          border-color: var(--accent-ink);
          color: var(--accent);
        }

        .wl-service-cta .ds-btn-primary:hover {
          background: transparent;
          color: var(--accent-ink);
        }

        @media (max-width: 1100px) {
          .wl-service-hero-grid,
          .wl-service-proof {
            grid-template-columns: 1fr;
          }

          .wl-service-panel {
            max-width: 680px;
          }

          .wl-service-card-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wl-service-related-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 820px) {
          .wl-service-meta,
          .wl-service-section-head,
          .wl-service-related-head {
            flex-direction: column;
          }

          .wl-service-copy-grid,
          .wl-service-process-layout,
          .wl-service-faq-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .wl-service-section-head .body-lg {
            margin-top: 0;
          }

          .wl-service-step {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .wl-service-step p {
            margin-top: 4px;
          }

          .wl-service-cta {
            grid-template-columns: 1fr;
          }

          .wl-service-cta .ds-btn {
            width: fit-content;
          }
        }

        @media (max-width: 620px) {
          .wl-service-hero {
            padding-top: 96px;
          }

          .wl-service-title {
            font-size: clamp(44px, 14vw, 68px);
            line-height: 0.95;
          }

          .wl-service-actions,
          .wl-service-actions .ds-btn,
          .wl-service-cta .ds-btn {
            width: 100%;
          }

          .wl-service-actions .ds-btn,
          .wl-service-cta .ds-btn {
            justify-content: center;
          }

          .wl-service-card-grid {
            grid-template-columns: 1fr;
          }

          .wl-service-card {
            min-height: 250px;
          }

          .wl-service-proof li {
            border-radius: var(--r-md);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wl-service-card,
          .wl-service-related-card,
          .wl-service-card:hover,
          .wl-service-related-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

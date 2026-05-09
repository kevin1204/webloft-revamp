import Link from 'next/link';

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 4 }}>
      <path d="M2 7.5L5.5 11L12 3" stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="square" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const TIERS = [
  {
    name: 'Launch',
    price: '$3,400',
    sub: 'One-page landing site',
    bullets: [
      'Custom design',
      'Single landing page',
      'Lead form + automated alerts',
      'GA4 + tracking',
      'On-page SEO',
      '21-day delivery',
    ],
    cta: 'Start with Launch',
    featured: false,
  },
  {
    name: 'Studio',
    price: '$6,800',
    sub: 'Full website, 5–8 pages',
    bullets: [
      'Everything in Launch',
      '5–8 page site + CMS',
      'Custom design system',
      'Premium photography direction',
      'Schema + technical SEO',
      'Optional AI chatbot',
      '30-day delivery',
    ],
    cta: 'Start with Studio',
    featured: true,
  },
  {
    name: 'Atelier',
    price: 'From $14,000',
    sub: 'Custom build, no ceiling',
    bullets: [
      'Bespoke scope',
      'Animation & motion design',
      'Multi-location / multi-language',
      'Bookings, payments, dashboards',
      'Conversion strategy retainer',
      'Senior-led, end-to-end',
    ],
    cta: 'Talk to us',
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section
      style={{
        background: 'var(--bg-elev)',
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
      }}
    >
      <div className="ds-container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 56,
          }}
        >
          <div className="eyebrow">
            <span className="dot" />
            Pricing
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--ink-mute)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            (09) — Investment
          </div>
        </div>

        <div
          className="pricing-intro-grid"
          style={{
            marginBottom: 80,
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 48,
            alignItems: 'end',
          }}
        >
          <h2 className="h-1 reveal">
            Fixed scopes. <br />
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              No surprise
            </span>{' '}
            invoices.
          </h2>
          <p className="body-lg reveal pricing-intro-copy" style={{ maxWidth: 440, justifySelf: 'end' }}>
            Three starting points — pick the one closest to where you are, and we&apos;ll shape
            the rest on the discovery call.
          </p>
        </div>

        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--line)',
          }}
        >
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className="reveal"
              style={{
                borderRight: i < TIERS.length - 1 ? '1px solid var(--line)' : 'none',
                borderBottom: '1px solid var(--line)',
                padding: t.featured ? 48 : 40,
                background: t.featured ? 'var(--bg-elev-2)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                minHeight: 540,
              }}
            >
              {t.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    padding: '6px 12px',
                    borderRadius: 99,
                    background: 'var(--accent)',
                    color: 'var(--accent-ink)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most popular
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                }}
              >
                {t.name}
              </div>
              <div className="body-sm" style={{ marginTop: 4 }}>
                {t.sub}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px, 4vw, 64px)',
                  letterSpacing: '-0.03em',
                  marginTop: 32,
                  lineHeight: 1,
                  color: 'var(--ink)',
                }}
              >
                {t.price}
              </div>
              <div className="hairline" style={{ margin: '32px 0' }} />
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                {t.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      fontSize: 14,
                      color: 'var(--ink-dim)',
                    }}
                  >
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`ds-btn ${t.featured ? 'ds-btn-primary' : 'ds-btn-ghost'}`}
                style={{ marginTop: 'auto', justifyContent: 'center' }}
              >
                {t.cta} <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

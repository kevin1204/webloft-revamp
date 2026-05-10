import Link from 'next/link';

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 3 }}>
      <path
        d="M2 7.5L5.5 11L12 3"
        stroke="var(--accent)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="square"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ds-arrow"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H4.5M11 3V9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

const TIERS = [
  {
    name: 'Starter',
    tag: null,
    monthlyPrice: '$199',
    monthlyCurrency: 'CAD',
    monthlyPer: '/ month',
    monthlySub: 'hosting, maintenance & updates included',
    setupPrice: '$899 CAD',
    setupSub: 'one-time setup fee',
    tagline: 'A clean, professional presence for businesses that need to show up online — nothing complicated, nothing extra.',
    bullets: [
      '1 to 3 page website',
      'Custom design, fully mobile responsive',
      'Basic contact form & on-page SEO',
      'SSL, hosting & basic maintenance',
      'Small text and image updates included',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Growth',
    tag: 'Most popular',
    monthlyPrice: '$399',
    monthlyCurrency: 'CAD',
    monthlyPer: '/ month',
    monthlySub: 'billed monthly, cancel anytime',
    setupPrice: 'from $1,299 CAD',
    setupSub: 'one-time setup fee',
    tagline: 'For businesses ready to capture leads, rank locally, and stop losing customers to competitors.',
    bullets: [
      'Everything in Starter, plus:',
      'Up to 6 pages with service detail pages',
      'Lead capture form + CRM integration',
      'Automated follow-up emails to new leads',
      'Local SEO, Analytics & Search Console setup',
      'Monthly performance report',
    ],
    cta: 'Get started',
    featured: true,
  },
  {
    name: 'Ultra',
    tag: null,
    monthlyPrice: '$899',
    monthlyCurrency: 'CAD',
    monthlyPer: '/ month',
    monthlySub: 'billed monthly, cancel anytime',
    setupPrice: 'from $1,499 CAD',
    setupSub: 'one-time setup fee',
    tagline: 'A full digital growth system — website, automation, AI, and SEO working together. Ads management available as a separate add-on.',
    bullets: [
      'Everything in Growth, plus:',
      'AI chatbot (questions & bookings)',
      'Missed-call text-back automation',
      '2 SEO blog posts per month',
      'Advanced CRM workflows & automations',
      'Monthly strategy call & priority support',
    ],
    cta: 'Get started',
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
      <style>{`
        .home-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }
        .home-pricing-intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 64px;
        }
        @media (max-width: 960px) {
          .home-pricing-grid {
            grid-template-columns: 1fr;
          }
          .home-pricing-intro-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }
          .home-pricing-intro-copy {
            justify-self: start !important;
          }
        }
      `}</style>

      <div className="ds-container">
        {/* Header row */}
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

        {/* Intro */}
        <div className="home-pricing-intro-grid">
          <h2 className="h-1 reveal">
            Simple pricing.{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              No surprises.
            </span>
          </h2>
          <p
            className="body-lg reveal home-pricing-intro-copy"
            style={{ maxWidth: 440, justifySelf: 'end' }}
          >
            Choose the plan that fits your business. No hidden fees, no
            lock-in contracts.
          </p>
        </div>

        {/* Cards */}
        <div className="home-pricing-grid">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="reveal"
              style={{
                border: t.featured
                  ? '1px solid color-mix(in oklch, var(--accent), transparent 50%)'
                  : '1px solid var(--line)',
                borderRadius: 'var(--r-lg)',
                background: t.featured
                  ? 'color-mix(in oklch, var(--bg-elev-2), color-mix(in oklch, var(--accent), transparent 92%) 30%)'
                  : 'var(--bg-elev)',
                padding: 'clamp(28px, 3vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Tag */}
              {t.tag && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 99,
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--accent)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t.tag}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  marginBottom: !t.tag ? 22 : 6,
                }}
              >
                {t.name}
              </div>

              {/* Monthly price — PRIMARY */}
              <div style={{ marginBottom: 16 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 4,
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(38px, 4vw, 52px)',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      color: 'var(--ink)',
                    }}
                  >
                    {t.monthlyPrice}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--ink-mute)',
                    }}
                  >
                    {t.monthlyCurrency}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--ink-dim)',
                    marginTop: 2,
                  }}
                >
                  {t.monthlyPer}
                </div>
                <div className="body-sm" style={{ color: 'var(--ink-mute)', marginTop: 3 }}>
                  {t.monthlySub}
                </div>
              </div>

              {/* Setup fee — SECONDARY */}
              <div
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  gap: 1,
                  alignSelf: 'flex-start',
                  padding: '8px 12px',
                  borderRadius: 6,
                  background: 'color-mix(in oklch, var(--line), transparent 20%)',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t.setupPrice}
                </span>
                <span className="body-sm" style={{ color: 'var(--ink-mute)' }}>
                  {t.setupSub}
                </span>
              </div>

              {/* Tagline */}
              <div
                className="body-sm"
                style={{
                  color: 'var(--ink-mute)',
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                {t.tagline}
              </div>

              <div className="hairline" style={{ marginBottom: 20 }} />

              {/* Feature bullets */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {t.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: 14,
                      color: 'var(--ink-dim)',
                    }}
                  >
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`ds-btn ${t.featured ? 'ds-btn-primary' : 'ds-btn-ghost'}`}
                style={{
                  marginTop: 28,
                  justifyContent: 'center',
                  ...(t.featured
                    ? { boxShadow: '0 0 24px color-mix(in oklch, var(--accent), transparent 55%)' }
                    : {}),
                }}
              >
                {t.cta} <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Build note */}
        <div
          className="reveal"
          style={{
            marginTop: 20,
            border: '1px dashed color-mix(in oklch, var(--line-strong), transparent 30%)',
            borderRadius: 'var(--r-lg)',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              Custom Build
            </span>
            <span
              className="body-sm"
              style={{ color: 'var(--ink-mute)', marginLeft: 16 }}
            >
              From $2,000 CAD · one-time · you own everything outright.
            </span>
          </div>
          <Link href="/contact" className="ds-btn ds-btn-ghost">
            Let&apos;s talk <ArrowIcon />
          </Link>
        </div>

        {/* See full pricing page */}
        <div
          className="reveal"
          style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}
        >
          <Link href="/pricing" className="ds-btn ds-btn-ghost">
            See full pricing &amp; plan details <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';

// ─── Micro-components ──────────────────────────────────────────────────────────

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

function GoogleIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function MetaIcon({ width = 36, height = 24 }: { width?: number; height?: number }) {
  return (
    <span
      aria-label="Meta"
      role="img"
      style={{
        width,
        height,
        display: 'block',
        flexShrink: 0,
        backgroundImage: 'url("/meta-platforms-logo.svg")',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
      }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--ink-mute)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: 'var(--line)', margin: '28px 0' }} />;
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span
            style={{
              color: 'var(--accent)',
              flexShrink: 0,
              lineHeight: '1.65',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
            }}
          >
            ✓
          </span>
          <span className="body-sm" style={{ color: 'var(--ink-dim)' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function DashList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span
            style={{
              color: 'var(--ink-mute)',
              flexShrink: 0,
              lineHeight: '1.65',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
            }}
          >
            —
          </span>
          <span className="body-sm" style={{ color: 'var(--ink-dim)' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ─── FAQ accordion ─────────────────────────────────────────────────────────────

const PRICING_FAQ = [
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes. You can move from Starter to Growth or Ultra at any time. We adjust your billing and scope from the following month.',
  },
  {
    q: 'Is there a contract or minimum commitment?',
    a: 'No long-term contracts. Monthly plans run month to month. We ask for 30 days notice to cancel.',
  },
  {
    q: 'What happens if I cancel my monthly plan?',
    a: 'Your website stays live until the end of your billing period. After that, we can transfer your files or keep things running on a reduced care plan. We will always work out a clean handoff.',
  },
  {
    q: 'Do you work with businesses outside London, Ontario?',
    a: 'Yes. We work with clients across Canada remotely. All communication happens via video call, email, and our project portal.',
  },
  {
    q: 'What if I am not sure which plan is right for me?',
    a: 'Fill out the short form on our contact page and tell us what you need. We will recommend the right fit before you commit to anything.',
  },
];

function FAQItem({
  item,
  index,
}: {
  item: (typeof PRICING_FAQ)[0];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--ink)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            letterSpacing: '-0.01em',
            fontWeight: 500,
            color: 'var(--ink)',
            textAlign: 'left',
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            width: 32,
            height: 32,
            flexShrink: 0,
            border: '1px solid var(--line-strong)',
            borderRadius: 99,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s var(--ease), color 0.3s var(--ease), transform 0.3s var(--ease)',
            background: open ? 'var(--accent)' : 'transparent',
            color: open ? 'var(--accent-ink)' : 'var(--ink)',
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 300 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s var(--ease), padding 0.5s var(--ease)',
          paddingBottom: open ? 24 : 0,
        }}
      >
        <p className="body-md" style={{ color: 'var(--ink-dim)', maxWidth: 680, margin: 0 }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────────

const MONTHLY_REASONS = [
  'No large upfront investment required',
  'Hosting, SSL, security & maintenance all included',
  'Regular updates and improvements, month after month',
  "We're your ongoing partner — not a one-time contractor",
  'Upgrade, downgrade, or cancel with 30 days notice',
];

const ONETIME_REASONS = [
  'We connect the website to your domain and hosting provider before handoff',
  'Fixed scope — clear timeline, no surprise invoices',
  'Launched as a working website with clear handoff documentation',
  'Ideal if you have an internal team for future updates',
  'No ongoing fees to us after project completion',
];

const STARTER_FEATURES = [
  '1 to 3 page website',
  'Up to 5 to 7 sections per page',
  'Custom design, fully mobile responsive',
  'Basic contact form',
  'Phone, email, and social media links',
  'Google Maps embed',
  'Basic on-page SEO (page title, meta description, image alt text)',
  'SSL certificate included',
  'Fast loading and performance optimized',
  'Hosting included',
  'Basic maintenance',
  'Small text and image updates included',
];

const GROWTH_FEATURES = [
  'Everything in Starter, plus:',
  'Up to 6 pages (Home, About, Services, Service detail page, Contact, Blog or News section optional)',
  'Service detail pages',
  'Blog or news section (optional setup)',
  'Lead capture form',
  'CRM integration — every lead logged automatically',
  'Automated follow-up emails to new leads',
  'Local SEO foundation',
  'Google Analytics setup',
  'Google Search Console setup',
  'Monthly performance report',
  'Priority maintenance and support',
  'Small content updates included monthly',
];

const ULTRA_FEATURES = [
  'Everything in Growth, plus:',
  'AI chatbot (questions & bookings)',
  'Missed-call text-back automation',
  '2 SEO blog posts per month',
  'Advanced CRM workflows & automations',
  'Priority support',
  'Advanced lead nurturing (email & SMS)',
  'Competitor tracking',
  'Monthly strategy call',
];

const CUSTOM_REASONS = [
  'You want full ownership while still having launch, domain, and hosting setup handled properly',
  'Your project has a larger or custom scope beyond our standard packages',
  'You already have someone to handle updates and maintenance after handoff',
  'You prefer a one-time investment over a monthly plan',
];

// ─── Shared card container style ───────────────────────────────────────────────

const card: React.CSSProperties = {
  border: '1px solid var(--line)',
  borderRadius: 'var(--r-lg)',
  background: 'var(--bg-elev)',
  padding: 'clamp(28px, 3vw, 44px)',
  display: 'flex',
  flexDirection: 'column',
};

const priceLarge: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(30px, 2.8vw, 42px)',
  fontWeight: 700,
  letterSpacing: '-0.03em',
  color: 'var(--ink)',
  lineHeight: 1.1,
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* ════════════════════════════════════════
          3A — Page header
      ════════════════════════════════════════ */}
      <section className="page-header-section">
        <div className="ds-container">
          <div
            className="reveal"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 64,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div className="eyebrow">
              <span className="dot" />
              Plans &amp; Pricing
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
              (05) — Pricing
            </div>
          </div>

          <h1
            className="h-display"
            style={{ fontSize: 'clamp(56px, 8vw, 144px)', margin: 0 }}
          >
            <span style={{ display: 'block' }}>Simple, transparent</span>
            <span
              className="italic-serif"
              style={{ display: 'block', color: 'var(--accent)' }}
            >
              pricing.
            </span>
          </h1>

          <p className="body-lg" style={{ marginTop: 48, maxWidth: 560 }}>
            Choose the plan that fits your business. No hidden fees, no lock-in
            contracts, no surprises.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          Value model — Two ways to work with us
      ════════════════════════════════════════ */}
      <section
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 'var(--section-y)',
          paddingBottom: 'var(--section-y)',
        }}
      >
        <div className="ds-container">

          {/* Section header */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 64,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div className="eyebrow">
              <span className="dot" />
              Two ways to work with us
            </div>
            <p className="body-sm" style={{ color: 'var(--ink-mute)', margin: 0 }}>
              Not sure which fits? We&apos;ll help you decide — no pressure.
            </p>
          </div>

          {/* Two-column layout: left = dark card, right = open with dashed border */}
          <div className="pricing-models-grid">

            {/* ── LEFT: Monthly subscription (filled card) ── */}
            <div
              className="reveal"
              style={{
                background: 'color-mix(in oklch, var(--bg-elev-2), color-mix(in oklch, var(--accent), transparent 90%) 28%)',
                border: '1px solid color-mix(in oklch, var(--accent), transparent 65%)',
                borderRadius: 'var(--r-lg)',
                padding: 'clamp(36px, 4vw, 52px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tag pill */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '5px 14px',
                  borderRadius: 99,
                  background: 'color-mix(in oklch, var(--accent), transparent 84%)',
                  border: '1px solid color-mix(in oklch, var(--accent), transparent 62%)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 32,
                }}
              >
                Subscription — Our Primary Offer
              </div>

              {/* Headline */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(26px, 2.8vw, 42px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  margin: '0 0 20px',
                  lineHeight: 1.1,
                }}
              >
                We handle everything.{' '}
                <span
                  className="italic-serif"
                  style={{ color: 'var(--accent)', fontWeight: 400 }}
                >
                  You focus on your business.
                </span>
              </h3>

              {/* Body */}
              <p
                className="body-md"
                style={{
                  color: 'var(--ink-dim)',
                  lineHeight: 1.8,
                  margin: '0 0 36px',
                }}
              >
                Think of it like leasing a car. Lower barrier to entry, no massive
                upfront cost — and the car is always maintained. We host your website,
                keep it secure, update it regularly, and improve it over time. You
                never have to think about it. Your site runs. Leads come in. You work.
              </p>

              {/* Circle-check bullets */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                {MONTHLY_REASONS.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 99,
                        border: '1.5px solid color-mix(in oklch, var(--accent), transparent 45%)',
                        background: 'color-mix(in oklch, var(--accent), transparent 83%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="var(--accent)"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="body-sm" style={{ color: 'var(--ink-dim)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 24,
                  borderTop: '1px solid color-mix(in oklch, var(--accent), transparent 78%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                  }}
                >
                  Starter · Growth · Ultra
                </span>
                <a
                  href="#subscription-plans"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                  }}
                >
                  See plans below →
                </a>
              </div>
            </div>

            {/* ── RIGHT: Custom Build (open layout, dashed left border) ── */}
            <div
              className="reveal pricing-models-right"
              style={{
                borderLeft: '1px dashed color-mix(in oklch, var(--line-strong), transparent 35%)',
                paddingLeft: 'clamp(32px, 4vw, 52px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Tag pill */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '5px 14px',
                  borderRadius: 99,
                  background: 'color-mix(in oklch, var(--line), transparent 10%)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  marginBottom: 32,
                }}
              >
                Custom Build — One-Time Project
              </div>

              {/* Headline */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(26px, 2.8vw, 42px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  margin: '0 0 20px',
                  lineHeight: 1.1,
                }}
              >
                You own it outright.{' '}
                <span
                  className="italic-serif"
                  style={{ color: 'var(--ink-mute)', fontWeight: 400 }}
                >
                  We hand it off clean.
                </span>
              </h3>

              {/* Body */}
              <p
                className="body-md"
                style={{
                  color: 'var(--ink-dim)',
                  lineHeight: 1.8,
                  margin: '0 0 36px',
                }}
              >
                Think of it like buying a car. One investment, full ownership. We
                scope, design, build, and launch your site as a working website.
                We connect it to your domain and hosting provider of choice, or
                guide you toward the right setup if you are not sure what to use.
                The code, domain, and hosting stay yours.
              </p>

              {/* Dot bullets */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                {ONETIME_REASONS.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 99,
                        background: 'var(--ink-mute)',
                        flexShrink: 0,
                        marginTop: 9,
                      }}
                    />
                    <span className="body-md" style={{ color: 'var(--ink-dim)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer — inline mono */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 24,
                  borderTop: '1px solid var(--line)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                    lineHeight: 1.8,
                  }}
                >
                  Custom Build — From $2,000 CAD.{' '}
                  <Link
                    href="/contact"
                    style={{
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--line-strong)',
                      paddingBottom: 1,
                      transition: 'color 0.25s var(--ease), border-color 0.25s var(--ease)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--ink)';
                      e.currentTarget.style.borderColor = 'var(--line-strong)';
                    }}
                  >
                    Contact for a quote
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3B — Subscription pricing cards
      ════════════════════════════════════════ */}
      <section
        id="subscription-plans"
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 'var(--section-y)',
          paddingBottom: 'var(--section-y)',
        }}
      >
        <div className="ds-container">

          {/* Section heading */}
          <div className="reveal" style={{ marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot" />
              Subscription Plans
            </div>
            <h2 className="h-2" style={{ margin: 0, maxWidth: 560 }}>
              Pick your plan.{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                We do the rest.
              </span>
            </h2>
          </div>

          {/* ── Three subscription cards ── */}
          <div className="pricing-grid">

            {/* ── STARTER ── */}
            <div style={card} className="reveal">
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  marginBottom: 16,
                }}
              >
                Starter
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  color: 'var(--ink-mute)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                For businesses that need a clean, professional online presence —
                nothing complicated, nothing extra.
              </p>

              <Divider />

              {/* Monthly first */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, lineHeight: 1 }}>
                  <span style={priceLarge}>$199</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: 'var(--ink-mute)' }}>
                    CAD
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ink-dim)', marginTop: 4 }}>
                  / month
                </div>
                <div className="body-sm" style={{ color: 'var(--ink-mute)', marginTop: 3 }}>
                  hosting, maintenance & updates included
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    gap: 1,
                    marginTop: 14,
                    padding: '8px 12px',
                    borderRadius: 6,
                    background: 'color-mix(in oklch, var(--line), transparent 20%)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    $899 CAD
                  </span>
                  <span className="body-sm" style={{ color: 'var(--ink-mute)' }}>one-time setup fee</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: 32 }}
              >
                Get started <ArrowIcon />
              </Link>

              <SectionLabel>What&apos;s included:</SectionLabel>
              <FeatureList items={STARTER_FEATURES} />
              <Divider />
              <SectionLabel>Perfect for:</SectionLabel>
              <p className="body-sm" style={{ color: 'var(--ink-dim)', margin: 0 }}>
                Local businesses, trades, solo professionals, restaurants, and
                service providers who want a strong web presence without the complexity.
              </p>
            </div>

            {/* ── GROWTH ── */}
            <div
              style={{
                ...card,
                border: '1px solid color-mix(in oklch, var(--accent), transparent 50%)',
              }}
              className="reveal"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
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
                    fontSize: 11,
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most popular
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  marginBottom: 10,
                }}
              >
                Growth
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  color: 'var(--ink-mute)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                For businesses ready to grow their online presence, capture
                leads, and show up in local search.
              </p>

              <Divider />

              {/* Monthly first */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, lineHeight: 1 }}>
                  <span style={priceLarge}>$399</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: 'var(--ink-mute)' }}>
                    CAD
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ink-dim)', marginTop: 4 }}>
                  / month · billed monthly
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    gap: 1,
                    marginTop: 14,
                    padding: '8px 12px',
                    borderRadius: 6,
                    background: 'color-mix(in oklch, var(--line), transparent 20%)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    from $1,299 CAD
                  </span>
                  <span className="body-sm" style={{ color: 'var(--ink-mute)' }}>one-time setup fee</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginBottom: 32,
                  boxShadow: '0 0 28px color-mix(in oklch, var(--accent), transparent 52%)',
                }}
              >
                Get started <ArrowIcon />
              </Link>

              <SectionLabel>What&apos;s included:</SectionLabel>
              <FeatureList items={GROWTH_FEATURES} />
              <Divider />
              <SectionLabel>Perfect for:</SectionLabel>
              <p className="body-sm" style={{ color: 'var(--ink-dim)', margin: 0 }}>
                Established local businesses, contractors, clinics, and service
                companies that want to rank locally, capture more leads, and stop
                losing customers to competitors.
              </p>
            </div>

            {/* ── ULTRA ── */}
            <div style={card} className="reveal">
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  marginBottom: 16,
                }}
              >
                Ultra
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  color: 'var(--ink-mute)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                For business owners who want a full growth system — website,
                automation, SEO, and paid ads all working together.
              </p>

              <Divider />

              {/* Monthly first */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, lineHeight: 1 }}>
                  <span style={priceLarge}>$899</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: 'var(--ink-mute)' }}>
                    CAD
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ink-dim)', marginTop: 4 }}>
                  / month · billed monthly
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    gap: 1,
                    marginTop: 14,
                    padding: '8px 12px',
                    borderRadius: 6,
                    background: 'color-mix(in oklch, var(--line), transparent 20%)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    from $1,499 CAD
                  </span>
                  <span className="body-sm" style={{ color: 'var(--ink-mute)' }}>one-time setup fee</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: 32 }}
              >
                Get started <ArrowIcon />
              </Link>

              <SectionLabel>What&apos;s included:</SectionLabel>
              <FeatureList items={ULTRA_FEATURES} />

              {/* Ads — not included, available as add-on */}
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  marginTop: 12,
                  padding: '10px 14px',
                  borderRadius: 6,
                  background: 'color-mix(in oklch, var(--line), transparent 20%)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--ink-mute)',
                    lineHeight: 1.65,
                    flexShrink: 0,
                  }}
                >
                  ✕
                </span>
                <span className="body-sm" style={{ color: 'var(--ink-mute)' }}>
                  Google & Meta ads management — available as add-on below
                </span>
              </div>

              <Divider />
              <SectionLabel>Perfect for:</SectionLabel>
              <p className="body-sm" style={{ color: 'var(--ink-dim)', margin: 0 }}>
                Business owners who want predictable, consistent lead flow and a
                complete digital system that runs while they focus on the work.
              </p>
            </div>
          </div>

          {/* ── CUSTOM BUILD ── */}
          <div
            className="reveal pricing-custom"
            style={{
              marginTop: 24,
              border: '1px dashed color-mix(in oklch, var(--line-strong), transparent 30%)',
              borderRadius: 'var(--r-lg)',
              background: 'var(--bg-elev)',
              padding: 'clamp(28px, 3vw, 48px)',
            }}
          >
            <div className="pricing-custom-inner">
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                    marginBottom: 10,
                  }}
                >
                  Custom Build
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                    color: 'var(--ink-mute)',
                    margin: 0,
                    lineHeight: 1.6,
                    maxWidth: 400,
                  }}
                >
                  For businesses that want to own the website outright, or need a
                  custom scope beyond our standard plans, without being left to
                  figure out launch, hosting, or domain setup alone.
                </p>

                <Divider />

                <div style={{ marginBottom: 28 }}>
                  <div style={priceLarge}>From $2,000 CAD</div>
                  <div className="body-sm" style={{ color: 'var(--ink-mute)', marginTop: 4 }}>
                    one-time project fee
                  </div>
                  <div className="body-sm" style={{ color: 'var(--ink-mute)', marginTop: 4 }}>
                    We connect it to your domain and hosting provider of choice.
                  </div>
                  <div className="body-sm" style={{ color: 'var(--ink-mute)', marginTop: 4 }}>
                    Need guidance? We can recommend the right setup before launch.
                  </div>
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 22px',
                    borderRadius: 999,
                    border: '1px solid var(--accent)',
                    background: 'transparent',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'background 0.3s var(--ease)',
                    marginBottom: 20,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'color-mix(in oklch, var(--accent), transparent 88%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Let&apos;s talk <ArrowIcon />
                </Link>

                <p
                  className="body-sm"
                  style={{ color: 'var(--ink-mute)', margin: 0, maxWidth: 380 }}
                >
                  Every custom project is scoped individually. We review your
                  needs and send a clear proposal — no pressure, no generic quotes.
                </p>
              </div>

              <div>
                <SectionLabel>This option is right for you if:</SectionLabel>
                <DashList items={CUSTOM_REASONS} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          Ads Management Add-ons
      ════════════════════════════════════════ */}
      <section
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 'var(--section-y)',
          paddingBottom: 'var(--section-y)',
        }}
      >
        <div className="ds-container">

          {/* Header */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 56,
              flexWrap: 'wrap',
              gap: 32,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot" />
                Ads Management
              </div>
              <h2 className="h-2" style={{ margin: 0, maxWidth: 440 }}>
                Performance ads,{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  managed for you.
                </span>
              </h2>
            </div>
            <p
              className="body-md"
              style={{ color: 'var(--ink-dim)', maxWidth: 360, margin: 0 }}
            >
              Available to any client on any plan. Ad spend is billed separately
              by Google or Meta — our fee covers strategy, setup, and
              optimization only.
            </p>
          </div>

          {/* Two platform cards */}
          <div className="ads-platform-grid reveal">

            {/* ── Google Ads ── */}
            <div
              className="ads-platform-card"
              style={{
                border: '1px solid rgba(66,133,244,0.4)',
                borderRadius: 'var(--r-lg)',
                background: 'rgba(66,133,244,0.04)',
                boxShadow: '0 0 32px rgba(66,133,244,0.12)',
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(28px, 3vw, 40px)',
                transition: 'transform 0.25s var(--ease), box-shadow 0.25s var(--ease)',
              }}
            >
              {/* Badge row + logo */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 12px',
                    borderRadius: 99,
                    background: 'rgba(66,133,244,0.1)',
                    border: '1px solid rgba(66,133,244,0.28)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#4285f4',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: '#4285f4', flexShrink: 0, display: 'inline-block' }} />
                  Google Ads
                </div>
                <GoogleIcon size={36} />
              </div>

              {/* FROM label + MASSIVE price */}
              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                    display: 'block',
                    marginBottom: 4,
                  }}
                >
                  from
                </span>
                <div style={{ lineHeight: 0.9 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(68px, 9vw, 96px)',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      color: 'var(--ink)',
                    }}
                  >
                    $600
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    color: 'var(--ink-dim)',
                    marginTop: 10,
                  }}
                >
                  CAD / month · management only
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(66,133,244,0.15)', margin: '24px 0' }} />

              {/* Title + subtitle */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 4,
                }}
              >
                Google Ads management
              </div>
              <div className="body-sm" style={{ color: 'var(--ink-mute)', marginBottom: 24 }}>
                Search campaigns · local service ads
              </div>

              {/* Features */}
              <FeatureList
                items={[
                  '1 active campaign',
                  'Keyword research + negative keywords',
                  'Ad copy creation + A/B testing',
                  'Bid optimization',
                  'Monthly performance report',
                ]}
              />

              <div style={{ flex: 1, minHeight: 24 }} />
              <div style={{ height: 1, background: 'var(--line)', margin: '24px 0 16px' }} />
              <p className="body-sm" style={{ color: 'var(--ink-mute)', margin: 0 }}>
                Ad spend billed separately by Google · Min. $500/mo recommended
              </p>
            </div>

            {/* ── Meta Ads ── */}
            <div
              className="ads-platform-card"
              style={{
                border: '1px solid rgba(139,92,246,0.4)',
                borderRadius: 'var(--r-lg)',
                background: 'rgba(139,92,246,0.04)',
                boxShadow: '0 0 32px rgba(139,92,246,0.12)',
                display: 'flex',
                flexDirection: 'column',
                padding: 'clamp(28px, 3vw, 40px)',
                transition: 'transform 0.25s var(--ease), box-shadow 0.25s var(--ease)',
              }}
            >
              {/* Badge row + logo */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 12px',
                    borderRadius: 99,
                    background: 'rgba(139,92,246,0.1)',
                    border: '1px solid rgba(139,92,246,0.28)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8b5cf6',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8b5cf6', flexShrink: 0, display: 'inline-block' }} />
                  Meta Ads
                </div>
                <MetaIcon />
              </div>

              {/* FROM label + MASSIVE price */}
              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                    display: 'block',
                    marginBottom: 4,
                  }}
                >
                  from
                </span>
                <div style={{ lineHeight: 0.9 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(68px, 9vw, 96px)',
                      fontWeight: 700,
                      letterSpacing: '-0.04em',
                      color: 'var(--ink)',
                    }}
                  >
                    $600
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    color: 'var(--ink-dim)',
                    marginTop: 10,
                  }}
                >
                  CAD / month · management only
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(139,92,246,0.15)', margin: '24px 0' }} />

              {/* Title + subtitle */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 4,
                }}
              >
                Meta Ads management
              </div>
              <div className="body-sm" style={{ color: 'var(--ink-mute)', marginBottom: 24 }}>
                Facebook + Instagram campaigns
              </div>

              {/* Features */}
              <FeatureList
                items={[
                  '1 active campaign',
                  'Audience targeting + retargeting',
                  'Ad creative direction',
                  'Bid optimization',
                  'Monthly performance report',
                ]}
              />

              <div style={{ flex: 1, minHeight: 24 }} />
              <div style={{ height: 1, background: 'var(--line)', margin: '24px 0 16px' }} />
              <p className="body-sm" style={{ color: 'var(--ink-mute)', margin: 0 }}>
                Ad spend billed separately by Meta · Min. $500/mo recommended
              </p>
            </div>
          </div>

          {/* ── Both platforms bundle ── */}
          <div
            className="reveal ads-bundle-card"
            style={{
              marginTop: 16,
              border: '1px solid color-mix(in oklch, var(--accent), transparent 45%)',
              borderRadius: 'var(--r-lg)',
              background: 'color-mix(in oklch, var(--bg-elev), color-mix(in oklch, var(--accent), transparent 88%) 40%)',
              boxShadow: '0 0 40px color-mix(in oklch, var(--accent), transparent 80%)',
              padding: 'clamp(28px, 3vw, 44px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 40,
              flexWrap: 'wrap',
            }}
          >
            {/* Left */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '5px 12px',
                  borderRadius: 99,
                  background: 'color-mix(in oklch, var(--accent), transparent 82%)',
                  border: '1px solid color-mix(in oklch, var(--accent), transparent 55%)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: 99, background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                Save $200/mo · Best value
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.2vw, 30px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  marginBottom: 8,
                }}
              >
                Both platforms bundle
              </div>
              <p className="body-sm" style={{ color: 'var(--ink-mute)', margin: 0, maxWidth: 420 }}>
                Google Ads + Meta Ads — 1 campaign each · best for businesses wanting full paid coverage
              </p>
            </div>

            {/* Right — price */}
            <div style={{ flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                  display: 'block',
                  marginBottom: 4,
                }}
              >
                from
              </span>
              <div style={{ lineHeight: 0.9 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(60px, 8vw, 88px)',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    color: 'var(--ink)',
                  }}
                >
                  $999
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 500,
                    color: 'var(--ink-mute)',
                    letterSpacing: '-0.01em',
                    marginLeft: 6,
                  }}
                >
                  /mo
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  color: 'var(--ink-mute)',
                  marginTop: 8,
                  textDecoration: 'line-through',
                }}
              >
                $1,200 separately
              </div>
            </div>
          </div>

          {/* ── Setup fee note ── */}
          <div
            className="reveal"
            style={{
              marginTop: 12,
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              padding: '14px 20px',
              borderRadius: 8,
              border: '1px dashed color-mix(in oklch, var(--line-strong), transparent 40%)',
            }}
          >
            {/* Info icon */}
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: 99,
                border: '1.5px solid var(--ink-mute)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 1,
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--ink-mute)',
                lineHeight: 1,
              }}
            >
              i
            </span>
            <p className="body-sm" style={{ color: 'var(--ink-mute)', margin: 0 }}>
              <strong style={{ color: 'var(--ink-dim)', fontWeight: 600 }}>
                $350 CAD one-time setup fee per platform
              </strong>{' '}
              — includes account build, pixel installation, and conversion tracking setup.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3C — FAQ
      ════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: 'var(--section-y)',
          paddingBottom: 'var(--section-y)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="ds-container">
          <div
            className="reveal"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 56,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div className="eyebrow">
              <span className="dot" />
              Common questions
            </div>
          </div>

          <div
            className="reveal"
            style={{ borderTop: '1px solid var(--line)', maxWidth: 800 }}
          >
            {PRICING_FAQ.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3D — Final CTA
      ════════════════════════════════════════ */}
      <section
        style={{
          borderTop: '1px solid var(--line)',
          paddingBottom: 'var(--section-y)',
        }}
      >
        <div className="ds-container">
          <div
            className="reveal pricing-cta-strip"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 40,
              padding: 'clamp(36px, 4vw, 52px) clamp(32px, 4vw, 56px)',
              background: 'color-mix(in oklch, var(--bg-elev), color-mix(in oklch, var(--accent), transparent 88%) 40%)',
              border: '1px solid color-mix(in oklch, var(--accent), transparent 75%)',
              borderRadius: 'var(--r-lg)',
              marginTop: 'var(--section-y)',
            }}
          >
            {/* Left */}
            <div style={{ flexShrink: 0 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                <span className="dot" />
                Let&apos;s talk
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 2.4vw, 36px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Not sure where{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)', fontWeight: 400 }}>
                  to start?
                </span>
              </h2>
            </div>

            {/* Right */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 32,
                flexWrap: 'wrap',
              }}
            >
              <p
                className="body-md"
                style={{
                  color: 'var(--ink-dim)',
                  margin: 0,
                  maxWidth: 320,
                  lineHeight: 1.65,
                }}
              >
                Tell us about your business and we&apos;ll recommend the right
                plan — no pressure, no pitch.
              </p>
              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
                style={{ flexShrink: 0 }}
              >
                Start a project <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Responsive overrides ──────────────────────────────────────────── */}
      <style>{`
        /* Subscription plan cards */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }

        /* Two-model comparison */
        .pricing-models-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: start;
        }
        @media (max-width: 768px) {
          .pricing-models-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .pricing-models-right {
            border-left: none !important;
            border-top: 1px dashed color-mix(in oklch, var(--line-strong), transparent 35%);
            padding-left: 0 !important;
            padding-top: 40px;
            margin-top: 40px;
          }
        }

        /* CTA strip */
        @media (max-width: 680px) {
          .pricing-cta-strip {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }

        /* Custom Build card */
        .pricing-custom-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .pricing-custom-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Ads management */
        .ads-platform-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: stretch;
        }
        .ads-platform-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
        }
        @media (max-width: 680px) {
          .ads-platform-grid {
            grid-template-columns: 1fr;
          }
          .ads-bundle-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .ads-bundle-card > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </>
  );
}

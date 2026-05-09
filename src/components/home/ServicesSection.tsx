'use client';

import Link from 'next/link';
import { useState } from 'react';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const SERVICES = [
  {
    n: '01',
    title: 'Custom website design',
    desc: 'Bespoke, brand-led design systems built from scratch — no templates.',
    tags: ['Discovery', 'UX', 'UI', 'Design system'],
    href: '/services/web-design',
  },
  {
    n: '02',
    title: 'Website development',
    desc: 'Hand-built, fast, accessible, SEO-ready. Webflow, Framer, or custom.',
    tags: ['Webflow', 'Framer', 'Next.js', 'CMS'],
    href: '/services/webflow-development',
  },
  {
    n: '03',
    title: 'Website redesigns',
    desc: 'Take a tired, underperforming site and rebuild it around real conversion goals.',
    tags: ['Audit', 'Rebuild', 'Migration'],
    href: '/services/website-redesign',
  },
  {
    n: '04',
    title: 'Landing pages',
    desc: 'Single-page, single-goal pages engineered to convert paid traffic.',
    tags: ['A/B-ready', 'Funnel', 'Tracking'],
    href: '/services/landing-pages',
  },
  {
    n: '05',
    title: 'SEO & on-page setup',
    desc: 'Schema, metadata, sitemaps, Core Web Vitals, content scaffolding — done right.',
    tags: ['Technical SEO', 'Schema', 'Speed'],
    href: '/services/seo-optimization',
  },
  {
    n: '06',
    title: 'Lead capture & automation',
    desc: 'Forms, automated email/SMS, CRM piping, AI chatbots — every lead, instantly notified.',
    tags: ['Forms', 'CRM', 'AI chat', 'Notifications'],
    href: '/services/lead-capture-automation',
  },
  {
    n: '07',
    title: 'Hosting, domains & maintenance',
    desc: "We manage the boring infrastructure so you don't have to think about it.",
    tags: ['Uptime', 'Backups', 'Updates'],
    href: '/services/hosting-security-setup',
  },
  {
    n: '08',
    title: 'Analytics & tracking',
    desc: "GA4, conversion events, call tracking, heatmaps — see what's actually working.",
    tags: ['GA4', 'GTM', 'CallRail'],
    href: '/services/analytics-monthly-reports',
  },
];

function ServiceRow({
  s,
}: {
  s: (typeof SERVICES)[0];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="service-row reveal"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      style={{
        display: 'block',
        borderBottom: '1px solid var(--line)',
        color: 'inherit',
        padding: open ? '28px 24px' : '28px 0',
        cursor: 'default',
        transition: 'background 0.4s var(--ease), padding 0.4s var(--ease)',
        background: open ? 'var(--bg-elev-2)' : 'transparent',
      }}
    >
      <div
        className="service-header"
        style={{
          display: 'grid',
          gridTemplateColumns: '60px 1fr 2fr auto',
          gap: 32,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-mute)',
            letterSpacing: '0.16em',
          }}
        >
          {s.n} / 08
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.2vw, 32px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--ink)',
          }}
        >
          {s.title}
        </div>
        <div
          className="service-desc-col body"
          style={{
            maxWidth: 540,
            opacity: open ? 1 : 0.6,
            transition: 'opacity 0.4s var(--ease)',
          }}
        >
          {s.desc}
        </div>
        {/* Arrow is the only navigable element */}
        <Link
          href={s.href}
          aria-label={`View ${s.title} service page`}
          onClick={(e) => e.stopPropagation()}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 99,
            border: '1px solid var(--line-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: open ? 'var(--accent)' : 'transparent',
            color: open ? 'var(--accent-ink)' : 'var(--ink)',
            transition: 'all 0.4s var(--ease)',
            flexShrink: 0,
            textDecoration: 'none',
          }}
        >
          <ArrowIcon />
        </Link>
      </div>

      {/* Expanded tags */}
      <div
        className="service-tags-wrap"
        style={{
          maxHeight: open ? 80 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s var(--ease), margin-top 0.5s var(--ease)',
          marginTop: open ? 20 : 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            paddingLeft: 92,
          }}
        >
          {s.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '6px 12px',
                borderRadius: 99,
                border: '1px solid var(--line-strong)',
                color: 'var(--ink-dim)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      style={{
        background: 'var(--bg-elev)',
        paddingTop: 'calc(var(--section-y) * 1.3)',
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
            What we do
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
            (08) — Services
          </div>
        </div>

        <div
          className="services-intro-grid"
          style={{
            marginBottom: 64,
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 48,
            alignItems: 'end',
          }}
        >
          <h2 className="h-1 reveal">
            Eight ways we turn your{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              website
            </span>{' '}
            into a{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              growth engine
            </span>
            .
          </h2>
          <p className="body-lg reveal services-intro-copy" style={{ maxWidth: 440, justifySelf: 'end' }}>
            Pick what you need or bundle the lot. Every service is fixed-fee, scope-clear, and
            led by a senior designer.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {SERVICES.map((s) => (
            <ServiceRow key={s.n} s={s} />
          ))}
        </div>

        <div
          className="reveal"
          style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}
        >
          <Link href="/services" className="ds-btn ds-btn-ghost">
            All services in detail <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

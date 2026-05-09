'use client';

import Link from 'next/link';
import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'How long does a typical project take?',
    a: 'Most Studio projects launch in 21–30 days from kickoff. Landing pages can ship in 7–10. Atelier (custom) timelines depend on scope, but we always commit to a fixed launch date before we start.',
  },
  {
    q: 'Do you build on Webflow or custom code?',
    a: "Both. Webflow is our default — fast, beautiful, easy for you to edit. For complex apps, multi-language, or unusual integrations, we build with Next.js, Astro, or whatever fits the job. We'll recommend the right stack on the discovery call.",
  },
  {
    q: 'What if I already have a website?',
    a: "Most of our work is redesigns. We audit what's converting, keep what's earning, and rebuild everything else around real conversion goals. Migrations, redirects, and SEO preservation are part of the standard process.",
  },
  {
    q: 'Will you handle hosting and the domain?',
    a: 'Yes — we set up hosting, DNS, SSL, email-routing, and deliver a launch checklist 47 items deep. You own everything. We just handle the boring part if you want us to.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Optional monthly retainers cover content updates, A/B testing, SEO, and conversion optimization. Most clients stay on for 6+ months because the site keeps earning more once the data starts coming in.',
  },
  {
    q: 'Can you integrate AI chatbots?',
    a: 'Yes. We integrate AI chat (typically built on GPT or Claude) trained on your services, pricing, and FAQs. It captures leads 24/7 and routes hot ones straight to your phone.',
  },
  {
    q: 'How is pricing handled?',
    a: 'Fixed-fee, no hourly billing. 50% to start, 50% on launch. Atelier projects can be milestone-based. No surprise invoices, ever.',
  },
  {
    q: 'What industries do you specialize in?',
    a: "Service businesses — contractors, clinics, salons, fitness studios, restaurants, healthcare, home services. If you have customers calling, booking, or filling out forms, we know how to make your site earn more of them.",
  },
];

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function FAQItem({ item, index }: { item: (typeof FAQ_ITEMS)[0]; index: number }) {
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
        <div style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.16em',
              flexShrink: 0,
            }}
          >
            0{index + 1}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 1.7vw, 22px)',
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
            }}
          >
            {item.q}
          </span>
        </div>
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
          maxHeight: open ? 200 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s var(--ease), padding 0.5s var(--ease)',
          paddingLeft: 47,
          paddingBottom: open ? 24 : 0,
        }}
      >
        <p className="body-md" style={{ maxWidth: 640 }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
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
            Frequently asked
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
            (10) — FAQ
          </div>
        </div>

        <div
          className="faq-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div className="reveal">
            <h2 className="h-1">
              Things people <br />
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                actually
              </span>{' '}
              ask.
            </h2>
            <p className="body" style={{ marginTop: 32, maxWidth: 320 }}>
              Don&apos;t see yours? Drop us a line — we usually reply within a few hours.
            </p>
            <Link
              href="/contact"
              className="ds-btn ds-btn-ghost"
              style={{ marginTop: 32, display: 'inline-flex' }}
            >
              Ask anything <ArrowIcon />
            </Link>
          </div>

          <div className="reveal" style={{ borderTop: '1px solid var(--line)' }}>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

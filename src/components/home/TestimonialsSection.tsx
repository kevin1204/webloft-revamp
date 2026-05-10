'use client';

import Link from 'next/link';

const ITEMS = [
  {
    result: '+300%',
    metric: 'online bookings',
    client: 'Flowga Yoga Studio',
    category: 'Yoga & Wellness',
    href: '/case-studies/flowga-yoga-studio',
  },
  {
    result: 'Full rebrand',
    metric: 'web + brand identity',
    client: 'Amigo Contracting Services',
    category: 'Construction & Contracting',
    href: '/case-studies/amigo-contracting-services',
  },
  {
    result: '+150%',
    metric: 'user engagement',
    client: 'Aeries',
    category: 'Business Services',
    href: '/case-studies/aeries',
  },
  {
    result: '500+',
    metric: 'participants managed',
    client: 'Sportlink Events',
    category: 'Sports & Events',
    href: '/case-studies/sportlink-events',
  },
  {
    result: '+150%',
    metric: 'client inquiries',
    client: 'Lila Hart Creative',
    category: 'Creative Portfolio',
    href: '/case-studies/lila-hart',
  },
];

function ResultCard({ item }: { item: (typeof ITEMS)[0] }) {
  return (
    <Link
      href={item.href}
      style={{ textDecoration: 'none' }}
    >
      <div
        className="ds-card"
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 380,
          minHeight: 200,
          padding: 32,
          marginRight: 24,
          whiteSpace: 'normal',
          borderRadius: 'var(--r-lg)',
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'border-color 0.2s var(--ease)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 40,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--accent)',
              marginBottom: 4,
            }}
          >
            {item.result}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            {item.metric}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>
            {item.client}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.06em',
            }}
          >
            {item.category}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TestimonialsSection() {
  const doubled = [...ITEMS, ...ITEMS];
  const reversed = [...ITEMS].reverse();
  const doubledReversed = [...reversed, ...reversed];

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
            Real results
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
            (08) — Client Work
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: 80 }}>
          <h2 className="h-1" style={{ maxWidth: 1100 }}>
            Built to{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              perform
            </span>
            .
          </h2>
        </div>
      </div>

      {/* Row 1 — forward */}
      <div className="marquee-wrap-full" style={{ paddingBottom: 24 }}>
        <div className="marquee-track marquee-track-slow">
          {doubled.map((item, i) => (
            <ResultCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="marquee-wrap-full" style={{ paddingTop: 24 }}>
        <div className="marquee-track marquee-track-slower marquee-track-reverse">
          {doubledReversed.map((item, i) => (
            <ResultCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

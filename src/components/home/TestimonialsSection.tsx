'use client';

const ITEMS = [
  {
    quote:
      'We had calls coming in within 48 hours of launch. The site does the convincing — we just close.',
    author: 'Maria Voss',
    role: 'Owner, Northside Plumbing',
    initials: 'MV',
  },
  {
    quote: 'Felt like a luxury brand the moment it went live. Bookings doubled in six weeks.',
    author: 'Dr. Renee Park',
    role: 'Founder, Meridian Aesthetics',
    initials: 'RP',
  },
  {
    quote:
      'Honest, fast, and obsessive about the details. They moved us off WordPress and never looked back.',
    author: 'Jordan Cho',
    role: 'Director, Cascade Builds',
    initials: 'JC',
  },
  {
    quote: 'Our cost per lead dropped by half. Same ad spend, dramatically better website.',
    author: 'Tomas Reyes',
    role: 'Marketing Lead, Atlas Built',
    initials: 'TR',
  },
  {
    quote:
      'I expected a website. We got a growth system. Forms, automations, the works.',
    author: 'Hana Nakamura',
    role: 'Owner, Fern & Oak Wellness',
    initials: 'HN',
  },
  {
    quote:
      'They asked questions our last agency never bothered with. The site reflects that.',
    author: 'Brett Lyon',
    role: 'GM, Harbor Co.',
    initials: 'BL',
  },
];

function TestimonialCard({ item }: { item: (typeof ITEMS)[0] }) {
  return (
    <div
      className="ds-card"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 440,
        minHeight: 220,
        padding: 32,
        marginRight: 24,
        whiteSpace: 'normal',
        borderRadius: 'var(--r-lg)',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          lineHeight: 1.3,
          letterSpacing: '-0.015em',
          color: 'var(--ink)',
        }}
      >
        <span style={{ color: 'var(--accent)', marginRight: 6 }}>&ldquo;</span>
        {item.quote}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 99,
            background: 'var(--bg-elev-2)',
            border: '1px solid var(--line-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--accent)',
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}
        >
          {item.initials}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--ink)' }}>
            {item.author}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.06em',
            }}
          >
            {item.role}
          </div>
        </div>
      </div>
    </div>
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
            What clients say
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
            (08) — Testimonials
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: 80 }}>
          <h2 className="h-1" style={{ maxWidth: 1100 }}>
            Built once. Quoted{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              often
            </span>
            .
          </h2>
        </div>
      </div>

      {/* Row 1 — forward */}
      <div className="marquee-wrap-full" style={{ paddingBottom: 24 }}>
        <div className="marquee-track marquee-track-slow">
          {doubled.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="marquee-wrap-full" style={{ paddingTop: 24 }}>
        <div className="marquee-track marquee-track-slower marquee-track-reverse">
          {doubledReversed.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

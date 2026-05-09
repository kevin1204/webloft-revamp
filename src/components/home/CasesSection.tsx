'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const CASES = [
  {
    tag: 'Contracting · Toronto',
    title: 'Amigo Contracting',
    kpi: ['+180% inbound leads', '98 PageSpeed', '21-day launch'],
    blurb:
      'From outdated site to a sleek Webflow build with call tracking, instant SMS lead alerts, and local SEO that actually ranks.',
    image: '/PROJECTS/gallery/amigo-contracting-1-min.png',
    href: '/case-studies/amigo-contracting-services',
  },
  {
    tag: 'Yoga studio · Toronto',
    title: 'Flowga Yoga',
    kpi: ['+300% online bookings', '3.2× session time', 'Fast delivery'],
    blurb:
      'A premium, calm visual system + booking-funnel landing pages turned cold traffic into a waitlist.',
    image: '/PROJECTS/gallery/flowga-1-min.png',
    href: '/case-studies/flowga-yoga-studio',
  },
  {
    tag: 'Business · Toronto',
    title: 'Aeries',
    kpi: ['Improved UX', 'Mobile-first', 'SEO foundation'],
    blurb:
      'Clean, conversion-focused redesign that established a polished digital presence and improved user engagement.',
    image: '/PROJECTS/gallery/aeries-1-min.png',
    href: '/case-studies/aeries',
  },
];


function CaseCard({ c, index }: { c: (typeof CASES)[0]; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={c.href}
      className="ds-card reveal case-study-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        overflow: 'hidden',
        borderRadius: 'var(--r-lg)',
        background: 'var(--bg-elev-2)',
        textDecoration: 'none',
      }}
    >
      {/* Left preview — real screenshot */}
      <div
        className="case-study-visual"
        style={{
          minHeight: 360,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src={c.image}
          alt={`${c.title} website screenshot`}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.7s var(--ease)',
          }}
          sizes="(max-width: 900px) 100vw, 40vw"
        />
        {/* Subtle overlay for contrast */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 60%, rgba(10,13,11,0.5) 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Corner label */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            background: 'rgba(0,0,0,0.4)',
            padding: '4px 10px',
            borderRadius: 99,
            backdropFilter: 'blur(6px)',
          }}
        >
          0{index + 1} / Case
        </div>
      </div>

      {/* Right details */}
      <div
        style={{
          padding: '40px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            {c.tag}
          </div>
          <div className="h-2" style={{ fontSize: 'clamp(28px, 3.6vw, 52px)' }}>
            {c.title}
          </div>
          <p className="body" style={{ marginTop: 18, maxWidth: 520 }}>
            {c.blurb}
          </p>
        </div>

        <div>
          <div className="hairline" style={{ marginBottom: 20 }} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px 36px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
              {c.kpi.map((k) => (
                <div key={k}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 22,
                      letterSpacing: '-0.02em',
                      color: 'var(--accent)',
                    }}
                  >
                    {k.split(' ')[0]}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--ink-mute)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginTop: 4,
                    }}
                  >
                    {k.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                borderRadius: 99,
                border: '1px solid var(--line-strong)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background: hover ? 'var(--accent)' : 'transparent',
                color: hover ? 'var(--accent-ink)' : 'var(--ink)',
                borderColor: hover ? 'var(--accent)' : 'var(--line-strong)',
                transition: 'all 0.4s var(--ease)',
              }}
            >
              Read case <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CasesSection() {
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
            Recent work
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
            (07) — Case studies
          </div>
        </div>

        <div
          className="cases-head-row"
          style={{
            marginBottom: 64,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'end',
          }}
        >
          <h2 className="h-1 reveal">
            Real businesses. <br />
            Real{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              numbers
            </span>
            .
          </h2>
          <Link
            href="/projects"
            className="ds-btn ds-btn-ghost reveal cases-head-cta"
            style={{ justifySelf: 'end' }}
          >
            All case studies{' '}
            <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </Link>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          {CASES.map((c, i) => (
            <CaseCard key={c.title} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

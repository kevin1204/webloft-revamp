'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export default function HeroSection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        paddingTop: 'clamp(80px, 12vh, 150px)',
        paddingBottom: 'calc(var(--section-y) * 0.7)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="ds-container">
        {/* Top meta row */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 56,
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div className="eyebrow">
            <span className="dot" />
            Webloft Studio · Est. 2022
          </div>
          {time && (
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--ink-mute)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {time} · Online &amp; accepting projects
            </div>
          )}
        </div>

        {/* Headline */}
        <h1 className="h-display reveal" style={{ position: 'relative' }}>
          <span style={{ display: 'block' }}>Websites that</span>
          <span style={{ display: 'block' }}>
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>convert</span>
            <span style={{ display: 'inline-block', width: '1.2ch' }} />
            <span>visitors</span>
          </span>
          <span style={{ display: 'block' }}>into customers.</span>
          <span
            className="asterisk"
            style={{
              position: 'absolute',
              top: '-0.1em',
              right: '0.05em',
              fontSize: '0.18em',
              lineHeight: 1,
            }}
          >
            ✳
          </span>
        </h1>

        {/* Sub row */}
        <div
          className="reveal hero-sub-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 64,
            marginTop: 64,
            alignItems: 'end',
          }}
        >
          <p
            className="body-lg"
            style={{ maxWidth: 560, margin: 0, color: 'var(--ink-dim)' }}
          >
            Premium, conversion-focused websites for service businesses that need to{' '}
            <span style={{ color: 'var(--ink)' }}>look more professional</span>, earn trust
            faster, and turn clicks into real leads.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              justifySelf: 'end',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="ds-btn ds-btn-primary">
              Book a free call <ArrowIcon />
            </Link>
            <Link href="/projects" className="ds-btn ds-btn-ghost">
              See our work <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          left: 'var(--gutter)',
          bottom: 24,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--ink-mute)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 24,
            height: 1,
            background: 'var(--ink-mute)',
          }}
        />
        Scroll
      </div>
      <div
        style={{
          position: 'absolute',
          right: 'var(--gutter)',
          bottom: 24,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--ink-mute)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        (01) — Index
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-sub-row { grid-template-columns: 1fr !important; }
          .hero-sub-row > div:last-child { justify-self: start !important; }
        }
      `}</style>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  const [ready, setReady] = useState(false);

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
    // Trigger entrance animations one frame after mount
    const t = setTimeout(() => setReady(true), 80);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, []);

  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

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

        {/* ── Meta row ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 56,
            flexWrap: 'wrap',
            gap: 24,
            opacity: ready ? 1 : 0,
            transform: ready ? 'none' : 'translateY(8px)',
            transition: `opacity 0.8s ${ease}, transform 0.8s ${ease}`,
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

        {/* ── Main 2-column grid: text left, mockup right ── */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >

          {/* ── Left column: headline + sub row ── */}
          <div>
            <h1
              className="h-display"
              style={{
                position: 'relative',
                margin: 0,
                /* Slightly tighter than the global h-display max so it fits the column */
                fontSize: 'clamp(48px, 5.5vw, 88px)',
              }}
            >
              {/* Each line is wrapped in overflow:hidden so the text slides up from behind */}

              {/* Line 1 */}
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em', marginBottom: '-0.06em' }}>
                <span
                  style={{
                    display: 'block',
                    transform: ready ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 1s ${ease}`,
                    transitionDelay: '0.05s',
                  }}
                >
                  Websites that
                </span>
              </span>

              {/* Line 2 — accent italic word */}
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em', marginBottom: '-0.06em' }}>
                <span
                  style={{
                    display: 'block',
                    transform: ready ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 1s ${ease}`,
                    transitionDelay: '0.17s',
                  }}
                >
                  <span className="italic-serif" style={{ color: 'var(--accent)' }}>convert</span>
                  <span style={{ display: 'inline-block', width: '0.28em' }} />
                  visitors
                </span>
              </span>

              {/* Line 3 */}
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em', marginBottom: '-0.06em' }}>
                <span
                  style={{
                    display: 'block',
                    transform: ready ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 1s ${ease}`,
                    transitionDelay: '0.29s',
                  }}
                >
                  into customers.
                </span>
              </span>

              {/* Spinning asterisk */}
              <span
                className="asterisk"
                style={{
                  position: 'absolute',
                  top: '-0.1em',
                  right: '0.05em',
                  fontSize: '0.18em',
                  lineHeight: 1,
                  opacity: ready ? 1 : 0,
                  transition: `opacity 0.6s ${ease} 0.65s`,
                }}
              >
                ✳
              </span>
            </h1>

            {/* Sub row */}
            <div
              className="hero-sub-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: 40,
                marginTop: 56,
                alignItems: 'end',
                opacity: ready ? 1 : 0,
                transform: ready ? 'none' : 'translateY(12px)',
                transition: `opacity 0.8s ${ease} 0.42s, transform 0.8s ${ease} 0.42s`,
              }}
            >
              <p className="body-lg" style={{ maxWidth: 560, margin: 0, color: 'var(--ink-dim)' }}>
                Premium, conversion-focused websites for service businesses that need to{' '}
                <span style={{ color: 'var(--ink)' }}>look more professional</span>, earn trust
                faster, and turn clicks into real leads.
              </p>
              <div style={{ display: 'flex', gap: 12, justifySelf: 'end', flexWrap: 'wrap' }}>
                <Link href="/contact" className="ds-btn ds-btn-primary">
                  Book a free call <ArrowIcon />
                </Link>
                <Link href="/projects" className="ds-btn ds-btn-ghost">
                  See our work <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right column: stacked browser mockups ── */}
          <div style={{ position: 'relative' }}>

            {/* Soft green ambient glow behind the cards */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                width: '110%',
                height: '80%',
                background: 'radial-gradient(ellipse, color-mix(in oklch, var(--accent), transparent 80%) 0%, transparent 68%)',
                filter: 'blur(48px)',
                pointerEvents: 'none',
                opacity: ready ? 1 : 0,
                transition: `opacity 2s ${ease} 0.9s`,
              }}
            />

            {/* Back card — Flowga, rotated clockwise, peeks below-right */}
            <div
              className="hero-mockup-back"
              style={{
                position: 'absolute',
                bottom: -28,
                right: -28,
                width: '88%',
                borderRadius: 10,
                overflow: 'hidden',
                border: '1px solid var(--line)',
                boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
                transform: ready ? 'rotate(4deg)' : 'rotate(4deg) translateY(32px)',
                opacity: ready ? 0.55 : 0,
                transition: `transform 1.2s ${ease} 0.5s, opacity 0.9s ${ease} 0.5s`,
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                <Image
                  src="/PROJECTS/gallery/flowga-1-min.png"
                  alt="Flowga Yoga website"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
            </div>

            {/* Front card — Amigo Contracting, with browser chrome */}
            <div
              className="hero-mockup-front"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid var(--line-strong)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03)',
                transform: ready ? 'rotate(-2deg)' : 'rotate(-2deg) translateY(40px)',
                opacity: ready ? 1 : 0,
                transition: `transform 1.2s ${ease} 0.3s, opacity 0.9s ${ease} 0.3s`,
              }}
            >
              {/* Browser chrome bar */}
              <div
                style={{
                  background: 'var(--bg-elev-2)',
                  borderBottom: '1px solid var(--line)',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                {/* macOS traffic-light dots */}
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41', flexShrink: 0 }} />
                {/* Fake URL bar */}
                <div
                  style={{
                    flex: 1,
                    margin: '0 8px',
                    background: 'var(--bg)',
                    borderRadius: 5,
                    padding: '3px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.04em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  amigocontracting.com
                </div>
              </div>
              {/* Screenshot */}
              <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                <Image
                  src="/PROJECTS/gallery/amigo-contracting-1-min.png"
                  alt="Amigo Contracting website"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
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
          opacity: ready ? 1 : 0,
          transition: `opacity 0.8s ${ease} 0.9s`,
        }}
      >
        <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--ink-mute)' }} />
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
          opacity: ready ? 1 : 0,
          transition: `opacity 0.8s ${ease} 0.9s`,
        }}
      >
        (01) — Index
      </div>

      <style>{`
        /* Stack hero on tablet / mobile */
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-mockup-back { display: none !important; }
          .hero-mockup-front { transform: none !important; margin-top: 48px; }
        }
        /* Stack sub-row on mobile */
        @media (max-width: 768px) {
          .hero-sub-row { grid-template-columns: 1fr !important; }
          .hero-sub-row > div:last-child { justify-self: start !important; }
        }
      `}</style>
    </section>
  );
}

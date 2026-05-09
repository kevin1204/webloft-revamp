'use client';

import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg
      style={{
        width: 14,
        height: 14,
        display: 'inline-block',
        transition: 'transform 0.4s var(--ease)',
        flexShrink: 0,
      }}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: 'var(--section-y)' }}>
      <div className="ds-container">
        <div
          className="reveal"
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            borderRadius: 'var(--r-lg)',
            padding: 'clamp(56px, 8vw, 120px) clamp(40px, 6vw, 96px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: 32,
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: 99,
                background: 'currentColor',
              }}
            />
            Booking now — limited slots remain
          </div>

          <h2
            className="h-display"
            style={{
              color: 'var(--accent-ink)',
              fontSize: 'clamp(48px, 8vw, 144px)',
            }}
          >
            Ready to make <br />a website that <br />
            <span
              style={{
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
              }}
            >
              actually
            </span>{' '}
            works?
          </h2>

          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 56,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '20px 28px',
                borderRadius: 99,
                background: 'var(--accent-ink)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.3s var(--ease)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Book a free 30-min call <ArrowIcon />
            </Link>
            <Link
              href="mailto:info@webloftstudio.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '20px 28px',
                borderRadius: 99,
                background: 'transparent',
                color: 'var(--accent-ink)',
                border: '1px solid color-mix(in oklch, var(--accent-ink), transparent 70%)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'border-color 0.3s var(--ease)',
              }}
            >
              info@webloftstudio.com <ArrowIcon />
            </Link>
          </div>

          {/* Decorative asterisk */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: -40,
              bottom: -40,
              fontSize: 320,
              opacity: 0.08,
              lineHeight: 1,
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            ✳
          </div>
        </div>
      </div>
    </section>
  );
}

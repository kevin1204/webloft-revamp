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

const navLinks = [
  { label: 'Work', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s var(--ease)',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        background: scrolled
          ? 'color-mix(in oklch, var(--bg), transparent 20%)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div
        className="ds-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 0',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <Image
            src="/wflogo.svg"
            alt="Webloft Studio"
            width={56}
            height={40}
            style={{ display: 'block' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="wl-nav-links"
          style={{ display: 'flex', gap: 4, alignItems: 'center' }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                padding: '10px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
                transition: 'color 0.3s var(--ease)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-dim)')}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="ds-btn ds-btn-primary wl-nav-links"
          style={{ padding: '12px 18px' }}
        >
          Start a project <ArrowIcon />
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--ink)',
            padding: 8,
            cursor: 'pointer',
          }}
          className="wl-mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--bg-elev)',
            borderTop: '1px solid var(--line)',
            padding: '24px var(--gutter)',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '14px 0',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
                borderBottom: '1px solid var(--line)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="ds-btn ds-btn-primary"
            style={{ marginTop: 20, justifyContent: 'center' }}
          >
            Start a project <ArrowIcon />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .wl-nav-links { display: none !important; }
          .wl-mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

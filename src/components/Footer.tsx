'use client';

import Link from 'next/link';

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--ink-mute)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                color: 'var(--ink)',
                textDecoration: 'none',
                transition: 'color 0.3s var(--ease)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 0,
        borderTop: '1px solid var(--line)',
        paddingTop: 64,
        paddingBottom: 32,
        background: 'var(--bg)',
      }}
    >
      <div className="ds-container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 80,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5vw, 72px)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                fontWeight: 500,
              }}
            >
              Webloft<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p className="body-md" style={{ maxWidth: 320, marginTop: 24 }}>
              Premium, conversion-focused websites for service businesses ready to grow.
            </p>
          </div>

          <FooterCol
            title="Studio"
            items={[
              ['Work', '/projects'],
              ['Services', '/services'],
              ['About', '/about'],
              ['Contact', '/contact'],
              ['Blog', '/blog'],
            ]}
          />

          <FooterCol
            title="Services"
            items={[
              ['Custom design', '/services/web-design'],
              ['Webflow', '/services/webflow-development'],
              ['Redesigns', '/services/website-redesign'],
              ['Landing pages', '/services/web-design'],
              ['SEO', '/services/seo-optimization'],
            ]}
          />

          <FooterCol
            title="Connect"
            items={[
              ['hello@webloftstudio.com', 'mailto:hello@webloftstudio.com'],
              ['Instagram', 'https://instagram.com/webloftstudio'],
              ['LinkedIn', 'https://linkedin.com/company/webloftstudio'],
              ['Book a call', '/contact'],
            ]}
          />
        </div>

        {/* Big wordmark — scrolling marquee */}
        <div className="marquee-wrap-full" style={{ margin: '0 0 48px' }}>
          <div
            className="marquee-track"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(80px, 18vw, 280px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.85,
              color: 'var(--ink)',
              gap: '0.8em',
              alignItems: 'baseline',
              animationDuration: 'calc(40s / var(--motion))',
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} style={{ flexShrink: 0 }}>
                WEBLOFT<span style={{ color: 'var(--accent)' }}>.</span>STUDIO
              </span>
            ))}
          </div>
        </div>

        <div className="hairline" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 24,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            © {new Date().getFullYear()} Webloft Studio · All rights reserved
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { label: 'Toronto, Canada' },
              { label: 'Remote, EST' },
            ].map(({ label }) => (
              <div
                key={label}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ color: 'var(--accent)' }}>●</span> {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

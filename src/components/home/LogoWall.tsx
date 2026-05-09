'use client';

const LOGOS = [
  'NORTHSIDE', 'MERIDIAN', 'CASCADE', 'FERN & OAK',
  'OBELISK', 'RENWICK', 'HARBOR CO.', 'ATLAS BUILT',
];

export default function LogoWall() {
  const items = [...LOGOS, ...LOGOS];

  return (
    <section
      style={{
        paddingTop: 'calc(var(--section-y) * 0.4)',
        paddingBottom: 'calc(var(--section-y) * 0.4)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div
        className="ds-container reveal"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 32,
        }}
      >
        <div className="eyebrow">
          <span className="dot" />
          Trusted by ambitious service businesses
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--ink-mute)',
          }}
        >
          (02) — Clients
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {items.map((logo, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 28,
                letterSpacing: '0.02em',
                color: 'var(--ink-mute)',
                paddingRight: 64,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 16,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  border: '1.5px solid currentColor',
                  display: 'inline-block',
                  transform: 'rotate(45deg)',
                  flexShrink: 0,
                }}
              />
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

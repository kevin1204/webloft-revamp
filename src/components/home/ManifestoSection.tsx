const PILLARS = [
  {
    n: '01',
    title: 'Conversion-first',
    body: 'Every page reverse-engineered from a measurable outcome — a call, a form, a booking.',
  },
  {
    n: '02',
    title: 'Built to be fast',
    body: '98+ PageSpeed, on real devices, on launch day. We benchmark every release.',
  },
  {
    n: '03',
    title: 'Honest pricing',
    body: 'Fixed-fee scopes. No surprise invoices. No vague retainers.',
  },
  {
    n: '04',
    title: 'Owned by you',
    body: "Your domain, your hosting, your CMS. We don't hold anything hostage.",
  },
];

export default function ManifestoSection() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)', position: 'relative' }}>
      <div className="ds-container">

        {/* Eyebrow row */}
        <div
          className="reveal"
          style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 56 }}
        >
          <div className="eyebrow">
            <span className="dot" />
            Why Webloft
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
            (04) — Manifesto
          </div>
        </div>

        {/* 1/3 + 2/3 grid — matches prototype exactly */}
        <div
          className="manifesto-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          <div className="reveal">
            <div className="h-3" style={{ marginBottom: 12 }}>
              A studio, not a factory.
            </div>
            <p className="body" style={{ maxWidth: 320 }}>
              No bloated agency markup. No template churn. Just a small team that ships beautiful,
              fast, conversion-engineered sites for businesses that mean it.
            </p>
          </div>

          <h2 className="h-1 reveal" style={{ fontWeight: 400, margin: 0 }}>
            <span style={{ display: 'block' }}>We don&apos;t make brochures.</span>
            <span style={{ display: 'block' }}>
              We make websites that do the{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                actual work
              </span>
              .
            </span>
            <span style={{ display: 'block' }}>Every section earns its place.</span>
            <span style={{ display: 'block' }}>Every click moves toward a lead.</span>
          </h2>
        </div>

        {/* Four pillars */}
        <div style={{ marginTop: 96 }}>
          <div className="hairline" style={{ marginBottom: 40 }} />
          <div
            className="pillars-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
            }}
          >
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className="reveal"
                style={{
                  padding: '0 24px',
                  borderRight: i === PILLARS.length - 1 ? 'none' : '1px solid var(--line)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.16em',
                    marginBottom: 18,
                  }}
                >
                  {p.n}
                </div>
                <div className="h-3" style={{ marginBottom: 12 }}>
                  {p.title}
                </div>
                <p className="body-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

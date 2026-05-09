const STEPS = [
  {
    n: '01',
    title: 'Discovery call',
    desc: '30 min, free. We dig into your business, your customers, and what "a win" actually looks like.',
    days: 'Day 0',
  },
  {
    n: '02',
    title: 'Strategy & scope',
    desc: 'Sitemap, conversion goals, content plan. Fixed scope, fixed fee, fixed timeline.',
    days: 'Day 1–3',
  },
  {
    n: '03',
    title: 'Design',
    desc: 'Brand-led visual direction, then full responsive UI. Two rounds of refinement.',
    days: 'Day 4–10',
  },
  {
    n: '04',
    title: 'Build',
    desc: 'Pixel-perfect, performant build with CMS, forms, tracking, and SEO foundations.',
    days: 'Day 11–18',
  },
  {
    n: '05',
    title: 'Launch',
    desc: 'DNS, redirects, GA4, training, and a launch checklist 47 items deep.',
    days: 'Day 19–21',
  },
  {
    n: '06',
    title: 'Grow',
    desc: 'Optional retainer for content, A/B tests, SEO, and continuous conversion improvement.',
    days: 'Ongoing',
  },
];

export default function ProcessSection() {
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
            The process
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
            (06) — How we work
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: 80 }}>
          <h2 className="h-1" style={{ maxWidth: 920 }}>
            Six steps. Twenty-one days.{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              Zero
            </span>{' '}
            surprises.
          </h2>
        </div>

        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--line)',
            borderLeft: '1px solid var(--line)',
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="reveal"
              style={{
                padding: 32,
                borderRight: '1px solid var(--line)',
                borderBottom: '1px solid var(--line)',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--accent)',
                    letterSpacing: '0.16em',
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {s.days}
                </div>
              </div>
              <div className="h-3" style={{ marginBottom: 14 }}>
                {s.title}
              </div>
              <p className="body-sm" style={{ marginTop: 'auto' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

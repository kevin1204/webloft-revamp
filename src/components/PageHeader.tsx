interface PageHeaderProps {
  kicker: string;
  index: string;
  title: string;
  italic?: string;
  blurb?: string;
}

export default function PageHeader({ kicker, index, title, italic, blurb }: PageHeaderProps) {
  return (
    <section className="page-header-section">
      <div className="ds-container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 64,
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div className="eyebrow">
            <span className="dot" />
            {kicker}
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
            {index}
          </div>
        </div>

        <h1
          className="h-display reveal"
          style={{ fontSize: 'clamp(56px, 8vw, 144px)' }}
        >
          {title}
          {italic && (
            <>
              {' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                {italic}
              </span>
            </>
          )}
        </h1>

        {blurb && (
          <p className="body-lg reveal" style={{ marginTop: 48, maxWidth: 640 }}>
            {blurb}
          </p>
        )}
      </div>
    </section>
  );
}

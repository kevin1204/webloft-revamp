import PageHeader from '@/components/PageHeader';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About the studio"
        index="(03) — About"
        title="A small studio with"
        italic="big standards."
        blurb="Webloft is a senior-led studio building premium websites for service businesses across North America. We obsess so you don't have to."
      />

      {/* Story */}
      <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
        <div className="ds-container">
          <div
            className="about-story-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: 80,
              alignItems: 'start',
            }}
          >
            <div
              className="reveal"
              style={{ position: 'sticky', top: 120 }}
            >
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" />
                Our story
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Founded 2022 · London, ON + Remote
              </div>
            </div>

            <div className="reveal">
              <h2 className="h-1" style={{ marginBottom: 32 }}>
                We started Webloft because{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  most agency websites
                </span>{' '}
                are quietly broken.
              </h2>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                Pretty mockups that don&apos;t convert. Six-month timelines for a five-page site.
                Vague retainers, hidden fees, &ldquo;we&apos;ll get back to you Monday.&rdquo;
              </p>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                We do it differently. Fixed scopes. Fixed fees. 21-day launches. Senior designers
                from kickoff to handoff. And every line of copy, every section, every animation
                answers one question — does this earn the next click?
              </p>
              <p className="body-lg">
                If that sounds like the studio you&apos;ve been looking for, we&apos;d love to
                meet you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}

import PageHeader from '@/components/PageHeader';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const TEAM = [
  {
    n: '01',
    name: 'Alex Romano',
    role: 'Founder, design lead',
    bio: 'Eight years in product and brand. Obsessed with type, conversion psychology, and shipping.',
  },
  {
    n: '02',
    name: 'Priya Shah',
    role: 'Head of build',
    bio: "Webflow expert dev. Performance budgets, accessibility, and 'why does this site take 8 seconds to load' detective work.",
  },
  {
    n: '03',
    name: 'Marcus Hill',
    role: 'Strategy & SEO',
    bio: 'Ex-search marketing lead. Schema, on-page, and the slow art of ranking that actually pays back.',
  },
];

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
                Founded 2022 · Toronto + Remote
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

      {/* Team */}
      <section style={{ paddingBottom: 'var(--section-y)' }}>
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
              The team
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--ink-mute)',
              }}
            >
              Three humans
            </div>
          </div>

          <div className="team-grid">
            {TEAM.map((member, i) => (
              <div
                key={member.n}
                className="reveal"
                style={{
                  padding: 32,
                  borderRight:
                    i < TEAM.length - 1 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                  minHeight: 380,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    aspectRatio: '1/1',
                    maxWidth: 200,
                    background:
                      'linear-gradient(135deg, var(--bg-elev), var(--bg-elev-2))',
                    border: '1px solid var(--line-strong)',
                    borderRadius: 'var(--r-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: 56,
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    marginBottom: 24,
                  }}
                >
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'var(--ink-mute)',
                      letterSpacing: '0.16em',
                      marginBottom: 12,
                    }}
                  >
                    {member.n}
                  </div>
                  <div className="h-3">{member.name}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--accent)',
                      letterSpacing: '0.06em',
                      marginTop: 6,
                      textTransform: 'uppercase',
                    }}
                  >
                    {member.role}
                  </div>
                  <p className="body-sm" style={{ marginTop: 14 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}

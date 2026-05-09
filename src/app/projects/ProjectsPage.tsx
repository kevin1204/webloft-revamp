'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import CTASection from '@/components/home/CTASection';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Amigo Contracting Services',
    description:
      'A professional construction services website with lead capture optimization, local SEO, service showcases, and a mobile-first contact flow.',
    image: '/PROJECTS/gallery/amigo-contracting-1.webp',
    category: 'Construction',
    technologies: ['Webflow', 'CMS', 'SEO'],
    results: '+180% lead increase',
    timeline: '21-day launch',
    link: 'https://amigocontracting.com/',
    caseStudyLink: '/case-studies/amigo-contracting-services',
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Aeries',
    description:
      'A clean, responsive Webflow build with a polished content system and conversion-focused page structure for better engagement.',
    image: '/PROJECTS/gallery/aeries-1.webp',
    category: 'Business',
    technologies: ['Webflow', 'Responsive Design'],
    results: 'Improved UX',
    timeline: 'Mobile-first',
    link: 'https://wfm5-level-3.webflow.io/',
    caseStudyLink: '/case-studies/aeries',
    featured: false,
  },
  {
    id: 3,
    number: '03',
    title: 'Flowga Yoga Studio',
    description:
      'A wellness-focused website with a premium visual system, booking-led page flow, class content, and a calmer mobile experience.',
    image: '/PROJECTS/gallery/flowga-1.webp',
    category: 'Wellness',
    technologies: ['Webflow', 'Booking System', 'CMS'],
    results: '+300% online bookings',
    timeline: 'Fast delivery',
    link: 'https://flowgav2.webflow.io/',
    caseStudyLink: '/case-studies/flowga-yoga-studio',
    featured: true,
  },
  {
    id: 4,
    number: '04',
    title: 'Sportlink Events',
    description:
      'An event platform built to support registrations, participant information, and large-scale sporting event content.',
    image: '/PROJECTS/gallery/sportlink1.webp',
    category: 'Events',
    technologies: ['Webflow', 'Registration System', 'Database'],
    results: '500+ participants managed',
    timeline: 'Scalable CMS',
    link: 'https://wfm5-level-1-course-build-725271.design.webflow.com/',
    caseStudyLink: '/case-studies/sportlink-events',
    featured: false,
  },
  {
    id: 5,
    number: '05',
    title: 'Lila Hart',
    description:
      'A refined portfolio website with strong art direction, smooth motion, and a simple structure for showcasing creative work.',
    image: '/PROJECTS/gallery/lilahart3.webp',
    category: 'Portfolio',
    technologies: ['Webflow', 'Animations', 'Portfolio'],
    results: 'Enhanced brand presence',
    timeline: 'Editorial layout',
    link: 'https://wfm5-level-1-course-build-725271.webflow.io/',
    caseStudyLink: '/case-studies/lila-hart',
    featured: false,
  },
];

const categories = ['All', 'Construction', 'Business', 'Wellness', 'Events', 'Portfolio'];

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function BrowserFrame({
  project,
  priority = false,
}: {
  project: (typeof projects)[number];
  priority?: boolean;
}) {
  return (
    <div className="projects-browser-frame">
      <div className="projects-browser-bar">
        <span />
        <span />
        <span />
        <div>{project.title.toLowerCase().replaceAll(' ', '-')}</div>
      </div>
      <div
        className="projects-browser-image"
        style={{
          height: 'calc(100% - 39px)',
          minHeight: 'clamp(260px, 44vw, 360px)',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}
      >
        <Image
          src={project.image}
          alt={`${project.title} website screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <article
      className="projects-card ds-card reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ transitionDelay: `${Math.min(index * 0.06, 0.24)}s` }}
    >
      <div
        className="projects-card-link"
        style={{
          color: 'inherit',
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          minHeight: '100%',
          textDecoration: 'none',
        }}
      >
        <div
          className="projects-card-media"
          style={{
            aspectRatio: '4 / 3',
            contain: 'layout paint',
            isolation: 'isolate',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
        >
          <Image
            src={project.image}
            alt={`${project.title} website screenshot`}
            width={900}
            height={675}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              display: 'block',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              transform: hover ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.7s var(--ease)',
              width: '100%',
            }}
          />
          <div
            className="projects-card-shade"
            style={{
              background: 'linear-gradient(to bottom, transparent 54%, rgba(10, 13, 11, 0.68) 100%)',
              inset: 0,
              pointerEvents: 'none',
              position: 'absolute',
            }}
          />
          <div
            className="projects-card-label"
            style={{
              background: 'rgba(0, 0, 0, 0.42)',
              backdropFilter: 'blur(8px)',
              borderRadius: 999,
              color: 'rgba(255, 255, 255, 0.72)',
              left: 16,
              padding: '6px 10px',
              position: 'absolute',
              top: 16,
              zIndex: 2,
            }}
          >
            {project.number} / {project.category}
          </div>
        </div>

        <div className="projects-card-body">
          <div>
            <div className="projects-card-meta">{project.technologies.join(' · ')}</div>
            <h3 className="h-3">{project.title}</h3>
            <p className="body-sm">{project.description}</p>
          </div>

          <div>
            <div className="projects-card-stats">
              <div>
                <strong>{project.results.split(' ')[0]}</strong>
                <span>{project.results.split(' ').slice(1).join(' ')}</span>
              </div>
              <div>
                <strong>{project.timeline.split(' ')[0]}</strong>
                <span>{project.timeline.split(' ').slice(1).join(' ') || project.timeline}</span>
              </div>
            </div>

            <div className="projects-card-actions">
              <Link href={project.caseStudyLink} className="projects-card-cta">
                Read case <ArrowIcon />
              </Link>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-card-visit"
              >
                Live site <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <>
      <section className="projects-hero">
        <div className="ds-container">
          <div className="projects-hero-meta reveal">
            <div className="eyebrow">
              <span className="dot" />
              Recent work
            </div>
            <div className="projects-index">(02) — Projects</div>
          </div>

          <div className="projects-hero-grid">
            <div className="reveal">
              <h1 className="h-display projects-hero-title">
                Websites built to{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  earn
                </span>{' '}
                the next click.
              </h1>
              <p className="body-lg projects-hero-copy">
                A focused look at recent Webloft builds across service businesses, wellness brands,
                event platforms, and portfolio sites. Each project was shaped around trust,
                clarity, speed, and measurable business outcomes.
              </p>
              <div className="projects-hero-actions">
                <Link href="/contact" className="ds-btn ds-btn-primary">
                  Start a project <ArrowIcon />
                </Link>
                <Link href="#portfolio" className="ds-btn ds-btn-ghost">
                  Browse work <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="projects-hero-visual reveal">
              <div className="projects-hero-glow" aria-hidden="true" />
              {featuredProjects.length > 1 && (
                <div className="projects-hero-back">
                  <BrowserFrame project={featuredProjects[1]} />
                </div>
              )}
              {featuredProjects.length > 0 && (
                <div className="projects-hero-front">
                  <BrowserFrame project={featuredProjects[0]} priority />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-featured">
        <div className="ds-container">
          <div className="projects-section-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Selected outcomes
              </div>
              <h2 className="h-1">
                Case studies with{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  measurable
                </span>{' '}
                results.
              </h2>
            </div>
            <p className="body-lg">
              A few builds where strategy, design, copy, and implementation worked together to
              create cleaner paths from visitor attention to qualified leads.
            </p>
          </div>

          <div className="projects-featured-list">
            {featuredProjects.map((project) => (
              <Link
                href={project.caseStudyLink}
                key={project.id}
                className="projects-feature-row ds-card reveal"
              >
                <div
                  className="projects-feature-media"
                  style={{
                    contain: 'layout paint',
                    isolation: 'isolate',
                    minHeight: 'clamp(280px, 42vw, 430px)',
                    overflow: 'hidden',
                    position: 'relative',
                    width: '100%',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} featured project screenshot`}
                    fill
                    sizes="(max-width: 900px) 100vw, 42vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                  <span>{project.number} / Featured</span>
                </div>

                <div className="projects-feature-content">
                  <div>
                    <div className="projects-card-meta">{project.category} · {project.technologies.join(' · ')}</div>
                    <h3 className="h-2">{project.title}</h3>
                    <p className="body">{project.description}</p>
                  </div>

                  <div className="projects-feature-bottom">
                    <div className="projects-feature-kpis">
                      <div>
                        <strong>{project.results.split(' ')[0]}</strong>
                        <span>{project.results.split(' ').slice(1).join(' ')}</span>
                      </div>
                      <div>
                        <strong>{project.timeline.split(' ')[0]}</strong>
                        <span>{project.timeline.split(' ').slice(1).join(' ') || project.timeline}</span>
                      </div>
                    </div>
                    <div className="projects-feature-button">
                      View case <ArrowIcon />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="projects-portfolio">
        <div className="ds-container">
          <div className="projects-filter-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Complete portfolio
              </div>
              <h2 className="h-2">Browse by industry.</h2>
            </div>

            <div className="projects-filters" aria-label="Project categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'is-active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style jsx global>{`
        .projects-hero {
          padding-top: clamp(80px, 12vh, 150px);
          padding-bottom: calc(var(--section-y) * 0.8);
          overflow: hidden;
        }

        .projects-hero *,
        .projects-featured *,
        .projects-portfolio * {
          min-width: 0;
        }

        .projects-hero img,
        .projects-featured img,
        .projects-portfolio img {
          max-width: 100%;
        }

        .projects-hero a,
        .projects-featured a,
        .projects-portfolio a,
        .projects-portfolio button {
          touch-action: manipulation;
        }

        .projects-hero-meta,
        .projects-section-head,
        .projects-filter-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 64px;
        }

        .projects-index,
        .projects-card-meta,
        .projects-card-label,
        .projects-feature-media span {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-mute);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          overflow-wrap: anywhere;
        }

        .projects-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.8fr);
          gap: clamp(48px, 7vw, 96px);
          align-items: center;
        }

        .projects-hero-title {
          font-size: clamp(52px, 7.4vw, 132px);
          max-width: 980px;
          overflow-wrap: anywhere;
        }

        .projects-hero-copy {
          max-width: 690px;
          margin-top: 44px;
        }

        .projects-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
        }

        .projects-hero-actions .ds-btn {
          min-height: 48px;
        }

        .projects-hero-visual {
          min-height: 560px;
          position: relative;
        }

        .projects-hero-glow {
          position: absolute;
          inset: 7% -12% 8%;
          background: radial-gradient(ellipse, color-mix(in oklch, var(--accent), transparent 82%) 0%, transparent 70%);
          filter: blur(48px);
          pointer-events: none;
        }

        .projects-hero-front,
        .projects-hero-back {
          position: absolute;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid var(--line-strong);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.58);
        }

        .projects-hero-front {
          z-index: 2;
          inset: 70px 0 44px 7%;
          transform: rotate(-2deg);
        }

        .projects-hero-back {
          z-index: 1;
          inset: 20px 8% 115px -4%;
          opacity: 0.56;
          transform: rotate(4deg);
        }

        .projects-featured,
        .projects-portfolio {
          padding-top: var(--section-y);
          padding-bottom: var(--section-y);
        }

        .projects-featured {
          background: var(--bg-elev);
        }

        .projects-section-head {
          align-items: end;
        }

        .projects-section-head p {
          max-width: 520px;
          margin: 0;
        }

        .projects-section-head h2 {
          max-width: 880px;
          margin-top: 28px;
        }

        .projects-featured-list {
          display: grid;
          gap: 24px;
        }

        .projects-feature-row {
          display: grid;
          grid-template-columns: minmax(320px, 0.82fr) minmax(0, 1fr);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background: var(--bg-elev-2);
          transform: translateZ(0);
          transition:
            border-color 0.3s var(--ease),
            background 0.3s var(--ease),
            transform 0.5s var(--ease);
        }

        .projects-feature-row:hover {
          transform: translateY(-4px);
        }

        .projects-feature-media {
          position: relative;
          min-height: 430px;
          overflow: hidden;
          isolation: isolate;
        }

        .projects-feature-media img {
          transition: transform 0.8s var(--ease), filter 0.8s var(--ease);
          will-change: transform;
        }

        .projects-feature-row:hover .projects-feature-media img {
          transform: scale(1.035);
          filter: saturate(1.08);
        }

        .projects-feature-media::after,
        .projects-card-shade {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 54%, rgba(10, 13, 11, 0.68) 100%);
          pointer-events: none;
        }

        .projects-feature-media span,
        .projects-card-label {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.42);
          color: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(8px);
        }

        .projects-feature-content {
          padding: clamp(32px, 4vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 44px;
        }

        .projects-feature-content .h-2 {
          margin-top: 18px;
          max-width: 720px;
          overflow-wrap: anywhere;
        }

        .projects-feature-content p {
          margin-top: 20px;
          max-width: 620px;
        }

        .projects-feature-bottom {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          border-top: 1px solid var(--line);
          padding-top: 24px;
        }

        .projects-feature-kpis,
        .projects-card-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 20px 36px;
        }

        .projects-feature-kpis strong,
        .projects-card-stats strong {
          display: block;
          font-family: var(--font-display);
          font-weight: 500;
          color: var(--accent);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .projects-feature-kpis strong {
          font-size: clamp(28px, 3vw, 48px);
        }

        .projects-card-stats strong {
          font-size: 22px;
        }

        .projects-feature-kpis span,
        .projects-card-stats span {
          display: block;
          margin-top: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-mute);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .projects-feature-button,
        .projects-card-cta,
        .projects-card-visit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          white-space: nowrap;
          transition: background 0.3s var(--ease), color 0.3s var(--ease), border-color 0.3s var(--ease);
        }

        .projects-feature-button {
          padding: 14px 20px;
        }

        .projects-feature-row:hover .projects-feature-button,
        .projects-card:hover .projects-card-cta {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-ink);
        }

        .projects-filter-head {
          align-items: end;
        }

        .projects-filter-head h2 {
          margin-top: 18px;
        }

        .projects-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px;
          max-width: 650px;
        }

        .projects-filters button {
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          background: transparent;
          color: var(--ink-dim);
          cursor: pointer;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          min-height: 44px;
          padding: 0 16px;
          text-transform: uppercase;
          white-space: nowrap;
          transition:
            background 0.3s var(--ease),
            border-color 0.3s var(--ease),
            color 0.3s var(--ease),
            transform 0.3s var(--ease);
        }

        .projects-filters button:hover,
        .projects-filters button.is-active {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-ink);
        }

        .projects-filters button:hover {
          transform: translateY(-1px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .projects-card {
          overflow: hidden;
          background: var(--bg-elev);
          transform: translateZ(0);
        }

        .projects-card:hover {
          transform: translateY(-4px);
        }

        .projects-card-link {
          color: inherit;
          display: grid;
          grid-template-rows: auto 1fr;
          min-height: 100%;
          text-decoration: none;
        }

        .projects-card-media {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        .projects-card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 32px;
          padding: 28px;
        }

        .projects-card-body .h-3 {
          margin-top: 14px;
          overflow-wrap: anywhere;
        }

        .projects-card-body p {
          margin-top: 14px;
        }

        .projects-card-actions {
          border-top: 1px solid var(--line);
          display: flex;
          gap: 10px;
          justify-content: space-between;
          margin-top: 22px;
          padding-top: 20px;
        }

        .projects-card-cta,
        .projects-card-visit {
          min-height: 44px;
          padding: 11px 14px;
        }

        .projects-card-visit {
          color: var(--ink-dim);
        }

        .projects-browser-frame {
          height: 100%;
          min-height: 100%;
          background: var(--bg-elev-2);
        }

        .projects-browser-bar {
          align-items: center;
          background: var(--bg-elev-2);
          border-bottom: 1px solid var(--line);
          display: flex;
          gap: 7px;
          padding: 10px 14px;
        }

        .projects-browser-bar span {
          border-radius: 50%;
          display: block;
          flex-shrink: 0;
          height: 10px;
          width: 10px;
        }

        .projects-browser-bar span:nth-child(1) {
          background: #ff5f57;
        }

        .projects-browser-bar span:nth-child(2) {
          background: #ffbd2e;
        }

        .projects-browser-bar span:nth-child(3) {
          background: #28ca41;
        }

        .projects-browser-bar div {
          background: var(--bg);
          border-radius: 5px;
          color: var(--ink-mute);
          flex: 1;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.04em;
          margin-left: 8px;
          overflow: hidden;
          padding: 3px 10px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .projects-browser-image {
          height: calc(100% - 39px);
          min-height: 360px;
          position: relative;
        }

        @media (max-width: 1100px) {
          .projects-hero-grid {
            grid-template-columns: 1fr;
          }

          .projects-hero-visual {
            min-height: 480px;
          }

          .projects-hero-front {
            inset: 64px 0 36px 5%;
          }

          .projects-hero-back {
            inset: 20px 10% 100px 0;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .projects-hero {
            padding-bottom: calc(var(--section-y) * 0.65);
          }

          .projects-section-head h2 {
            max-width: 760px;
          }
        }

        @media (max-width: 900px) {
          .projects-hero-meta,
          .projects-section-head,
          .projects-filter-head {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 44px;
          }

          .projects-feature-row {
            grid-template-columns: 1fr;
          }

          .projects-feature-media {
            min-height: 320px;
          }

          .projects-feature-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .projects-feature-button {
            justify-content: center;
            width: 100%;
          }

          .projects-filters {
            justify-content: flex-start;
          }
        }

        @media (max-width: 680px) {
          .projects-hero {
            padding-top: clamp(56px, 14vw, 72px);
          }

          .projects-hero-title {
            font-size: clamp(42px, 13vw, 76px);
            line-height: 0.98;
          }

          .projects-hero-copy {
            margin-top: 28px;
          }

          .projects-hero-actions {
            margin-top: 28px;
          }

          .projects-hero-actions,
          .projects-card-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .projects-hero-actions .ds-btn,
          .projects-card-cta,
          .projects-card-visit {
            justify-content: center;
            width: 100%;
          }

          .projects-hero-visual {
            min-height: 330px;
          }

          .projects-hero-back {
            display: none;
          }

          .projects-hero-front {
            inset: 0;
            transform: none;
          }

          .projects-browser-image {
            min-height: 286px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-card-body,
          .projects-feature-content {
            padding: 24px;
          }

          .projects-feature-media {
            min-height: 280px;
          }

          .projects-filters {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
          }

          .projects-filters button {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .projects-hero-meta,
          .projects-section-head,
          .projects-filter-head {
            gap: 18px;
            margin-bottom: 36px;
          }

          .projects-index {
            font-size: 10px;
          }

          .projects-hero-visual {
            min-height: 300px;
          }

          .projects-browser-bar {
            padding: 9px 10px;
          }

          .projects-browser-bar div {
            font-size: 9px;
          }

          .projects-browser-image {
            min-height: 252px;
          }

          .projects-featured,
          .projects-portfolio {
            padding-top: calc(var(--section-y) * 0.85);
            padding-bottom: calc(var(--section-y) * 0.85);
          }

          .projects-feature-media {
            min-height: 250px;
          }

          .projects-card-body,
          .projects-feature-content {
            padding: 20px;
          }

          .projects-feature-kpis,
          .projects-card-stats {
            gap: 18px 26px;
          }

          .projects-card-actions {
            gap: 8px;
          }
        }

        @media (max-width: 360px) {
          .projects-filters {
            grid-template-columns: 1fr;
          }

          .projects-card-label,
          .projects-feature-media span {
            left: 12px;
            top: 12px;
            max-width: calc(100% - 24px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-feature-row,
          .projects-card,
          .projects-feature-media img,
          .projects-filters button {
            transition: none !important;
          }

          .projects-feature-row:hover,
          .projects-card:hover,
          .projects-filters button:hover {
            transform: none !important;
          }

          .projects-feature-row:hover .projects-feature-media img {
            filter: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

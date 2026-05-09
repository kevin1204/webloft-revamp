'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface CaseStudyProps {
  projectTitle: string;
  clientName: string;
  clientTitle?: string;
  clientCompany: string;
  projectOverview: string;
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar?: string;
  };
  technologies: string[];
  projectDuration: string;
  projectImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  featuredImage: string;
  category: string;
  date: string;
}

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.2L5.6 10.3L11.5 3.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2.2V8M7 10.6V11.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      <path d="M7 1.4L12.6 11.4H1.4L7 1.4Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function CaseStudy({
  projectTitle,
  clientName,
  clientTitle,
  clientCompany,
  projectOverview,
  challenges,
  solutions,
  results,
  testimonial,
  technologies,
  projectDuration,
  projectImages,
  ctaText = 'Start Your Project',
  ctaLink = '/contact',
  featuredImage,
  category,
  date,
}: CaseStudyProps) {
  const galleryImages = useMemo(
    () =>
      projectImages.length > 0
        ? projectImages
        : [{ src: featuredImage, alt: `${projectTitle} featured website screenshot` }],
    [featuredImage, projectImages, projectTitle],
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToNextImage = useCallback(() => {
    setLightboxImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [galleryImages.length]);

  const goToPreviousImage = useCallback(() => {
    setLightboxImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeLightbox, goToNextImage, goToPreviousImage, isLightboxOpen]);

  const featuredMetrics = results.slice(0, 3);
  const selectedGalleryImage = galleryImages[selectedImage] ?? galleryImages[0];
  const lightboxImage = galleryImages[lightboxImageIndex] ?? galleryImages[0];

  return (
    <article className="wl-case">
      <section className="wl-case-hero">
        <div className="ds-container">
          <div className="wl-case-meta reveal">
            <div className="eyebrow">
              <span className="dot" />
              Case study
            </div>
            <div className="wl-case-index">{category} / {date}</div>
          </div>

          <div className="wl-case-hero-grid">
            <div className="reveal">
              <h1 className="h-display wl-case-title">
                {projectTitle.replace(' Website', '')}
              </h1>
              <p className="body-lg wl-case-overview">{projectOverview}</p>

              <div className="wl-case-actions">
                <Link href={ctaLink} className="ds-btn ds-btn-primary">
                  {ctaText} <ArrowIcon />
                </Link>
                <Link href="/projects" className="ds-btn ds-btn-ghost">
                  All projects <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="wl-case-browser reveal">
              <div className="wl-case-browser-bar">
                <span />
                <span />
                <span />
                <div>{clientCompany.toLowerCase().replaceAll(' ', '-')}</div>
              </div>
              <div className="wl-case-browser-image">
                <Image
                  src={featuredImage}
                  alt={`${projectTitle} website screenshot`}
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                  style={{
                    display: 'block',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="wl-case-details reveal">
            <div>
              <span>Client</span>
              <strong>{clientCompany}</strong>
              <p>{clientTitle ? `${clientName}, ${clientTitle}` : clientName}</p>
            </div>
            <div>
              <span>Timeline</span>
              <strong>{projectDuration}</strong>
              <p>Strategy, design, build, launch</p>
            </div>
            <div>
              <span>Launch</span>
              <strong>{date}</strong>
              <p>Responsive site delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wl-case-results">
        <div className="ds-container">
          <div className="wl-case-section-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Outcomes
              </div>
              <h2 className="h-1">
                The numbers that{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  moved
                </span>
                .
              </h2>
            </div>
            <p className="body-lg">
              The work was measured against clear business outcomes: qualified leads,
              engagement, conversion paths, performance, and mobile usability.
            </p>
          </div>

          <div className="wl-case-results-grid">
            {results.map((result, index) => (
              <div key={`${result.metric}-${index}`} className="wl-case-result-card ds-card reveal">
                <div className="wl-case-result-value">{result.value}</div>
                <div className="wl-case-result-metric">{result.metric}</div>
                <p className="body-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wl-case-gallery-section">
        <div className="ds-container">
          <div className="wl-case-section-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Screens
              </div>
              <h2 className="h-2">Project gallery.</h2>
            </div>
            <p className="body-lg">
              Website screens and responsive views from the finished build.
            </p>
          </div>

          <div className="wl-case-gallery reveal">
            <button
              type="button"
              className="wl-case-gallery-main"
              onClick={() => openLightbox(selectedImage)}
              aria-label={`Open ${selectedGalleryImage.alt} in gallery`}
            >
              <Image
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.alt}
                width={1400}
                height={900}
                sizes="100vw"
                style={{
                  display: 'block',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  width: '100%',
                }}
              />
              <span>Open preview <ArrowIcon /></span>
            </button>

            {galleryImages.length > 1 && (
              <div className="wl-case-thumbs" aria-label="Project screenshots">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    className={selectedImage === index ? 'is-active' : ''}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Show screenshot ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={360}
                      height={220}
                      sizes="(max-width: 768px) 33vw, 180px"
                      style={{
                        display: 'block',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        width: '100%',
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="wl-case-narrative">
        <div className="ds-container">
          <div className="wl-case-two-col">
            <div className="wl-case-list-card ds-card reveal">
              <div className="eyebrow">
                <span className="dot" />
                Challenges
              </div>
              <h2 className="h-2">What had to change.</h2>
              <ul>
                {challenges.map((challenge, index) => (
                  <li key={`${challenge}-${index}`}>
                    <span><AlertIcon /></span>
                    <p>{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="wl-case-list-card wl-case-list-card-accent ds-card reveal">
              <div className="eyebrow">
                <span className="dot" />
                Solutions
              </div>
              <h2 className="h-2">How we solved it.</h2>
              <ul>
                {solutions.map((solution, index) => (
                  <li key={`${solution}-${index}`}>
                    <span><CheckIcon /></span>
                    <p>{solution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wl-case-stack">
        <div className="ds-container">
          <div className="wl-case-stack-grid">
            <div className="wl-case-tech reveal">
              <div className="eyebrow">
                <span className="dot" />
                Stack
              </div>
              <h2 className="h-2">Tools and systems.</h2>
              <div className="wl-case-tech-list">
                {technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="wl-case-testimonial ds-card reveal">
              <div className="wl-case-quote-mark">&ldquo;</div>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="wl-case-author">
                <div>{getInitials(testimonial.author)}</div>
                <span>
                  <strong>{testimonial.author}</strong>
                  {testimonial.title} at {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wl-case-final-cta">
        <div className="ds-container">
          <div className="wl-case-cta-card reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Next project
              </div>
              <h2 className="h-1">
                Want results like{' '}
                <span className="italic-serif">{featuredMetrics[0]?.value ?? 'this'}</span>
                ?
              </h2>
            </div>
            <div>
              <p>
                Let&apos;s map the strategy, design the experience, and build a website that gives
                visitors a clear reason to act.
              </p>
              <div className="wl-case-cta-actions">
                <Link href={ctaLink}>{ctaText} <ArrowIcon /></Link>
                <Link href="/projects">View more work <ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div className="wl-case-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="wl-case-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="wl-case-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              Close
            </button>

            {galleryImages.length > 1 && (
              <button
                type="button"
                className="wl-case-lightbox-nav wl-case-lightbox-prev"
                onClick={goToPreviousImage}
                aria-label="Previous image"
              >
                Prev
              </button>
            )}

            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1600}
              height={1000}
              priority
              style={{
                display: 'block',
                height: 'auto',
                maxHeight: '82vh',
                maxWidth: '100%',
                objectFit: 'contain',
                width: 'auto',
              }}
            />

            {galleryImages.length > 1 && (
              <button
                type="button"
                className="wl-case-lightbox-nav wl-case-lightbox-next"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                Next
              </button>
            )}

            <div className="wl-case-lightbox-caption">
              <span>{lightboxImageIndex + 1} / {galleryImages.length}</span>
              {lightboxImage.caption || lightboxImage.alt}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .wl-case,
        .wl-case * {
          min-width: 0;
        }

        .wl-case {
          background: var(--bg);
          color: var(--ink);
          overflow: hidden;
        }

        .wl-case img {
          max-width: 100%;
        }

        .wl-case a,
        .wl-case button {
          touch-action: manipulation;
        }

        .wl-case-hero {
          padding-top: clamp(80px, 12vh, 150px);
          padding-bottom: calc(var(--section-y) * 0.8);
        }

        .wl-case-meta,
        .wl-case-section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 64px;
        }

        .wl-case-index,
        .wl-case-result-metric,
        .wl-case-lightbox-caption span {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-mute);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          overflow-wrap: anywhere;
        }

        .wl-case-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.85fr);
          gap: clamp(48px, 7vw, 96px);
          align-items: center;
        }

        .wl-case-title {
          font-size: clamp(52px, 7vw, 128px);
          max-width: 1050px;
          overflow-wrap: anywhere;
        }

        .wl-case-overview {
          max-width: 740px;
          margin-top: 40px;
        }

        .wl-case-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
        }

        .wl-case-actions .ds-btn {
          min-height: 48px;
        }

        .wl-case-browser {
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid var(--line-strong);
          background: var(--bg-elev-2);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.58);
          transform: rotate(-1.5deg);
          transition: transform 0.6s var(--ease), border-color 0.3s var(--ease);
        }

        .wl-case-browser:hover {
          border-color: color-mix(in oklch, var(--accent), var(--line-strong) 55%);
          transform: rotate(0deg) translateY(-4px);
        }

        .wl-case-browser-bar {
          align-items: center;
          background: var(--bg-elev-2);
          border-bottom: 1px solid var(--line);
          display: flex;
          gap: 7px;
          padding: 10px 14px;
        }

        .wl-case-browser-bar span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .wl-case-browser-bar span:nth-child(1) { background: #ff5f57; }
        .wl-case-browser-bar span:nth-child(2) { background: #ffbd2e; }
        .wl-case-browser-bar span:nth-child(3) { background: #28ca41; }

        .wl-case-browser-bar div {
          flex: 1;
          margin-left: 8px;
          background: var(--bg);
          border-radius: 5px;
          padding: 3px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--ink-mute);
          letter-spacing: 0.04em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .wl-case-browser-image {
          aspect-ratio: 16 / 11;
          overflow: hidden;
          contain: layout paint;
        }

        .wl-case-details {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: clamp(56px, 7vw, 96px);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .wl-case-details > div {
          padding: 28px;
          border-right: 1px solid var(--line);
        }

        .wl-case-details > div:last-child {
          border-right: 0;
        }

        .wl-case-details span {
          display: block;
          margin-bottom: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-mute);
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .wl-case-details strong {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(24px, 2.4vw, 38px);
          font-weight: 500;
          letter-spacing: -0.03em;
          color: var(--ink);
          overflow-wrap: anywhere;
        }

        .wl-case-details p {
          margin-top: 10px;
          color: var(--ink-dim);
          font-size: 14px;
          line-height: 1.55;
        }

        .wl-case-results,
        .wl-case-gallery-section,
        .wl-case-narrative,
        .wl-case-stack,
        .wl-case-final-cta {
          padding-top: var(--section-y);
          padding-bottom: var(--section-y);
        }

        .wl-case-results {
          background: var(--bg-elev);
        }

        .wl-case-section-head {
          align-items: end;
        }

        .wl-case-section-head h2 {
          margin-top: 24px;
          max-width: 850px;
        }

        .wl-case-section-head p {
          max-width: 540px;
          margin: 0;
        }

        .wl-case-results-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .wl-case-result-card {
          padding: 28px;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.45s var(--ease), border-color 0.3s var(--ease), background 0.3s var(--ease);
        }

        .wl-case-result-card:hover {
          transform: translateY(-4px);
          border-color: var(--line-strong);
          background: var(--bg-elev-2);
        }

        .wl-case-result-value {
          font-family: var(--font-display);
          font-size: clamp(42px, 5vw, 82px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          color: var(--accent);
          overflow-wrap: anywhere;
        }

        .wl-case-result-metric {
          margin-top: 24px;
          color: var(--ink);
        }

        .wl-case-result-card p {
          margin-top: 14px;
        }

        .wl-case-gallery {
          display: grid;
          gap: 20px;
        }

        .wl-case-gallery-main {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 360px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          background: var(--bg-elev);
          cursor: pointer;
          contain: layout paint;
          padding: 0;
        }

        .wl-case-gallery-main img {
          transition: transform 0.8s var(--ease), filter 0.8s var(--ease);
        }

        .wl-case-gallery-main:hover img {
          transform: scale(1.035);
          filter: saturate(1.08);
        }

        .wl-case-gallery-main > span {
          position: absolute;
          right: 20px;
          bottom: 20px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.55);
          color: var(--ink);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .wl-case-thumbs {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }

        .wl-case-thumbs button {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--r-md);
          background: var(--bg-elev);
          cursor: pointer;
          min-height: 64px;
          opacity: 0.58;
          padding: 0;
          transition: opacity 0.3s var(--ease), transform 0.3s var(--ease), border-color 0.3s var(--ease);
        }

        .wl-case-thumbs button:hover,
        .wl-case-thumbs button.is-active {
          opacity: 1;
          transform: translateY(-2px);
          border-color: var(--accent);
        }

        .wl-case-two-col,
        .wl-case-stack-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .wl-case-list-card {
          padding: clamp(28px, 4vw, 48px);
          background: var(--bg-elev);
        }

        .wl-case-list-card-accent {
          background: var(--bg-elev-2);
        }

        .wl-case-list-card h2 {
          margin-top: 20px;
          margin-bottom: 32px;
        }

        .wl-case-list-card ul {
          display: grid;
          gap: 18px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .wl-case-list-card li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 14px;
          align-items: start;
          color: var(--ink-dim);
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .wl-case-list-card li span {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--accent);
          border: 1px solid var(--line-strong);
          background: color-mix(in oklch, var(--accent), transparent 92%);
        }

        .wl-case-tech {
          padding: clamp(28px, 4vw, 48px) 0;
        }

        .wl-case-tech h2 {
          margin-top: 20px;
        }

        .wl-case-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }

        .wl-case-tech-list span {
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          color: var(--ink-dim);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          padding: 12px 16px;
          text-transform: uppercase;
          overflow-wrap: anywhere;
          transition: background 0.3s var(--ease), color 0.3s var(--ease), border-color 0.3s var(--ease), transform 0.3s var(--ease);
        }

        .wl-case-tech-list span:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-ink);
          transform: translateY(-1px);
        }

        .wl-case-testimonial {
          padding: clamp(32px, 5vw, 64px);
          background: var(--bg-elev-2);
        }

        .wl-case-quote-mark {
          font-family: var(--font-serif);
          font-size: clamp(84px, 9vw, 140px);
          line-height: 0.7;
          color: var(--accent);
          opacity: 0.42;
          margin-bottom: 20px;
        }

        .wl-case-testimonial blockquote {
          margin: 0;
          color: var(--ink);
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 44px);
          line-height: 1.12;
          letter-spacing: -0.03em;
          overflow-wrap: anywhere;
        }

        .wl-case-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }

        .wl-case-author > div {
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: var(--r-md);
          background: var(--accent);
          color: var(--accent-ink);
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: -0.03em;
        }

        .wl-case-author span {
          display: grid;
          gap: 4px;
          color: var(--ink-mute);
          font-size: 14px;
          line-height: 1.4;
        }

        .wl-case-author strong {
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .wl-case-final-cta {
          padding-top: 0;
        }

        .wl-case-cta-card {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.75fr);
          gap: clamp(36px, 7vw, 96px);
          align-items: end;
          overflow: hidden;
          border-radius: var(--r-lg);
          background: var(--accent);
          color: var(--accent-ink);
          padding: clamp(44px, 8vw, 110px) clamp(28px, 6vw, 90px);
        }

        .wl-case-cta-card .eyebrow,
        .wl-case-cta-card .dot {
          color: var(--accent-ink);
        }

        .wl-case-cta-card .dot {
          background: currentColor;
          box-shadow: 0 0 0 4px color-mix(in oklch, var(--accent-ink), transparent 82%);
        }

        .wl-case-cta-card h2 {
          margin-top: 24px;
          color: var(--accent-ink);
        }

        .wl-case-cta-card p {
          color: color-mix(in oklch, var(--accent-ink), transparent 18%);
          font-size: clamp(17px, 1.2vw, 20px);
          line-height: 1.55;
          margin: 0;
        }

        .wl-case-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .wl-case-cta-actions a {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          min-height: 48px;
          padding: 16px 22px;
          border-radius: 999px;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid color-mix(in oklch, var(--accent-ink), transparent 70%);
          color: var(--accent-ink);
          text-align: center;
          transition: background 0.3s var(--ease), color 0.3s var(--ease), transform 0.3s var(--ease);
        }

        .wl-case-cta-actions a:first-child {
          background: var(--accent-ink);
          color: var(--accent);
          border-color: var(--accent-ink);
        }

        .wl-case-cta-actions a:hover {
          transform: translateY(-1px);
        }

        .wl-case-lightbox {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(16px, 4vw, 48px);
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
        }

        .wl-case-lightbox-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1500px;
          max-height: 100%;
        }

        .wl-case-lightbox-close,
        .wl-case-lightbox-nav,
        .wl-case-lightbox-caption {
          position: absolute;
          z-index: 2;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          background: rgba(10, 13, 11, 0.72);
          color: var(--ink);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .wl-case-lightbox-close,
        .wl-case-lightbox-nav {
          cursor: pointer;
          min-height: 44px;
          padding: 12px 16px;
          transition: background 0.3s var(--ease), color 0.3s var(--ease), transform 0.3s var(--ease);
        }

        .wl-case-lightbox-close:hover,
        .wl-case-lightbox-nav:hover {
          background: var(--accent);
          color: var(--accent-ink);
          transform: translateY(-1px);
        }

        .wl-case-lightbox-close {
          top: 0;
          right: 0;
        }

        .wl-case-lightbox-prev {
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .wl-case-lightbox-next {
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .wl-case-lightbox-prev:hover,
        .wl-case-lightbox-next:hover {
          transform: translateY(calc(-50% - 1px));
        }

        .wl-case-lightbox-caption {
          left: 50%;
          bottom: 0;
          display: flex;
          gap: 12px;
          max-width: min(720px, calc(100% - 32px));
          padding: 12px 16px;
          transform: translateX(-50%);
          color: var(--ink-dim);
          text-align: center;
        }

        @media (max-width: 1100px) {
          .wl-case-hero-grid,
          .wl-case-cta-card {
            grid-template-columns: 1fr;
          }

          .wl-case-browser {
            transform: none;
          }

          .wl-case-results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wl-case-stack-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .wl-case-meta,
          .wl-case-section-head {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 44px;
          }

          .wl-case-details,
          .wl-case-two-col {
            grid-template-columns: 1fr;
          }

          .wl-case-details > div {
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .wl-case-details > div:last-child {
            border-bottom: 0;
          }

          .wl-case-thumbs {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .wl-case-hero {
            padding-top: clamp(56px, 14vw, 72px);
          }

          .wl-case-title {
            font-size: clamp(42px, 13vw, 76px);
            line-height: 0.98;
          }

          .wl-case-overview,
          .wl-case-actions {
            margin-top: 28px;
          }

          .wl-case-actions,
          .wl-case-cta-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .wl-case-actions .ds-btn,
          .wl-case-cta-actions a {
            justify-content: center;
            width: 100%;
          }

          .wl-case-browser-image {
            aspect-ratio: 4 / 3;
          }

          .wl-case-results-grid {
            grid-template-columns: 1fr;
          }

          .wl-case-gallery-main {
            min-height: clamp(220px, 68vw, 300px);
          }

          .wl-case-thumbs {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wl-case-lightbox-nav {
            top: auto;
            bottom: 56px;
          }

          .wl-case-lightbox-prev {
            left: 16px;
          }

          .wl-case-lightbox-next {
            right: 16px;
          }

          .wl-case-lightbox-prev,
          .wl-case-lightbox-next,
          .wl-case-lightbox-prev:hover,
          .wl-case-lightbox-next:hover {
            transform: none;
          }

          .wl-case-lightbox-caption {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .wl-case-results,
          .wl-case-gallery-section,
          .wl-case-narrative,
          .wl-case-stack,
          .wl-case-final-cta {
            padding-top: calc(var(--section-y) * 0.85);
            padding-bottom: calc(var(--section-y) * 0.85);
          }

          .wl-case-details > div,
          .wl-case-result-card,
          .wl-case-list-card,
          .wl-case-testimonial {
            padding: 22px;
          }

          .wl-case-gallery-main {
            min-height: clamp(200px, 64vw, 250px);
          }

          .wl-case-thumbs {
            gap: 8px;
          }

          .wl-case-list-card li {
            grid-template-columns: 28px 1fr;
          }

          .wl-case-list-card li span {
            width: 28px;
            height: 28px;
          }

          .wl-case-lightbox {
            padding: 12px;
          }

          .wl-case-lightbox-close {
            top: 8px;
            right: 8px;
          }
        }

        @media (max-width: 360px) {
          .wl-case-meta,
          .wl-case-section-head {
            gap: 18px;
            margin-bottom: 34px;
          }

          .wl-case-title {
            font-size: clamp(38px, 12vw, 52px);
          }

          .wl-case-thumbs {
            grid-template-columns: 1fr;
          }

          .wl-case-tech-list span,
          .wl-case-cta-actions a,
          .wl-case-actions .ds-btn {
            width: 100%;
          }

          .wl-case-author {
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wl-case-browser,
          .wl-case-result-card,
          .wl-case-gallery-main img,
          .wl-case-thumbs button,
          .wl-case-tech-list span,
          .wl-case-cta-actions a,
          .wl-case-lightbox-close,
          .wl-case-lightbox-nav {
            transition: none !important;
          }

          .wl-case-browser:hover,
          .wl-case-result-card:hover,
          .wl-case-gallery-main:hover img,
          .wl-case-thumbs button:hover,
          .wl-case-tech-list span:hover,
          .wl-case-cta-actions a:hover,
          .wl-case-lightbox-close:hover,
          .wl-case-lightbox-nav:hover {
            transform: none !important;
          }
        }
      `}</style>
    </article>
  );
}

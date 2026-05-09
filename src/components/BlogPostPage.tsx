import Image from 'next/image';
import Link from 'next/link';
import { getRelatedBlogPosts, type BlogPost } from '@/lib/blog-posts';
import SubscribeForm from '@/components/SubscribeForm';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function countWords(post: BlogPost): number {
  const chunks = post.sections.flatMap((s) => [
    s.heading,
    s.intro ?? '',
    ...s.paragraphs,
    ...(s.bullets ?? []),
  ]);
  return chunks.join(' ').trim().split(/\s+/).filter(Boolean).length;
}

function buildSchema(post: BlogPost) {
  const url = `https://webloftstudio.com/blog/${post.slug}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url,
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      articleSection: post.category,
      timeRequired: post.readTime,
      wordCount: countWords(post),
      keywords: post.keywords,
      image: `https://webloftstudio.com${post.image}`,
      author: {
        '@type': 'Person',
        name: 'Webloft Studio',
        url: 'https://webloftstudio.com/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Webloft Studio',
        url: 'https://webloftstudio.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://webloftstudio.com/webloftstudio.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Blog',
          item: 'https://webloftstudio.com/blog',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: post.title,
          item: url,
        },
      ],
    },
  ];
}

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const related = getRelatedBlogPosts(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(post)) }}
      />

      <main className="wl-blog-post-page">
        <section className="wl-blog-post-hero">
          <div className="ds-container">
            <div className="wl-blog-meta-row reveal">
              <Link href="/blog" className="eyebrow wl-blog-back-link">
                <span className="dot" />
                Blog
              </Link>
              <div className="wl-blog-kicker">({post.number}) - {post.category}</div>
            </div>

            <div className="wl-blog-post-hero-grid">
              <div className="reveal">
                <div className="wl-blog-post-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h1 className="h-display wl-blog-post-title">{post.title}</h1>
                <p className="body-lg wl-blog-post-excerpt">{post.excerpt}</p>
                <div className="wl-blog-post-actions">
                  <Link href="/contact" className="ds-btn ds-btn-primary">
                    Start a project <ArrowIcon />
                  </Link>
                  <Link href="/services" className="ds-btn ds-btn-ghost">
                    View services <ArrowIcon />
                  </Link>
                </div>
              </div>

              <aside className="wl-blog-post-visual reveal" aria-label="Article summary">
                <div className="wl-blog-image-wrap">
                  <Image
                    src={post.image}
                    alt={`${post.title} by Webloft Studio`}
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                    priority
                  />
                </div>
                <div className="wl-blog-takeaways">
                  <span>Key takeaways</span>
                  <ul>
                    {post.takeaways.map((takeaway) => (
                      <li key={takeaway}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <article className="wl-blog-article-section">
          <div className="ds-container wl-blog-article-layout">
            <aside className="wl-blog-toc reveal" aria-label="Article contents">
              <div className="wl-blog-toc-card">
                <span>In this article</span>
                {post.sections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>
                    {section.heading}
                  </a>
                ))}
              </div>
            </aside>

            <div className="wl-blog-prose">
              {post.sections.map((section, index) => (
                <section id={section.id} className="wl-blog-content-block reveal" key={section.id}>
                  <div className="wl-blog-section-number">{String(index + 1).padStart(2, '0')}</div>
                  <h2>{section.heading}</h2>
                  {section.intro && <p className="wl-blog-intro">{section.intro}</p>}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>

        <section className="wl-blog-post-cta-section">
          <div className="ds-container">
            <div className="wl-blog-post-cta reveal">
              <div>
                <p className="eyebrow">Next step</p>
                <h2>{post.ctaTitle}</h2>
                <p>{post.ctaText}</p>
              </div>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Talk to Webloft <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="wl-blog-subscribe-section">
          <div className="ds-container">
            <div className="wl-subscribe-inline reveal">
              <div className="wl-subscribe-inline-copy">
                <p className="eyebrow">
                  <span className="dot" />
                  Webloft Journal
                </p>
                <h2 className="wl-subscribe-inline-title">Practical website ideas in your inbox.</h2>
                <p className="wl-subscribe-inline-desc">
                  No noise. Occasional notes on design, SEO, conversion, and the website decisions that help small and medium businesses grow.
                </p>
              </div>
              <div className="wl-subscribe-inline-form">
                <SubscribeForm variant="inline" />
              </div>
            </div>
          </div>
        </section>

        <section className="wl-blog-related-section">
          <div className="ds-container">
            <div className="wl-blog-section-head reveal">
              <div>
                <div className="eyebrow">
                  <span className="dot" />
                  Related articles
                </div>
                <h2 className="h-2">Keep reading.</h2>
              </div>
              <Link href="/blog" className="ds-btn ds-btn-ghost">
                All articles <ArrowIcon />
              </Link>
            </div>

            <div className="wl-blog-card-grid">
              {related.map((item) => (
                <Link href={`/blog/${item.slug}`} className="wl-blog-card ds-card reveal" key={item.slug}>
                  <div className="wl-blog-card-image">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div className="wl-blog-card-body">
                    <div className="wl-blog-card-meta">
                      <span>{item.category}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="wl-blog-card-link">
                      Read article <ArrowIcon />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

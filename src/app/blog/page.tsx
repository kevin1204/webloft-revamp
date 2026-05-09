import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-posts';
import BlogIndex from '@/components/BlogIndex';
import SubscribeModal from '@/components/SubscribeModal';
import SubscribeForm from '@/components/SubscribeForm';
import CTASection from '@/components/home/CTASection';

export const metadata = {
  title: 'Web Design Blog | SEO, Conversion & Website Growth | Webloft Studio',
  description:
    'Actionable website strategy, SEO, conversion, Webflow, maintenance, and local web design insights from Webloft Studio.',
  keywords: [
    'web design blog',
    'website strategy',
    'SEO insights',
    'conversion focused web design',
    'Webflow tips',
    'business website tips',
  ],
  alternates: {
    canonical: 'https://webloftstudio.com/blog',
  },
};

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export default function Blog() {
  const featured = BLOG_POSTS.filter((post) => post.featured);
  const latest = [...BLOG_POSTS].sort((a, b) => Number(new Date(b.isoDate)) - Number(new Date(a.isoDate)));
  const topPost = latest[0];

  return (
    <main className="wl-blog-page">
      <section className="wl-blog-hero">
        <div className="ds-container">
          <div className="wl-blog-meta-row reveal">
            <div className="eyebrow">
              <span className="dot" />
              Webloft Journal
            </div>
            <div className="wl-blog-kicker">({String(BLOG_POSTS.length).padStart(2, '0')}) - Articles</div>
          </div>

          <div className="wl-blog-hero-grid">
            <div className="reveal">
              <h1 className="h-display wl-blog-title">
                Website thinking for businesses that want{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  better leads.
                </span>
              </h1>
            </div>
            <div className="wl-blog-hero-copy reveal">
              <p className="body-lg">
                Practical notes on web design, SEO, conversion, Webflow, maintenance, analytics, and the decisions that make a website easier to trust and easier to act on.
              </p>
              <div className="wl-blog-hero-actions">
                <Link href="/contact" className="ds-btn ds-btn-primary">
                  Talk to us <ArrowIcon />
                </Link>
                <SubscribeModal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {topPost && (
        <section className="wl-blog-featured-section">
          <div className="ds-container">
            <Link href={`/blog/${topPost.slug}`} className="wl-blog-feature-card reveal">
              <div className="wl-blog-feature-image">
                <Image
                  src={topPost.image}
                  alt={topPost.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  priority
                />
              </div>
              <div className="wl-blog-feature-copy">
                <div className="wl-blog-card-meta">
                  <span>{topPost.category}</span>
                  <span>{topPost.date}</span>
                  <span>{topPost.readTime}</span>
                </div>
                <h2>{topPost.title}</h2>
                <p>{topPost.excerpt}</p>
                <div className="wl-blog-card-link">
                  Read latest <ArrowIcon />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="wl-blog-list-section">
        <div className="ds-container">
          <div className="wl-blog-section-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Featured
              </div>
              <h2 className="h-2">Useful, not noisy.</h2>
            </div>
            <p className="body-lg">
              Start with the strategy pieces that help most businesses make better website decisions before they spend on design, SEO, or ads.
            </p>
          </div>

          <div className="wl-blog-card-grid wl-blog-card-grid-featured">
            {featured.map((post) => (
              <Link href={`/blog/${post.slug}`} className="wl-blog-card ds-card reveal" key={post.slug}>
                <div className="wl-blog-card-image">
                  <div className="wl-blog-card-badge">
                    <span className="wl-blog-card-number">{post.number}</span>
                    <span className="wl-blog-card-cat">{post.category}</span>
                  </div>
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="wl-blog-card-body">
                  <div className="wl-blog-card-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="wl-blog-card-link">
                    Read article <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogIndex posts={BLOG_POSTS} />

      <section className="wl-blog-newsletter-section">
        <div className="ds-container">
          <div className="wl-blog-newsletter reveal">
            <div>
              <p className="eyebrow">Website growth notes</p>
              <h2>Get practical website ideas without the noise.</h2>
              <p>
                Occasional notes on better service pages, stronger conversion paths, SEO foundations, and launch decisions.
              </p>
            </div>
            <SubscribeForm variant="footer" />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

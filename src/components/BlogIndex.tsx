'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog-posts';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: posts.length };
    posts.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, [posts]);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return [...posts]
      .sort((a, b) => Number(new Date(b.isoDate)) - Number(new Date(a.isoDate)))
      .filter((post) => {
        const matchCat = activeFilter === 'All' || post.category === activeFilter;
        const matchSearch =
          !q ||
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q);
        return matchCat && matchSearch;
      });
  }, [posts, activeFilter, searchQuery]);

  function clearFilters() {
    setActiveFilter('All');
    setSearchQuery('');
  }

  return (
    <section className="wl-blog-list-section wl-blog-all-section">
      <div className="ds-container">
        {/* Controls: filters + search */}
        <div className="wl-blog-controls reveal">
          <div className="wl-blog-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`wl-blog-filter-pill${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat.toUpperCase()}&nbsp;
                <span className="wl-blog-filter-count">{counts[cat]}</span>
              </button>
            ))}
          </div>
          <label className="wl-blog-search">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              placeholder="Search the journal…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <kbd>⌘ K</kbd>
          </label>
        </div>

        {/* Section head */}
        <div className="wl-blog-section-head reveal">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              All articles
            </div>
            <h2 className="h-2">Field notes for better websites.</h2>
          </div>
          <p className="body-lg">
            {filtered.length === posts.length
              ? 'Browse the full collection of Webloft articles on design, SEO, maintenance, local search, conversion, and platform decisions.'
              : `${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'} found.`}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="wl-blog-card-grid">
            {filtered.map((post) => (
              <Link href={`/blog/${post.slug}`} className="wl-blog-card ds-card reveal" key={post.slug}>
                <div className="wl-blog-card-image">
                  <div className="wl-blog-card-badge">
                    <span className="wl-blog-card-number">{post.number}</span>
                    <span className="wl-blog-card-cat">{post.category}</span>
                  </div>
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
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
        ) : (
          <div className="wl-blog-empty">
            <p>No articles match your search.</p>
            <button className="ds-btn ds-btn-ghost" onClick={clearFilters}>
              Clear filters <ArrowIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

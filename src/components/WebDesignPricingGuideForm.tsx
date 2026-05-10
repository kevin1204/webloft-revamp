"use client";

import { useState } from "react";
import Link from "next/link";
import { trackLeadMagnetDownload } from "@/lib/analytics";

export default function WebDesignPricingGuideForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    projectType: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.business,
          website: '',
          phone: '',
          _honeypot: '',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send request');
      }

      trackLeadMagnetDownload('pricing_guide', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Pricing guide form error:', error);
      setSubmitError('Something went wrong. Please try again or email us at info@webloftstudio.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border body outline-none transition-colors`;
  const inputStyle = {
    background: 'var(--bg-elev-2)',
    borderColor: 'var(--line)',
    color: 'var(--ink)',
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="ds-card p-8 md:p-12">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--bg-elev-2)' }}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="h-2 mb-4">Request Received!</h1>
            <p className="body-lg mb-6" style={{ color: 'var(--ink-dim)' }}>
              Thanks for your interest in our Web Design Pricing Guide.
            </p>
            <p className="body mb-8" style={{ color: 'var(--ink-dim)' }}>
              Our team will review your request and send you a personalised pricing breakdown and guide within 24–48 hours. Keep an eye on your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Get a Custom Quote
              </Link>
              <Link href="/" className="ds-btn ds-btn-ghost">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-16" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center mb-12">
            <div className="eyebrow mb-6">Complete Pricing Guide</div>
            <h1 className="h-1 mb-6">
              Complete Web Design{' '}
              <span style={{ color: 'var(--accent)' }}>Pricing Guide</span>
            </h1>
            <p className="body-lg max-w-4xl mx-auto mb-8" style={{ color: 'var(--ink-dim)' }}>
              Everything you need to know about web design pricing.{' '}
              <strong style={{ color: 'var(--ink)' }}>Get accurate cost estimates and avoid overpaying.</strong>
            </p>
            <div className="flex items-center justify-center gap-2 body" style={{ color: 'var(--ink-mute)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Download • 47 Pages • Regularly Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="ds-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <div className="ds-card p-8 md:p-10">
                <h2 className="h-3 mb-4">Download Your Free Guide</h2>
                <p className="body mb-8" style={{ color: 'var(--ink-dim)' }}>
                  Get instant access to our comprehensive pricing guide that covers everything from basic websites
                  to complex e-commerce platforms. No spam, just valuable insights.
                </p>

                {submitError && (
                  <div className="mb-4 p-4 rounded-lg body text-sm" style={{ background: 'var(--bg-elev-2)', borderLeft: '3px solid #ef4444', color: 'var(--ink)' }}>
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Enter your business name"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select project type</option>
                      <option value="business-website">Business Website</option>
                      <option value="ecommerce">E-commerce Store</option>
                      <option value="portfolio">Portfolio Site</option>
                      <option value="blog">Blog/Content Site</option>
                      <option value="saas">SaaS Application</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ds-btn ds-btn-primary w-full justify-center"
                    style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Preparing Download...
                      </>
                    ) : (
                      <>
                        Download Free Guide
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                <p className="body mt-4 text-center" style={{ color: 'var(--ink-mute)', fontSize: '0.75rem' }}>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Right Column - Guide Preview */}
            <div className="order-1 lg:order-2">
              <h2 className="h-2 mb-8">What&apos;s Inside the Guide?</h2>

              <div className="space-y-6 mb-12">
                {[
                  { num: '1', title: 'Website Type Breakdown', desc: 'Detailed pricing for business sites, e-commerce, portfolios, blogs, and custom applications' },
                  { num: '2', title: 'Cost Factors Explained', desc: 'Understanding what affects pricing: complexity, features, design, and ongoing maintenance' },
                  { num: '3', title: 'Hidden Costs to Avoid', desc: 'Common hidden fees and how to budget for hosting, domains, and ongoing maintenance' },
                  { num: '4', title: 'ROI Calculations', desc: 'How to calculate return on investment and justify your website budget' },
                  { num: '5', title: 'Budget Planning Templates', desc: 'Ready-to-use templates to plan and track your website project budget' },
                  { num: '6', title: 'Industry Benchmarks', desc: 'Real pricing data from projects across different industries and regions' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0" style={{ background: 'var(--accent)' }}>
                      <span className="body font-bold text-sm" style={{ color: 'var(--bg)' }}>{item.num}</span>
                    </div>
                    <div>
                      <h3 className="h-3 mb-2" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                      <p className="body" style={{ color: 'var(--ink-dim)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Preview */}
              <div className="ds-card p-6">
                <h3 className="h-3 mb-4">Quick Price Reference</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--line)' }}>
                    <span className="body" style={{ color: 'var(--ink-dim)' }}>Basic Business Website</span>
                    <span className="body font-semibold" style={{ color: 'var(--accent)' }}>$2,500 - $5,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid var(--line)' }}>
                    <span className="body" style={{ color: 'var(--ink-dim)' }}>E-commerce Store</span>
                    <span className="body font-semibold" style={{ color: 'var(--accent)' }}>$5,000 - $15,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="body" style={{ color: 'var(--ink-dim)' }}>Custom Web Application</span>
                    <span className="body font-semibold" style={{ color: 'var(--accent)' }}>$15,000 - $50,000+</span>
                  </div>
                </div>
                <p className="body mt-4" style={{ color: 'var(--ink-mute)', fontSize: '0.8rem' }}>
                  *Prices vary based on complexity, features, and requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">What to Expect</h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              We send you a personalised breakdown — not a generic PDF. Here&apos;s what&apos;s in it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
                ),
                title: 'Honest pricing ranges',
                desc: "What service businesses like yours typically spend — no inflated agency quotes or race-to-the-bottom freelancer rates.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'What actually drives cost',
                desc: "We explain which factors move the price — custom design, copywriting, SEO setup, ongoing support — so you can scope smart.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: 'Questions to ask any agency',
                desc: "A short list of questions that separate studios doing real work from those selling polished decks with no delivery track record.",
              },
            ].map((card) => (
              <div key={card.title} className="ds-card p-8 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--bg-elev-2)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                    {card.icon}
                  </svg>
                </div>
                <h3 className="h-3 mb-2" style={{ fontSize: '1rem' }}>{card.title}</h3>
                <p className="body" style={{ color: 'var(--ink-dim)', fontSize: '0.9rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">Stop Guessing About Web Design Costs</h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
            Get our comprehensive pricing guide and make informed decisions about your website project.
            Download it free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#form" className="ds-btn ds-btn-primary">
              Download Free Guide
            </a>
            <Link href="/contact" className="ds-btn ds-btn-ghost">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { trackLeadMagnetDownload } from "@/lib/analytics";

export default function FreeWebsiteAuditForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    phone: "",
    _honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json().catch(() => ({ error: 'Unexpected server response' }));

      if (!res.ok) {
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      trackLeadMagnetDownload('website_audit', formData);
      setIsSubmitted(true);
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <h1 className="h-2 mb-4">Thank You!</h1>
            <p className="body-lg mb-6" style={{ color: 'var(--ink-dim)' }}>
              Your free website audit checklist is on its way to your inbox.
            </p>
            <p className="body mb-8" style={{ color: 'var(--ink-dim)' }}>
              Check your email (including spam folder) for your comprehensive website audit checklist.
              We&apos;ll also send you valuable tips to improve your website&apos;s performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Get Professional Help
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
            <div className="eyebrow mb-6">Free Professional Analysis</div>
            <h1 className="h-1 mb-6">
              Get Your Free{' '}
              <span style={{ color: 'var(--accent)' }}>Website Audit</span>
            </h1>
            <p className="body-lg max-w-4xl mx-auto mb-8" style={{ color: 'var(--ink-dim)' }}>
              Discover exactly what&apos;s hurting your website&apos;s performance and how to fix it.{' '}
              <strong style={{ color: 'var(--ink)' }}>No strings attached.</strong>
            </p>
            <div className="flex items-center justify-center gap-2 body" style={{ color: 'var(--ink-mute)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Free • No Credit Card Required • Instant Access</span>
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
                <h2 className="h-3 mb-4">Get Your Free Audit Checklist</h2>
                <p className="body mb-8" style={{ color: 'var(--ink-dim)' }}>
                  Fill out the form below and we&apos;ll send you our comprehensive website audit checklist
                  that covers all the essential elements of a high-performing website.
                </p>

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-lg body text-sm" style={{ background: 'var(--bg-elev-2)', borderLeft: '3px solid #ef4444', color: 'var(--ink)' }}>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot — hidden from real users, catches bots */}
                  <input
                    type="text"
                    name="_honeypot"
                    value={formData._honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

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
                    <label htmlFor="website" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block body mb-2" style={{ color: 'var(--ink-dim)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Enter your phone number"
                    />
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Get My Free Audit Checklist
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

            {/* Right Column - Benefits */}
            <div className="order-1 lg:order-2">
              <h2 className="h-2 mb-8">What&apos;s Included in Your Free Audit?</h2>

              <div className="space-y-6 mb-12">
                {[
                  { title: 'Performance Analysis', desc: 'Page speed, mobile responsiveness, and core web vitals assessment' },
                  { title: 'SEO Health Check', desc: 'Meta tags, heading structure, keyword optimization, and search visibility' },
                  { title: 'User Experience Review', desc: 'Navigation, content structure, and conversion optimization opportunities' },
                  { title: 'Security & Technical Issues', desc: 'SSL certificates, broken links, and technical optimization recommendations' },
                  { title: 'Action Plan & Next Steps', desc: 'Prioritized recommendations with clear action items to improve your website' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--line)' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="h-3 mb-2" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                      <p className="body" style={{ color: 'var(--ink-dim)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="ds-card p-6">
                <h3 className="h-3 mb-3">Real audits. Real results.</h3>
                <p className="body mb-4" style={{ color: 'var(--ink-dim)', fontSize: '0.9rem' }}>
                  Every audit is done manually by our team — not a generic checklist generator. We review your actual site and send you a prioritised report with clear next steps.
                </p>
                <p className="body" style={{ color: 'var(--ink-dim)', fontSize: '0.9rem' }}>
                  See the quality of our work in our{' '}
                  <a href="/case-studies/flowga-yoga-studio" style={{ color: 'var(--accent)' }} className="underline">Flowga Yoga Studio</a>{' '}
                  and{' '}
                  <a href="/case-studies/amigo-contracting-services" style={{ color: 'var(--accent)' }} className="underline">Amigo Contracting</a>{' '}
                  case studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">What a Good Website Does</h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              See what we fixed — and what changed — for two real clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="ds-card p-8">
              <div className="eyebrow mb-3">Case Study</div>
              <h3 className="h-3 mb-3">Flowga Yoga Studio</h3>
              <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
                Replaced an outdated template site with a conversion-focused redesign. Clearer booking flow,
                faster load times, and local SEO improvements.
              </p>
              <div className="h-2 mb-1" style={{ color: 'var(--accent)' }}>+300%</div>
              <div className="body mb-6" style={{ color: 'var(--ink-mute)', fontSize: '0.85rem' }}>online bookings</div>
              <Link href="/case-studies/flowga-yoga-studio" style={{ color: 'var(--accent)' }} className="body underline text-sm font-medium">
                Read the full case study →
              </Link>
            </div>

            <div className="ds-card p-8">
              <div className="eyebrow mb-3">Case Study</div>
              <h3 className="h-3 mb-3">Amigo Contracting Services</h3>
              <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
                Complete brand and web overhaul for a growing contracting business. Professional positioning,
                improved lead capture, and a site that reflects the quality of their work.
              </p>
              <div className="h-2 mb-1" style={{ color: 'var(--accent)' }}>Full rebrand</div>
              <div className="body mb-6" style={{ color: 'var(--ink-mute)', fontSize: '0.85rem' }}>web + brand identity</div>
              <Link href="/case-studies/amigo-contracting-services" style={{ color: 'var(--accent)' }} className="body underline text-sm font-medium">
                Read the full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">Ready to Transform Your Website?</h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
            Get your free website audit checklist and discover exactly what&apos;s holding your website back from success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#form" className="ds-btn ds-btn-primary">
              Get My Free Audit Now
            </a>
            <Link href="/contact" className="ds-btn ds-btn-ghost">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackCTAClick, trackLeadMagnetDownload } from '@/lib/analytics';

export default function HighConvertingWebsites() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    currentWebsite: '',
    monthlyVisitors: '',
    currentLeads: '',
    industry: '',
  });

  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string }>({
    type: null,
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus({ type: 'error', message: 'Please fix the errors below and try again.' });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your conversion audit request...' });

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.company,
          website: formData.currentWebsite,
          phone: '',
          _honeypot: '',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: "Your conversion audit request has been sent! We'll analyze your website and get back to you within 24 hours with specific recommendations to increase your conversions."
        });

        trackLeadMagnetDownload('conversion_audit', formData);

        setFormData({
          name: '',
          email: '',
          company: '',
          currentWebsite: '',
          monthlyVisitors: '',
          currentLeads: '',
          industry: '',
        });

        setTimeout(() => {
          setFormStatus({ type: null, message: '' });
        }, 8000);
      } else {
        throw new Error(result.error || 'Failed to send request');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({
        type: 'error',
        message: 'There was an error sending your request. Please try again or contact us directly.'
      });
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border body outline-none transition-colors`;
  const inputStyle = {
    background: 'var(--bg-elev-2)',
    borderColor: 'var(--line)',
    color: 'var(--ink)',
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Hero Section - Problem-Focused */}
      <section className="pt-20 pb-16" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center">
            <p className="eyebrow mb-6">Conversion Optimization</p>
            <h1 className="h-1 mb-6">
              Your Website is Losing You{' '}
              <span style={{ color: 'var(--accent)' }}>$10,000+</span> Every Month
            </h1>
            <p className="body-lg max-w-4xl mx-auto mb-8" style={{ color: 'var(--ink-dim)' }}>
              While your competitors are generating <strong style={{ color: 'var(--ink)' }}>3x more leads</strong> from the same traffic,
              your website is turning away potential customers. We turn underperforming websites into{' '}
              <span style={{ color: 'var(--accent)' }} className="font-bold">conversion machines</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#conversion-audit"
                onClick={() => trackCTAClick('Get Free Conversion Audit', 'hero', '#conversion-audit')}
                className="ds-btn ds-btn-primary text-xl px-8 py-4"
              >
                Get Your Free Conversion Audit
              </Link>
              <Link
                href="#case-studies"
                onClick={() => trackCTAClick('See Case Studies', 'hero', '#case-studies')}
                className="ds-btn ds-btn-ghost text-xl px-8 py-4"
              >
                See Our 250%+ Results
              </Link>
            </div>
            <p className="body text-sm" style={{ color: 'var(--ink-mute)' }}>
              Free 30-minute conversion analysis · No obligation · Specific recommendations
            </p>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* Pain Points Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">
              Why 90% of Business Websites Fail to Convert
            </h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              Most websites look good but don&apos;t generate leads. Here&apos;s what&apos;s killing your conversions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                problem: "Confusing Navigation",
                description: "Visitors can't find what they're looking for and leave within 10 seconds",
                stat: "73% of visitors leave immediately",
              },
              {
                problem: "Weak Value Proposition",
                description: "Your homepage doesn't clearly explain why customers should choose you",
                stat: "Only 2% of visitors convert",
              },
              {
                problem: "No Clear Call-to-Action",
                description: "Visitors don't know what to do next after reading your content",
                stat: "85% lack clear CTAs",
              },
              {
                problem: "Mobile Optimization Issues",
                description: "Your site looks broken on phones where 60% of traffic comes from",
                stat: "60% of traffic is mobile",
              },
              {
                problem: "Slow Loading Speed",
                description: "Visitors abandon your site before it even loads completely",
                stat: "53% leave if page loads >3s",
              },
              {
                problem: "No Social Proof",
                description: "Visitors don't trust you because they don't see testimonials or reviews",
                stat: "92% trust peer reviews",
              }
            ].map((pain, index) => (
              <div key={index} className="ds-card p-8" style={{ borderLeft: '3px solid var(--accent)' }}>
                <h3 className="h-3 mb-3">{pain.problem}</h3>
                <p className="body mb-4" style={{ color: 'var(--ink-dim)' }}>{pain.description}</p>
                <div className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{pain.stat}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="body mb-6" style={{ color: 'var(--ink)' }}>
              <strong>Does your website have any of these problems?</strong>
            </p>
            <Link
              href="#conversion-audit"
              onClick={() => trackCTAClick('Fix My Website', 'pain_points', '#conversion-audit')}
              className="ds-btn ds-btn-primary text-lg px-8 py-4"
            >
              Yes, Fix My Website Now
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">
              How We Turn Underperforming Websites Into Lead Machines
            </h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              We don&apos;t just build websites — we build <strong style={{ color: 'var(--ink)' }}>conversion systems</strong> that turn visitors into customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="h-2 mb-6">
                Our 5-Step Conversion Optimization System
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Conversion Audit", description: "We analyze your current website and identify every conversion barrier costing you leads." },
                  { step: "02", title: "Strategy Development", description: "We create a custom conversion strategy based on your industry and target audience." },
                  { step: "03", title: "Design Optimization", description: "We redesign key pages to guide visitors toward taking action with proven conversion patterns." },
                  { step: "04", title: "Technical Implementation", description: "We implement advanced tracking, A/B testing, and conversion optimization tools." },
                  { step: "05", title: "Continuous Optimization", description: "We monitor performance and make ongoing improvements to maximize your ROI." }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
                      {step.step}
                    </div>
                    <div>
                      <h4 className="h-3 mb-2">{step.title}</h4>
                      <p className="body" style={{ color: 'var(--ink-dim)' }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ds-card p-8" style={{ background: 'var(--bg-elev)' }}>
              <h4 className="h-3 mb-6 text-center">Average Results</h4>
              <div className="space-y-4">
                {[
                  { label: 'Lead Generation Increase', value: '+250%' },
                  { label: 'Conversion Rate Improvement', value: '+180%' },
                  { label: 'Average ROI', value: '340%' },
                  { label: 'Time to Results', value: '30 Days' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center p-4 rounded-lg" style={{ background: 'var(--bg-elev-2)' }}>
                    <span className="body" style={{ color: 'var(--ink-dim)' }}>{row.label}</span>
                    <span className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-6">
              Real Results: Before &amp; After Case Studies
            </h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              See how we transformed underperforming websites into conversion machines for Canadian businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                company: "Flowga Yoga Studio",
                industry: "Wellness & Fitness",
                before: { leads: "Low online bookings", conversion: "2%", revenue: "Underperforming" },
                after: { leads: "+300% bookings", conversion: "Mobile-first", revenue: "+250% inquiries" },
                improvement: "300% increase in online bookings",
                timeframe: "4 weeks"
              },
              {
                company: "Amigo Contracting Services",
                industry: "Home Services",
                before: { leads: "Generic template site", conversion: "Low trust signals", revenue: "Underperforming" },
                after: { leads: "Custom brand site", conversion: "Clear service pages", revenue: "Qualified leads" },
                improvement: "Full brand & site overhaul",
                timeframe: "3 weeks"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="ds-card p-8">
                <div className="text-center mb-8">
                  <h3 className="h-3 mb-2">{caseStudy.company}</h3>
                  <p className="body" style={{ color: 'var(--ink-mute)' }}>{caseStudy.industry}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <h4 className="eyebrow mb-4" style={{ color: 'var(--ink-mute)' }}>BEFORE</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--ink-mute)' }}>Lead Generation</div>
                        <div className="text-lg font-bold" style={{ color: 'var(--ink-dim)' }}>{caseStudy.before.leads}</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--ink-mute)' }}>Conversion</div>
                        <div className="text-lg font-bold" style={{ color: 'var(--ink-dim)' }}>{caseStudy.before.conversion}</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--ink-mute)' }}>Overall</div>
                        <div className="text-lg font-bold" style={{ color: 'var(--ink-dim)' }}>{caseStudy.before.revenue}</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="eyebrow mb-4" style={{ color: 'var(--accent)' }}>AFTER</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--ink-mute)' }}>Lead Generation</div>
                        <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{caseStudy.after.leads}</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--ink-mute)' }}>Conversion</div>
                        <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{caseStudy.after.conversion}</div>
                      </div>
                      <div>
                        <div className="text-sm mb-1" style={{ color: 'var(--ink-mute)' }}>Overall</div>
                        <div className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{caseStudy.after.revenue}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 rounded-lg" style={{ background: 'var(--bg-elev-2)' }}>
                  <div className="body font-bold" style={{ color: 'var(--accent)' }}>{caseStudy.improvement}</div>
                  <div className="body text-sm" style={{ color: 'var(--ink-mute)' }}>Achieved in {caseStudy.timeframe}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#conversion-audit"
              onClick={() => trackCTAClick('Get My Results', 'case_studies', '#conversion-audit')}
              className="ds-btn ds-btn-primary text-lg px-8 py-4"
            >
              Get Similar Results for My Business
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion Audit Form */}
      <section id="conversion-audit" className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="ds-container max-w-4xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Free Audit</p>
            <h2 className="h-2 mb-6">
              Get Your Free Conversion Audit
            </h2>
            <p className="body-lg mb-8" style={{ color: 'var(--ink-dim)' }}>
              Discover exactly why your website isn&apos;t converting and get specific recommendations
              to increase your leads by 250%+ in the next 30 days.
            </p>
            <div className="ds-card p-6 max-w-2xl mx-auto" style={{ background: 'var(--bg-elev)' }}>
              <h3 className="h-3 mb-4">What You&apos;ll Get in Your Free Audit:</h3>
              <ul className="text-left space-y-2">
                {[
                  'Complete conversion analysis of your current website',
                  'Specific recommendations to increase leads by 250%+',
                  'Priority action items you can implement immediately',
                  'Industry-specific conversion benchmarks',
                  '30-minute strategy call with our conversion experts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 body" style={{ color: 'var(--ink-dim)' }}>
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ds-card p-8" style={{ background: 'var(--bg-elev)' }}>
            {formStatus.type && (
              <div className={`mb-6 p-4 rounded-lg border`} style={{
                background: formStatus.type === 'success' ? 'color-mix(in srgb, var(--accent) 10%, var(--bg-elev-2))' : formStatus.type === 'error' ? 'rgba(239,68,68,0.1)' : 'var(--bg-elev-2)',
                borderColor: formStatus.type === 'success' ? 'var(--accent)' : formStatus.type === 'error' ? '#ef4444' : 'var(--line)',
                color: formStatus.type === 'success' ? 'var(--accent)' : formStatus.type === 'error' ? '#ef4444' : 'var(--ink)',
              }}>
                <div className="flex items-center">
                  {formStatus.type === 'success' && (
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {formStatus.type === 'error' && (
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  {formStatus.type === 'loading' && (
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  <span className="font-medium body">{formStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: fieldErrors.name ? '#ef4444' : 'var(--line)' }}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: fieldErrors.email ? '#ef4444' : 'var(--line)' }}
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: fieldErrors.company ? '#ef4444' : 'var(--line)' }}
                    placeholder="Your company name"
                  />
                  {fieldErrors.company && (
                    <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{fieldErrors.company}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Select your industry</option>
                    <option value="legal">Legal Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="professional-services">Professional Services</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="currentWebsite" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                  Current Website URL
                </label>
                <input
                  type="url"
                  id="currentWebsite"
                  name="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="monthlyVisitors" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                    Monthly Website Visitors
                  </label>
                  <select
                    id="monthlyVisitors"
                    name="monthlyVisitors"
                    value={formData.monthlyVisitors}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Select range</option>
                    <option value="0-500">0-500 visitors</option>
                    <option value="500-1000">500-1,000 visitors</option>
                    <option value="1000-5000">1,000-5,000 visitors</option>
                    <option value="5000-10000">5,000-10,000 visitors</option>
                    <option value="10000+">10,000+ visitors</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currentLeads" className="block text-sm font-medium mb-2" style={{ color: 'var(--ink-dim)' }}>
                    Current Monthly Leads
                  </label>
                  <select
                    id="currentLeads"
                    name="currentLeads"
                    value={formData.currentLeads}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Select range</option>
                    <option value="0-5">0-5 leads</option>
                    <option value="5-10">5-10 leads</option>
                    <option value="10-25">10-25 leads</option>
                    <option value="25-50">25-50 leads</option>
                    <option value="50+">50+ leads</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="ds-btn ds-btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Request...
                  </>
                ) : (
                  'Get My Free Conversion Audit'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Our 50% More Leads Guarantee
          </h2>
          <p className="body-lg mb-8" style={{ color: 'var(--ink-dim)' }}>
            We&apos;re so confident in our conversion optimization system that we guarantee results.
          </p>
          <div className="ds-card p-8 max-w-2xl mx-auto" style={{ background: 'var(--bg-elev-2)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--accent)' }}>
              <svg className="w-8 h-8" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="h-3 mb-4">
              50% More Leads in 90 Days or We Refund You
            </h3>
            <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
              If we don&apos;t increase your lead generation by at least 50% within 90 days of implementing our recommendations,
              we&apos;ll refund every penny you&apos;ve invested with us. No questions asked.
            </p>
            <div className="body text-sm" style={{ color: 'var(--ink-mute)' }}>
              *Guarantee applies to businesses with 100+ monthly website visitors
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Stop Losing Money to Poor Conversions
          </h2>
          <p className="body-lg mb-8" style={{ color: 'var(--ink-dim)' }}>
            Every day you wait is another day of lost leads and revenue.
            Get your free conversion audit and start turning visitors into customers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#conversion-audit"
              onClick={() => trackCTAClick('Get Free Audit', 'footer', '#conversion-audit')}
              className="ds-btn ds-btn-primary text-xl px-8 py-4"
            >
              Get Your Free Conversion Audit
            </Link>
            <Link
              href="tel:+12263766326"
              onClick={() => trackCTAClick('Call Now', 'footer', 'tel:+12263766326')}
              className="ds-btn ds-btn-ghost text-xl px-8 py-4"
            >
              Call (226) 376-6326
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

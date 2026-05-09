'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  useEffect(() => {
    // Add canonical URL
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://webloftstudio.com/high-converting-websites';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectType: 'conversion-audit',
          message: `Conversion Audit Request from ${formData.company}. Current website: ${formData.currentWebsite}. Monthly visitors: ${formData.monthlyVisitors}. Current leads: ${formData.currentLeads}. Industry: ${formData.industry}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ 
          type: 'success', 
          message: 'Your conversion audit request has been sent! We\'ll analyze your website and get back to you within 24 hours with specific recommendations to increase your conversions.' 
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Problem-Focused */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
              ⚠️ URGENT: Your Website is Losing You Money Every Day
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Website is Losing You{' '}
              <span className="text-red-600">$10,000+</span> Every Month
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              While your competitors are generating <strong>3x more leads</strong> from the same traffic, 
              your website is turning away potential customers. We turn underperforming websites into 
              <span className="text-green-600 font-bold"> conversion machines</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#conversion-audit"
                onClick={() => trackCTAClick('Get Free Conversion Audit', 'hero', '#conversion-audit')}
                className="btn-primary-enhanced text-xl px-8 py-4"
              >
                Get Your Free Conversion Audit
              </Link>
              <Link
                href="#case-studies"
                onClick={() => trackCTAClick('See Case Studies', 'hero', '#case-studies')}
                className="btn-secondary text-xl px-8 py-4"
              >
                See Our 250%+ Results
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              ✅ Free 30-minute conversion analysis • ✅ No obligation • ✅ Specific recommendations
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why 90% of Business Websites Fail to Convert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most websites look good but don't generate leads. Here's what's killing your conversions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                problem: "Confusing Navigation",
                description: "Visitors can't find what they're looking for and leave within 10 seconds",
                stat: "73% of visitors leave immediately",
                icon: "🧭"
              },
              {
                problem: "Weak Value Proposition",
                description: "Your homepage doesn't clearly explain why customers should choose you",
                stat: "Only 2% of visitors convert",
                icon: "💡"
              },
              {
                problem: "No Clear Call-to-Action",
                description: "Visitors don't know what to do next after reading your content",
                stat: "85% lack clear CTAs",
                icon: "🎯"
              },
              {
                problem: "Mobile Optimization Issues",
                description: "Your site looks broken on phones where 60% of traffic comes from",
                stat: "60% of traffic is mobile",
                icon: "📱"
              },
              {
                problem: "Slow Loading Speed",
                description: "Visitors abandon your site before it even loads completely",
                stat: "53% leave if page loads >3s",
                icon: "⚡"
              },
              {
                problem: "No Social Proof",
                description: "Visitors don't trust you because they don't see testimonials or reviews",
                stat: "92% trust peer reviews",
                icon: "⭐"
              }
            ].map((pain, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="text-4xl mb-4">{pain.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pain.problem}</h3>
                <p className="text-gray-600 mb-4">{pain.description}</p>
                <div className="text-2xl font-bold text-red-600">{pain.stat}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Does your website have any of these problems?</strong>
            </p>
            <Link
              href="#conversion-audit"
              onClick={() => trackCTAClick('Fix My Website', 'pain_points', '#conversion-audit')}
              className="btn-primary-enhanced text-lg px-8 py-4"
            >
              Yes, Fix My Website Now
            </Link>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Turn Underperforming Websites Into Lead Machines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build websites - we build <strong>conversion systems</strong> that turn visitors into customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our 5-Step Conversion Optimization System
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Conversion Audit",
                    description: "We analyze your current website and identify every conversion barrier costing you leads."
                  },
                  {
                    step: "02", 
                    title: "Strategy Development",
                    description: "We create a custom conversion strategy based on your industry and target audience."
                  },
                  {
                    step: "03",
                    title: "Design Optimization",
                    description: "We redesign key pages to guide visitors toward taking action with proven conversion patterns."
                  },
                  {
                    step: "04",
                    title: "Technical Implementation",
                    description: "We implement advanced tracking, A/B testing, and conversion optimization tools."
                  },
                  {
                    step: "05",
                    title: "Continuous Optimization",
                    description: "We monitor performance and make ongoing improvements to maximize your ROI."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Average Results</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700">Lead Generation Increase</span>
                  <span className="text-2xl font-bold text-green-600">+250%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700">Conversion Rate Improvement</span>
                  <span className="text-2xl font-bold text-green-600">+180%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700">Average ROI</span>
                  <span className="text-2xl font-bold text-green-600">340%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700">Time to Results</span>
                  <span className="text-2xl font-bold text-green-600">30 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results: Before & After Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transformed underperforming websites into conversion machines for Canadian businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                company: "Toronto Law Firm",
                industry: "Legal Services",
                before: {
                  leads: "3 per month",
                  conversion: "0.8%",
                  revenue: "$15,000/month"
                },
                after: {
                  leads: "18 per month",
                  conversion: "4.2%",
                  revenue: "$85,000/month"
                },
                improvement: "500% increase in leads",
                timeframe: "45 days"
              },
              {
                company: "Vancouver Dental Practice",
                industry: "Healthcare",
                before: {
                  leads: "8 per month",
                  conversion: "1.2%",
                  revenue: "$25,000/month"
                },
                after: {
                  leads: "32 per month",
                  conversion: "5.1%",
                  revenue: "$120,000/month"
                },
                improvement: "300% increase in leads",
                timeframe: "60 days"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.company}</h3>
                  <p className="text-gray-600">{caseStudy.industry}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-red-600 mb-4">BEFORE</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Monthly Leads</div>
                        <div className="text-xl font-bold text-red-600">{caseStudy.before.leads}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Conversion Rate</div>
                        <div className="text-xl font-bold text-red-600">{caseStudy.before.conversion}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Monthly Revenue</div>
                        <div className="text-xl font-bold text-red-600">{caseStudy.before.revenue}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-green-600 mb-4">AFTER</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Monthly Leads</div>
                        <div className="text-xl font-bold text-green-600">{caseStudy.after.leads}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Conversion Rate</div>
                        <div className="text-xl font-bold text-green-600">{caseStudy.after.conversion}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Monthly Revenue</div>
                        <div className="text-xl font-bold text-green-600">{caseStudy.after.revenue}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-800">{caseStudy.improvement}</div>
                  <div className="text-sm text-green-600">Achieved in {caseStudy.timeframe}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#conversion-audit"
              onClick={() => trackCTAClick('Get My Results', 'case_studies', '#conversion-audit')}
              className="btn-primary-enhanced text-lg px-8 py-4"
            >
              Get Similar Results for My Business
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion Audit Form */}
      <section id="conversion-audit" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Conversion Audit
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover exactly why your website isn't converting and get specific recommendations 
              to increase your leads by 250%+ in the next 30 days.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-green-800 mb-4">What You'll Get in Your Free Audit:</h3>
              <ul className="text-left text-green-700 space-y-2">
                <li>✅ Complete conversion analysis of your current website</li>
                <li>✅ Specific recommendations to increase leads by 250%+</li>
                <li>✅ Priority action items you can implement immediately</li>
                <li>✅ Industry-specific conversion benchmarks</li>
                <li>✅ 30-minute strategy call with our conversion experts</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            {formStatus.type && (
              <div className={`mb-6 p-4 rounded-lg border ${
                formStatus.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-800'
                  : formStatus.type === 'error'
                  ? 'bg-red-50 border-red-200 text-red-800'
                  : 'bg-blue-50 border-blue-200 text-blue-800'
              }`}>
                <div className="flex items-center">
                  {formStatus.type === 'success' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {formStatus.type === 'error' && (
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  {formStatus.type === 'loading' && (
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      fieldErrors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      fieldErrors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      fieldErrors.company ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Your company name"
                  />
                  {fieldErrors.company && (
                    <p className="mt-1 text-sm text-red-600">{fieldErrors.company}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                <label htmlFor="currentWebsite" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Website URL
                </label>
                <input
                  type="url"
                  id="currentWebsite"
                  name="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="monthlyVisitors" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Website Visitors
                  </label>
                  <select
                    id="monthlyVisitors"
                    name="monthlyVisitors"
                    value={formData.monthlyVisitors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                  <label htmlFor="currentLeads" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Leads
                  </label>
                  <select
                    id="currentLeads"
                    name="currentLeads"
                    value={formData.currentLeads}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="btn-primary-enhanced w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our 50% More Leads Guarantee
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We're so confident in our conversion optimization system that we guarantee results.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              50% More Leads in 90 Days or We Refund You
            </h3>
            <p className="text-gray-600 mb-6">
              If we don't increase your lead generation by at least 50% within 90 days of implementing our recommendations, 
              we'll refund every penny you've invested with us. No questions asked.
            </p>
            <div className="text-sm text-gray-500">
              *Guarantee applies to businesses with 100+ monthly website visitors
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
              ⚠️ Limited Availability This Month
            </h2>
            <p className="text-xl text-red-700">
              We only take on <strong>5 high-conversion projects per month</strong> to ensure quality results. 
              <br />Only <strong>2 spots remaining</strong> for this month.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">$10,000+</div>
              <div className="text-gray-700">Lost per month with poor conversions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
              <div className="text-gray-700">Of websites fail to convert effectively</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">2</div>
              <div className="text-gray-700">Spots remaining this month</div>
            </div>
          </div>

          <Link
            href="#conversion-audit"
            onClick={() => trackCTAClick('Claim My Spot', 'urgency', '#conversion-audit')}
            className="btn-primary-enhanced text-xl px-8 py-4"
          >
            Claim Your Spot Now - Free Audit
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Losing Money to Poor Conversions
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every day you wait is another day of lost leads and revenue. 
            Get your free conversion audit and start turning visitors into customers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#conversion-audit"
              onClick={() => trackCTAClick('Get Free Audit', 'footer', '#conversion-audit')}
              className="btn-primary-enhanced text-xl px-8 py-4"
            >
              Get Your Free Conversion Audit
            </Link>
            <Link
              href="tel:+12263766326"
              onClick={() => trackCTAClick('Call Now', 'footer', 'tel:+12263766326')}
              className="btn-secondary text-xl px-8 py-4"
            >
              Call (226) 376-6326
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function TemplateBasedWebsites() {
  const [expandedTemplates, setExpandedTemplates] = useState<Record<string, boolean>>({});

  const toggleExpand = (templateId: string) => {
    setExpandedTemplates(prev => ({
      ...prev,
      [templateId]: !prev[templateId]
    }));
  };

  const templates = [
    {
      id: 'startup-venture',
      name: 'Startup Venture',
      description: 'Ideal for tech startups, SaaS companies, and innovative businesses. Bold design that showcases your cutting-edge solutions.',
      price: '$400',
      pages: ['Home', 'Features', 'Pricing', 'About', 'Contact'],
      features: [
        'SEO Optimized',
        'Mobile Responsive', 
        'Contact Forms',
        'Pricing Tables',
        'CTA Optimization',
        'Newsletter Signup',
        'Feature Comparison',
        'FAQ Section',
        'Social Media Links',
        'Fast Loading Speed'
      ],
      image: '/template-based-sites/startup-venture.png',
      demoUrl: '/demo/startup-venture'
    },
    {
      id: 'roofing-pro',
      name: 'Roofing Pro',
      description: 'Perfect for roofing contractors, home improvement services, and construction companies. Professional design that builds trust and drives conversions.',
      price: '$800',
      pages: ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'],
      features: [
        'SEO Optimized',
        'Mobile Responsive',
        'Contact Forms',
        'Project Gallery',
        'Before/After Slider',
        'Emergency CTA',
        'Service Area Map',
        'Testimonial Carousel',
        'Team Profiles',
        'FAQ Section'
      ],
      image: '/template-based-sites/roofing-pro.png',
      demoUrl: '/demo/roofing-pro'
    },
    {
      id: 'dental-pro',
      name: 'Dental Pro',
      description: 'Modern dental practice website with appointment booking, before/after gallery, and patient testimonials. Designed to build trust and convert visitors into patients.',
      price: '$600',
      pages: ['Home', 'About', 'Services', 'Team', 'Gallery', 'Testimonials', 'Blog', 'Contact'],
      features: [
        'SEO Optimized',
        'Mobile Responsive',
        'Appointment Booking',
        'Contact Forms',
        'Before/After Gallery',
        'Team Profiles',
        'Patient Testimonials',
        'Insurance Info Section',
        'FAQ Section',
        'Google Maps Integration'
      ],
      image: '/template-based-sites/dental-pro.png',
      demoUrl: '/demo/dental-pro'
    },
    {
      id: 'smile-pro',
      name: 'Smile Pro',
      description: 'Premium dental clinic website with floating animations, interactive hero section, and modern aqua-to-white gradient design. Perfect for high-end dental practices.',
      price: '$600',
      pages: ['Home', 'Services', 'About', 'Team', 'Testimonials', 'Blog', 'Contact'],
      features: [
        'SEO Optimized',
        'Mobile Responsive',
        'Floating Animations',
        'Interactive Hero',
        'Contact Forms',
        'Service Icons Bar',
        'Specialist Profiles',
        'Blog Integration',
        'Before/After Gallery',
        'Discount Plans Display'
      ],
      image: '/template-based-sites/smile-pro.png',
      demoUrl: '/demo/smile-pro',
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Template-Based <span className="text-green-400">Websites</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get a professional, SEO-friendly website in days, not months. Perfect for small businesses, freelancers, and startups who need a strong online presence without the custom development costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#templates" className="btn-primary text-lg px-8 py-4">
                View Templates
              </Link>
              <Link href="/contact" className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Live in One Week Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fast Launch Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up stagger-1">
              Launch Your Professional Website in Just <span className="text-yellow-300">One Week</span>
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              Stop waiting months for a website. Our template-based solution gets you online fast without sacrificing quality. 
              Start generating leads and establishing credibility within one week—not one month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Live in One Week",
                description: "Professional website ready to launch in just 7 days",
                highlight: "7 Days"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Local SEO Optimized",
                description: "Built-in SEO foundations to help you rank in local search results",
                highlight: "SEO Ready"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Lead Generation Ready",
                description: "Contact forms and conversion optimization built-in from day one",
                highlight: "Convert Ready"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
                title: "Cost Effective",
                description: "Professional results at a fraction of custom development costs",
                highlight: "Great ROI"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up text-center" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-green-100 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="text-2xl font-bold text-yellow-300">{item.highlight}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#templates" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Choose Your Template
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Get Started Today
              </Link>
            </div>
            <p className="text-green-100 text-sm mt-4">
              ✅ No technical knowledge required • ✅ Professional quality guaranteed • ✅ Mobile responsive included
            </p>
          </div>
        </div>
      </section>

      {/* What Are Template-Based Websites Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                What Are Template-Based Websites?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Template-based websites are professionally designed, pre-built websites that we customize with your content, branding, and business information. Think of them as your digital business card—professional, effective, and ready to convert visitors into customers.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Unlike custom websites that take months to develop, our templates are ready to launch in just days. Each template is fully optimized for search engines, mobile devices, and conversion, giving you everything you need to establish a strong online presence quickly and affordably.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Perfect For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Small businesses needing a professional online presence
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Freelancers and consultants building their brand
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Startups launching their first website
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Anyone needing a quick, professional solution
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Template-Based Websites?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Fast Launch</h4>
                    <p className="text-gray-300">Get online in days, not months. Perfect for time-sensitive launches and quick market entry.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cost Effective</h4>
                    <p className="text-gray-300">Professional results at a fraction of custom development costs. Great ROI for growing businesses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Professional Quality</h4>
                    <p className="text-gray-300">Each template is professionally designed and optimized for conversions, SEO, and mobile devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Showcase Section */}
      <section id="templates" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your <span className="text-green-400">Perfect Template</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Each template is professionally designed, fully responsive, and optimized for conversions. All templates include SEO optimization and mobile responsiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-colors duration-300 flex flex-col h-full">
                <div className="relative h-48 bg-gray-700 overflow-hidden">
                  <Image
                    src={template.image}
                    alt={`${template.name} template preview`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {template.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">{template.name}</h3>
                  <p className="text-gray-300 mb-4">{template.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">INCLUDED PAGES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.pages.map((page) => (
                        <span key={page} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">FEATURES:</h4>
                    <div className="space-y-1">
                      {template.features.slice(0, expandedTemplates[template.id] ? template.features.length : 5).map((feature, index) => (
                        <div 
                          key={feature} 
                          className={`flex items-center text-sm text-gray-300 transition-all duration-300 ${
                            expandedTemplates[template.id] && index >= 5 ? 'animate-fade-in-up' : ''
                          }`}
                          style={{
                            animationDelay: expandedTemplates[template.id] && index >= 5 ? `${(index - 5) * 50}ms` : '0ms'
                          }}
                        >
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {template.features.length > 5 && (
                      <button
                        onClick={() => toggleExpand(template.id)}
                        className="mt-3 w-full flex items-center justify-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-green-500/10"
                        aria-label={expandedTemplates[template.id] ? 'Show fewer features' : 'Show more features'}
                      >
                        <span className="mr-2">
                          {expandedTemplates[template.id] ? 'Show Less' : 'See More Features'}
                        </span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expandedTemplates[template.id] ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link
                      href={template.demoUrl}
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-300"
                    >
                      View Live Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-300"
                    >
                      Get This Template
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What's <span className="text-green-400">Included</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every template-based website comes with everything you need to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "SEO Optimization",
                description: "Built-in SEO foundations including meta tags, structured data, and fast loading speeds to help you rank in search results."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Responsive",
                description: "Perfect display on all devices - desktop, tablet, and mobile. Your customers can access your site anywhere."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fast Loading",
                description: "Optimized for speed with clean code, compressed images, and efficient hosting to keep visitors engaged."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Contact Forms",
                description: "Professional contact forms that work seamlessly to capture leads and customer inquiries."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Quality Assurance",
                description: "Thoroughly tested across all browsers and devices to ensure your website works perfectly for every visitor."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                ),
                title: "Easy Updates",
                description: "Simple content management system so you can update your website content without technical knowledge."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It <span className="text-green-400">Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Getting your template-based website is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Template", desc: "Select the template that best fits your business and brand from our curated collection." },
              { step: "2", title: "Provide Content", desc: "Send us your business information, images, and content to customize your template." },
              { step: "3", title: "Customization", desc: "We customize the template with your branding, colors, and content to make it uniquely yours." },
              { step: "4", title: "Launch", desc: "Your website goes live with hosting, domain setup, and everything you need to succeed online." }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Your Website Online?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Choose your template, provide your content, and launch your professional website in days. No technical knowledge required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center text-center"
            >
              Get Started Today
            </Link>
            <Link
              href="#templates"
              className="border-2 border-white text-white hover:bg-white hover:text-green-500 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center text-center"
            >
              View All Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

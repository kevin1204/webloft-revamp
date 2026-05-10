"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function WebflowDevelopmentToronto() {
  useEffect(() => {
    trackServicePageVisit('webflow_development', 'toronto');
  }, []);
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Webflow Development Services in Toronto",
            "description": "Professional Webflow development services for Toronto businesses. Custom websites, CMS integration, and e-commerce solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "Ontario",
                "addressCountry": "CA"
              }
            },
            "serviceType": "Webflow Development",
            "areaServed": {
              "@type": "City",
              "name": "Toronto",
              "containedInPlace": {
                "@type": "State",
                "name": "Ontario"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Webflow Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Webflow Websites"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webflow CMS Integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webflow E-commerce Development"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
        {/* Hero Section */}
        <section className="pt-20 pb-16" style={{ background: 'var(--bg)' }}>
          <div className="ds-container">
            <div className="text-center mb-12">
              <p className="eyebrow mb-6">Webflow Development Toronto</p>
              <h1 className="h-1 mb-6">
                Professional{' '}
                <span style={{ color: 'var(--accent)' }}>Webflow Development</span>
                <br />
                <span className="h-2" style={{ color: 'var(--ink-dim)' }}>in Toronto, Ontario</span>
              </h1>
              <p className="body-lg max-w-4xl mx-auto mb-8" style={{ color: 'var(--ink-dim)' }}>
                Build lightning-fast, responsive websites with Webflow&apos;s powerful platform.{' '}
                <strong style={{ color: 'var(--ink)' }}>Toronto&apos;s premier Webflow development agency.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4">
                  Get Free Consultation
                </Link>
                <Link href="/projects" className="ds-btn ds-btn-ghost text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline" />

        {/* Why Webflow in Toronto Section */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="ds-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="h-2 mb-6">
                  Why Toronto Businesses Choose Webflow
                </h2>
                <p className="body-lg mb-8" style={{ color: 'var(--ink-dim)' }}>
                  Toronto&apos;s competitive business landscape demands websites that perform. Webflow gives you the speed, flexibility, and professional results you need to stand out in Canada&apos;s largest city.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Lightning Fast Performance',
                      desc: "Webflow generates clean, optimized code that loads faster than traditional website builders, crucial for Toronto's fast-paced business environment.",
                      icon: (
                        <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Visual Design Interface',
                      desc: "Design pixel-perfect websites without writing code, giving you complete creative control over your brand's online presence.",
                      icon: (
                        <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Built-in SEO Tools',
                      desc: 'Advanced SEO controls built into the platform help your Toronto business rank higher in local and national search results.',
                      icon: (
                        <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--bg-elev-2)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="h-3 mb-2">{item.title}</h3>
                        <p className="body" style={{ color: 'var(--ink-dim)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="ds-card p-8" style={{ background: 'var(--bg-elev)' }}>
                  <h3 className="h-3 mb-4">Ready to Build with Webflow?</h3>
                  <p className="body mb-6" style={{ color: 'var(--ink-dim)' }}>
                    Let&apos;s create a fast, beautiful, and conversion-optimized website using Webflow&apos;s powerful platform for your Toronto business.
                  </p>
                  <Link href="/contact" className="ds-btn ds-btn-primary px-6 py-3 inline-block">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
          <div className="ds-container">
            <div className="text-center mb-16">
              <h2 className="h-2 mb-6">
                Our Webflow Development Services in Toronto
              </h2>
              <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
                From simple business websites to complex e-commerce stores, we build powerful Webflow solutions for every Toronto business need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Custom Webflow Websites',
                  desc: "Bespoke Webflow websites designed and developed specifically for Toronto businesses and their unique market needs.",
                  icon: <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" /></svg>,
                },
                {
                  title: 'Webflow CMS Integration',
                  desc: "Dynamic content management systems that allow Toronto businesses to easily update and manage their website content.",
                  icon: <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                },
                {
                  title: 'E-commerce Development',
                  desc: "Complete online stores with Webflow's powerful e-commerce features, perfect for Toronto's retail and service businesses.",
                  icon: <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
                },
                {
                  title: 'Performance Optimization',
                  desc: "Speed optimization and performance tuning to ensure your Webflow site loads lightning fast for Toronto users.",
                  icon: <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                },
                {
                  title: 'Local SEO Optimization',
                  desc: "Built-in SEO tools and local optimization to help your Toronto business rank higher in search results.",
                  icon: <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                },
                {
                  title: 'Training & Support',
                  desc: "Comprehensive training on how to manage and update your Webflow site independently, plus ongoing support.",
                  icon: <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                },
              ].map((service) => (
                <div key={service.title} className="ds-card p-8 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ background: 'var(--accent)' }}>
                    {service.icon}
                  </div>
                  <h3 className="h-3 mb-4">{service.title}</h3>
                  <p className="body" style={{ color: 'var(--ink-dim)' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Toronto Focus Section */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="ds-container">
            <div className="text-center mb-16">
              <h2 className="h-2 mb-6">
                Serving Toronto&apos;s Diverse Business Community
              </h2>
              <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
                From the Financial District to the Entertainment District, we help Toronto businesses of all sizes succeed online with Webflow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Financial District', desc: 'Professional Webflow sites for financial services, law firms, and corporate offices.' },
                { label: 'Entertainment District', desc: 'Creative Webflow websites for restaurants, theaters, and entertainment venues.' },
                { label: 'Retail & E-commerce', desc: "Online stores and retail websites for Toronto's shopping districts." },
                { label: 'Healthcare & Services', desc: 'Professional websites for healthcare providers and service businesses.' },
              ].map((item) => (
                <div key={item.label} className="ds-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--accent)' }}>
                    <div className="w-3 h-3 rounded-full" style={{ background: 'var(--bg)' }} />
                  </div>
                  <h3 className="h-3 mb-2">{item.label}</h3>
                  <p className="body" style={{ color: 'var(--ink-dim)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
          <div className="ds-container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="h-2 mb-6">Frequently Asked Questions</h2>
              <p className="body-lg" style={{ color: 'var(--ink-dim)' }}>
                Common questions about Webflow development in Toronto
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Why choose Webflow over other platforms in Toronto?',
                  a: "Webflow offers the perfect balance of design flexibility and performance optimization that Toronto businesses need. It generates clean, fast-loading code while providing visual design tools that don't require coding knowledge.",
                },
                {
                  q: 'How long does Webflow development take in Toronto?',
                  a: 'A typical Webflow project takes 3-6 weeks from start to launch, depending on complexity. This includes design, development, content integration, and testing. We provide detailed timelines during our consultation.',
                },
                {
                  q: 'Can I update my Webflow site myself?',
                  a: "Yes! Webflow's CMS allows you to easily update content, add blog posts, and manage your site without technical knowledge. We provide training on how to use the CMS effectively.",
                },
                {
                  q: 'Do you offer ongoing support for Webflow sites?',
                  a: 'Yes, we provide ongoing support and maintenance for all our Webflow projects. This includes updates, troubleshooting, and performance optimization to keep your site running smoothly.',
                },
                {
                  q: 'Is Webflow good for Toronto businesses?',
                  a: "Absolutely! Webflow is perfect for Toronto businesses because it offers fast loading speeds, excellent SEO capabilities, and professional results that help you compete in Canada's largest market.",
                },
              ].map((faq) => (
                <div key={faq.q} className="ds-card p-6" style={{ borderColor: 'var(--line)' }}>
                  <h3 className="h-3 mb-3">{faq.q}</h3>
                  <p className="body" style={{ color: 'var(--ink-dim)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ background: 'var(--bg)' }}>
          <div className="ds-container max-w-4xl text-center">
            <h2 className="h-2 mb-6">
              Ready to Build with Webflow in Toronto?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              Let&apos;s create a fast, beautiful, and conversion-optimized website using Webflow&apos;s powerful platform for your Toronto business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4">
                Start Your Project
              </Link>
              <Link href="/projects" className="ds-btn ds-btn-ghost text-lg px-8 py-4">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

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

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                ⚡ Webflow Development Toronto
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> Webflow Development</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">in Toronto, Ontario</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Build lightning-fast, responsive websites with Webflow's powerful platform. 
                <strong className="text-blue-600"> Toronto's premier Webflow development agency.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/projects" 
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Webflow in Toronto Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Toronto Businesses Choose Webflow
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Toronto's competitive business landscape demands websites that perform. Webflow gives you the speed, flexibility, and professional results you need to stand out in Canada's largest city.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Lightning Fast Performance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Webflow generates clean, optimized code that loads faster than traditional website builders, crucial for Toronto's fast-paced business environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Visual Design Interface
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Design pixel-perfect websites without writing code, giving you complete creative control over your brand's online presence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Built-in SEO Tools
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Advanced SEO controls built into the platform help your Toronto business rank higher in local and national search results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Build with Webflow?</h3>
                  <p className="text-blue-100 mb-6">
                    Let's create a fast, beautiful, and conversion-optimized website using Webflow's powerful platform for your Toronto business.
                  </p>
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Webflow Development Services in Toronto
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From simple business websites to complex e-commerce stores, we build powerful Webflow solutions for every Toronto business need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Custom Webflow Websites
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bespoke Webflow websites designed and developed specifically for Toronto businesses and their unique market needs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Webflow CMS Integration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dynamic content management systems that allow Toronto businesses to easily update and manage their website content.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  E-commerce Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete online stores with Webflow's powerful e-commerce features, perfect for Toronto's retail and service businesses.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Speed optimization and performance tuning to ensure your Webflow site loads lightning fast for Toronto users.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Local SEO Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built-in SEO tools and local optimization to help your Toronto business rank higher in search results.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Training & Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive training on how to manage and update your Webflow site independently, plus ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Toronto Focus Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Serving Toronto's Diverse Business Community
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From the Financial District to the Entertainment District, we help Toronto businesses of all sizes succeed online with Webflow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  🏢
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Financial District
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional Webflow sites for financial services, law firms, and corporate offices.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  🎭
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Entertainment District
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creative Webflow websites for restaurants, theaters, and entertainment venues.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  🛍️
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Retail & E-commerce
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Online stores and retail websites for Toronto's shopping districts.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  🏥
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Healthcare & Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional websites for healthcare providers and service businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Common questions about Webflow development in Toronto
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Why choose Webflow over other platforms in Toronto?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Webflow offers the perfect balance of design flexibility and performance optimization that Toronto businesses need. It generates clean, fast-loading code while providing visual design tools that don't require coding knowledge.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How long does Webflow development take in Toronto?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A typical Webflow project takes 3-6 weeks from start to launch, depending on complexity. This includes design, development, content integration, and testing. We provide detailed timelines during our consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can I update my Webflow site myself?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! Webflow's CMS allows you to easily update content, add blog posts, and manage your site without technical knowledge. We provide training on how to use the CMS effectively.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you offer ongoing support for Webflow sites?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we provide ongoing support and maintenance for all our Webflow projects. This includes updates, troubleshooting, and performance optimization to keep your site running smoothly.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Is Webflow good for Toronto businesses?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! Webflow is perfect for Toronto businesses because it offers fast loading speeds, excellent SEO capabilities, and professional results that help you compete in Canada's largest market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build with Webflow in Toronto?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a fast, beautiful, and conversion-optimized website using Webflow's powerful platform for your Toronto business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/projects" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

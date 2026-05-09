"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function WebflowDevelopmentServices() {
  useEffect(() => {
    trackServicePageVisit('webflow_development', 'general');
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
            "name": "Webflow Development Services Toronto | Professional Webflow Websites | Webloft Studio",
            "description": "Professional Webflow development services in Toronto. Pro-level builds with easy editing. Custom Webflow websites that combine development power with visual design flexibility.",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com"
            },
            "serviceType": "Webflow Development",
            "areaServed": "Canada",
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
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Webflow Development</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Pro-level builds with easy editing. We create powerful Webflow websites that combine custom development with visual design flexibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Book a Free Consultation
                </Link>
                <Link href="/projects" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  See Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Solution */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why This Matters</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Many businesses struggle with website builders that are either too limited for professional needs or too complex for easy content management. Webflow bridges this gap by offering the power of custom development with the ease of visual design.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our Webflow development services give you the best of both worlds: professional-grade websites with clean, fast code, plus the ability to easily update content without technical knowledge. This means lower long-term costs and greater flexibility for your business.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Webflow websites typically load 40% faster than traditional website builders and offer superior SEO capabilities, giving you a significant competitive advantage in search rankings and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What You'll Get</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CMS Setup</h3>
                <p className="text-gray-600 dark:text-gray-300">Custom content management system configured for your specific needs, making content updates simple and intuitive.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interactions & Animations</h3>
                <p className="text-gray-600 dark:text-gray-300">Smooth, professional animations and micro-interactions that enhance user experience without slowing down your site.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Clean Content Structure</h3>
                <p className="text-gray-600 dark:text-gray-300">Organized, scalable content architecture that makes managing your website content efficient and logical.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Editor Training</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive training on how to use Webflow's editor effectively, so you can manage your content independently.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Light Integrations</h3>
                <p className="text-gray-600 dark:text-gray-300">Seamless integration with third-party tools like analytics, email marketing, and CRM systems.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">SEO Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">Built-in SEO tools and optimization to ensure your website ranks well in search engines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Webflow Development Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Strategy & Planning</h3>
                <p className="text-gray-600 dark:text-gray-300">We analyze your needs and create a comprehensive strategy for your Webflow project.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-300">We create custom designs and develop your website using Webflow's powerful tools.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CMS Setup</h3>
                <p className="text-gray-600 dark:text-gray-300">We configure Webflow's CMS so you can easily manage your content.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Launch & Training</h3>
                <p className="text-gray-600 dark:text-gray-300">We launch your site and provide training on how to manage it using Webflow's CMS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build with Webflow?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's create a fast, beautiful, and conversion-optimized website using Webflow's powerful platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
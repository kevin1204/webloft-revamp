"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function ConversionRateOptimizationServices() {
  useEffect(() => {
    trackServicePageVisit('conversion_rate_optimization', 'general');
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
            "name": "Conversion Rate Optimization Services Toronto | CRO Services | Webloft Studio",
            "description": "Professional conversion rate optimization (CRO) services in Toronto. Turn more visitors into customers with data-driven optimization strategies. Increase your conversion rates and ROI.",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com"
            },
            "serviceType": "Conversion Rate Optimization",
            "areaServed": "Canada",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "CRO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conversion Analysis"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "A/B Testing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "User Experience Optimization"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Conversion Rate Optimization for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Maximum ROI</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Turn more visitors into customers with data-driven optimization strategies that increase conversions and maximize your website's revenue potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Book a Free Consultation
                </Link>
                <Link href="/projects" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  See Results
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
                  Most websites convert only 2-3% of their visitors into customers. That means 97% of your traffic leaves without taking action. Poor user experience, unclear messaging, and friction in the conversion process are costing you potential revenue every day.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Conversion Rate Optimization (CRO) systematically identifies and eliminates these barriers. Through data analysis, user testing, and strategic improvements, we help you turn more visitors into customers without increasing your traffic costs.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our CRO strategies typically increase conversion rates by 20-50%, meaning more revenue from the same traffic. For a business generating $10K monthly revenue, even a 25% conversion improvement adds $2,500 monthly with zero additional marketing spend.
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
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Conversion Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive audit of your current conversion funnel, identifying drop-off points and optimization opportunities.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">A/B Testing Strategy</h3>
                <p className="text-gray-600 dark:text-gray-300">Data-driven testing of headlines, CTAs, forms, and layouts to find what converts best for your audience.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">User Experience Audit</h3>
                <p className="text-gray-600 dark:text-gray-300">Identify friction points in user journey and optimize the path from visitor to customer with UX best practices.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.847 9.168-4.5a.5.5 0 01.832.5c-.5 1.5-2.5 3-5 3H9.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Call-to-Action Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">Strategic placement and design of CTAs that guide users toward conversion with compelling, action-oriented messaging.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Form Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">Streamline contact forms, reduce fields, and improve completion rates with smart form design and validation.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Tracking</h3>
                <p className="text-gray-600 dark:text-gray-300">Set up conversion tracking, goal monitoring, and detailed reporting to measure and optimize your results continuously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our CRO Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analysis & Research</h3>
                <p className="text-gray-600 dark:text-gray-300">We analyze your current conversion data, user behavior, and identify the biggest opportunities for improvement.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Strategy Development</h3>
                <p className="text-gray-600 dark:text-gray-300">We create a comprehensive CRO strategy with prioritized tests and optimization recommendations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Implementation & Testing</h3>
                <p className="text-gray-600 dark:text-gray-300">We implement optimizations and run A/B tests to validate improvements with real user data.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Optimization & Scaling</h3>
                <p className="text-gray-600 dark:text-gray-300">We analyze results, implement winning variations, and continue optimizing for maximum conversion rates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Increase Your Conversions?</h2>
            <p className="text-xl text-green-100 mb-8">Let's turn more of your visitors into customers with data-driven optimization strategies.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackServicePageVisit } from "@/lib/analytics";

export default function AnalyticsMonthlyReportsServices() {
  useEffect(() => {
    trackServicePageVisit('analytics_monthly_reports', 'general');
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
            "name": "Analytics & Monthly Reports Services Toronto | Website Analytics | Webloft Studio",
            "description": "Professional analytics and monthly reporting services in Toronto. Transform your website data into actionable insights. Get comprehensive reports and recommendations for business growth.",
            "provider": {
              "@type": "Organization",
              "name": "Webloft Studio",
              "url": "https://webloftstudio.com"
            },
            "serviceType": "Analytics & Reporting",
            "areaServed": "Canada",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Analytics Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Analytics Setup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Monthly Performance Reports"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data-Driven Recommendations"
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
                Analytics & Monthly Reports for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Data-Driven Growth</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your website data into actionable insights with comprehensive analytics setup and monthly reports that drive informed business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Book a Free Consultation
                </Link>
                <Link href="/services" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  View All Services
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
                  Most businesses have website analytics set up, but they're not using the data effectively. Raw numbers without context don't drive decisions. You need clear insights, trends, and actionable recommendations to understand what's working and what needs improvement.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our analytics and reporting service transforms complex data into clear, actionable insights. We set up comprehensive tracking, analyze performance trends, and provide monthly reports with specific recommendations for improvement. You get the intelligence you need to make informed decisions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  With proper analytics and regular reporting, you can identify opportunities, track progress, and optimize your website for better results. Data-driven decisions lead to measurable improvements in traffic, conversions, and business growth.
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analytics Setup & Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300">Complete Google Analytics setup with custom goals, conversion tracking, and e-commerce tracking for comprehensive data collection.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Monthly Performance Reports</h3>
                <p className="text-gray-600 dark:text-gray-300">Detailed monthly reports covering traffic, conversions, user behavior, and performance metrics with clear insights and trends.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">Analysis of Core Web Vitals, page speed, mobile performance, and technical SEO metrics for optimization opportunities.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">User Behavior Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">Deep dive into user journeys, page performance, bounce rates, and engagement patterns to identify improvement areas.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Actionable Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-300">Specific, prioritized recommendations for improving traffic, conversions, user experience, and overall website performance.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Competitive Benchmarking</h3>
                <p className="text-gray-600 dark:text-gray-300">Comparison with industry benchmarks and competitor analysis to identify opportunities and set realistic performance goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Analytics Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Setup & Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300">We configure comprehensive analytics tracking, goals, and conversion tracking to capture all relevant data.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Collection</h3>
                <p className="text-gray-600 dark:text-gray-300">We monitor data collection for 30 days to establish baseline metrics and identify any tracking issues.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analysis & Reporting</h3>
                <p className="text-gray-600 dark:text-gray-300">We analyze performance data, identify trends, and create comprehensive monthly reports with insights.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Recommendations & Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">We provide actionable recommendations and help implement optimizations based on data insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Sample */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What's Included in Monthly Reports</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Traffic & Performance Metrics</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Monthly traffic trends and sources</li>
                  <li>• Page views and session duration</li>
                  <li>• Bounce rate and exit pages</li>
                  <li>• Mobile vs desktop performance</li>
                  <li>• Core Web Vitals scores</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Conversion & Business Metrics</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Goal completions and conversion rates</li>
                  <li>• E-commerce performance (if applicable)</li>
                  <li>• Lead generation metrics</li>
                  <li>• ROI and cost-per-acquisition</li>
                  <li>• Revenue attribution</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Behavior Insights</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• User journey analysis</li>
                  <li>• Top performing pages</li>
                  <li>• Search queries and keywords</li>
                  <li>• Geographic and demographic data</li>
                  <li>• Device and browser breakdown</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommendations & Next Steps</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Prioritized improvement opportunities</li>
                  <li>• Technical optimization suggestions</li>
                  <li>• Content and SEO recommendations</li>
                  <li>• Conversion optimization ideas</li>
                  <li>• Competitive analysis insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Make Data-Driven Decisions?</h2>
            <p className="text-xl text-green-100 mb-8">Transform your website data into actionable insights that drive real business growth.</p>
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

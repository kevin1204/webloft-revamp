import type { Metadata } from "next";
import Link from "next/link";
import ParticleTextAnimation from "@/components/ParticleTextAnimation";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import TestimonialStructuredData from "@/components/TestimonialStructuredData";

export const metadata: Metadata = {
  title: "Web Design Services in London, Ontario | Custom Website Design | Webloft Studio",
  description: "Professional web design services in London, Ontario. Custom websites, responsive design, SEO optimization. Local web design company serving London and surrounding areas.",
  alternates: {
    canonical: 'https://webloftstudio.com/web-design-london-ontario'
  },
  openGraph: {
    title: "Web Design Services in London, Ontario | Custom Website Design | Webloft Studio",
    description: "Professional web design services in London, Ontario. Custom websites, responsive design, SEO optimization. Local web design company serving London and surrounding areas.",
    url: "https://webloftstudio.com/web-design-london-ontario",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Web Design Services in London, Ontario - Webloft Studio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services in London, Ontario | Custom Website Design | Webloft Studio",
    description: "Professional web design services in London, Ontario. Custom websites, responsive design, SEO optimization. Local web design company serving London and surrounding areas.",
    images: ["/webloftstudio.png"],
  },
};

export default function WebDesignLondonOntario() {
  const testimonials = [
    {
      name: "Marcus Johnson",
      title: "CEO",
      company: "TechStart Solutions",
      rating: 5,
      review: "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads. Their attention to detail and understanding of business needs is exceptional.",
      date: "2024-12-15",
      projectImage: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
      projectName: "Amigo Contracting Services",
      projectCategory: "Construction",
      projectResult: "+180% Lead Increase"
    },
    {
      name: "Sarah Mitchell",
      title: "Founder",
      company: "Bloom Wellness",
      rating: 5,
      review: "The team at Webloft Studio didn't just build us a website—they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
      date: "2024-11-20",
      projectImage: "/PROJECTS/FLOWGA.png",
      projectName: "Flowga Yoga Studio",
      projectCategory: "Wellness",
      projectResult: "+300% Online Bookings"
    },
    {
      name: "David Chen",
      title: "Owner",
      company: "Local Home Services",
      rating: 5,
      review: "From strategy to execution, everything was seamless. They understood our local market and built a website that actually brings in customers. Best investment we've made for our business.",
      date: "2024-10-30",
      projectImage: "/PROJECTS/AERIES.png",
      projectName: "Aeries",
      projectCategory: "Business",
      projectResult: "Improved User Experience"
    }
  ];

  return (
    <>
      <TestimonialStructuredData testimonials={testimonials} />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Webloft Studio",
            "description": "Professional web design services in London, Ontario. Custom websites, responsive design, SEO optimization.",
            "url": "https://webloftstudio.com/web-design-london-ontario",
            "telephone": "+1-226-376-6326",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 King Street",
              "addressLocality": "London",
              "addressRegion": "Ontario",
              "postalCode": "N6A 1A1",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.9849",
              "longitude": "-81.2453"
            },
            "areaServed": [
              "London, Ontario",
              "St. Thomas, Ontario",
              "Strathroy, Ontario",
              "Woodstock, Ontario",
              "Sarnia, Ontario"
            ],
            "serviceType": "Web Design Services",
            "priceRange": "$$",
            "openingHours": [
              "Mo-Fr 09:00-17:00",
              "Sa 10:00-15:00"
            ],
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Debit Card",
              "Bank Transfer",
              "PayPal"
            ],
            "currenciesAccepted": "CAD",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Website Design",
                    "description": "Professional custom website design for London businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Web Design",
                    "description": "Mobile-friendly website design that works on all devices"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Optimization",
                    "description": "Search engine optimization services for better Google rankings"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Development",
                    "description": "Online store development for London businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Webflow Development",
                    "description": "Professional Webflow website development and customization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Maintenance",
                    "description": "Ongoing website maintenance and support services"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "32",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://www.linkedin.com/company/webloft-studio",
              "https://twitter.com/webloftstudio",
              "https://www.facebook.com/webloftstudio",
              "https://www.instagram.com/webloftstudio"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen hero-section bg-black text-white overflow-visible">
        <div className="flex h-full flex-col pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12 overflow-visible">
          {/* Particle Text Animation Strip - Allow particles to overflow */}
          <div className="relative overflow-visible">
            <ParticleTextAnimation />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex flex-1 w-full max-w-4xl flex-col items-center px-4 text-center gap-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <h1 className="text-[32px] sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
                Professional Web Design Services in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">London, Ontario</span>
              </h1>

              <p className="text-base sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
                We build high-performing websites for businesses in London and surrounding areas. Your local web design company delivering results that drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                <Link href="/contact" className="btn-primary-enhanced text-lg px-8 py-4 animate-bounce-attention">
                  Start Your London Project
                </Link>
                <Link href="/projects" className="btn-secondary-enhanced text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
              
              {/* Scroll Down Arrow - positioned below buttons on all devices */}
              <div className="mt-6 animate-fade-in-up stagger-3">
                <ScrollDownArrow />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We don't just build websites—we build success stories. Here's the impact we've made for our London clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-1">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Across London and area</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-2">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">250%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Avg. Lead Increase</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Within first 6 months</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-3">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">98%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Based on project reviews</div>
            </div>
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-4">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">24hrs</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Response Time</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Usually much faster</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local Web Design in London Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/20 to-emerald-600/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Serving London & Surrounding Areas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Why Choose Local Web Design in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> London, Ontario</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              As your local web design company in London, we understand the unique needs of businesses in our community. We're not just another agency—we're your neighbors, committed to your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Local Knowledge Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="mb-6 pr-20 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300 pr-4">Local Market Knowledge</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    We understand London's business landscape, from downtown core to suburban areas. Our web design strategies are tailored to local market trends and customer behavior.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">London-specific SEO strategies</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Local business insights</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Community-focused approach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Service Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="mb-6 pr-20 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300 pr-4">Face-to-Face Meetings</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Being local means we can meet in person to discuss your project, understand your vision, and build stronger relationships with our London clients.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">In-person consultations</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Local support network</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Quick response times</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Investment Card */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="mb-6 pr-20 flex flex-col flex-grow">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors duration-300 pr-4">Community Investment</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    We're invested in London's success. When you choose us, you're supporting a local business that cares about the community's growth and prosperity.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Local business partnerships</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Community involvement</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Long-term relationships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              London Web Design Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Professional Web Design Services in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> London, Ontario</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              We specialize in creating websites that don't just look good—they perform. Every service is designed to maximize your online success in London and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Web Design Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-1 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300">Web Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Modern, responsive designs that convert visitors into customers with stunning visuals and intuitive user experience.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Responsive Design
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Conversion Optimization
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Modern UI/UX
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Webflow Development Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-2 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">Webflow Development</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Custom Webflow solutions that are easy to manage and update, built with clean code and advanced interactions.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Custom Interactions
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      CMS Integration
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Easy Management
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* SEO Optimization Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-3 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors duration-300">SEO Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Get found online with our proven SEO strategies that drive organic traffic and improve your search rankings.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Keyword Research
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Technical SEO
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Content Strategy
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Website Maintenance Service */}
            <div className="group relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up stagger-4 flex flex-col h-full">
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="pt-4 flex flex-col flex-grow">
                  <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors duration-300">Website Maintenance</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    Keep your site running smoothly with ongoing support, updates, and monitoring to ensure peak performance.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Regular Updates
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Performance Monitoring
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      24/7 Support
                    </div>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300 mt-auto">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your London Business Online?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn-primary-enhanced inline-block text-lg px-8 py-4"
          >
            Get Your Free London Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ParticleTextAnimation from "@/components/ParticleTextAnimation";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import TestimonialStructuredData from "@/components/TestimonialStructuredData";

export const metadata: Metadata = {
  title: "Web Design Services in Toronto | Custom Website Design | Webloft Studio",
  description: "Professional web design services in Toronto. Custom websites, responsive design, SEO optimization. Local web design company serving Toronto and surrounding areas.",
  alternates: {
    canonical: 'https://webloftstudio.com/web-design-toronto'
  },
  openGraph: {
    title: "Web Design Services in Toronto | Custom Website Design | Webloft Studio",
    description: "Professional web design services in Toronto. Custom websites, responsive design, SEO optimization. Local web design company serving Toronto and surrounding areas.",
    url: "https://webloftstudio.com/web-design-toronto",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Web Design Services in Toronto - Webloft Studio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services in Toronto | Custom Website Design | Webloft Studio",
    description: "Professional web design services in Toronto. Custom websites, responsive design, SEO optimization. Local web design company serving Toronto and surrounding areas.",
    images: ["/webloftstudio.png"],
  },
};

export default function WebDesignToronto() {
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
            "description": "Professional web design services in Toronto. Custom websites, responsive design, SEO optimization.",
            "url": "https://webloftstudio.com/web-design-toronto",
            "telephone": "+1-226-376-6326",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Bay Street",
              "addressLocality": "Toronto",
              "addressRegion": "Ontario",
              "postalCode": "M5H 2Y2",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.6532",
              "longitude": "-79.3832"
            },
            "areaServed": [
              "Toronto, Ontario",
              "Mississauga, Ontario",
              "Brampton, Ontario",
              "Markham, Ontario",
              "Vaughan, Ontario",
              "Richmond Hill, Ontario"
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
                    "description": "Professional custom website design for Toronto businesses"
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
                    "description": "Online store development for Toronto businesses"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47",
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Toronto, Ontario</span>
              </h1>

              <p className="text-base sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
                We build high-performing websites for businesses in Toronto and surrounding areas. Your local web design company delivering results that drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                <Link href="/contact" className="btn-primary-enhanced text-lg px-8 py-4 animate-bounce-attention">
                  Start Your Toronto Project
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
              We don't just build websites—we build success stories. Here's the impact we've made for our Toronto clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 hover-glow rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-1">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 animate-pulse-slow">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Across Toronto and area</div>
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

      {/* Why Choose Local Web Design in Toronto Section */}
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
              Serving Toronto & GTA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Why Choose Local Web Design in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Toronto, Ontario</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              As your local web design company in Toronto, we understand the competitive landscape and unique needs of businesses in Canada's largest city. We're not just another agency—we're your partners in digital success.
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300 pr-4">Toronto Market Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    We understand Toronto's diverse business landscape, from downtown financial district to suburban communities. Our web design strategies are tailored to local market trends and customer behavior.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Toronto-specific SEO strategies</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">GTA business insights</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Competitive market analysis</span>
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
                    Being local means we can meet in person to discuss your project, understand your vision, and build stronger relationships with our Toronto clients.
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
                    We're invested in Toronto's success. When you choose us, you're supporting a local business that cares about the community's growth and prosperity.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Toronto Business Online?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="btn-primary-enhanced inline-block text-lg px-8 py-4"
          >
            Get Your Free Toronto Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

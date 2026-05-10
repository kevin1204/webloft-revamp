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
      name: "Sergio Amigon",
      title: "CEO",
      company: "Amigo Contracting Services",
      rating: 5,
      review: "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads. Their attention to detail and understanding of business needs is exceptional.",
      date: "2024-12-15",
      projectImage: "/PROJECTS/amigo-contracting-services.webp",
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
      projectImage: "/PROJECTS/flowga.webp",
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
      projectImage: "/PROJECTS/aeries.webp",
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
              "https://linkedin.com/company/webloftstudio",
              "https://instagram.com/webloftstudio"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen hero-section overflow-visible" style={{ background: 'var(--bg)' }}>
        <div className="flex h-full flex-col pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12 overflow-visible">
          <div className="relative overflow-visible">
            <ParticleTextAnimation />
          </div>

          <div className="relative z-10 mx-auto flex flex-1 w-full max-w-4xl flex-col items-center px-4 text-center gap-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <p className="eyebrow animate-fade-in-up">Web Design London Ontario</p>
              <h1 className="h-1 animate-fade-in-up" style={{ color: 'var(--ink)' }}>
                Professional Web Design Services in
                <br />
                <span style={{ color: 'var(--accent)' }}>London, Ontario</span>
              </h1>

              <p className="body-lg max-w-3xl mx-auto animate-fade-in-up stagger-1" style={{ color: 'var(--ink-dim)' }}>
                We build high-performing websites for businesses in London and surrounding areas. Your local web design company delivering results that drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4 animate-bounce-attention">
                  Start Your London Project
                </Link>
                <Link href="/projects" className="ds-btn ds-btn-ghost text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>

              <div className="mt-6 animate-fade-in-up stagger-3">
                <ScrollDownArrow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container">
          <div className="text-center mb-16">
            <h2 className="h-2 mb-4">Results That Speak for Themselves</h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              We don&apos;t just build websites—we build success stories. Here&apos;s the impact we&apos;ve made for our London clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Delivered', sub: 'Across London and area' },
              { number: '250%', label: 'Avg. Lead Increase', sub: 'Within first 6 months' },
              { number: '98%', label: 'Client Satisfaction', sub: 'Based on project reviews' },
              { number: '24hrs', label: 'Response Time', sub: 'Usually much faster' },
            ].map((stat, i) => (
              <div key={i} className="ds-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{stat.number}</div>
                <div className="font-medium mb-1" style={{ color: 'var(--ink)' }}>{stat.label}</div>
                <div className="text-sm" style={{ color: 'var(--ink-mute)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local Web Design Section */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center mb-20">
            <p className="eyebrow mb-4 animate-fade-in-up">Serving London &amp; Surrounding Areas</p>
            <h2 className="h-2 mb-6 animate-fade-in-up stagger-1">
              Why Choose Local Web Design in{' '}
              <span style={{ color: 'var(--accent)' }}>London, Ontario</span>?
            </h2>
            <p className="body-lg max-w-4xl mx-auto animate-fade-in-up stagger-2" style={{ color: 'var(--ink-dim)' }}>
              As your local web design company in London, we understand the unique needs of businesses in our community. We&apos;re not just another agency—we&apos;re your neighbors, committed to your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="ds-card p-6 md:p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-1 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--accent)' }}>
                <svg className="w-7 h-7" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
              <h3 className="h-3 mb-4">Local Market Knowledge</h3>
              <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>
                We understand London&apos;s business landscape, from downtown core to suburban areas. Our web design strategies are tailored to local market trends and customer behavior.
              </p>
              <div className="space-y-3 mt-6">
                {['London-specific SEO strategies', 'Local business insights', 'Community-focused approach'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-elev-2)' }}>
                      <svg className="w-3 h-3" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body font-medium" style={{ color: 'var(--ink)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-card p-6 md:p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-2 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--accent)' }}>
                <svg className="w-7 h-7" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
              <h3 className="h-3 mb-4">Face-to-Face Meetings</h3>
              <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>
                Being local means we can meet in person to discuss your project, understand your vision, and build stronger relationships with our London clients.
              </p>
              <div className="space-y-3 mt-6">
                {['In-person consultations', 'Local support network', 'Quick response times'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-elev-2)' }}>
                      <svg className="w-3 h-3" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body font-medium" style={{ color: 'var(--ink)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-card p-6 md:p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-3 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--accent)' }}>
                <svg className="w-7 h-7" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
              <h3 className="h-3 mb-4">Community Investment</h3>
              <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>
                We&apos;re invested in London&apos;s success. When you choose us, you&apos;re supporting a local business that cares about the community&apos;s growth and prosperity.
              </p>
              <div className="space-y-3 mt-6">
                {['Local business partnerships', 'Community involvement', 'Long-term relationships'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--bg-elev-2)' }}>
                      <svg className="w-3 h-3" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body font-medium" style={{ color: 'var(--ink)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container">
          <div className="text-center mb-20">
            <p className="eyebrow mb-4 animate-fade-in-up">London Web Design Services</p>
            <h2 className="h-2 mb-6 animate-fade-in-up stagger-1">
              Professional Web Design Services in{' '}
              <span style={{ color: 'var(--accent)' }}>London, Ontario</span>
            </h2>
            <p className="body-lg max-w-4xl mx-auto animate-fade-in-up stagger-2" style={{ color: 'var(--ink-dim)' }}>
              We specialize in creating websites that don&apos;t just look good—they perform. Every service is designed to maximize your online success in London and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: 'Web Design',
                desc: 'Modern, responsive designs that convert visitors into customers with stunning visuals and intuitive user experience.',
                features: ['Responsive Design', 'Conversion Optimization', 'Modern UI/UX'],
                icon: (
                  <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Webflow Development',
                desc: 'Custom Webflow solutions that are easy to manage and update, built with clean code and advanced interactions.',
                features: ['Custom Interactions', 'CMS Integration', 'Easy Management'],
                icon: (
                  <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'SEO Optimization',
                desc: 'Get found online with our proven SEO strategies that drive organic traffic and improve your search rankings.',
                features: ['Keyword Research', 'Technical SEO', 'Content Strategy'],
                icon: (
                  <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                title: 'Website Maintenance',
                desc: 'Keep your site running smoothly with ongoing support, updates, and monitoring to ensure peak performance.',
                features: ['Regular Updates', 'Performance Monitoring', '24/7 Support'],
                icon: (
                  <svg className="w-6 h-6" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((service, i) => (
              <div key={i} className="ds-card p-6 md:p-8 hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up flex flex-col" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: 'var(--accent)' }}>
                  {service.icon}
                </div>
                <div className="w-8 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
                <h3 className="h-3 mb-4">{service.title}</h3>
                <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>{service.desc}</p>
                <div className="space-y-2 mt-4 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                      <span className="text-sm" style={{ color: 'var(--ink-dim)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services" className="inline-flex items-center font-semibold text-sm mt-auto" style={{ color: 'var(--accent)' }}>
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Ready to Transform Your London Business Online?
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
            Let&apos;s discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4">
            Get Your Free London Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

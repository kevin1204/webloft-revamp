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
            "description": "Professional web design services in Toronto. Custom websites, responsive design, SEO optimization.",
            "url": "https://webloftstudio.com/web-design-toronto",
            "telephone": "+1-226-376-6326",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "695 Talbot St",
              "addressLocality": "London",
              "addressRegion": "Ontario",
              "postalCode": "N6A 2T3",
              "addressCountry": "CA"
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
              "https://linkedin.com/company/webloftstudio",
              "https://instagram.com/webloftstudio"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen hero-section overflow-visible" style={{ background: 'var(--bg)' }}>
        <div className="flex h-full flex-col pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12 overflow-visible">
          {/* Particle Text Animation Strip */}
          <div className="relative overflow-visible">
            <ParticleTextAnimation />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex flex-1 w-full max-w-4xl flex-col items-center px-4 text-center gap-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <p className="eyebrow animate-fade-in-up">Web Design Toronto</p>
              <h1 className="h-1 animate-fade-in-up" style={{ color: 'var(--ink)' }}>
                Professional Web Design Services in
                <br />
                <span style={{ color: 'var(--accent)' }}>Toronto, Ontario</span>
              </h1>

              <p className="body-lg max-w-3xl mx-auto animate-fade-in-up stagger-1" style={{ color: 'var(--ink-dim)' }}>
                We build high-performing websites for businesses in Toronto and surrounding areas. Your local web design company delivering results that drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
                <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4 animate-bounce-attention">
                  Start Your Toronto Project
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
            <h2 className="h-2 mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
              We don&apos;t just build websites—we build success stories. Here&apos;s the impact we&apos;ve made for our Toronto clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Delivered', sub: 'Across Toronto and area' },
              { number: '250%', label: 'Avg. Lead Increase', sub: 'Within first 6 months' },
              { number: '98%', label: 'Client Satisfaction', sub: 'Based on project reviews' },
              { number: '24hrs', label: 'Response Time', sub: 'Usually much faster' },
            ].map((stat, i) => (
              <div key={i} className="ds-card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2 animate-pulse-slow" style={{ color: 'var(--accent)' }}>{stat.number}</div>
                <div className="font-medium mb-1" style={{ color: 'var(--ink)' }}>{stat.label}</div>
                <div className="text-sm" style={{ color: 'var(--ink-mute)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local Web Design in Toronto Section */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="ds-container">
          <div className="text-center mb-20">
            <p className="eyebrow mb-4 animate-fade-in-up">Serving Toronto &amp; GTA</p>
            <h2 className="h-2 mb-6 animate-fade-in-up stagger-1">
              Why Choose Local Web Design in{' '}
              <span style={{ color: 'var(--accent)' }}>Toronto, Ontario</span>?
            </h2>
            <p className="body-lg max-w-4xl mx-auto animate-fade-in-up stagger-2" style={{ color: 'var(--ink-dim)' }}>
              As your local web design company in Toronto, we understand the competitive landscape and unique needs of businesses in Canada&apos;s largest city. We&apos;re not just another agency—we&apos;re your partners in digital success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Local Knowledge Card */}
            <div className="ds-card p-6 md:p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-1 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg className="w-7 h-7" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
              <h3 className="h-3 mb-4">Toronto Market Expertise</h3>
              <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>
                We understand Toronto&apos;s diverse business landscape, from downtown financial district to suburban communities. Our web design strategies are tailored to local market trends and customer behavior.
              </p>
              <div className="space-y-3 mt-6">
                {['Toronto-specific SEO strategies', 'GTA business insights', 'Competitive market analysis'].map((item) => (
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

            {/* Personal Service Card */}
            <div className="ds-card p-6 md:p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-2 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg className="w-7 h-7" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
              <h3 className="h-3 mb-4">Face-to-Face Meetings</h3>
              <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>
                Being local means we can meet in person to discuss your project, understand your vision, and build stronger relationships with our Toronto clients.
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

            {/* Community Investment Card */}
            <div className="ds-card p-6 md:p-8 hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up stagger-3 flex flex-col">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg className="w-7 h-7" style={{ color: 'var(--bg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="w-10 h-0.5 mb-4" style={{ background: 'var(--accent)' }} />
              <h3 className="h-3 mb-4">Community Investment</h3>
              <p className="body flex-grow" style={{ color: 'var(--ink-dim)' }}>
                We&apos;re invested in Toronto&apos;s success. When you choose us, you&apos;re supporting a local business that cares about the community&apos;s growth and prosperity.
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

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--bg-elev)' }}>
        <div className="ds-container max-w-4xl text-center">
          <h2 className="h-2 mb-6">
            Ready to Transform Your Toronto Business Online?
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--ink-dim)' }}>
            Let&apos;s discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link href="/contact" className="ds-btn ds-btn-primary text-lg px-8 py-4">
            Get Your Free Toronto Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

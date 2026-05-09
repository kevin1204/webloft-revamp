import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import LogoWall from '@/components/home/LogoWall';
import StatsSection from '@/components/home/StatsSection';
import ManifestoSection from '@/components/home/ManifestoSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CasesSection from '@/components/home/CasesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PricingSection from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Webloft Studio — Websites that convert',
  description:
    'Premium, conversion-focused websites for service businesses. Custom design, Webflow builds, SEO, landing pages, and lead capture — built to earn more customers.',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Webloft Studio',
  description:
    'Premium, conversion-focused websites for service businesses ready to grow.',
  url: 'https://webloftstudio.com',
  email: 'hello@webloftstudio.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CA',
    addressLocality: 'Toronto',
  },
  areaServed: [
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: 'Web Design Agency',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webflow Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Pages' } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection />
      <LogoWall />
      <StatsSection />
      <ManifestoSection />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

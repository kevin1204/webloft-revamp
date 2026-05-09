import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Design, Development, SEO & Automation Services | Webloft Studio",
  description: "Explore Webloft Studio services for custom website design, website development, redesigns, landing pages, SEO setup, lead capture, maintenance, and analytics tracking.",
  keywords: [
    'website design services',
    'website development services',
    'website redesign services',
    'landing page design',
    'on page SEO setup',
    'lead capture automation',
    'website maintenance',
    'analytics tracking setup',
  ],
  alternates: {
    canonical: 'https://webloftstudio.com/services'
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

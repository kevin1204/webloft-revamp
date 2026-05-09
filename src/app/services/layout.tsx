import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Web Design Services Toronto | Webflow Development | SEO | Webloft",
  description: "Professional web design services in Toronto. Custom websites, Webflow development, SEO optimization, and maintenance. Drive business growth with expert web solutions.",
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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Web Design Services Toronto | Professional Website Design | Webloft Studio",
  description: "Professional custom web design services in Toronto. Bespoke, conversion-focused websites built for speed, SEO, and clarity. Get a website that stands out and drives business growth.",
  keywords: "custom web design Toronto, professional website design, responsive web design, conversion-focused websites, web design services Toronto, custom website development",
  alternates: {
    canonical: 'https://webloftstudio.com/services/web-design'
  }
};

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

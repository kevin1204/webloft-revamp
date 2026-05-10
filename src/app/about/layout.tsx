import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Webloft Studio | Web Design for Service Businesses | Our Story",
  description: "Meet Webloft Studio, a web design studio helping service businesses grow online with custom websites, conversion-focused design, and hands-on support.",
  alternates: {
    canonical: 'https://webloftstudio.com/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

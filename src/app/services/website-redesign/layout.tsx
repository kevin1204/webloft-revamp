import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Redesign Services Toronto | Professional Website Redesign | Webloft Studio",
  description: "Professional website redesign services in Toronto. Modernize your outdated website with improved UI/UX, better conversions, and enhanced Core Web Vitals. Transform your online presence.",
  keywords: "website redesign Toronto, website redesign services, website modernization, UI UX redesign, website conversion optimization, website redesign company Toronto",
  alternates: {
    canonical: 'https://webloftstudio.com/services/website-redesign'
  }
};

export default function WebsiteRedesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

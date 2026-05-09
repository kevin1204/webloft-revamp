import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Webflow Development Services Toronto | Professional Webflow Websites | Webloft Studio",
  description: "Professional Webflow development services in Toronto. Pro-level builds with easy editing. Custom Webflow websites that combine development power with visual design flexibility.",
  keywords: "Webflow development Toronto, Webflow websites, Webflow CMS, Webflow development services, custom Webflow sites, Webflow developer Toronto",
  alternates: {
    canonical: 'https://webloftstudio.com/services/webflow-development'
  }
};

export default function WebflowDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Template-Based Websites | Fast & Affordable Web Design | Webloft Studio",
  description: "Get a professional website fast with our template-based solutions. Perfect for small businesses, freelancers, and startups. SEO-friendly, mobile-responsive, and ready to launch.",
  alternates: {
    canonical: 'https://webloftstudio.com/template-based-websites'
  }
};

export default function TemplateBasedWebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

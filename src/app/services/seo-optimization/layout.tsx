import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO & Content Optimization Services Toronto | Professional SEO Services | Webloft Studio",
  description: "Professional SEO and content optimization services in Toronto. Get found and convert. We optimize your website to rank higher in search results and attract more qualified customers.",
  keywords: "SEO services Toronto, content optimization, search engine optimization, local SEO Toronto, SEO consultant Toronto, website SEO optimization",
  alternates: {
    canonical: 'https://webloftstudio.com/services/seo-optimization'
  }
};

export default function SEOOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

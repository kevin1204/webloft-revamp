import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Services Toronto | CRO Services | Webloft Studio",
  description: "Professional conversion rate optimization (CRO) services in Toronto. Turn more visitors into customers with data-driven optimization strategies. Increase your conversion rates and ROI.",
  keywords: "conversion rate optimization Toronto, CRO services, website conversion optimization, landing page optimization, conversion optimization consultant, CRO agency Toronto",
  alternates: {
    canonical: 'https://webloftstudio.com/services/conversion-rate-optimization'
  }
};

export default function ConversionRateOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

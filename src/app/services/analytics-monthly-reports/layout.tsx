import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Analytics & Monthly Reports Services Toronto | Website Analytics | Webloft Studio",
  description: "Professional analytics and monthly reporting services in Toronto. Transform your website data into actionable insights. Get comprehensive reports and recommendations for business growth.",
  keywords: "website analytics Toronto, monthly reporting services, Google Analytics setup, website performance reports, business intelligence reports, data analysis services Toronto",
  alternates: {
    canonical: 'https://webloftstudio.com/services/analytics-monthly-reports'
  }
};

export default function AnalyticsMonthlyReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

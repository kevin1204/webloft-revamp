import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Maintenance Services Toronto | Professional Website Maintenance | Webloft Studio",
  description: "Professional website maintenance services in Toronto. Keep your website secure, fast, and up-to-date. We handle the technical details so you can focus on growing your business.",
  keywords: "website maintenance Toronto, website maintenance services, website security updates, website performance monitoring, website backup services, website maintenance plans",
  alternates: {
    canonical: 'https://webloftstudio.com/services/website-maintenance'
  }
};

export default function WebsiteMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

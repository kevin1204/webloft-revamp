import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hosting & Security Setup Services Toronto | Website Hosting Setup | Webloft Studio",
  description: "Professional hosting and security setup services in Toronto. We configure hosting on third-party platforms like Webflow, Netlify, and Vercel. Setup only - no infrastructure hosting.",
  keywords: "hosting setup Toronto, website hosting configuration, security setup services, Webflow hosting setup, Netlify hosting setup, Vercel hosting setup, website security configuration",
  alternates: {
    canonical: 'https://webloftstudio.com/services/hosting-security-setup'
  }
};

export default function HostingSecuritySetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

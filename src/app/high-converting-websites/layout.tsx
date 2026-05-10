import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Converting Websites | Free Conversion Audit | Webloft Studio',
  description: 'Is your website losing you leads? Get a free conversion audit from Webloft Studio. We turn underperforming websites into lead generation machines for service businesses.',
  alternates: {
    canonical: 'https://webloftstudio.com/high-converting-websites',
  },
  openGraph: {
    title: 'High-Converting Websites | Free Conversion Audit | Webloft Studio',
    description: 'Is your website losing you leads? Get a free conversion audit from Webloft Studio.',
    url: 'https://webloftstudio.com/high-converting-websites',
    siteName: 'Webloft Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Converting Websites | Free Conversion Audit | Webloft Studio',
    description: 'Is your website losing you leads? Get a free conversion audit from Webloft Studio.',
  },
};

export default function HighConvertingWebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

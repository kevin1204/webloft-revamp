import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a Project | Get a Free Discovery Call | Webloft Studio',
  description:
    'Ready to build a website that earns its keep? Tell us about your business and book a free 30-minute discovery call. Webloft Studio — fixed fees, 21-day launches.',
  alternates: {
    canonical: 'https://webloftstudio.com/contact',
  },
  openGraph: {
    title: 'Start a Project | Webloft Studio',
    description:
      'Tell us about your project and book a free discovery call. Custom websites, Webflow builds, SEO, and lead capture for service businesses.',
    url: 'https://webloftstudio.com/contact',
    siteName: 'Webloft Studio',
    images: [
      {
        url: '/webloftstudio.png',
        width: 1200,
        height: 630,
        alt: 'Webloft Studio — Start a Project',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project | Webloft Studio',
    description:
      'Tell us about your project and book a free discovery call. Custom websites, Webflow builds, SEO, and lead capture for service businesses.',
    images: ['/webloftstudio.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";
import CustomCursor from "../components/CustomCursor";
import RevealObserver from "../components/RevealObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webloftstudio.com'),
  title: "Professional Web Design Services | Custom Websites | Webloft Studio",
  description: "Expert web design services for businesses worldwide. Custom websites, responsive design, SEO optimization. Drive business growth with professional web development. Get started today!",
  icons: {
    icon: [
      { url: '/wflogo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/wflogo.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Web Design Services | Custom Website Design Company | Webloft Studio",
    description: "Professional web design services that drive business growth. Custom websites, responsive design, SEO optimization. Get more leads with our expert web design company.",
    url: "https://webloftstudio.com",
    siteName: "Webloft Studio",
    images: [
      {
        url: "/webloftstudio.png",
        width: 1200,
        height: 630,
        alt: "Webloft Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | Custom Website Design Company | Webloft Studio",
    description: "Professional web design services that drive business growth. Custom websites, responsive design, SEO optimization. Get more leads with our expert web design company.",
    images: ["/webloftstudio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <head>
        <link rel="icon" href="/wflogo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/wflogo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased grain`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZM9M28MYB"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZM9M28MYB');
          `}
        </Script>

        <ServiceWorkerRegistration />
        <RevealObserver />
        <CustomCursor />
        <Navbar />
        <main className="pt-[72px] overflow-visible">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

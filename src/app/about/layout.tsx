import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Webloft Studio | Toronto Web Design Company | Our Story",
  description: "Meet Webloft Studio, Toronto's premier web design company. Learn about our mission to help small businesses succeed online with custom websites and digital solutions.",
  alternates: {
    canonical: 'https://webloftstudio.com/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

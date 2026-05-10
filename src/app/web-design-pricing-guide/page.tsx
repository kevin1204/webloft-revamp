import { Metadata } from "next";
import WebDesignPricingGuideForm from "@/components/WebDesignPricingGuideForm";

export const metadata: Metadata = {
  title: "Web Design Pricing Guide | What Websites Really Cost | Webloft Studio",
  description: "Get our comprehensive web design pricing guide. Understand real website costs, pricing factors, and how to budget for your project — no fluff, no pressure.",
  alternates: {
    canonical: "https://webloftstudio.com/web-design-pricing-guide",
  },
  openGraph: {
    title: "Web Design Pricing Guide | What Websites Really Cost | Webloft Studio",
    description: "Understand real website costs and how to budget for your project.",
    url: "https://webloftstudio.com/web-design-pricing-guide",
    siteName: "Webloft Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Pricing Guide | What Websites Really Cost | Webloft Studio",
    description: "Understand real website costs and how to budget for your project.",
  },
};

export default function WebDesignPricingGuidePage() {
  return <WebDesignPricingGuideForm />;
}
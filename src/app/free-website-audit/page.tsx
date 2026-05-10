import { Metadata } from "next";
import FreeWebsiteAuditForm from "@/components/FreeWebsiteAuditForm";

export const metadata: Metadata = {
  title: "Free Website Audit | Find What's Hurting Your Site | Webloft Studio",
  description: "Request your free professional website audit. We review your site's performance, SEO, design, and conversion rate — and send you a clear report within 24–48 hours.",
  alternates: {
    canonical: "https://webloftstudio.com/free-website-audit",
  },
  openGraph: {
    title: "Free Website Audit | Find What's Hurting Your Site | Webloft Studio",
    description: "We review your site's performance, SEO, design, and conversion rate — and send you a clear report within 24–48 hours.",
    url: "https://webloftstudio.com/free-website-audit",
    siteName: "Webloft Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit | Find What's Hurting Your Site | Webloft Studio",
    description: "We review your site's performance, SEO, design, and conversion rate — and send you a clear report within 24–48 hours.",
  },
};

export default function FreeWebsiteAuditPage() {
  return <FreeWebsiteAuditForm />;
}

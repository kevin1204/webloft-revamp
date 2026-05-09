export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webloft Studio",
    "description": "Professional web development and design agency. We build modern, high-performing websites that bring you leads, clients, and growth.",
    "url": "https://webloftstudio.com",
    "logo": "https://webloftstudio.com/webloftstudio.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@webloftstudio.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/webloftstudio",
      "https://instagram.com/webloftstudio"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "serviceType": [
      "Web Development",
      "Web Design",
      "Webflow Development",
      "SEO Services",
      "Website Maintenance"
    ]
  }

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Custom web development and design services for small and medium businesses",
    "provider": {
      "@type": "Organization",
      "name": "Webloft Studio"
    },
    "serviceType": [
      "Web Development",
      "Web Design",
      "Webflow Development",
      "SEO Optimization",
      "Website Maintenance"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Small and Medium Businesses"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
    </>
  )
}
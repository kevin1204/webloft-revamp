interface TestimonialStructuredDataProps {
  testimonials: Array<{
    name: string;
    title: string;
    company: string;
    rating: number;
    review: string;
    date?: string;
  }>;
}

export default function TestimonialStructuredData({ testimonials }: TestimonialStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webloft Studio",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": testimonials.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map((testimonial) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name,
        "jobTitle": testimonial.title,
        "worksFor": {
          "@type": "Organization",
          "name": testimonial.company
        }
      },
      "reviewBody": testimonial.review,
      "datePublished": testimonial.date || new Date().toISOString(),
      "publisher": {
        "@type": "Organization",
        "name": "Webloft Studio"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

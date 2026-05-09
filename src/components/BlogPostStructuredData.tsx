interface BlogPostStructuredDataProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
  image?: string;
}

export default function BlogPostStructuredData({
  title,
  description,
  slug,
  date,
  readTime,
  category,
  author = "Webloft Studio",
  image = "/hero-bg.jpg"
}: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `https://webloftstudio.com/blog/${slug}`,
    "datePublished": new Date(date).toISOString(),
    "dateModified": new Date(date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://webloftstudio.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Webloft Studio",
      "url": "https://webloftstudio.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webloftstudio.com/webloftstudio.png"
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": `https://webloftstudio.com${image}`,
      "width": 1200,
      "height": 630
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://webloftstudio.com/blog/${slug}`
    },
    "articleSection": category,
    "wordCount": Math.ceil(description.length * 2.5), // Rough estimate
    "timeRequired": readTime,
    "keywords": [
      "web development",
      "web design",
      "business growth",
      "digital marketing",
      category.toLowerCase()
    ],
    "about": {
      "@type": "Thing",
      "name": "Web Development and Design"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

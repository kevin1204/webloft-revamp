import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Web Design Blog Toronto | SEO Tips | Business Growth | Webloft",
  description: "Expert web design and SEO insights for Toronto businesses. Learn how to grow your business online with actionable tips, tutorials, and digital marketing advice.",
  keywords: "web development blog, business website tips, SEO insights, Webflow tutorials, digital marketing advice",
  alternates: {
    canonical: 'https://webloftstudio.com/blog'
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Why Webflow is the Best Platform for Small & Medium Businesses",
    excerpt: "Discover why Webflow outperforms WordPress, Wix, and Squarespace for growing businesses. Learn about speed, design flexibility, and client autonomy.",
    slug: "why-webflow-best-platform-small-medium-businesses",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Platform",
    featured: true,
    image: "/hero-bg.jpg"
  },
  {
    id: 2,
    title: "The Real ROI of a Great Website: Why It's an Investment, Not an Expense",
    excerpt: "Learn how a professionally designed website generates leads, builds trust, and delivers measurable returns on your investment.",
    slug: "real-roi-great-website-investment-not-expense",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Business",
    featured: true,
    image: "/hero-bg.jpg"
  },
  {
    id: 3,
    title: "SEO & Local SEO: The Secret to Getting Found Online",
    excerpt: "Master the fundamentals of SEO and local search optimization to attract more customers and dominate your local market.",
    slug: "seo-local-seo-secret-getting-found-online",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "SEO",
    featured: false,
    image: "/hero-bg.jpg"
  },
  {
    id: 4,
    title: "5 Common Website Mistakes That Could Be Costing You Clients",
    excerpt: "Avoid these critical website design mistakes that drive customers away and learn how to convert more visitors into paying clients.",
    slug: "5-common-website-mistakes-costing-clients",
    date: "January 8, 2025",
    readTime: "4 min read",
    category: "Design",
    featured: false,
    image: "/hero-bg.jpg"
  },
  {
    id: 5,
    title: "How Often Should You Update Your Website? (And Why It Matters)",
    excerpt: "Discover the importance of regular website updates and maintenance for SEO, security, and user experience.",
    slug: "how-often-update-website-why-matters",
    date: "January 5, 2025",
    readTime: "5 min read",
    category: "Maintenance",
    featured: false,
    image: "/hero-bg.jpg"
  }
];


export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Actionable advice, tips, and insights to grow your business online. Expert web development and digital marketing strategies.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>


      {/* Featured Articles */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful articles for growing your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Professional web design and development insights by Webloft Studio`}
                    width={600}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete collection of our web development and digital marketing insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Professional web design and development insights by Webloft Studio`}
                    width={400}
                    height={200}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Meta Info */}
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Get weekly tips, industry insights, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-300 bg-white border border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-black/70"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives real business results. Get a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
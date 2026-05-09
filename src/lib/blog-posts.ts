import type { Metadata } from 'next';

export type BlogSlug =
  | 'why-webflow-best-platform-small-medium-businesses'
  | 'real-roi-great-website-investment-not-expense'
  | 'seo-local-seo-secret-getting-found-online'
  | '5-common-website-mistakes-costing-clients'
  | 'how-often-update-website-why-matters'
  | 'web-design-services-toronto-ontario';

export type BlogSection = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: BlogSlug;
  number: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  featured: boolean;
  image: string;
  keywords: string[];
  takeaways: string[];
  sections: BlogSection[];
  ctaTitle: string;
  ctaText: string;
  related: BlogSlug[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-webflow-best-platform-small-medium-businesses',
    number: '01',
    title: 'Why Webflow is the Best Platform for Small & Medium Businesses',
    shortTitle: 'Why Webflow works',
    excerpt:
      'A practical breakdown of why Webflow gives growing businesses speed, design flexibility, cleaner editing, and fewer maintenance headaches than many traditional website platforms.',
    category: 'Platform',
    date: 'January 15, 2025',
    isoDate: '2025-01-15',
    readTime: '5 min read',
    featured: true,
    image: '/blog/blog-01-webflow.jpg',
    keywords: [
      'Webflow agency',
      'best website platform for small business',
      'Webflow vs WordPress',
      'small business website platform',
      'Webflow development services',
    ],
    takeaways: [
      'Webflow produces fast, clean, responsive marketing sites.',
      'Business owners can edit content without touching fragile plugin stacks.',
      'The platform gives teams more design control than template-first builders.',
    ],
    sections: [
      {
        id: 'speed',
        heading: 'Speed That Converts Visitors Into Customers',
        paragraphs: [
          'Website speed is not a technical vanity metric. It affects search visibility, bounce rate, trust, and the number of visitors who make it through to your offer.',
          'Webflow gives growing businesses a cleaner front-end foundation than many plugin-heavy website setups. Pages can be built with lean structure, optimized images, responsive layouts, and fewer moving parts that slow the experience down.',
          'That matters most for service businesses because prospects are often comparing several companies at once. A fast, clear website helps you look more credible before a visitor ever books a call.',
        ],
      },
      {
        id: 'design-control',
        heading: 'Design Freedom Without Template Fatigue',
        paragraphs: [
          'Many website platforms make businesses choose between convenience and originality. The result is often a site that looks fine, but feels like every other company in the category.',
          'Webflow is different because it allows custom design systems without forcing the site into a rigid template. You can shape the interface around your brand, service structure, proof, and conversion goals.',
        ],
        bullets: [
          'Custom layouts instead of generic theme sections',
          'Strong responsive control for mobile, tablet, and desktop',
          'Reusable components for future service pages and landing pages',
        ],
      },
      {
        id: 'editing',
        heading: 'Content Editing That Does Not Break the Site',
        paragraphs: [
          'A good website should not require a developer for every small update. Webflow CMS lets business owners update blogs, case studies, team content, services, and common marketing content inside structured fields.',
          'The advantage is control with guardrails. Editors can change the content they need to change while the design system stays intact.',
        ],
      },
      {
        id: 'seo',
        heading: 'Built-In SEO Foundations',
        paragraphs: [
          'Webflow gives teams control over titles, descriptions, clean URLs, redirects, image alt text, schema opportunities, sitemaps, and page structure. That does not replace SEO strategy, but it does remove a lot of avoidable friction.',
          'For small and medium businesses, the real win is that marketing pages can be launched with search basics in place from day one.',
        ],
      },
      {
        id: 'maintenance',
        heading: 'Fewer Plugin and Maintenance Problems',
        paragraphs: [
          'A common issue with traditional CMS builds is plugin dependency. More plugins can mean more updates, more conflicts, more security concerns, and more ways for the website to become fragile.',
          'Webflow keeps common marketing-site needs like forms, CMS content, animation, hosting, redirects, and publishing inside a tighter platform. For many service businesses, that is the right tradeoff.',
        ],
      },
    ],
    ctaTitle: 'Thinking about a Webflow build?',
    ctaText: 'We design and build Webflow websites that stay fast, polished, and easy for your team to update.',
    related: [
      'real-roi-great-website-investment-not-expense',
      'seo-local-seo-secret-getting-found-online',
      '5-common-website-mistakes-costing-clients',
    ],
  },
  {
    slug: 'real-roi-great-website-investment-not-expense',
    number: '02',
    title: "The Real ROI of a Great Website: Why It's an Investment, Not an Expense",
    shortTitle: 'Website ROI',
    excerpt:
      'A strong website can create measurable returns through better trust, stronger lead quality, higher conversion rates, and fewer wasted sales conversations.',
    category: 'Business Strategy',
    date: 'January 12, 2025',
    isoDate: '2025-01-12',
    readTime: '8 min read',
    featured: true,
    image: '/blog/blog-02-roi.jpg',
    keywords: [
      'website ROI',
      'website investment',
      'conversion focused website',
      'business website strategy',
      'website lead generation',
    ],
    takeaways: [
      'A website should be measured by qualified leads and sales support, not only visual polish.',
      'Better positioning can shorten sales cycles and improve trust before the first call.',
      'The right website can support ads, SEO, referrals, hiring, and partnerships at once.',
    ],
    sections: [
      {
        id: 'investment',
        heading: 'A Website Should Create Business Leverage',
        paragraphs: [
          'A website becomes an expense when it is treated like a digital brochure. It becomes an investment when it supports revenue, sales, hiring, trust, search visibility, and campaign performance.',
          'The difference is strategy. A high-performing website makes it easier for the right people to understand your offer, believe your proof, and take the next step.',
        ],
      },
      {
        id: 'trust',
        heading: 'Trust Is a Conversion Asset',
        paragraphs: [
          'Most buyers judge a business before they ever speak with the team. They look for clarity, credibility, proof, expertise, and signs that the company understands their problem.',
          'A polished website creates confidence at the exact moment a prospect is deciding whether to contact you, compare you, or move on.',
        ],
        bullets: [
          'Clear service positioning',
          'Specific case studies and outcomes',
          'Visible process and expectations',
          'Easy routes to book, call, or enquire',
        ],
      },
      {
        id: 'leads',
        heading: 'Better Websites Improve Lead Quality',
        paragraphs: [
          'More leads are not always better. The real goal is more of the right leads: people who understand the value, match the offer, and are ready for a meaningful conversation.',
          'Strong copy, service pages, FAQs, pricing signals, and proof can pre-qualify visitors before they fill out a form. That saves time and improves sales conversations.',
        ],
      },
      {
        id: 'channels',
        heading: 'One Website Supports Every Marketing Channel',
        paragraphs: [
          'Paid ads, SEO, social content, referrals, email campaigns, and sales outreach all eventually send people somewhere. If the destination is weak, the whole channel underperforms.',
          'A better website improves the return on every channel because it converts attention into action more effectively.',
        ],
      },
      {
        id: 'measure',
        heading: 'Measure ROI With Real Conversion Signals',
        paragraphs: [
          'Website ROI should be tracked with practical signals: form submissions, booked calls, phone clicks, lead quality, conversion rate, search visibility, and revenue influenced by the site.',
          'The strongest websites pair good design with tracking so decisions are based on evidence instead of opinion.',
        ],
      },
    ],
    ctaTitle: 'Want a website that earns its keep?',
    ctaText: 'We build websites around positioning, proof, conversion paths, and measurable business outcomes.',
    related: [
      '5-common-website-mistakes-costing-clients',
      'seo-local-seo-secret-getting-found-online',
      'why-webflow-best-platform-small-medium-businesses',
    ],
  },
  {
    slug: 'seo-local-seo-secret-getting-found-online',
    number: '03',
    title: 'SEO & Local SEO: The Secret to Getting Found Online',
    shortTitle: 'SEO and local SEO',
    excerpt:
      'A clear guide to the SEO foundations that help businesses show up for the searches that matter, especially in competitive local markets.',
    category: 'SEO',
    date: 'January 10, 2025',
    isoDate: '2025-01-10',
    readTime: '10 min read',
    featured: false,
    image: '/blog/blog-03-seo.jpg',
    keywords: [
      'SEO for small business',
      'local SEO',
      'technical SEO',
      'on page SEO',
      'local search optimization',
    ],
    takeaways: [
      'SEO starts with technical health, page clarity, and search intent.',
      'Local SEO needs location signals, reviews, citations, and useful local content.',
      'Search growth is strongest when service pages, content, and tracking work together.',
    ],
    sections: [
      {
        id: 'foundations',
        heading: 'SEO Starts With a Clear Foundation',
        paragraphs: [
          'SEO is not just publishing blog posts or repeating keywords. Search engines need to understand what each page is about, who it serves, and whether the experience is useful.',
          'That begins with crawlable pages, clean URLs, strong headings, helpful content, internal links, metadata, schema, and fast loading performance.',
        ],
      },
      {
        id: 'intent',
        heading: 'Match Pages to Search Intent',
        paragraphs: [
          'Every strong SEO strategy starts with intent. A person searching for "website redesign services" needs a different page than someone searching "how often should I update my website."',
          'Service pages should convert demand. Blog content should educate, answer objections, and support internal links back to service pages.',
        ],
      },
      {
        id: 'local',
        heading: 'Local SEO Builds Geographic Relevance',
        paragraphs: [
          'Local SEO helps search engines connect your business with the areas you serve. This is especially important for companies competing in city or regional searches.',
          'The basics include a complete Google Business Profile, consistent citations, location-aware content, strong reviews, service area clarity, and relevant local landing pages.',
        ],
        bullets: [
          'Use consistent name, address, phone, and website information',
          'Create location pages only when they are genuinely useful',
          'Add service-specific local proof where possible',
          'Track calls, forms, and map actions as conversions',
        ],
      },
      {
        id: 'content',
        heading: 'Content Should Support the Sales Journey',
        paragraphs: [
          'Good SEO content does not exist just to rank. It should answer real questions buyers have before they contact you.',
          'Content that explains pricing, process, timelines, comparisons, common mistakes, and maintenance can attract search traffic while improving conversion quality.',
        ],
      },
      {
        id: 'tracking',
        heading: 'Track What Organic Traffic Actually Does',
        paragraphs: [
          'Ranking reports are useful, but they are not the whole story. The business needs to know which pages create enquiries, phone calls, bookings, and qualified leads.',
          'That is why SEO should be paired with analytics and conversion tracking from the start.',
        ],
      },
    ],
    ctaTitle: 'Need a cleaner SEO foundation?',
    ctaText: 'We set up on-page SEO, technical checks, schema, internal links, and tracking so your website is easier to find and easier to measure.',
    related: [
      'web-design-services-toronto-ontario',
      'how-often-update-website-why-matters',
      'real-roi-great-website-investment-not-expense',
    ],
  },
  {
    slug: '5-common-website-mistakes-costing-clients',
    number: '04',
    title: '5 Common Website Mistakes That Could Be Costing You Clients',
    shortTitle: 'Website mistakes',
    excerpt:
      'Five practical website issues that quietly reduce trust, weaken conversions, and make it harder for qualified visitors to become clients.',
    category: 'Web Design',
    date: 'January 8, 2025',
    isoDate: '2025-01-08',
    readTime: '6 min read',
    featured: false,
    image: '/blog/blog-04-mistakes.jpg',
    keywords: [
      'website mistakes',
      'website conversion mistakes',
      'web design mistakes',
      'website not converting',
      'business website tips',
    ],
    takeaways: [
      'Confusing messaging is often more damaging than imperfect visuals.',
      'Weak mobile UX, slow pages, and unclear CTAs reduce conversion quickly.',
      'Proof and trust signals should appear before a visitor has to ask for them.',
    ],
    sections: [
      {
        id: 'unclear-message',
        heading: '1. The Website Does Not Explain the Offer Quickly',
        paragraphs: [
          'Visitors should understand what you do, who you help, and why it matters within seconds. If they need to decode your homepage, you have already introduced friction.',
          'Clear positioning is the foundation of conversion. Strong websites make the offer obvious, then support it with proof and action paths.',
        ],
      },
      {
        id: 'generic-proof',
        heading: '2. The Site Makes Claims Without Proof',
        paragraphs: [
          'Phrases like "high quality" and "trusted partner" are not enough on their own. Visitors need evidence that your business can deliver.',
          'Use case studies, testimonials, metrics, before-and-after examples, recognizable clients, process detail, and specific outcomes to build credibility.',
        ],
      },
      {
        id: 'mobile',
        heading: '3. Mobile Feels Like an Afterthought',
        paragraphs: [
          'Many visitors will judge your business from a phone. If buttons are hard to tap, text feels cramped, images crop badly, or forms are awkward, they will leave.',
          'Responsive design should be planned, not patched. The mobile version needs its own hierarchy, spacing, and conversion flow.',
        ],
      },
      {
        id: 'cta',
        heading: '4. Calls to Action Are Too Weak or Too Rare',
        paragraphs: [
          'A visitor should always know what to do next. That does not mean every section needs a loud button, but it does mean the page needs a clear rhythm of next steps.',
          'Use CTAs that match intent: book a call, request a quote, view work, download a guide, or compare services.',
        ],
      },
      {
        id: 'speed',
        heading: '5. The Site Is Slow or Technically Messy',
        paragraphs: [
          'Slow loading, broken links, layout shifts, missing metadata, and poor accessibility all weaken trust. They also make every marketing channel less efficient.',
          'Fixing technical issues is often one of the fastest ways to improve the experience without changing the whole brand.',
        ],
      },
    ],
    ctaTitle: 'Not sure what is holding your website back?',
    ctaText: 'We can audit the page experience, conversion flow, SEO basics, and technical foundation.',
    related: [
      'real-roi-great-website-investment-not-expense',
      'how-often-update-website-why-matters',
      'seo-local-seo-secret-getting-found-online',
    ],
  },
  {
    slug: 'how-often-update-website-why-matters',
    number: '05',
    title: 'How Often Should You Update Your Website? (And Why It Matters)',
    shortTitle: 'Website updates',
    excerpt:
      'A practical maintenance guide for keeping your website current, secure, search-friendly, and aligned with your business as it changes.',
    category: 'Website Maintenance',
    date: 'January 5, 2025',
    isoDate: '2025-01-05',
    readTime: '7 min read',
    featured: false,
    image: '/blog/blog-05-updates.jpg',
    keywords: [
      'how often update website',
      'website maintenance',
      'website updates',
      'website care plan',
      'website refresh',
    ],
    takeaways: [
      'Most business websites need small monthly checks and larger quarterly reviews.',
      'Content, performance, security, forms, and tracking should all be maintained.',
      'A website should evolve as services, proof, offers, and buyer questions change.',
    ],
    sections: [
      {
        id: 'cadence',
        heading: 'The Right Update Cadence Depends on the Website',
        paragraphs: [
          'A simple five-page website may not need weekly edits, but it still needs regular checks. A larger site with blogs, campaigns, integrations, and forms needs a more active maintenance rhythm.',
          'For most service businesses, a monthly technical check and a quarterly content review is a strong baseline.',
        ],
      },
      {
        id: 'content',
        heading: 'Update Content When the Business Changes',
        paragraphs: [
          'Your website should reflect current services, pricing signals, team details, locations, process, case studies, and proof. Outdated content makes the business feel less active and less trustworthy.',
          'Small updates can have a large impact when they make the site more accurate and useful for buyers.',
        ],
      },
      {
        id: 'technical',
        heading: 'Maintain the Technical Foundation',
        paragraphs: [
          'Forms, tracking, redirects, page speed, broken links, plugins, CMS settings, backups, and security checks all need attention. Many website problems go unnoticed until a lead form breaks or a campaign starts sending paid traffic to a weak page.',
          'Regular QA keeps small technical issues from becoming expensive problems.',
        ],
        bullets: [
          'Test contact forms and booking flows',
          'Check analytics and conversion events',
          'Review page speed and image weight',
          'Update CMS, plugins, or platform settings when required',
        ],
      },
      {
        id: 'seo',
        heading: 'Freshness Helps SEO When It Adds Value',
        paragraphs: [
          'Updating a website just to change dates is not a strategy. Updating pages with better answers, clearer structure, new proof, stronger internal links, and improved media can support search performance.',
          'Content reviews are especially useful for service pages, local pages, and posts that already get impressions.',
        ],
      },
      {
        id: 'refresh',
        heading: 'When to Consider a Full Redesign',
        paragraphs: [
          'If the business has repositioned, the site no longer converts, the design feels dated, mobile UX is weak, or the technical foundation is holding you back, small updates may not be enough.',
          'A redesign is worth considering when the current site cannot support the next stage of growth.',
        ],
      },
    ],
    ctaTitle: 'Need a website care plan?',
    ctaText: 'We help keep websites stable, current, measurable, and ready for the next campaign.',
    related: [
      '5-common-website-mistakes-costing-clients',
      'seo-local-seo-secret-getting-found-online',
      'why-webflow-best-platform-small-medium-businesses',
    ],
  },
  {
    slug: 'web-design-services-toronto-ontario',
    number: '06',
    title: 'Web Design Services in Toronto, Ontario: Your Complete Guide',
    shortTitle: 'Web design Toronto',
    excerpt:
      'A local guide for Toronto businesses choosing a web design partner, planning a stronger website, and competing in a crowded GTA market.',
    category: 'Local SEO',
    date: 'January 20, 2025',
    isoDate: '2025-01-20',
    readTime: '9 min read',
    featured: false,
    image: '/blog/blog-06-toronto.jpg',
    keywords: [
      'web design services Toronto',
      'website design company Toronto',
      'Toronto web design agency',
      'web design Toronto Ontario',
      'custom website design Toronto',
    ],
    takeaways: [
      'Toronto businesses need websites that communicate trust quickly in a competitive market.',
      'Local SEO, mobile UX, and service clarity matter for GTA search visibility.',
      'The right partner should understand strategy, design, development, launch, and measurement.',
    ],
    sections: [
      {
        id: 'local',
        heading: 'Why Local Web Design Matters in Toronto',
        paragraphs: [
          'Toronto is a competitive market. Prospects compare service providers quickly, often from mobile devices, and they expect professional websites that make the business easy to evaluate.',
          'A strong Toronto web design strategy should combine clear positioning, local search visibility, responsive design, fast performance, and proof that speaks to the market you serve.',
        ],
      },
      {
        id: 'challenges',
        heading: 'Common Website Challenges for Toronto Businesses',
        paragraphs: [
          'Many local businesses have websites that look acceptable but fail to explain the offer, rank for useful searches, or convert qualified traffic into enquiries.',
          'The most common issues are generic messaging, weak mobile experiences, thin service pages, slow performance, and missing conversion tracking.',
        ],
        bullets: [
          'Crowded local search results',
          'High expectations for mobile usability',
          'Service pages that do not match buyer intent',
          'Weak proof and unclear calls to action',
        ],
      },
      {
        id: 'process',
        heading: 'What a Strong Web Design Process Should Include',
        paragraphs: [
          'A professional website project should start with strategy before design. That means defining the audience, services, positioning, sitemap, SEO opportunities, content needs, and conversion goals.',
          'Design and development should then turn that strategy into a responsive, fast, accessible website that your team can maintain after launch.',
        ],
      },
      {
        id: 'seo',
        heading: 'Local SEO Benefits of Professional Web Design',
        paragraphs: [
          'A well-built website gives search engines clearer local and service signals. Page titles, headings, internal links, schema, content depth, and performance all support visibility.',
          'For Toronto businesses, local pages and service pages should be useful enough to stand on their own, not thin copies of generic content.',
        ],
      },
      {
        id: 'choose',
        heading: 'How to Choose the Right Web Design Company',
        paragraphs: [
          'Look for a partner that can explain the strategy behind the design. A polished portfolio matters, but so does the ability to connect page structure, SEO, copywriting, development, analytics, and conversion.',
          'The best web design partner will ask about business goals before talking about visuals.',
        ],
      },
    ],
    ctaTitle: 'Planning a Toronto website project?',
    ctaText: 'We build custom, conversion-focused websites for service businesses that need clarity, trust, and measurable growth.',
    related: [
      'seo-local-seo-secret-getting-found-online',
      'real-roi-great-website-investment-not-expense',
      '5-common-website-mistakes-costing-clients',
    ],
  },
];

export const blogSlugs = BLOG_POSTS.map((post) => post.slug);

export function getBlogPost(slug: BlogSlug) {
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    throw new Error(`Unknown blog post: ${slug}`);
  }

  return post;
}

export function getRelatedBlogPosts(post: BlogPost) {
  return post.related.map((slug) => getBlogPost(slug));
}

export function getBlogPostMetadata(slug: BlogSlug): Metadata {
  const post = getBlogPost(slug);
  const url = `https://webloftstudio.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Webloft Studio`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Webloft Studio',
      type: 'article',
      publishedTime: post.isoDate,
      authors: ['Webloft Studio'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

import CaseStudy from "@/components/CaseStudy";

export const metadata = {
  title: "Case Study - Amigo Contracting Services | Webloft Studio",
  description: "See how we helped Amigo Contracting Services increase leads by 180% with a professional construction website and lead capture optimization.",
};

export default function AmigoCaseStudyPage() {
  const caseStudyData = {
    projectTitle: "Amigo Contracting Services Website",
    clientName: "Marcus Johnson",
    clientTitle: "CEO",
    clientCompany: "Amigo Contracting Services",
    projectOverview: "Amigo Contracting Services needed a professional website to showcase their construction services and generate more qualified leads. The existing site was outdated and not optimized for lead generation. We created a modern, mobile-responsive website with strategic lead capture forms and service showcases that significantly increased their online presence and lead generation.",
    challenges: [
      "Outdated website design that didn't reflect professional construction services",
      "Poor mobile experience with 60% of traffic coming from mobile devices",
      "No lead capture optimization or conversion-focused design",
      "Lack of clear service descriptions and project showcases",
      "Poor search engine visibility for local construction services",
      "No online contact forms or lead generation tools"
    ],
    solutions: [
      "Designed a professional, trustworthy interface that reflects construction industry standards",
      "Implemented mobile-first responsive design optimized for all devices",
      "Created strategic lead capture forms with clear call-to-action buttons",
      "Built comprehensive service pages with detailed descriptions and pricing",
      "Optimized for local SEO with Toronto construction keywords and location targeting",
      "Added project gallery with before/after photos to showcase quality work",
      "Integrated contact forms and phone click-to-call functionality"
    ],
    results: [
      {
        metric: "Lead Generation",
        value: "+180%",
        description: "Increase in qualified leads within 4 months of launch"
      },
      {
        metric: "Mobile Traffic",
        value: "75%",
        description: "Of total website traffic now comes from mobile devices"
      },
      {
        metric: "Page Load Speed",
        value: "1.8s",
        description: "Average page load time (down from 6.2s previously)"
      },
      {
        metric: "Search Rankings",
        value: "#2",
        description: "Position for 'construction services Toronto' keyword"
      },
      {
        metric: "Contact Form Submissions",
        value: "+250%",
        description: "Increase in contact form submissions and inquiries"
      },
      {
        metric: "User Engagement",
        value: "+120%",
        description: "Increase in average session duration and pages per visit"
      }
    ],
    testimonial: {
      quote: "Working with Webloft Studio transformed our online presence. Within 3 months, we saw a 150% increase in qualified leads. Their attention to detail and understanding of business needs is exceptional. The new website perfectly represents our professional services and has become our best marketing tool.",
      author: "Marcus Johnson",
      title: "CEO",
      company: "Amigo Contracting Services",
      avatar: "/avatar1.jpg"
    },
    technologies: [
      "Webflow",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Google Analytics",
      "Local SEO Optimization",
      "Lead Capture Forms"
    ],
    projectDuration: "3 weeks",
    projectImages: [
      {
        src: "/projects/gallery/amigo-contracting-1-min.png",
        alt: "Amigo Contracting Services homepage design"
      },
      {
        src: "/projects/gallery/amigo-contracting-2-min.png",
        alt: "Mobile responsive construction website"
      },
      {
        src: "/projects/gallery/amigo-contracting-3-min.png",
        alt: "Service pages and project gallery"
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    featuredImage: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
    category: "Construction",
    date: "December 2024"
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudy {...caseStudyData} />
        </div>
      </div>
    </div>
  );
}

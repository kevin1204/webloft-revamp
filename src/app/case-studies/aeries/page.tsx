import CaseStudy from "@/components/CaseStudy";

export const metadata = {
  title: "Case Study - Aeries Business Website | Webloft Studio",
  description: "See how we helped Aeries improve user experience and engagement with a modern, responsive business website built with Webflow.",
};

export default function AeriesCaseStudyPage() {
  const caseStudyData = {
    projectTitle: "Aeries Business Website",
    clientName: "David Chen",
    clientTitle: "Owner",
    clientCompany: "Aeries",
    projectOverview: "Aeries needed a modern, professional website to establish their online presence and showcase their business services. The existing site lacked visual appeal and user engagement. We created a clean, responsive website with smooth animations and optimized user experience that significantly improved their brand presence and user engagement.",
    challenges: [
      "Outdated website design that didn't reflect modern business standards",
      "Poor user experience with confusing navigation and slow loading times",
      "Lack of visual appeal and professional branding elements",
      "No mobile optimization for growing mobile traffic",
      "Limited content organization and information architecture",
      "No clear call-to-action or conversion optimization"
    ],
    solutions: [
      "Designed a clean, modern interface that reflects professional business standards",
      "Implemented smooth animations and micro-interactions for better user engagement",
      "Created intuitive navigation and information architecture",
      "Built mobile-first responsive design optimized for all devices",
      "Optimized page loading speeds and performance metrics",
      "Added clear call-to-action buttons and conversion-focused design elements",
      "Integrated professional photography and visual content"
    ],
    results: [
      {
        metric: "User Experience",
        value: "Improved",
        description: "Significant improvement in user experience and site usability"
      },
      {
        metric: "Page Load Speed",
        value: "2.3s",
        description: "Average page load time (down from 5.1s previously)"
      },
      {
        metric: "Mobile Traffic",
        value: "70%",
        description: "Of total website traffic now comes from mobile devices"
      },
      {
        metric: "User Engagement",
        value: "+150%",
        description: "Increase in average session duration and pages per visit"
      },
      {
        metric: "Bounce Rate",
        value: "-40%",
        description: "Reduction in bounce rate with improved user experience"
      },
      {
        metric: "Brand Presence",
        value: "Enhanced",
        description: "Significantly improved professional brand presence online"
      }
    ],
    testimonial: {
      quote: "From strategy to execution, everything was seamless. They understood our business needs and built a website that actually represents our brand professionally. The user experience is incredible and our customers love the new design.",
      author: "David Chen",
      title: "Owner",
      company: "Aeries",
      avatar: "/avatar3.jpg"
    },
    technologies: [
      "Webflow",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Responsive Design",
      "Animation Libraries",
      "Performance Optimization"
    ],
    projectDuration: "2 weeks",
    projectImages: [
      {
        src: "/PROJECTS/gallery/aeries-1.webp",
        alt: "Aeries business homepage design"
      },
      {
        src: "/PROJECTS/gallery/aeries-2.webp",
        alt: "Mobile responsive business website"
      },
      {
        src: "/PROJECTS/gallery/aeries-3.webp",
        alt: "Smooth animations and interactions"
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    featuredImage: "/PROJECTS/aeries.webp",
    category: "Business",
    date: "October 2024"
  };

  return (
    <CaseStudy {...caseStudyData} />
  );
}

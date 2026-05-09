import CaseStudy from "@/components/CaseStudy";

export const metadata = {
  title: "Case Study - Flowga Yoga Studio | Webloft Studio",
  description: "See how we helped Flowga Yoga Studio increase online bookings by 300% with a complete website redesign and mobile optimization.",
};

export default function FlowgaCaseStudyPage() {
  const caseStudyData = {
    projectTitle: "Flowga Yoga Studio Website Redesign",
    clientName: "Sarah Mitchell",
    clientTitle: "Founder",
    clientCompany: "Flowga Yoga Studio",
    projectOverview: "Flowga Yoga Studio needed a complete website transformation to better showcase their yoga and wellness services. The existing site was outdated, not mobile-friendly, and wasn't converting visitors into customers. We created a modern, responsive website that reflects their brand values and drives bookings with a seamless user experience.",
    challenges: [
      "Outdated design that didn't reflect the modern wellness brand identity",
      "Poor mobile experience with 70% of traffic coming from mobile devices",
      "Low conversion rate with only 2% of visitors booking classes",
      "No online booking system integration for easy class scheduling",
      "Poor search engine visibility for local yoga classes in Toronto",
      "Lack of clear pricing and class information for potential students"
    ],
    solutions: [
      "Designed a modern, calming interface that reflects wellness values and brand identity",
      "Implemented mobile-first responsive design optimized for all devices",
      "Created an intuitive online booking system with real-time class availability",
      "Optimized for local SEO with Toronto-specific keywords and location targeting",
      "Added customer testimonials and detailed class descriptions to build trust",
      "Integrated seamless payment processing and scheduling systems",
      "Implemented clear pricing structure and class schedules for easy navigation"
    ],
    results: [
      {
        metric: "Online Bookings",
        value: "+300%",
        description: "Increase in online class bookings within 3 months of launch"
      },
      {
        metric: "Mobile Traffic",
        value: "85%",
        description: "Of total website traffic now comes from mobile devices"
      },
      {
        metric: "Page Load Speed",
        value: "2.1s",
        description: "Average page load time (down from 8.3s previously)"
      },
      {
        metric: "Search Rankings",
        value: "#1",
        description: "Position for 'yoga classes Toronto' keyword in local search"
      },
      {
        metric: "User Engagement",
        value: "+180%",
        description: "Increase in average session duration and pages per visit"
      },
      {
        metric: "Lead Generation",
        value: "+250%",
        description: "Increase in qualified leads and class inquiries"
      }
    ],
    testimonial: {
      quote: "The team at Webloft Studio didn't just build us a website—they built us a lead generation machine. Our booking rate increased by 300% and we finally have a site that represents our brand perfectly. The mobile experience is incredible and our students love how easy it is to book classes.",
      author: "Sarah Mitchell",
      title: "Founder",
      company: "Flowga Yoga Studio",
      avatar: "/avatar2.jpg"
    },
    technologies: [
      "Webflow",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Google Analytics",
      "Stripe Integration",
      "Zapier Automation",
      "Local SEO Optimization"
    ],
    projectDuration: "4 weeks",
    projectImages: [
      {
        src: "/projects/gallery/flowga-1-min.png",
        alt: "Flowga Yoga Studio homepage design"
      },
      {
        src: "/projects/gallery/flowga-2-min.png",
        alt: "Mobile responsive design for yoga classes"
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    featuredImage: "/PROJECTS/FLOWGA.png",
    category: "Wellness & Fitness",
    date: "November 2024"
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

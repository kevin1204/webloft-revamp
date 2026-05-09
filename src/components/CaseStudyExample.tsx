import CaseStudy from "./CaseStudy";

// Example usage of the CaseStudy component
export default function CaseStudyExample() {
  const caseStudyData = {
    projectTitle: "E-commerce Platform Redesign",
    clientName: "Sarah Mitchell",
    clientTitle: "Founder",
    clientCompany: "Bloom Wellness",
    projectOverview: "Bloom Wellness needed a complete website redesign to better showcase their yoga and wellness services. The existing site was outdated, not mobile-friendly, and wasn't converting visitors into customers. We created a modern, responsive website that reflects their brand values and drives bookings.",
    challenges: [
      "Outdated design that didn't reflect the modern wellness brand",
      "Poor mobile experience with 70% of traffic coming from mobile devices",
      "Low conversion rate with only 2% of visitors booking classes",
      "No online booking system integration",
      "Poor search engine visibility for local yoga classes"
    ],
    solutions: [
      "Designed a modern, calming interface that reflects wellness values",
      "Implemented mobile-first responsive design for all devices",
      "Created an intuitive online booking system with real-time availability",
      "Optimized for local SEO with Toronto-specific keywords",
      "Added customer testimonials and class descriptions to build trust",
      "Integrated with existing payment and scheduling systems"
    ],
    results: [
      {
        metric: "Online Bookings",
        value: "+300%",
        description: "Increase in online class bookings within 3 months"
      },
      {
        metric: "Mobile Traffic",
        value: "85%",
        description: "Of total website traffic now comes from mobile devices"
      },
      {
        metric: "Page Load Speed",
        value: "2.1s",
        description: "Average page load time (down from 8.3s)"
      },
      {
        metric: "Search Rankings",
        value: "#1",
        description: "Position for 'yoga classes Toronto' keyword"
      }
    ],
    testimonial: {
      quote: "The team at Webloft Studio didn't just build us a website—they built us a lead generation machine. Our booking rate increased by 200% and we finally have a site that represents our brand perfectly.",
      author: "Sarah Mitchell",
      title: "Founder",
      company: "Bloom Wellness",
      avatar: "/avatar2.jpg"
    },
    technologies: [
      "Webflow",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Google Analytics",
      "Stripe Integration",
      "Zapier Automation"
    ],
    projectDuration: "4 weeks",
    projectImages: [
      {
        src: "/PROJECTS/FLOWGA.png",
        alt: "Bloom Wellness homepage design",
        caption: "Clean, modern homepage design with clear call-to-action"
      },
      {
        src: "/PROJECTS/FLOWGA.png",
        alt: "Mobile responsive design",
        caption: "Perfect mobile experience for on-the-go bookings"
      },
      {
        src: "/PROJECTS/FLOWGA.png",
        alt: "Online booking system",
        caption: "Intuitive booking system with real-time availability"
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    featuredImage: "/PROJECTS/FLOWGA.png",
    category: "E-commerce",
    date: "November 2024"
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CaseStudy {...caseStudyData} />
      </div>
    </div>
  );
}

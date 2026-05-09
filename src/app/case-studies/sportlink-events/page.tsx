import CaseStudy from "@/components/CaseStudy";

export const metadata = {
  title: "Case Study - Sportlink Events Platform | Webloft Studio",
  description: "See how we helped Sportlink Events manage 500+ participants with a comprehensive event management platform and registration system.",
};

export default function SportlinkCaseStudyPage() {
  const caseStudyData = {
    projectTitle: "Sportlink Events Management Platform",
    clientName: "Jennifer Martinez",
    clientTitle: "Event Director",
    clientCompany: "Sportlink Events",
    projectOverview: "Sportlink Events needed a comprehensive event management platform to handle large-scale sporting events and streamline the registration process. The existing system was manual and couldn't handle the growing number of participants. We created a robust platform with registration system, participant management, and automated processes that successfully managed over 500 participants.",
    challenges: [
      "Manual registration process that couldn't scale with growing participant numbers",
      "No centralized system for managing participant information and payments",
      "Poor user experience for event registration and information access",
      "Lack of automated communication and updates for participants",
      "No real-time tracking of registrations and event capacity",
      "Difficulty managing multiple events simultaneously"
    ],
    solutions: [
      "Built a comprehensive registration system with secure payment processing",
      "Created participant management dashboard with real-time data tracking",
      "Implemented automated email communications and event updates",
      "Designed mobile-responsive interface for easy registration on any device",
      "Added event capacity management and waitlist functionality",
      "Integrated with existing payment systems and database infrastructure",
      "Created admin dashboard for event management and analytics"
    ],
    results: [
      {
        metric: "Participants Managed",
        value: "500+",
        description: "Successfully managed over 500 participants across multiple events"
      },
      {
        metric: "Registration Efficiency",
        value: "+400%",
        description: "Increase in registration processing speed and efficiency"
      },
      {
        metric: "User Satisfaction",
        value: "95%",
        description: "Participant satisfaction rate with the new registration system"
      },
      {
        metric: "Admin Productivity",
        value: "+300%",
        description: "Increase in administrative efficiency and time savings"
      },
      {
        metric: "Payment Processing",
        value: "100%",
        description: "Secure payment processing with zero failed transactions"
      },
      {
        metric: "Mobile Usage",
        value: "80%",
        description: "Of registrations completed on mobile devices"
      }
    ],
    testimonial: {
      quote: "The Sportlink Events platform has revolutionized how we manage our sporting events. We can now handle 500+ participants seamlessly, and the registration process is so smooth that our participants love it. The admin dashboard gives us complete control and visibility over every aspect of our events.",
      author: "Jennifer Martinez",
      title: "Event Director",
      company: "Sportlink Events",
      avatar: "/avatar4.jpg"
    },
    technologies: [
      "Webflow",
      "JavaScript",
      "Database Integration",
      "Payment Processing",
      "Email Automation",
      "Mobile Optimization",
      "Admin Dashboard"
    ],
    projectDuration: "6 weeks",
    projectImages: [
      {
        src: "/projects/gallery/sportlink1-min.png",
        alt: "Sportlink Events registration platform"
      },
      {
        src: "/projects/gallery/sportlink2-min.png",
        alt: "Mobile-responsive event management"
      },
      {
        src: "/projects/gallery/sportlink3-min.png",
        alt: "Admin dashboard and participant management"
      },
      {
        src: "/projects/gallery/sportlink4-min.png",
        alt: "Event details and participant information"
      },
      {
        src: "/projects/gallery/sportlink5-min.png",
        alt: "Payment processing and confirmation system"
      },
      {
        src: "/projects/gallery/sportlink6-min.png",
        alt: "Mobile event registration interface"
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    featuredImage: "/PROJECTS/SPORTLINK.png",
    category: "Events & Management",
    date: "September 2024"
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

import CaseStudy from "@/components/CaseStudy";

export const metadata = {
  title: "Case Study - Lila Hart Portfolio Website | Webloft Studio",
  description: "See how we helped Lila Hart enhance her brand presence with an elegant portfolio website featuring smooth animations and optimized performance.",
};

export default function LilaHartCaseStudyPage() {
  const caseStudyData = {
    projectTitle: "Lila Hart Portfolio Website",
    clientName: "Lila Hart",
    clientTitle: "Creative Professional",
    clientCompany: "Lila Hart Creative",
    projectOverview: "Lila Hart needed a professional portfolio website to showcase her creative work and services. The existing site lacked visual appeal and didn't effectively represent her creative brand. We created an elegant, animated portfolio website with smooth interactions and optimized performance that significantly enhanced her brand presence and attracted new clients.",
    challenges: [
      "Outdated portfolio design that didn't showcase creative work effectively",
      "Poor visual presentation of creative projects and services",
      "Lack of smooth animations and engaging user interactions",
      "No mobile optimization for growing mobile traffic",
      "Slow loading times affecting user experience and SEO",
      "Limited portfolio organization and project categorization"
    ],
    solutions: [
      "Designed an elegant, visually stunning interface that reflects creative excellence",
      "Implemented smooth animations and micro-interactions for engaging user experience",
      "Created comprehensive portfolio gallery with project showcases and case studies",
      "Built mobile-first responsive design optimized for all devices",
      "Optimized performance with fast loading times and smooth animations",
      "Added professional photography and visual content to enhance brand appeal",
      "Implemented clear service descriptions and contact forms for client inquiries"
    ],
    results: [
      {
        metric: "Brand Presence",
        value: "Enhanced",
        description: "Significantly improved professional brand presence and visual appeal"
      },
      {
        metric: "Page Load Speed",
        value: "1.9s",
        description: "Average page load time with smooth animations (down from 4.8s)"
      },
      {
        metric: "User Engagement",
        value: "+200%",
        description: "Increase in average session duration and portfolio interactions"
      },
      {
        metric: "Client Inquiries",
        value: "+150%",
        description: "Increase in client inquiries and project requests"
      },
      {
        metric: "Mobile Performance",
        value: "95%",
        description: "Mobile performance score with smooth animations on all devices"
      },
      {
        metric: "Portfolio Views",
        value: "+180%",
        description: "Increase in portfolio project views and engagement"
      }
    ],
    testimonial: {
      quote: "The new portfolio website has completely transformed how I present my work to potential clients. The animations are beautiful and the user experience is incredible. I've received so many more inquiries since the launch, and clients constantly compliment the professional presentation of my work.",
      author: "Lila Hart",
      title: "Creative Professional",
      company: "Lila Hart Creative",
      avatar: "/avatar5.jpg"
    },
    technologies: [
      "Webflow",
      "JavaScript",
      "CSS3 Animations",
      "HTML5",
      "Performance Optimization",
      "Portfolio Gallery",
      "Contact Forms"
    ],
    projectDuration: "3 weeks",
    projectImages: [
      {
        src: "/projects/gallery/lilahart3-min.png",
        alt: "Lila Hart portfolio homepage"
      },
      {
        src: "/projects/gallery/lilahart4-min.png",
        alt: "Portfolio gallery and project showcases"
      },
      {
        src: "/projects/gallery/lilahart5-min.png",
        alt: "Mobile-responsive creative portfolio"
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    featuredImage: "/PROJECTS/LILAHART.png",
    category: "Portfolio & Creative",
    date: "August 2024"
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

import { Metadata } from 'next';
import ProjectsPage from './ProjectsPage';

export const metadata: Metadata = {
  title: "Web Design Portfolio Toronto | Our Projects | Webloft Studio",
  description: "Explore our successful web design portfolio in Toronto. See how we've helped businesses grow with custom websites, Webflow development, and digital solutions.",
  alternates: {
    canonical: 'https://webloftstudio.com/projects'
  }
};

export default function Projects() {
  return <ProjectsPage />;
}
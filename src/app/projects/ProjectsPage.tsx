'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Amigo Contracting Services",
    description: "A professional construction services website with lead capture optimization and mobile-first design. Features include service showcases, project galleries, and easy contact forms.",
    image: "/PROJECTS/AMIGO CONTRACTING SERVICES.png",
    category: "Construction",
    technologies: ["Webflow", "CMS", "SEO"],
    results: "+180% Lead Increase",
    link: "https://amigocontracting.com/",
    caseStudyLink: "/case-studies/amigo-contracting-services",
    featured: true
  },
  {
    id: 2,
    title: "Aeries",
    description: "A modern business website built with Webflow, featuring clean design, responsive layout, and optimized user experience for better engagement and conversions.",
    image: "/PROJECTS/AERIES.png",
    category: "Business",
    technologies: ["Webflow", "Responsive Design"],
    results: "Improved User Experience",
    link: "https://wfm5-level-3.webflow.io/",
    caseStudyLink: "/case-studies/aeries",
    featured: false
  },
  {
    id: 3,
    title: "Flowga Yoga Studio",
    description: "A wellness-focused website with online booking system and class management. Designed to help yoga studios manage their classes and attract new students.",
    image: "/PROJECTS/FLOWGA.png",
    category: "Wellness",
    technologies: ["Webflow", "Booking System", "CMS"],
    results: "+300% Online Bookings",
    link: "https://flowgav2.webflow.io/",
    caseStudyLink: "/case-studies/flowga-yoga-studio",
    featured: true
  },
  {
    id: 4,
    title: "Sportlink Events",
    description: "An event management platform with registration system and participant management. Built to handle large-scale sporting events and streamline the registration process.",
    image: "/PROJECTS/SPORTLINK.png",
    category: "Events",
    technologies: ["Webflow", "Registration System", "Database"],
    results: "500+ Participants Managed",
    link: "https://wfm5-level-1-course-build-725271.design.webflow.com/",
    caseStudyLink: "/case-studies/sportlink-events",
    featured: false
  },
  {
    id: 5,
    title: "Lila Hart",
    description: "A professional portfolio website showcasing creative work and services. Features elegant design, smooth animations, and optimized performance for creative professionals.",
    image: "/PROJECTS/LILAHART.png",
    category: "Portfolio",
    technologies: ["Webflow", "Animations", "Portfolio"],
    results: "Enhanced Brand Presence",
    link: "https://wfm5-level-1-course-build-725271.webflow.io/",
    caseStudyLink: "/case-studies/lila-hart",
    featured: false
  }
];

const categories = ["All", "Construction", "Business", "Wellness", "Events", "Portfolio"];

// Simple intersection observer hook - triggers only once
const useIntersectionObserver = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isVisible]);

  return [ref, isVisible] as const;
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allProjectsRef, allProjectsVisible] = useIntersectionObserver(0.2);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses like yours 
              achieve their online goals and drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-700 dark:hover:text-green-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6 animate-fade-in-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up stagger-1">
              Featured 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600"> Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
              Our most successful projects that delivered exceptional results for our clients. Each project showcases our expertise in creating high-converting websites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 featured-projects-grid">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={project.id} className="group relative featured-project-card">
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                
                {/* Main Card */}
                <div 
                  className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-102 overflow-hidden" 
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.8s ease-out forwards',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    willChange: 'transform, opacity'
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-3xl h-64 project-image-container" style={{contain: 'layout'}}>
                    <Image
                      src={project.image}
                      alt={`${project.title} - Professional web design project by Webloft Studio showcasing ${project.category.toLowerCase()} website development and custom design solutions`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 project-card-image"
                      priority={project.featured}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      style={{willChange: 'transform'}}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* View Project Button */}
                    <div className="absolute bottom-6 right-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 shadow-lg flex items-center gap-2"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Results */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                          {project.results}
                        </span>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">
                        Featured Project
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <Link 
                        href={project.caseStudyLink}
                        className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                      >
                        View Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section ref={allProjectsRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Complete Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              All 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our complete portfolio of successful web development projects across various industries and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`group relative transition-all duration-700 ${allProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: allProjectsVisible ? `${index * 0.1}s` : '0ms'}}>
                {/* Card Background Glow */}
                <div className={`absolute inset-0 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700 ${
                  project.category === 'Construction' ? 'bg-gradient-to-r from-green-400 to-emerald-600' :
                  project.category === 'Business' ? 'bg-gradient-to-r from-blue-400 to-indigo-600' :
                  project.category === 'Wellness' ? 'bg-gradient-to-r from-purple-400 to-pink-600' :
                  project.category === 'Events' ? 'bg-gradient-to-r from-orange-400 to-red-600' :
                  'bg-gradient-to-r from-gray-400 to-gray-600'
                }`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-102 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-3xl h-48 project-image-container">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Professional web design project by Webloft Studio showcasing ${project.category.toLowerCase()} website development and custom design solutions`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 project-card-image"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                        project.category === 'Construction' ? 'bg-green-500 text-white' :
                        project.category === 'Business' ? 'bg-blue-500 text-white' :
                        project.category === 'Wellness' ? 'bg-purple-500 text-white' :
                        project.category === 'Events' ? 'bg-orange-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* View Project Button */}
                    <div className="absolute bottom-4 right-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg flex items-center gap-2 text-sm"
                      >
                        View
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Results */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          project.category === 'Construction' ? 'bg-green-500' :
                          project.category === 'Business' ? 'bg-blue-500' :
                          project.category === 'Wellness' ? 'bg-purple-500' :
                          project.category === 'Events' ? 'bg-orange-500' :
                          'bg-gray-500'
                        }`}></div>
                        <span className={`font-bold text-sm ${
                          project.category === 'Construction' ? 'text-green-600 dark:text-green-400' :
                          project.category === 'Business' ? 'text-blue-600 dark:text-blue-400' :
                          project.category === 'Wellness' ? 'text-purple-600 dark:text-purple-400' :
                          project.category === 'Events' ? 'text-orange-600 dark:text-orange-400' :
                          'text-gray-600 dark:text-gray-400'
                        }`}>
                          {project.results}
                        </span>
                      </div>
                      <div className="text-gray-400 dark:text-gray-500 text-xs">
                        {project.category}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 text-center flex items-center justify-center gap-1 text-sm"
                      >
                        View
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <Link 
                        href={project.caseStudyLink}
                        className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-center flex items-center justify-center gap-1 text-sm"
                      >
                        Case Study
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create a website that drives results for your business, 
            just like we did for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
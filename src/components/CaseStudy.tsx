"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CaseStudyProps {
  projectTitle: string;
  clientName: string;
  clientTitle?: string;
  clientCompany: string;
  projectOverview: string;
  challenges: string[];
  solutions: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar?: string;
  };
  technologies: string[];
  projectDuration: string;
  projectImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  featuredImage: string;
  category: string;
  date: string;
}

export default function CaseStudy({
  projectTitle,
  clientName,
  clientTitle,
  clientCompany,
  projectOverview,
  challenges,
  solutions,
  results,
  testimonial,
  technologies,
  projectDuration,
  projectImages,
  ctaText = "Start Your Project",
  ctaLink = "/contact",
  featuredImage,
  category,
  date,
}: CaseStudyProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (event.key) {
        case 'Escape':
          setIsLightboxOpen(false);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPreviousImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, lightboxImageIndex]);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const goToNextImage = () => {
    setLightboxImageIndex((prev) => 
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPreviousImage = () => {
    setLightboxImageIndex((prev) => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  return (
    <article className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={featuredImage}
            alt={`${projectTitle} - ${clientCompany} project`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {category}
            </span>
          </div>

          {/* Project Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {projectTitle}
            </h1>
            <div className="flex items-center text-white/90">
              <span className="font-semibold">{clientName}</span>
              {clientTitle && (
                <>
                  <span className="mx-2">•</span>
                  <span>{clientTitle}</span>
                </>
              )}
              <span className="mx-2">•</span>
              <span>{clientCompany}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-12">
        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {projectOverview}
          </p>
          
          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Project Duration</h3>
              <p className="text-gray-600 dark:text-gray-300">{projectDuration}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Completion Date</h3>
              <p className="text-gray-600 dark:text-gray-300">{date}</p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {projectImages.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Project Gallery
            </h2>
            
            {/* Main Image */}
            <div 
              className="relative aspect-video rounded-xl overflow-hidden mb-6 cursor-pointer group"
              onClick={() => openLightbox(selectedImage)}
            >
              <Image
                src={projectImages[selectedImage].src}
                alt={projectImages[selectedImage].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                priority={false}
              />
              {projectImages[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <p className="text-sm">{projectImages[selectedImage].caption}</p>
                </div>
              )}
              {/* Click to expand overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {projectImages.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                      openLightbox(index);
                    }}
                    className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 group ${
                      selectedImage === index
                        ? 'ring-2 ring-green-500 scale-105'
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      priority={false}
                    />
                    {/* Click to expand indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Challenges & Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Challenges */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Challenges Faced
            </h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{challenge}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Solutions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions Implemented
            </h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{solution}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Results & Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Results & Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Client Testimonial
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                    loading="lazy"
                    priority={false}
                  />
                ) : (
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results with a professional, high-performing website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaLink}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 text-center"
            >
              {ctaText}
            </Link>
            <Link
              href="/projects"
              className="bg-white dark:bg-gray-800 text-green-600 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-200 text-center"
            >
              View More Projects
            </Link>
          </div>
        </section>

        {/* Social Sharing */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Share this case study
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-green-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-green-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-green-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Modal Content */}
          <div 
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {projectImages.length > 1 && (
              <button
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {projectImages.length > 1 && (
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image Container with Close Button */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative max-w-full max-h-full">
                {/* Close Button positioned directly on the image */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-2 right-2 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <Image
                  src={projectImages[lightboxImageIndex].src}
                  alt={projectImages[lightboxImageIndex].alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  priority={true}
                />
              </div>
            </div>

            {/* Image Counter */}
            {projectImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                {lightboxImageIndex + 1} / {projectImages.length}
              </div>
            )}

            {/* Caption */}
            {projectImages[lightboxImageIndex].caption && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm max-w-md text-center">
                {projectImages[lightboxImageIndex].caption}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

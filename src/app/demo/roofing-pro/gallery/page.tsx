"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function RoofingProGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Residential Roof Installation",
      title: "Residential Installation",
      description: "Complete roof replacement with premium materials and expert installation"
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Commercial Roof Repair",
      title: "Commercial Repair",
      description: "Professional commercial roofing services for businesses"
    },
    {
      src: "https://images.unsplash.com/photo-1560790671-b76ca6097803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Metal Roof Installation",
      title: "Metal Roofing",
      description: "Durable metal roofing solutions for long-lasting protection"
    },
    {
      src: "https://images.unsplash.com/photo-1582719471313-ad779571171f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Flat Roof Installation",
      title: "Flat Roof System",
      description: "Modern flat roof systems for commercial and residential properties"
    },
    {
      src: "https://images.unsplash.com/photo-1560493676-04071c5f467f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Storm Damage Repair",
      title: "Storm Damage Repair",
      description: "Emergency storm damage repair and restoration services"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Gutter Installation",
      title: "Gutter System",
      description: "Complete gutter installation and maintenance services"
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Roof Inspection",
      title: "Professional Inspection",
      description: "Comprehensive roof inspection and assessment services"
    },
    {
      src: "https://images.unsplash.com/photo-1560790671-b76ca6097803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Roof Maintenance",
      title: "Maintenance Service",
      description: "Regular maintenance to extend your roof's lifespan"
    },
    {
      src: "https://images.unsplash.com/photo-1582719471313-ad779571171f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Roofing Team",
      title: "Expert Team",
      description: "Our skilled professionals at work on your roofing project"
    },
    {
      src: "https://images.unsplash.com/photo-1560493676-04071c5f467f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      alt: "Quality Materials",
      title: "Premium Materials",
      description: "Only the highest quality materials for every project"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          closeImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, nextImage, prevImage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && 
          !(event.target as Element).closest('nav') && 
          !(event.target as Element).closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/demo/roofing-pro" className="text-3xl font-bold text-gray-900">
                <span className="text-blue-600">Roofing</span>Pro
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link 
                  href="/demo/roofing-pro" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link 
                  href="/demo/roofing-pro/about" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link 
                  href="/demo/roofing-pro#services" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link 
                  href="/demo/roofing-pro#why-choose-us" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  Why Us
                </Link>
                <Link 
                  href="/demo/roofing-pro#projects" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  Projects
                </Link>
                <Link 
                  href="/demo/roofing-pro/gallery" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-blue-600 bg-blue-50 font-semibold"
                >
                  Gallery
                </Link>
                <Link 
                  href="/demo/roofing-pro#faq" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  FAQ
                </Link>
                <Link 
                  href="/demo/roofing-pro#contact" 
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center space-x-4">
              <a 
                href="tel:+1-555-ROOF-123" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: (555) ROOF-123
                </span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg" data-mobile-menu>
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link 
                href="/demo/roofing-pro" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/demo/roofing-pro/about" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/demo/roofing-pro#services" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/demo/roofing-pro#why-choose-us" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link 
                href="/demo/roofing-pro#projects" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/demo/roofing-pro/gallery" 
                className="block px-4 py-3 text-blue-600 bg-blue-50 font-semibold rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/demo/roofing-pro#faq" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/demo/roofing-pro#contact" 
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a 
                href="tel:+1-555-ROOF-123" 
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (555) ROOF-123
              </a>
              <a 
                href="/demo/roofing-pro#contact" 
                className="flex items-center justify-center w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Header */}
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed roofing projects and see the quality of our workmanship.
          </p>
        </div>
      </div>

      {/* Mobile-First Gallery Grid */}
      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-gray-900 rounded-full p-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                  <h3 className="text-white text-xs sm:text-sm font-semibold truncate">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo/roofing-pro#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Free Quote
            </Link>
            <Link 
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeImage();
            }
          }}
        >
          {/* Header */}
          <div className="flex justify-center items-center p-4 sm:p-6">
            <h2 className="text-white text-lg sm:text-xl font-semibold text-center">
              {galleryImages[selectedImage].title}
            </h2>
          </div>

          {/* Main image area */}
          <div className="flex-1 flex items-center justify-center p-4 relative">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close button in image area */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image description */}
          <div className="p-4 sm:p-6 text-center">
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
              {galleryImages[selectedImage].description}
            </p>
          </div>

          {/* Thumbnail strip */}
          <div className="p-4 sm:p-6">
            <div className="flex overflow-x-auto space-x-2 sm:space-x-3 pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === selectedImage 
                      ? 'ring-2 ring-blue-400 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Demo Notice */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-xl max-w-xs sm:max-w-xs z-50">
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <div className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">This is a demo template</span>
          </div>
          <div className="bg-white/20 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium">
            Built by Webloft Studio
          </div>
        </div>
        <p className="text-xs text-blue-100 mb-2 sm:mb-3">
          Like what you see? Get your own professional website!
        </p>
        <div className="space-y-1 sm:space-y-2">
          <Link 
            href="https://webloftstudio.com/contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-1.5 px-2 sm:py-2 sm:px-3 rounded text-xs text-center transition-colors duration-200"
          >
            Get Your Website →
          </Link>
          <Link 
            href="/template-based-websites" 
            className="block text-xs text-blue-100 hover:text-white underline hover:no-underline text-center transition-colors duration-200"
          >
            View all templates
          </Link>
        </div>
        <div className="mt-2 sm:mt-3 pt-1 sm:pt-2 border-t border-blue-500/30">
          <p className="text-xs text-blue-100 text-center">
            Built by <a 
              href="https://webloftstudio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-medium transition-colors duration-200"
            >
              Webloft Studio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

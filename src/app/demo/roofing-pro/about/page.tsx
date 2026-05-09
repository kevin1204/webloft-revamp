"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function RoofingProAbout() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-blue-600 bg-blue-50 font-semibold"
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
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
                className="block px-4 py-3 text-blue-600 bg-blue-50 font-semibold rounded-lg transition-colors duration-200"
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
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} id="hero">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-yellow-400">RoofingPro</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted roofing partner with over 25 years of excellence in residential and commercial roofing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible.story ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative group">
                Our Story
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 1998, RoofingPro began as a small family business with a simple mission: to provide exceptional roofing services that protect what matters most to our customers.
                </p>
                <p className="text-lg">
                  What started as a two-person operation has grown into one of the region's most trusted roofing contractors, serving thousands of satisfied customers across residential and commercial properties.
                </p>
                <p className="text-lg">
                  Our commitment to quality, integrity, and customer satisfaction has never wavered. Every project we undertake reflects our core values and our dedication to excellence.
                </p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 ${
              isVisible.story ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="RoofingPro team at work"
                  className="w-full h-96 object-cover rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Our Mission & Values
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional roofing solutions while maintaining the highest standards of professionalism and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
              isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We use only the finest materials and employ skilled craftsmen to ensure every project meets our exacting standards.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
              isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.
              </p>
            </div>

            <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
              isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, complete projects on schedule, and stand behind our work with comprehensive warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Meet Our Team
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional roofing solutions for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`text-center transform transition-all duration-700 ${
              isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="relative group mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Mike Johnson - Owner"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-blue-600 font-semibold mb-2">Owner & Lead Contractor</p>
              <p className="text-gray-600">
                25+ years of experience in residential and commercial roofing. Licensed and certified with a passion for quality craftsmanship.
              </p>
            </div>

            <div className={`text-center transform transition-all duration-700 ${
              isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="relative group mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Sarah Williams - Project Manager"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Williams</h3>
              <p className="text-blue-600 font-semibold mb-2">Project Manager</p>
              <p className="text-gray-600">
                Expert in project coordination and customer relations. Ensures every project runs smoothly from start to finish.
              </p>
            </div>

            <div className={`text-center transform transition-all duration-700 ${
              isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="relative group mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="David Chen - Master Roofer"
                  className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">David Chen</h3>
              <p className="text-blue-600 font-semibold mb-2">Master Roofer</p>
              <p className="text-gray-600">
                Specialized in complex roofing systems and emergency repairs. Known for attention to detail and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section id="certifications" className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible.certifications ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative group">
              Our Certifications & Accreditations
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Licensed, certified, and committed to the highest standards of roofing excellence.
            </p>
          </div>

          {/* Scrolling Certifications */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12">
              {/* First set of certifications */}
              <div className="flex space-x-12 flex-shrink-0">
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Licensed Contractor</h3>
                    <p className="text-xs text-gray-600">State License #12345</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Fully Insured</h3>
                    <p className="text-xs text-gray-600">General Liability</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">BBB A+ Rating</h3>
                    <p className="text-xs text-gray-600">Better Business Bureau</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">GAF Certified</h3>
                    <p className="text-xs text-gray-600">Master Elite Contractor</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">OSHA Certified</h3>
                    <p className="text-xs text-gray-600">Safety Standards</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">25+ Years</h3>
                    <p className="text-xs text-gray-600">Industry Experience</p>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 flex-shrink-0">
                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Licensed Contractor</h3>
                    <p className="text-xs text-gray-600">State License #12345</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">Fully Insured</h3>
                    <p className="text-xs text-gray-600">General Liability</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">BBB A+ Rating</h3>
                    <p className="text-xs text-gray-600">Better Business Bureau</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">GAF Certified</h3>
                    <p className="text-xs text-gray-600">Master Elite Contractor</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">OSHA Certified</h3>
                    <p className="text-xs text-gray-600">Safety Standards</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-lg shadow-md px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">25+ Years</h3>
                    <p className="text-xs text-gray-600">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center transform transition-all duration-700 ${
              isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="text-5xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-xl font-semibold mb-2">Years Experience</div>
              <div className="text-blue-100">Serving the community since 1998</div>
            </div>

            <div className={`text-center transform transition-all duration-700 ${
              isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="text-5xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-xl font-semibold mb-2">Projects Completed</div>
              <div className="text-blue-100">Residential and commercial</div>
            </div>

            <div className={`text-center transform transition-all duration-700 ${
              isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-xl font-semibold mb-2">Satisfaction Guaranteed</div>
              <div className="text-blue-100">Customer satisfaction promise</div>
            </div>

            <div className={`text-center transform transition-all duration-700 ${
              isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-xl font-semibold mb-2">Emergency Service</div>
              <div className="text-blue-100">Available when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and estimate. Let's discuss how we can help protect your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo/roofing-pro#contact"
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Free Quote
              </Link>
              <Link 
                href="tel:+1234567890"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7-7-7m7 7v10a1 1 0 01-1 1h-3" />
                </svg>
                <span className="text-xl font-bold">RoofingPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted roofing partner for over 25 years. Quality, reliability, and customer satisfaction guaranteed.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/demo/roofing-pro#services" className="hover:text-white transition-colors">Residential Roofing</Link></li>
                <li><Link href="/demo/roofing-pro#services" className="hover:text-white transition-colors">Commercial Roofing</Link></li>
                <li><Link href="/demo/roofing-pro#services" className="hover:text-white transition-colors">Roof Repairs</Link></li>
                <li><Link href="/demo/roofing-pro#services" className="hover:text-white transition-colors">Emergency Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/demo/roofing-pro/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/demo/roofing-pro#projects" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/demo/roofing-pro/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/demo/roofing-pro#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Main Street</p>
                <p>Your City, ST 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@roofingpro.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RoofingPro. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>

      {/* Demo Notice */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-xl max-w-xs sm:max-w-xs z-50">
        <div className="flex items-center mb-1 sm:mb-2">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs sm:text-sm font-medium">This is a demo template</span>
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

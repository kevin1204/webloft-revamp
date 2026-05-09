"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SmileProPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Root Canal Treatment",
      description: "Expert root canal therapy to save your natural teeth"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Cosmetic Dentist",
      description: "Transform your smile with our cosmetic procedures"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Emergency Dentistry",
      description: "24/7 emergency dental care when you need it"
    }
  ];

  const serviceCards = [
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=500&h=300&fit=crop",
      title: "Root Canal Treatment",
      description: "Our advanced root canal procedures use the latest technology to ensure minimal discomfort and maximum effectiveness."
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=300&fit=crop",
      title: "Cosmetic Dentist",
      description: "Transform your smile with our comprehensive cosmetic dentistry services including veneers, bonding, and smile makeovers."
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=300&fit=crop",
      title: "Dental Implants",
      description: "Replace missing teeth with our state-of-the-art dental implant solutions that look and feel like natural teeth."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "The team at Smile-Pro made my dental experience comfortable and stress-free. Highly recommend their services!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Professional, friendly, and excellent results. My smile has never looked better!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Outstanding care and attention to detail. The staff truly cares about your comfort and results.",
      rating: 5
    }
  ];

  const specialists = [
    {
      name: "Dr. Patricia Francis",
      position: "Dental Surgeon",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Lorna Austin",
      position: "Patient Coordinator",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Miguel Donaldson",
      position: "Dental Implant Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Tess Turner",
      position: "Chief Periodontist",
      image: "https://images.unsplash.com/photo-1594824388844-9e0b5a0b8a8a?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=400&h=250&fit=crop",
      date: "Dec 15, 2024",
      title: "How to manage a dental emergency when you're working overseas",
      excerpt: "Essential tips for handling dental emergencies while traveling abroad."
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop",
      date: "Dec 10, 2024",
      title: "Microabrasion in aesthetic management of dental fluorosis stains",
      excerpt: "Advanced techniques for treating dental fluorosis and improving smile aesthetics."
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=250&fit=crop",
      date: "Dec 5, 2024",
      title: "Patient awareness to improve sustainability of dentistry",
      excerpt: "How patient education contributes to sustainable dental practices."
    },
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=400&h=250&fit=crop",
      date: "Nov 28, 2024",
      title: "Bond strength of adhesive systems for orthodontic brackets",
      excerpt: "Research on improving orthodontic treatment outcomes through better adhesives."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-[#0C1A4A]">smile</span>
                <span className="bg-gradient-to-r from-teal-400 to-sky-500 bg-clip-text text-transparent">pro</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                Home
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                About
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                Blog
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">
                Contact
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="tel:+1234567890" 
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
              >
                Call Now
              </Link>
              <Link 
                href="#booking" 
                className="bg-gradient-to-r from-teal-400 to-sky-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200" data-mobile-menu>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="#blog" className="block px-3 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex space-x-2 pt-2">
                  <Link 
                    href="tel:+1234567890" 
                    className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-full font-semibold text-center hover:bg-gray-200 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Call Now
                  </Link>
                  <Link 
                    href="#booking" 
                    className="flex-1 bg-gradient-to-r from-teal-400 to-sky-500 text-white px-3 py-2 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50 to-white">
        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-36 rounded-lg shadow-lg overflow-hidden animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=225&fit=crop"
              alt="Dentist"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-32 right-16 w-44 h-32 rounded-lg shadow-lg overflow-hidden animate-float-slow-delay">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=225&fit=crop"
              alt="Dental equipment"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute bottom-40 left-20 w-40 h-30 rounded-lg shadow-lg overflow-hidden animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=225&fit=crop"
              alt="Happy patient"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-60 right-32 w-42 h-32 rounded-lg shadow-lg overflow-hidden animate-float-slow-delay">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=225&fit=crop"
              alt="Dental X-ray"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute bottom-60 right-10 w-38 h-28 rounded-lg shadow-lg overflow-hidden animate-float-slow">
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=225&fit=crop"
              alt="Dental chair"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute top-80 left-1/3 w-44 h-32 rounded-lg shadow-lg overflow-hidden animate-float-slow-delay">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=300&h=225&fit=crop"
              alt="Dental tools"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0C1A4A] mb-6 leading-tight">
            Quality dental services
          </h1>
          <p className="text-xl md:text-2xl text-[#5B5B5B] mb-12 max-w-3xl mx-auto leading-relaxed">
            We use only the best quality materials on the market to provide the best products to our patients.
          </p>
          <Link 
            href="#services"
            className="inline-block bg-gradient-to-r from-teal-400 to-sky-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Our Services
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#00C28F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Service Icons Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                data-animate
                id={`service-icon-${index}`}
              >
                <div className={`w-20 h-20 mx-auto mb-4 flex items-center justify-center text-blue-600 group-hover:text-teal-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ${
                  isVisible[`service-icon-${index}`] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#0C1A4A] group-hover:text-[#00C28F] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`order-2 lg:order-1 ${
                isVisible.welcome ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'
              }`}
              data-animate
              id="welcome"
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop"
                alt="Dentist"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div 
              className={`order-1 lg:order-2 ${
                isVisible.welcome ? 'animate-fade-in-right' : 'opacity-0 -translate-x-8'
              }`}
              data-animate
              id="welcome-text"
            >
              <span className="text-[#00C28F] font-semibold text-sm uppercase tracking-wider">Welcome</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A4A] mt-4 mb-6">
                Leave your worries at the door and enjoy a healthier, more precise smile.
              </h2>
              <p className="text-lg text-[#5B5B5B] mb-8 leading-relaxed">
                At Smile-Pro, we understand that visiting the dentist can be anxiety-inducing. That's why we've created a warm, welcoming environment with state-of-the-art technology and a compassionate team dedicated to making your dental experience as comfortable as possible.
              </p>
              <Link 
                href="#about"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00C28F] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A4A] mt-4">
              We are offering all kinds of dental treatments.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {serviceCards.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  isVisible[`service-card-${index}`] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                data-animate
                id={`service-card-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0C1A4A] mb-3 group-hover:text-[#00C28F] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#5B5B5B] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="#services"
              className="inline-block bg-gradient-to-r from-teal-400 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Book Now CTA Section */}
      <section id="booking" className="py-20 bg-[#0C1A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`${
                isVisible.booking ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'
              }`}
              data-animate
              id="booking"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We're welcoming new patients and can't wait to meet you.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Schedule your appointment today and experience the difference that quality dental care can make in your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button className="bg-gradient-to-r from-teal-400 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Send
                </button>
              </div>
            </div>
            <div 
              className={`${
                isVisible.booking ? 'animate-fade-in-right' : 'opacity-0 -translate-x-8'
              }`}
              data-animate
              id="booking-image"
            >
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop"
                alt="Dentist consultation"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00C28F] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A4A] mt-4">
              Exceptionally high standards of dentistry.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible[`testimonial-${index}`] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                data-animate
                id={`testimonial-${index}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#5B5B5B] mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#0C1A4A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#5B5B5B]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="#testimonials"
              className="inline-block bg-gradient-to-r from-teal-400 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`${
                isVisible.whyChooseUs ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'
              }`}
              data-animate
              id="whyChooseUs"
            >
              <span className="text-[#00C28F] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A4A] mt-4 mb-6">
                Why choose Smile-Pro clinic for all your dental treatments?
              </h2>
              <p className="text-lg text-[#5B5B5B] mb-8 leading-relaxed">
                We combine years of experience with cutting-edge technology to deliver exceptional dental care that exceeds your expectations.
              </p>
              <div className="space-y-4">
                {[
                  "Top quality dental team",
                  "State-of-the-art dental services",
                  "Discount on all dental treatments",
                  "Enrollment is quick and easy"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#5B5B5B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className={`relative ${
                isVisible.whyChooseUs ? 'animate-fade-in-right' : 'opacity-0 -translate-x-8'
              }`}
              data-animate
              id="whyChooseUs-image"
            >
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddceeee3?w=600&h=400&fit=crop"
                alt="Dentist working"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center text-[#0C1A4A]">
                  <span className="text-2xl mr-2">📞</span>
                  <div>
                    <p className="font-semibold">Call Today</p>
                    <p className="text-sm">1-800-123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Specialists */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00C28F] font-semibold text-sm uppercase tracking-wider">Our Staff</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A4A] mt-4">
              Meet our specialists.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((specialist, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center ${
                  isVisible[`specialist-${index}`] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                data-animate
                id={`specialist-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={specialist.image}
                  alt={specialist.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-[#0C1A4A] mb-2">{specialist.name}</h3>
                <p className="text-[#5B5B5B]">{specialist.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Plan CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0C1A4A] to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`${
                isVisible.discount ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'
              }`}
              data-animate
              id="discount"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Save up to 50% on all services!
              </h2>
              <span className="text-xl text-cyan-200 mb-6 block">Dental Discount Plan</span>
              <p className="text-lg mb-8 leading-relaxed">
                Join our exclusive discount plan and enjoy significant savings on all dental treatments. 
                Perfect for families and individuals who want quality dental care at an affordable price.
              </p>
              <Link 
                href="#booking"
                className="inline-block bg-gradient-to-r from-teal-400 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
            <div 
              className={`${
                isVisible.discount ? 'animate-fade-in-right' : 'opacity-0 -translate-x-8'
              }`}
              data-animate
              id="discount-image"
            >
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop"
                alt="Happy patient"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#00C28F] font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1A4A] mt-4">
              News & Articles.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group ${
                  isVisible[`blog-${index}`] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                data-animate
                id={`blog-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#00C28F] font-semibold">{post.date}</span>
                  <h3 className="text-lg font-bold text-[#0C1A4A] mt-2 mb-3 group-hover:text-[#00C28F] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[#5B5B5B] text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0C1A4A] to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Hours */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold">
                  <span className="text-white">smile</span>
                  <span className="bg-gradient-to-r from-teal-400 to-sky-500 bg-clip-text text-transparent">pro</span>
                </span>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold text-white">Hours</p>
                <p>Mon–Fri: 8:00 AM–8:00 PM</p>
                <p>Sat: 8:00 AM–6:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <p>Phone: 1-800-123-4567</p>
                <p>Address: 5678 Seltice Way,<br />Coeur D'Alene, ID 12345</p>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="space-y-3">
                <Link href="#about" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  About Us
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Services
                </Link>
                <Link href="#contact" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Contact
                </Link>
                <Link href="#blog" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Blog
                </Link>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <div className="space-y-3">
                <Link href="#services" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Cosmetic Dentist
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Root Canal
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Dental Implants
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-teal-400 transition-colors duration-300">
                  Whitening
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Smile-Pro Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Demo Window */}
      <div className="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 max-w-sm">
        <div className="p-4">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-semibold text-gray-800">This is a demo template</span>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            This is a template-based website created by Webloft Studio. 
            All content and images are for demonstration purposes.
          </p>
          <div className="flex space-x-2">
            <Link 
              href="https://webloftstudio.com/contact" 
              target="_blank"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-3 rounded text-center transition-colors duration-300"
            >
              Get Your Website
            </Link>
            <button 
              onClick={() => window.close()}
              className="px-3 py-2 text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Built by <Link href="https://webloftstudio.com" target="_blank" className="text-green-400 hover:text-green-600 transition-colors duration-300">Webloft Studio</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

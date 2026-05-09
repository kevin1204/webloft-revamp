"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DentalProDemo() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observerRef.current = observer;
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observerRef.current) {
        sections.forEach((section) => observerRef.current!.unobserve(section));
      }
    };
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSubmitted(true);
    setTimeout(() => {
      setIsBookingSubmitted(false);
      setBookingForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      icon: "🦷",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddceee95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, bonding, and aesthetic treatments.",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter, more confident smile.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Orthodontics",
      description: "Braces and Invisalign treatments for perfectly aligned teeth.",
      icon: "🦷",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural.",
      icon: "🦷",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a comfortable environment.",
      icon: "👶",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency dental services for urgent dental problems.",
      icon: "🚨",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Periodontal Care",
      description: "Advanced gum disease treatment and maintenance programs.",
      icon: "🦷",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist & Practice Owner",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      credentials: "DDS, 15+ years experience",
      specialties: ["Cosmetic Dentistry", "Implants", "Orthodontics"]
    },
    {
      name: "Dr. Michael Chen",
      title: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      credentials: "DDS, MD, 12+ years experience",
      specialties: ["Oral Surgery", "Implants", "Wisdom Teeth"]
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1594824388844-9e0b5f2a0a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      credentials: "DDS, 8+ years experience",
      specialties: ["Pediatric Care", "Orthodontics", "Preventive Care"]
    },
    {
      name: "Jennifer Martinez",
      title: "Dental Hygienist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      credentials: "RDH, 10+ years experience",
      specialties: ["Cleanings", "Periodontal Care", "Patient Education"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Garcia",
      text: "Dr. Johnson transformed my smile completely. The entire team is professional, caring, and made me feel comfortable throughout my treatment.",
      rating: 5,
      treatment: "Cosmetic Dentistry"
    },
    {
      name: "James Wilson",
      text: "I was nervous about getting dental implants, but Dr. Chen made the process smooth and painless. Highly recommend this practice!",
      rating: 5,
      treatment: "Dental Implants"
    },
    {
      name: "Lisa Thompson",
      text: "My kids love coming here! Dr. Rodriguez is amazing with children and makes dental visits fun. The office is clean and welcoming.",
      rating: 5,
      treatment: "Pediatric Dentistry"
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      treatment: "Teeth Whitening",
      description: "Professional whitening treatment results"
    },
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      treatment: "Dental Implants",
      description: "Complete smile restoration with implants"
    },
    {
      before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      treatment: "Orthodontics",
      description: "Braces treatment for perfect alignment"
    }
  ];

  const blogPosts = [
    {
      title: "5 Tips for Maintaining Healthy Teeth",
      excerpt: "Learn the essential daily habits that keep your teeth strong and healthy for life.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024"
    },
    {
      title: "Understanding Dental Implants: A Complete Guide",
      excerpt: "Everything you need to know about dental implants, from procedure to recovery.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024"
    },
    {
      title: "The Importance of Regular Dental Checkups",
      excerpt: "Why routine dental visits are crucial for preventing serious oral health issues.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🦷</span>
                </div>
                DentalPro
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className={`link-hover text-gray-600 hover:text-blue-600 font-medium ${activeSection === 'home' ? 'text-blue-600' : ''}`}>Home</Link>
              <Link href="#about" className={`link-hover text-gray-600 hover:text-blue-600 font-medium ${activeSection === 'about' ? 'text-blue-600' : ''}`}>About</Link>
              <Link href="#services" className={`link-hover text-gray-600 hover:text-blue-600 font-medium ${activeSection === 'services' ? 'text-blue-600' : ''}`}>Services</Link>
              <Link href="#team" className={`link-hover text-gray-600 hover:text-blue-600 font-medium ${activeSection === 'team' ? 'text-blue-600' : ''}`}>Team</Link>
              <Link href="#testimonials" className={`link-hover text-gray-600 hover:text-blue-600 font-medium ${activeSection === 'testimonials' ? 'text-blue-600' : ''}`}>Testimonials</Link>
              <Link href="#contact" className={`bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300`}>Book Appointment</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden isolate">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Professional dental care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Content - Left Side */}
              <div className={`text-white transform transition-all duration-1000 ${
                isVisible.home ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Your Smile, <span className="text-blue-300 relative inline-block">
                    <span className="relative z-10">Our Priority</span>
                    <div className="absolute -inset-1 bg-blue-300/20 blur-lg"></div>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                  Experience modern dental care with our experienced team. We're committed to providing exceptional treatment in a comfortable, state-of-the-art environment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#booking" className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Free Consultation
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                  
                  <Link href="tel:+1234567890" className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                </div>
                
                {/* Urgency Element */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
                  <div className="flex items-center justify-center text-white">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">⚡ Limited Time: Free Consultation + X-Ray ($150 Value)</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="group text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      15+
                    </div>
                    <div className="text-blue-100 group-hover:text-white transition-colors duration-300">Years Experience</div>
                  </div>
                  <div className="group text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      5000+
                    </div>
                    <div className="text-blue-100 group-hover:text-white transition-colors duration-300">Happy Patients</div>
                  </div>
                  <div className="group text-center sm:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="text-blue-100 group-hover:text-white transition-colors duration-300">Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible.home ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Professional dental team"
                      className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hover-lift animate-float">
                    <div className="text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      15+
                    </div>
                    <div className="text-blue-100 text-sm">Years of Excellence</div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gray-50 z-10">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 relative group">
                About DentalPro
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                For over 15 years, DentalPro has been the trusted name in comprehensive dental care. We pride ourselves on delivering exceptional treatment using the latest technology and techniques, all while ensuring our patients feel comfortable and cared for.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art facility is equipped with modern equipment, and our experienced team is dedicated to providing personalized care that meets your unique dental needs. We believe that everyone deserves a healthy, beautiful smile.
              </p>
              
              {/* Risk Reduction Messaging */}
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>100% Satisfaction Guarantee:</strong> If you're not completely satisfied with your treatment, we'll make it right or provide a full refund.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* CTA in About Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#booking" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
                  Schedule Your Free Consultation
                </Link>
                <Link href="#services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                  View Our Services
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Licensed & Certified</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Fully licensed dentists with advanced certifications</p>
                </div>
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Emergency Care</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">24/7 emergency dental services available</p>
                </div>
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Modern Technology</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Latest dental equipment and techniques</p>
                </div>
                <div className="group hover-lift p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Expert Team</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Experienced professionals dedicated to your care</p>
                </div>
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative group">
                <div
                  className="h-96 rounded-lg bg-cover bg-center bg-no-repeat shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl hover-lift animate-float">
                <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-blue-100">Years of Excellence</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Our Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care for the whole family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-500 hover-lift hover-glow transform ${
                  isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-4xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link 
                    href="#booking" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center text-sm"
                  >
                    Book Now
                  </Link>
                  <Link 
                    href="#contact" 
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied patients who trust DentalPro for their dental care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#booking" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="tel:+1234567890" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              Call (123) 456-7890
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            ⚡ Same-day appointments available • No insurance required • 100% satisfaction guarantee
          </p>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Before & After Gallery
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing transformations we've achieved for our patients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                  isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedImage(item.before)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.before}
                    alt={`${item.treatment} before`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{item.treatment}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
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
              Experienced professionals dedicated to your dental health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group text-center transform transition-all duration-700 hover-lift ${
                  isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm mb-3">{member.credentials}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              What Our Patients Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real stories from our satisfied patients
            </p>
            
            {/* Social Proof Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Would Recommend</div>
              </div>
            </div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="text-blue-600 font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonials[currentTestimonial].treatment}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible.booking ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Book Your Appointment
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Schedule your visit with our experienced dental team
            </p>
            
            {/* Urgency Banner */}
            <div className="bg-yellow-400 text-blue-900 rounded-lg p-4 max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">⚡ LIMITED TIME: Free Consultation + X-Ray ($150 Value) - Book Today!</span>
              </div>
            </div>
            
            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-white">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Same-Day Appointments Available</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No Insurance Required</span>
              </div>
            </div>
          </div>
          
          {isBookingSubmitted ? (
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Requested!</h3>
              <p className="text-gray-600">We'll contact you within 24 hours to confirm your appointment.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingForm.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={bookingForm.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={bookingForm.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Service</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Orthodontics">Orthodontics</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Emergency Care">Emergency Care</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your dental concerns or questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Insurance & Payment */}
      <section id="insurance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.insurance ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Insurance & Payment Options
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`text-center group hover-lift transform transition-all duration-500 ${
              isVisible.insurance ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Insurance Accepted</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We work with most major insurance providers to maximize your benefits.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-500 ${
              isVisible.insurance ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Payment Plans</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Flexible financing options available for major treatments.</p>
            </div>
            <div className={`text-center group hover-lift transform transition-all duration-500 ${
              isVisible.insurance ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Transparent Pricing</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">No hidden fees. We provide clear, upfront pricing for all treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.blog ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Dental Health Blog
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest dental health tips and insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className={`group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover-lift ${
                  isVisible.blog ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 group-hover:translate-x-1 transform">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative group">
              Contact Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our dental team
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transform transition-all duration-1000 ${
              isVisible.contact ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Address</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">123 Dental Street, Health City, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Email</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">info@dentalpro.com</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Hours</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Mon-Fri: 8AM-6PM, Sat: 9AM-3PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible.contact ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-lg font-medium">Google Map</p>
                  <p className="text-sm">Interactive map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't Wait - Your Perfect Smile Awaits!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join over 5,000 satisfied patients who have transformed their smiles with DentalPro. 
            Book your free consultation today and take the first step towards the confident smile you deserve.
          </p>
          
          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Would Recommend</div>
            </div>
          </div>
          
          {/* Urgency Element */}
          <div className="bg-red-600 text-white rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 mr-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl font-bold">⚡ LIMITED TIME OFFER</span>
            </div>
            <p className="text-lg mb-4">
              Free Consultation + Digital X-Ray ($150 Value) - Expires This Month!
            </p>
            <p className="text-sm text-red-100">
              *Only 12 spots remaining this month. Book now to secure your free consultation.
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="#booking" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Free Consultation Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <Link 
              href="tel:+1234567890" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (123) 456-7890
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
          
          {/* Risk Reduction */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Satisfaction Guarantee
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Insurance Required
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Flexible Payment Options
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-4 flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🦷</span>
                </div>
                DentalPro
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in dental health and beautiful smiles.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">General Dentistry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cosmetic Dentistry</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Orthodontics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Dental Implants</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Dental Street</p>
                <p>Health City, HC 12345</p>
                <p>(555) 123-4567</p>
                <p>info@dentalpro.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 DentalPro. All rights reserved. | Licensed & Insured
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Notice */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs z-50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">This is a demo template</span>
          </div>
          <div className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium">
            Built by Webloft Studio
          </div>
        </div>
        <p className="text-xs text-blue-100 mb-3">
          Like what you see? Get your own professional website!
        </p>
        <div className="space-y-2">
          <Link 
            href="https://webloftstudio.com/contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-3 rounded text-xs text-center transition-colors duration-200"
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
        <div className="mt-3 pt-2 border-t border-blue-500/30">
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

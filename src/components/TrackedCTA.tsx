"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

interface TrackedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ctaText: string;
  ctaLocation: string;
  destination: string;
  variant?: 'primary' | 'secondary';
}

export default function TrackedCTA({ 
  href, 
  children, 
  className = '', 
  ctaText, 
  ctaLocation, 
  destination,
  variant = 'primary'
}: TrackedCTAProps) {
  const handleClick = () => {
    trackCTAClick(ctaText, ctaLocation, destination);
  };

  const baseClasses = variant === 'primary' 
    ? 'bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg'
    : 'border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors text-lg';

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${className}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

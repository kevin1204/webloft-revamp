// Utility function to generate canonical URLs
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://webloftstudio.com';
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Handle root path
  if (!cleanPath) {
    return baseUrl;
  }
  
  return `${baseUrl}/${cleanPath}`;
}

// Common canonical URLs
export const CANONICAL_URLS = {
  HOME: generateCanonicalUrl('/'),
  ABOUT: generateCanonicalUrl('/about'),
  SERVICES: generateCanonicalUrl('/services'),
  PROJECTS: generateCanonicalUrl('/projects'),
  BLOG: generateCanonicalUrl('/blog'),
  CONTACT: generateCanonicalUrl('/contact'),
  PRIVACY: generateCanonicalUrl('/privacy'),
  TERMS: generateCanonicalUrl('/terms'),
} as const;

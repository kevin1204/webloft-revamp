/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel handles static generation automatically
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Disable optimization for static export
  },
  // Ensure proper SEO
  trailingSlash: false,
  // Enable compression
  compress: true,
  // Enable experimental optimizations
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

export default nextConfig;
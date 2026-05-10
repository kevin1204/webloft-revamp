/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Vercel handles static generation automatically
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 100],
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

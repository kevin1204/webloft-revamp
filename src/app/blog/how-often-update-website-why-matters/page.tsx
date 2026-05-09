import BlogPostPage from '@/components/BlogPostPage';
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';

export const metadata = getBlogPostMetadata('how-often-update-website-why-matters');

export default function WebsiteUpdatesArticle() {
  return <BlogPostPage post={getBlogPost('how-often-update-website-why-matters')} />;
}

import BlogPostPage from '@/components/BlogPostPage';
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';

export const metadata = getBlogPostMetadata('why-webflow-best-platform-small-medium-businesses');

export default function WebflowArticle() {
  return <BlogPostPage post={getBlogPost('why-webflow-best-platform-small-medium-businesses')} />;
}

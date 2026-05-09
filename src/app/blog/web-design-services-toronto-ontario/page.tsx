import BlogPostPage from '@/components/BlogPostPage';
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';

export const metadata = getBlogPostMetadata('web-design-services-toronto-ontario');

export default function TorontoWebDesignArticle() {
  return <BlogPostPage post={getBlogPost('web-design-services-toronto-ontario')} />;
}

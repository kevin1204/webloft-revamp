import BlogPostPage from '@/components/BlogPostPage';
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';

export const metadata = getBlogPostMetadata('seo-local-seo-secret-getting-found-online');

export default function SeoArticle() {
  return <BlogPostPage post={getBlogPost('seo-local-seo-secret-getting-found-online')} />;
}

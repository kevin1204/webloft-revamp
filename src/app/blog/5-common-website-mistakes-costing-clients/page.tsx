import BlogPostPage from '@/components/BlogPostPage';
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';

export const metadata = getBlogPostMetadata('5-common-website-mistakes-costing-clients');

export default function WebsiteMistakesArticle() {
  return <BlogPostPage post={getBlogPost('5-common-website-mistakes-costing-clients')} />;
}

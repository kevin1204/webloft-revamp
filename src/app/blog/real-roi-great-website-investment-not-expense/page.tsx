import BlogPostPage from '@/components/BlogPostPage';
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';

export const metadata = getBlogPostMetadata('real-roi-great-website-investment-not-expense');

export default function RoiArticle() {
  return <BlogPostPage post={getBlogPost('real-roi-great-website-investment-not-expense')} />;
}

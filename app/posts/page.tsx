import PostsPage from '../components/pages/PostPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Development notes about implementation decisions, problems, and lessons learned.',
};

export default async function Posts() {
  return <PostsPage locale="en" />;
}

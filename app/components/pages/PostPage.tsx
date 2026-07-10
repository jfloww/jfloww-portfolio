import { getPostList } from '../functions/importList';
import { localePrefix } from '@/app/lib/i18n';
import PostListClient from './PostListClient';

interface PostsPageProps {
  locale?: string;
}

export default async function PostsPage({ locale }: PostsPageProps) {
  const postList = await getPostList('posts');
  const prefix = localePrefix(locale);
  return (
    <div className="w-full px-3 py-3 md:py-3">
      <section className="mx-auto w-full max-w-5xl">
        <PostListClient posts={postList} prefix={prefix} />
      </section>
    </div>
  );
}

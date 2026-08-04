import { getPostList } from '../functions/importList';
import PageHeader from '../layout/PageHeader';
import PageShell from '../layout/PageShell';
import { localePrefix } from '@/app/lib/i18n';
import type { SupportedLocale } from '@/app/lib/i18n';
import PostListClient from './PostListClient';

interface PostsPageProps {
  locale?: SupportedLocale;
}

const COPY = {
  en: {
    eyebrow: 'Journal',
    description: 'Development logs, decisions, and implementation notes.',
    count: (count: number) => `${count} entries`,
  },
  ko: {
    eyebrow: '개발 기록',
    description: '개발 과정에서 생긴 결정과 구현 내용을 기록합니다.',
    count: (count: number) => `글 ${count}개`,
  },
};

export default async function PostsPage({ locale }: PostsPageProps) {
  const currentLocale = locale ?? 'en';
  const posts = await getPostList('posts', undefined, currentLocale);
  const prefix = localePrefix(currentLocale);
  const copy = COPY[currentLocale];

  return (
    <div className="w-full bg-[var(--background)]">
      <PageShell>
        <PageHeader eyebrow={copy.eyebrow} title="Posts" description={copy.description} aside={copy.count(posts.length)} />
        <PostListClient posts={posts} prefix={prefix} locale={currentLocale} />
      </PageShell>
    </div>
  );
}

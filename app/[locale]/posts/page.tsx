import PostsPage from '../../components/pages/PostPage';
import { isSupportedLocale } from '../../lib/i18n';
import { notFound } from 'next/navigation';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedPostsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  return <PostsPage locale={locale} />;
}

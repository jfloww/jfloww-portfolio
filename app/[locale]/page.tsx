import ClientHome from '../components/templates/ClientHome';
import { getPostList } from '../components/functions/importList';
import { isSupportedLocale } from '../lib/i18n';
import { notFound } from 'next/navigation';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedHomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const projList = await getPostList('projects', 5);
  return <ClientHome projList={projList} locale={locale} />;
}

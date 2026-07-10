import ProjectsPage from '../../components/pages/ProjectsPage';
import { isSupportedLocale } from '../../lib/i18n';
import { notFound } from 'next/navigation';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedProjectsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  return <ProjectsPage locale={locale} />;
}

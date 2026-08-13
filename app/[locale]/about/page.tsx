import AboutPage from '../../components/pages/AboutPage';
import { isSupportedLocale } from '../../lib/i18n';
import { notFound } from 'next/navigation';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedAboutPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  return <AboutPage locale={locale} />;
}

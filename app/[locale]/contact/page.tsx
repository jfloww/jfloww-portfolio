import ContactPage from '../../components/pages/ContactPage';
import { isSupportedLocale } from '../../lib/i18n';
import { notFound } from 'next/navigation';

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedContactPage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  return <ContactPage />;
}

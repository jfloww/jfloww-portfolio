import type { ReactNode } from 'react';
import { SUPPORTED_LOCALES } from '../lib/i18n';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.filter((locale) => locale !== 'en').map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default function LocaleLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}

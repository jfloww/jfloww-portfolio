export const SUPPORTED_LOCALES = ['en', 'ko'] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function localePrefix(locale?: string) {
  if (!locale || locale === 'en') return '';
  return `/${locale}`;
}

export function normalizeLocaleFromPath(pathname: string): SupportedLocale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first === 'ko' ? 'ko' : 'en';
}

// layout.tsx
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import SiteChrome from './components/layout/SiteChrome';
import { getSiteUrl, PERSON_NAME, SITE_DESCRIPTION, SITE_NAME } from './lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${PERSON_NAME} — Software Engineer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  keywords: ['software engineer', 'backend engineer', 'full-stack engineer', 'Python', 'Django', 'TypeScript', 'Next.js', 'PostgreSQL'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ko-KR': '/ko',
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${PERSON_NAME} — Software Engineer`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSON_NAME} — Software Engineer`,
    description: SITE_DESCRIPTION,
  },
};

const themeInitScript = `
(() => {
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON_NAME,
    url: getSiteUrl(),
    jobTitle: 'Software Engineer',
    sameAs: ['https://github.com/jfloww', 'https://www.linkedin.com/in/jfloww/', 'https://www.instagram.com/jaehoon_jung98/'],
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'Georgia Institute of Technology',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Stony Brook University',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/jfloww.png" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }} />
      </head>
      <body className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <SpeedInsights />
        <Analytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

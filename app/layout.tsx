// layout.tsx
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import SiteChrome from './components/layout/SiteChrome';

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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>jfloww</title>
        <link rel="icon" href="/icons/jfloww.png" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <SpeedInsights />
        <Analytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

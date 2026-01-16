// layout.tsx
import './globals.css';
import Header from './components/templates/MainHeader';
import Footer from './components/templates/MainFooter';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

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
      <body className="bg-white dark:bg-[#1A1A1F] text-black dark:text-white flex flex-col min-h-screen min-w-screen">
        <SpeedInsights />
        <Analytics />
        <Header />
        <main className="flex-grow m-auto w-full md:w-2/3 flex py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

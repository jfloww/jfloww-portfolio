'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import MainFooter from '../templates/MainFooter';
import MainHeader from '../templates/MainHeader';

interface SiteChromeProps {
  children: ReactNode;
}

function pathWithoutLocale(pathname: string) {
  const normalized = pathname.replace(/^\/ko(?=\/|$)/, '');
  return normalized || '/';
}

function usesDesktopOS(pathname: string) {
  const path = pathWithoutLocale(pathname);
  return path === '/' || path === '/about' || path === '/contact' || path === '/projects' || path.startsWith('/projects/');
}

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isOSRoute = usesDesktopOS(pathname);

  return (
    <>
      <div className={isOSRoute ? 'hidden' : ''}>
        <MainHeader />
      </div>
      <main className={`flex min-w-0 w-full flex-grow ${isOSRoute ? 'min-h-screen overflow-hidden' : ''}`}>{children}</main>
      <div className={isOSRoute ? 'hidden' : ''}>
        <MainFooter />
      </div>
    </>
  );
}

'use client';

import clsx from 'clsx';
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
      <div className={clsx(isOSRoute && 'md:hidden')}>
        <MainHeader />
      </div>
      <main className={clsx('flex w-full flex-grow', isOSRoute && 'md:min-h-screen')}>{children}</main>
      <div className={clsx(isOSRoute && 'md:hidden')}>
        <MainFooter />
      </div>
    </>
  );
}

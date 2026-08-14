'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore, type ReactNode } from 'react';
import { localePrefix, normalizeLocaleFromPath } from '@/app/lib/i18n';
import MobileOSDock from './MobileOSDock';
import OSIcon from './OSIcon';

const THEME_CHANGE_EVENT = 'jfloww-theme-change';

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getServerThemeSnapshot() {
  return false;
}

export function useOSTheme() {
  return useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
}

export function toggleOSTheme() {
  const next = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', next);
  localStorage.setItem('theme', next ? 'dark' : 'light');
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function localeTarget(pathname: string) {
  const locale = normalizeLocaleFromPath(pathname);
  if (locale === 'ko') return pathname.replace(/^\/ko(?=\/|$)/, '') || '/';
  return pathname === '/' ? '/ko' : `/ko${pathname}`;
}

interface MobileOSShellProps {
  activeHome?: boolean;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
  home?: boolean;
  title?: string;
}

export default function MobileOSShell({ activeHome, backHref, backLabel = 'Home', children, home = false, title }: MobileOSShellProps) {
  const pathname = usePathname();
  const locale = normalizeLocaleFromPath(pathname);
  const darkMode = useOSTheme();
  const prefix = localePrefix(locale);

  return (
    <section className={clsx('mobile-os-shell md:hidden', home && 'is-home')}>
      <div className="mobile-os-wallpaper" aria-hidden="true">
        <span className="mobile-os-wallpaper-orbit mobile-os-wallpaper-orbit-one" />
        <span className="mobile-os-wallpaper-orbit mobile-os-wallpaper-orbit-two" />
      </div>

      <header className="mobile-os-topbar">
        <div className="mobile-os-topbar-side">
          {backHref ? (
            <Link href={backHref} className="mobile-os-back" aria-label={`Back to ${backLabel}`}>
              <OSIcon name="chevron-left" className="h-4 w-4" />
              <span>{backLabel}</span>
            </Link>
          ) : (
            <Link href={prefix || '/'} className="mobile-os-brand" aria-label="JFLOWW Home">
              <Image src="/icons/jfloww.png" alt="" width={20} height={16} className="h-4 w-auto" />
              <span>JFLOWW</span>
            </Link>
          )}
        </div>

        {!home && title && <h1 className="mobile-os-topbar-title">{title}</h1>}

        <div className="mobile-os-topbar-side justify-end">
          {home && (
            <div className="mobile-os-utility-group">
              <Link
                href={localeTarget(pathname)}
                className="mobile-os-utility"
                aria-label={locale === 'ko' ? 'Switch to English' : '한국어로 전환'}
              >
                {locale === 'ko' ? 'EN' : 'KO'}
              </Link>
              <span className="mobile-os-utility-divider" aria-hidden="true" />
              <button
                type="button"
                onClick={toggleOSTheme}
                className="mobile-os-utility"
                aria-label={darkMode ? 'Use light appearance' : 'Use dark appearance'}
              >
                <OSIcon name={darkMode ? 'moon' : 'sun'} className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="mobile-os-scroll">{children}</div>
      {home && <MobileOSDock activeHome={activeHome} />}
    </section>
  );
}

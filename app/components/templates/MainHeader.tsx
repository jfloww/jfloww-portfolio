'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { normalizeLocaleFromPath } from '@/app/lib/i18n';
import DarkModeToggle from './organisms/DarkModeToggle';

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = normalizeLocaleFromPath(pathname);

  const stripLocalePrefix = (value: string) => {
    if (value === '/en' || value === '/ko') return '/';
    if (value.startsWith('/en/')) return value.replace('/en', '');
    if (value.startsWith('/ko/')) return value.replace('/ko', '');
    return value;
  };

  const getLocalizedPath = (path: string) => (currentLocale === 'ko' ? `/ko${path}` : path);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const changeLanguage = (lang: 'en' | 'ko') => {
    const basePath = stripLocalePrefix(pathname);
    router.push(lang === 'ko' ? `/ko${basePath}` : basePath);
    setLangMenuOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--divider)] bg-[var(--background)]">
      <div className="page-shell flex h-[72px] items-center justify-between gap-8">
        <Link href={getLocalizedPath('/')} className="header-button flex items-center gap-1.5 text-xl font-semibold tracking-tight">
          <Image src="/icons/jfloww.png" width={25} height={20} alt="JFLOWW" className="h-5 w-auto" priority />
          <span className="italic">FLOWW</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const href = getLocalizedPath(item.href);
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={clsx(
                    'header-button border-b py-2 text-sm font-medium transition-colors',
                    isActive(href)
                      ? 'border-[var(--accent)] text-[var(--foreground)]'
                      : 'border-transparent text-[var(--muted)] hover:text-[var(--foreground)]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <span className="h-5 w-px bg-[var(--divider)]" />

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen((open) => !open)}
                className="inline-flex items-center gap-2 rounded-[4px] border border-[var(--divider)] px-3 py-2 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--muted)]"
                aria-expanded={langMenuOpen}
              >
                {currentLocale === 'en' ? 'EN' : 'KO'}
                <span aria-hidden="true" className={clsx('text-[10px] transition-transform', langMenuOpen && 'rotate-180')}>
                  ▾
                </span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 border border-[var(--divider)] bg-[var(--background)] py-1 shadow-sm">
                  <button
                    type="button"
                    onClick={() => changeLanguage('en')}
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-[var(--surface-subtle)]"
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLanguage('ko')}
                    className="block w-full px-3 py-2 text-left text-sm hover:bg-[var(--surface-subtle)]"
                  >
                    한국어
                  </button>
                </div>
              )}
            </div>
            <DarkModeToggle />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative flex h-10 w-10 items-center justify-center border border-[var(--divider)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={clsx('absolute h-px w-5 bg-[var(--foreground)] transition-transform', menuOpen ? 'rotate-45' : '-translate-y-1.5')} />
          <span className={clsx('absolute h-px w-5 bg-[var(--foreground)] transition-opacity', menuOpen && 'opacity-0')} />
          <span className={clsx('absolute h-px w-5 bg-[var(--foreground)] transition-transform', menuOpen ? '-rotate-45' : 'translate-y-1.5')} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--divider)] bg-[var(--background)] md:hidden">
          <div className="page-shell py-6">
            <nav className="flex flex-col border-y border-[var(--divider)]" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const href = getLocalizedPath(item.href);
                return (
                  <Link
                    key={item.href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      'border-b border-[var(--divider)] py-4 text-lg font-medium last:border-b-0',
                      isActive(href) ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-4 text-sm">
                <button
                  type="button"
                  onClick={() => changeLanguage('en')}
                  className={currentLocale === 'en' ? 'font-semibold text-[var(--accent)]' : 'text-[var(--muted)]'}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => changeLanguage('ko')}
                  className={currentLocale === 'ko' ? 'font-semibold text-[var(--accent)]' : 'text-[var(--muted)]'}
                >
                  KO
                </button>
              </div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

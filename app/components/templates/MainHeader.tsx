'use client';
import DarkModeToggle from './organisms/DarkModeToggle';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { normalizeLocaleFromPath } from '@/app/lib/i18n';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = normalizeLocaleFromPath(pathname);

  const closeMenu = () => setMenuOpen(false);

  const stripLocalePrefix = (value: string) => {
    if (value === '/en' || value === '/ko') return '/';
    if (value.startsWith('/en/')) return value.replace('/en', '');
    if (value.startsWith('/ko/')) return value.replace('/ko', '');
    return value;
  };

  const changeLanguage = (lang: string) => {
    const basePath = stripLocalePrefix(pathname);
    const newPath = lang === 'ko' ? `/ko${basePath}` : basePath;
    router.push(newPath);
    setLangMenuOpen(false);
  };

  const getLocalizedPath = (path: string) => {
    return currentLocale === 'ko' ? `/ko${path}` : path;
  };

  const NAV_ITEMS = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/posts', label: 'Posts' },
    { href: '/contact', label: 'Contact' },
  ] as const;

  const navLinkClass = (href: string) =>
    clsx(
      'inline-block text-sm font-medium',
      'transition-colors transition-transform duration-150 will-change-transform',
      'hover:scale-110',
      'text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white',
      pathname === href && 'text-gray-900 dark:text-white underline underline-offset-8 scale-110'
    );

  const drawerLinkClass = (href: string) =>
    clsx(
      'header-button text-lg font-medium',
      'inline-block transition-transform duration-150 will-change-transform hover:scale-110',
      pathname === href ? 'text-gray-900 dark:text-white scale-110' : 'text-gray-600 dark:text-white/80'
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-[#1A1A1F]/80 backdrop-blur">
      <div className="mx-auto w-full max-w-5xl px-6 h-16 flex items-center justify-between gap-6">
        <div className="flex items-center">
          <Link href={getLocalizedPath('/')} className="header-button text-xl font-semibold tracking-tight flex items-center gap-1">
            <Image src="/icons/jfloww.png" width={25} height={20} alt="J" style={{ width: 'auto', height: 'auto' }} />
            <p className="pt-1 italic">FLOWW</p>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const href = getLocalizedPath(item.href);
            return (
              <Link key={item.href} href={href} className={clsx('header-button', navLinkClass(href))}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium
              border border-gray-300/80 text-gray-900 hover:bg-gray-50
              dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
            >
              {currentLocale === 'en' ? 'English' : '한국어'}
              <span className={clsx('ml-1 transition-transform duration-200', langMenuOpen ? 'rotate-180' : 'rotate-0')}>▼</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-[#1A1A1F]/95 backdrop-blur shadow-sm py-2">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100/80 dark:hover:bg-white/5"
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => changeLanguage('ko')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100/80 dark:hover:bg-white/5"
                >
                  🇰🇷 한국어
                </button>
              </div>
            )}
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={clsx(
              'md:hidden h-11 w-11 rounded-full border border-gray-300/80 dark:border-white/20 flex items-center justify-center',
              'hover:bg-gray-50 dark:hover:bg-white/5 transition-colors',
              menuOpen ? 'bg-gray-50 dark:bg-white/5' : ''
            )}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={clsx(
                  'absolute block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300',
                  menuOpen ? 'rotate-45 top-3' : 'top-1'
                )}
              ></span>
              <span
                className={clsx(
                  'absolute block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300',
                  menuOpen ? 'opacity-0' : 'opacity-100 top-3'
                )}
              ></span>
              <span
                className={clsx(
                  'absolute block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300',
                  menuOpen ? '-rotate-45 bottom-1' : 'bottom-1'
                )}
              ></span>
            </div>
          </button>
        </div>

        <div className="hidden md:block">
          <DarkModeToggle />
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
          <nav
            className="fixed top-0 right-0 h-full w-80 max-w-[85%] z-50 p-6
            bg-white/95 dark:bg-[#1A1A1F]/95 backdrop-blur
            border-l border-gray-200/70 dark:border-white/10 shadow-sm
            transition-transform duration-300 transform"
            style={{
              transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            <div className="flex flex-col space-y-6">
              <div className="m-auto">
                <DarkModeToggle />
              </div>
              {NAV_ITEMS.map((item) => {
                const href = getLocalizedPath(item.href);
                return (
                  <Link key={item.href} href={href} className={drawerLinkClass(href)} onClick={closeMenu}>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-20">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium m-auto
                border border-gray-300/80 text-gray-900 hover:bg-gray-50
                dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
              >
                {currentLocale === 'en' ? 'English' : '한국어'}
                <span className={clsx('ml-1 transition-transform duration-200', langMenuOpen ? 'rotate-180' : 'rotate-0')}>▼</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-6 mt-2 w-32 rounded-xl border border-gray-200/80 dark:border-white/10 bg-white/95 dark:bg-[#1A1A1F]/95 backdrop-blur shadow-sm py-2">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100/80 dark:hover:bg-white/5"
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => changeLanguage('ko')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100/80 dark:hover:bg-white/5"
                  >
                    🇰🇷 한국어
                  </button>
                </div>
              )}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

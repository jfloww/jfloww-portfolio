'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { localePrefix, normalizeLocaleFromPath } from '@/app/lib/i18n';
import OSIcon from './OSIcon';

export interface OSWindowMenuItem {
  id: string;
  label: string;
  isOpen?: boolean;
  onSelect: () => void;
}

interface OSMenuBarProps {
  activeApp: string;
  windowItems?: OSWindowMenuItem[];
}

type MenuName = 'go' | 'view' | 'window' | 'help' | null;

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

function localeTarget(pathname: string) {
  const locale = normalizeLocaleFromPath(pathname);
  if (locale === 'ko') {
    return pathname.replace(/^\/ko(?=\/|$)/, '') || '/';
  }
  return pathname === '/' ? '/ko' : `/ko${pathname}`;
}

export default function OSMenuBar({ activeApp, windowItems = [] }: OSMenuBarProps) {
  const pathname = usePathname();
  const locale = normalizeLocaleFromPath(pathname);
  const prefix = localePrefix(locale);
  const rootRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<MenuName>(null);
  const [time, setTime] = useState('--:--');
  const darkMode = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat(locale === 'ko' ? 'ko-KR' : 'en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date()));
    };
    updateTime();
    const timer = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(timer);
  }, [locale]);

  useEffect(() => {
    const closeFromOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    const closeFromEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('pointerdown', closeFromOutside);
    document.addEventListener('keydown', closeFromEscape);
    return () => {
      document.removeEventListener('pointerdown', closeFromOutside);
      document.removeEventListener('keydown', closeFromEscape);
    };
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    setOpenMenu(null);
  };

  const toggleMenu = (menu: Exclude<MenuName, null>) => setOpenMenu((current) => (current === menu ? null : menu));
  const closeMenu = () => setOpenMenu(null);

  return (
    <div ref={rootRef} className="os-menu-bar">
      <div className="flex h-full min-w-0 items-center gap-1">
        <Link href={`${prefix}/`} onClick={closeMenu} className="os-menu-brand" aria-label="JFLOWW Home">
          <span className="os-menu-brand-mark">J</span>
        </Link>
        <span className="max-w-[180px] truncate px-2 text-[13px] font-semibold">{activeApp}</span>
        {(['go', 'view', 'window', 'help'] as const).map((menu) => (
          <div key={menu} className="relative h-full">
            <button
              type="button"
              onClick={() => toggleMenu(menu)}
              className={`os-menu-trigger ${openMenu === menu ? 'is-open' : ''}`}
              aria-expanded={openMenu === menu}
              aria-haspopup="menu"
            >
              {menu[0].toUpperCase() + menu.slice(1)}
            </button>

            {openMenu === 'go' && menu === 'go' && (
              <div className="os-menu-dropdown w-52" role="menu">
                <Link href={`${prefix}/`} onClick={closeMenu} className="os-menu-row" role="menuitem">
                  <OSIcon name="home" className="h-4 w-4" /> Home
                </Link>
                <Link href={`${prefix}/projects`} onClick={closeMenu} className="os-menu-row" role="menuitem">
                  <OSIcon name="archive" className="h-4 w-4" /> Archive
                </Link>
                <Link href={`${prefix}/about`} onClick={closeMenu} className="os-menu-row" role="menuitem">
                  <OSIcon name="file-text" className="h-4 w-4" /> About
                </Link>
                <Link href={`${prefix}/posts`} onClick={closeMenu} className="os-menu-row" role="menuitem">
                  <OSIcon name="notes" className="h-4 w-4" /> Notes
                </Link>
                <Link href={`${prefix}/contact`} onClick={closeMenu} className="os-menu-row" role="menuitem">
                  <OSIcon name="mail" className="h-4 w-4" /> Contact
                </Link>
              </div>
            )}

            {openMenu === 'view' && menu === 'view' && (
              <div className="os-menu-dropdown w-56" role="menu">
                <button type="button" onClick={toggleTheme} className="os-menu-row w-full" role="menuitem">
                  <OSIcon name={darkMode ? 'sun' : 'moon'} className="h-4 w-4" />
                  {darkMode ? 'Use Light Appearance' : 'Use Dark Appearance'}
                </button>
              </div>
            )}

            {openMenu === 'window' && menu === 'window' && (
              <div className="os-menu-dropdown w-60" role="menu">
                {windowItems.length > 0 ? (
                  windowItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        item.onSelect();
                        closeMenu();
                      }}
                      className="os-menu-row w-full"
                      role="menuitem"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${item.isOpen === false ? 'bg-transparent ring-1 ring-current' : 'bg-current'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))
                ) : (
                  <div className="os-menu-row cursor-default opacity-65" role="menuitem" aria-disabled="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    <span className="truncate">{activeApp}</span>
                  </div>
                )}
              </div>
            )}

            {openMenu === 'help' && menu === 'help' && (
              <div className="os-menu-dropdown w-52" role="menu">
                <a
                  href="/resume/Jaehoon-Jung-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="os-menu-row"
                  role="menuitem"
                >
                  <OSIcon name="file-user" className="h-4 w-4" /> Resume
                </a>
                <Link href={`${prefix}/contact`} onClick={closeMenu} className="os-menu-row" role="menuitem">
                  <OSIcon name="mail" className="h-4 w-4" /> Contact
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-3 text-[12px]">
        <Link href={localeTarget(pathname)} className="rounded px-1 py-0.5 font-semibold hover:bg-white/15" aria-label="Switch language">
          {locale === 'en' ? 'EN' : 'KO'}
        </Link>
        <button type="button" onClick={toggleTheme} className="os-menu-status-button" aria-label={darkMode ? 'Use light theme' : 'Use dark theme'}>
          <OSIcon name={darkMode ? 'moon' : 'sun'} className="h-3.5 w-3.5" />
        </button>
        <OSIcon name="wifi" className="h-3.5 w-3.5" />
        <time className="min-w-[68px] text-right tabular-nums">{time}</time>
      </div>
    </div>
  );
}

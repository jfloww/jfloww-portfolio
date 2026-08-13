'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { localePrefix, normalizeLocaleFromPath } from '@/app/lib/i18n';
import OSDock, { type OSDockApp } from './OSDock';
import OSIcon from './OSIcon';
import OSMenuBar, { type OSWindowMenuItem } from './OSMenuBar';

interface OSDesktopShellProps {
  activeApp: string;
  activeDock?: OSDockApp;
  children: ReactNode;
  onHomeActivate?: () => void;
  showShortcuts?: boolean;
  windowItems?: OSWindowMenuItem[];
}

export default function OSDesktopShell({
  activeApp,
  activeDock = 'none',
  children,
  onHomeActivate,
  showShortcuts = true,
  windowItems,
}: OSDesktopShellProps) {
  const pathname = usePathname();
  const prefix = localePrefix(normalizeLocaleFromPath(pathname));

  return (
    <div className="os-desktop-shell">
      <div className="os-wallpaper" aria-hidden="true">
        <span className="os-wallpaper-ribbon os-wallpaper-ribbon-one" />
        <span className="os-wallpaper-ribbon os-wallpaper-ribbon-two" />
      </div>

      <OSMenuBar activeApp={activeApp} windowItems={windowItems} />

      {showShortcuts && (
        <aside className="os-desktop-shortcuts" aria-label="Desktop shortcuts">
          <Link href={`${prefix}/projects`} className="os-desktop-shortcut">
            <span className="os-shortcut-icon os-shortcut-folder">
              <OSIcon name="folder" className="h-7 w-7" />
            </span>
            <span>Archive</span>
          </Link>
          <Link href={`${prefix}/about`} className="os-desktop-shortcut">
            <span className="os-shortcut-icon os-shortcut-file">
              <OSIcon name="file-text" className="h-6 w-6" />
            </span>
            <span>README.md</span>
          </Link>
          <a href="/resume/Jaehoon-Jung-resume.pdf" target="_blank" rel="noopener noreferrer" className="os-desktop-shortcut">
            <span className="os-shortcut-icon os-shortcut-file">
              <OSIcon name="file-user" className="h-6 w-6" />
            </span>
            <span>Resume.pdf</span>
          </a>
        </aside>
      )}

      <div className="os-desktop-stage">{children}</div>
      <OSDock activeApp={activeDock} onHomeActivate={onHomeActivate} />
    </div>
  );
}

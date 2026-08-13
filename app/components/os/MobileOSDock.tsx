'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localePrefix, normalizeLocaleFromPath } from '@/app/lib/i18n';
import OSIcon from './OSIcon';

interface MobileOSDockProps {
  activeHome?: boolean;
}

export default function MobileOSDock({ activeHome = false }: MobileOSDockProps) {
  const pathname = usePathname();
  const prefix = localePrefix(normalizeLocaleFromPath(pathname));
  const homeHref = prefix || '/';

  return (
    <nav className="mobile-os-dock" aria-label="JFLOWW mobile Dock">
      <Link href={homeHref} className={`mobile-os-dock-app mobile-os-dock-home ${activeHome ? 'is-active' : ''}`} aria-label="Home">
        <OSIcon name="home" className="h-6 w-6" />
        <span className="mobile-os-dock-dot" aria-hidden="true" />
      </Link>
      <a
        href="https://pickingup.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-os-dock-app mobile-os-dock-picking"
        aria-label="Open Picking Up live app"
      >
        <Image src="/icons/picking-up.svg" alt="" width={31} height={38} className="h-8 w-auto" />
      </a>
      <a
        href="https://github.com/jfloww"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-os-dock-app mobile-os-dock-github"
        aria-label="GitHub profile"
      >
        <Image src="/icons/github.svg" alt="" width={29} height={29} className="h-[29px] w-[29px]" />
      </a>
    </nav>
  );
}

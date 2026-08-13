'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localePrefix, normalizeLocaleFromPath } from '@/app/lib/i18n';
import OSIcon from './OSIcon';

export type OSDockApp = 'archive' | 'contact' | 'home' | 'none';

interface OSDockProps {
  activeApp?: OSDockApp;
  onHomeActivate?: () => void;
}

function ActiveDot({ active }: { active: boolean }) {
  return active ? <span className="os-dock-active-dot" aria-hidden="true" /> : null;
}

export default function OSDock({ activeApp = 'none', onHomeActivate }: OSDockProps) {
  const pathname = usePathname();
  const prefix = localePrefix(normalizeLocaleFromPath(pathname));
  const homeHref = prefix || '/';

  return (
    <nav className="os-dock" aria-label="JFLOWW Dock">
      <div className="os-dock-entry">
        <span className="os-dock-tooltip">Home</span>
        {onHomeActivate ? (
          <button type="button" onClick={onHomeActivate} className="os-dock-button os-dock-home" aria-label="Open Home window">
            <OSIcon name="home" className="h-6 w-6" />
          </button>
        ) : (
          <Link href={homeHref} className="os-dock-button os-dock-home" aria-label="Home">
            <OSIcon name="home" className="h-6 w-6" />
          </Link>
        )}
        <ActiveDot active={activeApp === 'home'} />
      </div>

      <div className="os-dock-entry">
        <span className="os-dock-tooltip">Archive</span>
        <Link href={`${prefix}/projects`} className="os-dock-button os-dock-archive" aria-label="Archive">
          <OSIcon name="archive" className="h-6 w-6" />
        </Link>
        <ActiveDot active={activeApp === 'archive'} />
      </div>

      <div className="os-dock-entry">
        <span className="os-dock-tooltip">Contact</span>
        <Link href={`${prefix}/contact`} className="os-dock-button os-dock-contact" aria-label="Contact">
          <OSIcon name="mail" className="h-6 w-6" />
        </Link>
        <ActiveDot active={activeApp === 'contact'} />
      </div>

      <span className="os-dock-divider" aria-hidden="true" />

      <div className="os-dock-entry">
        <span className="os-dock-tooltip">Picking Up · Live app ↗</span>
        <a
          href="https://pickingup.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="os-dock-button os-dock-picking-up"
          aria-label="Open Picking Up live app in a new tab"
        >
          <Image src="/icons/picking-up.svg" alt="" width={31} height={38} className="h-[31px] w-auto" />
        </a>
      </div>

      <span className="os-dock-gap" aria-hidden="true" />

      <div className="os-dock-entry">
        <span className="os-dock-tooltip">GitHub ↗</span>
        <a
          href="https://github.com/jfloww"
          target="_blank"
          rel="noopener noreferrer"
          className="os-dock-button os-dock-github"
          aria-label="GitHub profile"
        >
          <Image src="/icons/github.svg" alt="" width={28} height={28} className="h-7 w-7" />
        </a>
      </div>

      <div className="os-dock-entry">
        <span className="os-dock-tooltip">LinkedIn ↗</span>
        <a
          href="https://www.linkedin.com/in/jfloww/"
          target="_blank"
          rel="noopener noreferrer"
          className="os-dock-button os-dock-linkedin"
          aria-label="LinkedIn profile"
        >
          <Image src="/icons/linkedin.svg" alt="" width={29} height={29} className="h-[29px] w-[29px]" />
        </a>
      </div>

      <div className="os-dock-entry">
        <span className="os-dock-tooltip">Instagram ↗</span>
        <a
          href="https://www.instagram.com/jaehoon_jung98/"
          target="_blank"
          rel="noopener noreferrer"
          className="os-dock-button os-dock-instagram"
          aria-label="Instagram profile"
        >
          <Image src="/icons/insta.svg" alt="" width={28} height={28} className="h-7 w-7" />
        </a>
      </div>
    </nav>
  );
}

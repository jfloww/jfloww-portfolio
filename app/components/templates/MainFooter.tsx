'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { normalizeLocaleFromPath } from '@/app/lib/i18n';

const APP_VERSION = 'v0.3.0';

export default function Footer() {
  const pathname = usePathname();
  const locale = normalizeLocaleFromPath(pathname);
  const contactHref = locale === 'ko' ? '/ko/contact' : '/contact';

  return (
    <footer className="w-full border-t border-[var(--divider)] bg-[var(--background)]">
      <div className="page-shell py-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} jfloww <span className="ml-2 text-xs opacity-70">{APP_VERSION}</span>
          </div>
          <div className="flex items-center gap-5">
            <a aria-label="GitHub" target="_blank" href="https://github.com/jfloww" rel="noopener noreferrer" className="footer-icon">
              <Image src="/icons/github.svg" width={19} height={19} alt="" className="dark:invert" />
            </a>
            <a aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/jfloww/" rel="noopener noreferrer" className="footer-icon">
              <Image src="/icons/linkedin.svg" width={19} height={19} alt="" className="dark:invert" />
            </a>
            <a
              aria-label="Instagram"
              target="_blank"
              href="https://www.instagram.com/jaehoon_jung98/"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <Image src="/icons/insta.svg" width={19} height={19} alt="" className="dark:invert" />
            </a>
            <span className="h-5 w-px bg-[var(--divider)]" />
            <Link href={contactHref} className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

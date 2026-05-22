import Link from 'next/link';
import Image from 'next/image';

const APP_VERSION = 'v0.1.1';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-[#1A1A1F]/80 backdrop-blur">
      <div className="mx-auto w-full max-w-5xl px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500 dark:text-white/60">
            © {new Date().getFullYear()} jfloww <span className="ml-2 text-xs text-gray-400 dark:text-white/40">{APP_VERSION}</span>
          </div>
          <div className="flex items-center gap-5">
            <a aria-label="GitHub" target="_blank" href="https://github.com/jfloww" rel="noopener noreferrer" className="footer-icon">
              <Image src="/icons/github.svg" width={20} height={20} alt="GitHub" />
            </a>
            <a aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/jfloww/" rel="noopener noreferrer" className="footer-icon">
              <Image src="/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" />
            </a>
            <a
              aria-label="Instagram"
              target="_blank"
              href="https://www.instagram.com/jaehoon_jung98/"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <Image src="/icons/insta.svg" width={20} height={20} alt="Instagram" />
            </a>

            <span className="h-5 w-px bg-gray-200/80 dark:bg-white/10" />

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className="w-full h-14 bg-[#1A1A1F] text-white flex items-center justify-center">
      <div className={clsx('flex items-center justify-between w-full px-4 md:w-1/2')}>
        <div className="hidden md:block"></div>
        <div className={clsx('flex space-x-3 md:space-x-6')}>
          <a target="_blank" href="https://github.com/jfloww" rel="noopener noreferrer">
            <div className="footer-icon">
              <Image src="/icons/github.svg" width={20} height={20} alt="GitHub" />
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jfloww/" rel="noopener noreferrer">
            <div className="footer-icon">
              <Image src="/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" />
            </div>
          </a>
          <a target="_blank" href="https://www.instagram.com/jaehoon_jung98/" rel="noopener noreferrer">
            <div className="footer-icon">
              <Image src="/icons/insta.svg" width={20} height={20} alt="Insta" />
            </div>
          </a>
          <Link href="/contact" className="text-blue-400 footer-icon ml-12">
            Contact
          </Link>
        </div>
        <div className="text-gray-400 text-sm">© {new Date().getFullYear()} jfloww</div>
      </div>
    </footer>
  );
}

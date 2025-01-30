import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full h-14 bg-gray-900 text-white flex items-center justify-center">
      <div className="flex space-x-4">
        <a
          target="_blank"
          href="https://github.com/jfloww"
          rel="noopener noreferrer"
        >
          <img src="/icons/github.svg" alt="Logo" className="footer-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jfloww/"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="Logo" className="footer-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/jaehoon_jung98/"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/icons8-instagram.svg"
            alt="Logo"
            className="footer-icon"
          />
        </a>

        <div>© {new Date().getFullYear()} ©jfloww</div>
        <Link href="/contact" className="header-button ">
          Contact
        </Link>
      </div>
    </footer>
  );
}

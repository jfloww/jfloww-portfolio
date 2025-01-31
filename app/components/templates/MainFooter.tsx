import Link from "next/link";
// import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-14 bg-gray-900 text-white flex items-center justify-center">
      <div className="flex space-x-6 items-center">
        {/* GitHub */}
        <a
          target="_blank"
          href="https://github.com/jfloww"
          rel="noopener noreferrer"
        >
          <div className="footer-icon"></div>
        </a>

        {/* LinkedIn */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jfloww/"
          rel="noopener noreferrer"
        >
          <div className="footer-icon"></div>
        </a>

        {/* Instagram */}
        <a
          target="_blank"
          href="https://www.instagram.com/jaehoon_jung98/"
          rel="noopener noreferrer"
        >
          <div className="footer-icon"></div>
        </a>

        {/* Contact Link */}
        <Link href="/contact" className="text-blue-400 hover:underline">
          Contact
        </Link>

        {/* Copyright */}
        <div className="text-gray-400 text-sm ml-4">
          © {new Date().getFullYear()} jfloww
        </div>
      </div>
    </footer>
  );
}

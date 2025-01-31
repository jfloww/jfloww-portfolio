import DarkModeToggle from "./organisms/DarkModeToggle";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Header({ mobile }: { mobile: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full h-24 bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-between px-6 shadow-md">
      <div
        className={clsx(
          "text-xl font-bold m-auto flex justify-between",
          mobile ? "w-full" : "w-2/3"
        )}
      >
        <div className="flex items-center">
          <Link href="/" className="header-button text-3xl flex">
            <Image src="/icons/jfloww.png" width={25} height={20} alt="J" />
            <p className="pt-2 italic">FLOWW</p>
          </Link>
        </div>

        <nav className={`hidden md:flex space-x-12`}>
          <Link href="/about" className="header-button">
            About
          </Link>
          <Link href="/projects" className="header-button">
            Projects
          </Link>
          <Link href="/posts" className="header-button">
            Posts
          </Link>
          <Link href="/contact" className="header-button">
            Contact
          </Link>
        </nav>

        {mobile && (
          <button
            className={clsx(
              "md:hidden p-2 ml-10 rounded h-10 mt-1",
              menuOpen ? "bg-gray-200 dark:bg-gray-700" : ""
            )}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex flex-col space-y-1 m-auto">
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            </div>
          </button>
        )}
      </div>

      {mobile && menuOpen && (
        <nav className="absolute top-24 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden transition-transform transform">
          <Link
            href="/about"
            className="header-button text-lg"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="header-button text-lg"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            href="/posts"
            className="header-button text-lg"
            onClick={closeMenu}
          >
            Posts
          </Link>
          <Link
            href="/contact"
            className="header-button text-lg"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      )}

      <DarkModeToggle />
    </header>
  );
}

import DarkModeToggle from "./organisms/DarkModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-24 bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold m-auto w-2/3 flex justify-between">
        <div className="flex">
          <Link href="/" className="header-button text-3xl">
            JFLOWW
          </Link>
        </div>
        <nav className="flex space-x-12">
          <Link href="/about" className="header-button ">
            About
          </Link>
          <Link href="/projects" className="header-button ">
            Projects
          </Link>
          <Link href="/posts" className="header-button ">
            Posts
          </Link>
          <Link href="/contact" className="header-button ">
            Contact
          </Link>
        </nav>
      </div>
      <DarkModeToggle />
    </header>
  );
}

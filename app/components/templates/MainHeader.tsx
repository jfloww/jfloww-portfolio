"use client";
import DarkModeToggle from "./organisms/DarkModeToggle";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header({ mobile }: { mobile: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("en-US"); // 기본값 en-US
  const router = useRouter();
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (pathname.startsWith("/ko")) {
      setCurrentLocale("ko");
    } else {
      setCurrentLocale("en-US");
    }
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    let newPath = pathname;
    if (lang === "ko" && !pathname.startsWith("/ko")) {
      newPath = `/ko${pathname}`;
    } else if (lang === "en-US" && pathname.startsWith("/ko")) {
      newPath = pathname.replace("/ko", "") || "/";
    }
    router.push(newPath);
    setLangMenuOpen(false);
  };

  const getLocalizedPath = (path: string) => {
    return currentLocale === "ko" ? `/ko${path}` : path;
  };

  return (
    <header className="w-full h-24 bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-between px-6 shadow-md relative">
      <div
        className={clsx(
          "text-xl font-bold m-auto flex items-center justify-between",
          mobile ? "w-full" : "w-2/3"
        )}
      >
        <div className="flex items-center">
          <Link
            href={getLocalizedPath("/")}
            className="header-button text-3xl flex items-center"
          >
            <Image src="/icons/jfloww.png" width={25} height={20} alt="J" />
            <p className="pt-2 italic">FLOWW</p>
          </Link>
        </div>

        {/* PC용 네비게이션 */}
        <nav className="hidden md:flex space-x-12">
          <Link
            href={getLocalizedPath("/about")}
            className={clsx("header-button", {
              "text-blue-500 font-bold":
                pathname === getLocalizedPath("/about"),
            })}
          >
            About
          </Link>
          <Link
            href={getLocalizedPath("/projects")}
            className={clsx("header-button", {
              "text-blue-500 font-bold":
                pathname === getLocalizedPath("/projects"),
            })}
          >
            Projects
          </Link>
          <Link
            href={getLocalizedPath("/posts")}
            className={clsx("header-button", {
              "text-blue-500 font-bold":
                pathname === getLocalizedPath("/posts"),
            })}
          >
            Posts
          </Link>
          <Link
            href={getLocalizedPath("/contact")}
            className={clsx("header-button", {
              "text-blue-500 font-bold":
                pathname === getLocalizedPath("/contact"),
            })}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center"
            >
              {currentLocale === "en-US" ? "English" : "한국어"}
              <span
                className={clsx(
                  "ml-1 transition-transform duration-200",
                  langMenuOpen ? "rotate-180" : "rotate-0"
                )}
              >
                ▼
              </span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 transition-opacity duration-200">
                <button
                  onClick={() => changeLanguage("en-US")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => changeLanguage("ko")}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  🇰🇷 한국어
                </button>
              </div>
            )}
          </div>

          {mobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={clsx(
                "md:hidden p-3 ml-4 rounded h-12 w-12 flex items-center justify-center focus:outline-none",
                menuOpen ? "bg-gray-200 dark:bg-gray-700" : ""
              )}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={clsx(
                    "absolute block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300",
                    menuOpen ? "rotate-45 top-3" : "top-1"
                  )}
                ></span>
                <span
                  className={clsx(
                    "absolute block w-6 h-0.5 bg-black dark:bg-white transition-opacity duration-300",
                    menuOpen ? "opacity-0" : "opacity-100 top-3"
                  )}
                ></span>
                <span
                  className={clsx(
                    "absolute block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300",
                    menuOpen ? "-rotate-45 bottom-1" : "bottom-1"
                  )}
                ></span>
              </div>
            </button>
          )}
        </div>

        {!mobile && <DarkModeToggle />}
      </div>

      {mobile && menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeMenu}
          ></div>
          <nav
            className="fixed top-0 right-0 w-1/2 h-full bg-white dark:bg-gray-900 shadow-md z-50 p-6 transition-transform duration-300 transform"
            style={{
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="flex flex-col space-y-6">
              <div className="m-auto">
                <DarkModeToggle />
              </div>
              <Link
                href={getLocalizedPath("/about")}
                className={clsx("header-button text-lg", {
                  "text-blue-500 font-bold":
                    pathname === getLocalizedPath("/about"),
                })}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href={getLocalizedPath("/projects")}
                className={clsx("header-button text-lg", {
                  "text-blue-500 font-bold":
                    pathname === getLocalizedPath("/projects"),
                })}
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href={getLocalizedPath("/posts")}
                className={clsx("header-button text-lg", {
                  "text-blue-500 font-bold":
                    pathname === getLocalizedPath("/posts"),
                })}
                onClick={closeMenu}
              >
                Posts
              </Link>
              <Link
                href={getLocalizedPath("/contact")}
                className={clsx("header-button text-lg", {
                  "text-blue-500 font-bold":
                    pathname === getLocalizedPath("/contact"),
                })}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

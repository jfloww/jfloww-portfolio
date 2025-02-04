"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // setDarkMode(true);
    // localStorage.setItem("theme", "dark");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="pt-1">
      <button
        onClick={toggleDarkMode}
        className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300`}
      >
        <div
          className={`w-5 h-5 bg-white dark:bg-black rounded-full shadow-md transform transition ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );
}

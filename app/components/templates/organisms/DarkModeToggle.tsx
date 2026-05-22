'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDarkMode(next);
  };

  return (
    <div className="pt-1">
      <button onClick={toggleDarkMode} className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300`}>
        <div
          className={`w-5 h-5 bg-white dark:bg-black rounded-full shadow-md transform transition ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
        ></div>
      </button>
    </div>
  );
}

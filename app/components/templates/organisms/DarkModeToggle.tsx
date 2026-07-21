'use client';

import { useSyncExternalStore } from 'react';

const THEME_CHANGE_EVENT = 'jfloww-theme-change';

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getServerThemeSnapshot() {
  return false;
}

export default function DarkModeToggle() {
  const darkMode = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const toggleDarkMode = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <div className="pt-1">
      <button
        type="button"
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={darkMode === true}
        className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300"
      >
        <div
          className={`w-5 h-5 bg-white dark:bg-black rounded-full shadow-md transform transition ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
        ></div>
      </button>
    </div>
  );
}

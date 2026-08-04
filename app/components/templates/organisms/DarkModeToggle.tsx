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
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
      className="flex h-6 w-11 items-center rounded-full border border-[var(--divider)] bg-[var(--surface-subtle)] p-[3px] transition-colors"
    >
      <span
        className={`h-4 w-4 rounded-full bg-[var(--foreground)] transition-transform duration-200 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  );
}

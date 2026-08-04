# Shared UI Components

Framework: React 19 with Next.js 16 App Router. Styling is Tailwind CSS with custom components; there is no external UI component library.

## `app/components/projects/ProjectTile.tsx`

Shared project tile used by Home and the Projects index.

```tsx
import Image from 'next/image';
import Link from 'next/link';
import type { ContentMeta } from '@/app/lib/content/schema';

interface ProjectTileProps {
  href: string;
  project: ContentMeta;
}

export default function ProjectTile({ href, project }: ProjectTileProps) {
  const cover = project.images?.[0]?.src ?? '/temp/test1.jpg';

  return (
    <Link
      href={href}
      aria-label={`View ${project.title} project`}
      className="group relative aspect-square overflow-hidden bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white/5 dark:focus-visible:outline-white"
    >
      <Image
        src={cover}
        alt=""
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        sizes="(max-width: 767px) 50vw, (max-width: 1024px) 33vw, 320px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 transition-opacity md:opacity-0 md:group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-3 text-white transition-opacity md:opacity-0 md:group-hover:opacity-100">
        <h2 className="truncate text-sm font-medium leading-snug">{project.title}</h2>
        <p className="mt-0.5 text-[11px] text-white/75">{project.date.slice(0, 4)}</p>
      </div>
    </Link>
  );
}
```

## `app/components/templates/organisms/DarkModeToggle.tsx`

Shared class-based theme toggle used by the header.

```tsx
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
```

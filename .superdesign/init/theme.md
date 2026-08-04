# Theme

## Compact token summary

- Next.js 16, React 19, Tailwind CSS 3; no component library.
- Class-based dark mode.
- Current light variables: background `#ffffff`, foreground `#171717`.
- Current dark shell: `#1A1A1F` with `white/10` borders.
- Current palette is neutral gray/black/white with blue reserved inconsistently for links and focus.
- Desktop body font is currently `cursive`; mobile switches to `sans-serif` at 768px.
- Home/header/footer use `max-w-5xl`; Projects and project detail use `max-w-4xl`.
- Current project tiles are square with zero radius. Forms use `rounded-xl`/`rounded-2xl`; buttons use full pills.
- Motion uses 150ms color/opacity transitions and 300ms image scale.
- Default Tailwind breakpoint `md` is 768px.

## Raw `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
```

## Raw `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: cursive;
}

@media (max-width: 768px) {
  body {
    font-family: sans-serif;
  }
}

.header-button {
  transition: opacity 0.15s ease, color 0.15s ease;
}

.header-button:hover {
  opacity: 0.85;
}
.footer-icon {
  width: 24px;
  transition: opacity 0.15s ease;
}
.footer-icon:hover {
  opacity: 0.85;
}
```

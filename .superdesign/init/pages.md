# Page Dependency Trees

## `/` and `/ko` — Home

- `app/page.tsx` or `app/[locale]/page.tsx`
  - `app/components/templates/ClientHome.tsx`
    - `app/components/projects/ProjectTile.tsx`
    - `app/lib/i18n.ts`
    - `app/lib/content/schema.ts`
  - `app/components/functions/importList.ts`
    - `app/lib/content/loader.ts`
      - `app/lib/content/schema.ts`
      - `app/lib/i18n.ts`
- `app/layout.tsx`
  - `app/globals.css`
  - `app/components/templates/MainHeader.tsx`
    - `app/components/templates/organisms/DarkModeToggle.tsx`
    - `app/lib/i18n.ts`
  - `app/components/templates/MainFooter.tsx`

Actual render branch: `ClientHome` always renders one responsive hero and one responsive project grid. Locale changes copy and link prefixes only.

## `/projects` and `/ko/projects` — Projects index

- route entry
  - `app/components/pages/ProjectsPage.tsx`
    - `app/components/projects/ProjectTile.tsx`
    - `app/components/functions/importList.ts`
    - `app/lib/i18n.ts`
- shared `app/layout.tsx` shell

## `/posts` and `/ko/posts` — Posts index

- route entry
  - `app/components/pages/PostPage.tsx`
    - `app/components/pages/PostListClient.tsx`
      - `app/components/functions/dateFormat.ts`
      - `app/components/functions/importList.ts`
    - `app/lib/i18n.ts`
- shared `app/layout.tsx` shell

## `/posts/[id]` and localized equivalent — Post detail

- route entry
  - `app/lib/content/loader.ts`
  - `app/lib/content/renderMdx.ts`
  - `app/components/functions/dateFormat.ts`
- shared `app/layout.tsx` shell

## Project detail

- route entry
  - `app/projects/[id]/ProjectClient.tsx`
    - `app/components/templates/ImageSlider.tsx`
    - `app/components/functions/dateFormat.ts`
    - `app/lib/i18n.ts`
- shared `app/layout.tsx` shell

## About and Contact

- route entry
  - `app/components/pages/AboutPage.tsx` or `ContactPage.tsx`
- shared `app/layout.tsx` shell

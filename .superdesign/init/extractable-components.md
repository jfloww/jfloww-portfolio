# Extractable Components

## MainHeader

- Source: `app/components/templates/MainHeader.tsx`
- Category: layout
- Description: Sticky bilingual header with logo, navigation, locale control, theme toggle, and mobile drawer.
- Key props: activeItem, currentLocale, menuOpen.
- Hardcoded: logo path, navigation labels, styling.

## MainFooter

- Source: `app/components/templates/MainFooter.tsx`
- Category: layout
- Description: Shared copyright, version, social links, and Contact link.
- Key props: none required for this draft.
- Hardcoded: social destinations, icon sources, version, styling.

## ProjectTile

- Source: `app/components/projects/ProjectTile.tsx`
- Category: basic
- Description: Shared sharp square media tile for Home and Projects.
- Key props: project title, year, image, href.
- Hardcoded: overlay and responsive interaction style.

The existing Superdesign project already contains reusable MainHeader and MainFooter components. ProjectTile is a basic card and should remain inline in the Home draft.

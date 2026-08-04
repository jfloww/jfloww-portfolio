# JFLOWW Editorial Portfolio

## Purpose

This is a bilingual personal portfolio and technical blog for a software engineer. Visitors should quickly understand who Jaehoon is, scan selected software projects, then read development logs that explain how those projects were built. Projects represent outcomes; Posts represent the process behind them. The site should feel like a maintained working notebook, not a startup landing page or a visual-art gallery.

## Home information architecture

1. Shared header.
2. Compact introduction: role, name, factual two-line description, current project, Projects/About links, and a small supporting portrait.
3. Selected Work: two featured software projects with clear media and permanent captions.
4. Latest Notes: three chronological development posts with date, title, short subject line, and related project.
5. Small contact prompt followed by the shared footer.

## Visual direction

- Minimal editorial layout with a quiet, sharp, deliberate feel.
- One neutral system sans-serif stack across English and Korean. No cursive, serif, or decorative display font.
- Black, white, and neutral gray surfaces. One restrained blue accent is permitted only for text links and keyboard focus.
- No decorative gradients, glassmorphism, large shadows, colored glow, or startup-style visual effects.
- Use typography, thin dividers, alignment, and whitespace instead of placing every section inside a card.
- Project media has sharp corners and a consistent 16:9 ratio, with title, year, and one factual description below the image.
- Use two project columns on desktop and one on mobile so software screenshots remain legible.
- Panels and form controls may use a small 6–8px radius. Primary and secondary action links may remain pill-shaped only when they behave as buttons.
- Avoid excessive pills for metadata.
- No large marketing slogan. Copy must remain factual and short.

## Apple editorial reference

Use Apple.com as a single visual reference source, adapted for a portfolio rather than copied as a product-marketing page. The closest structural references are Apple Newsroom and Apple Developer News: strong hierarchy, one message per section, quiet metadata, generous isolation around media, and restrained interactions.

- Adapt Apple's neutral surface relationship into a clearer JFLOWW blue-white palette: `#FFFFFF` is the main page and reading surface, `#F6F8FB` is used only for alternating editorial bands, `#171A1F` is primary text, `#66707A` is secondary text, and `#DCE2E8` is the recessive divider. In dark mode use `#0A0A0A` for the main surface, a restrained cool-black `#101318` for alternating bands, `#252B33` for dividers, and `#60A5FA` for the blue accent.
- Blue `#0066CC` is an interaction signal only. Keep it below roughly one percent of the visible page and use it for links, active states, and keyboard focus rather than decoration.
- Build hierarchy through scale, weight, alignment, and whitespace. Each viewport section should have one obvious message or reading action.
- Let project screenshots carry visual weight. Use large, unfiltered media without text overlays; separate the caption below the image.
- Prefer broad editorial bands and isolated feature blocks over a dense card catalog. White and soft-gray sections may alternate without shadows.
- Use subtle 200–320ms color and opacity transitions. Motion confirms interaction and never becomes the subject.
- Do not copy Apple product-launch conventions: no giant centered sales headline, no cinematic product render, no promotional gradient, no full page of rounded panels, and no oversized pill CTA.
- Keep JFLOWW's sharp project media and compact technical-blog typography. Apple's extracted 28px body copy is inappropriate for development notes; body and metadata sizes remain those defined below.
- Do not tint every container. Alternate broad `#FFFFFF` and `#F6F8FB` sections in light mode and `#0A0A0A` and `#101318` in dark mode. The dark surface shift must stay subtle so sections read as one continuous page rather than detached panels.

## Layout and spacing

- Full-width root shell; content controls its own width.
- One shared site container at `max-w-6xl` / 1152px for the header, footer, and every menu page, with 24px mobile and 32px desktop horizontal padding.
- Long-form reading column around 680–760px or about 72 characters.
- Home uses a simple editorial grid. The portrait is secondary to text.
- Major sections are separated by 64–96px and/or one low-contrast divider.
- Internal gaps use a restrained 8/12/16/24/32px scale.
- Home uses a balanced two-column hero: introduction on the left and a visible 112–128px profile image on the right. The portrait is secondary but must not disappear.
- Home and Projects use the same two-column project grid on desktop and one column on mobile. Both projects have equal visual weight; no single project image may dominate the viewport.
- At 1152px shell width, each desktop project image should be approximately 520–544px wide and 292–306px tall.
- Wide page shells do not widen long-form prose. Post and project detail reading columns remain approximately 720–760px inside the shared outer shell.

## Typography

- System UI sans stack with Korean-capable fallbacks.
- Home display: approximately 44–52px desktop, 34–40px mobile, medium or semibold.
- Page title: 30–36px.
- Section title: 18–22px.
- Body: 15–17px with comfortable 1.6–1.75 line height.
- Metadata: 11–13px, muted, tabular numbers where useful.
- Use at most three weights: regular, medium, semibold.

## Components

- Header: true three-column desktop alignment so navigation stays centered. Retain JFLOWW identity, locale control, theme toggle, and mobile drawer.
- PageShell: the shared 1152px outer container and responsive horizontal padding used by all menu pages.
- PageHeader: consistent title, short description, spacing, and divider for Projects, Posts, About, and Contact.
- Project item: sharp 16:9 screenshot, permanent caption below, title + year + one line summary; subtle 1.02–1.03 image hover scale. Reuse the same component on Home and Projects.
- Post row: date column, title and short description, related project/category; divided by thin rules rather than cards.
- Contact prompt: one short line and a text link, not a promotional banner.
- Footer: quiet metadata and social links.
- Home introduction: left-aligned editorial statement with a concise 44–52px name or role line, one 18–21px supporting paragraph, text-link actions, and a small profile image aligned opposite the text.
- Development news list: borrow the scanning rhythm of Apple Developer News—date first, clear title, short summary, related project—while keeping thin rules and the site's compact reading density.

## Motion and accessibility

- 150–250ms transitions, no slow carousel-like motion on the Home page.
- Clear 2px keyboard focus indicator.
- Text and metadata remain visible without hover.
- Respect light and dark themes with equivalent hierarchy and contrast.

## Hard constraints

- Keep the project/blog relationship visible.
- Preserve bilingual routing and existing content concepts.
- Do not introduce fonts, colors, decorative effects, or component styles outside this system.
- Do not make the page look like a generic SaaS landing page.

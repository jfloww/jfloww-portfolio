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

## Monochrome variant

- Keep this as a separate visual variant of the approved blue-white portfolio. Layout, typography, spacing, content, responsiveness, and media sizing remain unchanged.
- Use `#FFFFFF` for the light background, `#171A1F` for light foreground and interaction accents, `#F5F5F5` for alternating light sections, `#6B6B6B` for light muted text, and `#D9D9D9` for light dividers.
- Use `#0A0A0A` for the dark background, `#EDEDED` for dark foreground and interaction accents, `#111111` for alternating dark sections, `#A3A3A3` for dark muted text, and `#292929` for dark dividers.
- Convert the JFLOWW brand mark to solid black in light mode and solid white in dark mode. Keep profile and project imagery in its original color so the portfolio work remains legible and recognizable.
- Links, active navigation, keyboard focus, and small stack separators use the foreground color rather than blue. Do not add any replacement accent color.

## Approved continuous canvas

- Use the continuous canvas as the default page treatment across Home, Projects, Posts, About, Contact, and detail pages.
- Use `#FFFFFF` for both the main and subtle light surfaces. Use `#0A0A0A` for both the main and subtle dark surfaces. Do not introduce a blue-gray or cool-black section band.
- Keep the shared desktop header at 56px and use the same background as the content directly below it. Do not place a full-width divider between the header and the first section.
- Separate major Home sections with low-contrast dividers constrained to the 1152px page shell. Use whitespace and typography as the primary section boundaries.
- Footer dividers and page-header dividers must also align to the shared page shell rather than spanning the viewport.

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

## JFLOWW hybrid OS shell

This section defines the approved desktop-inspired shell for Home, About, Projects, Project detail, Archive, Contact, and Resume access. For drafts explicitly named `JFLOWW OS`, these rules supersede conflicting page-shell rules above, including the continuous-canvas requirement and the prohibition on glass surfaces or atmospheric gradients. Posts index and Post detail remain editorial reading surfaces and retain their current PageShell, filter, typography, divider, and MDX formats.

### Product intent

- Make the first viewport memorable and playful while keeping a recruiter-friendly path to Projects, Posts, About, Resume, Contact, and the live Picking Up product.
- Treat the operating-system metaphor as a navigation shell, not a simulation. Every visible app maps to a real existing route or external profile.
- Preserve the relationship between finished projects and their development notes. Do not add unrelated lifestyle, health, weather, books, films, or fake system-status widgets.
- Keep the interface recognizably JFLOWW. It may feel desktop-inspired but must not reproduce Apple branding, proprietary wallpapers, Finder, or macOS icons.
- Preserve browser URLs, deep links, back/forward behavior, bilingual routing, and semantic page headings. Window state may enhance navigation but must never replace real routes.
- Treat Posts as the deliberate exception: choosing Posts leaves the floating-window composition and opens the existing quiet editorial list or article reading layout. Do not wrap long posts in a decorative desktop window.

### Desktop composition

- Design the OS routes for a full viewport with a slim 28px top menu bar, a custom atmospheric wallpaper, and a centered 68–72px floating dock near the bottom edge.
- Top bar: custom JFLOWW mark, then the name of the currently focused surface (`JFLOWW`, `Archive`, `About`, or the project title), followed by `Go`, `View`, `Window`, and `Help`. At right show locale, theme control, generic custom status glyphs, and a quiet tabular local time. The menus expose only real actions: route navigation, theme, open-window focus, Resume, and Contact.
- Desktop shortcuts are limited to `Archive`, `README.md`, and `Resume.pdf`. `README.md` opens About. Do not repeat About, Projects, and Notes as separate desktop shortcuts.
- Archive is a portfolio content browser, not a fake filesystem. Its root contains `Projects/`, `Notes/`, `Documents/`, and `README.md`. `Projects/` maps to existing project entries, `Notes/` maps to the existing posts route, `Documents/` exposes the real resume, and `README.md` maps to About.
- `Picking Up` lives in the dock rather than the desktop shortcut column. It opens `https://pickingup.vercel.app/` externally and carries `Live app ↗` in its tooltip. The `Archive / Projects / Picking Up` item remains the separate internal case study. Give the dock item one restrained custom planner/checkmark icon using JFLOWW blue; do not imitate a native macOS application icon.
- Keep one useful window open on arrival so the page never feels like an empty puzzle. The primary Welcome window contains the existing role, greeting, Python / SQL / TypeScript stack, profile portrait, and direct Projects / About actions.
- Surface selected work and latest development notes in at most two supporting widgets. Project items open their existing case studies in a project document window; note items navigate to the unchanged editorial Posts format.
- Archive uses a custom file-browser window with a narrow sidebar and accessible list rows. Root and folder navigation happen inside the Archive window, while opening a project creates or focuses a separate project document window.
- Project detail retains the existing MDX content, order, images, and technical copy. On desktop, add only OS document chrome: a 40px title bar, back/breadcrumb controls, a compact metadata toolbar, a 16:9 project image, and one scrollable document region approximately 720–760px wide. Remove the oversized bottom `Back to Projects` pill in favor of the window toolbar. Do not redesign the project as a marketing landing page or split its article into dashboard cards.
- Window chrome uses a compact title bar, three small controls, clear title, and a visible route-safe open/full-page action where useful. Red closes; amber and green remain disabled because minimize and maximize are outside scope.
- Preserve readable information density: the first viewport must expose identity, two projects, and at least two recent notes without requiring every item to be opened.

### Visual language and tokens

- Continue using the neutral system sans-serif stack with Korean-capable fallbacks and no decorative display face.
- Wallpaper palette: deep ink blue `#0B233B`, slate blue `#315B7D`, mist `#B8CFDC`, and restrained warm sand `#D7C2A2`. Gradients are allowed only in the wallpaper.
- Light glass surface: `rgba(248, 251, 253, 0.78)` with dark text `#17212B`; dark glass surface: `rgba(16, 24, 32, 0.78)` with text `#F2F5F7`.
- Glass is limited to the top bar, windows, widgets, and dock. Use 16–20px backdrop blur, a 1px `rgba(255,255,255,0.55)` edge, and one restrained shadow such as `0 18px 50px rgba(8,24,40,0.18)`.
- Primary windows use 16px radius; widgets and dock use 18px radius; desktop icons themselves have 12px icon tiles. Do not turn every content row into a rounded card.
- Use existing JFLOWW interaction blue `#0066CC` sparingly for links, active app indicators, and keyboard focus. Window controls may use muted red, amber, and green only at their conventional tiny 10–12px size.
- Typography inside windows follows the editorial system: 30–36px window hero, 17–22px section titles, 14–16px body, 11–13px metadata.

### Balanced desktop realism

- Use a balanced, macOS-adjacent level of realism without copying Apple branding, proprietary icons, Finder, or any macOS wallpaper. JFLOWW remains the active product identity and all icons remain custom.
- Refine the top menu bar to 28px on desktop. Keep the JFLOWW mark and active app name at the left, followed by compact 13px menu labels; place generic custom status glyphs and a tabular local time at the right. Use restrained translucency, a 20px backdrop blur, and a single soft bottom highlight rather than a heavy border.
- Give every open content surface recognizable window anatomy: a 38–40px title bar, a centered or clearly aligned title, and three 12px traffic-light controls with 8px gaps and muted conventional red, amber, and green. The red control closes the window; amber and green remain visibly disabled because minimize and maximize are outside this mock's scope. Never use Apple logos or proprietary control glyphs.
- Focused windows use the full glass opacity, crisp 1px edge, and layered shadow `0 22px 60px rgba(6,18,30,0.24), 0 3px 12px rgba(6,18,30,0.14)`. Inactive windows reduce shadow strength and title-bar/control saturation while keeping all text fully legible. Clicking any visible part of a window raises it above the others.
- Use `backdrop-filter: blur(20px) saturate(125%)` for windows and the dock. Keep content regions calm and readable; the wallpaper may show through around windows, not compete through text-heavy regions.
- Refine the dock into a continuous 68–72px glass shelf with 16px outer radius, 8px internal padding, and custom 44–48px app tiles. Hover or keyboard focus magnifies only the targeted item to about `1.20` and lifts it 6–10px; adjacent items remain still. Use 160–220ms spring-like easing without bounce loops.
- Show one 4px active dot below each currently open app. Dock tooltips appear above icons on hover and keyboard focus. A closed app's dock item reopens its mapped window; an open app's dock item focuses it.
- Interaction scope is intentionally narrow: open, close, and focus windows only. Do not add dragging, resizing, minimizing, maximizing, desktop selection rectangles, fake context menus, or simulated system apps.
- Welcome, Archive, About, Contact, and Project detail may behave as real windows. Selected Work and Latest Notes may remain lightweight desktop widgets. Posts never become floating windows. Archive, README, Resume, dock items, widgets, and menu commands retain real destinations; Picking Up remains the external live product and its Archive entry remains the internal case-study route.
- Use the existing system UI font stack only. Do not import Google Fonts or introduce a new display face for this variant.

### Motion, behavior, and responsive rules

- Suggested implementation motion is 160–240ms for opening, focus, dock magnification, and hover; no bouncing loops or novelty cursor effects.
- Desktop windows may overlap slightly, but important text must remain unobscured and the starting layout must look intentionally composed.
- Every desktop shortcut, menu command, Archive row, traffic-light control, and dock item needs a text label or accessible name, visible focus state, and a real destination or state change. Do not require double-click; a single activation must work for keyboard, touch, and pointer users.
- Under 768px, switch to the approved `JFLOWW Mobile OS`. Remove the desktop menu labels, free-positioned windows, traffic lights, and fake desktop interactions, but retain a quieter full-viewport version of the custom wallpaper as the common visual background.
- Do not draw a fake iPhone frame, fake system status bar, Dynamic Island, carrier, battery, or signal indicators. The real mobile browser and safe-area insets own that space.
- Mobile Home uses a compact 52px JFLOWW app bar with locale and appearance controls, one glass identity widget, a four-column by two-row app launcher, one small recently-opened area, and a persistent bottom glass dock. App icons map to About, Archive, Notes, Resume, Contact, LinkedIn, Instagram, and Appearance; all touch targets are at least 44px.
- The mobile dock contains only Home, the Picking Up live app, and GitHub. Picking Up remains visually central and opens externally. Dock icons compress on touch but do not magnify neighbors.
- Use `100svh` and `env(safe-area-inset-top/bottom)` so the shell works with real browser chrome. The app bar and dock stay fixed inside the shell while the page region between them scrolls independently.
- Mobile Archive becomes an ordinary stacked content browser: folder chips or rows first, followed by full-width project rows with title, year, and one-line description. No narrow desktop sidebar, dense table columns, overlapping windows, hover-only actions, or horizontal scrolling.
- Mobile Project detail is a normal full-page document using the current MDX order, 16:9 media, 24px side padding, 44px minimum touch targets, and a compact sticky back/title bar. Do not shrink the desktop window into the viewport.
- Mobile Posts index and Post detail remain the current editorial formats. Preserve search and category filtering on the index, the existing prose typography on detail pages, and the shared mobile header/footer.
- Deep links, browser back/forward, and standard routes remain available even if desktop interactions later open window overlays.

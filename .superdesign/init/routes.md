# Routes

Next.js App Router provides English routes at the root and Korean routes under `/ko`. All pages use `app/layout.tsx`; `app/[locale]/layout.tsx` adds static locale routing without visual markup.

| URL | Entry | Main UI |
| --- | --- | --- |
| `/`, `/ko` | `app/page.tsx`, `app/[locale]/page.tsx` | `ClientHome` |
| `/projects`, `/ko/projects` | project index route files | `ProjectsPage` |
| `/projects/[id]`, localized equivalent | project detail route files | `ProjectClient` |
| `/posts`, `/ko/posts` | post index route files | `PostPage` + `PostListClient` |
| `/posts/[id]`, localized equivalent | post detail route files | rendered MDX article |
| `/about`, `/ko/about` | about route files | `AboutPage` |
| `/contact`, `/ko/contact` | contact route files | `ContactPage` |

Home currently renders a profile hero followed by recent square project tiles. Projects is a sharp square image grid. Posts is a searchable, filterable text list. Post detail renders long-form MDX.

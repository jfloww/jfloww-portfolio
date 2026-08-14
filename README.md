# JFLOWW Portfolio

This is my personal portfolio and development log. I use it to show finished projects, explain how I built them, and keep track of what I learned along the way.

The desktop version uses a small operating-system style interface. The mobile version has a simpler app layout made for touch. Both versions use the same project and post content.

## About me

I'm Jay, a software engineer who works mainly with backend systems, APIs, databases, and web applications.

I enjoy learning new things and getting better through real work. When a tool can help, including an AI tool, I learn how to use it and fit it into my process. I still read the changes, test the result, and make the final decision myself.

I like working with other people. I try to share context, listen carefully, and keep communication clear. I also take time before making decisions that can affect users, data, or production. When a change has risk, I try to prepare a backup or rollback plan first.

## Featured project

### Picking Up

Picking Up is a task and routine planner that I use for my own work. It supports recurring tasks, rollover, task nesting, and desktop and mobile planning views.

I designed the product and built the Django backend, data model, authentication, tests, and deployment flow. I also built the Next.js frontend and BFF routes with Claude Code as an implementation partner, then reviewed and tested the resulting changes.

- [Live app](https://pickingup.vercel.app/)
- [GitHub repository](https://github.com/jfloww/picking-up)
- [Case study](app/projects/contents/picking-up.mdx)

## What is in this repository

- Projects are short case studies about finished work.
- Posts are development logs about decisions, problems, and changes.
- English routes live at the root and Korean routes live under `/ko`.
- MDX frontmatter is normalized through one typed content loader.
- Desktop and mobile use different layouts while sharing the same data.

## Main stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- MDX
- Vercel Analytics and Speed Insights

## Project structure

```text
app/
  components/       shared page, OS, layout, and project components
  projects/contents project case studies
  posts/contents/   development logs
  lib/content/      MDX loading, metadata, and rendering
public/
  icons/            site and social icons
  photo/            profile and project images
  resume/           public resume
```

## Run locally

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:10001`.

## Checks

```bash
npm run lint
npm run build
```

## Contact

- [GitHub](https://github.com/jfloww)
- [LinkedIn](https://www.linkedin.com/in/jfloww/)
- [Instagram](https://www.instagram.com/jaehoon_jung98/)

'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { getProjectDescription } from '@/app/lib/content/presentation';
import type { ContentMeta } from '@/app/lib/content/schema';
import { localePrefix, type SupportedLocale } from '@/app/lib/i18n';
import OSDesktopShell from './OSDesktopShell';
import OSIcon from './OSIcon';
import OSWindow from './OSWindow';

interface ArchiveDesktopProps {
  locale: SupportedLocale;
  projects: ContentMeta[];
}

const COPY = {
  en: {
    archive: 'Archive',
    documents: 'Documents',
    favorites: 'Favorites',
    items: (count: number) => `${count} items`,
    kind: 'Kind',
    name: 'Name',
    notes: 'Notes',
    projects: 'Projects',
    readme: 'README.md',
    recents: 'Recents',
    search: 'Search Projects',
    year: 'Year',
  },
  ko: {
    archive: 'Archive',
    documents: '문서',
    favorites: '즐겨찾기',
    items: (count: number) => `${count}개 항목`,
    kind: '종류',
    name: '이름',
    notes: '개발 기록',
    projects: '프로젝트',
    readme: 'README.md',
    recents: '최근 항목',
    search: '프로젝트 검색',
    year: '연도',
  },
} as const;

export default function ArchiveDesktop({ locale, projects }: ArchiveDesktopProps) {
  const prefix = localePrefix(locale);
  const copy = COPY[locale];
  const [query, setQuery] = useState('');
  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return projects;
    return projects.filter((project) => [project.title, project.techStack ?? '', getProjectDescription(project, locale)].join(' ').toLowerCase().includes(normalized));
  }, [locale, projects, query]);

  return (
    <OSDesktopShell activeApp="Archive" activeDock="archive">
      <OSWindow
        id="archive-window"
        title={copy.archive}
        closeHref={prefix || '/'}
        className="os-archive-window"
        titleAction={<span className="text-[10px] tabular-nums text-[var(--os-muted)]">{copy.items(filteredProjects.length)}</span>}
      >
        <div className="flex h-[calc(100%-40px)] min-h-0">
          <aside className="os-archive-sidebar">
            <p className="os-archive-sidebar-label">{copy.favorites}</p>
            <div className="space-y-1">
              <button type="button" disabled className="os-archive-sidebar-row opacity-55">
                <OSIcon name="clock" className="h-4 w-4 text-[var(--os-accent)]" /> {copy.recents}
              </button>
              <div className="os-archive-sidebar-row is-selected">
                <OSIcon name="archive" className="h-4 w-4 text-[var(--os-accent)]" /> {copy.archive}
              </div>
            </div>

            <p className="os-archive-sidebar-label mt-5">JFLOWW</p>
            <nav className="space-y-1" aria-label="Archive folders">
              <div className="os-archive-sidebar-row is-current">
                <OSIcon name="folder" className="h-4 w-4 text-[#2998d2]" /> {copy.projects}
              </div>
              <Link href={`${prefix}/posts`} className="os-archive-sidebar-row">
                <OSIcon name="notes" className="h-4 w-4 text-[var(--os-accent)]" /> {copy.notes}
              </Link>
              <a href="/resume/Jaehoon-Jung-resume.pdf" target="_blank" rel="noopener noreferrer" className="os-archive-sidebar-row">
                <OSIcon name="documents" className="h-4 w-4 text-[var(--os-accent)]" /> {copy.documents}
              </a>
              <Link href={`${prefix}/about`} className="os-archive-sidebar-row">
                <OSIcon name="file-text" className="h-4 w-4 text-[var(--os-accent)]" /> {copy.readme}
              </Link>
            </nav>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col bg-[var(--os-window-solid)]">
            <div className="os-archive-toolbar">
              <div className="flex min-w-0 items-center gap-2">
                <button type="button" disabled className="os-toolbar-icon" aria-label="Back unavailable">
                  <OSIcon name="chevron-left" className="h-4 w-4" />
                </button>
                <button type="button" disabled className="os-toolbar-icon" aria-label="Forward unavailable">
                  <OSIcon name="chevron-right" className="h-4 w-4" />
                </button>
                <h1 className="ml-1 truncate text-[15px] font-semibold text-[var(--os-text)]">{copy.projects}</h1>
              </div>
              <div className="flex items-center gap-2">
                <span className="os-toolbar-icon is-active" aria-hidden="true"><OSIcon name="list" className="h-4 w-4" /></span>
                <span className="os-toolbar-icon" aria-hidden="true"><OSIcon name="columns" className="h-4 w-4" /></span>
                <label className="os-archive-search">
                  <span className="sr-only">{copy.search}</span>
                  <OSIcon name="search" className="h-3.5 w-3.5" />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.search} />
                </label>
              </div>
            </div>

            <div className="os-archive-columns" aria-hidden="true">
              <span>{copy.name}</span><span>{copy.year}</span><span>{copy.kind}</span>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`${prefix}/projects/${project.id}`} className="os-archive-project-row">
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span className="os-archive-project-icon">
                      <OSIcon name={project.id === '2022-qatar-world-cup' ? 'notes' : 'grid'} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <strong className="block truncate text-[12px] font-semibold text-[var(--os-text)]">{project.title}</strong>
                      <small className="mt-0.5 block truncate text-[10px] text-[var(--os-muted)]">{getProjectDescription(project, locale)}</small>
                    </span>
                  </span>
                  <span className="text-[11px] tabular-nums text-[var(--os-muted)]">{project.date.slice(0, 4)}</span>
                  <span className="text-[11px] text-[var(--os-muted)]">{project.id === '2022-qatar-world-cup' ? 'Notebook' : 'Case Study'}</span>
                </Link>
              ))}
              {filteredProjects.length === 0 && <p className="px-5 py-12 text-center text-[12px] text-[var(--os-muted)]">No projects match this search.</p>}
            </div>

            <div className="os-archive-statusbar">
              <span>{copy.archive} › {copy.projects}</span><span>{copy.items(filteredProjects.length)}</span>
            </div>
          </div>
        </div>
      </OSWindow>
    </OSDesktopShell>
  );
}

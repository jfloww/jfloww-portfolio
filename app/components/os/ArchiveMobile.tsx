'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { getProjectDescription } from '@/app/lib/content/presentation';
import type { ContentMeta } from '@/app/lib/content/schema';
import { localePrefix, type SupportedLocale } from '@/app/lib/i18n';
import MobileOSShell from './MobileOSShell';
import OSIcon from './OSIcon';

interface ArchiveMobileProps {
  locale: SupportedLocale;
  projects: ContentMeta[];
}

const COPY = {
  en: { archive: 'Archive', documents: 'Documents', folders: 'Folders', notes: 'Notes', projects: 'Projects', readme: 'README', search: 'Search projects' },
  ko: { archive: 'Archive', documents: '문서', folders: '폴더', notes: '개발 기록', projects: '프로젝트', readme: '소개', search: '프로젝트 검색' },
} as const;

export default function ArchiveMobile({ locale, projects }: ArchiveMobileProps) {
  const prefix = localePrefix(locale);
  const copy = COPY[locale];
  const [query, setQuery] = useState('');
  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return projects;
    return projects.filter((project) => [project.title, project.techStack ?? '', getProjectDescription(project, locale)].join(' ').toLowerCase().includes(normalized));
  }, [locale, projects, query]);

  return (
    <MobileOSShell title={copy.archive} backHref={prefix || '/'}>
      <div className="mobile-os-page-content">
        <label className="mobile-os-search">
          <OSIcon name="search" className="h-4 w-4" />
          <span className="sr-only">{copy.search}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.search} />
        </label>

        <section className="mt-5" aria-labelledby="mobile-folders-title">
          <h2 id="mobile-folders-title" className="mobile-os-section-title">{copy.folders}</h2>
          <div className="mobile-os-folder-strip">
            <Link href={`${prefix}/posts`} className="mobile-os-folder-card"><span><OSIcon name="notes" className="h-5 w-5" /></span><strong>{copy.notes}</strong></Link>
            <Link href={`${prefix}/about`} className="mobile-os-folder-card"><span><OSIcon name="file-text" className="h-5 w-5" /></span><strong>{copy.readme}</strong></Link>
            <a href="/resume/Jaehoon-Jung-resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-os-folder-card"><span><OSIcon name="documents" className="h-5 w-5" /></span><strong>{copy.documents}</strong></a>
          </div>
        </section>

        <section className="mt-6" aria-labelledby="mobile-projects-title">
          <div className="flex items-center justify-between gap-4">
            <h2 id="mobile-projects-title" className="mobile-os-section-title mb-0">{copy.projects}</h2>
            <span className="text-[11px] tabular-nums text-[var(--mobile-os-muted)]">{filteredProjects.length}</span>
          </div>
          <div className="mobile-os-file-list mt-3">
            {filteredProjects.map((project) => {
              const cover = project.images?.[0];
              return (
                <Link key={project.id} href={`${prefix}/projects/${project.id}`} className="mobile-os-file-row">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[10px] border border-[var(--mobile-os-divider)] bg-white">
                    <Image src={cover?.src ?? '/temp/test1.jpg'} alt="" fill className="object-cover" sizes="48px" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block truncate text-[13px] font-semibold text-[var(--mobile-os-text)]">{project.title}</strong>
                    <span className="mt-1 block truncate text-[10px] text-[var(--mobile-os-muted)]">{project.date.slice(0, 4)} · {project.id === '2022-qatar-world-cup' ? 'Notebook' : 'Case Study'}</span>
                  </span>
                  <OSIcon name="chevron-right" className="h-4 w-4 shrink-0 text-[var(--mobile-os-muted)]" />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </MobileOSShell>
  );
}

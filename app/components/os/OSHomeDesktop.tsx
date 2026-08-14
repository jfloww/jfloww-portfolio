'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { dateFormat } from '@/app/components/functions/dateFormat';
import { getPostSummary, getProjectDescription } from '@/app/lib/content/presentation';
import type { ContentMeta } from '@/app/lib/content/schema';
import { localePrefix, type SupportedLocale } from '@/app/lib/i18n';
import OSDesktopShell from './OSDesktopShell';
import OSIcon from './OSIcon';
import OSWindow from './OSWindow';

interface OSHomeDesktopProps {
  locale: SupportedLocale;
  postList: ContentMeta[];
  projList: ContentMeta[];
}

type HomeWindowId = 'notes' | 'welcome' | 'work';

interface HomeWindowState {
  open: boolean;
  z: number;
}

const COPY = {
  en: {
    about: 'About Me',
    caseStudy: 'Case Study',
    dataNotebook: 'Data Notebook',
    featured: 'Featured Project',
    headline: ['Hi, there', 'Welcome to my page.'],
    latestNotes: 'Latest Notes',
    openFull: 'Open full page',
    projects: 'View Projects',
    role: 'Software Engineer · Backend & Full-Stack',
    selectedWork: 'Projects',
    stack: 'Main Stack',
    welcome: 'Welcome to JFLOWW',
  },
  ko: {
    about: '소개 보기',
    caseStudy: 'Case Study',
    dataNotebook: 'Data Notebook',
    featured: 'Featured Project',
    headline: ['안녕하세요,', '개발자 정재훈입니다.'],
    latestNotes: '최근 개발 기록',
    openFull: '전체 페이지 열기',
    projects: '프로젝트 보기',
    role: 'Software Engineer · Backend & Full-Stack',
    selectedWork: '프로젝트',
    stack: 'Main Stack',
    welcome: 'JFLOWW에 오신 것을 환영합니다',
  },
} as const;

export default function OSHomeDesktop({ locale, postList, projList }: OSHomeDesktopProps) {
  const prefix = localePrefix(locale);
  const copy = COPY[locale];
  const [windows, setWindows] = useState<Record<HomeWindowId, HomeWindowState>>({
    notes: { open: true, z: 2 },
    welcome: { open: true, z: 4 },
    work: { open: true, z: 3 },
  });

  const activeWindow = useMemo(() => {
    return (Object.entries(windows) as [HomeWindowId, HomeWindowState][])
      .filter(([, state]) => state.open)
      .sort(([, a], [, b]) => b.z - a.z)[0]?.[0];
  }, [windows]);

  const focusWindow = (id: HomeWindowId) => {
    setWindows((current) => {
      const highestZ = Math.max(...Object.values(current).map((window) => window.z));
      return { ...current, [id]: { open: true, z: highestZ + 1 } };
    });
  };

  const closeWindow = (id: HomeWindowId) => {
    setWindows((current) => ({ ...current, [id]: { ...current[id], open: false } }));
  };

  const labels: Record<HomeWindowId, string> = {
    notes: copy.latestNotes,
    welcome: copy.welcome,
    work: copy.selectedWork,
  };

  return (
    <OSDesktopShell
      activeApp={activeWindow ? labels[activeWindow] : 'JFLOWW'}
      activeDock="home"
      onHomeActivate={() => focusWindow('welcome')}
      windowItems={(Object.keys(labels) as HomeWindowId[]).map((id) => ({
          id,
          isOpen: windows[id].open,
          label: labels[id],
          onSelect: () => focusWindow(id),
        }))}
    >
      {windows.welcome.open && (
        <OSWindow
          id="home-welcome-window"
          title={copy.welcome}
          focused={activeWindow === 'welcome'}
          onClose={() => closeWindow('welcome')}
          onFocusWindow={() => focusWindow('welcome')}
          className="os-home-welcome-window"
          style={{ zIndex: windows.welcome.z }}
          titleAction={
            <Link href={`${prefix}/about`} className="os-window-action-link">
              {copy.openFull}
            </Link>
          }
        >
          <div className="os-home-welcome-content">
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--os-muted)]">{copy.role}</p>
              <h1 className="mt-4 text-[clamp(34px,3vw,48px)] font-semibold leading-[1.06] tracking-[-0.035em] text-[var(--os-text)]">
                {copy.headline[0]}
                <br />
                {copy.headline[1]}
              </h1>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-semibold">
                <Link href={`${prefix}/projects`} className="text-[var(--os-accent)] hover:underline hover:underline-offset-4">
                  {copy.projects}
                </Link>
                <Link href={`${prefix}/about`} className="text-[var(--os-accent)] hover:underline hover:underline-offset-4">
                  {copy.about}
                </Link>
              </div>
              <div className="mt-8 border-t border-[var(--os-divider)] pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--os-muted)]">{copy.stack}</p>
                <p className="mt-2 text-[14px] font-medium text-[var(--os-text)]">Python <span className="mx-2 text-[var(--os-muted)]">·</span> SQL <span className="mx-2 text-[var(--os-muted)]">·</span> TypeScript</p>
              </div>
            </div>
            <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border border-white/60 shadow-[0_16px_36px_rgba(6,18,30,.18)] xl:h-48 xl:w-48">
              <Image src="/photo/profile_img.png" alt="Jaehoon Jung" fill priority className="scale-[1.08] object-cover" sizes="192px" />
            </div>
          </div>
        </OSWindow>
      )}

      {windows.work.open && (
        <OSWindow
          id="home-work-window"
          title={copy.selectedWork}
          focused={activeWindow === 'work'}
          onClose={() => closeWindow('work')}
          onFocusWindow={() => focusWindow('work')}
          className="os-home-work-window"
          style={{ zIndex: windows.work.z }}
          titleAction={
            <Link href={`${prefix}/projects`} className="os-window-action-link">
              All
            </Link>
          }
        >
          <div className="divide-y divide-[var(--os-divider)] px-4 py-1">
            {projList.slice(0, 3).map((project, index) => {
              const cover = project.images?.[0];
              const isJfloww = project.id === 'jfloww-project';
              return (
                <Link
                  key={project.id}
                  href={`${prefix}/projects/${project.id}`}
                  className={`group min-h-[112px] items-center gap-4 py-4 ${index === 2 ? 'hidden min-[1440px]:flex' : 'flex'}`}
                >
                  <span
                    className={`relative h-[82px] w-32 shrink-0 overflow-hidden rounded-[6px] border border-[var(--os-divider)] ${
                      isJfloww ? 'bg-[#101820]' : 'bg-white'
                    }`}
                  >
                    <Image
                      src={cover?.src ?? '/temp/test1.jpg'}
                      alt={cover?.description ?? project.title}
                      fill
                      className={`${isJfloww ? 'object-contain p-2.5' : 'object-cover'} transition-transform duration-200 group-hover:scale-[1.03]`}
                      sizes="128px"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <small className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--os-muted)]">
                        {project.id === 'picking-up'
                          ? copy.featured
                          : project.id === '2022-qatar-world-cup'
                            ? copy.dataNotebook
                            : copy.caseStudy}
                      </small>
                      <small className="text-[10px] tabular-nums text-[var(--os-muted)]">{project.date.slice(0, 4)}</small>
                    </span>
                    <strong className="mt-1 block truncate text-[13px] font-semibold text-[var(--os-text)] group-hover:text-[var(--os-accent)]">{project.title}</strong>
                    <span className="mt-1 line-clamp-2 text-[11px] leading-4 text-[var(--os-muted)]">{getProjectDescription(project, locale)}</span>
                    {project.techStack && <span className="mt-1 block truncate text-[9px] text-[var(--os-muted)] opacity-80">{project.techStack}</span>}
                  </span>
                </Link>
              );
            })}
          </div>
        </OSWindow>
      )}

      {windows.notes.open && (
        <OSWindow
          id="home-notes-window"
          title={copy.latestNotes}
          focused={activeWindow === 'notes'}
          onClose={() => closeWindow('notes')}
          onFocusWindow={() => focusWindow('notes')}
          className="os-home-notes-window"
          style={{ zIndex: windows.notes.z }}
          titleAction={
            <Link href={`${prefix}/posts`} className="os-window-action-link">
              All
            </Link>
          }
        >
          <div className="divide-y divide-[var(--os-divider)] px-4 py-1">
            {postList.slice(0, 3).map((post) => (
              <Link key={post.id} href={`${prefix}/posts/${post.id}`} className="group grid grid-cols-[66px_1fr_16px] items-center gap-3 py-3">
                <time className="text-[10px] tabular-nums text-[var(--os-muted)]">{dateFormat(post.date)}</time>
                <span className="min-w-0">
                  <strong className="block truncate text-[12px] font-semibold text-[var(--os-text)] group-hover:text-[var(--os-accent)]">{post.title}</strong>
                  <span className="mt-0.5 block truncate text-[10px] text-[var(--os-muted)]">{getPostSummary(post, locale)}</span>
                </span>
                <OSIcon name="chevron-right" className="h-3.5 w-3.5 text-[var(--os-muted)]" />
              </Link>
            ))}
          </div>
        </OSWindow>
      )}

    </OSDesktopShell>
  );
}

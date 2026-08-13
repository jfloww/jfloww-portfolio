import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { dateFormat } from '@/app/components/functions/dateFormat';
import { localePrefix } from '@/app/lib/i18n';
import type { ContentImage } from '@/app/lib/content/schema';
import OSDesktopShell from '@/app/components/os/OSDesktopShell';
import OSIcon from '@/app/components/os/OSIcon';
import OSWindow from '@/app/components/os/OSWindow';

interface ProjectClientProps {
  cover?: ContentImage;
  id: string;
  title: string;
  date: string;
  techStack: string;
  mdxContent: ReactNode;
  locale?: string;
}

export default function ProjectClient({ cover, id, title, date, techStack, mdxContent, locale }: ProjectClientProps) {
  const prefix = localePrefix(locale);
  const projectsHref = `${prefix}/projects`;
  const preserveFullImage = id === 'jfloww-project' || cover?.src.endsWith('.svg');

  return (
    <>
      <div className="hidden w-full md:block">
        <OSDesktopShell activeApp={title} activeDock="archive">
          <OSWindow
            id="project-document-window"
            title={`${title} — Project`}
            closeHref={projectsHref}
            className="os-project-window"
            titleAction={
              id === 'picking-up' ? (
                <a href="https://pickingup.vercel.app/" target="_blank" rel="noopener noreferrer" className="os-window-action-link inline-flex items-center gap-1">
                  Live app <OSIcon name="external" className="h-3 w-3" />
                </a>
              ) : (
                <Link href={projectsHref} className="os-window-action-link">Archive</Link>
              )
            }
          >
            <div className="os-project-toolbar">
              <Link href={projectsHref} className="os-toolbar-icon" aria-label="Back to Archive">
                <OSIcon name="chevron-left" className="h-4 w-4" />
              </Link>
              <div className="flex min-w-0 items-center gap-1.5 text-[11px] text-[var(--os-muted)]">
                <span>Archive</span><OSIcon name="chevron-right" className="h-3 w-3" /><span>Projects</span><OSIcon name="chevron-right" className="h-3 w-3" /><span className="truncate font-semibold text-[var(--os-text)]">{title}</span>
              </div>
            </div>

            <div className="os-project-document-scroll">
              <article className="mx-auto w-full max-w-[760px] px-10 py-9">
                <header className="border-b border-[var(--os-divider)] pb-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--os-muted)]">Project · {date.slice(0, 4)}</p>
                  <div className="mt-2 flex items-start justify-between gap-8">
                    <div className="min-w-0">
                      <h1 className="text-[38px] font-semibold leading-tight tracking-[-0.035em] text-[var(--os-text)]">{title}</h1>
                      {techStack && <p className="mt-4 max-w-2xl text-[12px] leading-5 text-[var(--os-muted)]">{techStack}</p>}
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] bg-[var(--os-accent)] text-white shadow-[0_10px_24px_rgba(0,102,204,.2)]">
                      <OSIcon name={id === 'picking-up' ? 'list-checks' : id === '2022-qatar-world-cup' ? 'notes' : 'grid'} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-5 text-[11px] text-[var(--os-muted)]"><span><strong className="font-semibold text-[var(--os-text)]">Updated</strong> {dateFormat(date)}</span><span><strong className="font-semibold text-[var(--os-text)]">Kind</strong> {id === '2022-qatar-world-cup' ? 'Notebook' : 'Case Study'}</span></div>
                </header>

                {cover && (
                  <div className="relative mt-7 aspect-video overflow-hidden rounded-[8px] border border-[var(--os-divider)] bg-white">
                    <Image src={cover.src} alt={cover.description ?? title} fill priority className={preserveFullImage ? 'object-contain p-5' : 'object-cover'} sizes="760px" />
                  </div>
                )}

                <div
                  className="os-project-prose prose prose-base prose-gray mt-8 max-w-none dark:prose-invert
                  prose-headings:scroll-mt-20 prose-headings:font-semibold
                  prose-p:text-[var(--os-muted)] prose-p:leading-relaxed
                  prose-a:text-[var(--os-accent)] prose-a:no-underline hover:prose-a:underline
                  prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
                  prose-pre:rounded-[8px] prose-pre:border prose-pre:border-[var(--os-divider)]
                  prose-img:mx-auto prose-img:rounded-[8px] prose-img:border prose-img:border-[var(--os-divider)]"
                >
                  {mdxContent}
                </div>
              </article>
            </div>
          </OSWindow>
        </OSDesktopShell>
      </div>

      <div className="w-full px-3 py-2 md:hidden">
        <section className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[var(--divider)] pb-5">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500 dark:text-white/60 mb-2">Project</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">{title}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-white/70">
            <span className="rounded-full border border-gray-200/80 px-3 py-1 dark:border-white/10 tabular-nums">{dateFormat(date)}</span>
            {techStack && <span className="rounded-full border border-gray-200/80 px-3 py-1 dark:border-white/10">{techStack}</span>}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <article
            className="prose prose-base prose-gray dark:prose-invert max-w-none
            prose-headings:font-semibold
            prose-headings:scroll-mt-24
            prose-p:text-gray-700 dark:prose-p:text-white/75 prose-p:leading-relaxed
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-white/10
            prose-pre:bg-gray-50 prose-pre:text-gray-900 dark:prose-pre:bg-[#0b0f19] dark:prose-pre:text-gray-100
            prose-img:rounded-xl prose-img:border prose-img:border-gray-200/80 dark:prose-img:border-white/10
            prose-img:shadow-sm prose-img:mx-auto
            dark:prose-img:bg-white dark:prose-img:p-3 dark:prose-img:brightness-125 dark:prose-img:contrast-115"
          >
            {mdxContent}
          </article>
        </div>

        {/* Back */}
        <div className="mt-9 flex justify-center">
          <Link
            href={`${prefix}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full
            border border-gray-300/80 text-gray-900 hover:bg-gray-50
            dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
        </section>
      </div>
    </>
  );
}

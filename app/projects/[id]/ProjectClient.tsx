import type { ReactNode } from 'react';
import Link from 'next/link';
import ImageSlider from '@/app/components/templates/ImageSlider';
import { imageType } from '@/app/components/templates/ImageSlider';
import { dateFormat } from '@/app/components/functions/dateFormat';
import { localePrefix } from '@/app/lib/i18n';

interface ProjectClientProps {
  title: string;
  date: string;
  techStack: string;
  images: imageType[];
  mdxContent: ReactNode;
  showSlider?: boolean;
  locale?: string;
}

export default function ProjectClient({ title, date, techStack, images, mdxContent, showSlider = true, locale }: ProjectClientProps) {
  const prefix = localePrefix(locale);

  return (
    <div className="w-full px-3 py-2 md:py-3">
      <section className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col gap-4 pb-5 border-b border-gray-200/80 dark:border-white/10">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500 dark:text-white/60 mb-2">Project</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">{title}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-white/70">
            <span className="rounded-full border border-gray-200/80 px-3 py-1 dark:border-white/10 tabular-nums">{dateFormat(date)}</span>
            {techStack && <span className="rounded-full border border-gray-200/80 px-3 py-1 dark:border-white/10">{techStack}</span>}
          </div>
        </div>

        {/* Slider */}
        {showSlider && images.length > 0 && (
          <div className="mt-5 pb-6 border-b border-gray-200/80 dark:border-white/10">
            <div className="rounded-xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5">
              <ImageSlider images={images} />
            </div>
          </div>
        )}

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
  );
}

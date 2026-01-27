'use client';

import { useRouter } from 'next/navigation';
import ImageSlider from '@/app/components/templates/ImageSlider';
import { imageType } from '@/app/components/templates/ImageSlider';
import ClientMDXRemote from '../../components/templates/ClientMDXRemote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { dateFormat } from '@/app/components/functions/dateFormat';

interface ProjectClientProps {
  title: string;
  date: string;
  techStack: string;
  images: imageType[];
  mdxSource: MDXRemoteSerializeResult;
  showSlider?: boolean;
}

export default function ProjectClient({ title, date, techStack, images, mdxSource, showSlider = true }: ProjectClientProps) {
  const router = useRouter();

  return (
    <div className="w-full px-6 py-10 md:py-16">
      <section className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-gray-200/80 dark:border-white/10">
          <div className="min-w-0">
            <p className="text-sm tracking-wide text-gray-500 dark:text-white/60 mb-3">Project</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">{title}</h1>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-sm text-gray-600 dark:text-white/70 tabular-nums">{dateFormat(date)}</p>
            <p className="text-sm text-gray-600 dark:text-white/70">{techStack}</p>
          </div>
        </div>

        {/* Slider */}
        {showSlider && images.length > 0 && (
          <div className="mt-8 pb-10 border-b border-gray-200/80 dark:border-white/10">
            <div className="rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5">
              <ImageSlider {...images} />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="mt-10">
          <article
            className="prose prose-lg prose-gray dark:prose-invert max-w-none
            prose-headings:font-semibold
            prose-p:text-gray-700 dark:prose-p:text-white/75 prose-p:leading-relaxed
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-white/10
            prose-pre:bg-gray-50 prose-pre:text-gray-900 dark:prose-pre:bg-[#0b0f19] dark:prose-pre:text-gray-100
            prose-img:rounded-xl prose-img:border prose-img:border-gray-200/80 dark:prose-img:border-white/10
            prose-img:shadow-sm prose-img:mx-auto
            dark:prose-img:bg-white dark:prose-img:p-3 dark:prose-img:brightness-125 dark:prose-img:contrast-115"
          >
            <ClientMDXRemote source={mdxSource} />
          </article>
        </div>

        {/* Back */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => router.push('/projects')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full
            border border-gray-300/80 text-gray-900 hover:bg-gray-50
            dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>
      </section>
    </div>
  );
}

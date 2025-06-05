'use client';

import ImageSlider from '@/app/components/templates/ImageSlider';
import { imageType } from '@/app/components/templates/ImageSlider';
import ClientMDXRemote from '../../components/templates/ClientMDXRemote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ProjectClientProps {
  title: string;
  date: string;
  techStack: string;
  images: imageType[];
  mdxSource: MDXRemoteSerializeResult;
}

export default function ProjectClient({ title, date, techStack, images, mdxSource }: ProjectClientProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>{date}</span>
            <span>•</span>
            <span>{techStack}</span>
          </div>
        </div>

        {/* Image Slider */}
        <div className="mb-12">
          <ImageSlider {...images} />
        </div>

        {/* Content */}
        <article
          className="prose prose-lg prose-gray dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
          prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:space-y-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
          prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
          prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100"
        >
          <ClientMDXRemote source={mdxSource} />
        </article>
      </div>
    </div>
  );
}

import ProjectClient from './ProjectClient';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { getProjectDescription } from '@/app/lib/content/presentation';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { renderMdx } from '@/app/lib/content/renderMdx';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getContentStaticParams('projects');
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = await getContentById('projects', id);
  if (!entry || entry.meta.hidden || entry.meta.draft) return { title: 'Project' };

  const description = getProjectDescription(entry.meta, 'en');
  return {
    title: entry.meta.title,
    description,
    alternates: {
      canonical: `/projects/${id}`,
      languages: { 'en-US': `/projects/${id}`, 'ko-KR': `/ko/projects/${id}` },
    },
    openGraph: {
      type: 'article',
      title: entry.meta.title,
      description,
      images: entry.meta.images?.[0]?.src ? [{ url: entry.meta.images[0].src, alt: entry.meta.images[0].description ?? entry.meta.title }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const entry = await getContentById('projects', id);
  if (!entry || entry.meta.hidden || entry.meta.draft) notFound();

  const mdxContent = await renderMdx(entry.content);
  return (
    <ProjectClient
      id={entry.meta.id}
      cover={entry.meta.images?.[0]}
      title={entry.meta.title}
      date={entry.meta.date}
      techStack={entry.meta.techStack ?? ''}
      repoUrl={entry.meta.repoUrl}
      liveUrl={entry.meta.liveUrl}
      mdxContent={mdxContent}
    />
  );
}

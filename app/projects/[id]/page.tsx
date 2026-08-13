import ProjectClient from './ProjectClient';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { notFound } from 'next/navigation';
import { renderMdx } from '@/app/lib/content/renderMdx';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getContentStaticParams('projects');
}

export const dynamicParams = false;

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
      mdxContent={mdxContent}
    />
  );
}

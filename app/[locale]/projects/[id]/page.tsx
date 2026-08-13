import { notFound } from 'next/navigation';
import ProjectClient from '@/app/projects/[id]/ProjectClient';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { isSupportedLocale } from '@/app/lib/i18n';
import { renderMdx } from '@/app/lib/content/renderMdx';

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  const params = await getContentStaticParams('projects');
  return params.map((entry) => ({ locale: 'ko', id: entry.id }));
}

export const dynamicParams = false;

export default async function LocalizedProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params;
  if (!isSupportedLocale(locale)) notFound();

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
      locale={locale}
    />
  );
}

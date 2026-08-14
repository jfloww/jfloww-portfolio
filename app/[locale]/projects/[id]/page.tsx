import { notFound } from 'next/navigation';
import ProjectClient from '@/app/projects/[id]/ProjectClient';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { getProjectDescription } from '@/app/lib/content/presentation';
import { isSupportedLocale } from '@/app/lib/i18n';
import { renderMdx } from '@/app/lib/content/renderMdx';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  const params = await getContentStaticParams('projects');
  return params.map((entry) => ({ locale: 'ko', id: entry.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isSupportedLocale(locale)) return { title: 'Project' };

  const entry = await getContentById('projects', id);
  if (!entry || entry.meta.hidden || entry.meta.draft) return { title: 'Project' };

  const description = getProjectDescription(entry.meta, locale);
  return {
    title: entry.meta.title,
    description,
    alternates: {
      canonical: `/ko/projects/${id}`,
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
      repoUrl={entry.meta.repoUrl}
      liveUrl={entry.meta.liveUrl}
      mdxContent={mdxContent}
      locale={locale}
    />
  );
}

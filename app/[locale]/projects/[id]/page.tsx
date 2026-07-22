import { notFound } from 'next/navigation';
import { imageType } from '@/app/components/templates/ImageSlider';
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

  const showSlider = entry.meta.showSlider !== false;
  const mdxContent = await renderMdx(entry.content);
  const rawImages = Array.isArray(entry.meta.images) ? entry.meta.images : [];
  const imageList: imageType[] =
    rawImages.length > 0
      ? (rawImages as imageType[])
      : [
          {
            src: '/temp/test1.jpg',
            title: 'Cover',
            description: '',
          },
        ];
  return (
    <ProjectClient
      title={entry.meta.title}
      date={entry.meta.date}
      techStack={entry.meta.techStack ?? ''}
      images={imageList}
      mdxContent={mdxContent}
      showSlider={showSlider}
      locale={locale}
    />
  );
}

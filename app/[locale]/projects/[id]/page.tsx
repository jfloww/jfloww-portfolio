import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import { imageType } from '@/app/components/templates/ImageSlider';
import ProjectClient from '@/app/projects/[id]/ProjectClient';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { isSupportedLocale } from '@/app/lib/i18n';

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const params = await getContentStaticParams('projects');
  return params.flatMap((entry) => [{ locale: 'en', id: entry.id }, { locale: 'ko', id: entry.id }]);
}

export default async function LocalizedProjectPage({ params, searchParams }: ProjectPageProps) {
  const { locale, id } = await params;
  await searchParams;
  if (!isSupportedLocale(locale)) notFound();

  const entry = await getContentById('projects', id);
  if (!entry || entry.meta.hidden || entry.meta.draft) notFound();

  const showSlider = entry.meta.showSlider !== false;
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
  const mdxSource = await serialize(entry.content);

  return (
    <ProjectClient
      title={entry.meta.title}
      date={entry.meta.date}
      techStack={entry.meta.techStack ?? ''}
      images={imageList}
      mdxSource={mdxSource}
      showSlider={showSlider}
      locale={locale}
    />
  );
}

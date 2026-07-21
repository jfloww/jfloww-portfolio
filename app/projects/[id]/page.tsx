import { MDXRemote } from 'next-mdx-remote/rsc';
import { imageType } from '@/app/components/templates/ImageSlider';
import ProjectClient from './ProjectClient';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { notFound } from 'next/navigation';

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
  return (
    <ProjectClient
      title={entry.meta.title}
      date={entry.meta.date}
      techStack={entry.meta.techStack ?? ''}
      images={imageList}
      mdxContent={<MDXRemote source={entry.content} />}
      showSlider={showSlider}
    />
  );
}

// app/projects/[id]/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
// import ClientMDXRemote from '../../components/templates/ClientMDXRemote';
import { imageType } from '@/app/components/templates/ImageSlider';
import ProjectClient from './ProjectClient';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const projectsPath = path.join(process.cwd(), 'app/projects/contents');
  const files = await fs.readdir(projectsPath);
  const mdxFiles = files
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('_'))
    .map((file) => path.join(projectsPath, file));
  const entries = await Promise.all(
    mdxFiles.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const id = path.basename(filePath, '.mdx');
      return { id, hidden: data.hidden === true };
    })
  );
  return entries.filter((e) => !e.hidden).map((e) => ({ id: e.id }));
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { id } = await params;
  await searchParams;
  const projectPath = path.join(process.cwd(), 'app/projects/contents', `${id}.mdx`);
  const fileContent = await fs.readFile(projectPath, 'utf-8');
  const { content, data } = matter(fileContent);
  const showSlider = data.showSlider !== false;
  const rawImages = Array.isArray(data.images) ? data.images : [];
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
  const mdxSource = await serialize(content);

  return <ProjectClient title={data.title} date={data.date} techStack={data.techStack} images={imageList} mdxSource={mdxSource} showSlider={showSlider} />;
}

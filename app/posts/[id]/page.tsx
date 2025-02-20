// app/projects/[id]/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import ClientMDXRemote from '../../components/templates/ClientMDXRemote';
// import ImageSlider from '@/app/components/templates/ImageSlider';
// import { imageType } from '@/app/components/templates/ImageSlider';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const projectsPath = path.join(process.cwd(), 'app/projects/contents');
  const files = await fs.readdir(projectsPath);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      id: file.replace(/\.mdx$/, ''),
    }));
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { id } = await params;
  const sp = await searchParams;
  console.log(sp);
  const projectPath = path.join(process.cwd(), 'app/posts/contents', `${id}.mdx`);
  const fileContent = await fs.readFile(projectPath, 'utf-8');
  const { content, data } = matter(fileContent);
  // const imageList: imageType[] = Object.values(data.images);
  // console.log("image:", imageList);
  const mdxSource = await serialize(content);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {/* <ImageSlider {...imageList} /> */}
      <article className="prose">
        <ClientMDXRemote source={mdxSource} />
      </article>
    </div>
  );
}

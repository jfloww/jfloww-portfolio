import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { imageType } from '../templates/ImageSlider';

export interface ListMeta {
  title: string;
  date: string;
  techStack?: string;
  images?: imageType[];
  id: string;
  hidden?: boolean;
}

export async function parsePost(postPath: string) {
  const fileContent = await fs.readFile(postPath, 'utf-8');
  const { data } = matter(fileContent);
  const id = String(data.id ?? path.basename(postPath, '.mdx'));
  return { ...(data as Omit<ListMeta, 'id'>), id } as ListMeta;
}

export async function getPostPaths(basePath: string): Promise<string[]> {
  let postsPath = '';
  if (basePath === 'projects') {
    postsPath = path.join(process.cwd(), 'app/projects/contents');
  } else if (basePath === 'posts') {
    postsPath = path.join(process.cwd(), 'app/posts/contents');
  } else {
    throw new Error('Invalid basePath');
  }

  const dirents = await fs.readdir(postsPath, { withFileTypes: true });
  return dirents
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => path.join(postsPath, entry.name))
    .filter((p) => {
      const name = path.basename(p);
      return !name.startsWith('_');
    });
}

export async function getPostList(basePath: string, count: number): Promise<ListMeta[]> {
  const paths: string[] = await getPostPaths(basePath);
  const posts: ListMeta[] = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  const visible = posts.filter((post) => post.hidden !== true);
  visible.sort((a, b) => {
    const aTime = Date.parse(`${a.date.slice(0, 4)}-${a.date.slice(4, 6)}-${a.date.slice(6, 8)}`);
    const bTime = Date.parse(`${b.date.slice(0, 4)}-${b.date.slice(4, 6)}-${b.date.slice(6, 8)}`);
    const safeATime = Number.isFinite(aTime) ? aTime : 0;
    const safeBTime = Number.isFinite(bTime) ? bTime : 0;
    return safeBTime - safeATime;
  });
  return visible.slice(0, count) as ListMeta[];
}

import { sync } from 'glob';
import path from 'path';
import fs from 'fs';
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
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { data } = matter(fileContent);
  return data as ListMeta;
}

export function getPostPaths(basePath: string): string[] {
  let baseDir = '';
  if (basePath === 'projects') {
    baseDir = 'app/projects/contents';
  } else if (basePath === 'posts') {
    baseDir = 'app/posts/contents';
  } else {
    throw new Error('Invalid basePath');
  }

  const POSTS_PATH = path.join(process.cwd(), baseDir);
  const paths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return paths.filter((p) => {
    const name = path.basename(p);
    return !name.startsWith('_');
  });
}

export async function getPostList(basePath: string, count: number): Promise<ListMeta[]> {
  const paths: string[] = getPostPaths(basePath);
  const posts: ListMeta[] = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  const visible = posts.filter((post) => post.hidden !== true);
  visible.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  return visible.slice(0, count) as ListMeta[];
}

import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { ContentMeta, ContentType, normalizeContentMeta } from './schema';

const CONTENT_DIR: Record<ContentType, string> = {
  posts: path.join(process.cwd(), 'app/posts/contents'),
  projects: path.join(process.cwd(), 'app/projects/contents'),
};

interface ContentEntry {
  meta: ContentMeta;
  content: string;
}

function toTime(yyyymmdd: string) {
  const iso = `${yyyymmdd.slice(0, 4)}-${yyyymmdd.slice(4, 6)}-${yyyymmdd.slice(6, 8)}`;
  const time = Date.parse(iso);
  return Number.isFinite(time) ? time : 0;
}

export async function getContentPaths(type: ContentType): Promise<string[]> {
  const dirents = await fs.readdir(CONTENT_DIR[type], { withFileTypes: true });
  return dirents
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx') && !entry.name.startsWith('_'))
    .map((entry) => path.join(CONTENT_DIR[type], entry.name));
}

async function readEntryFromFile(filePath: string): Promise<ContentEntry> {
  const raw = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const fallbackId = path.basename(filePath, '.mdx');
  const meta = normalizeContentMeta(data as Record<string, unknown>, fallbackId);
  return { meta, content };
}

export async function getContentList(type: ContentType, limit?: number): Promise<ContentMeta[]> {
  const paths = await getContentPaths(type);
  const entries = await Promise.all(paths.map(readEntryFromFile));
  const visible = entries
    .map((entry) => entry.meta)
    .filter((meta) => meta.hidden !== true && meta.draft !== true)
    .sort((a, b) => toTime(b.date) - toTime(a.date));

  if (typeof limit === 'number') {
    return visible.slice(0, limit);
  }
  return visible;
}

export async function getContentById(type: ContentType, id: string): Promise<ContentEntry | null> {
  const filePath = path.join(CONTENT_DIR[type], `${id}.mdx`);
  try {
    return await readEntryFromFile(filePath);
  } catch {
    return null;
  }
}

export async function getContentStaticParams(type: ContentType): Promise<{ id: string }[]> {
  const list = await getContentList(type);
  return list.map((meta) => ({ id: meta.id }));
}

import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { ContentMeta, ContentType, normalizeContentMeta } from './schema';
import { SupportedLocale } from '../i18n';

const POSTS_CONTENT_DIR = path.join(process.cwd(), 'app', 'posts', 'contents');
const PROJECTS_CONTENT_DIR = path.join(process.cwd(), 'app', 'projects', 'contents');

function getContentDir(type: ContentType) {
  return type === 'posts' ? POSTS_CONTENT_DIR : PROJECTS_CONTENT_DIR;
}

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
  const contentDir = getContentDir(type);
  const dirents = await fs.readdir(contentDir, { withFileTypes: true });
  return dirents
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx') && !entry.name.startsWith('_'))
    .map((entry) => path.join(contentDir, entry.name));
}

async function readEntryFromFile(filePath: string): Promise<ContentEntry> {
  const raw = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const fallbackId = path.basename(filePath, '.mdx');
  const meta = normalizeContentMeta(data as Record<string, unknown>, fallbackId);
  return { meta, content };
}

function isVisible(meta: ContentMeta) {
  return meta.hidden !== true && meta.draft !== true;
}

function translationKey(meta: ContentMeta) {
  if (meta.translationKey) return meta.translationKey;
  return meta.id.replace(/-(en|ko)$/i, '');
}

function pickLocalizedEntry(entries: ContentEntry[], locale: SupportedLocale) {
  return entries.find((entry) => entry.meta.locale === locale) ?? entries.find((entry) => entry.meta.locale === 'en') ?? entries.find((entry) => !entry.meta.locale) ?? entries[0];
}

function groupEntriesByTranslationKey(entries: ContentEntry[]) {
  const groups = new Map<string, ContentEntry[]>();

  for (const entry of entries) {
    const key = translationKey(entry.meta);
    groups.set(key, [...(groups.get(key) ?? []), entry]);
  }

  return groups;
}

async function readVisibleEntries(type: ContentType): Promise<ContentEntry[]> {
  const paths = await getContentPaths(type);
  const entries = await Promise.all(paths.map(readEntryFromFile));
  return entries.filter((entry) => isVisible(entry.meta));
}

export async function getContentList(type: ContentType, limit?: number): Promise<ContentMeta[]> {
  const entries = await readVisibleEntries(type);
  const visible = entries.map((entry) => entry.meta).sort((a, b) => toTime(b.date) - toTime(a.date));

  if (typeof limit === 'number') {
    return visible.slice(0, limit);
  }
  return visible;
}

export async function getLocalizedContentList(type: ContentType, locale: SupportedLocale, limit?: number): Promise<ContentMeta[]> {
  const entries = await readVisibleEntries(type);
  const groups = groupEntriesByTranslationKey(entries);

  const localized = Array.from(groups.entries())
    .map(([key, group]) => ({ ...pickLocalizedEntry(group, locale).meta, id: key }))
    .sort((a, b) => toTime(b.date) - toTime(a.date));

  if (typeof limit === 'number') {
    return localized.slice(0, limit);
  }
  return localized;
}

export async function getContentById(type: ContentType, id: string): Promise<ContentEntry | null> {
  const filePath = path.join(getContentDir(type), `${id}.mdx`);
  try {
    return await readEntryFromFile(filePath);
  } catch {
    return null;
  }
}

export async function getLocalizedContentById(type: ContentType, id: string, locale: SupportedLocale): Promise<ContentEntry | null> {
  const entries = await readVisibleEntries(type);
  const exact = entries.find((entry) => entry.meta.id === id);
  const key = exact ? translationKey(exact.meta) : id.replace(/-(en|ko)$/i, '');
  const group = entries.filter((entry) => translationKey(entry.meta) === key);

  if (group.length === 0) return null;
  const selected = pickLocalizedEntry(group, locale);
  return { ...selected, meta: { ...selected.meta, id: key } };
}

export async function getContentStaticParams(type: ContentType): Promise<{ id: string }[]> {
  const list = await getContentList(type);
  return list.map((meta) => ({ id: meta.id }));
}

export async function getLocalizedContentStaticParams(type: ContentType): Promise<{ id: string }[]> {
  const entries = await readVisibleEntries(type);
  return Array.from(groupEntriesByTranslationKey(entries).keys()).map((id) => ({ id }));
}

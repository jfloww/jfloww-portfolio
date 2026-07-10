export const CONTENT_TYPES = ['posts', 'projects'] as const;
export type ContentType = (typeof CONTENT_TYPES)[number];

export interface ContentImage {
  src: string;
  title?: string;
  description?: string;
}

export interface ContentMeta {
  id: string;
  title: string;
  date: string;
  category?: string;
  tags?: string[];
  techStack?: string;
  hidden?: boolean;
  draft?: boolean;
  locale?: 'en' | 'ko';
  showSlider?: boolean;
  images?: ContentImage[];
}

function isYYYYMMDD(value: string) {
  return /^\d{8}$/.test(value);
}

export function normalizeContentMeta(input: Record<string, unknown>, fallbackId: string): ContentMeta {
  const id = typeof input.id === 'string' && input.id.trim() ? input.id : fallbackId;
  const title = typeof input.title === 'string' && input.title.trim() ? input.title : fallbackId;
  const rawDate = typeof input.date === 'string' ? input.date.trim() : '';
  const date = isYYYYMMDD(rawDate) ? rawDate : '19700101';

  const meta: ContentMeta = {
    id,
    title,
    date,
  };

  if (typeof input.techStack === 'string') meta.techStack = input.techStack;
  if (typeof input.category === 'string' && input.category.trim()) meta.category = input.category.trim();
  if (Array.isArray(input.tags)) {
    meta.tags = input.tags.filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0).map((tag) => tag.trim());
  }
  if (typeof input.hidden === 'boolean') meta.hidden = input.hidden;
  if (typeof input.draft === 'boolean') meta.draft = input.draft;
  if (input.locale === 'en' || input.locale === 'ko') meta.locale = input.locale;
  if (typeof input.showSlider === 'boolean') meta.showSlider = input.showSlider;

  if (Array.isArray(input.images)) {
    meta.images = input.images
      .filter((item): item is Record<string, unknown> => typeof item === 'object' && item !== null)
      .map((item) => ({
        src: typeof item.src === 'string' ? item.src : '',
        title: typeof item.title === 'string' ? item.title : undefined,
        description: typeof item.description === 'string' ? item.description : undefined,
      }))
      .filter((img) => img.src);
  }

  return meta;
}

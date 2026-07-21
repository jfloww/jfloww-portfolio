import { getContentList } from '@/app/lib/content/loader';
import { ContentMeta, ContentType } from '@/app/lib/content/schema';
import { getLocalizedContentList } from '@/app/lib/content/loader';
import { SupportedLocale } from '@/app/lib/i18n';

export type ListMeta = ContentMeta;

export async function getPostList(basePath: ContentType, count?: number, locale?: SupportedLocale): Promise<ListMeta[]> {
  if (locale) {
    return getLocalizedContentList(basePath, locale, count);
  }
  return getContentList(basePath, count);
}

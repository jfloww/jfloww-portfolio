import { getContentList } from '@/app/lib/content/loader';
import { ContentMeta, ContentType } from '@/app/lib/content/schema';

export type ListMeta = ContentMeta;

export async function getPostList(basePath: ContentType, count?: number): Promise<ListMeta[]> {
  return getContentList(basePath, count);
}

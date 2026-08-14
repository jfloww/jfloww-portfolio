import type { MetadataRoute } from 'next';
import { getContentList, getLocalizedContentStaticParams } from './lib/content/loader';
import { getSiteUrl } from './lib/site';

function contentDate(value: string) {
  const year = Number(value.slice(0, 4));
  const month = Number(value.slice(4, 6)) - 1;
  const day = Number(value.slice(6, 8));
  return new Date(Date.UTC(year, month, day));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const [projects, postParams] = await Promise.all([getContentList('projects'), getLocalizedContentStaticParams('posts')]);
  const staticRoutes = ['', '/about', '/projects', '/posts', '/contact'];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) => [
    { url: `${baseUrl}${route}`, changeFrequency: 'monthly' as const, priority: route === '' ? 1 : 0.7 },
    { url: `${baseUrl}/ko${route}`, changeFrequency: 'monthly' as const, priority: route === '' ? 0.9 : 0.6 },
  ]);

  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((project) => [
    { url: `${baseUrl}/projects/${project.id}`, lastModified: contentDate(project.date), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ko/projects/${project.id}`, lastModified: contentDate(project.date), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]);

  const postEntries: MetadataRoute.Sitemap = postParams.flatMap(({ id }) => [
    { url: `${baseUrl}/posts/${id}`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/ko/posts/${id}`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ]);

  return [...staticEntries, ...projectEntries, ...postEntries];
}

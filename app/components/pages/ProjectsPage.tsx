import Image from 'next/image';
import Link from 'next/link';
import { getPostList } from '../functions/importList';
import { localePrefix } from '@/app/lib/i18n';
import type { SupportedLocale } from '@/app/lib/i18n';

interface ProjectsPageProps {
  locale?: SupportedLocale;
}

export default async function ProjectsPage({ locale }: ProjectsPageProps) {
  const postList = await getPostList('projects', undefined, locale);
  const prefix = localePrefix(locale);
  return (
    <div className="w-full px-3 py-2 md:py-3">
      <section className="mx-auto w-full max-w-4xl">
        <div className="flex items-baseline justify-between gap-6 border-b border-gray-200/80 pb-4 dark:border-white/10">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Projects</h1>
          <p className="text-xs text-gray-500 dark:text-white/60">{postList.length} selected work</p>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {postList.map((post) => {
            const cover = post.images?.[0]?.src ?? '/temp/test1.jpg';
            return (
              <Link
                href={`${prefix}/projects/${post.id}`}
                key={post.id}
                aria-label={`View ${post.title} project`}
                className="group relative aspect-square overflow-hidden bg-gray-100 dark:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:focus-visible:outline-white"
              >
                <Image
                  src={cover}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 767px) 50vw, (max-width: 1024px) 33vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-75 transition-opacity md:opacity-0 md:group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <h2 className="truncate text-sm font-medium leading-snug">{post.title}</h2>
                  <p className="mt-0.5 text-[11px] text-white/75">{post.date.slice(0, 4)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { getPostList } from '../functions/importList';
import { localePrefix } from '@/app/lib/i18n';
import { dateFormat } from '../functions/dateFormat';

interface ProjectsPageProps {
  locale?: string;
}

export default async function ProjectsPage({ locale }: ProjectsPageProps) {
  const postList = await getPostList('projects', 5);
  const prefix = localePrefix(locale);
  return (
    <div className="w-full px-3 py-3 md:py-3">
      <section className="mx-auto w-full max-w-5xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">Projects</h1>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {postList.map((post) => {
            const cover = post.images?.[0]?.src ?? '/temp/test1.jpg';
            return (
              <Link
                href={`${prefix}/projects/${post.id}`}
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 dark:bg-white/5">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">{post.title}</h2>
                    <p className="text-xs text-gray-500 dark:text-white/60 tabular-nums shrink-0 pt-1">{dateFormat(post.date)}</p>
                  </div>
                  {post.techStack && <p className="mt-2 text-xs text-gray-600 dark:text-white/70 uppercase tracking-wide">{post.techStack}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

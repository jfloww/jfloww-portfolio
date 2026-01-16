import Image from 'next/image';
import Link from 'next/link';
import { getPostList } from '../functions/importList';

export default async function ProjectsPage() {
  const postList = await getPostList('projects', 5);
  return (
    <div className="w-full px-6 py-10 md:py-16">
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
                href={`/projects/${post.id}`}
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-50 dark:bg-white/5">
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-base font-medium text-gray-900 dark:text-white leading-snug">{post.title}</h2>
                    <p className="text-xs text-gray-500 dark:text-white/60 tabular-nums shrink-0 pt-1">
                      {`${post.date.substring(0, 4)}-${post.date.substring(4, 6)}-${post.date.substring(6, 8)}`}
                    </p>
                  </div>
                  {post.techStack && <p className="mt-2 text-sm text-gray-600 dark:text-white/70 line-clamp-2">{post.techStack}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { localePrefix } from '@/app/lib/i18n';
import { dateFormat } from '../functions/dateFormat';
import type { ContentMeta } from '@/app/lib/content/schema';

interface ClientHomeProps {
  locale?: string;
  projList: ContentMeta[];
}

export default function ClientHome({ projList, locale }: ClientHomeProps) {
  const prefix = localePrefix(locale);
  return (
    <div className="w-full px-3 py-3 md:py-3">
      {/* Hero (minimal / Apple-ish) */}
      <section className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-gray-200/70 dark:border-white/15 bg-gray-50 dark:bg-white/5 shrink-0">
            <Image src="/photo/profile_img.png" alt="Profile" fill className="object-cover" priority />
          </div>

          <div className="w-full text-center md:text-left">
            <p className="text-sm tracking-wide text-gray-500 dark:text-white/60 mb-3">Software Engineer</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
              Hi, there
              <br />
              Welcome to my page.
            </h1>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href={`${prefix}/projects`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href={`${prefix}/about`}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-gray-300/80 text-gray-900 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl mt-14 md:mt-16">
        <div className="flex items-end justify-between gap-6 mb-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Projects</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-white/60">A few things I’ve built recently.</p>
          </div>
          <Link
            href={`${prefix}/projects`}
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
          >
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {projList.map((proj) => {
            const cover = proj.images?.[0]?.src ?? '/temp/test1.jpg';
            return (
              <Link
                key={proj.id}
                href={`${prefix}/projects/${proj.id}`}
                className="group rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 dark:bg-white/5">
                  <Image
                    src={cover}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />

                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{proj.title}</p>
                        {proj.techStack && <p className="mt-1 text-[11px] uppercase tracking-wide text-white/80 truncate">{proj.techStack}</p>}
                      </div>
                      <p className="text-[11px] text-white/70 tabular-nums shrink-0">{dateFormat(proj.date)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

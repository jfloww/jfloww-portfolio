import Link from 'next/link';
import Image from 'next/image';
import type { imageType } from './ImageSlider';

interface ClientHomeProps {
  projList: {
    id: string;
    title: string;
    date: string;
    techStack?: string;
    images?: imageType[];
  }[];
}

function formatDate(date: string) {
  return `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;
}

export default function ClientHome({ projList }: ClientHomeProps) {
  return (
    <div className="w-full px-6 py-10 md:py-16">
      {/* Hero (minimal / Apple-ish) */}
      <section className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-gray-200/70 dark:border-white/15 bg-gray-50 dark:bg-white/5 shrink-0">
            <Image src="/photo/profile_img.png" alt="Profile" fill className="object-cover" priority />
          </div>

          <div className="w-full text-center md:text-left">
            <p className="text-sm tracking-wide text-gray-500 dark:text-white/60 mb-3">Software Engineer</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">Hi, I’m Jay Jung.</h1>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/about"
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
          <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors">
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projList.map((proj) => {
            const cover = proj.images?.[0]?.src ?? '/temp/test1.jpg';
            return (
              <Link
                key={proj.id}
                href={`/projects/${proj.id}`}
                className="group rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-50 dark:bg-white/5">
                  <Image src={cover} alt={proj.title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                  {/* stack only */}
                  {proj.techStack && (
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="inline-flex max-w-full rounded-full px-3 py-1 text-xs font-medium bg-white/90 text-gray-900 backdrop-blur dark:bg-black/40 dark:text-white border border-black/5 dark:border-white/10">
                        <span className="truncate">{proj.techStack}</span>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

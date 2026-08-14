import Image from 'next/image';
import Link from 'next/link';
import type { ContentMeta } from '@/app/lib/content/schema';

interface ProjectTileProps {
  href: string;
  project: ContentMeta;
  description?: string;
  priority?: boolean;
}

export default function ProjectTile({ href, project, description, priority = false }: ProjectTileProps) {
  const cover = project.images?.[0];
  const preserveFullImage = project.id === 'jfloww-project';

  return (
    <article className="group min-w-0">
      <Link
        href={href}
        aria-label={`View ${project.title} project`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        <div
          className={`relative aspect-video w-full overflow-hidden ring-1 ring-inset ring-black/5 dark:ring-white/10 ${
            preserveFullImage ? 'bg-[#101820]' : 'bg-white dark:bg-white/5'
          }`}
        >
          <Image
            src={cover?.src ?? '/temp/test1.jpg'}
            alt={cover?.description ?? project.title}
            fill
            priority={priority}
            className={`${preserveFullImage ? 'object-contain p-[8%]' : 'object-cover'} transition-transform duration-300 group-hover:scale-[1.02]`}
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(50vw - 48px), 528px"
          />
        </div>

        <div className="mt-5">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold leading-snug tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
              {project.title}
            </h2>
            <span className="shrink-0 text-xs tabular-nums text-[var(--muted)]">{project.date.slice(0, 4)}</span>
          </div>
          {description && <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{description}</p>}
          {project.techStack && <p className="mt-3 text-xs leading-relaxed text-[var(--muted)] opacity-80">{project.techStack}</p>}
        </div>
      </Link>
    </article>
  );
}

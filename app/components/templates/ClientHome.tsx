import Image from 'next/image';
import Link from 'next/link';
import { dateFormat } from '@/app/components/functions/dateFormat';
import PageShell from '@/app/components/layout/PageShell';
import ProjectTile from '@/app/components/projects/ProjectTile';
import { localePrefix, SupportedLocale } from '@/app/lib/i18n';
import { getPostSummary, getProjectDescription } from '@/app/lib/content/presentation';
import type { ContentMeta } from '@/app/lib/content/schema';

interface ClientHomeProps {
  locale?: SupportedLocale;
  projList: ContentMeta[];
  postList: ContentMeta[];
}

const HOME_COPY = {
  en: {
    role: 'Full Stack Software Developer',
    headline: ['Hi, there', 'Welcome to my page.'],
    stackLabel: 'Main Stack',
    stack: ['Python', 'SQL', 'TypeScript'],
    projectsCta: 'View Projects',
    aboutCta: 'About Me',
    projectsTitle: 'Projects',
    projectsDescription: 'A few things I’ve built recently.',
    seeAllProjects: 'See all projects →',
    notesTitle: 'Development Notes',
    seeAllPosts: 'See all posts →',
    contact: 'Send me a message and I’ll get back to you as soon as possible.',
    contactCta: 'Get in touch',
  },
  ko: {
    role: 'Full Stack Software Developer',
    headline: ['안녕하세요,', '개발자 정재훈입니다.'],
    stackLabel: 'Main Stack',
    stack: ['Python', 'SQL', 'TypeScript'],
    projectsCta: 'Projects',
    aboutCta: '소개 보기',
    projectsTitle: 'Projects',
    projectsDescription: '최근에 만들고 기록한 작업들입니다.',
    seeAllProjects: '전체 프로젝트 보기 →',
    notesTitle: '개발 기록',
    seeAllPosts: '전체 포스트 보기 →',
    contact: '메시지를 남겨주시면 확인 후 답변드리겠습니다.',
    contactCta: '연락하기',
  },
} satisfies Record<SupportedLocale, Record<string, string | string[]>>;

export default function ClientHome({ projList, postList, locale }: ClientHomeProps) {
  const currentLocale = locale ?? 'en';
  const prefix = localePrefix(currentLocale);
  const copy = HOME_COPY[currentLocale];

  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)]">
      <section className="py-12 md:py-20">
        <PageShell>
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
            <div className="max-w-3xl">
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{copy.role}</p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-[52px]">
                {copy.headline[0]}
                <br />
                {copy.headline[1]}
              </h1>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{copy.stackLabel}</p>
                <p className="mt-2 text-lg font-medium leading-relaxed text-[var(--foreground)]">
                  {copy.stack.map((item, index) => (
                    <span key={item}>
                      {index > 0 && <span className="mx-2 text-[var(--accent)]">·</span>}
                      {item}
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px] font-medium">
                <Link href={`${prefix}/projects`} className="text-[var(--accent)] hover:underline hover:underline-offset-4">
                  {copy.projectsCta}
                </Link>
                <Link href={`${prefix}/about`} className="text-[var(--accent)] hover:underline hover:underline-offset-4">
                  {copy.aboutCta}
                </Link>
              </div>
            </div>

            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-black/5 md:h-40 md:w-40 lg:h-44 lg:w-44 dark:ring-white/10">
              <Image
                src="/photo/profile_img.png"
                alt="Jaehoon Jung"
                fill
                priority
                className="scale-[1.08] object-cover"
                sizes="(min-width: 1024px) 176px, (min-width: 768px) 160px, 128px"
              />
            </div>
          </div>
        </PageShell>
      </section>

      <PageShell>
        <div className="h-px bg-[var(--divider)]" aria-hidden="true" />
      </PageShell>

      <section className="py-12 md:py-20">
        <PageShell>
          <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[22px] font-semibold tracking-tight">{copy.projectsTitle}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{copy.projectsDescription}</p>
            </div>
            <Link href={`${prefix}/projects`} className="shrink-0 text-sm font-medium text-[var(--accent)] hover:underline hover:underline-offset-4">
              {copy.seeAllProjects}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {projList.map((project, index) => (
              <ProjectTile
                key={project.id}
                href={`${prefix}/projects/${project.id}`}
                project={project}
                description={getProjectDescription(project, currentLocale)}
                priority={index === 0}
              />
            ))}
          </div>
        </PageShell>
      </section>

      <PageShell>
        <div className="h-px bg-[var(--divider)]" aria-hidden="true" />
      </PageShell>

      <section className="py-12 md:py-20">
        <PageShell>
          <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h2 className="text-[22px] font-semibold tracking-tight">{copy.notesTitle}</h2>
            <Link href={`${prefix}/posts`} className="shrink-0 text-sm font-medium text-[var(--accent)] hover:underline hover:underline-offset-4">
              {copy.seeAllPosts}
            </Link>
          </div>
          <div className="divide-y divide-[var(--divider)]">
            {postList.map((post) => (
              <article key={post.id}>
                <Link href={`${prefix}/posts/${post.id}`} className="group grid gap-3 py-7 md:grid-cols-[140px_1fr_120px] md:gap-12">
                  <time className="pt-1 text-[13px] tabular-nums text-[var(--muted)]">{dateFormat(post.date)}</time>
                  <div>
                    <h3 className="text-[17px] font-semibold transition-colors group-hover:text-[var(--accent)]">{post.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--muted)]">{getPostSummary(post, currentLocale)}</p>
                  </div>
                  {post.category && (
                    <span className="pt-2 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] md:text-right">
                      {post.category}
                    </span>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      <PageShell>
        <div className="h-px bg-[var(--divider)]" aria-hidden="true" />
      </PageShell>

      <section className="py-12">
        <PageShell className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">{copy.contact}</p>
          <Link href={`${prefix}/contact`} className="shrink-0 text-sm font-medium text-[var(--accent)] hover:underline hover:underline-offset-4">
            {copy.contactCta} →
          </Link>
        </PageShell>
      </section>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { dateFormat } from '@/app/components/functions/dateFormat';
import { getPostSummary } from '@/app/lib/content/presentation';
import type { ContentMeta } from '@/app/lib/content/schema';
import { localePrefix, type SupportedLocale } from '@/app/lib/i18n';
import MobileOSShell, { toggleOSTheme, useOSTheme } from './MobileOSShell';
import OSIcon, { type OSIconName } from './OSIcon';

interface MobileOSHomeProps {
  locale: SupportedLocale;
  postList: ContentMeta[];
  projList: ContentMeta[];
}

const COPY = {
  en: {
    apps: 'Apps',
    archive: 'Archive',
    appearance: 'Appearance',
    contact: 'Contact',
    greeting: 'Hi, I’m Jay.',
    latestNote: 'Latest note',
    notes: 'Notes',
    recent: 'Recently opened',
    resume: 'Resume',
    role: 'Full Stack Software Developer',
    about: 'About',
  },
  ko: {
    apps: '앱',
    archive: '프로젝트',
    appearance: '화면 모드',
    contact: '연락하기',
    greeting: '안녕하세요, 재훈입니다.',
    latestNote: '최근 기록',
    notes: '개발 기록',
    recent: '최근에 연 항목',
    resume: '이력서',
    role: 'Full Stack Software Developer',
    about: '소개',
  },
} as const;

interface AppTileProps {
  external?: boolean;
  href?: string;
  icon?: OSIconName;
  image?: string;
  label: string;
  onClick?: () => void;
  tone: string;
}

function AppTile({ external, href, icon, image, label, onClick, tone }: AppTileProps) {
  const content = (
    <>
      <span className={`mobile-os-app-icon mobile-os-app-${tone}`}>
        {image ? <Image src={image} alt="" width={29} height={29} className="h-[29px] w-[29px]" /> : icon ? <OSIcon name={icon} className="h-7 w-7" /> : null}
      </span>
      <span className="mobile-os-app-label">{label}</span>
    </>
  );

  if (onClick) return <button type="button" onClick={onClick} className="mobile-os-app">{content}</button>;
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className="mobile-os-app">{content}</a>;
  return <Link href={href ?? '/'} className="mobile-os-app">{content}</Link>;
}

export default function MobileOSHome({ locale, postList, projList }: MobileOSHomeProps) {
  const prefix = localePrefix(locale);
  const copy = COPY[locale];
  const darkMode = useOSTheme();
  const project = projList[0];
  const post = postList[0];
  const cover = project?.images?.[0];

  return (
    <MobileOSShell home activeHome>
      <div className="mobile-os-home-content">
        <section className="mobile-os-profile-widget">
          <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border border-white/60 shadow-[0_12px_28px_rgba(8,24,40,.2)]">
            <Image src="/photo/profile_img.png" alt="Jaehoon Jung" fill priority className="scale-[1.08] object-cover" sizes="76px" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--mobile-os-muted)]">JFLOWW</p>
            <h1 className="mt-1.5 text-[23px] font-semibold leading-tight tracking-[-0.035em] text-[var(--mobile-os-text)]">{copy.greeting}</h1>
            <p className="mt-1.5 text-[12px] text-[var(--mobile-os-muted)]">{copy.role}</p>
          </div>
        </section>

        <section aria-labelledby="mobile-apps-title">
          <h2 id="mobile-apps-title" className="mobile-os-section-title">{copy.apps}</h2>
          <div className="mobile-os-app-grid">
            <AppTile href={`${prefix}/about`} icon="user" label={copy.about} tone="about" />
            <AppTile href={`${prefix}/projects`} icon="archive" label={copy.archive} tone="archive" />
            <AppTile href={`${prefix}/posts`} icon="notes" label={copy.notes} tone="notes" />
            <AppTile href="/resume/Jaehoon-Jung-resume.pdf" external icon="file-user" label={copy.resume} tone="resume" />
            <AppTile href={`${prefix}/contact`} icon="mail" label={copy.contact} tone="contact" />
            <AppTile href="https://www.linkedin.com/in/jfloww/" external image="/icons/linkedin.svg" label="LinkedIn" tone="linkedin" />
            <AppTile href="https://www.instagram.com/jaehoon_jung98/" external image="/icons/insta.svg" label="Instagram" tone="instagram" />
            <AppTile onClick={toggleOSTheme} icon={darkMode ? 'moon' : 'sun'} label={copy.appearance} tone="appearance" />
          </div>
        </section>

        {(project || post) && (
          <section aria-labelledby="mobile-recent-title">
            <h2 id="mobile-recent-title" className="mobile-os-section-title">{copy.recent}</h2>
            <div className="mobile-os-recent-grid">
              {project && (
                <Link href={`${prefix}/projects/${project.id}`} className="mobile-os-recent-card mobile-os-recent-project">
                  <span className="relative block h-[74px] overflow-hidden rounded-[10px] bg-black/10">
                    <Image src={cover?.src ?? '/temp/test1.jpg'} alt="" fill className="object-cover" sizes="160px" />
                  </span>
                  <span className="mt-2 block truncate text-[12px] font-semibold text-[var(--mobile-os-text)]">{project.title}</span>
                  <span className="mt-0.5 block text-[10px] text-[var(--mobile-os-muted)]">Project · {project.date.slice(0, 4)}</span>
                </Link>
              )}
              {post && (
                <Link href={`${prefix}/posts/${post.id}`} className="mobile-os-recent-card mobile-os-recent-note">
                  <span className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--mobile-os-muted)]">
                    {copy.latestNote}<OSIcon name="chevron-right" className="h-3.5 w-3.5" />
                  </span>
                  <strong className="mt-3 line-clamp-2 text-[13px] font-semibold leading-[1.35] text-[var(--mobile-os-text)]">{post.title}</strong>
                  <span className="mt-2 line-clamp-2 text-[10px] leading-4 text-[var(--mobile-os-muted)]">{getPostSummary(post, locale)}</span>
                  <time className="mt-3 block text-[9px] tabular-nums text-[var(--mobile-os-muted)]">{dateFormat(post.date)}</time>
                </Link>
              )}
            </div>
          </section>
        )}
      </div>
    </MobileOSShell>
  );
}

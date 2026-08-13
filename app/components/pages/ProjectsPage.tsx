import { getPostList } from '../functions/importList';
import PageHeader from '../layout/PageHeader';
import PageShell from '../layout/PageShell';
import ProjectTile from '../projects/ProjectTile';
import { getProjectDescription } from '@/app/lib/content/presentation';
import { localePrefix } from '@/app/lib/i18n';
import type { SupportedLocale } from '@/app/lib/i18n';
import ArchiveDesktop from '@/app/components/os/ArchiveDesktop';

interface ProjectsPageProps {
  locale?: SupportedLocale;
}

const COPY = {
  en: {
    description: 'A selection of applications, experiments, and technical work.',
    count: (count: number) => `${count} selected work`,
  },
  ko: {
    description: '직접 만들고 기록한 애플리케이션과 기술 작업입니다.',
    count: (count: number) => `프로젝트 ${count}개`,
  },
};

export default async function ProjectsPage({ locale }: ProjectsPageProps) {
  const currentLocale = locale ?? 'en';
  const projects = await getPostList('projects', undefined, currentLocale);
  const prefix = localePrefix(currentLocale);
  const copy = COPY[currentLocale];

  return (
    <>
      <div className="hidden w-full md:block">
        <ArchiveDesktop projects={projects} locale={currentLocale} />
      </div>
      <div className="w-full bg-[var(--background)] md:hidden">
        <PageShell>
          <PageHeader eyebrow="Portfolio" title="Projects" description={copy.description} aside={copy.count(projects.length)} />

          <section className="grid grid-cols-1 gap-x-8 gap-y-16 py-14 md:grid-cols-2 md:py-20">
            {projects.map((project, index) => (
              <ProjectTile
                key={project.id}
                href={`${prefix}/projects/${project.id}`}
                project={project}
                description={getProjectDescription(project, currentLocale)}
                priority={index < 2}
              />
            ))}
          </section>
        </PageShell>
      </div>
    </>
  );
}

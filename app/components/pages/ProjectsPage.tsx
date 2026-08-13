import { getPostList } from '../functions/importList';
import type { SupportedLocale } from '@/app/lib/i18n';
import ArchiveDesktop from '@/app/components/os/ArchiveDesktop';
import ArchiveMobile from '@/app/components/os/ArchiveMobile';

interface ProjectsPageProps {
  locale?: SupportedLocale;
}

export default async function ProjectsPage({ locale }: ProjectsPageProps) {
  const currentLocale = locale ?? 'en';
  const projects = await getPostList('projects', undefined, currentLocale);

  return (
    <>
      <div className="hidden w-full md:block">
        <ArchiveDesktop projects={projects} locale={currentLocale} />
      </div>
      <ArchiveMobile projects={projects} locale={currentLocale} />
    </>
  );
}

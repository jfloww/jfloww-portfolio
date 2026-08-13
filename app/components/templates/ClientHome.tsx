import type { ContentMeta } from '@/app/lib/content/schema';
import type { SupportedLocale } from '@/app/lib/i18n';
import MobileOSHome from '@/app/components/os/MobileOSHome';
import OSHomeDesktop from '@/app/components/os/OSHomeDesktop';

interface ClientHomeProps {
  locale?: SupportedLocale;
  projList: ContentMeta[];
  postList: ContentMeta[];
}

export default function ClientHome({ projList, postList, locale }: ClientHomeProps) {
  const currentLocale = locale ?? 'en';

  return (
    <>
      <div className="hidden w-full md:block">
        <OSHomeDesktop locale={currentLocale} projList={projList} postList={postList} />
      </div>
      <MobileOSHome locale={currentLocale} projList={projList} postList={postList} />
    </>
  );
}

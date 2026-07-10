import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import ClientMDXRemote from '@/app/components/templates/ClientMDXRemote';
import { getContentById, getContentStaticParams } from '@/app/lib/content/loader';
import { dateFormat } from '@/app/components/functions/dateFormat';
import { isSupportedLocale } from '@/app/lib/i18n';

interface PostPageProps {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const params = await getContentStaticParams('posts');
  return params.flatMap((entry) => [
    { locale: 'en', id: entry.id },
    { locale: 'ko', id: entry.id },
  ]);
}

export default async function LocalizedPostDetailPage({ params, searchParams }: PostPageProps) {
  const { locale, id } = await params;
  await searchParams;
  if (!isSupportedLocale(locale)) notFound();

  const entry = await getContentById('posts', id);
  if (!entry || entry.meta.hidden || entry.meta.draft) notFound();

  const mdxSource = await serialize(entry.content);

  return (
    <div className="w-full px-3 py-3 md:py-3">
      <section className="mx-auto w-full max-w-5xl">
        <div className="pb-8 border-b border-gray-200/80 dark:border-white/10">
          <p className="text-sm tracking-wide text-gray-500 dark:text-white/60 mb-3">Post</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">{entry.meta.title}</h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-white/70">{dateFormat(entry.meta.date)}</p>
        </div>

        <article
          className="mt-8 prose prose-base prose-gray dark:prose-invert max-w-none
          prose-headings:font-semibold prose-headings:mt-6 prose-headings:mb-2
          prose-p:my-2 prose-p:text-gray-700 dark:prose-p:text-white/75 prose-p:leading-relaxed
          prose-ul:my-2 prose-ol:my-2 prose-li:my-1"
        >
          <ClientMDXRemote source={mdxSource} />
        </article>
      </section>
    </div>
  );
}

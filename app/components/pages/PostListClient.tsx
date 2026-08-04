'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { dateFormat } from '../functions/dateFormat';
import type { ListMeta } from '../functions/importList';
import { getPostSummary } from '@/app/lib/content/presentation';
import type { SupportedLocale } from '@/app/lib/i18n';

interface PostListClientProps {
  posts: ListMeta[];
  prefix: string;
  locale: SupportedLocale;
}

const COPY = {
  en: {
    search: 'Search by title, category, or tag',
    all: 'All',
    empty: 'No posts match this search.',
  },
  ko: {
    search: '제목, 카테고리, 태그 검색',
    all: '전체',
    empty: '검색 조건에 맞는 글이 없습니다.',
  },
};

export default function PostListClient({ posts, prefix, locale }: PostListClientProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const copy = COPY[locale];

  const categories = useMemo(() => {
    const values = new Set(posts.map((post) => post.category).filter((category): category is string => Boolean(category)));
    return ['All', ...Array.from(values).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const searchableText = [post.title, post.techStack ?? '', post.category ?? '', ...(post.tags ?? [])].join(' ').toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [posts, query, activeCategory]);

  return (
    <section className="py-10 md:py-14">
      <div className="flex flex-col gap-5 border-b border-[var(--divider)] pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Filter posts by category">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border-b-2 pb-2 text-sm font-medium transition-colors ${
                  active ? 'border-[var(--accent)] text-[var(--foreground)]' : 'border-transparent text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {category === 'All' ? copy.all : category}
              </button>
            );
          })}
        </div>

        <label className="w-full lg:w-[360px]">
          <span className="sr-only">{copy.search}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.search}
            className="w-full rounded-[4px] border border-[var(--divider)] bg-transparent px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
          />
        </label>
      </div>

      <div className="divide-y divide-[var(--divider)] border-b border-[var(--divider)]">
        {filtered.map((post) => (
          <article key={post.id}>
            <Link href={`${prefix}/posts/${post.id}`} className="group grid gap-3 py-8 md:grid-cols-[140px_1fr_120px] md:gap-12">
              <time className="pt-1 text-[13px] tabular-nums text-[var(--muted)]">{dateFormat(post.date)}</time>
              <div className="min-w-0">
                <h2 className="text-[17px] font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] md:text-lg">
                  {post.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{getPostSummary(post, locale)}</p>
                {post.techStack && <p className="mt-3 text-xs text-[var(--muted)] opacity-75">{post.techStack}</p>}
              </div>
              {post.category && (
                <span className="pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] md:text-right">{post.category}</span>
              )}
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && <p className="py-12 text-sm text-[var(--muted)]">{copy.empty}</p>}
    </section>
  );
}

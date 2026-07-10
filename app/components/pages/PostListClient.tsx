'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { dateFormat } from '../functions/dateFormat';
import { ListMeta } from '../functions/importList';

interface PostListClientProps {
  posts: ListMeta[];
  prefix: string;
}

export default function PostListClient({ posts, prefix }: PostListClientProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => {
      if (post.category) set.add(post.category);
    });
    return ['All', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchCategory = activeCategory === 'All' || post.category === activeCategory;
      const haystack = [post.title, post.techStack ?? '', post.category ?? '', ...(post.tags ?? [])].join(' ').toLowerCase();
      const matchQuery = !q || haystack.includes(q);
      return matchCategory && matchQuery;
    });
  }, [posts, query, activeCategory]);

  return (
    <>
      <div className="pb-8 border-b border-gray-200/80 dark:border-white/10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">Posts</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-white/70">Development logs, decisions, and implementation notes.</p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, category, tag..."
              className="w-full rounded-xl border border-gray-300/80 dark:border-white/15 bg-white/80 dark:bg-black/20 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <div className="mt-3 flex flex-wrap justify-start lg:justify-end gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-3 py-1.5 text-xs border transition-colors ${
                    activeCategory === category
                      ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white'
                      : 'border-gray-300/80 text-gray-700 dark:border-white/20 dark:text-white/75'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 divide-y divide-gray-200/80 dark:divide-white/10">
        {filtered.map((post) => (
          <Link href={`${prefix}/posts/${post.id}`} key={post.id} className="block py-5 group">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  {post.category && <span className="uppercase tracking-wide">{post.category}</span>}
                  {post.techStack && <span className="uppercase tracking-wide">{post.techStack}</span>}
                  {(post.tags ?? []).slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-gray-300/70 dark:border-white/20 px-2 py-0.5 lowercase">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 tabular-nums shrink-0 pt-1">{dateFormat(post.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

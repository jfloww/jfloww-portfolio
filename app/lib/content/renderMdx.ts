import type { ReactNode } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

/**
 * `next-mdx-remote/rsc` creates the compiled component with a React runtime
 * that differs from Next.js 16's development runtime. Executing the compiled
 * MDX function with the active JSX runtime avoids crossing that boundary.
 */
export async function renderMdx(source: string): Promise<ReactNode> {
  // The third argument removes the MDXProvider dependency, which is not
  // available when this server utility executes the compiled function.
  const serializeForRsc = serialize as unknown as (source: string, options: object, rsc: boolean) => ReturnType<typeof serialize>;
  const { compiledSource, frontmatter, scope } = await serializeForRsc(
    source,
    { mdxOptions: { remarkPlugins: [remarkGfm] } },
    true,
  );
  const runtime =
    process.env.NODE_ENV === 'production' ? await import('react/jsx-runtime') : await import('react/jsx-dev-runtime');
  const fullScope = { opts: runtime, frontmatter, ...(scope as Record<string, unknown>) };
  const Content = Reflect.construct(Function, [...Object.keys(fullScope), compiledSource])(...Object.values(fullScope)).default;

  return Content({ components: {} });
}

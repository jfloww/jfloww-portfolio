import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  compact?: boolean;
}

export default function PageHeader({ eyebrow, title, description, aside, compact = false }: PageHeaderProps) {
  return (
    <header className={`border-b border-[var(--divider)] ${compact ? 'py-7 md:py-9' : 'py-10 md:py-14'}`}>
      <div className={`flex flex-col md:flex-row md:items-end md:justify-between ${compact ? 'gap-5' : 'gap-8'}`}>
        <div className="max-w-3xl">
          <p className={`${compact ? 'mb-3' : 'mb-4'} text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]`}>{eyebrow}</p>
          <h1
            className={`text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] ${compact ? 'md:text-[44px]' : 'md:text-[52px]'}`}
          >
            {title}
          </h1>
          {description && (
            <p className={`${compact ? 'mt-3' : 'mt-5'} max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-[17px]`}>{description}</p>
          )}
        </div>
        {aside && <div className="shrink-0 text-sm text-[var(--muted)]">{aside}</div>}
      </div>
    </header>
  );
}

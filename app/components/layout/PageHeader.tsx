import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, aside }: PageHeaderProps) {
  return (
    <header className="border-b border-[var(--divider)] pb-10 pt-14 md:pb-14 md:pt-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-[52px]">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-[17px]">{description}</p>}
        </div>
        {aside && <div className="shrink-0 text-sm text-[var(--muted)]">{aside}</div>}
      </div>
    </header>
  );
}

import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PageShell({ children, className = '' }: PageShellProps) {
  return <div className={`page-shell ${className}`.trim()}>{children}</div>;
}

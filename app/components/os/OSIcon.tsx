import type { SVGProps } from 'react';

export type OSIconName =
  | 'archive'
  | 'chevron-left'
  | 'chevron-right'
  | 'clock'
  | 'columns'
  | 'documents'
  | 'external'
  | 'file-text'
  | 'file-user'
  | 'folder'
  | 'grid'
  | 'home'
  | 'list'
  | 'list-checks'
  | 'mail'
  | 'moon'
  | 'notes'
  | 'search'
  | 'sun'
  | 'user'
  | 'wifi';

interface OSIconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: OSIconName;
}

export default function OSIcon({ name, className, ...props }: OSIconProps) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
  };

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" {...common} {...props}>
      {name === 'home' && (
        <>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9.5V21h14V9.5M9 21v-7h6v7" />
        </>
      )}
      {name === 'archive' && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 13h6" />
          <path d="m5 5 1.5-2h11L19 5" />
        </>
      )}
      {name === 'folder' && <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z" />}
      {name === 'file-text' && (
        <>
          <path d="M6 2.5h8l4 4V21H6Z" />
          <path d="M14 2.5v4h4M9 11h6M9 15h6M9 18h4" />
        </>
      )}
      {name === 'file-user' && (
        <>
          <path d="M6 2.5h8l4 4V21H6Z" />
          <path d="M14 2.5v4h4" />
          <circle cx="12" cy="11" r="2" />
          <path d="M8.5 17c.6-2 2-3 3.5-3s2.9 1 3.5 3" />
        </>
      )}
      {name === 'list-checks' && (
        <>
          <path d="m4 6 1.5 1.5L8 5M11 6h9M4 12l1.5 1.5L8 11M11 12h9M4 18l1.5 1.5L8 17M11 18h9" />
        </>
      )}
      {name === 'mail' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}
      {name === 'sun' && (
        <>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      )}
      {name === 'moon' && <path d="M20 15.4A8.5 8.5 0 0 1 8.6 4a8.5 8.5 0 1 0 11.4 11.4Z" />}
      {name === 'wifi' && (
        <>
          <path d="M3.5 9.5a13 13 0 0 1 17 0M6.5 13a8.5 8.5 0 0 1 11 0M9.5 16.5a4 4 0 0 1 5 0" />
          <circle cx="12" cy="20" r=".6" fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'user' && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c.8-5 3.4-7 8-7s7.2 2 8 7" />
        </>
      )}
      {name === 'grid' && (
        <>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </>
      )}
      {name === 'notes' && (
        <>
          <path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h5" />
          <path d="M3 6h4M3 10h4M3 14h4M3 18h4" />
        </>
      )}
      {name === 'documents' && (
        <>
          <path d="M8 3h10l3 3v13H8z" />
          <path d="M8 6H3v15h13v-2M14 8h4M14 12h4" />
        </>
      )}
      {name === 'search' && (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      )}
      {name === 'chevron-left' && <path d="m15 18-6-6 6-6" />}
      {name === 'chevron-right' && <path d="m9 18 6-6-6-6" />}
      {name === 'external' && (
        <>
          <path d="M14 4h6v6M20 4l-9 9" />
          <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
        </>
      )}
      {name === 'clock' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )}
      {name === 'columns' && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M12 4v16" />
        </>
      )}
      {name === 'list' && <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />}
    </svg>
  );
}

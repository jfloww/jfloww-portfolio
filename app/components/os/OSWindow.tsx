'use client';

import clsx from 'clsx';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

interface OSWindowProps {
  children: ReactNode;
  className?: string;
  closeHref?: string;
  focused?: boolean;
  id: string;
  onClose?: () => void;
  onFocusWindow?: () => void;
  style?: CSSProperties;
  title: string;
  titleAction?: ReactNode;
}

export default function OSWindow({
  children,
  className,
  closeHref,
  focused = true,
  id,
  onClose,
  onFocusWindow,
  style,
  title,
  titleAction,
}: OSWindowProps) {
  const titleId = `${id}-title`;
  const focusWindow = () => onFocusWindow?.();

  return (
    <section
      id={id}
      role="dialog"
      aria-labelledby={titleId}
      className={clsx('os-window', focused ? 'is-focused' : 'is-inactive', className)}
      style={style}
      tabIndex={onFocusWindow ? 0 : undefined}
      onPointerDown={focusWindow}
      onFocusCapture={focusWindow}
    >
      <header className="os-window-titlebar">
        <div className="os-traffic-lights" aria-label="Window controls">
          {closeHref ? (
            <Link href={closeHref} className="os-traffic-light os-traffic-close" aria-label={`Close ${title}`} title={`Close ${title}`} />
          ) : (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose?.();
              }}
              disabled={!onClose}
              className="os-traffic-light os-traffic-close"
              aria-label={`Close ${title}`}
              title={`Close ${title}`}
            />
          )}
          <button
            type="button"
            disabled
            className="os-traffic-light os-traffic-minimize"
            aria-label="Minimize unavailable in this portfolio"
            title="Minimize unavailable in this portfolio"
          />
          <button
            type="button"
            disabled
            className="os-traffic-light os-traffic-maximize"
            aria-label="Maximize unavailable in this portfolio"
            title="Maximize unavailable in this portfolio"
          />
        </div>
        <h2 id={titleId} className="os-window-title">
          {title}
        </h2>
        <div className="os-window-title-action">{titleAction}</div>
      </header>
      {children}
    </section>
  );
}

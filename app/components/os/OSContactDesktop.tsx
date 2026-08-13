'use client';

import { usePathname } from 'next/navigation';
import type { ChangeEvent, FormEvent } from 'react';
import { localePrefix, normalizeLocaleFromPath } from '@/app/lib/i18n';
import OSDesktopShell from './OSDesktopShell';
import OSIcon from './OSIcon';
import OSWindow from './OSWindow';

interface ContactFormData {
  email: string;
  message: string;
  name: string;
}

interface OSContactDesktopProps {
  formData: ContactFormData;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
  status: 'error' | 'idle' | 'sending' | 'success';
}

const inputClass =
  'w-full rounded-[6px] border border-[var(--os-divider)] bg-[var(--os-window-solid)] px-3.5 py-3 text-[13px] text-[var(--os-text)] placeholder:text-[var(--os-muted)] focus:border-[var(--os-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--os-accent)]';

export default function OSContactDesktop({ formData, onChange, onSubmit, status }: OSContactDesktopProps) {
  const pathname = usePathname();
  const prefix = localePrefix(normalizeLocaleFromPath(pathname));

  return (
    <OSDesktopShell activeApp="Contact" activeDock="contact">
      <OSWindow id="contact-window" title="Contact" closeHref={prefix || '/'} className="os-contact-window">
        <div className="os-contact-window-body">
          <aside className="os-contact-sidebar">
            <span className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[var(--os-accent)] text-white shadow-[0_10px_24px_rgba(0,102,204,.2)]">
              <OSIcon name="mail" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--os-muted)]">Contact</p>
              <h1 className="mt-2 text-[30px] font-semibold tracking-[-0.03em] text-[var(--os-text)]">Let&apos;s keep in touch.</h1>
              <p className="mt-3 text-[13px] leading-6 text-[var(--os-muted)]">Send me a message and I&apos;ll get back to you as soon as possible.</p>
            </div>
            <dl className="space-y-4 border-t border-[var(--os-divider)] pt-5 text-[12px]">
              <div><dt className="text-[var(--os-muted)]">Email</dt><dd className="mt-1 font-semibold text-[var(--os-text)]"><a href="mailto:hoon7589@gmail.com">hoon7589@gmail.com</a></dd></div>
              <div><dt className="text-[var(--os-muted)]">Location</dt><dd className="mt-1 font-semibold text-[var(--os-text)]">AL · NY</dd></div>
            </dl>
            <nav className="flex flex-wrap gap-4 text-[12px] font-semibold text-[var(--os-accent)]" aria-label="Social links">
              <a href="https://github.com/jfloww" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/jfloww/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </nav>
          </aside>

          <form onSubmit={onSubmit} className="min-w-0 flex-1 space-y-5 p-8">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="desktop-contact-name" className="mb-2 block text-[12px] font-semibold text-[var(--os-text)]">Name</label>
                <input id="desktop-contact-name" type="text" name="name" value={formData.name} onChange={onChange} placeholder="Enter your name" className={inputClass} required />
              </div>
              <div>
                <label htmlFor="desktop-contact-email" className="mb-2 block text-[12px] font-semibold text-[var(--os-text)]">Email</label>
                <input id="desktop-contact-email" type="email" name="email" value={formData.email} onChange={onChange} placeholder="your@email.com" className={inputClass} required />
              </div>
            </div>
            <div>
              <label htmlFor="desktop-contact-message" className="mb-2 block text-[12px] font-semibold text-[var(--os-text)]">Message</label>
              <textarea id="desktop-contact-message" name="message" value={formData.message} onChange={onChange} placeholder="Write your message..." className={`${inputClass} min-h-[190px] resize-none`} required />
            </div>
            <div className="flex items-center justify-between gap-5 border-t border-[var(--os-divider)] pt-5">
              <p className="min-h-5 text-[12px] text-[var(--os-muted)]" role="status" aria-live="polite">
                {status === 'success' && <span className="text-green-700 dark:text-green-400">Message sent. Thank you!</span>}
                {status === 'error' && <span className="text-red-700 dark:text-red-400">Failed to send. Please try again.</span>}
                {status === 'sending' && <span>Sending…</span>}
              </p>
              <button type="submit" disabled={status === 'sending'} className="rounded-[6px] bg-[var(--os-accent)] px-5 py-2.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60">
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </OSWindow>
    </OSDesktopShell>
  );
}

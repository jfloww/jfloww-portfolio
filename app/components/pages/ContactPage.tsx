'use client';

import { useState } from 'react';
import PageHeader from '../layout/PageHeader';
import PageShell from '../layout/PageShell';

const inputClass =
  'w-full rounded-[4px] border border-[var(--divider)] bg-transparent px-4 py-3 text-[15px] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status !== 'idle') setStatus('idle');
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-[var(--background)]">
      <PageShell>
        <PageHeader eyebrow="Contact" title="Let's keep in touch!" description="Send me a message and I’ll get back to you as soon as possible." />

        <section className="grid gap-14 py-12 lg:grid-cols-[1fr_2fr] lg:gap-28 lg:py-16">
          <aside className="space-y-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Information</h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs text-[var(--muted)]">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:hoon7589@gmail.com" className="text-lg font-medium hover:text-[var(--accent)]">
                      hoon7589@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[var(--muted)]">Location</dt>
                  <dd className="mt-1 text-lg font-medium">GA · NJ · NY</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Social</h2>
              <nav className="mt-6 flex flex-col items-start gap-4" aria-label="Social links">
                <a
                  href="https://github.com/jfloww"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/jfloww/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://www.instagram.com/jaehoon_jung98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  Instagram ↗
                </a>
              </nav>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`${inputClass} min-h-[180px] resize-y`}
                required
              />
            </div>

            <div className="flex flex-col gap-5 border-t border-[var(--divider)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="min-h-5 text-sm text-[var(--muted)]" role="status" aria-live="polite">
                {status === 'success' && <span className="text-green-600 dark:text-green-400">Message sent. Thank you!</span>}
                {status === 'error' && <span className="text-red-600 dark:text-red-400">Failed to send. Please try again.</span>}
                {status === 'sending' && <span>Sending…</span>}
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-3 rounded-[4px] bg-[var(--accent)] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send Message <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </section>
      </PageShell>
    </div>
  );
}

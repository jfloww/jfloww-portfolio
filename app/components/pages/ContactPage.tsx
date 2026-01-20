'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status !== 'idle') setStatus('idle');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="w-full px-6 py-10 md:py-16">
      <section className="mx-auto w-full max-w-5xl">
        <div className="pb-8 border-b border-gray-200/80 dark:border-white/10">
          <p className="text-sm tracking-wide text-gray-500 dark:text-white/60 mb-3">Contact</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">Get in touch</h1>
          <p className="mt-3 text-base text-gray-600 dark:text-white/70 max-w-2xl">
            Send me a message and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: info */}
          <div className="md:col-span-2">
            <div className="space-y-4 text-sm text-gray-700 dark:text-white/75">
              <div>
              
              </div>
              <div>
                <p className="text-gray-500 dark:text-white/60">Links</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4" href="https://github.com/jfloww" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4" href="https://www.linkedin.com/in/jfloww/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4" href="https://www.instagram.com/jaehoon_jung98/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300/80 dark:border-white/15 bg-white/80 dark:bg-black/20 px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    required
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300/80 dark:border-white/15 bg-white/80 dark:bg-black/20 px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[160px] rounded-xl border border-gray-300/80 dark:border-white/15 bg-white/80 dark:bg-black/20 px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-gray-500 dark:text-white/60">
                  {status === 'success' && <span className="text-green-600 dark:text-green-400">Message sent. Thank you!</span>}
                  {status === 'error' && <span className="text-red-600 dark:text-red-400">Failed to send. Please try again.</span>}
                  {status === 'sending' && <span>Sending…</span>}
                  {status === 'idle' && <span>&nbsp;</span>}
                </p>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium
                  bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed
                  dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

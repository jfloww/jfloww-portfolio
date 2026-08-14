import Image from 'next/image';
import PageHeader from '../layout/PageHeader';
import PageShell from '../layout/PageShell';
import OSDesktopShell from '../os/OSDesktopShell';
import OSIcon from '../os/OSIcon';
import OSWindow from '../os/OSWindow';
import MobileOSShell from '../os/MobileOSShell';
import { localePrefix, type SupportedLocale } from '@/app/lib/i18n';

const sectionClass = 'grid gap-6 py-10 md:grid-cols-[180px_1fr] md:gap-12 md:py-12';
const sectionTitleClass = 'text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]';

interface AboutPageProps {
  locale?: SupportedLocale;
}

export default function AboutPage({ locale = 'en' }: AboutPageProps) {
  const prefix = localePrefix(locale);

  return (
    <>
      <div className="hidden w-full md:block">
        <OSDesktopShell activeApp="README.md">
          <OSWindow
            id="about-readme-window"
            title="README.md"
            closeHref={prefix || '/'}
            className="os-about-window"
            titleAction={
              <a href="/resume/Jaehoon-Jung-resume.pdf" target="_blank" rel="noopener noreferrer" className="os-window-action-link">
                Resume ↗
              </a>
            }
          >
            <div className="os-about-window-body">
              <aside className="os-about-sidebar" aria-label="About sections">
                <p className="os-about-sidebar-label">README</p>
                <nav className="space-y-1">
                  <a href="#about-profile" className="os-about-sidebar-row is-current"><OSIcon name="user" className="h-4 w-4" /> Profile</a>
                  <a href="#about-stack" className="os-about-sidebar-row"><OSIcon name="grid" className="h-4 w-4" /> Tech Stack</a>
                  <a href="#about-experience" className="os-about-sidebar-row"><OSIcon name="documents" className="h-4 w-4" /> Experience</a>
                  <a href="#about-education" className="os-about-sidebar-row"><OSIcon name="notes" className="h-4 w-4" /> Education</a>
                </nav>
              </aside>

              <div className="os-about-document">
                <section id="about-profile" className="grid grid-cols-[190px_1fr] gap-10 border-b border-[var(--os-divider)] pb-10">
                  <Image
                    src="/photo/my-profile.png"
                    alt="Jay Jaehoon Jung"
                    width={190}
                    height={238}
                    priority
                    className="aspect-[4/5] w-full rounded-[6px] object-cover ring-1 ring-black/5"
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--os-muted)]">About</p>
                    <h1 className="mt-2 text-[36px] font-semibold tracking-[-0.035em] text-[var(--os-text)]">Jay (Jaehoon) Jung</h1>
                    <p className="mt-3 max-w-xl text-[15px] leading-6 text-[var(--os-muted)]">Backend-focused software engineer who also builds complete web products.</p>
                    <dl className="mt-7 divide-y divide-[var(--os-divider)] border-y border-[var(--os-divider)] text-[13px]">
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3"><dt className="text-[var(--os-muted)]">Role</dt><dd className="font-medium">Software Engineer · Backend &amp; Full-Stack</dd></div>
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3"><dt className="text-[var(--os-muted)]">Current</dt><dd className="font-medium">ComGen America</dd></div>
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3"><dt className="text-[var(--os-muted)]">Focus</dt><dd className="font-medium">Backend systems, APIs, databases, and application reliability</dd></div>
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3"><dt className="text-[var(--os-muted)]">Education</dt><dd className="font-medium">Georgia Tech OMSCS · Part-time, In Progress</dd></div>
                    </dl>
                    <div className="mt-6 flex items-center gap-5 text-[13px] font-semibold">
                      <a href="/resume/Jaehoon-Jung-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--os-accent)] hover:underline">View Resume ↗</a>
                      <a href="mailto:hoon7589@gmail.com" className="text-[var(--os-accent)] hover:underline">Contact</a>
                    </div>
                  </div>
                </section>

                <section id="about-stack" className="os-about-section">
                  <h2>Tech Stack</h2>
                  <dl className="space-y-3">
                    <div><dt>Backend</dt><dd>Python, Django, Node.js, C#, .NET Core</dd></div>
                    <div><dt>Database</dt><dd>Oracle Database, PostgreSQL, SQL Server, SQLite</dd></div>
                    <div><dt>Frontend</dt><dd>TypeScript, JavaScript, Vue.js, React, Next.js</dd></div>
                    <div><dt>Infrastructure</dt><dd>Docker, AWS, Tomcat, Apache, Git</dd></div>
                  </dl>
                </section>

                <section id="about-experience" className="os-about-section">
                  <h2>Experience</h2>
                  <div className="space-y-8">
                    <article>
                      <div className="flex items-baseline justify-between gap-5"><h3>Software Engineer · ComGen America</h3><time>Feb 2023 – Present</time></div>
                      <ul><li>Developed and maintained backend services and web applications for logistics automation.</li><li>Modernized legacy systems and performed database upgrades and data migrations.</li><li>Managed HTTPS, integration, firewall, and network troubleshooting work.</li></ul>
                    </article>
                    <article>
                      <div className="flex items-baseline justify-between gap-5"><h3>Monitoring Analyst · Republic of Korea Army</h3><time>Jan 2020 – Aug 2021</time></div>
                      <ul><li>Monitored operational information and managed a 12-person team.</li><li>Sergeant, honorably discharged.</li></ul>
                    </article>
                  </div>
                </section>

                <section id="about-education" className="os-about-section">
                  <h2>Education</h2>
                  <div className="space-y-5 text-[13px] leading-6 text-[var(--os-muted)]">
                    <p><strong className="block text-[var(--os-text)]">M.S. Computer Science (OMSCS)</strong>Georgia Institute of Technology · Part-time · In Progress</p>
                    <p><strong className="block text-[var(--os-text)]">B.S. Applied Mathematics &amp; Statistics</strong>Stony Brook University · Alumnus</p>
                  </div>
                </section>
              </div>
            </div>
          </OSWindow>
        </OSDesktopShell>
      </div>

      <MobileOSShell title="README.md" backHref={prefix || '/'}>
        <div className="mobile-os-document-surface">
        <PageShell>
        <PageHeader
          eyebrow="About"
          title="Jay (Jaehoon) Jung"
          description="Backend-focused software engineer who also builds complete web products"
        />

        <section className="grid gap-10 border-b border-[var(--divider)] py-12 md:grid-cols-[240px_1fr] md:gap-16 md:py-16">
          <Image
            src="/photo/my-profile.png"
            alt="Jay Jaehoon Jung"
            width={240}
            height={300}
            priority
            className="aspect-[4/5] w-full max-w-[240px] rounded-[4px] object-cover ring-1 ring-black/5 dark:ring-white/10"
          />

          <div className="flex max-w-2xl flex-col justify-between gap-10">
            <dl className="divide-y divide-[var(--divider)] border-y border-[var(--divider)] text-[15px]">
              <div className="grid grid-cols-[100px_1fr] gap-5 py-4">
                <dt className="text-[var(--muted)]">Role</dt>
                <dd className="font-medium">Software Engineer · Backend &amp; Full-Stack</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-5 py-4">
                <dt className="text-[var(--muted)]">Current</dt>
                <dd className="font-medium">ComGen America</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-5 py-4">
                <dt className="text-[var(--muted)]">Focus</dt>
                <dd className="font-medium">Backend systems, APIs, databases, and application reliability</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-5 py-4">
                <dt className="text-[var(--muted)]">Education</dt>
                <dd className="font-medium">Georgia Tech OMSCS · Part-time, In Progress</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/resume/Jaehoon-Jung-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[4px] bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                View Resume
              </a>
              <a href="mailto:hoon7589@gmail.com" className="text-sm font-medium text-[var(--accent)] hover:underline hover:underline-offset-4">
                Contact
              </a>
            </div>
          </div>
        </section>

        <div className="divide-y divide-[var(--divider)]">
          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>Tech Stack</h2>
            <dl className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Backend</dt>
                <dd>Python, Django, Node.js, C#, .NET Core</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Database</dt>
                <dd>Oracle Database, PostgreSQL, SQL Server, SQLite</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Frontend</dt>
                <dd>TypeScript, JavaScript, Vue.js, React, Next.js</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Infrastructure &amp; Tools</dt>
                <dd>Docker, AWS, Tomcat, Apache, Git</dd>
              </div>
            </dl>
          </section>

          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>Experience</h2>
            <div className="space-y-12">
              <article>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">Software Engineer</h3>
                  <p className="text-sm tabular-nums text-[var(--muted)]">Feb 2023 – Present · Auburn, AL</p>
                </div>
                <a
                  href="https://www.comgenamerica.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:underline hover:underline-offset-4"
                >
                  ComGen America · Full-time
                </a>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)]">
                  <li>Developed and maintained backend services and web applications for logistics automation.</li>
                  <li>Modernized legacy Visual Basic, C#, and .NET Core systems with Node.js, Python, Vue, and TypeScript.</li>
                  <li>Performed Oracle DB version upgrades and data migrations.</li>
                  <li>Managed HTTPS migrations, certificate renewal, AS2 setup, and firewall configurations.</li>
                  <li>Troubleshot TCP resets, firewall timeouts, and routing issues.</li>
                </ul>
              </article>

              <article>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">Monitoring Analyst</h3>
                  <p className="text-sm tabular-nums text-[var(--muted)]">Jan 2020 – Aug 2021 · South Korea</p>
                </div>
                <a
                  href="https://www.army.mil.kr/english/index..do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:underline hover:underline-offset-4"
                >
                  Republic of Korea Army · Full-time
                </a>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)]">
                  <li>Sergeant, honorably discharged.</li>
                  <li>Monitored and analyzed operational information.</li>
                  <li>Managed a team of 12 soldiers, including onboarding and education.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>Education</h2>
            <div className="space-y-6 text-[15px] leading-relaxed text-[var(--muted)]">
              <p>
                <span className="block font-medium text-[var(--foreground)]">M.S. Computer Science (OMSCS)</span>
                <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  Georgia Institute of Technology · Part-time · In Progress
                </a>
              </p>
              <p>
                <span className="block font-medium text-[var(--foreground)]">B.S. Applied Mathematics &amp; Statistics</span>
                <a
                  href="https://www.stonybrook.edu/commcms/ams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Stony Brook University · Alumnus
                </a>
              </p>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>Languages</h2>
            <dl className="grid gap-4 text-[15px] text-[var(--muted)] sm:grid-cols-2">
              <div>
                <dt className="font-medium text-[var(--foreground)]">English</dt>
                <dd className="mt-1">Proficient</dd>
              </div>
              <div>
                <dt className="font-medium text-[var(--foreground)]">Korean</dt>
                <dd className="mt-1">Native</dd>
              </div>
            </dl>
          </section>

          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>Location</h2>
            <div className="grid gap-6 text-[15px] text-[var(--muted)] sm:grid-cols-2">
              <div>
                <h3 className="font-medium text-[var(--foreground)]">South Korea</h3>
                <p className="mt-1">Seoul</p>
              </div>
              <div>
                <h3 className="font-medium text-[var(--foreground)]">United States</h3>
                <p className="mt-1">Alabama (AL), New York (NY)</p>
              </div>
            </div>
          </section>
        </div>
        </PageShell>
        </div>
      </MobileOSShell>
    </>
  );
}

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
const skills = [
  { label: 'Programming', value: 'TypeScript/JavaScript, Python, SQL, C#' },
  { label: 'Frontend', value: 'Vue.js, React, Next.js' },
  { label: 'Backend', value: 'Node.js, FastAPI, Django, ASP.NET' },
  { label: 'Databases', value: 'PostgreSQL, Oracle Database, MySQL' },
  { label: 'Integration', value: 'EDI (X12), AS2, SFTP, CData Arc, TCP sockets' },
  { label: 'Cloud & Tools', value: 'AWS, Google Cloud Run, Docker, Git' },
];
const comgenDescription = 'Logistics, scanning, and EDI/EAI systems for automotive OEM and supplier plants (Hyundai, Kia, Ford, and GM).';
const comgenExperience = [
  'Built production applications end to end — system design, API development, deployment, monitoring, and incident response — delivering WMS, EDI, and JIS workflows (inventory, production planning, part validation, ASN generation, and shipping) with client stakeholders across five partner environments.',
  'Redesigned EDI ingestion from per-document sequential processing to staged bulk loading (temporary tables, indexing, validation, and transactional batch inserts), cutting processing time from 23 seconds to about 5 seconds for a roughly 1,000-transaction-per-day pipeline across five B2B partners.',
  'Migrated socket-based partner integrations from on-premises servers to AWS (EC2, VPC, S3, IAM, CloudWatch, and Site-to-Site VPN), reducing connectivity-related downtime from about three incidents per month to about one per year and cutting infrastructure maintenance cost to 30% of the on-premises baseline.',
  'Cut recurring support calls by making failures self-diagnosable for end users: standardized error codes, restructured application logs, and exposed real-time health checks and CloudWatch dashboards, allowing operators to distinguish partner-side and network faults from application faults without escalation and providing evidence for fault isolation during partner incidents.',
  'Modernized legacy C# and ASP.NET applications into TypeScript and Vue interfaces backed by Node.js or Django services; established shared application patterns, reviewed pull requests from junior engineers, and ran staged test-server-to-production releases with stakeholder UAT before deployment.',
  'Built an internal web application that automated corporate credit card statement processing, including transaction grouping, categorization, and report generation, replacing a manual Excel workflow and reducing monthly reconciliation from about one hour to about 10 seconds.',
];

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
                  <a href="#about-profile" className="os-about-sidebar-row is-current">
                    <OSIcon name="user" className="h-4 w-4" /> Profile
                  </a>
                  <a href="#about-stack" className="os-about-sidebar-row">
                    <OSIcon name="grid" className="h-4 w-4" /> Skills
                  </a>
                  <a href="#about-experience" className="os-about-sidebar-row">
                    <OSIcon name="documents" className="h-4 w-4" /> Experience
                  </a>
                  <a href="#about-education" className="os-about-sidebar-row">
                    <OSIcon name="notes" className="h-4 w-4" /> Education
                  </a>
                </nav>
              </aside>

              <div className="os-about-document">
                <section id="about-profile" className="grid grid-cols-[210px_1fr] gap-10 border-b border-[var(--os-divider)] pb-10">
                  <div className="relative aspect-[3/4] w-full self-start overflow-hidden rounded-[8px] shadow-[0_14px_32px_rgba(4,14,24,0.18)] ring-1 ring-black/10 dark:ring-white/10">
                    <Image
                      src="/photo/my-profile.jpg"
                      alt="Jay Jaehoon Jung"
                      fill
                      priority
                      sizes="(max-width: 1180px) 160px, 210px"
                      className="origin-[50%_74%] scale-[1.25] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--os-muted)]">About</p>
                    <h1 className="mt-2 text-[36px] font-semibold tracking-[-0.035em] text-[var(--os-text)]">Jay (Jaehoon) Jung</h1>
                    <p className="mt-3 max-w-xl text-[15px] leading-6 text-[var(--os-muted)]">
                      Backend-focused software engineer who also builds complete web products.
                    </p>
                    <dl className="mt-7 divide-y divide-[var(--os-divider)] border-y border-[var(--os-divider)] text-[13px]">
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                        <dt className="text-[var(--os-muted)]">Role</dt>
                        <dd className="font-medium">Software Engineer · Backend &amp; Full-Stack</dd>
                      </div>
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                        <dt className="text-[var(--os-muted)]">Current</dt>
                        <dd className="font-medium">ComGen America</dd>
                      </div>
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                        <dt className="text-[var(--os-muted)]">Focus</dt>
                        <dd className="font-medium">Backend systems, APIs, databases, and application reliability</dd>
                      </div>
                      <div className="grid grid-cols-[90px_1fr] gap-4 py-3">
                        <dt className="text-[var(--os-muted)]">Education</dt>
                        <dd className="font-medium">Georgia Tech OMSCS · Part-time, In Progress</dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex items-center gap-5 text-[13px] font-semibold">
                      <a
                        href="/resume/Jaehoon-Jung-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--os-accent)] hover:underline"
                      >
                        View Resume ↗
                      </a>
                      <a href="mailto:hoon7589@gmail.com" className="text-[var(--os-accent)] hover:underline">
                        Contact
                      </a>
                    </div>
                  </div>
                </section>

                <section id="about-stack" className="os-about-section">
                  <h2>Skills</h2>
                  <dl className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.label}>
                        <dt>{skill.label}</dt>
                        <dd>{skill.value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                <section id="about-experience" className="os-about-section">
                  <h2>Experience</h2>
                  <div className="space-y-8">
                    <article>
                      <div className="flex items-baseline justify-between gap-5">
                        <h3>Software Engineer · ComGen America · Auburn, AL</h3>
                        <time>Feb 2023 – Present</time>
                      </div>
                      <p className="mt-2 text-[12px] leading-[1.65] text-[var(--os-muted)]">{comgenDescription}</p>
                      <ul>
                        {comgenExperience.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                    <article>
                      <div className="flex items-baseline justify-between gap-5">
                        <h3>Monitoring Analyst · Republic of Korea Army</h3>
                        <time>Jan 2020 – Aug 2021</time>
                      </div>
                      <ul>
                        <li>Monitored operational information and managed a 12-person team.</li>
                        <li>Sergeant, honorably discharged.</li>
                      </ul>
                    </article>
                  </div>
                </section>

                <section id="about-education" className="os-about-section">
                  <h2>Education</h2>
                  <div className="space-y-5 text-[13px] leading-6 text-[var(--os-muted)]">
                    <p>
                      <strong className="block text-[var(--os-text)]">M.S. Computer Science (OMSCS)</strong>Georgia Institute of Technology ·
                      Part-time · In Progress
                    </p>
                    <p>
                      <strong className="block text-[var(--os-text)]">B.S. Applied Mathematics &amp; Statistics</strong>Stony Brook University ·
                      Alumnus
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </OSWindow>
        </OSDesktopShell>
      </div>

      <MobileOSShell title={locale === 'ko' ? '소개' : 'About'} backHref={prefix || '/'}>
        <div className="mobile-os-document-surface">
          <PageShell>
            <PageHeader
              eyebrow="About"
              title="Jay (Jaehoon) Jung"
              description="Backend-focused software engineer who also builds complete web products"
            />

            <section className="grid gap-10 border-b border-[var(--divider)] py-12 md:grid-cols-[240px_1fr] md:gap-16 md:py-16">
              <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-[8px] shadow-[0_14px_32px_rgba(4,14,24,0.16)] ring-1 ring-black/10 dark:ring-white/10">
                <Image
                  src="/photo/my-profile.jpg"
                  alt="Jay Jaehoon Jung"
                  fill
                  priority
                  sizes="240px"
                  className="origin-[50%_74%] scale-[1.25] object-cover"
                />
              </div>

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
                <h2 className={sectionTitleClass}>Skills</h2>
                <dl className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
                  {skills.map((skill) => (
                    <div key={skill.label} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                      <dt className="font-medium text-[var(--foreground)]">{skill.label}</dt>
                      <dd>{skill.value}</dd>
                    </div>
                  ))}
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
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{comgenDescription}</p>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)]">
                      {comgenExperience.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
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

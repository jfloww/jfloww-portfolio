import Image from 'next/image';
import PageHeader from '../layout/PageHeader';
import PageShell from '../layout/PageShell';

const sectionClass = 'grid gap-6 py-10 md:grid-cols-[180px_1fr] md:gap-12 md:py-12';
const sectionTitleClass = 'text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]';

export default function AboutPage() {
  return (
    <div className="w-full bg-[var(--background)]">
      <PageShell>
        <PageHeader eyebrow="About" title="Jay (Jaehoon) Jung" description="Full Stack Software Engineer" />

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
                <dd className="font-medium">Full Stack Software Engineer</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-5 py-4">
                <dt className="text-[var(--muted)]">Current</dt>
                <dd className="font-medium">ComGen America</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-5 py-4">
                <dt className="text-[var(--muted)]">Focus</dt>
                <dd className="font-medium">Web applications and planning tools</dd>
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
                <dt className="font-medium text-[var(--foreground)]">Language</dt>
                <dd>TypeScript/JavaScript, SQL, Python, C#</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Framework</dt>
                <dd>Vue.js, Django, React.js, Next.js, Node.js</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Database</dt>
                <dd>OracleDB, PostgreSQL, MSSQL, SQLite</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                <dt className="font-medium text-[var(--foreground)]">Tools</dt>
                <dd>Git, Docker, AWS, Tomcat, Apache</dd>
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
                  <li>Developed and maintained full-stack web applications for logistics automation.</li>
                  <li>Migrated legacy Visual Basic, C#, and .NET Core projects to Vue, TypeScript, Node.js, and Python.</li>
                  <li>Performed Oracle DB version upgrades and data migrations.</li>
                  <li>Managed HTTPS migrations, certificate renewal, AS2 setup, and firewall configurations.</li>
                  <li>Troubleshot TCP resets, firewall timeouts, and routing issues.</li>
                </ul>
                <p className="mt-4 text-sm text-[var(--muted)]">Vue.js, TypeScript, Node.js, SQL, Docker</p>
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
                <p className="mt-4 text-sm text-[var(--muted)]">Leadership, Microsoft Office</p>
              </article>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>Education</h2>
            <div className="space-y-6 text-[15px] leading-relaxed text-[var(--muted)]">
              <p>
                <span className="block font-medium text-[var(--foreground)]">M.S. Computer Science</span>
                <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  Georgia Institute of Technology
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
                  SUNY Stony Brook
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
  );
}

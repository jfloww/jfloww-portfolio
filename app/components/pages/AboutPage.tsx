import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full px-6 py-10 md:py-16">
      <section className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 pb-10 border-b border-gray-200/80 dark:border-white/10">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-gray-200/70 dark:border-white/15 bg-gray-50 dark:bg-white/5 shrink-0">
            <Image src="/photo/jj.png" alt="Jay Jung" fill className="object-contain p-2" priority />
          </div>

          <div className="w-full text-center md:text-left">
            <p className="text-sm tracking-wide text-gray-500 dark:text-white/60 mb-3">Software Engineer</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">Jay (Jaehoon) Jung</h1>
            <p className="mt-3 text-base text-gray-600 dark:text-white/70 max-w-2xl mx-auto md:mx-0">
              Building clean, fast web experiences with a focus on maintainable code and thoughtful UI details.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium
                bg-gray-900 text-white opacity-60 cursor-not-allowed
                dark:bg-white dark:text-black transition-colors"
              >
                Resume (Coming soon)
              </button>
              <a
                href="mailto:jfloww@proton.me"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium
                border border-gray-300/80 text-gray-900 hover:bg-gray-50
                dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 divide-y divide-gray-200/80 dark:divide-white/10">
          <section className="py-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h2>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-white/75">
              <li>
                <span className="font-medium text-gray-900 dark:text-white">Language:</span> TypeScript, JavaScript, SQL, C#, Python
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">Framework:</span> Vue.js, React.js, Next.js, Node.js, Django
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">Database:</span> OracleDB, MySQL, MSSQL
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">DevOps & Tools:</span> Git, Docker, AWS, Tomcat, Apache
              </li>
            </ul>
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h2>
            <div className="mt-6 space-y-10">
              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">Software Engineer</h3>
                  <p className="text-sm text-gray-500 dark:text-white/60">Feb 2023 - Present • Auburn, AL</p>
                </div>
                <a
                  href="https://www.comgenamerica.com/"
                  className="mt-1 inline-block text-sm text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ComGen America • Full-time
                </a>
                <ul className="mt-4 list-disc ml-5 text-gray-700 dark:text-white/75 space-y-1">
                  <li>Developed and maintained full-stack web applications (Vue.js, Node.js, OracleDB, C#) for logistics automation.</li>
                  <li>Migrated legacy projects (Visual Basic, C#, .NET Core) to modern Vue + TypeScript, Node.js, and Python stack.</li>
                  <li>Performed Oracle DB version upgrades and data migrations.</li>
                  <li>Managed HTTPS migrations, including certificate renewal, AS2 protocol setup, and firewall configurations.</li>
                  <li>Troubleshot complex networking issues (TCP resets, firewall timeouts, Telnet routing errors).</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500 dark:text-white/60">Vue.js, TypeScript, Node.js, SQL, Docker</p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">Monitoring Analyst</h3>
                  <p className="text-sm text-gray-500 dark:text-white/60">Jan 2020 - Aug 2021 • South Korea</p>
                </div>
                <a
                  href="https://www.army.mil.kr/english/index..do"
                  className="mt-1 inline-block text-sm text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Republic of Korea Army • Full-time
                </a>
                <ul className="mt-4 list-disc ml-5 text-gray-700 dark:text-white/75 space-y-1">
                  <li>Sergeant (Honorably Discharged)</li>
                  <li>Executed a mission to monitor and analyze the enemies.</li>
                  <li>Leadership experience managing 12 soldiers; onboarding/education and leadership development.</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500 dark:text-white/60">Leadership, Microsoft Office</p>
              </div>
            </div>
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
            <div className="mt-4 space-y-2 text-gray-700 dark:text-white/75">
              <p>
                <span className="font-medium text-gray-900 dark:text-white">M.S. Computer Science</span> —{' '}
                <a href="https://www.cc.gatech.edu/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Georgia Institute of Technology
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-900 dark:text-white">B.S. Applied Mathematics & Statistics</span> —{' '}
                <a
                  href="https://www.stonybrook.edu/commcms/ams/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SUNY Stony Brook
                </a>
              </p>
            </div>
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h2>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-white/75">
              <li>
                <span className="font-medium text-gray-900 dark:text-white">English:</span> Proficient
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">Korean:</span> Native
              </li>
            </ul>
          </section>

          <section className="py-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-white/75">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">South Korea</h3>
                <p className="mt-1">Seoul</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">United States</h3>
                <p className="mt-1">Alabama (AL), New York (NY)</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

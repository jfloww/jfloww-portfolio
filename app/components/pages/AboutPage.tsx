'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div className={clsx('flex flex-col items-center justify-center  w-full min-h-screen ', mobile ? 'p-4' : 'bg-gray-50 dark:bg-gray-900 p-8')}>
      <div className={clsx('max-w-3xl w-full text-center bg-white dark:bg-gray-800  rounded-lg shadow-lg', mobile ? 'py-4 px-2' : 'p-8')}>
        <div className="flex flex-col items-center">
          <Image src="/photo/jj.png" alt="Jay Jung" width={480} height={480} className="w-60 rounded-lg shadow-md mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Jay (Jaehoon) Jung</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Software Engineer</p>
          <button
            className="bg-blue-600 w-40 p-2 rounded-lg text-xl hover:bg-blue-800 hover:scale-105 transition text-white font-semibold mt-4 shadow-md"
            onClick={() => window.alert('Coming Soon')}
          >
            View Resume
          </button>
        </div>

        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Language:</span> TypeScript, JavaScript, SQL, C#, Python
            </li>
            <li>
              <span className="font-semibold">Framework:</span> Vue.js, React.js, Next.js, Node.js, Django
            </li>
            <li>
              <span className="font-semibold">Database:</span> OracleDB, MySQL, MSSQL
            </li>
            <li>
              <span className="font-semibold">DevOps & Tools:</span> Git, Docker, AWS, Tomcat, Apache
            </li>
          </ul>
        </div>
        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Software Engineer</h3>
              <a href="https://www.comgenamerica.com/" className="text-gray-600 dark:text-gray-400" target="_blank">
                ComGen America • Full-time
              </a>
              <p className="text-gray-400 text-sm">Feb 2023 - Present • Auburn, AL</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed and maintained full-stack web applications (Vue.js, Node.js, OracleDB, C#) for logistics automation.</li>
                <li>Migrated legacy projects (Visual Basic, C#, .NET Core) to modern Vue + TypeScript, Node.js, and Python stack.</li>
                <li>Performed Oracle DB version upgrades and data migrations.</li>
                <li>Managed HTTPS migrations, including certificate renewal, AS2 protocol setup, and firewall configurations.</li>
                <li>Troubleshot complex networking issues (TCP resets, firewall timeouts, Telnet routing errors).</li>
              </ul>
              <p className="mt-2 text-sm text-gray-400">🔹 Vue.js, TypeScript, Node.js, SQL, Docker</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Monitoring Analyst</h3>
              <a href="https://www.army.mil.kr/english/index..do" className="text-gray-600 dark:text-gray-400" target="_blank">
                Republic of Korea Army • Full-time
              </a>
              <p className="text-gray-400 text-sm">Jan 2020 - Aug 2021 • South Korea</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Sergeant (Honorably Discharged)</li>
                <li>Executed a mission to monitor and analyze the enemies.</li>
                <li>
                  Experienced Significant leadership experience managing 12 soldiers; responsibilities included managing soldiers’
                  onboarding/education and leadership development.
                </li>
              </ul>
              <p className="mt-2 text-sm text-gray-400">🔹 Leadership, Microsoft Office</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <p>
            <span className="font-semibold">M.S. Computer Science</span> —{' '}
            <a href="https://www.cc.gatech.edu/" className="text-blue-600 dark:text-blue-400" target="_blank">
              Georgia Institute of Technology
            </a>
          </p>
          <p>
            <span className="font-semibold">B.S. Applied Mathematics & Statistics</span> —{' '}
            <a href="https://www.stonybrook.edu/commcms/ams/" className="text-blue-600 dark:text-blue-400" target="_blank">
              SUNY Stony Brook
            </a>
          </p>
        </div>

        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Languages</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">English:</span> Proficient
            </li>
            <li>
              <span className="font-semibold">Korean:</span> Native
            </li>
          </ul>
        </div>

        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Location</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">South Korea</h3>
              <p>Seoul</p>
            </div>
            <div>
              <h3 className="font-semibold">United States</h3>
              <p>Alabama (AL), New York (NY)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

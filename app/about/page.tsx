import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl w-full text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src="/photo/jj.png"
            alt="Jay Jung"
            width={480}
            height={480}
            className="w-60 rounded-lg shadow-md mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Jay (Jaehoon) Jung
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Software Engineer
          </p>
          <button className="bg-blue-600 w-40 p-2 rounded-lg text-xl hover:bg-blue-800 hover:scale-105 transition text-white font-semibold mt-4 shadow-md">
            View Resume
          </button>
        </div>

        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Languages:</span> Java, Python,
              TypeScript, SQL, HTML, CSS
            </li>
            <li>
              <span className="font-semibold">Frameworks:</span> Vue.js,
              Next.js, React.js, Angular
            </li>
            <li>
              <span className="font-semibold">Databases:</span> OracleDB, MySQL,
              MSSQL
            </li>
            <li>
              <span className="font-semibold">Deployment:</span> Docker, AWS,
              Apache Tomcat
            </li>
            <li>
              <span className="font-semibold">Version Control:</span> Git,
              GitHub
            </li>
          </ul>
        </div>
        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ComGen America • Full-time
              </p>
              <p className="text-gray-400 text-sm">
                Feb 2023 - Present • Auburn, AL
              </p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Developed enterprise applications using TypeScript and
                  Node.js.
                </li>
                <li>Designed and deployed scalable backend services & APIs.</li>
              </ul>
              <p className="mt-2 text-sm text-gray-400">
                🔹 TypeScript, Node.js, SQL, Docker
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Monitoring Analyst
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Republic of Korea Army • Full-time
              </p>
              <p className="text-gray-400 text-sm">
                Jan 2020 - Aug 2021 • South Korea
              </p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Managed and led a team of 12 soldiers.</li>
                <li>Conducted real-time security monitoring operations.</li>
              </ul>
              <p className="mt-2 text-sm text-gray-400">
                🔹 Leadership, Microsoft Office
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <p>
            <span className="font-semibold">M.S. Computer Science</span> —{" "}
            <a
              href="https://www.cc.gatech.edu/"
              className="text-blue-600 dark:text-blue-400"
            >
              Georgia Institute of Technology
            </a>
          </p>
          <p>
            <span className="font-semibold">
              B.S. Applied Mathematics & Statistics
            </span>{" "}
            —{" "}
            <a
              href="https://www.stonybrook.edu/commcms/ams/"
              className="text-blue-600 dark:text-blue-400"
            >
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

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-2">Jay (Jaehoon) Jung</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Software Engineer
        </p>
        <div className="mb-4">
          <img
            src="/photo/jj22.jpg"
            alt="Jay Jung"
            className="w-32 h-32 rounded-full mx-auto shadow-lg"
          />
        </div>
        <button className="bg-blue-500 w-40 p-2 rounded text-2xl hover:bg-blue-800 hover:scale-110 transition text-white font-bold">
          Resume
        </button>

        <div className="mt-6 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Languages:</span> Java,
              JavaScript/TypeScript, SQL, HTML, CSS
            </li>
            <li>
              <span className="font-semibold">Frameworks & Libraries:</span>{" "}
              Vue.js, Next.js, React.js, Angular
            </li>
            <li>
              <span className="font-semibold">Database:</span> OracleDB, MySQL,
              MSSQL
            </li>
            <li>
              <span className="font-semibold">
                Infrastructure & Deployment:
              </span>{" "}
              Apache Tomcat, Docker, AWS
            </li>
            <li>
              <span className="font-semibold">Version Control:</span> Git,
              GitHub
            </li>
          </ul>
        </div>

        <div className="mt-6 text-left">
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-2">Experience</h2>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ComGen America • Full-time
              </p>
              <p className="text-gray-400 text-sm">
                Feb 2023 - Present • Auburn, AL (On-site)
              </p>
              <p className="mt-2">
                • Working on enterprise solutions using TypeScript, Node.js, and
                other modern technologies.
              </p>
              <p>
                • Developed and deployed backend services and APIs for
                high-traffic applications.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                🔹 TypeScript, Node.js, SQL, Docker
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p>
            M.S. Computer Science at{" "}
            <a
              href="https://www.cc.gatech.edu/"
              className="font-semibold text-blue-600 dark:text-blue-400"
            >
              Georgia Institute of Technology
            </a>
          </p>
          <p>
            B.S. Applied Mathematics and Statistics at{" "}
            <a
              href="https://www.stonybrook.edu/commcms/ams/"
              className="font-semibold text-blue-600 dark:text-blue-400"
            >
              SUNY Stony Brook
            </a>
          </p>
        </div>

        <div className="mt-6 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Languages</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">English:</span> Proficient
            </li>
            <li>
              <span className="font-semibold">Korean:</span> Native
            </li>
          </ul>
        </div>

        <div className="mt-6 text-left border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-lg bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
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

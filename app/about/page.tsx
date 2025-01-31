export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full">
      <div className="max-w-2xl w-full text-center">
        {/* Name & Title */}
        <h1 className="text-4xl font-bold mb-2">Jay (Jaehoon) Jung</h1>
        <p className="text-lg text-gray-400">Software Engineer</p>
        <button className="bg-blue-500 w-40 p-2 rounded text-2xl hover:bg-blue-800 hover:scale-110 text-white font-bold">
          Resume
        </button>

        {/* Tech Stack */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="space-y-2 p-4">
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
        {/* Experience */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <div className="space-y-6">
            {/* Software Engineer */}
            <div className="p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-400">ComGen America • Full-time</p>
              <p className="text-gray-400 text-sm">
                Feb 2023 - Present • Auburn, AL (On-site)
              </p>
              <p className="mt-2">
                • Working on enterprise solutions using TypeScript, Node.js, and
                other modern technologies.
              </p>
              <p className="">
                • Developed and deployed backend services and APIs for
                high-traffic applications.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                🔹 TypeScript, Node.js, SQL, Docker
              </p>
            </div>

            <div className="p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Monitoring Analyst</h3>
              <p className="text-gray-400">
                Republic of Korea Army • Full-time
              </p>
              <p className="text-gray-400 text-sm">
                Jan 2020 - Aug 2021 • Gangwon, South Korea
              </p>
              <p className="mt-2">
                • Gained significant leadership experience managing 12 soldiers.
              </p>
              <p className="">
                • Led training programs for new recruits and conducted real-time
                monitoring operations.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                🔹 Team Leadership, Microsoft Office
              </p>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <div className="p-4">
            <p className="">
              M.S. Computer Science at{" "}
              <a href="https://www.cc.gatech.edu/" className="font-semibold">
                Georgia Institute of Technology
              </a>
            </p>
            <p className="">
              B.S. Applied Mathematics and Statistics at{" "}
              <a
                href="https://www.stonybrook.edu/commcms/ams/"
                className="font-semibold"
              >
                State University of New York, Stony Brook
              </a>
            </p>
          </div>
        </div>
        {/* Languages */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold mb-2">Languages</h2>
          <ul className="space-y-2 p-4">
            <li>
              <span className="font-semibold">English:</span> Proficient
            </li>
            <li>
              <span className="font-semibold">Korean:</span> Native
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <div className="grid grid-cols-2 gap-4 p-4">
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

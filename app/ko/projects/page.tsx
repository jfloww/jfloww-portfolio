import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "JFLOWW",
      stacks: "Next.js, TypeScript, TailwindCSS",
      content: "Personal Portfolio",
      image: "/photo/temp/test1.jpg",
    },
    {
      name: "Task Manager",
      stacks: "React, Firebase, Material UI",
      content: "Task management web app",
      image: "/photo/temp/test2.jpg",
    },
    {
      name: "E-commerce App",
      stacks: "Next.js, Prisma, TailwindCSS",
      content: "Online shopping platform",
      image: "/photo/temp/test3.jpg",
    },
    {
      name: "Blog Platform",
      stacks: "Vue.js, Nuxt.js, TailwindCSS",
      content: "Multi-author blogging platform",
      image: "/photo/temp/test4.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-3">{project.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{project.stacks}</p>
            <p className="text-sm text-gray-500">{project.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMobileCheck } from '../functions/mobileCheck';

interface ClientHomeProps {
  projList: {
    id: string;
    title: string;
    date: string;
    techStack?: string;
    image?: string;
  }[];
  postList: {
    id: string;
    title: string;
    date: string;
    techStack?: string;
    image?: string;
  }[];
}

export default function ClientHome({ projList, postList }: ClientHomeProps) {
  const isMobile = useMobileCheck();
  useEffect(() => {
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="p-6 w-full justify-center">
      <section className="flex flex-col items-center text-center mt-8 w-full">
        <h1 className="text-5xl font-bold w-full">Hi, There!</h1>
        <h1 className="text-5xl font-bold w-full">Welcome to my Page</h1>
        <h1 className="text-3xl font-bold w-full">Jay (Jaehoon) Jung</h1>
        <h2 className="">Software Engineer</h2>
        <Link href="/about" className="mt-6 bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
          More About Me
        </Link>
      </section>
      <section className="w-full mt-24 flex">
        {isMobile ? (
          <div className="w-full flex flex-col items-center">
            <section className="w-full flex flex-col items-center mb-8">
              <h1 className="text-3xl font-bold pb-4">Projects</h1>
              <div className="w-full space-y-2">
                {projList.map((proj) => (
                  <Link href={`/projects/${proj.id}`} key={proj.id}>
                    <div className="p-2 w-full flex  justify-between hover:scale-110 ease-in-out duration-300 cursor-pointer">
                      <h2 className="text-md font-bold">{proj.title}</h2>
                      <p className="text-gray-500">{`${proj.date.substring(0, 4)}-${proj.date.substring(4, 6)}-${proj.date.substring(6, 8)}`}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section className="w-full flex flex-col items-center">
              <h1 className="text-3xl font-bold">Posts</h1>
              <div className="w-full space-y-2">
                {postList.map((post) => (
                  <Link href={`/posts/${post.id}`} key={post.id}>
                    <div className="p-2 w-full flex justify-between hover:scale-110 ease-in-out duration-300 cursor-pointer">
                      <h2 className="text-md font-bold">{post.title}</h2>
                      <p className="text-gray-500">{`${post.date.substring(0, 4)}-${post.date.substring(4, 6)}-${post.date.substring(6, 8)}`}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <>
            <section className="w-1/2 flex flex-col items-center">
              <h1 className="text-3xl font-bold pb-4">Projects</h1>
              <div className="w-2/3 space-y-2">
                {projList.map((proj) => (
                  <Link href={`/projects/${proj.id}`} key={proj.id}>
                    <div className="p-2 w-full flex justify-between hover:scale-110 ease-in-out duration-300 cursor-pointer">
                      <h2 className="text-md font-bold">{proj.title}</h2>
                      <p className="text-gray-500">{`${proj.date.substring(0, 4)}-${proj.date.substring(4, 6)}-${proj.date.substring(6, 8)}`}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <section className="w-1/2 flex flex-col items-center">
              <h1 className="text-3xl font-bold pb-4">Posts</h1>
              <div className="w-2/3 space-y-2">
                {postList.map((post) => (
                  <Link href={`/posts/${post.id}`} key={post.id}>
                    <div className="p-2 w-full flex justify-between hover:scale-110 ease-in-out duration-300 cursor-pointer">
                      <h2 className="text-md font-bold">{post.title}</h2>
                      <p className="text-gray-500">{`${post.date.substring(0, 4)}-${post.date.substring(4, 6)}-${post.date.substring(6, 8)}`}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  );
}

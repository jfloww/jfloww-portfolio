"use client";
import Link from "next/link";

export default function HomeKO() {
  return (
    <div className="p-6 w-full justify-center">
      <section className="flex flex-col items-center text-center mt-16 w-full">
        <h1 className="text-5xl font-bold w-full">안녕하세요</h1>
        <h1 className="text-5xl font-bold w-full">Welcome to my Page</h1>
        <h2 className="">Software Engineer</h2>
        <Link
          href="/about"
          className="mt-6 bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
        >
          더보기
        </Link>
      </section>
      <section className="w-full flex mt-24">
        <section className="w-1/2 justify-center text-center">
          <h1 className="text-3xl font-bold">Projects</h1>
        </section>
        <section className="w-1/2 justify-center text-center">
          <h1 className="text-3xl font-bold">Posts</h1>
        </section>
      </section>
    </div>
  );
}

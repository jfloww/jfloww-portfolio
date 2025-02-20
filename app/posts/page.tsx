import Image from 'next/image';
import Link from 'next/link';
import { getPostList } from '../components/functions/importList';

export default async function Posts() {
  const postList = await getPostList('posts', 5);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {postList.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-48 rounded-t-lg overflow-hidden rounded-lg bg-black">
                <Image src={post.images?.[0].src ?? '/default-image.jpg'} alt="post image" fill className="m-auto p-4" />
              </div>
              <div className="p-4 flex flex-col w-full">
                <div className="flex w-full justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post.title}</h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {`${post.date.substring(0, 4)}-${post.date.substring(4, 6)}-${post.date.substring(6, 8)}`}
                  </p>
                </div>
                <div>{post.techStack}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

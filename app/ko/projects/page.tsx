import Link from "next/link";
import { getPostList } from "../../components/functions/importList";
export default async function Projects() {
  const postList = await getPostList("projects", 5);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {postList.map((post) => (
          <Link href={`/projects/${post.id}`} key={post.id}>
            <div className="p-2 w-full flex justify-between hover:bg-gray-100 cursor-pointer">
              <h2 className="text-md font-bold">{post.title}</h2>
              <p className="text-gray-500">
                {`${post.date.substring(0, 4)}-${post.date.substring(
                  4,
                  6
                )}-${post.date.substring(6, 8)}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

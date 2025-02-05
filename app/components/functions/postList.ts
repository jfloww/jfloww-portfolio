// lib/postList.ts
import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function parsePost(postPath: string) {
  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { data } = matter(fileContent);
  return data;
}

export function getPostPaths(basePath: string, count: number): string[] {
  let baseDir = "";
  if (basePath === "projects") {
    baseDir = "app/projects/contents";
  } else if (basePath === "posts") {
    baseDir = "app/posts/contents";
  } else {
    throw new Error("Invalid basePath");
  }

  const POSTS_PATH = path.join(process.cwd(), baseDir);
  const paths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return paths;
}

export async function getPostList(
  basePath: string,
  count: number
): Promise<any[]> {
  const paths: string[] = getPostPaths(basePath, count);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  posts.sort((a, b) => parseInt(b.date) - parseInt(a.date));
  return posts.slice(0, count);
}

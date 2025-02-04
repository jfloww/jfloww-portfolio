import ClientHome from "./components/templates/ClientHome";
import { getPostList } from "./components/functions/postList";

export default async function HomePage() {
  const postList = await getPostList("projects", 5);
  return <ClientHome postList={postList} />;
}

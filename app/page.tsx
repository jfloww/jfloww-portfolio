import ClientHome from './components/templates/ClientHome';
import { getPostList } from './components/functions/importList';

export default async function HomePage() {
  const projList = await getPostList('projects', 5);
  const postList = await getPostList('posts', 5);
  return <ClientHome projList={projList} postList={postList} />;
}

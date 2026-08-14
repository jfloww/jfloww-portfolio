import ClientHome from './components/templates/ClientHome';
import { getPostList } from './components/functions/importList';

export default async function HomePage() {
  const [projList, postList] = await Promise.all([getPostList('projects', 3, 'en'), getPostList('posts', 3, 'en')]);
  return <ClientHome projList={projList} postList={postList} locale="en" />;
}

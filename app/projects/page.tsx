import ProjectsPage from '../components/pages/ProjectsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software project case studies covering product decisions, backend systems, data, and deployment.',
};

export default async function Projects() {
  return <ProjectsPage />;
}

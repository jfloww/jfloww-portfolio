import AboutPage from '../components/pages/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Experience, skills, education, and working style of Jay Jaehoon Jung.',
};

export default function About() {
  return <AboutPage locale="en" />;
}

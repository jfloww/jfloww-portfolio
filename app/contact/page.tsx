import ContactPage from '../components/pages/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Jay Jaehoon Jung by email or through GitHub and LinkedIn.',
};

export default function Contact() {
  return <ContactPage />;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting Services - Strategic, Operations & Digital Transformation',
  description: 'Comprehensive consulting services including strategy consulting, operations management, digital transformation, project management, and organizational development.',
  keywords: ['consulting services', 'strategy consulting', 'operations management', 'digital transformation', 'project management', 'organizational development'],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

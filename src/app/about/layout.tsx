import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sameer Zaheer - Strategic Consultant',
  description: 'Learn about Sameer Zaheer, a strategic consultant with 15+ years of experience in business transformation, operations management, and digital transformation.',
  keywords: ['about sameer zaheer', 'strategic consultant experience', 'business transformation expert', 'consulting background'],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

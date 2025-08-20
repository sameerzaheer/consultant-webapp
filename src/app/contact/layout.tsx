import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Sameer Zaheer - Get Strategic Consulting Help',
  description: 'Get in touch with Sameer Zaheer for strategic consulting, operations management, and digital transformation services. Free initial consultation available.',
  keywords: ['contact sameer zaheer', 'strategic consulting contact', 'business consultation', 'consulting inquiry'],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

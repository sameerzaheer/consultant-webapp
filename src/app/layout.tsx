import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/components/StructuredData';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Sameer Zaheer - Strategic Consultant & Transformation Expert | AutomateThis.ca',
  description: 'Strategic consultant with 15+ years of experience helping organizations optimize operations, drive digital transformation, and achieve sustainable growth. Based in Toronto, Canada.',
  keywords: ['strategic consulting', 'business transformation', 'operations management', 'digital transformation', 'project management', 'toronto consultant', 'canada consulting'],
  authors: [{ name: 'Sameer Zaheer' }],
  metadataBase: new URL('https://automatethis.ca'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Sameer Zaheer - Strategic Consultant | AutomateThis.ca',
    description: 'Strategic consultant with 15+ years of experience helping organizations achieve sustainable growth. Based in Toronto, Canada.',
    url: 'https://automatethis.ca',
    siteName: 'AutomateThis.ca',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sameer Zaheer - Strategic Consultant',
    description: 'Strategic consultant helping organizations optimize operations and achieve sustainable growth.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData type="person" data={null} />
        <StructuredData type="organization" data={null} />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

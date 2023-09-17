import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eris.gg'),
  title: 'Derek Alsop',
  description: 'Full Stack Developer',
  themeColor: '#84d0e2',
  icons: '/avatar.png',
  openGraph: {
    type: 'website',
    url: 'https://eris.gg',
    title: 'Derek Alsop',
    description: 'Full Stack Developer',
    siteName: 'Derek Alsop',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-900 flex`}>{children}</body>
    </html>
  );
}

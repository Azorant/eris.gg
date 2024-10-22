import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eris.gg'),
  title: 'Derek Alsop | @Azorant',
  description: 'Full Stack Developer',
  icons: '/icon.gif',
  openGraph: {
    type: 'website',
    url: 'https://eris.gg',
    title: 'Derek Alsop | @Azorant',
    description: 'Full Stack Developer',
    siteName: 'Derek Alsop | @Azorant',
  },
};

export const viewport: Viewport = {
  themeColor: '#84d0e2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900`}>{children}</body>
    </html>
  );
}

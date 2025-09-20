import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'SoundSync - Discover emerging artists, connect with creators',
  description: 'A web3-native platform for music fans to discover new artists through social listening and directly support creators.',
  openGraph: {
    title: 'SoundSync',
    description: 'Discover emerging artists, connect with creators, and fuel your music passion.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoundSync',
    description: 'Discover emerging artists, connect with creators, and fuel your music passion.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

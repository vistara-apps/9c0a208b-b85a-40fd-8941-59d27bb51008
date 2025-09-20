import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoundSync - Discover Emerging Artists",
  description: "A web3-native platform for music fans to discover new artists through social listening and directly support creators.",
  keywords: ["music", "artists", "web3", "blockchain", "indie", "streaming", "support"],
  authors: [{ name: "SoundSync Team" }],
  openGraph: {
    title: "SoundSync - Discover Emerging Artists",
    description: "Connect with indie artists, support their music, and discover your next favorite track.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoundSync - Discover Emerging Artists",
    description: "A web3-native platform for music discovery and artist support.",
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://soundsync.app/og-image.png",
    "fc:frame:button:1": "🎵 Start Listening",
    "fc:frame:button:2": "🎨 For Artists",
    "fc:frame:post_url": "https://soundsync.app/api/frame",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Base Mini App Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}


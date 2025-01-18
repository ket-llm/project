import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import localFont from 'next/font/local'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const originalsTypeface = localFont({
  src: '../public/fonts/old-originals.ttf',
  variable: '--font-originals'
})

export const metadata: Metadata = {
  title: 'Modern Landing Page',
  description: 'A modern, visually striking landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} font-sans ${originalsTypeface.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
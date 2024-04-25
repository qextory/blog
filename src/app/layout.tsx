import '@/app/_styles/globals.css';

import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { siteConfig } from '@/shared/config';
import { cn } from '@/shared/lib';

import { ThemeProvider } from './_providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Blog', 'React', 'Tailwind CSS', 'Frontend', 'Radix UI', 'Shadcn/ui'],
  authors: [
    {
      name: 'qextory',
      url: 'https://www.qextory.com',
    },
  ],
  creator: 'qextory',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@qextory',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteConfig.url}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const GTM_ID = process.env.GTM_ID as string;

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='ko' suppressHydrationWarning>
      <GoogleTagManager gtmId={GTM_ID} />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='relative flex min-h-screen flex-col bg-background'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ParticleBackground from '@/components/ParticleBackground';
import GrainOverlay from '@/components/GrainOverlay';
import Watermark from '@/components/Watermark';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Apex Capital Partners | Private Equity Investment Firm | BTY Technology',
    template: '%s | Apex Capital Partners | BTY Technology',
  },
  description:
    'Leading private equity firm focused on growth investments in technology, healthcare, and financial services. Building exceptional businesses through strategic capital and operational expertise.',
  keywords: [
    'private equity',
    'growth equity',
    'venture capital',
    'investment firm',
    'technology investments',
    'healthcare investments',
    'financial services',
  ],
  authors: [{ name: 'Apex Capital Partners' }],
  creator: 'Apex Capital Partners',
  icons: {
    icon: '/btyfavi.svg',
    shortcut: '/btyfavi.svg',
    apple: '/btyfavi.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Apex Capital Partners',
    title: 'Apex Capital Partners | Private Equity Investment Firm',
    description:
      'Leading private equity firm focused on growth investments in technology, healthcare, and financial services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Capital Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Capital Partners | Private Equity Investment Firm',
    description:
      'Leading private equity firm focused on growth investments in technology, healthcare, and financial services.',
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ParticleBackground />
        <GrainOverlay />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <Watermark />
      </body>
    </html>
  );
}

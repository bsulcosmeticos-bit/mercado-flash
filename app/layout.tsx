import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: '#16a34a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Mercado Fresh',
  description: 'Organize suas listas de compras de forma inteligente mesmo offline.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Mercado Fresh',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-slate-50">
        {children}
      </body>
    </html>
  );
}

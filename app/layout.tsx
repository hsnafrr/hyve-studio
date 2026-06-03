import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hyve Studio - Premium Web Design & Digital Systems',
  description: 'Build your digital future with Hyve Studio. We create modern websites and scalable digital systems for Indonesian businesses with premium design and high performance.',
  keywords: 'web design, website development, digital systems, Indonesia, SaaS, e-commerce',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Hyve Studio - Premium Web Design & Digital Systems',
    description: 'Build your digital future with Hyve Studio. Modern websites and scalable digital systems.',
    type: 'website',
    url: 'https://hyve-studio.com',
    images: [
      {
        url: '/images/logo.png',
        width: 200,
        height: 200,
        alt: 'Hyve Studio Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

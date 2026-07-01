import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost, Geist_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nilo Makeover Salon | Luxury Bridal Makeup & Beauty in Patna',
  description:
    'Nilo Makeover Salon in Phulwari Sharif, Patna offers premium bridal makeup, party makeup, hair styling, facials, beauty treatments and professional makeup training. Book your appointment today.',
  keywords: [
    'bridal makeup Patna',
    'makeup artist Patna',
    'beauty salon Patna',
    'party makeup Patna',
    'makeup academy Patna',
    'Nilo Makeover Salon',
    'Phulwari Sharif salon',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Nilo Makeover Salon | Luxury Bridal Makeup & Beauty in Patna',
    description:
      'Premium bridal & party makeup, hair styling, beauty treatments and makeup training in Patna.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Instrument_Sans, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sreevarshan Sathiyamurthy | Data Analytics Engineer',
  description: 'Portfolio of Sreevarshan Sathiyamurthy - Data Analytics Engineering graduate student at Northeastern University',
  keywords: ['Data Analytics', 'Machine Learning', 'Data Engineering', 'AI', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSans.variable} ${libreBaskerville.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}

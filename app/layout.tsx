import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Caveat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/layout/ThemeProvider'
import { LenisProvider } from '../components/layout/LenisProvider'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-accent' })

export const metadata: Metadata = {
  title: 'CodeHurdle - DSA Learning Platform',
  description: 'Crack top tech companies with our pattern-based DSA learning platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="lenis" suppressHydrationWarning>
      <body className={`${inter.className} font-body antialiased ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}>
        <ThemeProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono, Caveat } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '../components/layout/LenisProvider'
import { ThemeProvider } from '../components/layout/ThemeProvider'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
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
      <body className={`${inter.className} font-body antialiased ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} bg-[var(--canvas)] text-[var(--ink)]`}>
        <LenisProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  )
}

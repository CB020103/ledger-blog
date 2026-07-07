import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: 'The Ledger — notes on learning finance & CRE',
  description: 'A running ledger of what I\'m learning: models, memos, and the occasional mistake.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body bg-paper text-ink min-h-screen flex flex-col">
        <header className="border-b border-ink">
          <div className="max-w-3xl mx-auto px-6 py-5 flex items-baseline justify-between">
            <a href="/" className="font-display text-2xl tracking-tight">
              The Ledger
            </a>
            <span className="font-mono text-xs text-ink/60 uppercase tracking-widest">
              Vol. 01 — learning in public
            </span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-ink mt-16">
          <div className="max-w-3xl mx-auto px-6 py-6 font-mono text-xs text-ink/60 flex justify-between">
            <span>Built with Next.js — updated whenever something clicks.</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </body>
    </html>
  )
}

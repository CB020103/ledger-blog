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
            <div className="flex items-baseline gap-4">
              <div>
                <a href="/" className="font-display text-2xl tracking-tight block">
                  The Ledger
                </a>
                <p className="font-mono text-[11px] text-ink/50 tracking-wide mt-0.5">
                  by Connor Buck
                </p>
              </div>
              <a href="/about" className="font-mono text-xs uppercase tracking-widest hover:text-brass transition-colors border-l border-rule pl-4">
                About
              </a>
            </div>
            <nav className="flex items-baseline gap-5 font-mono text-xs uppercase tracking-widest">
              <a href="/blog" className="hover:text-brass transition-colors">Blog</a>
              <a href="/portfolio" className="hover:text-brass transition-colors">Portfolio</a>
            </nav>
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

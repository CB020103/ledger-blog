import type { Metadata } from 'next'
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
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
  title: 'The Ledger: notes on learning finance & CRE',
  description: 'A running ledger of what I\'m learning: models, memos, and the occasional mistake.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body bg-canvas text-ink min-h-screen flex flex-col">
        <header className="border-b border-ink">
          <div className="max-w-3xl mx-auto px-6 py-5 flex items-baseline justify-between">
            <div>
              <a href="/" className="font-display font-semibold text-2xl tracking-tight block">
                The Ledger
              </a>
              <p className="font-mono text-[11px] text-ink/50 tracking-wide mt-0.5 uppercase">
                by Connor Buck
              </p>
            </div>
            <nav className="flex items-baseline gap-5 font-mono text-[11px] tracking-widest uppercase">
              <a href="/about" className="hover:text-signal transition-colors">about</a>
              <a href="/blog" className="hover:text-signal transition-colors">blog</a>
              <a href="/macro" className="hover:text-signal transition-colors">macro perspectives</a>
              <a href="/portfolio" className="hover:text-signal transition-colors">portfolio</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-ink mt-16">
          <div className="max-w-3xl mx-auto px-6 py-6 font-mono text-xs text-ink/60 flex justify-between">
            <span>Built with Next.js. Updated whenever something clicks.</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </body>
    </html>
  )
}

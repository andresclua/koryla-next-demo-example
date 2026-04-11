import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Koryla Next.js Demo',
  description: 'Three live A/B testing examples using @koryla/next middleware',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className} style={{ background: '#fff', color: '#0F2235' }}>
        <nav style={{ borderBottom: '1px solid #e5e7eb', padding: '0 40px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '16px', color: '#0F2235' }}>Koryla</span>
            <span style={{ color: '#e5e7eb' }}>·</span>
            <span style={{ fontSize: '14px', color: '#9ca3af', fontWeight: 500 }}>Next.js Demo</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#6b7280', alignItems: 'center' }}>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#6b7280' }}>Pricing</a>
            <a href="/hero" style={{ textDecoration: 'none', color: '#C96A3F', fontWeight: 600 }}>Layout demo</a>
            <a href="/thank-you" style={{ background: '#C96A3F', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>Get started</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

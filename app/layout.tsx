import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Koryla Next.js Demo',
  description: 'Five live A/B testing examples using @koryla/next',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2WHFKC7B38" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-2WHFKC7B38');` }} />
      </head>
      <body className={spaceGrotesk.className} style={{ background: '#fff', color: '#0F2235' }}>
        <nav style={{ borderBottom: '1px solid #e5e7eb', padding: '0 40px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '16px', color: '#0F2235' }}>Koryla</span>
            <span style={{ color: '#e5e7eb' }}>·</span>
            <span style={{ fontSize: '14px', color: '#9ca3af', fontWeight: 500 }}>Next.js Demo</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#6b7280', alignItems: 'center' }}>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#0F2235' }}>Pricing</a>
            <a href="/hero" style={{ textDecoration: 'none', color: '#C96A3F', fontWeight: 600 }}>Layout demo</a>
            <a href="/demo-sdk" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>SDK</a>
            <a href="/demo-edge" style={{ textDecoration: 'none', color: '#C96A3F', fontWeight: 600 }}>Edge</a>
            <a href="/demo-combined" style={{ textDecoration: 'none', color: '#059669', fontWeight: 600 }}>Combined</a>
            <a href="https://github.com/andresclua/koryla-next-demo-example" target="_blank" rel="noopener" style={{ textDecoration: 'none', color: '#6b7280', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: .7 }}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="/thank-you" style={{ background: '#C96A3F', color: '#fff', padding: '7px 18px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', marginLeft: '8px' }}>Get started</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

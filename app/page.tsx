import Link from 'next/link'

const demos = [
  {
    href: '/hero',
    number: '01',
    type: 'Edge · Layout',
    title: 'Hero Layout Test',
    description: 'Two completely different page layouts behind the same URL. Middleware rewrites /hero → /hero-b transparently. No JavaScript on the page.',
    what: ['Control: Single-column — "Ship faster with data"', 'Variant B: Two-column with feature cards — "Build what users actually want"'],
    color: '#C96A3F',
    bg: '#FEF0E8',
  },
  {
    href: '/pricing',
    number: '02',
    type: 'Edge · Content',
    title: 'Pricing Page Test',
    description: 'Same 3-tier pricing, different page length. Variant B adds a FAQ section to test whether more information increases conversions.',
    what: ['Control: 3-tier grid, no FAQ', 'Variant B: 3-tier grid + FAQ section below'],
    color: '#0F2235',
    bg: '#F5EDE0',
  },
  {
    href: '/demo-edge',
    number: '03',
    type: 'Edge · URL rewrite',
    title: 'Edge Rewrite Explainer',
    description: 'Visual walkthrough of how the middleware intercepts a request and rewrites the URL server-side — browser sees no change.',
    what: ['Control: Light page — steps shown on white background', 'Variant B: Dark page — same steps, navy background'],
    color: '#0F2235',
    bg: '#f0f4f8',
  },
  {
    href: '/demo-sdk',
    number: '04',
    type: 'SDK · UTM',
    title: 'SDK Button Style Test',
    description: 'No middleware — just searchParams. The server reads the UTM parameter and renders a different button style. Same URL, no cookies.',
    what: ['Control: Outlined button (border only)', 'Variant B: Filled terracotta button — add ?utm_style=variation-1'],
    color: '#C96A3F',
    bg: '#FEF0E8',
  },
  {
    href: '/demo-combined',
    number: '05',
    type: 'Edge + SDK',
    title: 'Combined Layers',
    description: 'Two independent layers: edge controls the page layout, SDK controls the button style. Four possible combinations.',
    what: ['Layer 1 (Edge): single-col control vs two-col variant B', 'Layer 2 (SDK): outlined vs filled button via ?utm_style'],
    color: '#0F2235',
    bg: '#F5EDE0',
  },
]

export default function Home() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '80px 40px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-block', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.3px' }}>
          LIVE DEMO · NEXT.JS MIDDLEWARE
        </div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '16px', color: '#0F2235' }}>
          Five ways to A/B test<br />with Next.js
        </h1>
        <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '520px', lineHeight: 1.6, marginBottom: '16px' }}>
          Each experiment is live — powered by <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>@koryla/next</code>.
          The server assigns variants before any HTML is sent. Zero flicker, zero JS overhead.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#9ca3af' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Middleware active on /hero · /pricing · /demo-edge · /demo-combined
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {demos.map((demo) => (
          <Link key={demo.href} href={demo.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '24px', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, background: demo.bg, color: demo.color }}>
                {demo.number}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', background: demo.bg, color: demo.color, letterSpacing: '.3px' }}>{demo.type.toUpperCase()}</span>
                </div>
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0F2235', marginBottom: '4px' }}>{demo.title}</h2>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.5, marginBottom: '12px' }}>{demo.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {demo.what.map((w, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
                      <span style={{ marginTop: '5px', width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: i === 0 ? '#d1d5db' : demo.color }} />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <span style={{ color: '#d1d5db', fontSize: '18px', flexShrink: 0 }}>→</span>
            </div>
          </Link>
        ))}
      </div>

      <p style={{ marginTop: '40px', fontSize: '12px', textAlign: 'center', color: '#9ca3af' }}>
        Clear your cookies to be re-assigned. Edge experiments use a <code style={{ background: '#F5EDE0', padding: '1px 5px', borderRadius: '4px' }}>ky_</code> cookie. SDK experiments use URL params.
      </p>
    </main>
  )
}

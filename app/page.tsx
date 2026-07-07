import Link from 'next/link'

const demos = [
  {
    href: '/hero', number: '01', type: 'Edge · Layout',
    title: 'Hero Layout Test',
    description: 'Two completely different page layouts behind the same URL. The edge assigns the variant transparently — browser sees no change.',
    what: ['Control: Single-column — "Ship faster with data"', 'Variant B: Two-column with feature cards — "Build what users actually want"'],
    color: '#C96A3F', bg: '#FEF0E8',
  },
  {
    href: '/pricing', number: '02', type: 'Edge · Content',
    title: 'Pricing Page Test',
    description: 'Two entirely separate pricing pages. The edge sends half the traffic to /pricing-b — a completely different pricing structure.',
    what: ['Control: 3-tier grid (Free / Starter / Growth)', 'Variant B: 2-tier with annual billing toggle'],
    color: '#0F2235', bg: '#F5EDE0',
  },
  {
    href: '/demo-edge', number: '03', type: 'Edge · URL rewrite',
    title: 'Edge Rewrite Explainer',
    description: 'Visual walkthrough of how the edge intercepts a request and rewrites the URL server-side — the browser never sees the internal path.',
    what: ['Control: Light page — steps shown on white background', 'Variant B: Dark page — same steps, navy background'],
    color: '#0F2235', bg: '#f0f4f8',
  },
  {
    href: '/demo-sdk', number: '04', type: 'SDK · UTM',
    title: 'SDK Content Test',
    description: 'No edge rewrite — the server reads ?utm_koryla and renders a different content block. Same URL, zero cookies.',
    what: ['Control: "The fastest way to A/B test." + outlined button', 'Variation-1: "Stop guessing. Start winning." + filled button — add ?utm_koryla=variation-1'],
    color: '#C96A3F', bg: '#FEF0E8',
  },
  {
    href: '/demo-combined', number: '05', type: 'Edge + SDK',
    title: 'Combined Layers',
    description: 'Two independent layers: edge controls the page layout, SDK controls the content block. Four possible combinations from one URL.',
    what: ['Layer 1 (Edge): single-col control vs two-col variant B', 'Layer 2 (SDK): control copy vs variation-1 — add ?utm_koryla=variation-1'],
    color: '#0F2235', bg: '#F5EDE0',
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
          Each experiment is live — powered by <code style={{ background: '#F5EDE0', padding: '1px 5px', borderRadius: '4px' }}>@koryla/next</code>.
          The server assigns variants before any HTML is sent. Zero flicker, zero JS overhead.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#9ca3af' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Middleware active on /hero · /pricing · /demo-edge · /demo-combined
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {demos.map((demo) => (
          <Link key={demo.href} href={demo.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '24px', textDecoration: 'none' }}>
            <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, background: demo.bg, color: demo.color }}>
              {demo.number}
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', background: demo.bg, color: demo.color, letterSpacing: '.3px' }}>{demo.type.toUpperCase()}</span>
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0F2235', margin: '6px 0 4px' }}>{demo.title}</h2>
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
          </Link>
        ))}
      </div>

      <p style={{ marginTop: '40px', fontSize: '12px', textAlign: 'center', color: '#9ca3af' }}>
        Clear your cookies to be re-assigned. Edge experiments use a <code style={{ background: '#F5EDE0', padding: '1px 5px', borderRadius: '4px' }}>ky_</code> cookie. SDK experiments use URL params.
      </p>
    </main>
  )
}

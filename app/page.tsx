import Link from 'next/link'

const demos = [
  {
    href: '/headline',
    number: '01',
    type: 'Text change',
    title: 'Headline Copy Test',
    description: 'Same page, two different headlines. The middleware rewrites the URL server-side — the browser always sees /headline, but 50% of visitors get different copy.',
    what: ['Control: "Know what your users actually do"', 'Variant B: "Stop guessing. Start converting."'],
    color: '#C96A3F',
    bg: '#FEF0E8',
  },
  {
    href: '/hero',
    number: '02',
    type: 'Layout change',
    title: 'Hero Layout Test',
    description: 'Two completely different page layouts behind the same URL. Koryla rewrites /hero → /hero-b transparently. No JavaScript required on the page.',
    what: ['Control: Centered single-column layout', 'Variant B: Two-column with feature cards'],
    color: '#0F2235',
    bg: '#F5EDE0',
  },
  {
    href: '/pricing',
    number: '03',
    type: 'URL change',
    title: 'Pricing Page Test',
    description: 'Two entirely separate pages at different URLs. The middleware intercepts /pricing and sends half the traffic to /pricing-b — a completely different pricing structure.',
    what: ['Control: 3-tier pricing (Hobby / Pro / Enterprise)', 'Variant B: 2-tier with annual billing toggle'],
    color: '#0F2235',
    bg: '#f0f4f8',
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
          Three ways to A/B test<br />with Next.js middleware
        </h1>
        <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '520px', lineHeight: 1.6, marginBottom: '16px' }}>
          Each experiment below is live — powered by <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>@koryla/next</code> middleware.
          The server assigns you a variant before any HTML is sent. Zero flicker, zero JS overhead.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#9ca3af' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Middleware active on /headline · /hero · /pricing
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
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
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
        Clear your cookies to be re-assigned. Each experiment uses a <code style={{ background: '#F5EDE0', padding: '1px 5px', borderRadius: '4px' }}>ky_</code> cookie to keep you on the same variant.
      </p>
    </main>
  )
}

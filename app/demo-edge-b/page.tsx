import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

export default function DemoEdgeBPage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="b — /demo-edge" />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        EDGE EXPERIMENT · TRANSPARENT URL REWRITE
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        You're on variant B.
      </h1>
      <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.65, marginBottom: '40px' }}>
        Your browser shows <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>/demo-edge</code> — but the middleware
        silently rewrote your request to <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>/demo-edge-b</code>.
        Zero JavaScript, zero flicker.
      </p>

      <div style={{ background: '#0F2235', borderRadius: '20px', padding: '28px', marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '16px' }}>What happened server-side</p>
        {[
          'Request arrived at the Next.js edge middleware',
          'Middleware checked your ky_ cookie — no assignment found',
          'Random 50/50 split → you got variant B',
          'Cookie set: ky_<experiment-id>=<variant-id>',
          'NextResponse.rewrite("/demo-edge-b") — this page served',
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < 4 ? '10px' : 0 }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#1a3a5c', color: '#C96A3F', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
            <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: 1.5, margin: 0 }}>{step}</p>
          </div>
        ))}
      </div>

      <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
        Trigger a conversion →
      </a>
      <p style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af' }}>
        Clear your cookies and reload to try getting the control.
      </p>
    </main>
  )
}

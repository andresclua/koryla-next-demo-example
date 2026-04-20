import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_style?: string }>
}

export default async function DemoCombinedBPage({ searchParams }: Props) {
  const params = await searchParams
  const filledButton = params.utm_style === 'variation-1'

  const featureCards = [
    ['🚀', 'Edge-first', 'Middleware runs before any React renders.'],
    ['🔬', 'SDK layer', 'Component-level control with zero extra requests.'],
    ['📈', 'Both tracked', 'Each layer records its own impressions independently.'],
  ]

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="b — /demo-combined" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
            COMBINED EXPERIMENT · EDGE + SDK
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
            Koryla on Next.js —<br />two layers of control.
          </h1>

          <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.65, marginBottom: '28px' }}>
            Edge assigned you variant B (two-column layout).
            The SDK still controls the button style independently.
          </p>

          <div style={{ marginBottom: '16px' }}>
            {filledButton ? (
              <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Start free today
              </a>
            ) : (
              <a href="/thank-you" style={{ display: 'inline-block', background: 'transparent', color: '#C96A3F', padding: '12px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', border: '2px solid #C96A3F' }}>
                Start free today
              </a>
            )}
          </div>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>
            Button: {filledButton ? 'SDK variant B (filled)' : 'SDK control (outlined)'}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {featureCards.map(([icon, title, desc]) => (
            <div key={title as string} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '14px', padding: '16px 20px' }}>
              <span style={{ fontSize: '22px' }}>{icon}</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F2235', margin: 0 }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px', marginBottom: 0 }}>{desc}</p>
              </div>
            </div>
          ))}

          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '16px 20px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '8px' }}>Try combinations</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="/demo-combined" style={{ fontSize: '12px', color: '#0F2235', background: '#fff', border: '1px solid #e5e7eb', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>Control layout</a>
              <a href="/demo-combined-b?utm_style=variation-1" style={{ fontSize: '12px', color: '#fff', background: '#C96A3F', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>B layout + filled btn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

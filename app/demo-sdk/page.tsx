import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_style?: string }>
}

export default async function DemoSdkPage({ searchParams }: Props) {
  const params = await searchParams
  const isVariantB = params.utm_style === 'variation-1'

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label={isVariantB ? 'b — /demo-sdk' : 'control — /demo-sdk'} />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        SDK EXPERIMENT · BUTTON STYLE
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        Same URL.<br />Different button.
      </h1>

      <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '480px', margin: '0 auto 16px', lineHeight: 1.6 }}>
        The server reads <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>searchParams</code> to assign a variant.
        No middleware, no cookies — just a URL parameter.
      </p>

      <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '48px' }}>
        Currently showing: <strong style={{ color: '#0F2235' }}>{isVariantB ? 'Variant B — filled button' : 'Control — outlined button'}</strong>
      </p>

      {/* The experiment: button style */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px' }}>
        {isVariantB ? (
          <a href="/thank-you" style={{
            display: 'inline-block', background: '#C96A3F', color: '#fff',
            padding: '14px 36px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
          }}>
            Start free today
          </a>
        ) : (
          <a href="/thank-you" style={{
            display: 'inline-block', background: 'transparent', color: '#C96A3F',
            padding: '14px 36px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            border: '2px solid #C96A3F',
          }}>
            Start free today
          </a>
        )}
      </div>

      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '12px' }}>Try both variants</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/demo-sdk" style={{ fontSize: '13px', color: '#0F2235', background: '#fff', border: '1px solid #e5e7eb', padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>
            Control (outlined)
          </a>
          <a href="/demo-sdk?utm_style=variation-1" style={{ fontSize: '13px', color: '#fff', background: '#C96A3F', padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>
            Variant B (filled) →
          </a>
        </div>
      </div>
    </main>
  )
}

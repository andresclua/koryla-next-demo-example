import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_style?: string }>
}

export default async function DemoCombinedPage({ searchParams }: Props) {
  const params = await searchParams
  const filledButton = params.utm_style === 'variation-1'

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="control — /demo-combined" />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        COMBINED EXPERIMENT · EDGE + SDK
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        Koryla on Next.js —<br />two layers of control.
      </h1>

      <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.65, marginBottom: '40px' }}>
        <strong style={{ color: '#0F2235' }}>Layer 1 — Edge:</strong> middleware assigned you the control layout (this single-column page).
        <br /><br />
        <strong style={{ color: '#0F2235' }}>Layer 2 — SDK:</strong> <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>searchParams</code> controls the button style.
        Add <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>?utm_style=variation-1</code> to see the filled variant.
      </p>

      <div style={{ marginBottom: '32px' }}>
        {filledButton ? (
          <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
            Start free today
          </a>
        ) : (
          <a href="/thank-you" style={{ display: 'inline-block', background: 'transparent', color: '#C96A3F', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '2px solid #C96A3F' }}>
            Start free today
          </a>
        )}
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
          Button style: {filledButton ? 'SDK variant B (filled)' : 'SDK control (outlined)'}
        </p>
      </div>

      <div style={{ background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '16px', padding: '24px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '12px' }}>Try combinations</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="/demo-combined" style={{ fontSize: '12px', color: '#0F2235', background: '#fff', border: '1px solid #EAD9C4', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>Edge control + SDK control</a>
          <a href="/demo-combined?utm_style=variation-1" style={{ fontSize: '12px', color: '#0F2235', background: '#fff', border: '1px solid #EAD9C4', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>Edge control + SDK B</a>
        </div>
        <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '10px', marginBottom: 0 }}>Clear cookies to be re-assigned by the edge layer.</p>
      </div>
    </main>
  )
}

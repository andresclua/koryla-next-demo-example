import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_koryla?: string }>
}

export default async function DemoSdkPage({ searchParams }: Props) {
  const params = await searchParams
  const sdkVariation = params.utm_koryla === 'variation-1'

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label={sdkVariation ? 'b — /demo-sdk' : 'control — /demo-sdk'} />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        SDK EXPERIMENT · CONTENT + STYLE
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        Same URL.<br />Different content.
      </h1>

      <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.6 }}>
        <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>getVariant()</code> runs server-side during SSR.
        The variant is assigned before any HTML is sent — same URL, different content, zero flicker.
      </p>

      <div style={{ background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '16px', padding: '28px 32px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F2235', letterSpacing: '-0.5px', margin: 0 }}>
          {sdkVariation ? 'Stop guessing. Start winning.' : 'The fastest way to A/B test.'}
        </p>
        <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, marginBottom: '8px' }}>
          {sdkVariation ? 'Run your first experiment in minutes, not weeks.' : 'No flicker. No latency. Just results.'}
        </p>
        {sdkVariation ? (
          <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', alignSelf: 'flex-start' }}>
            Make it happen →
          </a>
        ) : (
          <a href="/thank-you" style={{ display: 'inline-block', background: 'transparent', color: '#C96A3F', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '2px solid #C96A3F', alignSelf: 'flex-start' }}>
            Get started →
          </a>
        )}
        <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>SDK: {sdkVariation ? 'variation-1' : 'control'}</p>
      </div>

      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '12px' }}>Try both variants</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/demo-sdk" style={{ fontSize: '13px', color: '#0F2235', background: '#fff', border: '1px solid #e5e7eb', padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>
            Control
          </a>
          <a href="/demo-sdk?utm_koryla=variation-1" style={{ fontSize: '13px', color: '#fff', background: '#C96A3F', padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>
            Variation-1 →
          </a>
        </div>
      </div>
    </main>
  )
}

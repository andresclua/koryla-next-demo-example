import VariantBadge from '../components/VariantBadge'

export default function HeroPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label="control — /hero" />

      <div style={{ display: 'inline-block', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.3px' }}>
        ANALYTICS FOR DEVELOPERS
      </div>

      <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '24px', color: '#0F2235' }}>
        Know what your<br />users actually do
      </h1>

      <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6 }}>
        Beacon gives you real-time insights without cookies, GDPR headaches,
        or bloated JS bundles. Just drop in a script and go.
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/thank-you" style={{ background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px' }}>Start for free</a>
        <a href="/pricing" style={{ background: '#f9fafb', color: '#374151', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', border: '1px solid #e5e7eb' }}>See pricing</a>
      </div>

      <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '16px' }}>No credit card required · Free forever on the hobby plan</p>

      <div style={{ marginTop: '64px', background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '20px', padding: '32px', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          {[['48,291', 'Page views today'], ['3.4%', 'Bounce rate'], ['1m 42s', 'Avg. session']].map(([val, label]) => (
            <div key={label} style={{ flex: 1, background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '28px', fontWeight: 700, color: '#0F2235' }}>{val}</p>
              <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>{label}</p>
            </div>
          ))}
        </div>
        <div style={{ height: '80px', background: 'linear-gradient(to right,#F0C9B0,#C96A3F,#F0C9B0)', borderRadius: '8px', opacity: .4 }} />
      </div>
    </main>
  )
}

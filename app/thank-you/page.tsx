export const dynamic = 'force-static'

export default function ThankYouPage() {
  return (
    <main style={{ maxWidth: '560px', margin: '0 auto', padding: '100px 40px', textAlign: 'center' }}>
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#C96A3F', color: '#fff', fontSize: '24px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>✓</div>

      <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', color: '#0F2235', marginBottom: '12px' }}>Conversion recorded.</h1>
      <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.6, marginBottom: '40px' }}>
        This page is the conversion goal for all three experiments.
        When you clicked a CTA, Koryla logged the event and attributed it to your assigned variant.
      </p>

      <div style={{ background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '20px', padding: '28px', textAlign: 'left', marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '16px' }}>What just happened</p>
        {[
          'You were assigned a variant when you first visited an experiment URL.',
          'That assignment was stored in a ky_ cookie — so you\'d see the same variant on repeat visits.',
          'Clicking a CTA landed you here — Koryla matched the conversion to your variant and updated the experiment stats.',
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < 2 ? '12px' : 0 }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FEF0E8', color: '#C96A3F', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.5 }}>{text}</p>
          </div>
        ))}
      </div>

      <a href="/" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px' }}>
        ← Back to all demos
      </a>

      <p style={{ marginTop: '24px', fontSize: '12px', color: '#9ca3af' }}>Clear your cookies to be re-assigned to a fresh variant.</p>
    </main>
  )
}

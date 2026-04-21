import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

const plans = [
  {
    name: 'HOBBY', price: '$0', period: '/month forever',
    cta: 'Get started', primary: false,
    features: ['10,000 events/mo', '1 site', '30-day retention'],
  },
  {
    name: 'PRO', price: '$29', period: '/month',
    cta: 'Start free trial', primary: true, popular: true,
    features: ['1M events/mo', '10 sites', '1-year retention', 'Custom dashboards'],
  },
  {
    name: 'ENTERPRISE', price: '$99', period: '/month',
    cta: 'Contact sales', primary: false,
    features: ['Unlimited events', 'Unlimited sites', 'SSO / SAML', 'SLA + priority support'],
  },
]

export default function PricingPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label="control — /pricing" />

      <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '12px', color: '#0F2235' }}>
        Simple pricing
      </h1>
      <p style={{ color: '#6b7280', fontSize: '17px', marginBottom: '56px' }}>
        Start free. Upgrade when you need more.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            border: plan.popular ? '2px solid #C96A3F' : '1px solid #e5e7eb',
            borderRadius: '20px', padding: '28px', textAlign: 'left', position: 'relative',
            background: '#fff',
          }}>
            {plan.popular && (
              <span style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                background: '#C96A3F', color: '#fff', fontSize: '11px', fontWeight: 700,
                padding: '4px 12px', borderRadius: '999px', whiteSpace: 'nowrap',
              }}>MOST POPULAR</span>
            )}
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#6b7280', marginBottom: '12px' }}>{plan.name}</p>
            <p style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-1px', color: '#0F2235', margin: 0 }}>{plan.price}</p>
            <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '24px' }}>{plan.period}</p>
            <a href="/thank-you" style={{
              display: 'block', textAlign: 'center', borderRadius: '10px', padding: '10px',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none', marginBottom: '24px',
              background: plan.primary ? '#C96A3F' : '#fff',
              color: plan.primary ? '#fff' : '#374151',
              border: plan.primary ? 'none' : '1px solid #e5e7eb',
            }}>{plan.cta}</a>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {plan.features.map(f => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

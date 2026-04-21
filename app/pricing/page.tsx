import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

const plans = [
  {
    name: 'Free', price: '$0', period: '/ forever',
    cta: 'Get started', popular: false,
    features: ['1 workspace', '3 experiments', 'Edge + SDK testing'],
  },
  {
    name: 'Starter', price: '$29', period: '/ per month',
    cta: 'Get started', popular: true,
    features: ['3 workspaces', 'Unlimited experiments', 'All analytics integrations', 'Email support'],
  },
  {
    name: 'Growth', price: '$79', period: '/ per month',
    cta: 'Get started', popular: false,
    features: ['Unlimited workspaces', 'Unlimited experiments', 'Priority support', 'Custom webhooks'],
  },
]

export default function PricingPage() {
  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label="control — /pricing" />

      <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '12px', color: '#0F2235' }}>
        Simple, transparent pricing
      </h1>
      <p style={{ color: '#6b7280', fontSize: '17px', marginBottom: '56px' }}>
        Start free. Scale when you're ready.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            background: plan.popular ? '#0F2235' : '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '20px', padding: '32px', textAlign: 'left', position: 'relative',
          }}>
            {plan.popular && (
              <span style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                background: '#C96A3F', color: '#fff', fontSize: '12px', fontWeight: 700,
                padding: '5px 16px', borderRadius: '999px', whiteSpace: 'nowrap',
              }}>Most popular</span>
            )}
            <p style={{ fontSize: '18px', fontWeight: 700, color: plan.popular ? '#fff' : '#0F2235', marginBottom: '8px' }}>{plan.name}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '24px' }}>
              <span style={{ fontSize: '42px', fontWeight: 800, color: plan.popular ? '#fff' : '#0F2235' }}>{plan.price}</span>
              <span style={{ fontSize: '15px', color: plan.popular ? '#9ca3af' : '#6b7280' }}>{plan.period}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: plan.popular ? '#d1d5db' : '#4b5563' }}>
                  <span style={{ color: '#C96A3F', fontWeight: 700 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="/thank-you" style={{
              display: 'block', textAlign: 'center', borderRadius: '12px', padding: '12px 20px',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              background: plan.popular ? '#C96A3F' : '#FEF0E8',
              color: plan.popular ? '#fff' : '#C96A3F',
            }}>{plan.cta}</a>
          </div>
        ))}
      </div>
    </main>
  )
}

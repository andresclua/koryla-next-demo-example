import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

const tiers = [
  {
    name: 'Hobby', price: '$0', period: '/mo', color: '#9ca3af',
    features: ['1 experiment', '250 impressions/mo', '1 workspace', 'Community support'],
    cta: 'Get started free', href: '/thank-you', primary: false,
  },
  {
    name: 'Pro', price: '$29', period: '/mo', color: '#C96A3F',
    features: ['10 experiments', '50,000 impressions/mo', '5 workspaces', 'Email support', 'GA4 + PostHog'],
    cta: 'Start free trial', href: '/thank-you', primary: true,
  },
  {
    name: 'Enterprise', price: '$99', period: '/mo', color: '#0F2235',
    features: ['Unlimited experiments', 'Unlimited impressions', 'Unlimited workspaces', 'Priority support', 'Custom integrations', 'SLA'],
    cta: 'Contact sales', href: '/thank-you', primary: false,
  },
]

const faqs = [
  { q: 'How does billing work?', a: 'You\'re billed monthly or annually. You can upgrade, downgrade, or cancel at any time from your dashboard.' },
  { q: 'What counts as an impression?', a: 'One impression = one unique visitor assigned to a variant. Re-visits by the same session don\'t count.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your dashboard and your plan stays active until the end of the billing period.' },
  { q: 'Do you offer a free trial?', a: 'The Hobby plan is free forever. Paid plans have a 14-day trial — no credit card required.' },
]

export default function PricingBPage() {
  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="b — /pricing" />

      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px' }}>
          Simple, transparent pricing
        </h1>
        <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
          Start free, scale as you grow. No contracts, no surprises.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '64px' }}>
        {tiers.map((tier) => (
          <div key={tier.name} style={{
            background: tier.primary ? '#0F2235' : '#fff',
            border: `1px solid ${tier.primary ? '#0F2235' : '#e5e7eb'}`,
            borderRadius: '20px', padding: '32px',
            display: 'flex', flexDirection: 'column', gap: '24px',
          }}>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 700, color: tier.primary ? '#C96A3F' : '#9ca3af', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '8px' }}>{tier.name}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800, color: tier.primary ? '#fff' : '#0F2235' }}>{tier.price}</span>
                <span style={{ fontSize: '14px', color: tier.primary ? '#9ca3af' : '#6b7280' }}>{tier.period}</span>
              </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {tier.features.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: tier.primary ? '#d1d5db' : '#4b5563' }}>
                  <span style={{ color: '#C96A3F', fontWeight: 700, fontSize: '16px' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href={tier.href} style={{
              display: 'block', textAlign: 'center', padding: '12px 20px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
              background: tier.primary ? '#C96A3F' : '#f9fafb',
              color: tier.primary ? '#fff' : '#374151',
              border: tier.primary ? 'none' : '1px solid #e5e7eb',
            }}>
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* FAQ section — only in variant B */}
      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '56px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F2235', marginBottom: '32px', textAlign: 'center' }}>Frequently asked questions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{ background: '#f9fafb', borderRadius: '16px', padding: '24px' }}>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#0F2235', marginBottom: '8px' }}>{faq.q}</p>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

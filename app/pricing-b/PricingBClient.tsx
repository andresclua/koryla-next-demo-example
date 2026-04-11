'use client'

import { useState } from 'react'
import VariantBadge from '../components/VariantBadge'

const tiers = [
  { name: 'Starter', icon: '📊', desc: 'For indie devs and small teams', monthly: '$19', annual: '$15', cta: 'Start 14-day trial', highlighted: false, features: ['500K events/mo', '5 sites', '6-month retention'] },
  { name: 'Growth', icon: '🚀', desc: 'For growing products', monthly: '$49', annual: '$39', cta: 'Start 14-day trial →', highlighted: true, badge: 'BEST VALUE', features: ['Unlimited events', 'Unlimited sites', '2-year retention', 'A/B testing built in'] },
]

export default function PricingBClient() {
  const [annual, setAnnual] = useState(false)

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label="variant-b — /pricing" />

      <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '12px', color: '#0F2235' }}>
        Try free for <span style={{ color: '#C96A3F' }}>14 days</span>
      </h1>
      <p style={{ color: '#6b7280', fontSize: '17px', marginBottom: '16px' }}>No credit card needed. Cancel anytime.</p>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#f3f4f6', borderRadius: '999px', padding: '6px 16px', marginBottom: '48px' }}>
        <button onClick={() => setAnnual(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, color: !annual ? '#0F2235' : '#9ca3af', fontSize: '14px' }}>Monthly</button>
        <button onClick={() => setAnnual(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, color: annual ? '#0F2235' : '#9ca3af', fontSize: '14px' }}>Annual</button>
        <span style={{ background: '#C96A3F', color: '#fff', fontSize: '11px', padding: '2px 8px', borderRadius: '999px' }}>Save 20%</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '680px', margin: '0 auto' }}>
        {tiers.map((tier) => (
          <div key={tier.name} style={{ border: tier.highlighted ? '2px solid #C96A3F' : '1px solid #e5e7eb', borderRadius: '24px', padding: '32px', textAlign: 'left', background: tier.highlighted ? '#FEF0E8' : '#fff', position: 'relative' }}>
            {tier.badge && <div style={{ position: 'absolute', top: '-13px', right: '20px', background: '#C96A3F', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '999px' }}>{tier.badge}</div>}
            <div style={{ width: '36px', height: '36px', background: tier.highlighted ? '#C96A3F' : '#F5EDE0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '18px' }}>{tier.icon}</div>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#0F2235', marginBottom: '4px' }}>{tier.name}</p>
            <p style={{ fontSize: '13px', color: tier.highlighted ? '#A8522D' : '#9ca3af', marginBottom: '16px' }}>{tier.desc}</p>
            <p style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '4px', color: '#0F2235' }}>{annual ? tier.annual : tier.monthly}</p>
            <p style={{ color: tier.highlighted ? '#A8522D' : '#9ca3af', fontSize: '13px', marginBottom: '24px' }}>/month · billed {annual ? 'annually' : 'monthly'}</p>
            <a href="/thank-you" style={{ display: 'block', textAlign: 'center', background: tier.highlighted ? '#C96A3F' : '#F5EDE0', color: tier.highlighted ? '#fff' : '#0F2235', borderRadius: '12px', padding: '12px', fontSize: '14px', fontWeight: tier.highlighted ? 700 : 600, marginBottom: '24px' }}>{tier.cta}</a>
            <ul style={{ listStyle: 'none', fontSize: '14px', color: tier.highlighted ? '#0F2235' : '#4b5563', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {tier.features.map(f => <li key={f} style={{ display: 'flex', gap: '8px' }}><span>✓</span> {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}

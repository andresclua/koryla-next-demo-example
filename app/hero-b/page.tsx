import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

const featureCards = [
  ['⚡', 'Zero flicker', 'Variants are assigned before the browser renders anything.'],
  ['🔒', 'No client JS', 'Works entirely server-side — ad blockers can\'t interfere.'],
  ['📊', 'Live results', 'See impressions and conversions in your dashboard in real time.'],
  ['🔌', 'Any stack', 'Next.js, Astro, Nuxt, Webflow — one API key, any platform.'],
]

export default function HeroBPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="b — /hero" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
            TRUSTED BY 1,200 TEAMS · NO CREDIT CARD
          </div>

          <h1 style={{ fontSize: 'clamp(36px,4vw,56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '20px', color: '#0F2235' }}>
            Build what users<br />
            <span style={{ color: '#C96A3F' }}>actually want.</span>
          </h1>

          <p style={{ fontSize: '17px', color: '#4b5563', lineHeight: 1.65, marginBottom: '32px' }}>
            Run your first A/B test in under 5 minutes — no code changes,
            no flicker, no developer bottleneck. Just results.
          </p>

          <a href="/thank-you" style={{ display: 'inline-block', background: '#0F2235', color: '#fff', padding: '12px 24px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
            Start free today
          </a>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '10px' }}>No credit card required · Cancel anytime</p>
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
        </div>
      </div>
    </main>
  )
}

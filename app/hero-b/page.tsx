import VariantBadge from '../components/VariantBadge'
import DriverTour from '../components/DriverTour'

const GH = 'https://github.com/andresclua/koryla-next-demo-example/blob/main'

const tourSteps = [
  {
    element: '#tour-badge',
    title: 'Change 1 — Social proof badge',
    side: 'bottom' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:12px;color:#6b7280;font-size:13px;line-height:1.5">Control showed a plain category label. Variant B uses social proof to build immediate trust with first-time visitors.</p>
<a href="${GH}/app/hero-b/page.tsx#L55-L58" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#0F2235;color:#F5EDE0;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none">
  View on GitHub →
</a>`,
  },
  {
    element: '#tour-headline',
    title: 'Change 2 — Two-column layout',
    side: 'bottom' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:12px;color:#6b7280;font-size:13px;line-height:1.5">Control was centered single-column. Variant B uses a two-column grid that feels more confident. The middleware rewrites <code style="background:#e5e7eb;padding:1px 5px;border-radius:3px">/hero → /hero-b</code> before any HTML reaches the browser.</p>
<a href="${GH}/middleware.ts" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#0F2235;color:#F5EDE0;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none">
  View middleware.ts on GitHub →
</a>`,
  },
  {
    element: '#tour-cards',
    title: 'Change 3 — Feature cards replace screenshot',
    side: 'left' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:12px;color:#6b7280;font-size:13px;line-height:1.5">Control showed a dashboard screenshot. Variant B surfaces four concrete value props in scannable cards — easier to skim on mobile.</p>
<a href="${GH}/app/hero-b/page.tsx#L65-L80" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#0F2235;color:#F5EDE0;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none">
  View on GitHub →
</a>`,
  },
  {
    element: '#tour-cta',
    title: 'Change 4 — Navy CTA, no email gate',
    side: 'top' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:12px;color:#6b7280;font-size:13px;line-height:1.5">Control had a terracotta button. Variant B uses navy and removes friction — one click to sign up, no email required.</p>
<a href="${GH}/app/hero-b/page.tsx#L60-L63" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#0F2235;color:#F5EDE0;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none">
  View on GitHub →
</a>`,
  },
]

const featureCards = [
  ['⚡', 'Zero flicker', 'Variants are served before the browser renders anything.'],
  ['🔒', 'No client JS', 'Works entirely server-side — ad blockers can\'t interfere.'],
  ['📊', 'Live results', 'See impressions and conversions in your dashboard in real time.'],
  ['🔌', 'Any stack', 'Next.js, Astro, WordPress, Nuxt — one API key, any platform.'],
]

export default function HeroBPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="variant-b — /hero" />
      <DriverTour steps={tourSteps} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
        <div>
          <div id="tour-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#C96A3F', borderRadius: '50%', display: 'inline-block' }} />
            TRUSTED BY 1,200 TEAMS · NO CREDIT CARD NEEDED
          </div>

          <h1 id="tour-headline" style={{ fontSize: 'clamp(36px,4vw,56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '20px', color: '#0F2235' }}>
            Your next best decision<br />
            <span style={{ color: '#C96A3F' }}>is one test away.</span>
          </h1>

          <p style={{ fontSize: '17px', color: '#4b5563', lineHeight: 1.65, marginBottom: '32px' }}>
            Run your first A/B test in under 5 minutes — no code changes,
            no flicker, no developer bottleneck. Just results.
          </p>

          <a id="tour-cta" href="/thank-you" style={{ display: 'inline-block', background: '#0F2235', color: '#fff', padding: '12px 24px', borderRadius: '10px', fontWeight: 600, fontSize: '14px' }}>
            Start free today
          </a>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '10px' }}>Free forever on the hobby plan · Cancel anytime</p>
        </div>

        <div id="tour-cards" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {featureCards.map(([icon, title, desc]) => (
            <div key={title as string} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '14px', padding: '16px 20px' }}>
              <span style={{ fontSize: '22px' }}>{icon}</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F2235' }}>{title}</p>
                <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

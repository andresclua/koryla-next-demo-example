import VariantBadge from '../components/VariantBadge'
import DriverTour from '../components/DriverTour'

const tourSteps = [
  {
    element: '#tour-badge',
    title: 'Change 1 — Social proof badge',
    side: 'bottom' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Control showed a plain category label. Variant B uses social proof copy to build immediate trust.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// middleware.ts — intercepts /hero</span>
<span style="color:#60a5fa">export default</span> korylaMiddleware({
  apiKey: process.env.KORYLA_API_KEY,
  apiUrl: process.env.KORYLA_API_URL,
})
<span style="color:#9ca3af">// Rewrites /hero → /hero-b server-side</span>
</pre>`,
  },
  {
    element: '#tour-headline',
    title: 'Change 2 — Outcome-focused headline',
    side: 'bottom' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Same headline, now paired with a two-column layout that feels more confident and action-oriented.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// Both variants share the same URL</span>
<span style="color:#60a5fa">const</span> result = <span style="color:#60a5fa">await</span> engine.process(
  request.url,
  request.headers.get(<span style="color:#a3e635">'cookie'</span>) ?? <span style="color:#a3e635">''</span>
)
<span style="color:#60a5fa">const</span> response = NextResponse.rewrite(
  <span style="color:#60a5fa">new</span> URL(result.targetUrl)
)
</pre>`,
  },
  {
    element: '#tour-cards',
    title: 'Change 3 — Feature cards replace screenshot',
    side: 'left' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Control showed a dashboard screenshot. Variant B uses four scannable value-prop cards — easier to skim.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// Cookie persists the assignment 30 days</span>
response.cookies.set(
  result.cookieName,
  result.variantId,
  { maxAge: 60 * 60 * 24 * 30, path: <span style="color:#a3e635">'/'</span> }
)
</pre>`,
  },
  {
    element: '#tour-cta',
    title: 'Change 4 — Navy CTA, no email gate',
    side: 'top' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Control had a terracotta button. Variant B uses navy and removes friction — one click to sign up.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// CONTROL — terracotta</span>
&lt;a style=<span style="color:#a3e635">"background:#C96A3F"</span>&gt;Start for free&lt;/a&gt;

<span style="color:#9ca3af">// VARIANT B — navy, less friction</span>
&lt;a style=<span style="color:#a3e635">"background:#0F2235"</span>&gt;Start free today&lt;/a&gt;
</pre>`,
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

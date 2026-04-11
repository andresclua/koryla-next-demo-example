import VariantBadge from '../components/VariantBadge'
import DriverTour from '../components/DriverTour'

const tourSteps = [
  {
    element: '#tour-badge',
    title: 'Change 1 — Social proof badge',
    side: 'bottom' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Control showed "ANALYTICS FOR DEVELOPERS". Variant B leads with social proof to build immediate trust.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// middleware.ts</span>
<span style="color:#60a5fa">export default</span> korylaMiddleware({
  apiKey: process.env.KORYLA_API_KEY,
  apiUrl: process.env.KORYLA_API_URL,
})
<span style="color:#9ca3af">// Assigns variant at the edge — zero flicker</span>
</pre>`,
  },
  {
    element: '#tour-headline',
    title: 'Change 2 — Outcome-focused headline',
    side: 'bottom' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Control: "Know what your users actually do". Variant B focuses on the user's outcome — converting doubt into action.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// Middleware rewrites /headline → /headline-b</span>
<span style="color:#9ca3af">// The browser URL never changes</span>

<span style="color:#60a5fa">export const</span> config = {
  matcher: [<span style="color:#a3e635">'/headline'</span>, <span style="color:#a3e635">'/hero'</span>, <span style="color:#a3e635">'/pricing'</span>],
}
</pre>`,
  },
  {
    element: '#tour-cta',
    title: 'Change 3 — Navy CTA, no email gate',
    side: 'top' as const,
    align: 'start' as const,
    description: `<p style="margin-bottom:10px;color:#6b7280;font-size:13px;line-height:1.5">Control used terracotta. Variant B uses navy and removes friction to test which drives more sign-ups.</p>
<pre style="background:#0F2235;color:#F5EDE0;padding:14px 16px;border-radius:8px;font-size:12px;line-height:1.7;overflow:auto;white-space:pre">
<span style="color:#9ca3af">// Cookie set on first visit</span>
response.cookies.set(
  result.cookieName,   <span style="color:#9ca3af">// ky_&lt;experimentId&gt;</span>
  result.variantId,
  { maxAge: 60 * 60 * 24 * 30 }
)
</pre>`,
  },
]

export default function HeadlineBPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label="variant-b — /headline" />
      <DriverTour steps={tourSteps} />

      <div id="tour-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px' }}>
        <span style={{ width: '6px', height: '6px', background: '#C96A3F', borderRadius: '50%', display: 'inline-block' }} />
        TRUSTED BY 1,200 TEAMS · NO CREDIT CARD NEEDED
      </div>

      <h1 id="tour-headline" style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '24px', color: '#0F2235' }}>
        Stop guessing.<br />
        <span style={{ color: '#C96A3F' }}>Start converting.</span>
      </h1>

      <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.65 }}>
        Run your first A/B test in under 5 minutes — no code changes,
        no flicker, no developer bottleneck. Just results.
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a id="tour-cta" href="/thank-you" style={{ display: 'inline-block', background: '#0F2235', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px' }}>
          Start free today
        </a>
        <a href="/pricing" style={{ background: '#f9fafb', color: '#374151', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', border: '1px solid #e5e7eb' }}>
          See pricing
        </a>
      </div>

      <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '16px' }}>Free forever on the hobby plan · Cancel anytime</p>

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

# Next.js Demo Refactor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the existing Next.js demo to mirror the Astro demo's 5 experiment patterns with new content and matching visual style.

**Architecture:** Next.js App Router + Netlify. `middleware.ts` uses `korylaMiddleware` from `@koryla/next` for edge routing (rewrites to variant pages). `demo-sdk` uses Server Component + `searchParams` for UTM-based assignment. `demo-combined` uses both layers. All pages use inline styles matching the Astro demo's color system.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, `@koryla/next`, `@koryla/core`, Netlify

---

## File Structure

```
app/
├── components/
│   └── VariantBadge.tsx          ← Modify: Astro-style top-left terracotta badge
│   (DriverTour.tsx)               ← Delete entirely
├── hero/page.tsx                  ← Replace: "Ship faster with data" control
├── hero-b/page.tsx                ← Replace: "Build what users actually want" B
├── pricing/page.tsx               ← Replace: 3-tier no FAQ control
├── pricing-b/page.tsx             ← Replace: 3-tier + FAQ section B
├── demo-edge/page.tsx             ← Create: URL rewrite explainer control
├── demo-edge-b/page.tsx           ← Create: URL rewrite explainer B
├── demo-sdk/page.tsx              ← Create: button style variation (UTM-based)
├── demo-combined/page.tsx         ← Create: edge control + SDK CTA
├── demo-combined-b/page.tsx       ← Create: edge B + SDK CTA
├── thank-you/page.tsx             ← Modify: update copy for 5 experiments
├── page.tsx                       ← Modify: hub with 5 demo cards
├── layout.tsx                     ← Modify: update nav links
│ (headline/ and headline-b/)      ← Delete both directories
middleware.ts                      ← Modify: add demo-edge, demo-combined to matcher
```

---

## Task 1: Update VariantBadge, delete DriverTour, update layout nav

**Files:**
- Modify: `app/components/VariantBadge.tsx`
- Delete: `app/components/DriverTour.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update VariantBadge to match Astro style**

Replace entire `app/components/VariantBadge.tsx`:

```tsx
export default function VariantBadge({ label }: { label: string }) {
  return (
    <div style={{
      position: 'fixed', top: '16px', left: '16px', zIndex: 999,
      background: '#C96A3F', color: '#fff', fontSize: '11px', fontWeight: 700,
      padding: '5px 12px', borderRadius: '999px', letterSpacing: '.5px',
      fontFamily: 'monospace',
    }}>
      variant-{label}
    </div>
  )
}
```

- [ ] **Step 2: Delete DriverTour**

```bash
rm /path/to/koryla-next-demo-example/app/components/DriverTour.tsx
```

- [ ] **Step 3: Update layout nav**

Replace entire `app/layout.tsx`:

```tsx
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Koryla Next.js Demo',
  description: 'Five live A/B testing examples using @koryla/next',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className} style={{ background: '#fff', color: '#0F2235' }}>
        <nav style={{ borderBottom: '1px solid #e5e7eb', padding: '0 40px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '16px', color: '#0F2235' }}>Koryla</span>
            <span style={{ color: '#e5e7eb' }}>·</span>
            <span style={{ fontSize: '14px', color: '#9ca3af', fontWeight: 500 }}>Next.js Demo</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#6b7280', alignItems: 'center' }}>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#6b7280' }}>Pricing</a>
            <a href="/hero" style={{ textDecoration: 'none', color: '#6b7280' }}>Hero</a>
            <a href="/demo-sdk" style={{ textDecoration: 'none', color: '#6b7280' }}>SDK</a>
            <a href="/thank-you" style={{ background: '#C96A3F', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '13px' }}>Get started</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
cd koryla-next-demo-example && npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add app/components/VariantBadge.tsx app/layout.tsx
git rm app/components/DriverTour.tsx
git commit -m "refactor: update VariantBadge to Astro style, remove DriverTour, update nav"
```

---

## Task 2: Update middleware

**Files:**
- Modify: `middleware.ts`

- [ ] **Step 1: Update matcher to include new routes**

Replace entire `middleware.ts`:

```ts
import { korylaMiddleware } from '@koryla/next'

export default korylaMiddleware({
  apiKey: process.env.KORYLA_API_KEY!,
  apiUrl: process.env.KORYLA_API_URL!,
})

export const config = {
  matcher: ['/hero', '/pricing', '/demo-edge', '/demo-combined'],
}
```

- [ ] **Step 2: Commit**

```bash
git add middleware.ts
git commit -m "feat: add demo-edge and demo-combined to middleware matcher"
```

---

## Task 3: Replace hero pages

**Files:**
- Modify: `app/hero/page.tsx`
- Modify: `app/hero-b/page.tsx`

- [ ] **Step 1: Replace hero control page**

Replace entire `app/hero/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

export default function HeroPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label="control — /hero" />

      <div style={{ display: 'inline-block', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.3px' }}>
        SERVER-SIDE A/B TESTING · NEXT.JS
      </div>

      <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '24px', color: '#0F2235' }}>
        Ship faster<br />with data
      </h1>

      <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.6 }}>
        Stop debating in meetings. Run a test, get an answer in days — not quarters.
        Koryla assigns variants server-side before HTML is sent to the browser.
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/thank-you" style={{ background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Start for free</a>
        <a href="/pricing" style={{ background: '#f9fafb', color: '#374151', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', border: '1px solid #e5e7eb', textDecoration: 'none' }}>See pricing</a>
      </div>

      <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '16px' }}>No credit card required · Free forever on the hobby plan</p>

      <div style={{ marginTop: '64px', background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '20px', padding: '32px', textAlign: 'left' }}>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          {[['12,400', 'Tests run'], ['23%', 'Avg. uplift'], ['4.2 days', 'To significance']].map(([val, label]) => (
            <div key={label} style={{ flex: 1, background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontSize: '28px', fontWeight: 700, color: '#0F2235', margin: 0 }}>{val}</p>
              <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px', marginBottom: 0 }}>{label}</p>
            </div>
          ))}
        </div>
        <div style={{ height: '80px', background: 'linear-gradient(to right,#F0C9B0,#C96A3F,#F0C9B0)', borderRadius: '8px', opacity: .4 }} />
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Replace hero-b page**

Replace entire `app/hero-b/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

const featureCards = [
  ['⚡', 'Zero flicker', 'Variants are assigned before the browser renders anything.'],
  ['🔒', 'No client JS', 'Works entirely server-side — ad blockers can\'t interfere.'],
  ['📊', 'Live results', 'See impressions and conversions in your dashboard in real time.'],
  ['🔌', 'Any stack', 'Next.js, Astro, WordPress, Nuxt — one API key, any platform.'],
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
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '10px' }}>Free forever on the hobby plan · Cancel anytime</p>
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
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/hero/page.tsx app/hero-b/page.tsx
git commit -m "refactor: replace hero pages with new content and Astro-style layout"
```

---

## Task 4: Replace pricing pages

**Files:**
- Modify: `app/pricing/page.tsx`
- Modify: `app/pricing-b/page.tsx`

- [ ] **Step 1: Replace pricing control (3-tier, no FAQ)**

Replace entire `app/pricing/page.tsx`:

```tsx
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

export default function PricingPage() {
  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="control — /pricing" />

      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px' }}>
          Simple, transparent pricing
        </h1>
        <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
          Start free, scale as you grow. No contracts, no surprises.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
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
    </main>
  )
}
```

- [ ] **Step 2: Replace pricing-b (3-tier + FAQ section)**

Replace entire `app/pricing-b/page.tsx`:

```tsx
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
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/pricing/page.tsx app/pricing-b/page.tsx
git commit -m "refactor: replace pricing pages — control (no FAQ) vs variant B (with FAQ)"
```

---

## Task 5: Create demo-edge pages

**Files:**
- Create: `app/demo-edge/page.tsx`
- Create: `app/demo-edge-b/page.tsx`

- [ ] **Step 1: Create demo-edge control page**

Create `app/demo-edge/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

export default function DemoEdgePage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="control — /demo-edge" />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        EDGE EXPERIMENT · TRANSPARENT URL REWRITE
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        You're on the control.
      </h1>
      <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.65, marginBottom: '40px' }}>
        You landed on <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>/demo-edge</code>.
        The middleware checked your cookie and kept you on this page (50% probability).
        The URL in your browser never changed.
      </p>

      <div style={{ background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '20px', padding: '28px', marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '16px' }}>What happened server-side</p>
        {[
          'Request arrived at the Next.js edge middleware',
          'Middleware checked your ky_ cookie — no assignment found',
          'Random 50/50 split → you got control',
          'Cookie set: ky_<experiment-id>=<variant-id>',
          'context.next() — this page was served as-is',
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < 4 ? '10px' : 0 }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FEF0E8', color: '#C96A3F', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{step}</p>
          </div>
        ))}
      </div>

      <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
        Trigger a conversion →
      </a>
      <p style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af' }}>
        Clear your cookies and reload to try getting variant B.
      </p>
    </main>
  )
}
```

- [ ] **Step 2: Create demo-edge-b page**

Create `app/demo-edge-b/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

export default function DemoEdgeBPage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="b — /demo-edge" />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        EDGE EXPERIMENT · TRANSPARENT URL REWRITE
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        You're on variant B.
      </h1>
      <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.65, marginBottom: '40px' }}>
        Your browser shows <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>/demo-edge</code> — but the middleware
        silently rewrote your request to <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>/demo-edge-b</code>.
        Zero JavaScript, zero flicker.
      </p>

      <div style={{ background: '#0F2235', borderRadius: '20px', padding: '28px', marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '16px' }}>What happened server-side</p>
        {[
          'Request arrived at the Next.js edge middleware',
          'Middleware checked your ky_ cookie — no assignment found',
          'Random 50/50 split → you got variant B',
          'Cookie set: ky_<experiment-id>=<variant-id>',
          'NextResponse.rewrite("/demo-edge-b") — this page served',
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < 4 ? '10px' : 0 }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#1a3a5c', color: '#C96A3F', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
            <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: 1.5, margin: 0 }}>{step}</p>
          </div>
        ))}
      </div>

      <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
        Trigger a conversion →
      </a>
      <p style={{ marginTop: '16px', fontSize: '12px', color: '#9ca3af' }}>
        Clear your cookies and reload to try getting the control.
      </p>
    </main>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/demo-edge/page.tsx app/demo-edge-b/page.tsx
git commit -m "feat: add demo-edge pages — transparent URL rewrite explainer"
```

---

## Task 6: Create demo-sdk page

**Files:**
- Create: `app/demo-sdk/page.tsx`

The demo-sdk page is a Server Component that reads `searchParams` to determine which button style to show. Default (no UTM) = control (outlined). `?utm_style=variation-1` = variant B (filled). This mirrors the Astro demo-sdk pattern.

- [ ] **Step 1: Create demo-sdk page**

Create `app/demo-sdk/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_style?: string }>
}

export default async function DemoSdkPage({ searchParams }: Props) {
  const params = await searchParams
  const isVariantB = params.utm_style === 'variation-1'

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
      <VariantBadge label={isVariantB ? 'b — /demo-sdk' : 'control — /demo-sdk'} />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        SDK EXPERIMENT · BUTTON STYLE
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        Same URL.<br />Different button.
      </h1>

      <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '480px', margin: '0 auto 16px', lineHeight: 1.6 }}>
        The server reads <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>searchParams</code> to assign a variant.
        No middleware, no cookies — just a URL parameter.
      </p>

      <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '48px' }}>
        Currently showing: <strong style={{ color: '#0F2235' }}>{isVariantB ? 'Variant B — filled button' : 'Control — outlined button'}</strong>
      </p>

      {/* The experiment: button style */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px' }}>
        {isVariantB ? (
          <a href="/thank-you" style={{
            display: 'inline-block', background: '#C96A3F', color: '#fff',
            padding: '14px 36px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
          }}>
            Start free today
          </a>
        ) : (
          <a href="/thank-you" style={{
            display: 'inline-block', background: 'transparent', color: '#C96A3F',
            padding: '14px 36px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            border: '2px solid #C96A3F',
          }}>
            Start free today
          </a>
        )}
      </div>

      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px', textAlign: 'left' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '12px' }}>Try both variants</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/demo-sdk" style={{ fontSize: '13px', color: '#0F2235', background: '#fff', border: '1px solid #e5e7eb', padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>
            Control (outlined)
          </a>
          <a href="/demo-sdk?utm_style=variation-1" style={{ fontSize: '13px', color: '#fff', background: '#C96A3F', padding: '6px 14px', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>
            Variant B (filled) →
          </a>
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/demo-sdk/page.tsx
git commit -m "feat: add demo-sdk page — button style variation via UTM searchParams"
```

---

## Task 7: Create demo-combined pages

**Files:**
- Create: `app/demo-combined/page.tsx`
- Create: `app/demo-combined-b/page.tsx`

The middleware intercepts `/demo-combined` and rewrites to `/demo-combined` (control) or `/demo-combined-b` (variant B). Each page also reads `searchParams` for `utm_style` to determine button style (SDK layer).

- [ ] **Step 1: Create demo-combined control page**

Create `app/demo-combined/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_style?: string }>
}

export default async function DemoCombinedPage({ searchParams }: Props) {
  const params = await searchParams
  const filledButton = params.utm_style === 'variation-1'

  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="control — /demo-combined" />

      <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
        COMBINED EXPERIMENT · EDGE + SDK
      </div>

      <h1 style={{ fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
        Koryla on Next.js —<br />two layers of control.
      </h1>

      <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.65, marginBottom: '40px' }}>
        <strong style={{ color: '#0F2235' }}>Layer 1 — Edge:</strong> middleware assigned you the control layout (this single-column page).
        <br /><br />
        <strong style={{ color: '#0F2235' }}>Layer 2 — SDK:</strong> <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>searchParams</code> controls the button style.
        Add <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>?utm_style=variation-1</code> to see the filled variant.
      </p>

      <div style={{ marginBottom: '32px' }}>
        {filledButton ? (
          <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
            Start free today
          </a>
        ) : (
          <a href="/thank-you" style={{ display: 'inline-block', background: 'transparent', color: '#C96A3F', padding: '14px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '2px solid #C96A3F' }}>
            Start free today
          </a>
        )}
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
          Button style: {filledButton ? 'SDK variant B (filled)' : 'SDK control (outlined)'}
        </p>
      </div>

      <div style={{ background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '16px', padding: '24px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '12px' }}>Try combinations</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="/demo-combined" style={{ fontSize: '12px', color: '#0F2235', background: '#fff', border: '1px solid #EAD9C4', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>Edge control + SDK control</a>
          <a href="/demo-combined?utm_style=variation-1" style={{ fontSize: '12px', color: '#0F2235', background: '#fff', border: '1px solid #EAD9C4', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>Edge control + SDK B</a>
        </div>
        <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '10px', marginBottom: 0 }}>Clear cookies to be re-assigned by the edge layer.</p>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Create demo-combined-b page**

Create `app/demo-combined-b/page.tsx`:

```tsx
import VariantBadge from '../components/VariantBadge'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ utm_style?: string }>
}

export default async function DemoCombinedBPage({ searchParams }: Props) {
  const params = await searchParams
  const filledButton = params.utm_style === 'variation-1'

  const featureCards = [
    ['🚀', 'Edge-first', 'Middleware runs before any React renders.'],
    ['🔬', 'SDK layer', 'Component-level control with zero extra requests.'],
    ['📈', 'Both tracked', 'Each layer records its own impressions independently.'],
  ]

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 40px' }}>
      <VariantBadge label="b — /demo-combined" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-block', background: '#F5EDE0', color: '#C96A3F', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.5px' }}>
            COMBINED EXPERIMENT · EDGE + SDK
          </div>

          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#0F2235', marginBottom: '16px', lineHeight: 1.1 }}>
            Koryla on Next.js —<br />two layers of control.
          </h1>

          <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.65, marginBottom: '28px' }}>
            Edge assigned you variant B (two-column layout).
            The SDK still controls the button style independently.
          </p>

          <div style={{ marginBottom: '16px' }}>
            {filledButton ? (
              <a href="/thank-you" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Start free today
              </a>
            ) : (
              <a href="/thank-you" style={{ display: 'inline-block', background: 'transparent', color: '#C96A3F', padding: '12px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', border: '2px solid #C96A3F' }}>
                Start free today
              </a>
            )}
          </div>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>
            Button: {filledButton ? 'SDK variant B (filled)' : 'SDK control (outlined)'}
          </p>
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

          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '16px 20px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '8px' }}>Try combinations</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="/demo-combined" style={{ fontSize: '12px', color: '#0F2235', background: '#fff', border: '1px solid #e5e7eb', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>Control layout</a>
              <a href="/demo-combined-b?utm_style=variation-1" style={{ fontSize: '12px', color: '#fff', background: '#C96A3F', padding: '5px 12px', borderRadius: '8px', textDecoration: 'none' }}>B layout + filled btn</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/demo-combined/page.tsx app/demo-combined-b/page.tsx
git commit -m "feat: add demo-combined pages — edge layout + SDK button style"
```

---

## Task 8: Update thank-you page and index hub

**Files:**
- Modify: `app/thank-you/page.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Update thank-you page**

Replace entire `app/thank-you/page.tsx`:

```tsx
export const dynamic = 'force-dynamic'

export default function ThankYouPage() {
  return (
    <main style={{ maxWidth: '560px', margin: '0 auto', padding: '100px 40px', textAlign: 'center' }}>
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#C96A3F', color: '#fff', fontSize: '24px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>✓</div>

      <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-1px', color: '#0F2235', marginBottom: '12px' }}>Conversion recorded.</h1>
      <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.6, marginBottom: '40px' }}>
        This page is the conversion goal for all five experiments.
        Koryla matched the conversion to your assigned variant and updated the experiment stats.
      </p>

      <div style={{ background: '#F5EDE0', border: '1px solid #EAD9C4', borderRadius: '20px', padding: '28px', textAlign: 'left', marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#C96A3F', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '16px' }}>What just happened</p>
        {[
          'You were assigned a variant when you first visited an experiment URL.',
          'That assignment was stored in a ky_ cookie (edge) or URL param (SDK) for consistency.',
          'Clicking a CTA landed you here — Koryla matched the conversion to your variant.',
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < 2 ? '12px' : 0 }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FEF0E8', color: '#C96A3F', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.5, margin: 0 }}>{text}</p>
          </div>
        ))}
      </div>

      <a href="/" style={{ display: 'inline-block', background: '#C96A3F', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
        ← Back to all demos
      </a>

      <p style={{ marginTop: '24px', fontSize: '12px', color: '#9ca3af' }}>Clear your cookies to be re-assigned to a fresh variant.</p>
    </main>
  )
}
```

- [ ] **Step 2: Update index hub page**

Replace entire `app/page.tsx`:

```tsx
import Link from 'next/link'

const demos = [
  {
    href: '/hero',
    number: '01',
    type: 'Edge · Layout',
    title: 'Hero Layout Test',
    description: 'Two completely different page layouts behind the same URL. Middleware rewrites /hero → /hero-b transparently. No JavaScript on the page.',
    what: ['Control: Single-column — "Ship faster with data"', 'Variant B: Two-column with feature cards — "Build what users actually want"'],
    color: '#C96A3F',
    bg: '#FEF0E8',
  },
  {
    href: '/pricing',
    number: '02',
    type: 'Edge · Content',
    title: 'Pricing Page Test',
    description: 'Same 3-tier pricing, different page length. Variant B adds a FAQ section to test whether more information increases conversions.',
    what: ['Control: 3-tier grid, no FAQ', 'Variant B: 3-tier grid + FAQ section below'],
    color: '#0F2235',
    bg: '#F5EDE0',
  },
  {
    href: '/demo-edge',
    number: '03',
    type: 'Edge · URL rewrite',
    title: 'Edge Rewrite Explainer',
    description: 'Visual walkthrough of how the middleware intercepts a request and rewrites the URL server-side — browser sees no change.',
    what: ['Control: Light page — steps shown on white background', 'Variant B: Dark page — same steps, navy background'],
    color: '#0F2235',
    bg: '#f0f4f8',
  },
  {
    href: '/demo-sdk',
    number: '04',
    type: 'SDK · UTM',
    title: 'SDK Button Style Test',
    description: 'No middleware — just searchParams. The server reads the UTM parameter and renders a different button style. Same URL, no cookies.',
    what: ['Control: Outlined button (border only)', 'Variant B: Filled terracotta button — add ?utm_style=variation-1'],
    color: '#C96A3F',
    bg: '#FEF0E8',
  },
  {
    href: '/demo-combined',
    number: '05',
    type: 'Edge + SDK',
    title: 'Combined Layers',
    description: 'Two independent layers: edge controls the page layout, SDK controls the button style. Four possible combinations.',
    what: ['Layer 1 (Edge): single-col control vs two-col variant B', 'Layer 2 (SDK): outlined vs filled button via ?utm_style'],
    color: '#0F2235',
    bg: '#F5EDE0',
  },
]

export default function Home() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '80px 40px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-block', background: '#FEF0E8', color: '#C96A3F', fontSize: '13px', fontWeight: 600, padding: '6px 14px', borderRadius: '999px', marginBottom: '24px', letterSpacing: '.3px' }}>
          LIVE DEMO · NEXT.JS MIDDLEWARE
        </div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '16px', color: '#0F2235' }}>
          Five ways to A/B test<br />with Next.js
        </h1>
        <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '520px', lineHeight: 1.6, marginBottom: '16px' }}>
          Each experiment is live — powered by <code style={{ background: '#F5EDE0', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>@koryla/next</code>.
          The server assigns variants before any HTML is sent. Zero flicker, zero JS overhead.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#9ca3af' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          Middleware active on /hero · /pricing · /demo-edge · /demo-combined
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {demos.map((demo) => (
          <Link key={demo.href} href={demo.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '24px', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, background: demo.bg, color: demo.color }}>
                {demo.number}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', background: demo.bg, color: demo.color, letterSpacing: '.3px' }}>{demo.type.toUpperCase()}</span>
                </div>
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0F2235', marginBottom: '4px' }}>{demo.title}</h2>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.5, marginBottom: '12px' }}>{demo.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {demo.what.map((w, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
                      <span style={{ marginTop: '5px', width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: i === 0 ? '#d1d5db' : demo.color }} />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <span style={{ color: '#d1d5db', fontSize: '18px', flexShrink: 0 }}>→</span>
            </div>
          </Link>
        ))}
      </div>

      <p style={{ marginTop: '40px', fontSize: '12px', textAlign: 'center', color: '#9ca3af' }}>
        Clear your cookies to be re-assigned. Edge experiments use a <code style={{ background: '#F5EDE0', padding: '1px 5px', borderRadius: '4px' }}>ky_</code> cookie. SDK experiments use URL params.
      </p>
    </main>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/thank-you/page.tsx app/page.tsx
git commit -m "refactor: update index hub (5 demos) and thank-you page"
```

---

## Task 9: Delete headline pages and verify build

**Files:**
- Delete: `app/headline/` directory
- Delete: `app/headline-b/` directory

- [ ] **Step 1: Delete headline directories**

```bash
git rm -r app/headline app/headline-b
```

- [ ] **Step 2: Run full build**

```bash
npm run build
```

Expected: Build completes successfully with no errors. You should see routes for all 11 pages: `/`, `/hero`, `/hero-b`, `/pricing`, `/pricing-b`, `/demo-edge`, `/demo-edge-b`, `/demo-sdk`, `/demo-combined`, `/demo-combined-b`, `/thank-you`.

- [ ] **Step 3: Commit**

```bash
git commit -m "refactor: remove headline pages — replaced by hero, pricing, demo-edge, demo-sdk, demo-combined"
```

---

## Post-implementation: Koryla workspace setup

After deploying, create 5 experiments in a **"Next.js Demo"** workspace on koryla.com:

| Experiment | Base URL | Conversion URL | Variants |
|-----------|----------|----------------|---------|
| Homepage Hero Test | `https://<your-deployed-domain>/hero` | `/thank-you` | control → `/hero`, b → `/hero-b` |
| Pricing Page Layout | `https://<your-deployed-domain>/pricing` | `/thank-you` | control → `/pricing`, b → `/pricing-b` |
| Demo Edge Layout | `https://<your-deployed-domain>/demo-edge` | `/thank-you` | control → `/demo-edge`, b → `/demo-edge-b` |
| Demo SDK Button | `https://<your-deployed-domain>/demo-sdk` | `/thank-you` | control → `/demo-sdk`, b → `/demo-sdk?utm_style=variation-1` |
| Demo Combined | `https://<your-deployed-domain>/demo-combined` | `/thank-you` | control → `/demo-combined`, b → `/demo-combined-b` |

Set `KORYLA_API_KEY` and `KORYLA_API_URL` in Netlify environment variables before deploying.

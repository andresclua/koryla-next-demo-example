# Next.js Demo — Koryla A/B Testing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor the existing Next.js demo to mirror the Astro demo's 5 experiment patterns, with slightly different content so both demos serve as independent references for developers.

**Architecture:** Next.js 15 App Router + Netlify adapter. Edge routing via `middleware.ts` using `korylaMiddleware` from `@koryla/next` — intercepts requests and rewrites to variant pages server-side, same pattern as Astro's Netlify Edge Functions. SDK routing uses Server Components with `cookies()` for session-based assignment.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, `@koryla/next`, Netlify

---

## Visual Style

Same design system as the Astro demo:
- Primary: terracotta `#C96A3F` / navy `#0F2235`
- `VariantBadge` component — top-left label showing `variant-{name} — /{url}` in terracotta
- Clean white backgrounds, Inter font, consistent nav
- Each demo page is clearly labeled with its experiment type (Edge / SDK / Combined)

---

## Pages

| Route | Type | Content |
|-------|------|---------|
| `/` | Static | Hub listing all 5 demos with descriptions |
| `/hero` + `/hero-b` | Edge | Layout test: single-col vs two-col hero |
| `/pricing` + `/pricing-b` | Edge | Pricing with vs without FAQ section |
| `/demo-edge` + `/demo-edge-b` | Edge | Transparent URL rewrite explainer |
| `/demo-sdk` | SDK | Button style variation (outlined vs filled) via UTM |
| `/demo-combined` + `/demo-combined-b` | Edge + SDK | Edge controls layout, SDK controls CTA |
| `/thank-you` | Static | Conversion page |

---

## Content Variations (differ from Astro demo)

**Hero:**
- Control: "Ship faster with data" — single-col, screenshot mockup, CTA "Start for free"
- Variant B: "Build what users actually want" — two-col, feature cards, CTA "See how it works"

**Pricing:**
- Control: 3-tier table (Free / Pro / Enterprise), no FAQ
- Variant B: same 3 tiers + FAQ section below ("How does billing work?", "Can I cancel?")

**Demo SDK:**
- Astro tests CTA text — Next.js tests button style
- Control: outlined button `border border-[#C96A3F] text-[#C96A3F]`
- Variant B: filled button `bg-[#C96A3F] text-white`
- Assignment via `?utm_style=variation-1`

**Demo Combined:**
- Edge assigns layout (control = single-col, B = two-col)
- SDK assigns CTA style (same outlined/filled as demo-sdk)
- Copy: "Koryla on Next.js — two layers of control"

---

## Middleware

`middleware.ts` intercepts these routes:
```
/hero → /hero or /hero-b
/pricing → /pricing or /pricing-b
/demo-edge → /demo-edge or /demo-edge-b
/demo-combined → /demo-combined or /demo-combined-b
```

Uses `korylaMiddleware` from `@koryla/next`. Existing pattern stays — just update the matcher config.

---

## Koryla Workspace

Each experiment needs a UUID from a Koryla workspace. Create 5 experiments in a dedicated "Next.js Demo" workspace (separate from the Astro demo workspace):
1. Homepage Hero Test — base: `/hero`, conversion: `/thank-you`
2. Pricing Page Layout — base: `/pricing`, conversion: `/thank-you`
3. Demo Edge — Layout — base: `/demo-edge`, conversion: `/thank-you`
4. Demo SDK — Button Style — base: `/demo-sdk`, conversion: `/thank-you`
5. Demo Combined — Edge + SDK — base: `/demo-combined`, conversion: `/thank-you`

---

## Environment Variables

```
KORYLA_API_KEY=sk_live_...
KORYLA_API_URL=https://koryla.com/api/worker
```

Set in Netlify dashboard for the deployed site.

---

## Files to Delete (existing, to be replaced)

- `app/headline/` and `app/headline-b/` — not in new design
- `app/hero/` and `app/hero-b/` — replaced with new content
- `app/pricing/` and `app/pricing-b/` — replaced with new content
- `app/page.tsx` — replaced with new hub
- `app/layout.tsx` — updated nav
- `middleware.ts` — updated matcher

## Files to Keep

- `app/components/VariantBadge.tsx` — keep, update style if needed
- `app/components/DriverTour.tsx` — delete (no longer used)
- `netlify.toml`, `next.config.ts`, `tsconfig.json` — no changes needed

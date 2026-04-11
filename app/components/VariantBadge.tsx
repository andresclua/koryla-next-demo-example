export default function VariantBadge({ label }: { label: string }) {
  return (
    <div style={{
      position: 'fixed', bottom: '16px', right: '16px', zIndex: 999,
      background: '#0F2235', color: '#fff', fontSize: '11px', fontWeight: 600,
      padding: '6px 12px', borderRadius: '999px', letterSpacing: '.5px', opacity: .9,
    }}>
      Koryla · {label}
    </div>
  )
}

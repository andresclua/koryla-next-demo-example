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

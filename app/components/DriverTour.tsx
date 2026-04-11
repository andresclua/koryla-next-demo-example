'use client'

import { useEffect } from 'react'
import 'driver.js/dist/driver.css'

export interface TourStep {
  element: string
  title: string
  description: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

export default function DriverTour({ steps, buttonLabel = 'See what Koryla did →' }: {
  steps: TourStep[]
  buttonLabel?: string
}) {
  useEffect(() => {
    const btn = document.getElementById('tour-trigger')
    if (!btn) return

    const handleClick = async () => {
      const { driver } = await import('driver.js')
      const d = driver({
        animate: true,
        overlayOpacity: 0.6,
        showProgress: true,
        steps: steps.map(s => ({
          element: s.element,
          popover: {
            title: s.title,
            description: s.description,
            side: s.side ?? 'bottom',
            align: s.align ?? 'start',
          },
        })),
      })
      d.drive()
    }

    btn.addEventListener('click', handleClick)
    return () => btn.removeEventListener('click', handleClick)
  }, [steps])

  return (
    <>
      <style>{`
        @keyframes koryla-glow {
          0%, 100% { box-shadow: 0 0 12px 2px rgba(201,106,63,0.5); }
          50%       { box-shadow: 0 0 24px 6px rgba(201,106,63,0.9); }
        }
        #tour-trigger { animation: koryla-glow 2s ease-in-out infinite; }
        #tour-trigger:hover { background: #FEF0E8 !important; color: #C96A3F !important; border-color: #C96A3F !important; }
      `}</style>
      <button
        id="tour-trigger"
        style={{
          position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999,
          background: '#fff', border: '1.5px solid #C96A3F', color: '#C96A3F',
          padding: '12px 20px', borderRadius: '12px', fontSize: '13px',
          fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          transition: 'background .2s, color .2s, border-color .2s',
        }}
      >
        {buttonLabel}
      </button>
    </>
  )
}

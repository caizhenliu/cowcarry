import { useEffect, useRef, useCallback } from 'react'
import type { MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { uiText } from '../data/site-info'
import { TagBadge } from './TagBadge'

interface Props {
  item: MenuItem | null
  onClose: () => void
}

export function ItemDetailModal({ item, onClose }: Props) {
  const { lang } = useLanguage()
  const t = uiText[lang]
  const backdropRef = useRef<HTMLDivElement>(null)

  // Pinch-to-zoom state stored in refs to avoid re-renders
  const pinchRef = useRef({
    scale: 1,
    panX: 0,
    panY: 0,
    lastDist: 0,
    panStartX: 0,
    panStartY: 0,
    lastPanX: 0,
    lastPanY: 0,
    lastTap: 0,
  })
  const pinchTargetRef = useRef<HTMLDivElement>(null)

  const applyTransform = useCallback(() => {
    const el = pinchTargetRef.current
    if (!el) return
    const { scale, panX, panY } = pinchRef.current
    el.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`
  }, [])

  const resetTransform = useCallback(() => {
    const s = pinchRef.current
    s.scale = 1; s.panX = 0; s.panY = 0
    applyTransform()
  }, [applyTransform])

  // Reset transform whenever a new item opens
  useEffect(() => {
    if (item) resetTransform()
  }, [item, resetTransform])

  // Touch handlers
  useEffect(() => {
    const wrap = backdropRef.current?.querySelector<HTMLElement>('.modal-image-wrap')
    if (!wrap || !item) return

    const s = pinchRef.current

    function onTouchStart(e: TouchEvent) {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        s.lastDist = Math.hypot(dx, dy)
      } else if (e.touches.length === 1 && s.scale > 1) {
        s.panStartX = e.touches[0].clientX
        s.panStartY = e.touches[0].clientY
        s.lastPanX = s.panX
        s.lastPanY = s.panY
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches.length === 2) {
        e.preventDefault()
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const d = Math.hypot(dx, dy)
        if (s.lastDist) {
          s.scale = Math.max(1, Math.min(4, s.scale * (d / s.lastDist)))
          if (s.scale === 1) { s.panX = 0; s.panY = 0 }
          applyTransform()
        }
        s.lastDist = d
      } else if (e.touches.length === 1 && s.scale > 1) {
        e.preventDefault()
        s.panX = s.lastPanX + (e.touches[0].clientX - s.panStartX)
        s.panY = s.lastPanY + (e.touches[0].clientY - s.panStartY)
        applyTransform()
      }
    }

    function onTouchEnd(e: TouchEvent) {
      if (e.touches.length < 2) s.lastDist = 0
      // Double-tap reset
      const now = Date.now()
      if (now - s.lastTap < 280) resetTransform()
      s.lastTap = now
    }

    wrap.addEventListener('touchstart', onTouchStart, { passive: true })
    wrap.addEventListener('touchmove', onTouchMove, { passive: false })
    wrap.addEventListener('touchend', onTouchEnd)
    return () => {
      wrap.removeEventListener('touchstart', onTouchStart)
      wrap.removeEventListener('touchmove', onTouchMove)
      wrap.removeEventListener('touchend', onTouchEnd)
    }
  }, [item, applyTransform, resetTransform])

  if (!item) return null

  function formatPrice(v: number | 'market') {
    return v === 'market' ? t.marketPrice : v
  }

  const desc = item.desc[lang]
  const note = item.note[lang]

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(20,18,14,0.55)] backdrop-blur-[4px] animate-[fadeIn_0.18s_ease]"
      onClick={(e) => { if (e.target === backdropRef.current) onClose() }}
    >
      <div className="w-full max-w-mobile max-h-[92vh] bg-bg rounded-[22px_22px_0_0] overflow-hidden flex flex-col animate-[slideUp_0.25s_cubic-bezier(.2,.9,.3,1)]">
        {/* Grip + close */}
        <div className="relative flex-shrink-0">
          <div className="w-10 h-1 bg-line-strong rounded-full mx-auto mt-2 mb-1" />
          <button
            onClick={onClose}
            aria-label={t.close}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 border border-line text-ink grid place-items-center cursor-pointer z-10 text-base leading-none"
          >
            ✕
          </button>
        </div>

        {/* Image area */}
        <div
          className="modal-image-wrap w-full aspect-[4/3] bg-gradient-to-br from-yellow-soft to-blue-soft overflow-hidden touch-none relative flex-shrink-0 grid place-items-center"
        >
          <div
            ref={pinchTargetRef}
            className="w-full h-full grid place-items-center select-none text-[120px] transition-transform duration-150"
            style={{ transformOrigin: 'center center' }}
          >
            {item.image
              ? <img src={`./images/${item.image}`} alt="" className="w-full h-full object-cover" />
              : item.emoji}
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.16em] uppercase text-[rgba(44,42,38,0.55)] bg-[rgba(255,253,247,0.7)] px-2.5 py-1.5 rounded-full pointer-events-none">
            {t.pinchHint}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="px-5 pt-[18px] pb-7 overflow-y-auto flex-1 overscroll-contain">
          <h2
            className="text-[24px] font-semibold m-0 mb-1 leading-tight text-ink"
            style={{ fontFamily: '"Cormorant Garamond", "Noto Serif TC", serif' }}
          >
            {item.names[lang]}
          </h2>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-3">
            {item.id}
          </div>

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 my-2.5 mb-3.5">
              {item.tags.map(tag => <TagBadge key={tag} code={tag} size="md" />)}
            </div>
          )}

          {/* Prices */}
          <div className="border-t border-b border-line py-3 my-3.5">
            {item.price.map((p, i) => (
              <div
                key={i}
                className={`flex justify-between items-baseline py-1.5 text-[14px] ${i > 0 ? 'border-t border-dashed border-line' : ''}`}
              >
                <span className="text-ink-soft">
                  {p.label ? p.label[lang] : item.names[lang]}
                </span>
                <span className="text-[17px] font-bold text-ink tabular-nums">
                  {p.value === 'market'
                    ? t.marketPrice
                    : <><span className="text-[10px] font-medium text-ink-faint tracking-wide mr-0.5">NT$</span>{formatPrice(p.value)}</>
                  }
                </span>
              </div>
            ))}
          </div>

          {desc && (
            <div className="mt-4">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-1.5">{t.descLabel}</div>
              <p className="text-[13px] text-ink-soft leading-relaxed m-0">{desc}</p>
            </div>
          )}

          {note && (
            <div className="mt-4">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-1.5">{t.noteLabel}</div>
              <p className="text-[13px] text-ink-soft leading-relaxed m-0">{note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

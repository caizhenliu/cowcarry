import { uiText } from '../data/site-info'
import { useLanguage } from '../hooks/useLanguage'

export function Header() {
  const { lang } = useLanguage()
  const t = uiText[lang]

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.address)}`

  return (
    <header
      className="px-5 pt-[22px] pb-[26px] border-b border-line"
      style={{
        background: 'radial-gradient(120% 80% at 10% 0%, #DCEEF5 0%, transparent 55%), radial-gradient(140% 90% at 100% 100%, #FBEDB8 0%, transparent 50%), #FFFDF7',
      }}
    >
      {/* Brand art placeholder */}
      <div
        className="w-full aspect-[4/3] rounded-[18px] mb-[18px] flex items-center justify-center overflow-hidden relative"
        style={{
          background: 'repeating-linear-gradient(135deg, rgba(244,215,122,0.35) 0 8px, rgba(244,215,122,0.18) 8px 16px), linear-gradient(180deg, #FBEDB8 0%, #A9D4E5 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)',
        }}
        role="img"
        aria-label="初煦咖哩 brand illustration placeholder"
      >
        <div className="text-center" style={{ color: 'rgba(44,42,38,0.55)', fontFamily: '"Cormorant Garamond", "Noto Serif TC", serif' }}>
          <span className="block text-[56px] font-semibold tracking-wide leading-none mb-1.5">初煦 · True</span>
          <span className="block font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(44,42,38,0.55)' }}>
            curry · since
          </span>
        </div>
      </div>

      {/* Store name */}
      <h1
        className="text-[30px] font-semibold tracking-tight mb-1 text-ink"
        style={{ fontFamily: '"Cormorant Garamond", "Noto Serif TC", "Noto Sans TC", serif' }}
      >
        {t.storeName}
      </h1>
      <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink-faint mb-4">
        {t.storeNameSub}
      </div>

      {/* Meta rows */}
      <div className="flex flex-col gap-2.5 mt-1">
        <div className="flex gap-2.5 items-start text-[13px] text-ink-soft">
          <div className="w-[22px] h-[22px] flex-shrink-0 rounded-md bg-yellow-soft text-ink grid place-items-center text-[12px]">📍</div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-0.5">{t.addressLabel}</div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium no-underline"
            >
              {t.address}
            </a>
          </div>
        </div>

        <div className="flex gap-2.5 items-start text-[13px] text-ink-soft">
          <div className="w-[22px] h-[22px] flex-shrink-0 rounded-md bg-blue-soft text-ink grid place-items-center text-[12px]">☎</div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint mb-0.5">{t.phoneLabel}</div>
            <a
              href={`tel:${t.phone.replace(/\s+/g, '')}`}
              className="text-ink font-medium no-underline"
            >
              {t.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

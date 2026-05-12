import type { MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { uiText } from '../data/site-info'
import { TagBadge } from './TagBadge'

interface Props {
  item: MenuItem
  onOpen: (item: MenuItem) => void
}

export function MenuCard({ item, onOpen }: Props) {
  const { lang } = useLanguage()
  const t = uiText[lang]
  const singlePrice = item.price.length === 1

  function formatPrice(v: number | 'market') {
    return v === 'market' ? t.marketPrice : `NT$${v}`
  }

  return (
    <button
      type="button"
      aria-label={item.names[lang]}
      onClick={() => onOpen(item)}
      className="flex gap-3.5 p-3 bg-card border border-line rounded-2xl cursor-pointer text-left w-full transition-[transform,box-shadow,border-color] duration-100 active:scale-[0.985] active:shadow-card active:border-yellow"
    >
      {/* Thumbnail */}
      <div className="w-[72px] h-[72px] flex-shrink-0 rounded-[10px] bg-gradient-to-br from-yellow-soft to-blue-soft grid place-items-center text-[34px] overflow-hidden">
        {item.image
          ? <img src={`./images/${item.image}`} alt="" loading="lazy" className="w-full h-full object-cover" />
          : item.emoji}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-1.5">
        <h3 className="text-[16px] font-bold leading-tight text-ink m-0 break-words">
          {item.names[lang]}
        </h3>

        {item.tags.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {item.tags.map(tag => <TagBadge key={tag} code={tag} />)}
          </div>
        )}

        <div className="flex flex-col gap-0.5 mt-0.5">
          {item.price.map((p, i) => (
            <div key={i} className="flex justify-between items-baseline gap-2 text-[13px]">
              <span className="text-ink-soft">
                {p.label ? p.label[lang] : ''}
              </span>
              <span className={`font-bold text-ink tabular-nums whitespace-nowrap ${singlePrice && i === 0 ? 'text-[15px]' : ''}`}>
                {formatPrice(p.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </button>
  )
}

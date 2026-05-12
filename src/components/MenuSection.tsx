import type { MenuItem } from '../types/menu'
import { categoryLabels } from '../data/site-info'
import { categoryOrder } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'
import { MenuCard } from './MenuCard'

interface Props {
  category: string
  items: MenuItem[]
  index: number
  onOpenItem: (item: MenuItem) => void
}

export function MenuSection({ category, items, index, onOpenItem }: Props) {
  const { lang } = useLanguage()
  const total = categoryOrder.length

  if (!items.length) return null

  return (
    <section
      id={`sec-${category}`}
      className="menu-section px-5 pt-7 pb-2"
    >
      <div className="flex items-baseline gap-3 mb-[18px]">
        <h2
          className="text-[26px] font-semibold m-0 text-ink tracking-tight"
          style={{ fontFamily: '"Cormorant Garamond", "Noto Serif TC", serif' }}
        >
          {categoryLabels[category][lang]}
        </h2>
        <div
          className="flex-1 h-px self-center"
          style={{ background: 'linear-gradient(90deg, #F4D77A 0%, transparent 100%)' }}
        />
        <div className="font-mono text-[11px] tracking-[0.16em] text-ink-faint flex-shrink-0">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {items.map(item => (
          <MenuCard key={item.id} item={item} onOpen={onOpenItem} />
        ))}
      </div>
    </section>
  )
}

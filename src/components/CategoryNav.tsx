import { useEffect, useRef } from 'react'
import { categoryLabels } from '../data/site-info'
import { categoryOrder } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'

interface Props {
  activeCategory: string
}

export function CategoryNav({ activeCategory }: Props) {
  const { lang } = useLanguage()
  const barRef = useRef<HTMLElement>(null)

  // Scroll active pill into view when it changes
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const activePill = bar.querySelector<HTMLElement>('[data-active="true"]')
    activePill?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeCategory])

  function handleClick(cat: string) {
    const section = document.getElementById(`sec-${cat}`)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      ref={barRef}
      className="sticky top-[47px] z-40 flex gap-1.5 px-4 py-2.5 bg-bg/95 backdrop-blur-md border-b border-line overflow-x-auto scrollbar-hide"
      aria-label="Categories"
    >
      {categoryOrder.map((cat) => (
        <button
          key={cat}
          data-active={activeCategory === cat ? 'true' : undefined}
          onClick={() => handleClick(cat)}
          className={`flex-shrink-0 px-3.5 py-[7px] rounded-full text-[13px] font-medium leading-none whitespace-nowrap border transition-colors duration-150
            ${activeCategory === cat
              ? 'bg-ink text-yellow border-ink font-bold'
              : 'bg-transparent text-ink-soft border-line-strong'
            }`}
        >
          {categoryLabels[cat][lang]}
        </button>
      ))}
    </nav>
  )
}

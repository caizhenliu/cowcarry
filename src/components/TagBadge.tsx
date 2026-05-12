import { tagDict } from '../data/tags'
import { useLanguage } from '../hooks/useLanguage'

interface Props {
  code: string
  size?: 'sm' | 'md'
}

export function TagBadge({ code, size = 'sm' }: Props) {
  const { lang } = useLanguage()
  const tag = tagDict[code]
  if (!tag) return null
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-yellow-soft text-ink-soft whitespace-nowrap ${size === 'md' ? 'px-2.5 py-1 text-[11px]' : 'px-1.5 py-0.5 text-[10px]'}`}>
      <span>{tag.icon}</span>
      <span>{tag.labels[lang]}</span>
    </span>
  )
}

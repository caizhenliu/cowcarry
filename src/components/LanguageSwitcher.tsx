import { useLanguage } from '../hooks/useLanguage'
import type { Lang } from '../types/menu'

const langs: { code: Lang; label: string }[] = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  function handleClick(code: Lang) {
    setLang(code)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky top-0 z-50 flex justify-center gap-1 px-3 py-2.5 bg-bg/90 backdrop-blur-md border-b border-line"
      aria-label="Language"
    >
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleClick(code)}
          className={`flex-1 max-w-[78px] border rounded-full px-1 py-2 text-[12px] font-medium leading-none tracking-wide transition-colors duration-150
            ${lang === code
              ? 'bg-yellow border-yellow-deep text-ink font-bold'
              : 'bg-transparent border-line-strong text-ink-soft hover:bg-yellow-soft'
            }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

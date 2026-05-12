import { createContext, useContext, useState } from 'react'
import type { Lang } from '../types/menu'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'zh',
  setLang: () => undefined,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useLanguageState(): LanguageContextValue {
  const [lang, setLang] = useState<Lang>('zh')
  return { lang, setLang }
}

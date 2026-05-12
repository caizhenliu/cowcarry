import { useState, useEffect, useCallback } from 'react'
import { LanguageContext, useLanguageState } from './hooks/useLanguage'
import { menuItems } from './data/menu-i18n'
import { categoryOrder } from './data/tags'
import { uiText } from './data/site-info'
import { useLanguage } from './hooks/useLanguage'
import { Header } from './components/Header'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'
import type { MenuItem } from './types/menu'

function MenuApp() {
  const { lang } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(categoryOrder[0] as string)
  const [modalItem, setModalItem] = useState<MenuItem | null>(null)
  const [savedScrollY, setSavedScrollY] = useState(0)
  const t = uiText[lang]

  // Scroll-spy: highlight the category currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setActiveCategory(en.target.id.replace('sec-', ''))
          }
        })
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: 0 }
    )
    document.querySelectorAll('.menu-section').forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [lang]) // re-bind after lang switch re-renders sections

  const openModal = useCallback((item: MenuItem) => {
    setSavedScrollY(window.scrollY)
    setModalItem(item)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setModalItem(null)
    document.body.style.overflow = ''
    window.scrollTo({ top: savedScrollY, behavior: 'instant' })
  }, [savedScrollY])

  return (
    <div className="w-full max-w-mobile min-h-screen mx-auto bg-bg shadow-app relative overflow-hidden">
      <LanguageSwitcher />
      <Header />
      <CategoryNav activeCategory={activeCategory} />

      <main>
        {categoryOrder.map((cat, i) => {
          const items = menuItems.filter((it) => it.category === cat)
          return (
            <MenuSection
              key={cat}
              category={cat}
              items={items}
              index={i}
              onOpenItem={openModal}
            />
          )
        })}
      </main>

      {/* Footer */}
      <footer className="mx-4 mt-6 mb-8 p-[18px] border border-dashed border-line-strong rounded-2xl bg-[rgba(244,215,122,0.08)]">
        <div className="flex gap-2 text-[12px] text-ink-soft leading-relaxed">
          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-deep mt-[7px]" />
          <span>{t.footerNote1}</span>
        </div>
        <div className="flex gap-2 text-[12px] text-ink-soft leading-relaxed mt-2">
          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-deep mt-[7px]" />
          <span>{t.footerNote2}</span>
        </div>
        <div className="mt-[18px] pt-3.5 border-t border-line text-center font-mono text-[10px] tracking-[0.18em] uppercase text-ink-faint">
          truedish curry · 初煦 · 2026
        </div>
      </footer>

      {modalItem && <ItemDetailModal item={modalItem} onClose={closeModal} />}
    </div>
  )
}

export function App() {
  const langState = useLanguageState()
  return (
    <LanguageContext.Provider value={langState}>
      <MenuApp />
    </LanguageContext.Provider>
  )
}

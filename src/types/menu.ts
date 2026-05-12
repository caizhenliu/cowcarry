export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export type I18nString = Record<Lang, string>

export interface PriceOption {
  label: I18nString | null
  value: number | 'market'
}

export interface MenuItem {
  id: string
  category: string
  names: I18nString
  price: PriceOption[]
  image: string | null
  emoji: string
  tags: string[]
  desc: I18nString
  note: I18nString
}

export interface CategoryLabel {
  [cat: string]: I18nString
}

export interface TagEntry {
  icon: string
  labels: I18nString
}

export interface TagDict {
  [code: string]: TagEntry
}

export interface UiStrings {
  storeName: string
  storeNameSub: string
  address: string
  phone: string
  addressLabel: string
  phoneLabel: string
  marketPrice: string
  descLabel: string
  noteLabel: string
  close: string
  footerNote1: string
  footerNote2: string
  pinchHint: string
}

export type UiText = Record<Lang, UiStrings>

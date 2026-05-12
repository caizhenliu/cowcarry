// 初煦咖哩 truedish curry — 菜單原始資料（店家維護處）
//
// category: main / addon / specialty / dessert / drink
// options:  不分規格 → ['270']；分規格 → ['烤雞腿 270', '牛肉 340']；時價 → ['時價']
// tags:     標記代碼（R/1/2/3/P/B/L/V/V5/H），無標記填 []
// image:    圖片檔名（放 public/images/），無圖填 null
// emoji:    無圖時的替代圖示
// note:     中文備註，不需要填 ''

export interface RawItem {
  category: string
  name: string
  options: string[]
  tags: string[]
  image: string | null
  emoji: string
  note: string
}

export const menuRaw: RawItem[] = [
  // ── 主食 ────────────────────────────────────────────────────────────
  { category: 'main', name: '初煦牛肉咖哩',  options: ['300'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'main', name: '初煦雞肉咖哩',  options: ['230'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'main', name: '初煦豬肉咖哩',  options: ['230'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'main', name: '初煦野菜咖哩',  options: ['230'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'main', name: '初煦綜合咖哩',  options: ['300'], tags: [], image: null, emoji: '🍛', note: '' },

  // ── 加料 ────────────────────────────────────────────────────────────
  { category: 'addon', name: '起司',     options: ['30'], tags: [], image: null, emoji: '🧀', note: '' },
  { category: 'addon', name: '白飯',     options: ['20'], tags: [], image: null, emoji: '🍚', note: '' },
  { category: 'addon', name: '溏心蛋',   options: ['30'], tags: [], image: null, emoji: '🥚', note: '' },
  { category: 'addon', name: '味噌湯',   options: ['30'], tags: [], image: null, emoji: '🍲', note: '' },
  { category: 'addon', name: '柚子蘿蔔', options: ['30'], tags: [], image: null, emoji: '🥗', note: '' },

  // ── 小食 ────────────────────────────────────────────────────────────
  { category: 'specialty', name: '酥炸帶皮馬鈴薯',   options: ['60'],  tags: [], image: null, emoji: '🥔', note: '' },
  { category: 'specialty', name: '酥炸綜合野菜盤',   options: ['80'],  tags: [], image: null, emoji: '🥗', note: '' },
  { category: 'specialty', name: '杜蘭小麥炸節瓜',   options: ['130'], tags: [], image: null, emoji: '🥒', note: '' },
  { category: 'specialty', name: '初煦香料烤雞腿',   options: ['150'], tags: [], image: null, emoji: '🍗', note: '' },
  { category: 'specialty', name: '雞丼',             options: ['180'], tags: [], image: null, emoji: '🍚', note: '' },

  // ── 甜點 ────────────────────────────────────────────────────────────
  { category: 'dessert', name: '鹿稔咖啡的布丁',  options: ['120'], tags: [], image: null, emoji: '🍮', note: '' },
  { category: 'dessert', name: '日式紅豆奶酪',    options: ['70'],  tags: [], image: null, emoji: '🥛', note: '' },
  { category: 'dessert', name: '沖繩黑糖奶酪',    options: ['70'],  tags: [], image: null, emoji: '🥛', note: '' },

  // ── 特調飲品 ────────────────────────────────────────────────────────
  { category: 'drink', name: '地理中心杯',  options: ['80'], tags: [], image: null, emoji: '🍹', note: '' },
  { category: 'drink', name: '埔里甘蔗青',  options: ['80'], tags: [], image: null, emoji: '🥤', note: '' },
  { category: 'drink', name: '短捏幾個秋',  options: ['80'], tags: [], image: null, emoji: '🍯', note: '' },
  { category: 'drink', name: '紫蘇梅汽泡',  options: ['80'], tags: [], image: null, emoji: '🥤', note: '' },
  { category: 'drink', name: '生乳灼香紅',  options: ['70'], tags: [], image: null, emoji: '🥛', note: '' },
  { category: 'drink', name: '梅可樂',      options: ['50'], tags: [], image: null, emoji: '🥤', note: '' },
]

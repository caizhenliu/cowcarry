import type { MenuItem } from '../types/menu'

const e = { zh: '', en: '', ja: '', ko: '' }

export const menuItems: MenuItem[] = [
  // ─── 主食 MAINS ───────────────────────────────────────────────────────
  {
    id: 'main-001', category: 'main',
    names: { zh: '初煦牛肉咖哩', en: 'True-Dish Beef Curry', ja: '初煦ビーフカレー', ko: '초후 비프 카레' },
    price: [{ label: null, value: 300 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'main-002', category: 'main',
    names: { zh: '初煦雞肉咖哩', en: 'True-Dish Chicken Curry', ja: '初煦チキンカレー', ko: '초후 치킨 카레' },
    price: [{ label: null, value: 230 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'main-003', category: 'main',
    names: { zh: '初煦豬肉咖哩', en: 'True-Dish Pork Curry', ja: '初煦ポークカレー', ko: '초후 포크 카레' },
    price: [{ label: null, value: 230 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'main-004', category: 'main',
    names: { zh: '初煦野菜咖哩', en: 'True-Dish Vegetable Curry', ja: '初煦野菜カレー', ko: '초후 채소 카레' },
    price: [{ label: null, value: 230 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'main-005', category: 'main',
    names: { zh: '初煦綜合咖哩', en: 'True-Dish Beef & Chicken Curry', ja: '初煦合いがけカレー', ko: '초후 비프&치킨 카레' },
    price: [{ label: null, value: 300 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...e }, note: { ...e },
  },

  // ─── 加料 ADD-ONS ────────────────────────────────────────────────────
  {
    id: 'addon-001', category: 'addon',
    names: { zh: '+ 起司', en: '+ Cheese', ja: '+ チーズ', ko: '+ 치즈' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🧀', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'addon-002', category: 'addon',
    names: { zh: '+ 白飯', en: '+ Rice', ja: '+ ライス', ko: '+ 밥' },
    price: [{ label: null, value: 20 }],
    image: null, emoji: '🍚', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'addon-003', category: 'addon',
    names: { zh: '+ 溏心蛋', en: '+ Soft-Boiled Egg', ja: '+ 半熟卵', ko: '+ 반숙란' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🥚', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'addon-004', category: 'addon',
    names: { zh: '+ 味噌湯', en: '+ Miso Soup', ja: '+ 味噌汁', ko: '+ 미소된장국' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🍲', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'addon-005', category: 'addon',
    names: { zh: '+ 柚子蘿蔔', en: '+ Radish with Pomelo', ja: '+ 柚子大根', ko: '+ 유자 무' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🥗', tags: [],
    desc: { ...e }, note: { ...e },
  },

  // ─── 小食 SPECIALTY ──────────────────────────────────────────────────
  {
    id: 'specialty-001', category: 'specialty',
    names: { zh: '酥炸帶皮馬鈴薯', en: 'Skin-On Fried Potatoes', ja: '皮付きフライドポテト', ko: '껍질째 감자튀김' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🥔', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'specialty-002', category: 'specialty',
    names: { zh: '酥炸綜合野菜盤', en: 'Mixed Vegetable Fritters', ja: '野菜のミックスフライ', ko: '모듬 야채튀김' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🥗', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'specialty-003', category: 'specialty',
    names: { zh: '杜蘭小麥炸節瓜', en: 'Durum Wheat Fried Zucchini', ja: 'デュラム小麦のズッキーニフライ', ko: '듀럼밀 주키니 튀김' },
    price: [{ label: null, value: 130 }],
    image: null, emoji: '🥒', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'specialty-004', category: 'specialty',
    names: { zh: '初煦香料烤雞腿', en: 'True-Dish Spiced Chicken Leg', ja: '初煦スパイス焼きチキンレッグ', ko: '초후 스파이스 닭다리 구이' },
    price: [{ label: null, value: 150 }],
    image: null, emoji: '🍗', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'specialty-005', category: 'specialty',
    names: { zh: '雞丼', en: 'Chicken Donburi', ja: '鶏丼', ko: '치킨 동부리' },
    price: [{ label: null, value: 180 }],
    image: null, emoji: '🍚', tags: [],
    desc: { ...e }, note: { ...e },
  },

  // ─── 甜點 DESSERTS ───────────────────────────────────────────────────
  {
    id: 'dessert-001', category: 'dessert',
    names: { zh: '鹿稔咖啡的布丁', en: 'Shōwa-Style Caramel Pudding', ja: '昭和風プリン', ko: '쇼와풍 캐러멜 푸딩' },
    price: [{ label: null, value: 120 }],
    image: null, emoji: '🍮', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'dessert-002', category: 'dessert',
    names: { zh: '日式紅豆奶酪', en: 'Panna Cotta with Wandan Adzuki Beans', ja: '万丹小豆のパンナコッタ', ko: '완단 팥 판나코타' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '🥛', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'dessert-003', category: 'dessert',
    names: { zh: '沖繩黑糖奶酪', en: 'Panna Cotta with Okinawa Brown Sugar', ja: '沖縄黒糖パンナコッタ', ko: '오키나와 흑설탕 판나코타' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '🥛', tags: [],
    desc: { ...e }, note: { ...e },
  },

  // ─── 特調 SOFT DRINKS ────────────────────────────────────────────────
  {
    id: 'drink-001', category: 'drink',
    names: { zh: '地理中心杯', en: 'Dragon Fruit & Passion Fruit Juice', ja: 'ドラゴンフルーツ＆パッションフルーツジュース', ko: '용과 & 패션후르츠 주스' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍹', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'drink-002', category: 'drink',
    names: { zh: '埔里甘蔗青', en: 'Sugar Cane & Green Tea', ja: 'さとうきび緑茶', ko: '사탕수수 녹차' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🥤', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'drink-003', category: 'drink',
    names: { zh: '短捏幾個秋', en: 'Longan Honey & Lemon Juice', ja: '龍眼蜂蜜レモン', ko: '용안 꿀 레몬' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍯', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'drink-004', category: 'drink',
    names: { zh: '紫蘇梅汽泡', en: 'Perilla Plum Soda', ja: '紫蘇梅ソーダ', ko: '차조기 매실 소다' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🥤', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'drink-005', category: 'drink',
    names: { zh: '生乳灼香紅', en: 'Milk Foam Black Tea', ja: 'ミルクフォーム紅茶', ko: '밀크폼 홍차' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '🥛', tags: [],
    desc: { ...e }, note: { ...e },
  },
  {
    id: 'drink-006', category: 'drink',
    names: { zh: '梅可樂', en: 'Plum Cola', ja: '梅コーラ', ko: '매실 콜라' },
    price: [{ label: null, value: 50 }],
    image: null, emoji: '🥤', tags: [],
    desc: { ...e }, note: { ...e },
  },
]

// ═══════════════════════════════════════════════════════════════════════════
//  此檔案由 menu-raw.js 展開而成的完整四語渲染資料,index.html 直接讀取此檔
//  欄位:id / category / names{zh,en,ja,ko} / price[] / image / emoji / tags[]
//        desc{zh,en,ja,ko} / note{zh,en,ja,ko}
// ═══════════════════════════════════════════════════════════════════════════

const empty4 = { zh: '', en: '', ja: '', ko: '' };

const menuItems = [
  // ─── MAIN 主食 ────────────────────────────────────────────────────────
  {
    id: 'main-001', category: 'main',
    names: { zh: '初煦牛肉咖哩', en: 'True-Dish Beef Curry', ja: '初煦ビーフカレー', ko: '초후 비프 카레' },
    price: [{ label: null, value: 300 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'main-002', category: 'main',
    names: { zh: '初煦雞肉咖哩', en: 'True-Dish Chicken Curry', ja: '初煦チキンカレー', ko: '초후 치킨 카레' },
    price: [{ label: null, value: 230 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'main-003', category: 'main',
    names: { zh: '初煦豬肉咖哩', en: 'True-Dish Pork Curry', ja: '初煦ポークカレー', ko: '초후 포크 카레' },
    price: [{ label: null, value: 230 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'main-004', category: 'main',
    names: { zh: '初煦野菜咖哩', en: 'True-Dish Vegetable Curry', ja: '初煦野菜カレー', ko: '초후 채소 카레' },
    price: [{ label: null, value: 230 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'main-005', category: 'main',
    names: { zh: '初煦綜合咖哩', en: 'True-Dish Beef & Chicken Curry', ja: '初煦合いがけカレー', ko: '초후 비프&치킨 카레' },
    price: [{ label: null, value: 300 }],
    image: null, emoji: '🍛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },

  // ─── ADDON 加料 ───────────────────────────────────────────────────────
  {
    id: 'addon-001', category: 'addon',
    names: { zh: '+ 起司', en: '+ Cheese', ja: '+ チーズ', ko: '+ 치즈' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🧀', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'addon-002', category: 'addon',
    names: { zh: '+ 白飯', en: '+ Rice', ja: '+ ライス', ko: '+ 밥' },
    price: [{ label: null, value: 20 }],
    image: null, emoji: '🍚', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'addon-003', category: 'addon',
    names: { zh: '+ 溏心蛋', en: '+ Soft-Boiled Egg', ja: '+ 半熟卵', ko: '+ 반숙란' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🥚', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'addon-004', category: 'addon',
    names: { zh: '+ 味噌湯', en: '+ Miso Soup', ja: '+ 味噌汁', ko: '+ 미소된장국' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🍲', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'addon-005', category: 'addon',
    names: { zh: '+ 柚子蘿蔔', en: '+ Radish with Pomelo', ja: '+ 柚子大根', ko: '+ 유자 무' },
    price: [{ label: null, value: 30 }],
    image: null, emoji: '🥗', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },

  // ─── SPECIALTY 小食 ───────────────────────────────────────────────────
  {
    id: 'specialty-001', category: 'specialty',
    names: { zh: '酥炸帶皮馬鈴薯', en: 'Fried Potatoes', ja: '皮付きフライドポテト', ko: '껍질째 감자튀김' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🥔', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'specialty-002', category: 'specialty',
    names: { zh: '酥炸綜合野菜盤', en: 'Fried Mix Vegetables', ja: '野菜のミックスフライ', ko: '모듬 야채튀김' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🥗', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'specialty-003', category: 'specialty',
    names: { zh: '杜蘭小麥炸節瓜', en: 'Fried Zucchini with Durum Wheat', ja: 'デュラム小麦のズッキーニフライ', ko: '듀럼밀 주키니 튀김' },
    price: [{ label: null, value: 130 }],
    image: null, emoji: '🥒', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'specialty-004', category: 'specialty',
    names: { zh: '初煦香料烤雞腿', en: 'True-Dish Spiced Chicken Leg', ja: '初煦スパイス焼きチキンレッグ', ko: '초후 스파이스 닭다리 구이' },
    price: [{ label: null, value: 150 }],
    image: null, emoji: '🍗', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'specialty-005', category: 'specialty',
    names: { zh: '雞丼', en: 'Chicken Donburi', ja: '鶏丼', ko: '치킨 동부리' },
    price: [{ label: null, value: 180 }],
    image: null, emoji: '🍚', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },

  // ─── DESSERT 甜點 ─────────────────────────────────────────────────────
  {
    id: 'dessert-001', category: 'dessert',
    names: { zh: '鹿稔咖啡的布丁', en: 'Showa-era Style Caramel Pudding', ja: '昭和風プリン', ko: '쇼와풍 캐러멜 푸딩' },
    price: [{ label: null, value: 120 }],
    image: null, emoji: '🍮', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'dessert-002', category: 'dessert',
    names: { zh: '日式紅豆奶酪', en: 'Panna Cotta with Wandan Adzuki Beans', ja: '万丹小豆のパンナコッタ', ko: '완단 팥 판나코타' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '🥛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'dessert-003', category: 'dessert',
    names: { zh: '沖繩黑糖奶酪', en: 'Panna Cotta with Okinawa Brown Sugar', ja: '沖縄黒糖パンナコッタ', ko: '오키나와 흑설탕 판나코타' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '🥛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },

  // ─── DRINK 特調 ───────────────────────────────────────────────────────
  {
    id: 'drink-001', category: 'drink',
    names: { zh: '地理中心杯', en: 'Dragon Fruit & Passion Fruit Juice', ja: 'ドラゴンフルーツ＆パッションフルーツジュース', ko: '용과 & 패션후르츠 주스' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍹', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'drink-002', category: 'drink',
    names: { zh: '埔里甘蔗青', en: 'Sugar Cane & Green Tea', ja: 'さとうきび緑茶', ko: '사탕수수 녹차' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🥤', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'drink-003', category: 'drink',
    names: { zh: '短捏幾個秋', en: 'Longan Honey & Lemon Juice', ja: '龍眼蜂蜜レモン', ko: '용안 꿀 레몬' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍯', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'drink-004', category: 'drink',
    names: { zh: '紫蘇梅汽泡', en: 'Perilla Plum & Soda', ja: '紫蘇梅ソーダ', ko: '차조기 매실 소다' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🥤', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'drink-005', category: 'drink',
    names: { zh: '生乳灼香紅', en: 'Milk Foam Black Tea', ja: 'ミルクフォーム紅茶', ko: '밀크폼 홍차' },
    price: [{ label: null, value: 70 }],
    image: null, emoji: '🥛', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
  {
    id: 'drink-006', category: 'drink',
    names: { zh: '梅可樂', en: 'Coca-Cola with Plum', ja: '梅コーラ', ko: '매실 콜라' },
    price: [{ label: null, value: 50 }],
    image: null, emoji: '🥤', tags: [],
    desc: { ...empty4 }, note: { ...empty4 },
  },
];

// ─── 分類字典 ───────────────────────────────────────────────────────────
const categoryLabels = {
  main:      { zh: '主食',   en: 'Mains',        ja: 'メインディッシュ', ko: '메인요리' },
  addon:     { zh: '加料',   en: 'Add-ons',      ja: 'トッピング',       ko: '추가' },
  specialty: { zh: '小食',   en: 'Specialty',    ja: 'サイドメニュー',    ko: '사이드메뉴' },
  dessert:   { zh: '甜點',   en: 'Desserts',     ja: 'デザート',          ko: '디저트' },
  drink:     { zh: '特調',   en: 'Soft Drinks',  ja: 'ソフトドリンク',    ko: '음료' },
};

const categoryOrder = ['main', 'addon', 'specialty', 'dessert', 'drink'];

// ─── 標記字典(品項上沒列出的就不會顯示) ────────────────────────────
const tagDict = {
  R:  { icon: '⭐',   labels: { zh: '本店推薦', en: 'Recommended',           ja: 'おすすめ',         ko: '추천' } },
  '1':{ icon: '🌶️',   labels: { zh: '小辣',     en: 'Mild Spicy',            ja: '少し辛い',         ko: '약간 매운' } },
  '2':{ icon: '🌶️🌶️', labels: { zh: '中辣',     en: 'Medium Spicy',          ja: '中辛',             ko: '보통 매운' } },
  '3':{ icon: '🔥',   labels: { zh: '大辣',     en: 'Very Spicy',            ja: '激辛',             ko: '매우 매운' } },
  P:  { icon: '🐷',   labels: { zh: '含豬肉',   en: 'Contains Pork',         ja: '豚肉入り',         ko: '돼지고기 포함' } },
  B:  { icon: '🐂',   labels: { zh: '含牛肉',   en: 'Contains Beef',         ja: '牛肉入り',         ko: '소고기 포함' } },
  L:  { icon: '🐑',   labels: { zh: '含羊肉',   en: 'Contains Lamb',         ja: 'ラム入り',         ko: '양고기 포함' } },
  V:  { icon: '🥬',   labels: { zh: '素食',     en: 'Vegetarian',            ja: 'ベジタリアン',     ko: '채식' } },
  V5: { icon: '🧄',   labels: { zh: '五辛素',   en: 'Plant-based with Allium', ja: '五葷あり精進',   ko: '오신채 포함 채식' } },
  H:  { icon: '☪️',   labels: { zh: '清真認證', en: 'Halal Certified',       ja: 'ハラール認証',     ko: '할랄 인증' } },
};

// ─── 介面 UI 文字 ───────────────────────────────────────────────────────
const uiText = {
  zh: {
    storeName: '初煦咖哩',
    storeNameSub: 'truedish curry',
    address: '545 南投縣埔里鎮信義路 1065 號',
    phone: '049-291-7490',
    addressLabel: '地址',
    phoneLabel: '電話',
    marketPrice: '時價',
    descLabel: '說明',
    noteLabel: '備註',
    close: '關閉',
    footerNote1: '外帶自備環保餐盒,折 30 元',
    footerNote2: '內用低消一份主食,禁帶外食',
    pinchHint: '雙指縮放圖片',
  },
  en: {
    storeName: 'truedish curry',
    storeNameSub: '初煦咖哩',
    address: 'No. 1065, Xinyi Rd., Puli Township, Nantou County 545, Taiwan',
    phone: '+886-49-291-7490',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    marketPrice: 'Market Price',
    descLabel: 'Description',
    noteLabel: 'Notes',
    close: 'Close',
    footerNote1: 'Bring your own container for takeout — NT$30 off',
    footerNote2: 'Dine-in minimum: one main per guest. No outside food.',
    pinchHint: 'Pinch to zoom',
  },
  ja: {
    storeName: '初煦カレー',
    storeNameSub: 'truedish curry',
    address: '台湾南投県埔里鎮信義路1065号 545',
    phone: '+886-49-291-7490',
    addressLabel: '住所',
    phoneLabel: '電話',
    marketPrice: '時価',
    descLabel: '説明',
    noteLabel: '備考',
    close: '閉じる',
    footerNote1: 'マイ容器持参のテイクアウトは30元引き',
    footerNote2: '店内利用はお一人様メイン1品より、持ち込み禁止',
    pinchHint: 'ピンチでズーム',
  },
  ko: {
    storeName: '초후 카레',
    storeNameSub: 'truedish curry',
    address: '대만 난터우현 푸리진 신이로 1065 (545)',
    phone: '+886-49-291-7490',
    addressLabel: '주소',
    phoneLabel: '전화',
    marketPrice: '시가',
    descLabel: '설명',
    noteLabel: '비고',
    close: '닫기',
    footerNote1: '친환경 용기 지참 시 테이크아웃 30원 할인',
    footerNote2: '매장 이용 시 1인 메인 1개 이상, 외부 음식 반입 금지',
    pinchHint: '핀치로 확대',
  },
};

window.menuItems = menuItems;
window.categoryLabels = categoryLabels;
window.categoryOrder = categoryOrder;
window.tagDict = tagDict;
window.uiText = uiText;

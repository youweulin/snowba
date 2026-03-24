// 北海道 Après-Ski 完整指南：美食、飲品、娛樂
// 針對台灣滑雪旅客的詳細推薦資料

// ============================================================
// 美食指南（依地區分類）
// ============================================================
export const foodGuide = [
  {
    id: 'asahikawa',
    area: '旭川',
    areaEn: 'Asahikawa',
    icon: '🍜',
    description:
      '旭川是北海道拉麵重鎮，以醬油豚骨拉麵聞名全日本。寒冷的冬天滑完雪後，來一碗熱騰騰的旭川拉麵是最幸福的事。',
    specialties: [
      {
        name: '旭川拉麵',
        nameJa: '旭川ラーメン',
        description:
          '旭川拉麵的特色是以豬骨和魚介雙湯頭為基底，加入醬油調味，湯面上浮著一層豬油鎖住熱度，即使在零下 20°C 的戶外端著走也不會冷掉。麵條是中等粗細的捲麵，Q彈有嚼勁。',
        mustTry: true,
      },
      {
        name: '成吉思汗烤肉',
        nameJa: 'ジンギスカン',
        description:
          '大黑屋是旭川最知名的成吉思汗烤肉店，使用新鮮羊肩肉搭配特製醬料，在凸面鐵盤上炭烤，肉質鮮嫩無腥味，是滑雪後補充蛋白質的最佳選擇。',
        mustTry: true,
      },
      {
        name: '新子燒（雞肉串燒）',
        nameJa: '新子焼き',
        description:
          '旭川獨有的名物料理，使用半隻嫩雞以鹽味或醬汁炭烤，外皮酥脆、肉汁飽滿，搭配啤酒堪稱絕配。',
        mustTry: false,
      },
    ],
    recommendedShops: [
      {
        name: '山頭火 本店',
        nameJa: 'らーめん山頭火 本店',
        category: '拉麵',
        address: '旭川市1条通8丁目',
        priceRange: '¥800-1,200',
        highlight: '北海道拉麵名店總本店，招牌鹽味拉麵湯頭濃郁順口，在台灣也有分店但本店風味更勝一籌。',
        tip: '平日午餐時段較不用排隊，推薦「特選鹽味拉麵」。',
      },
      {
        name: '梅光軒 本店',
        nameJa: '梅光軒 本店',
        category: '拉麵',
        address: '旭川市2条通8丁目',
        priceRange: '¥800-1,100',
        highlight: '米其林推薦拉麵店，醬油拉麵是經典款，豚骨魚介湯頭香氣十足。',
        tip: '營業到晚上9點，滑完雪晚餐時段人潮較多。',
      },
      {
        name: '大黑屋 成吉思汗烤肉',
        nameJa: '成吉思汗 大黒屋',
        category: '成吉思汗烤肉',
        address: '旭川市5条通7丁目',
        priceRange: '¥1,500-2,500',
        highlight: '旭川最受歡迎的成吉思汗烤肉名店，使用新鮮羊肩肉，完全沒有腥味。',
        tip: '店面不大，建議傍晚5點開門前就去排隊。',
      },
      {
        name: '旭川拉麵村',
        nameJa: '旭川ラーメン村',
        category: '拉麵主題園區',
        address: '旭川市永山11条4丁目',
        priceRange: '¥800-1,200',
        highlight: '集合8間旭川代表性拉麵店的主題園區，可以一次比較不同店家的風味，選擇困難症患者的救星。',
        tip: '位於郊區，建議開車前往或搭計程車。每家店都有提供迷你碗（ミニ），可以多吃幾家。',
      },
    ],
  },
  {
    id: 'sapporo',
    area: '札幌',
    areaEn: 'Sapporo',
    icon: '🦀',
    description:
      '北海道首府是美食天堂，從海鮮市場到深夜聖代，從味噌拉麵到湯咖哩，應有盡有。薄野地區更有超過5,000間餐廳與居酒屋，是滑雪後覓食的最佳戰場。',
    specialties: [
      {
        name: '札幌味噌拉麵',
        nameJa: '札幌味噌ラーメン',
        description:
          '札幌拉麵以味噌湯底聞名，濃厚的味噌湯頭加上奶油和玉米是經典搭配，冬天喝上一口暖入心底。發祥店「味之三平」奠定了札幌味噌拉麵的地位。',
        mustTry: true,
      },
      {
        name: '湯咖哩',
        nameJa: 'スープカレー',
        description:
          '札幌獨創的料理，不同於一般濃稠日式咖哩，湯咖哩以清爽的湯底加入多種辛香料，搭配大塊蔬菜和雞腿，辣度可自選。用雞骨長時間熬煮的湯底，香料層次豐富且後勁十足。',
        mustTry: true,
      },
      {
        name: '海鮮丼・螃蟹',
        nameJa: '海鮮丼・カニ',
        description:
          '北海道的螃蟹（帝王蟹、松葉蟹、毛蟹）是冬季最大的美食亮點。二條市場和場外市場都能品嚐到新鮮現剖的海鮮丼，鮭魚卵、海膽、甜蝦鋪滿碗，視覺與味覺的雙重盛宴。',
        mustTry: true,
      },
      {
        name: '成吉思汗烤肉',
        nameJa: 'ジンギスカン',
        description:
          '札幌的成吉思汗烤肉與旭川風格略有不同，薄野一帶有許多名店，使用凸面圓形鐵盤，羊肉油脂滴落加熱蔬菜，搭配啤酒是道民的日常。',
        mustTry: true,
      },
      {
        name: '飯後聖代（シメパフェ）',
        nameJa: 'シメパフェ',
        description:
          '札幌獨有的「飯後聖代」文化——喝完酒、吃完飯後，再來一份華麗的聖代作為一天的完美收尾。薄野地區有多間深夜營業的聖代專門店，是札幌夜生活最甜蜜的句點。',
        mustTry: false,
      },
    ],
    recommendedShops: [
      {
        name: 'GARAKU',
        nameJa: 'GARAKU',
        category: '湯咖哩',
        address: '札幌市中央區南3条西2丁目',
        priceRange: '¥1,200-1,800',
        highlight: '札幌最人氣的湯咖哩名店，湯底使用21種辛香料調配，濃郁又有層次，招牌「軟骨雞腿」入口即化。',
        tip: '位於狸小路附近，午餐和晚餐都要排隊，建議平日下午2點後的空檔時段前往。',
      },
      {
        name: '拉麵共和國',
        nameJa: 'ラーメン共和国',
        category: '拉麵主題園區',
        address: '札幌市中央區北5条西2丁目（札幌ESTA 10F）',
        priceRange: '¥800-1,200',
        highlight: '位於札幌車站旁的拉麵主題區，集合北海道各地代表拉麵店，一次可以吃到味噌、醬油、鹽味等不同風格。',
        tip: '就在JR札幌站旁邊，滑完雪回到市區直接去吃超方便。',
      },
      {
        name: '達摩 成吉思汗烤肉',
        nameJa: 'だるま',
        category: '成吉思汗烤肉',
        address: '札幌市中央區南5条西4丁目（薄野）',
        priceRange: '¥1,500-3,000',
        highlight: '薄野地區最具代表性的成吉思汗烤肉老店，創業超過60年，只提供新鮮羊肉，肉質鮮嫩多汁。',
        tip: '本店店面非常小只有約10席，建議去4.4店或6.6店較容易入座。營業到凌晨3點，適合深夜覓食。',
      },
      {
        name: '二條市場',
        nameJa: '二条市場',
        category: '海鮮市場',
        address: '札幌市中央區南3条東1丁目',
        priceRange: '¥1,500-5,000',
        highlight: '擁有超過100年歷史的海鮮市場，可以品嚐到新鮮的海鮮丼、烤螃蟹、鮭魚卵丼。市場內的「大磯」和「海鮮処 魚屋の台所」都是人氣名店。',
        tip: '早上7點開始營業，建議一大早去吃海鮮早餐，新鮮度最高且不用排隊。',
      },
      {
        name: '聖代、珈琲、酒 佐藤',
        nameJa: 'パフェ、珈琲、酒、佐藤',
        category: '飯後聖代',
        address: '札幌市中央區南2条西1丁目',
        priceRange: '¥1,200-1,800',
        highlight: '札幌シメパフェ文化的代表名店，使用北海道當季水果與食材製作精緻聖代，搭配咖啡或日本酒享用。',
        tip: '營業到凌晨12點，建議晚上9點後前往最有氛圍。可能需要排隊20-30分鐘。',
      },
    ],
  },
  {
    id: 'niseko',
    area: '新雪谷（二世古）',
    areaEn: 'Niseko',
    icon: '🍕',
    description:
      '新雪谷是北海道最國際化的滑雪度假區，Hirafu 比羅夫地區匯聚了來自世界各地的餐廳，從日式居酒屋到義大利餐廳、從印度咖哩到精緻法餐，選擇極為多元。價位偏高但品質不俗。',
    specialties: [
      {
        name: '國際多元料理',
        nameJa: '多国籍料理',
        description:
          '新雪谷的 Hirafu 區聚集了澳洲、法國、義大利、印度、泰國等各國料理餐廳，反映了這個國際滑雪勝地的多元文化。許多餐廳由外國主廚經營，使用北海道在地食材烹調家鄉菜。',
        mustTry: false,
      },
      {
        name: '居酒屋與串燒',
        nameJa: '居酒屋・焼き鳥',
        description:
          '雖然國際餐廳選擇豐富，但千萬別錯過新雪谷的日式居酒屋。滑完雪後在溫暖的居酒屋裡喝杯生啤、吃幾串烤雞肉串，是最道地的日本 après-ski 體驗。',
        mustTry: true,
      },
      {
        name: '拉麵與深夜食堂',
        nameJa: 'ラーメン・深夜食堂',
        description:
          '比羅夫主街上有幾間深夜營業的拉麵店，是酒後暖胃的最佳去處。寒夜裡的一碗熱拉麵，是滑雪客的共同回憶。',
        mustTry: false,
      },
    ],
    recommendedShops: [
      {
        name: 'Niseko Pizza',
        nameJa: 'ニセコピザ',
        category: '披薩',
        address: 'Hirafu 比羅夫地區',
        priceRange: '¥1,500-2,500',
        highlight: '使用石窯烘烤的手工披薩，搭配北海道起司，是新雪谷最受歡迎的餐廳之一。',
        tip: '晚餐時段常客滿，建議提前預約或下午茶時段前往。',
      },
      {
        name: 'Bang Bang',
        nameJa: 'Bang Bang',
        category: '居酒屋・串燒',
        address: 'Hirafu 比羅夫 Momiji 坂',
        priceRange: '¥2,000-4,000',
        highlight: '熱鬧的居酒屋風格餐廳，提供各式串燒、炸物和日式小菜，氣氛活潑適合一群朋友聚餐。',
        tip: '位於比羅夫主要坡道上，滑完雪步行即可到達。',
      },
      {
        name: 'Rakuichi Soba',
        nameJa: '楽一',
        category: '手打蕎麥麵',
        address: 'Hirafu 比羅夫地區',
        priceRange: '¥1,000-1,800',
        highlight: '使用北海道產蕎麥粉手工製作的蕎麥麵，搭配天婦羅套餐是經典選擇，店內氣氛雅致。',
        tip: '午餐限定營業，蕎麥麵賣完就收，建議早點去。',
      },
    ],
  },
  {
    id: 'otaru',
    area: '小樽',
    areaEn: 'Otaru',
    icon: '🍣',
    description:
      '小樽以壽司和海鮮聞名，「壽司屋通」上林立的壽司名店使用小樽港直送的新鮮漁獲。此外，小樽的甜點和玻璃工藝也不容錯過。',
    specialties: [
      {
        name: '壽司',
        nameJa: '寿司',
        description:
          '小樽曾是北海道最大的港口，擁有源源不絕的新鮮漁獲。「壽司屋通」匯集了數十間壽司餐廳，從平價迴轉壽司到高級板前壽司應有盡有。冬季的鮪魚、牡丹蝦和鮭魚卵特別推薦。',
        mustTry: true,
      },
      {
        name: 'LeTAO 甜點',
        nameJa: 'ルタオ',
        description:
          '小樽代表性的甜點品牌，雙層起司蛋糕（Double Fromage）是必買伴手禮。本店還提供限定口味和現做甜點。',
        mustTry: false,
      },
      {
        name: '海鮮丼',
        nameJa: '海鮮丼',
        description:
          '小樽三角市場和堺町通上的海鮮餐廳提供豐盛的海鮮丼，新鮮度不輸札幌但價格更親民，份量也更實在。',
        mustTry: true,
      },
    ],
    recommendedShops: [
      {
        name: '政壽司 本店',
        nameJa: 'おたる政寿司 本店',
        category: '壽司',
        address: '小樽市花園1丁目',
        priceRange: '¥3,000-8,000',
        highlight: '小樽壽司屋通的代表名店，擁有超過80年歷史，使用小樽港當日直送的魚獲，特別推薦「おまかせ」（主廚推薦套餐）。',
        tip: '中午套餐較為划算（約 ¥3,000），晚餐建議預約。',
      },
      {
        name: '三角市場',
        nameJa: '三角市場',
        category: '海鮮市場',
        address: '小樽市稻穗3丁目（JR小樽站旁）',
        priceRange: '¥1,500-3,000',
        highlight: '就在小樽車站旁邊的小型海鮮市場，多間食堂提供新鮮海鮮丼和烤魚定食。',
        tip: '「滝波食堂」可以自選海鮮配料的「我的海鮮丼」很受歡迎。',
      },
    ],
  },
  {
    id: 'general',
    area: '便利商店補給站',
    areaEn: 'Convenience Store Tips',
    icon: '🏪',
    description:
      '北海道的便利商店是滑雪客的最佳後勤基地！特別是北海道在地品牌 Seicomart（セイコーマート），以高CP值和北海道限定商品著稱，在日本便利商店滿意度調查中常年排名第一。',
    specialties: [
      {
        name: 'Seicomart 熱食角',
        nameJa: 'ホットシェフ',
        description:
          'Seicomart 的「HOT CHEF」熱食角是店內現做現賣的招牌，包括現炸炸雞、熱騰騰的豬排丼、炒飯和各式飯糰。價格比其他便利商店便宜，份量卻更大，是滑雪前後最方便的補給。',
        mustTry: true,
      },
      {
        name: '北海道限定飲品',
        nameJa: '北海道限定ドリンク',
        description:
          'Seicomart 和其他便利商店販售多款北海道限定飲品：Guarana（瓜拿納）碳酸飲料口感類似可樂但更甜、北海道產牛奶、哈密瓜牛奶等。冬天還有各式熱飲罐裝咖啡和玉米濃湯。',
        mustTry: false,
      },
      {
        name: '飯糰與三明治',
        nameJa: 'おにぎり・サンドイッチ',
        description:
          '滑雪中場休息最方便的補給品。推薦鮭魚卵飯糰、明太子飯糰、北海道牛奶麵包等。帶在雪衣口袋裡隨時補充熱量。',
        mustTry: false,
      },
    ],
    recommendedShops: [
      {
        name: 'Seicomart（セイコーマート）',
        nameJa: 'セイコーマート',
        category: '便利商店',
        address: '北海道全域（超過1,000間門市）',
        priceRange: '¥100-800',
        highlight:
          '北海道在地便利商店之王，自有品牌商品使用北海道在地食材，價格比7-11和全家更便宜。必買：北海道牛奶冰淇淋、哈密瓜冰棒、HOT CHEF 現做飯糰。',
        tip: '限定款啤酒每年推出3次：4月「春之薫」、6月「夏之爽快」、10月「富良野 VINTAGE」，冬天去剛好能買到秋季限定款。',
      },
    ],
  },
];

// ============================================================
// 飲品指南
// ============================================================
export const drinkGuide = [
  {
    id: 'sapporo-beer',
    category: '啤酒',
    name: '札幌啤酒（Sapporo Beer）',
    nameJa: 'サッポロビール',
    icon: '🍺',
    description:
      '日本最古老的啤酒品牌之一，1877年創立於札幌。來到北海道一定要喝北海道限定的「SAPPORO CLASSIC」，只在北海道才買得到！',
    items: [
      {
        name: 'SAPPORO CLASSIC',
        nameJa: 'サッポロクラシック',
        type: '啤酒',
        description:
          '北海道限定販售的啤酒，使用100%北海道產麥芽釀造，口感清爽順口、麥芽香氣濃郁，比一般的 Sapporo 黑標更有層次。在北海道的餐廳、居酒屋和便利商店隨處可見。',
        price: '便利商店約 ¥230／餐廳約 ¥500-600',
        mustTry: true,
      },
      {
        name: 'Sapporo Black Label',
        nameJa: 'サッポロ黒ラベル',
        type: '啤酒',
        description:
          '札幌啤酒的經典款，全日本都買得到但在札幌喝特別有感覺。工廠直送的生啤酒新鮮度完全不同。',
        price: '便利商店約 ¥220',
        mustTry: false,
      },
    ],
    experience: {
      name: '札幌啤酒博物館',
      nameJa: 'サッポロビール博物館',
      address: '札幌市東區北7条東9丁目',
      description:
        '日本唯一的啤酒博物館，可以了解札幌啤酒的歷史，並在附設的啤酒花園品嚐新鮮直送的生啤搭配成吉思汗烤肉，是札幌經典的美食體驗。',
      price: '入館免費／付費導覽含試飲 ¥1,000',
      tip: '啤酒花園的「成吉思汗烤肉+啤酒暢飲」套餐約 ¥4,000-5,000，非常划算。建議事先上網預約。',
    },
  },
  {
    id: 'nikka-whisky',
    category: '威士忌',
    name: '余市 Nikka 威士忌',
    nameJa: 'ニッカウヰスキー余市蒸溜所',
    icon: '🥃',
    description:
      '日本威士忌之父竹鶴政孝於1934年在余市創立的蒸餾所，選擇余市是因為這裡的氣候與蘇格蘭相似。余市威士忌以泥煤煙燻風味和厚重酒體著稱，是日本威士忌的發源地。',
    items: [
      {
        name: '余市 Single Malt',
        nameJa: '余市シングルモルト',
        type: '單一麥芽威士忌',
        description:
          '使用傳統石炭直火蒸餾法（全日本唯一），賦予威士忌獨特的煙燻感與複雜度。在蒸餾所限定販售的版本，外面買不到。',
        price: '蒸餾所限定瓶裝約 ¥3,000-8,000',
        mustTry: true,
      },
      {
        name: 'Nikka From The Barrel',
        nameJa: 'フロム・ザ・バレル',
        type: '調和威士忌',
        description:
          '以高酒精濃度（51.4%）直接裝瓶，風味濃厚、CP值極高，常年被評為世界最佳調和威士忌之一。',
        price: '約 ¥2,500-3,500',
        mustTry: true,
      },
    ],
    experience: {
      name: 'Nikka 余市蒸餾所見學',
      nameJa: 'ニッカウヰスキー余市蒸溜所',
      address: '北海道余市町黑川町7-6',
      description:
        '免費參觀（需事先網路預約），每天 9:30-14:30 有日文導覽行程，約70分鐘。可以參觀蒸餾設備、儲酒倉庫，最後還有免費試飲。園區內的紅磚建築和庭園非常美麗，冬天覆雪後更有氣氛。',
      price: '入場免費／導覽免費（含試飲）',
      tip: '從札幌搭 JR 到余市站約1小時，可與小樽排成一日遊行程。導覽需事先上官網預約（日文），也可選擇自由參觀。限定酒款在園區內的商店才買得到，愛好者必朝聖。',
    },
  },
  {
    id: 'craft-beer',
    category: '精釀啤酒',
    name: '北海道精釀啤酒',
    nameJa: '北海道クラフトビール',
    icon: '🍻',
    description:
      '北海道的精釀啤酒近年蓬勃發展，各地都有特色在地啤酒廠。冷冽的氣候和優質的水源，造就了風味獨特的精釀啤酒。',
    items: [
      {
        name: '小樽啤酒',
        nameJa: '小樽ビール',
        type: '精釀啤酒',
        description:
          '以德國傳統釀造法製作，在小樽運河旁的啤酒館可以喝到最新鮮的現釀啤酒，搭配德國香腸和炸薯條。',
        price: '一杯約 ¥600-800',
        mustTry: false,
      },
      {
        name: 'North Island Beer',
        nameJa: 'ノースアイランドビール',
        type: '精釀啤酒',
        description:
          '札幌在地的精釀啤酒品牌，IPA 和 Stout 都很受歡迎，在札幌市區的酒吧和餐廳都能喝到。',
        price: '一杯約 ¥700-900',
        mustTry: false,
      },
      {
        name: 'Alpen Node Brewery（2026年新開幕）',
        nameJa: 'アルペンノード',
        type: '精釀啤酒',
        description:
          '2025年12月在新雪谷比羅夫開幕的全新精釀啤酒坊，2026年2月開始自釀啤酒生產，是比羅夫第一間在地精釀啤酒廠。',
        price: '預估一杯約 ¥800-1,200',
        mustTry: true,
      },
    ],
    experience: null,
  },
  {
    id: 'local-sake',
    category: '日本酒',
    name: '北海道地酒',
    nameJa: '北海道の地酒',
    icon: '🍶',
    description:
      '北海道的日本酒以口感清爽著稱，使用北海道產的酒米和純淨雪水釀造。近年北海道的酒藏在全國清酒競賽中屢獲佳績，實力不容小覷。',
    items: [
      {
        name: '男山 純米大吟釀',
        nameJa: '男山 純米大吟醸',
        type: '日本酒',
        description:
          '旭川的代表酒藏，使用大雪山系的伏流水釀造，連續多年獲得全國新酒鑑評會金賞。口感優雅細膩，帶有果香。',
        price: '300ml 約 ¥800-1,200',
        mustTry: true,
      },
      {
        name: '國稀',
        nameJa: '國稀',
        type: '日本酒',
        description:
          '位於增毛町、日本最北端的酒藏釀造，使用暑寒別岳的雪融水，口感清冽甘甜。',
        price: '300ml 約 ¥600-1,000',
        mustTry: false,
      },
      {
        name: '千歲鶴',
        nameJa: '千歳鶴',
        type: '日本酒',
        description:
          '札幌唯一的酒藏，位於市中心可以免費參觀，試飲各種限定酒款。',
        price: '300ml 約 ¥500-900',
        mustTry: false,
      },
    ],
    experience: {
      name: '男山酒造資料館',
      nameJa: '男山酒造り資料館',
      address: '旭川市永山2条7丁目',
      description: '免費參觀酒藏與歷史資料，可以試飲當季限定酒款。每年2月的「酒藏開放」活動可以品嚐新酒。',
      price: '入館免費',
      tip: '距離旭川拉麵村很近，可以安排在同一天。冬季限定的「生酒」只有在酒藏才喝得到。',
    },
  },
  {
    id: 'warm-drinks',
    category: '暖身飲品',
    name: '滑雪場暖身飲品',
    nameJa: 'スキー場のあったかドリンク',
    icon: '☕',
    description:
      '在零下十幾度的雪場裡，中場休息時來一杯暖呼呼的飲品是最幸福的時刻。日本滑雪場的休息小屋（ロッジ）通常提供多種暖身飲品。',
    items: [
      {
        name: '甘酒',
        nameJa: '甘酒',
        type: '傳統飲品',
        description:
          '日本傳統米麴發酵飲品，口感溫潤微甜，有「喝的點滴」之稱，能快速補充體力。大多數雪場的休息小屋都有供應，有些是免費提供給滑雪客。酒精含量極低（幾乎為零），小朋友也能喝。',
        price: '約 ¥200-400',
        mustTry: true,
      },
      {
        name: '熱巧克力',
        nameJa: 'ホットチョコレート',
        type: '西式飲品',
        description:
          '滑雪場休息小屋的人氣飲品，北海道產的牛奶讓熱巧克力的味道特別濃郁。在新雪谷等國際化雪場尤其受歡迎。',
        price: '約 ¥400-600',
        mustTry: false,
      },
      {
        name: '罐裝熱飲（自動販賣機）',
        nameJa: '缶のホットドリンク',
        type: '自販機飲品',
        description:
          '日本自動販賣機的冬季模式會加熱罐裝飲品，隨處可見。推薦「BOSS 咖啡」「午後の紅茶」或「玉米濃湯」，只要 ¥130 就能暖手又暖胃。',
        price: '¥130-160',
        mustTry: true,
      },
    ],
    experience: null,
  },
  {
    id: 'budget-tips',
    category: '省錢喝酒秘訣',
    name: '北海道省錢飲酒攻略',
    nameJa: '節約飲み方ガイド',
    icon: '💰',
    description: '在北海道想要暢快喝酒又不想傷荷包？以下是在地人的省錢秘訣。',
    items: [
      {
        name: '便利商店買酒',
        nameJa: 'コンビニ飲み',
        type: '省錢技巧',
        description:
          '在 Seicomart 或 7-11 買罐裝啤酒（約 ¥200-300）回旅館喝，價格只有居酒屋的一半。Seicomart 還有自有品牌的低價啤酒和 Highball。',
        price: '一罐 ¥150-300',
        mustTry: true,
      },
      {
        name: '居酒屋暢飲方案',
        nameJa: '飲み放題',
        type: '省錢技巧',
        description:
          '許多居酒屋提供「飲み放題」（暢飲方案），通常 90-120 分鐘內啤酒、沙瓦、日本酒無限暢飲，價格約 ¥1,500-2,000。搭配「食べ放題」（吃到飽）套餐更划算。',
        price: '¥1,500-2,000（暢飲）',
        mustTry: false,
      },
      {
        name: 'Happy Hour',
        nameJa: 'ハッピーアワー',
        type: '省錢技巧',
        description:
          '許多酒吧在下午3-6點有 Happy Hour 優惠，啤酒和雞尾酒半價或買一送一。滑完雪的時間剛好趕上！',
        price: '依店家而異',
        mustTry: false,
      },
    ],
    experience: null,
  },
];

// ============================================================
// Après-Ski 娛樂指南
// ============================================================
export const entertainmentGuide = [
  {
    id: 'sapporo-nightlife',
    area: '札幌',
    areaEn: 'Sapporo',
    icon: '🌃',
    title: '札幌夜生活與購物',
    description:
      '薄野（すすきの）是日本三大繁華街之一，與東京歌舞伎町、福岡中洲並列。超過5,000間餐廳、酒吧和居酒屋，治安良好，觀光客可以放心享受夜生活。',
    activities: [
      {
        name: '薄野商圈夜遊',
        nameJa: 'すすきの',
        type: '夜生活',
        description:
          '薄野入夜後才真正甦醒！霓虹燈閃爍的街道上居酒屋林立，從平價連鎖到高級料亭應有盡有。推薦路線：先吃成吉思汗烤肉或拉麵→居酒屋喝酒聊天→飯後聖代（シメパフェ）收尾，完美的一晚！',
        bestTime: '晚上 7 點～凌晨',
        budget: '¥3,000-8,000（含餐飲）',
      },
      {
        name: '狸小路商店街',
        nameJa: '狸小路商店街',
        type: '購物',
        description:
          '北海道最大的有頂商店街，全長約900公尺，藥妝店、伴手禮店、服飾店和餐廳一字排開。下雪天也不怕淋雪，是晚上逛街購物的好去處。「唐吉訶德」和各大藥妝店營業到深夜，買完再去吃宵夜剛好。',
        bestTime: '下午 5 點～晚上 11 點',
        budget: '依購物預算而定',
      },
      {
        name: '札幌電視塔夜景',
        nameJa: 'さっぽろテレビ塔',
        type: '觀光',
        description:
          '位於大通公園東端，展望台可俯瞰札幌市區夜景。冬天從展望台望下去，白雪覆蓋的大通公園搭配城市燈光非常浪漫。2月雪祭期間更能居高臨下欣賞雪雕燈光秀。',
        bestTime: '日落後～晚上 10 點',
        budget: '展望台門票 ¥1,000',
      },
      {
        name: '深夜拉麵巡禮',
        nameJa: '深夜ラーメン',
        type: '美食',
        description:
          '札幌有「拉麵不夜城」的美名，薄野一帶許多拉麵店營業到凌晨3-5點。喝完酒後來一碗味噌拉麵暖胃，是最道地的札幌體驗。推薦「すみれ」和「彩未」的味噌拉麵。',
        bestTime: '凌晨 12 點～3 點',
        budget: '¥800-1,200',
      },
    ],
  },
  {
    id: 'asahikawa-evening',
    area: '旭川',
    areaEn: 'Asahikawa',
    icon: '🏮',
    title: '旭川夜晚活動',
    description:
      '旭川的夜生活規模不比札幌，但「3-6街」地區有不少在地風味的居酒屋和拉麵店，氣氛更為溫馨道地。冬天還有層雲峽冰瀑祭等限定活動。',
    activities: [
      {
        name: '3-6街居酒屋巡禮',
        nameJa: 'さんろく街',
        type: '夜生活',
        description:
          '旭川的繁華街「3-6街」（さんろく街）聚集了數百間居酒屋和酒吧，規模是北海道第二。在地人推薦搭配旭川地酒「男山」，品嚐新鮮的海膽和螃蟹。比起札幌更有在地氛圍，觀光客較少。',
        bestTime: '晚上 6 點～11 點',
        budget: '¥2,000-5,000',
      },
      {
        name: '旭川冬祭',
        nameJa: '旭川冬まつり',
        type: '冬季活動',
        description:
          '每年2月初舉辦，2026年為2月6-11日。以巨大雪雕和冰雕聞名，還有冰上溜滑梯、雪地滑索等體驗活動。2026年以「寶可夢」為主題，有六尾和阿羅拉六尾的巨型雪雕，是旭川冬天最盛大的慶典。',
        bestTime: '2月 6-11 日（2026年）',
        budget: '免費入場',
      },
      {
        name: '層雲峽冰瀑祭',
        nameJa: '層雲峡氷瀑まつり',
        type: '冬季活動',
        description:
          '在層雲峽溫泉舉辦的冬季限定活動，將整個溪谷打造成夢幻的冰之世界。巨大的冰柱和冰瀑在夜間打上七彩燈光，如同走進冰雪奇緣的場景。看完冰瀑祭再泡層雲峽的溫泉，是冬季旭川的經典行程。',
        bestTime: '1月下旬～3月中旬',
        budget: '入場 ¥500',
      },
    ],
  },
  {
    id: 'niseko-apres',
    area: '新雪谷（二世古）',
    areaEn: 'Niseko',
    icon: '🎿',
    title: '新雪谷 Après-Ski 酒吧',
    description:
      '新雪谷的 Hirafu 比羅夫地區擁有北海道最活躍的 après-ski 場景，國際化的氛圍讓你彷彿置身歐洲滑雪度假村。從精緻調酒吧到嗨翻天的 DJ 夜店，選擇豐富。',
    activities: [
      {
        name: 'Bar Gyu+',
        nameJa: 'バー ギュウプラス',
        type: 'Après-Ski 酒吧',
        description:
          '比羅夫最具代表性的酒吧，以隱藏式冰箱門入口聞名（推開冰箱門才能進入！）。紅磚牆面搭配壁爐，氣氛溫暖舒適。提供精心調製的雞尾酒、威士忌和葡萄酒，是滑完雪後的第一站首選。',
        bestTime: '下午 4 點～深夜',
        budget: '一杯調酒約 ¥1,200-1,800',
      },
      {
        name: 'Magic Mountain',
        nameJa: 'マジックマウンテン',
        type: 'DJ 酒吧',
        description:
          '位於比羅夫 Momiji 坂主街上，結合精緻調酒和 DJ 現場音樂。氣氛從下午的 chill 到深夜的 party 逐漸升溫，是新雪谷夜生活的核心地標。',
        bestTime: '晚上 8 點～凌晨 2 點',
        budget: '一杯調酒約 ¥1,000-1,500',
      },
      {
        name: 'Tepache（2025年新開幕）',
        nameJa: 'テパチェ',
        type: '墨西哥餐酒館',
        description:
          '2025年12月12日新開幕的加州-墨西哥風格餐酒館，號稱擁有北海道最大的龍舌蘭酒（Agave Spirits）收藏。提供瑪格麗特、墨西哥捲餅和拉丁美洲料理，為新雪谷的夜生活注入新元素。',
        bestTime: '晚上 6 點～深夜',
        budget: '一杯約 ¥1,000-2,000',
      },
      {
        name: 'Alpen Node',
        nameJa: 'アルペンノード',
        type: '精釀啤酒吧',
        description:
          '2025年12月20日開幕的複合式空間，位於比羅夫歡迎中心旁邊。集餐廳、精釀啤酒吧、選物店和 DJ 表演於一體。2026年2月起開始供應自家釀造的精釀啤酒，是比羅夫第一間在地啤酒廠。',
        bestTime: '午餐後～深夜（全天候營業）',
        budget: '一杯精釀啤酒約 ¥800-1,200',
      },
      {
        name: '溫泉 Après-Ski',
        nameJa: '温泉アフタースキー',
        type: '溫泉',
        description:
          '新雪谷周邊有多處天然溫泉，滑完雪泡溫泉是最日式的 après-ski 體驗。推薦「雪秩父」（硫磺泉露天風呂）和「五色溫泉」（秘境溫泉），邊泡湯邊欣賞雪景，疲勞一掃而空。',
        bestTime: '下午 3 點～晚上 9 點',
        budget: '¥500-1,000',
      },
    ],
  },
  {
    id: 'otaru-night',
    area: '小樽',
    areaEn: 'Otaru',
    icon: '🕯️',
    title: '小樽運河夜間散步',
    description:
      '小樽運河的夜景是北海道最浪漫的風景之一。63盞煤氣燈在夜晚亮起溫暖的橘色光芒，倒映在運河水面上，搭配冬季限定的藍色 LED 燈飾，如夢似幻。',
    activities: [
      {
        name: '小樽運河夜間散步',
        nameJa: '小樽運河ナイトウォーク',
        type: '觀光散步',
        description:
          '日落後的「藍色時刻」（Blue Hour）是最佳觀賞時段，天空還帶著藍色光澤時，搭配運河的煤氣燈和倒影最為美麗。每年11月到隔年2月期間舉辦「小樽雪物語」活動，運河變身為「藍色運河」，10,000顆藍色 LED 燈點綴運河兩岸，點燈至晚上10:30。',
        bestTime: '日落後～晚上 10:30',
        budget: '免費',
      },
      {
        name: '小樽運河遊覽船（夜間航班）',
        nameJa: '小樽運河クルーズ（ナイトクルーズ）',
        type: '遊船體驗',
        description:
          '約40分鐘的遊覽船行程，從中央橋出發經小樽港、北運河到南運河淺草橋。夜間航班從水面上欣賞煤氣燈倒影，角度與岸上完全不同，冬季夜間班次非常搶手。',
        bestTime: '日落後班次（需預約）',
        budget: '約 ¥1,800-2,000',
      },
      {
        name: '小樽雪燈之路',
        nameJa: '小樽雪あかりの路',
        type: '冬季限定活動',
        description:
          '每年2月舉辦，在小樽運河和舊手宮線會場，數千支蠟燭被放置在雪堆上，散發溫暖柔和的燭光。沒有札幌雪祭的人潮，卻更有詩意和浪漫氛圍，是北海道冬季最美的活動之一。',
        bestTime: '2月中旬（約10天）',
        budget: '免費',
      },
      {
        name: '小樽壽司屋通晚餐',
        nameJa: '寿司屋通りディナー',
        type: '美食體驗',
        description:
          '散步前後可以到壽司屋通享用小樽的新鮮壽司大餐。冬季限定的鮪魚和牡丹蝦特別肥美。吃完壽司再到運河散步，是小樽的經典夜間行程。',
        bestTime: '晚上 5 點～9 點',
        budget: '¥3,000-8,000',
      },
    ],
  },
  {
    id: 'festivals',
    area: '北海道全域',
    areaEn: 'All Hokkaido',
    icon: '❄️',
    title: '冬季祭典與活動',
    description:
      '北海道的冬季祭典集中在1月下旬到2月中旬，如果行程能配合，絕對不要錯過！這些祭典是北海道冬天最精彩的文化體驗。',
    activities: [
      {
        name: '札幌雪祭',
        nameJa: 'さっぽろ雪まつり',
        type: '大型祭典',
        description:
          '每年2月初舉辦，在大通公園、薄野和TSUDOMU三個會場展出巨型雪雕和冰雕。大通公園會場有世界知名建築和動漫角色的巨大雪雕，薄野會場展示晶瑩剔透的冰雕，TSUDOMU會場提供雪上活動體驗。每年吸引約250萬人參加，是北海道最盛大的冬季活動。',
        bestTime: '2月上旬（約7天）',
        budget: '免費入場',
        location: '札幌大通公園・薄野・TSUDOMU',
      },
      {
        name: '旭川冬祭',
        nameJa: '旭川冬まつり',
        type: '大型祭典',
        description:
          '北海道第二大冬季祭典，以巨大雪雕、冰雕和各種雪上活動聞名。2026年以寶可夢為主題，2月6-11日在旭橋河畔和買物公園會場舉辦。有冰上溜滑梯、雪地滑索等免費體驗活動，比札幌雪祭人少，體驗更輕鬆。',
        bestTime: '2月 6-11 日（2026年）',
        budget: '免費入場',
        location: '旭川旭橋河畔・平和通買物公園',
      },
      {
        name: '小樽雪燈之路',
        nameJa: '小樽雪あかりの路',
        type: '浪漫祭典',
        description:
          '每年2月舉辦，在小樽運河和舊手宮線鐵道沿線，數以千計的蠟燭和雪燈籠營造出極致浪漫的冬夜氛圍。每位遊客都可以親手製作自己的雪燈籠，是最有參與感的冬季活動。',
        bestTime: '2月中旬',
        budget: '免費',
        location: '小樽運河・舊手宮線',
      },
      {
        name: '支笏湖冰濤祭',
        nameJa: '千歳・支笏湖氷濤まつり',
        type: '冰雕祭典',
        description:
          '利用支笏湖極度透明的湖水製成的冰雕，在自然光下呈現夢幻的「支笏湖藍」。夜間打上七彩燈光更是壯觀。從新千歲機場開車約40分鐘即可抵達。',
        bestTime: '1月下旬～2月中旬',
        budget: '入場 ¥500',
        location: '千歲市支笏湖溫泉',
      },
      {
        name: '層雲峽冰瀑祭',
        nameJa: '層雲峡氷瀑まつり',
        type: '冰雕祭典',
        description:
          '在層雲峽溫泉的石狩川河畔，以自然冰柱為基礎打造的冰之世界。巨大的冰瀑和冰雕在夜間燈光下閃耀，搭配不定期的花火（煙火）秀。看完冰瀑祭泡層雲峽溫泉是最經典的組合。',
        bestTime: '1月下旬～3月中旬',
        budget: '入場 ¥500',
        location: '上川町層雲峽溫泉',
      },
    ],
  },
];

// ============================================================
// 快速參考摘要
// ============================================================
export const quickTips = {
  title: '滑雪後生存指南：快速小提醒',
  images: [
    { url: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/apres-ramen/public', alt: '北海道拉麵' },
    { url: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/apres-sapporo-classic/public', alt: 'SAPPORO CLASSIC' },
    { url: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/apres-seicomart/public', alt: 'Seicomart HOT CHEF' },
    { url: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/apres-onsen/public', alt: '溫泉泡湯' },
    { url: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/apres-beer/public', alt: '北海道地酒' },
    { url: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/apres-festival/public', alt: '札幌雪祭' },
  ],
  tips: [
    {
      icon: '🍜',
      tip: '滑完雪又冷又餓？拉麵是你最好的朋友。旭川吃醬油、札幌吃味噌、函館吃鹽味。',
    },
    {
      icon: '🍺',
      tip: '到北海道一定要喝「SAPPORO CLASSIC」，便利商店就買得到，只有北海道才有賣！',
    },
    {
      icon: '🏪',
      tip: 'Seicomart 是北海道之光！HOT CHEF 熱食角的現做飯糰和炸雞，便宜又好吃，滑雪補給首選。',
    },
    {
      icon: '♨️',
      tip: '日本最道地的 après-ski 就是泡溫泉。新雪谷有雪秩父、札幌有定山溪、旭川有層雲峽，滑完雪泡湯超療癒。',
    },
    {
      icon: '🥃',
      tip: '余市 Nikka 威士忌蒸餾所免費參觀還有免費試飲，搭配小樽一日遊剛剛好。',
    },
    {
      icon: '🌙',
      tip: '札幌薄野的夜生活到凌晨都還很熱鬧，「シメパフェ」（收尾聖代）文化是札幌獨有的，一定要體驗！',
    },
    {
      icon: '💰',
      tip: '省錢喝酒法：便利商店買罐裝啤酒回旅館，或找有「飲み放題」的居酒屋，90分鐘暢飲約 ¥1,500。',
    },
    {
      icon: '📅',
      tip: '2月來北海道最精彩！札幌雪祭、旭川冬祭、小樽雪燈之路都在2月舉辦，建議提早訂機票和住宿。',
    },
  ],
};

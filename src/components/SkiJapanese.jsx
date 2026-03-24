import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Volume2, ChevronDown, ChevronUp } from 'lucide-react'

const categories = [
  {
    id: 'basic',
    title: '基本招呼 & 求助',
    emoji: '👋',
    words: [
      { jp: 'おはようございます', roma: 'Ohayou gozaimasu', zh: '早安', scene: '早上到雪場時' },
      { jp: 'ありがとうございます', roma: 'Arigatou gozaimasu', zh: '謝謝', scene: '教練教完、租借歸還時' },
      { jp: 'すみません', roma: 'Sumimasen', zh: '不好意思/對不起', scene: '問路、撞到人' },
      { jp: 'お願いします', roma: 'Onegai shimasu', zh: '拜託了/麻煩你', scene: '請教練開始教學時' },
      { jp: 'だいじょうぶです', roma: 'Daijoubu desu', zh: '沒關係/我沒事', scene: '跌倒被問是否OK時' },
      { jp: 'たすけてください', roma: 'Tasukete kudasai', zh: '請幫幫我', scene: '緊急求助' },
      { jp: 'トイレはどこですか？', roma: 'Toire wa doko desu ka?', zh: '廁所在哪裡？', scene: '' },
      { jp: 'お疲れ様でした', roma: 'Otsukaresama deshita', zh: '辛苦了', scene: '課程結束時跟教練說' },
    ],
  },
  {
    id: 'equipment',
    title: '裝備用語',
    emoji: '🎿',
    words: [
      { jp: 'スキー', roma: 'Sukii', zh: '雙板滑雪', scene: '' },
      { jp: 'スノーボード / スノボ', roma: 'Sunōbōdo / Sunobo', zh: '單板滑雪', scene: '口語常簡稱スノボ' },
      { jp: 'ブーツ', roma: 'Būtsu', zh: '雪靴', scene: '' },
      { jp: 'ビンディング', roma: 'Bindingu', zh: '固定器', scene: '連接靴子和板子的裝置' },
      { jp: 'ストック', roma: 'Sutokku', zh: '雪杖', scene: '雙板用' },
      { jp: 'ウェア', roma: 'Wea', zh: '雪衣', scene: 'スノーウェア 的簡稱' },
      { jp: 'ゴーグル', roma: 'Gōguru', zh: '護目鏡', scene: '' },
      { jp: 'グローブ', roma: 'Gurōbu', zh: '手套', scene: '' },
      { jp: 'ヘルメット', roma: 'Herumetto', zh: '安全帽', scene: '初學者強烈建議' },
      { jp: 'ニット帽', roma: 'Nitto bō', zh: '毛帽', scene: '' },
    ],
  },
  {
    id: 'resort',
    title: '雪場設施',
    emoji: '🏔️',
    words: [
      { jp: 'ゲレンデ', roma: 'Gerende', zh: '滑雪場/雪道區域', scene: '德語 Gelände 而來' },
      { jp: 'コース', roma: 'Kōsu', zh: '雪道', scene: '' },
      { jp: 'リフト', roma: 'Rifuto', zh: '吊椅纜車', scene: '最常見的上山方式' },
      { jp: 'ゴンドラ', roma: 'Gondora', zh: '箱型纜車', scene: '有車廂、可避風' },
      { jp: 'ロープウェー', roma: 'Rōpuwē', zh: '空中纜車', scene: '大型纜車' },
      { jp: 'レンタル', roma: 'Rentaru', zh: '租借', scene: '' },
      { jp: 'チケット売り場', roma: 'Chiketto uriba', zh: '售票處', scene: '' },
      { jp: 'レストハウス', roma: 'Resuto hausu', zh: '休息小屋/餐廳', scene: '' },
      { jp: '更衣室', roma: 'Koui shitsu', zh: '更衣室', scene: '' },
      { jp: 'ロッカー', roma: 'Rokkā', zh: '置物櫃', scene: '' },
      { jp: '初級 / 中級 / 上級', roma: 'Shokyū / Chūkyū / Jōkyū', zh: '初級 / 中級 / 高級', scene: '雪道難度標示' },
      { jp: '圧雪 / 非圧雪', roma: 'Assetsu / Hi-assetsu', zh: '壓雪 / 未壓雪', scene: '未壓雪 = 粉雪天堂' },
    ],
  },
  {
    id: 'technique',
    title: '技術動作（教練會說的）',
    emoji: '⛷️',
    words: [
      { jp: 'ボーゲン / プルーク', roma: 'Bōgen / Purūku', zh: '全制動（八字煞車）', scene: '★ 初學者第一個學的動作' },
      { jp: 'ハの字', roma: 'Ha no ji', zh: '八字形', scene: '板子擺成ハ的形狀' },
      { jp: 'パラレルターン', roma: 'Parareru tān', zh: '平行轉彎', scene: '★ 中級目標技術' },
      { jp: 'シュテムターン', roma: 'Shutemu tān', zh: '半制動轉彎', scene: '全制動→平行轉的過渡' },
      { jp: 'カービングターン', roma: 'Kābingu tān', zh: '刻滑轉彎', scene: '進階技術' },
      { jp: '重心', roma: 'Jūshin', zh: '重心', scene: '教練最常糾正的' },
      { jp: '膝を曲げて', roma: 'Hiza wo magete', zh: '膝蓋彎曲', scene: '★ 超常聽到！' },
      { jp: '前に体重をかけて', roma: 'Mae ni taijū wo kakete', zh: '重心往前', scene: '' },
      { jp: 'エッジ', roma: 'Ejji', zh: '板刃/鋼邊', scene: '控制方向的關鍵' },
      { jp: 'ターン', roma: 'Tān', zh: '轉彎', scene: '' },
      { jp: '止まって', roma: 'Tomatte', zh: '停下來！', scene: '★ 安全指令，必學！' },
      { jp: '行きますよ', roma: 'Ikimasu yo', zh: '要出發囉', scene: '教練準備出發時' },
      { jp: 'もう一回', roma: 'Mō ikkai', zh: '再一次', scene: '再做一次同樣的動作' },
      { jp: 'うまい！/ 上手！', roma: 'Umai! / Jōzu!', zh: '好棒！做得好！', scene: '教練誇獎你時 😊' },
    ],
  },
  {
    id: 'rental',
    title: '租借會話',
    emoji: '🏪',
    words: [
      { jp: 'スキーセットをお願いします', roma: 'Sukii setto wo onegai shimasu', zh: '我要租滑雪套裝', scene: '' },
      { jp: 'スノボセットをお願いします', roma: 'Sunobo setto wo onegai shimasu', zh: '我要租單板套裝', scene: '' },
      { jp: 'サイズは〇〇です', roma: 'Saizu wa ○○ desu', zh: '尺寸是〇〇', scene: '靴子尺寸用 cm' },
      { jp: '身長は〇〇センチです', roma: 'Shinchō wa ○○ senchi desu', zh: '身高是〇〇公分', scene: '選板子長度用' },
      { jp: 'きつい / ゆるい', roma: 'Kitsui / Yurui', zh: '太緊 / 太鬆', scene: '試穿雪靴時超實用' },
      { jp: 'ウェアも借りたいです', roma: 'Wea mo karitai desu', zh: '雪衣也想租', scene: '' },
      { jp: 'ヘルメットありますか？', roma: 'Herumetto arimasu ka?', zh: '有安全帽嗎？', scene: '' },
      { jp: '何時に返却ですか？', roma: 'Nanji ni henkyaku desu ka?', zh: '幾點要歸還？', scene: '' },
    ],
  },
  {
    id: 'lesson',
    title: '上課相關',
    emoji: '📚',
    words: [
      { jp: 'スクール / レッスン', roma: 'Sukūru / Ressun', zh: '滑雪學校 / 課程', scene: '' },
      { jp: 'グループレッスン', roma: 'Gurūpu ressun', zh: '團體課', scene: '' },
      { jp: 'プライベートレッスン', roma: 'Puraibēto ressun', zh: '私人課', scene: '' },
      { jp: '初心者です', roma: 'Shoshinsha desu', zh: '我是初學者', scene: '★ 必學！報名時一定會用到' },
      { jp: '初めてです', roma: 'Hajimete desu', zh: '第一次（滑雪）', scene: '' },
      { jp: 'もっとゆっくりお願いします', roma: 'Motto yukkuri onegai shimasu', zh: '請再慢一點', scene: '聽不懂教練說話時' },
      { jp: 'もう一度見せてください', roma: 'Mō ichido misete kudasai', zh: '請再示範一次', scene: '' },
      { jp: '怖いです', roma: 'Kowai desu', zh: '好害怕', scene: '站在陡坡上時 😅' },
      { jp: '楽しかったです！', roma: 'Tanoshikatta desu!', zh: '好開心！/很好玩！', scene: '課程結束跟教練說' },
    ],
  },
  {
    id: 'emergency',
    title: '緊急狀況',
    emoji: '🚨',
    words: [
      { jp: '痛い！', roma: 'Itai!', zh: '好痛！', scene: '' },
      { jp: '足が痛いです', roma: 'Ashi ga itai desu', zh: '腳很痛', scene: '' },
      { jp: '動けません', roma: 'Ugokemasen', zh: '動不了', scene: '受傷時' },
      { jp: 'パトロールを呼んでください', roma: 'Patorōru wo yonde kudasai', zh: '請叫巡邏隊', scene: '嚴重受傷時' },
      { jp: '救急車をお願いします', roma: 'Kyūkyūsha wo onegai shimasu', zh: '請叫救護車', scene: '緊急時' },
      { jp: 'リフト券をなくしました', roma: 'Rifuto ken wo nakushimashita', zh: '纜車票弄丟了', scene: '' },
    ],
  },
]

const studyTips = [
  { title: '學日文滑雪其實比你想的簡單', desc: '滑雪用語大量來自英文和德文的外來語（カタカナ），例如 ゴーグル=Goggles、ブーツ=Boots、パラレル=Parallel，懂英文的人看片假名就能猜到 70% 的意思！' },
  { title: '只需要 N4-N3 程度就夠用', desc: '不需要考到 N1！基本的日常會話能力（約 N4-N3 等級），加上這頁的滑雪專用單字，就足以跟日文教練溝通。重點是「聽得懂指令」比「說得流利」更重要。' },
  { title: '教練的指令其實很固定', desc: '滑雪教練反覆使用的句型就那幾個：「膝を曲げて」（彎膝蓋）、「重心を前に」（重心往前）、「もう一回」（再一次）、「上手！」（好棒）。背熟這些就能聽懂 80% 的指導。' },
  { title: '推薦學習方式', desc: '看日文滑雪 YouTube 頻道（搜尋「スキー 初心者 レッスン」），用耳朵習慣教練的說話節奏。搭配 Duolingo 或 NHK World 的免費日語課程打基礎，半年就有感覺。' },
]

function WordTable({ words }) {
  return (
    <div className="sj-table">
      <div className="sj-table-header">
        <span>日文</span>
        <span>發音</span>
        <span>中文</span>
        <span>使用場景</span>
      </div>
      {words.map((w, i) => (
        <div key={i} className="sj-table-row">
          <span className="sj-jp">{w.jp}</span>
          <span className="sj-roma">{w.roma}</span>
          <span className="sj-zh">{w.zh}</span>
          <span className="sj-scene">{w.scene}</span>
        </div>
      ))}
    </div>
  )
}

export default function SkiJapanese({ onBack }) {
  const [openCat, setOpenCat] = useState('basic')

  return (
    <div className="sj-page">
      <div className="container">
        <button className="sj-back" onClick={onBack}>
          <ArrowLeft size={18} /> 返回首頁
        </button>

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>滑雪日語教室</h2>
          <p>學會這些，就能跟日文教練溝通 — 一年省下數萬元教練費！</p>
        </motion.div>

        {/* 學習建議 */}
        <div className="sj-tips-grid">
          {studyTips.map((tip, i) => (
            <motion.div
              key={i}
              className="sj-tip glass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h4>{tip.title}</h4>
              <p>{tip.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 分類單字表 */}
        <div className="sj-categories">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className="sj-cat glass"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button
                className="sj-cat-header"
                onClick={() => setOpenCat(openCat === cat.id ? null : cat.id)}
              >
                <span className="sj-cat-emoji">{cat.emoji}</span>
                <h3>{cat.title}</h3>
                <span className="sj-cat-count">{cat.words.length} 個</span>
                {openCat === cat.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openCat === cat.id && <WordTable words={cat.words} />}
            </motion.div>
          ))}
        </div>

        {/* 省錢提醒 */}
        <motion.div
          className="sj-savings glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>💰 學日文 = 省教練費</h3>
          <div className="sj-savings-math">
            <div className="sj-savings-item">
              <span className="sj-savings-label">日文補習班一年</span>
              <span className="sj-savings-value">NT$18,000 ~ 34,000</span>
            </div>
            <div className="sj-savings-vs">VS</div>
            <div className="sj-savings-item">
              <span className="sj-savings-label">中文 vs 日文教練價差（每天）</span>
              <span className="sj-savings-value red">¥50,000+（約 NT$11,000）</span>
            </div>
          </div>
          <p className="sj-savings-result">請 3 天日文教練省下的錢 ≈ 一整年日文學費，還多會一個語言！</p>
        </motion.div>
      </div>
    </div>
  )
}

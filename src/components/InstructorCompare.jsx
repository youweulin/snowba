import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const instructors = [
  {
    id: 'jp',
    title: '日本人教練',
    flag: '🇯🇵',
    avatarBg: 'linear-gradient(135deg, #ef4444, #f97316)',
    avatarEmoji: '⛷️',
    photo: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/instructor-1/public',
    lang: '日語教學',
    certLabel: 'SAJ / SIA 認證',
    dailyFee: 28000,
    dailyLabel: '¥28,000',
    halfDayFee: 15000,
    halfDayLabel: '¥15,000',
    maxStudents: 4,
    perPersonCosts: [
      { n: 1, full: 28000, half: 15000 },
      { n: 2, full: 14000, half: 7500 },
      { n: 3, full: 12000, half: 6000 },
      { n: 4, full: 9000, half: 5000 },
    ],
    note: '團體課更便宜：¥5,000～8,000/人',
    tags: ['最便宜', '技術紮實', '語言障礙'],
  },
  {
    id: 'en',
    title: '外國人教練',
    flag: '🇬🇧',
    avatarBg: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    avatarEmoji: '🏂',
    photo: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/instructor-3/public',
    lang: '英語教學',
    certLabel: 'NZSIA / CSIA / BASI',
    dailyFee: 85000,
    dailyLabel: '¥85,000',
    halfDayFee: 42000,
    halfDayLabel: '¥42,000',
    maxStudents: 6,
    perPersonCosts: [
      { n: 1, full: 85000, half: 42000 },
      { n: 2, full: 42500, half: 21000 },
      { n: 3, full: 28300, half: 14000 },
      { n: 4, full: 21250, half: 10500 },
      { n: 5, full: 17000, half: 8400 },
      { n: 6, full: 14200, half: 7000 },
    ],
    note: 'HANAZONO NISS 6人同價不加收',
    tags: ['國際證照', '教學活潑', '6人分攤超值'],
  },
  {
    id: 'tw',
    title: '台灣人教練',
    photo: 'https://imagedelivery.net/8vYNanmJriUCfsABJIN-Gw/instructor-2/public',
    flag: '🇹🇼',
    avatarBg: 'linear-gradient(135deg, #22c55e, #14b8a6)',
    avatarEmoji: '🎿',
    lang: '中文教學',
    certLabel: 'SAJ / SIA / CASI',
    dailyFee: 80000,
    dailyLabel: '¥80,000',
    halfDayFee: 45000,
    halfDayLabel: '¥45,000',
    maxStudents: 6,
    perPersonCosts: [
      { n: 1, full: 80000, half: 45000 },
      { n: 2, full: 42500, half: 25000 },
      { n: 3, full: 30000, half: 18300 },
      { n: 4, full: 22500, half: 13750 },
      { n: 5, full: 19000, half: 12000 },
      { n: 6, full: 16700, half: 10800 },
    ],
    note: '每加1人約 +¥5,000，最多6人',
    tags: ['零語言障礙', '最搶手', '提前3個月預約'],
  },
]

function formatYen(n) {
  return '¥' + n.toLocaleString()
}

function InstructorCard({ inst, index }) {
  return (
    <motion.div
      className="ic-card glass"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Photo */}
      {inst.photo ? (
        <div className="ic-photo-wrap">
          <img src={inst.photo} alt={inst.title} className="ic-photo" loading="lazy" />
          <span className="ic-flag">{inst.flag}</span>
        </div>
      ) : (
        <div className="ic-avatar-wrap">
          <div className="ic-avatar" style={{ background: inst.avatarBg }}>
            <span className="ic-avatar-emoji">{inst.avatarEmoji}</span>
          </div>
          <span className="ic-flag">{inst.flag}</span>
        </div>
      )}

      {/* Header */}
      <h3 className="ic-name">{inst.title}</h3>
      <p className="ic-lang">{inst.lang}</p>
      <p className="ic-cert">{inst.certLabel}</p>

      {/* Price Banner */}
      <div className="ic-price-banner" style={{ background: inst.avatarBg }}>
        <div className="ic-price-col">
          <span className="ic-price-label">全天費用</span>
          <span className="ic-price-value">{inst.dailyLabel}</span>
          <span className="ic-price-sub">約 4-6 小時</span>
        </div>
        <div className="ic-price-divider" />
        <div className="ic-price-col">
          <span className="ic-price-label">半天費用</span>
          <span className="ic-price-value">{inst.halfDayLabel}</span>
          <span className="ic-price-sub">約 2-3 小時</span>
        </div>
      </div>

      {/* Per Person Breakdown */}
      <div className="ic-breakdown">
        <h4><Users size={14} /> 人均分攤價格（全天）</h4>
        <div className="ic-breakdown-grid">
          {inst.perPersonCosts.map(({ n, full }) => (
            <div key={n} className={`ic-pp ${n === inst.maxStudents ? 'ic-pp-best' : ''}`}>
              <span className="ic-pp-count">{n}人</span>
              <span className="ic-pp-price">{formatYen(full)}</span>
              <span className="ic-pp-per">/人</span>
              {n === inst.maxStudents && <span className="ic-pp-badge">最划算</span>}
            </div>
          ))}
        </div>
        <p className="ic-breakdown-note">{inst.note}</p>
      </div>

      {/* Tags */}
      <div className="ic-tags">
        {inst.tags.map((t) => (
          <span key={t} className="ic-tag">{t}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function InstructorCompare({ onSkiJapanese }) {
  return (
    <section id="instructor-compare">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>教練費用比較</h2>
          <p>一位教練一天多少錢？幾個人分攤最划算？</p>
        </motion.div>

        <div className="ic-grid">
          {instructors.map((inst, i) => (
            <InstructorCard key={inst.id} inst={inst} index={i} />
          ))}
        </div>

        <motion.div
          className="ic-summary glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4>💡 省錢結論</h4>
          <div className="ic-summary-grid">
            <div className="ic-summary-item">
              <span className="ic-summary-icon">🏆</span>
              <div>
                <strong>最便宜方案</strong>
                <p>日本人教練 4 人分攤 → 每人 ¥9,000/全天</p>
              </div>
            </div>
            <div className="ic-summary-item">
              <span className="ic-summary-icon">🥇</span>
              <div>
                <strong>最佳 CP 值</strong>
                <p>英文教練（NISS）6 人分攤 → 每人 ¥14,200/全天</p>
              </div>
            </div>
            <div className="ic-summary-item">
              <span className="ic-summary-icon">🇹🇼</span>
              <div>
                <strong>中文零障礙</strong>
                <p>台灣教練 6 人分攤 → 每人 ¥16,700/全天</p>
              </div>
            </div>
            <div className="ic-summary-item">
              <span className="ic-summary-icon">⚡</span>
              <div>
                <strong>重要提醒</strong>
                <p>以上僅為教練費，纜車票、裝備租借、保險皆需另計！</p>
              </div>
            </div>
            <div className="ic-summary-item">
              <span className="ic-summary-icon">📚</span>
              <div>
                <strong>終極省錢密技</strong>
                <p>滑雪用的日文其實不難，學一年就夠用了！補習班約 NT$18,000-34,000/年，而中文 vs 日文教練一天價差 ¥50,000，請三天日文教練省下的錢就把一整年日文學費賺回來了，還多會一個語言！</p>
                {onSkiJapanese && (
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '0.5rem' }} onClick={onSkiJapanese}>
                    📚 滑雪日語教室 →
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

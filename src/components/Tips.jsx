import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Clock, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import * as Icons from 'lucide-react'
import { tips, instructorGuide } from '../data/destinations'
import InstructorCompare from './InstructorCompare'

function TipCard({ tip, index }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = Icons[tip.icon] || Icons.Snowflake
  const hasPoints = tip.points && tip.points.length > 0

  const handleShare = async () => {
    const shareData = {
      title: `Snowba 滑雪吧攻略：${tip.title}`,
      text: tip.summary,
      url: window.location.href,
    }
    if (navigator.share) {
      try { await navigator.share(shareData) } catch {}
    } else {
      await navigator.clipboard.writeText(
        `${shareData.title}\n${shareData.text}\n${shareData.url}`
      )
      alert('已複製分享內容！')
    }
  }

  return (
    <motion.div
      className={`tip-card glass ${expanded ? 'tip-card-expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="tip-top">
        <div className="tip-icon">
          <Icon size={24} />
        </div>
        <span className="tip-category">{tip.category}</span>
        <button className="tip-share" onClick={handleShare} aria-label="分享">
          <Share2 size={16} />
        </button>
      </div>
      <h3>{tip.title}</h3>
      <p>{tip.summary}</p>

      <AnimatePresence>
        {expanded && hasPoints && (
          <motion.div
            className="tip-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="tip-detail-intro">{tip.content}</p>
            <div className="tip-points">
              {tip.points.map((pt, i) => (
                <div key={i} className="tip-point">
                  <div className="tip-point-header">
                    <CheckCircle size={14} />
                    <strong>{pt.title}</strong>
                  </div>
                  <p>{pt.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="tip-footer">
        <span className="tip-time">
          <Clock size={14} />
          {tip.readTime}
        </span>
        {hasPoints ? (
          <button className="tip-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? '收起' : '閱讀更多'}{' '}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        ) : (
          <button className="tip-more" onClick={() => setExpanded(!expanded)}>
            閱讀更多 <ArrowRight size={14} />
          </button>
        )}
      </div>
    </motion.div>
  )
}

function InstructorSection() {
  const guide = instructorGuide
  return (
    <motion.div
      className="instructor-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="section-header">
        <h2>{guide.title}</h2>
        <p>{guide.subtitle}</p>
      </div>

      <div className="instructor-grid">
        {guide.languages.map((lang) => (
          <div key={lang.id} className="instructor-card glass">
            <div className="instructor-header">
              <span className="instructor-flag">{lang.flag}</span>
              <h3>{lang.lang}</h3>
              <span className="instructor-price">{lang.priceRange}</span>
            </div>

            <div className="instructor-pros">
              <h4>優點</h4>
              {lang.pros.map((p) => (
                <div key={p} className="instructor-pro-item">
                  <CheckCircle size={13} /> <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="instructor-cons">
              <h4>缺點</h4>
              {lang.cons.map((c) => (
                <div key={c} className="instructor-con-item">
                  <span>・{c}</span>
                </div>
              ))}
            </div>

            <div className="instructor-info">
              <p><strong>適合對象：</strong>{lang.bestFor}</p>
              <p><strong>預約方式：</strong>{lang.booking}</p>
              <p className="instructor-note">{lang.notes}</p>
              {lang.schools && (
                <div className="instructor-schools">
                  <h4>推薦學校</h4>
                  {lang.schools.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="instructor-school-link">
                      <strong>{s.name}</strong>
                      <span>{s.areas}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 人數 vs 學習效率 */}
      {guide.groupSizeGuide && (
        <div className="gs-section">
          <h3 className="gs-title">教練帶幾個人最好？</h3>
          <p className="gs-subtitle">人數越少學越快，但費用越高 — 找到你的甜蜜點</p>
          <div className="gs-list">
            {guide.groupSizeGuide.map((g) => (
              <div key={g.size} className="gs-item glass">
                <div className="gs-item-left">
                  <span className="gs-emoji">{g.emoji}</span>
                  <div>
                    <strong className="gs-size">{g.size}</strong>
                    <span className="gs-rec" style={{ color: g.color }}>{g.recommendation}</span>
                  </div>
                </div>
                <div className="gs-bar-wrap">
                  <div className="gs-bar" style={{ width: `${g.efficiency}%`, background: g.color }} />
                  <span className="gs-bar-label">學習效率 {g.efficiency}%</span>
                </div>
                <div className="gs-detail">
                  <p className="gs-bestfor"><strong>適合：</strong>{g.bestFor}</p>
                  <p className="gs-desc">{g.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="instructor-tips glass">
        <h4>💡 請教練的實用建議</h4>
        <ul>
          {guide.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Tips({ onSkiJapanese, onSafety, onApresSki }) {
  return (
    <section id="tips">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>省錢滑雪攻略</h2>
          <p>實用技巧幫你用最少的預算享受最棒的雪季</p>
        </motion.div>
        <div className="tips-grid">
          {tips.map((tip, i) => (
            <TipCard key={tip.id} tip={tip} index={i} />
          ))}
        </div>

        {/* 更多指南入口 */}
        <motion.div
          className="guide-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="guide-links-grid">
            {onSafety && (
              <button className="guide-link-card glass" onClick={onSafety}>
                <span className="guide-link-emoji">🛡️</span>
                <h3>安全滑雪指南</h3>
                <p>安全守則、身體恢復伸展、溫泉推薦、滑雪保險</p>
              </button>
            )}
            {onApresSki && (
              <button className="guide-link-card glass" onClick={onApresSki}>
                <span className="guide-link-emoji">🍺</span>
                <h3>滑雪生活指南</h3>
                <p>北海道美食、地酒、Après-ski 娛樂、雪祭活動</p>
              </button>
            )}
            {onSkiJapanese && (
              <button className="guide-link-card glass" onClick={onSkiJapanese}>
                <span className="guide-link-emoji">📚</span>
                <h3>滑雪學習資源</h3>
                <p>滑雪日語教室 + 教學影片 + 實用學習連結</p>
              </button>
            )}
          </div>
        </motion.div>

        <InstructorCompare onSkiJapanese={onSkiJapanese} />
        <InstructorSection />
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Share2, Clock, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { tips } from '../data/destinations'

function TipCard({ tip, index }) {
  const Icon = Icons[tip.icon] || Icons.Snowflake

  const handleShare = async () => {
    const shareData = {
      title: `Snowba 滑雪吧攻略：${tip.title}`,
      text: tip.summary,
      url: window.location.href,
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {}
    } else {
      await navigator.clipboard.writeText(
        `${shareData.title}\n${shareData.text}\n${shareData.url}`
      )
      alert('已複製分享內容！')
    }
  }

  return (
    <motion.div
      className="tip-card glass"
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
      <div className="tip-footer">
        <span className="tip-time">
          <Clock size={14} />
          {tip.readTime}
        </span>
        <button className="tip-more">
          閱讀更多 <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  )
}

export default function Tips() {
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
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { MapPin, Star, Share2 } from 'lucide-react'
import { destinations } from '../data/destinations'

function DestinationCard({ d, index }) {
  const shareData = {
    title: `Snowba 滑雪吧推薦：${d.name}`,
    text: `${d.name} ${d.priceNote}只要${d.price}！${d.description}`,
    url: window.location.href,
  }

  const handleShare = async () => {
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
      className="dest-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="dest-img-wrap">
        <img src={d.image} alt={d.name} loading="lazy" />
        <span className="dest-country">{d.country}</span>
        <button className="dest-share" onClick={handleShare} aria-label="分享">
          <Share2 size={16} />
        </button>
      </div>
      <div className="dest-body">
        <div className="dest-header">
          <div>
            <h3>{d.name}</h3>
            <span className="dest-region">
              <MapPin size={14} />
              {d.region}
            </span>
          </div>
          <div className="dest-rating">
            <Star size={14} fill="currentColor" />
            {d.rating}
          </div>
        </div>
        <p className="dest-desc">{d.description}</p>
        <div className="dest-tags">
          {d.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="dest-footer">
          <div className="dest-price">
            <strong>{d.price}</strong>
            <span>{d.priceNote}</span>
          </div>
          <a href="#booking" className="btn btn-primary btn-sm">
            查看行程
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Destinations() {
  return (
    <section id="destinations">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>熱門經濟雪場</h2>
          <p>嚴選亞洲及全球高 CP 值滑雪目的地</p>
        </motion.div>
        <div className="dest-grid">
          {destinations.map((d, i) => (
            <DestinationCard key={d.id} d={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

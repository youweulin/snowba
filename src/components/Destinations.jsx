import { motion } from 'framer-motion'
import { MapPin, Star, Share2, Mountain, Navigation, Bus, BedDouble, Sparkles } from 'lucide-react'
import { destinations, areas } from '../data/destinations'

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
      transition={{ delay: index * 0.08 }}
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
        <div className="dest-meta">
          <span><Mountain size={13} /> {d.elevation}</span>
          <span><Navigation size={13} /> {d.courses} 條雪道</span>
        </div>
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

function AreaIntro({ area }) {
  return (
    <motion.div
      className="area-intro glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="area-overview">{area.description}</p>

      <div className="area-info-grid">
        <div className="area-info-item">
          <div className="area-info-icon">
            <Bus size={18} />
          </div>
          <div>
            <h4>交通規劃</h4>
            <p>{area.transport}</p>
          </div>
        </div>

        <div className="area-info-item">
          <div className="area-info-icon">
            <BedDouble size={18} />
          </div>
          <div>
            <h4>住宿建議</h4>
            <p>{area.accommodation}</p>
          </div>
        </div>
      </div>

      {area.highlights && area.highlights.length > 0 && (
        <div className="area-highlights">
          <Sparkles size={14} />
          <span className="area-highlights-label">周邊推薦：</span>
          {area.highlights.map((h) => (
            <span key={h} className="area-highlight-tag">{h}</span>
          ))}
        </div>
      )}
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
          <h2>北海道滑雪場總覽</h2>
          <p>從旭川到函館，精選北海道六大區域滑雪場</p>
        </motion.div>

        {areas.map((area) => {
          const areaResorts = destinations.filter((d) => d.area === area.id)
          return (
            <div key={area.id} className="area-section">
              <motion.div
                className="area-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="area-title">
                  <MapPin size={20} />
                  {area.name}
                  <span className="area-name-en">{area.nameEn}</span>
                  <span className="area-resort-count">{area.resortCount} 座雪場</span>
                </h3>
              </motion.div>

              <AreaIntro area={area} />

              <div className="dest-grid">
                {areaResorts.map((d, i) => (
                  <DestinationCard key={d.id} d={d} index={i} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Star, Share2, Mountain, Navigation, Bus, BedDouble, Sparkles,
  ExternalLink, Snowflake, Ticket, ShirtIcon, Globe, Calendar,
} from 'lucide-react'
import { destinations, areas } from '../data/destinations'

function DestinationCard({ d, index }) {
  const [expanded, setExpanded] = useState(false)

  const shareData = {
    title: `Snowba 滑雪吧推薦：${d.name}`,
    text: `${d.name} — ${d.description}`,
    url: window.location.href,
  }

  const handleShare = async () => {
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
      className="dest-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="dest-img-wrap">
        <img src={d.image} alt={d.name} loading="lazy" />
        <span className="dest-country">#{d.mapIndex}</span>
        {d.skiInOut && <span className="dest-skibadge">Ski-in/out</span>}
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
          <span><Calendar size={13} /> {d.season}</span>
        </div>
        <div className="dest-tags">
          {d.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* 摘要資訊 */}
        <div className="dest-info-row">
          <div className="dest-info-item">
            <Ticket size={13} />
            <span>{d.liftPass}</span>
          </div>
          {d.rental && (
            <div className="dest-info-item">
              <Snowflake size={13} />
              <span>租借：滑雪套裝 {d.rental.skiSet}</span>
            </div>
          )}
        </div>

        {/* 展開詳細 */}
        <button
          className="dest-expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '收起詳細' : '查看詳細資訊 ▾'}
        </button>

        {expanded && (
          <div className="dest-detail">
            {d.liftPassDetail && (
              <div className="dest-detail-section">
                <h4><Ticket size={14} /> 雪票詳細</h4>
                <p>{d.liftPassDetail}</p>
              </div>
            )}
            <div className="dest-detail-section">
              <h4><Bus size={14} /> 交通方式</h4>
              <p>{d.access}</p>
            </div>
            {d.skiInOutNote && (
              <div className="dest-detail-section">
                <h4><BedDouble size={14} /> Ski-in/Ski-out</h4>
                <p>{d.skiInOut ? '✅ ' : '❌ '}{d.skiInOutNote}</p>
              </div>
            )}
            {d.rental && (
              <div className="dest-detail-section">
                <h4><ShirtIcon size={14} /> 裝備租借</h4>
                <p>滑雪套裝：{d.rental.skiSet}</p>
                <p>單板套裝：{d.rental.snowboardSet}</p>
                <p>雪衣：{d.rental.wear}</p>
                {d.rental.notes && <p className="dest-detail-note">{d.rental.notes}</p>}
              </div>
            )}
            {d.snowfall && (
              <div className="dest-detail-section">
                <h4><Snowflake size={14} /> 降雪量</h4>
                <p>{d.snowfall}</p>
              </div>
            )}
            <div className="dest-detail-links">
              {d.officialUrl && (
                <a href={d.officialUrl} target="_blank" rel="noopener noreferrer">
                  <Globe size={13} /> 官方網站
                </a>
              )}
              {d.trailMapUrl && (
                <a href={d.trailMapUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={13} /> 雪道地圖
                </a>
              )}
              {d.rental?.url && (
                <a href={d.rental.url} target="_blank" rel="noopener noreferrer">
                  <ShirtIcon size={13} /> 租借價格
                </a>
              )}
            </div>
          </div>
        )}
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
          <div className="area-info-icon"><Bus size={18} /></div>
          <div>
            <h4>交通規劃</h4>
            <p>{area.transport}</p>
          </div>
        </div>
        <div className="area-info-item">
          <div className="area-info-icon"><BedDouble size={18} /></div>
          <div>
            <h4>住宿建議</h4>
            <p>{area.accommodation}</p>
          </div>
        </div>
      </div>
      {area.highlights?.length > 0 && (
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
          <p>24 處人氣滑雪場完整攻略 — 含官網、雪票、租借、交通、Ski-in/out</p>
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

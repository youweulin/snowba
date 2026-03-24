import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Wallet, BedDouble, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { itineraries } from '../data/destinations'

function ItineraryCard({ itin, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="itin-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* Header */}
      <div className="itin-header">
        <div>
          <span className="itin-badge" style={{ background: itin.badgeColor }}>{itin.badge}</span>
          <h3 className="itin-title">{itin.title}</h3>
          <p className="itin-subtitle">{itin.subtitle}</p>
        </div>
        <div className="itin-budget">
          <Wallet size={16} />
          <div>
            <strong>{itin.budget.total}</strong>
            <span>{itin.budget.breakdown}</span>
          </div>
        </div>
      </div>

      {/* Accommodation */}
      <div className="itin-accom">
        <h4><BedDouble size={15} /> 推薦住宿：{itin.accommodation.name}</h4>
        <span className="itin-accom-price">{itin.accommodation.price}</span>
        <ul className="itin-accom-highlights">
          {itin.accommodation.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        {itin.accommodation.url && (
          <a href={itin.accommodation.url} target="_blank" rel="noopener noreferrer" className="itin-accom-link">
            <ExternalLink size={12} /> 查看飯店
          </a>
        )}
        {itin.accommodation.alternatives?.length > 0 && (
          <div className="itin-alts">
            <span className="itin-alts-label">其他選擇：</span>
            {itin.accommodation.alternatives.map((alt, i) => (
              <span key={i} className="itin-alt-tag">
                {alt.name}（{alt.price}・{alt.note}）
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Day by Day */}
      <button className="itin-expand" onClick={() => setExpanded(!expanded)}>
        <Calendar size={15} />
        {expanded ? '收起每日行程' : '查看每日行程'}
        {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>

      {expanded && (
        <div className="itin-days">
          {itin.days.map((day) => (
            <div key={day.day} className="itin-day">
              <div className="itin-day-header">
                <span className="itin-day-badge">{day.day}</span>
                <strong>{day.title}</strong>
              </div>
              <ul className="itin-day-items">
                {day.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Itineraries() {
  return (
    <section id="itineraries">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>行程規劃範例</h2>
          <p>旭川 & 札幌出發，從極省到豪華，幫你安排好每一天</p>
        </motion.div>

        <div className="itin-grid">
          {itineraries.map((itin, i) => (
            <ItineraryCard key={itin.id} itin={itin} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

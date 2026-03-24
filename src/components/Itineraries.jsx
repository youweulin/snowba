import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Wallet, BedDouble, ChevronDown, ChevronUp, ExternalLink, CheckCircle, XCircle } from 'lucide-react'
import { itineraries, tripComparison } from '../data/destinations'

/* ========== Trip Comparison ========== */
function TripComparisonSection() {
  const tc = tripComparison
  return (
    <div className="tc-section">
      <div className="section-header">
        <h2>{tc.title}</h2>
        <p>{tc.subtitle}</p>
      </div>

      <div className="tc-season-note glass">{tc.seasonNote}</div>

      <div className="tc-seasons">
        <div className="tc-cheap">
          <h4>便宜時段</h4>
          {tc.cheapSeasons.map((s) => (
            <div key={s.period} className="tc-season-tag">
              <span className="tc-season-badge" style={{ background: s.color }}>{s.label}</span>
              <div>
                <strong>{s.period}</strong>
                <span>{s.note}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="tc-expensive">
          <h4>避開時段（最貴最擠）</h4>
          {tc.expensiveSeasons.map((s) => (
            <div key={s.period} className="tc-season-tag tc-season-warn">
              <strong>{s.period}</strong>
              <span>{s.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tc-grid">
        {tc.options.map((opt) => (
          <div key={opt.type} className="tc-card glass">
            <div className="tc-card-header" style={{ borderColor: opt.color }}>
              <span className="tc-emoji">{opt.emoji}</span>
              <h3>{opt.type}</h3>
              <div className="tc-total" style={{ color: opt.color }}>{opt.total}</div>
            </div>

            <div className="tc-items">
              {opt.items.map((item) => (
                <div key={item.label} className="tc-item">
                  <span className="tc-item-label">{item.label}</span>
                  <span className="tc-item-cost">{item.cost}</span>
                </div>
              ))}
            </div>

            <div className="tc-proscons">
              {opt.pros.map((p) => (
                <div key={p} className="tc-pro"><CheckCircle size={12} /> {p}</div>
              ))}
              {opt.cons.map((c) => (
                <div key={c} className="tc-con"><XCircle size={12} /> {c}</div>
              ))}
            </div>

            <div className="tc-platforms">
              <h4>推薦平台</h4>
              {opt.platforms.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="tc-platform-link">
                  <ExternalLink size={11} /> {p.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ========== Itinerary Card ========== */
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
            {itin.budget.note && <span className="itin-budget-warn">{itin.budget.note}</span>}
          </div>
        </div>
      </div>

      <div className="itin-accom">
        <h4><BedDouble size={15} /> 推薦住宿：{itin.accommodation.name}</h4>
        <span className="itin-accom-price">{itin.accommodation.price}</span>
        <ul className="itin-accom-highlights">
          {itin.accommodation.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className="itin-accom-links">
          {itin.accommodation.agodaUrl && (
            <a href={itin.accommodation.agodaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              Agoda 查房價
            </a>
          )}
          {itin.accommodation.url && (
            <a href={itin.accommodation.url} target="_blank" rel="noopener noreferrer" className="itin-accom-link">
              <ExternalLink size={12} /> 官網
            </a>
          )}
        </div>
        {itin.accommodation.alternatives?.length > 0 && (
          <div className="itin-alts">
            <span className="itin-alts-label">其他選擇：</span>
            {itin.accommodation.alternatives.map((alt, i) => (
              alt.agodaUrl ? (
                <a key={i} href={alt.agodaUrl} target="_blank" rel="noopener noreferrer" className="itin-alt-tag itin-alt-link">
                  {alt.name}（{alt.price}・{alt.note}）
                </a>
              ) : (
                <span key={i} className="itin-alt-tag">
                  {alt.name}（{alt.price}・{alt.note}）
                </span>
              )
            ))}
          </div>
        )}
      </div>

      {/* 一鍵預訂連結 */}
      {itin.bookingLinks && (
        <div className="itin-booking-links">
          {itin.bookingLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="itin-booking-btn"
              style={{ borderColor: link.color, color: link.color }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

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
          <p>旭川 & 札幌出發，含住宿推薦與每日行程</p>
        </motion.div>

        <div className="itin-grid">
          {itineraries.map((itin, i) => (
            <ItineraryCard key={itin.id} itin={itin} index={i} />
          ))}
        </div>

        <TripComparisonSection />
      </div>
    </section>
  )
}

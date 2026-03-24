import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronUp, UtensilsCrossed, Wine, Music, Lightbulb } from 'lucide-react'
import { foodGuide, drinkGuide, entertainmentGuide, quickTips } from '../data/apres-ski'

const tabs = [
  { id: 'food', label: '美食推薦', icon: UtensilsCrossed, data: foodGuide },
  { id: 'drink', label: '美酒指南', icon: Wine, data: drinkGuide },
  { id: 'fun', label: '娛樂活動', icon: Music, data: entertainmentGuide },
]

function GuideCard({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="ap-card glass">
      <button className="ap-card-header" onClick={() => setOpen(!open)}>
        <span className="ap-card-emoji">{item.emoji || '🍽️'}</span>
        <div>
          <h3>{item.name || item.area || item.title || item.category}</h3>
          {item.subtitle && <p>{item.subtitle}</p>}
          {item.description && <p>{item.description}</p>}
        </div>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="ap-card-body">
          {/* Handle items/recommendations */}
          {(item.items || item.recommendations || item.spots || item.shops || item.events || item.bars)?.map((rec, i) => (
            <div key={i} className="ap-rec">
              <div className="ap-rec-header">
                <strong>{rec.name || rec.title || rec.event}</strong>
                {rec.type && <span className="ap-rec-type">{rec.type}</span>}
                {rec.genre && <span className="ap-rec-type">{rec.genre}</span>}
                {rec.price && <span className="ap-rec-price">{rec.price}</span>}
                {rec.budget && <span className="ap-rec-price">{rec.budget}</span>}
              </div>
              {(rec.description || rec.detail || rec.highlight) && (
                <p>{rec.description || rec.detail || rec.highlight}</p>
              )}
              {rec.recommended && <p className="ap-rec-pick">推薦：{rec.recommended}</p>}
              {rec.must_try && <p className="ap-rec-pick">必吃：{rec.must_try}</p>}
              {rec.must_order && <p className="ap-rec-pick">必點：{rec.must_order}</p>}
              {rec.tip && <p className="ap-rec-tip">{rec.tip}</p>}
              {rec.tips && (
                <ul className="ap-rec-tips">
                  {rec.tips.map((t, j) => <li key={j}>{t}</li>)}
                </ul>
              )}
              {rec.date && <p className="ap-rec-date">📅 {rec.date}</p>}
              {rec.period && <p className="ap-rec-date">📅 {rec.period}</p>}
              {rec.location && <p className="ap-rec-loc">📍 {rec.location}</p>}
              {rec.address && <p className="ap-rec-loc">📍 {rec.address}</p>}
            </div>
          ))}
          {/* Handle drinks specifically */}
          {item.drinks?.map((rec, i) => (
            <div key={i} className="ap-rec">
              <div className="ap-rec-header">
                <strong>{rec.name}</strong>
                {rec.type && <span className="ap-rec-type">{rec.type}</span>}
                {rec.price && <span className="ap-rec-price">{rec.price}</span>}
              </div>
              {rec.description && <p>{rec.description}</p>}
              {rec.tip && <p className="ap-rec-tip">{rec.tip}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ApresSkiGuide({ onBack }) {
  const [activeTab, setActiveTab] = useState('food')
  const currentData = tabs.find(t => t.id === activeTab).data

  return (
    <div className="ap-page">
      <div className="container">
        <button className="sj-back" onClick={onBack}>
          <ArrowLeft size={18} /> 返回首頁
        </button>

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>滑雪生活指南</h2>
          <p>滑雪不只是運動 — 美食、美酒、娛樂，享受北海道的每一刻</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="sg-tabs">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                className={`sg-tab ${activeTab === tab.id ? 'sg-tab-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="ap-grid">
            {currentData.map((item, i) => (
              <GuideCard key={i} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Quick Tips */}
        {quickTips?.tips && (
          <motion.div
            className="sg-tips glass"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4>💡 {quickTips.title || '實用小提醒'}</h4>
            <ul>
              {quickTips.tips.map((tip, i) => (
                <li key={i}>{typeof tip === 'string' ? tip : tip.tip || tip.title}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  )
}

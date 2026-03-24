import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronUp, Shield, Heart, Droplets, FileCheck } from 'lucide-react'
import { safetyRules, bodyRecovery, onsenGuide, insuranceGuide } from '../data/safetyAndRecovery'

const tabs = [
  { id: 'safety', label: '安全守則', icon: Shield, data: safetyRules },
  { id: 'recovery', label: '身體恢復', icon: Heart, data: bodyRecovery },
  { id: 'onsen', label: '溫泉推薦', icon: Droplets, data: onsenGuide },
  { id: 'insurance', label: '滑雪保險', icon: FileCheck, data: insuranceGuide },
]

function SectionBlock({ section }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sg-block glass">
      <button className="sg-block-header" onClick={() => setOpen(!open)}>
        <div>
          <h3>{section.title || section.name || section.area}</h3>
          {section.description && <p>{section.description}</p>}
        </div>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="sg-block-body">
          {/* Handle items array */}
          {section.items?.map((item, i) => (
            <div key={i} className="sg-item">
              {item.rule && <span className="sg-item-num">{item.rule}</span>}
              {item.number && <span className="sg-item-num">{item.number}</span>}
              {item.step && <span className="sg-item-num">{item.step}</span>}
              <div>
                {(item.title || item.name || item.action) && (
                  <strong>{item.title || item.name || item.action}</strong>
                )}
                {(item.description || item.detail || item.content || item.desc) && (
                  <p>{item.description || item.detail || item.content || item.desc}</p>
                )}
                {item.prevention && <p className="sg-prevention">預防：{item.prevention}</p>}
                {item.cause && <p className="sg-cause">原因：{item.cause}</p>}
                {item.relief && <p className="sg-relief">舒緩：{item.relief}</p>}
                {item.price && <p className="sg-price">{item.price}</p>}
                {item.highlight && <p className="sg-highlight">{item.highlight}</p>}
                {item.features && (
                  <ul className="sg-features">
                    {item.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                )}
                {item.tips && (
                  <ul className="sg-features">
                    {item.tips.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                )}
                {item.onsenList && (
                  <div className="sg-onsen-list">
                    {item.onsenList.map((o, j) => (
                      <div key={j} className="sg-onsen-item">
                        <strong>{o.name}</strong>
                        {o.type && <span className="sg-onsen-type">{o.type}</span>}
                        {o.price && <span className="sg-onsen-price">{o.price}</span>}
                        {o.description && <p>{o.description}</p>}
                        {o.feature && <p>{o.feature}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Handle rules array */}
          {section.rules?.map((item, i) => (
            <div key={i} className="sg-item">
              {item.number && <span className="sg-item-num">{item.number}</span>}
              <div>
                <strong>{item.title || item.rule}</strong>
                <p>{item.description || item.detail}</p>
              </div>
            </div>
          ))}
          {/* Handle products/recommendations */}
          {section.products?.map((item, i) => (
            <div key={i} className="sg-item">
              <div>
                <strong>{item.name || item.company}</strong>
                {item.product && <span className="sg-tag">{item.product}</span>}
                <p>{item.description || item.detail || item.coverage}</p>
                {item.price && <p className="sg-price">{item.price}</p>}
                {item.features && (
                  <ul className="sg-features">
                    {item.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
          {/* Handle checklist */}
          {section.checklist?.map((item, i) => (
            <div key={i} className="sg-item">
              <div>
                <strong>{item.item || item.name}</strong>
                {item.priority && <span className={`sg-priority sg-priority-${item.priority}`}>{item.priority}</span>}
                <p>{item.description || item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SafetyGuide({ onBack }) {
  const [activeTab, setActiveTab] = useState('safety')
  const currentTab = tabs.find(t => t.id === activeTab)
  const data = currentTab.data

  return (
    <div className="sg-page">
      <div className="container">
        <button className="sj-back" onClick={onBack}>
          <ArrowLeft size={18} /> 返回首頁
        </button>

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>安全滑雪指南</h2>
          <p>安全守則、身體恢復、溫泉推薦、保險建議 — 滑得開心也要滑得安心</p>
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
          <div className="sg-content-header">
            <h2>{data.title}</h2>
            <p>{data.subtitle}</p>
          </div>

          <div className="sg-sections">
            {data.sections?.map((section, i) => (
              <SectionBlock key={i} section={section} />
            ))}
          </div>

          {/* Tips at bottom */}
          {data.tips && (
            <div className="sg-tips glass">
              <h4>💡 實用提醒</h4>
              <ul>
                {data.tips.map((tip, i) => (
                  <li key={i}>{typeof tip === 'string' ? tip : tip.tip || tip.title}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

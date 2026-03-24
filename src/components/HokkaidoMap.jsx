import { motion } from 'framer-motion'
import hokkaidoMapImg from '../assets/hokkaido-map.png'

export default function HokkaidoMap() {
  return (
    <section id="ski-map">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>北海道滑雪地圖</h2>
          <p>24 處人氣滑雪場，依最近機場分色標示</p>
        </motion.div>

        <motion.div
          className="map-container glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={hokkaidoMapImg}
            alt="北海道推薦滑雪場 24 處人氣滑雪場地圖"
            className="hokkaido-map-img"
          />

          <div className="map-legend">
            <div className="map-legend-items">
              <div className="map-legend-item">
                <span className="map-legend-dot" style={{ background: '#ef4444' }} />
                <span>新千歲空港出發</span>
                <span className="map-legend-count">17 座</span>
              </div>
              <div className="map-legend-item">
                <span className="map-legend-dot" style={{ background: '#3b82f6' }} />
                <span>旭川空港出發</span>
                <span className="map-legend-count">4 座</span>
              </div>
              <div className="map-legend-item">
                <span className="map-legend-dot" style={{ background: '#eab308' }} />
                <span>帶廣空港出發</span>
                <span className="map-legend-count">1 座</span>
              </div>
              <div className="map-legend-item">
                <span className="map-legend-dot" style={{ background: '#d946ef' }} />
                <span>函館空港出發</span>
                <span className="map-legend-count">2 座</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

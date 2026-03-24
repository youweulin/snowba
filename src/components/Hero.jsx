import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-badge glass">
            <Sparkles size={16} />
            2025-2026 雪季最新攻略
          </span>
          <h1>
            滑雪不用花大錢
            <br />
            <span className="hero-accent">聰明玩，省更多</span>
          </h1>
          <p className="hero-desc">
            我們幫你比較亞洲及全球最划算的滑雪目的地，從機票、住宿到雪票，
            一站搞定你的經濟滑雪行程。
          </p>
          <div className="hero-actions">
            <a href="#destinations" className="btn btn-primary btn-lg">
              探索熱門雪場
            </a>
            <a href="#tips" className="btn btn-outline btn-lg">
              省錢攻略
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>50+</strong>
              <span>精選雪場</span>
            </div>
            <div className="stat">
              <strong>3,000+</strong>
              <span>滑雪愛好者</span>
            </div>
            <div className="stat">
              <strong>40%</strong>
              <span>平均省下</span>
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#destinations"
          className="scroll-hint"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  )
}

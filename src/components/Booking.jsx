import { motion } from 'framer-motion'
import { Hotel, Map, ArrowRight, Shield, Clock, Headphones } from 'lucide-react'

export default function Booking() {
  return (
    <section id="booking">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>一站搞定你的滑雪行程</h2>
          <p>從住宿到完整行程，我們幫你找到最划算的方案</p>
        </motion.div>

        <div className="booking-cards">
          <motion.div
            className="booking-card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="booking-icon">
              <Hotel size={32} />
            </div>
            <h3>經濟住宿預訂</h3>
            <p>
              精選雪場周邊高 CP 值住宿，從背包客棧到溫馨民宿，
              每晚最低 NT$ 800 起。
            </p>
            <ul className="booking-features">
              <li>雪場接駁範圍內</li>
              <li>含早餐方案</li>
              <li>免費取消政策</li>
              <li>中文客服支援</li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg booking-btn">
              搜尋住宿 <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="booking-card glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="booking-icon accent">
              <Map size={32} />
            </div>
            <h3>滑雪行程套裝</h3>
            <p>
              機票 + 住宿 + 雪票一次打包，比分開訂省下 20-40%，
              還有專人協助規劃。
            </p>
            <ul className="booking-features">
              <li>機票+住宿+雪票</li>
              <li>機場接送服務</li>
              <li>裝備租借優惠</li>
              <li>滑雪教練預約</li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg booking-btn">
              瀏覽行程 <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="trust-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="trust-item">
            <Shield size={20} />
            <span>安全付款保障</span>
          </div>
          <div className="trust-item">
            <Clock size={20} />
            <span>24小時免費取消</span>
          </div>
          <div className="trust-item">
            <Headphones size={20} />
            <span>中文客服支援</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Hotel, Map, ArrowRight, Shield, Clock, Headphones, Star, ExternalLink } from 'lucide-react'

const recommendedHotels = [
  {
    area: '旭川',
    hotels: [
      { name: 'OMO7 旭川 by 星野集團', stars: 4, price: 'NT$2,400起', note: '★免費滑雪接駁5座雪場', features: ['免費接駁巴士', '主題房', '近車站'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=3692586' },
      { name: 'Dormy Inn 旭川', stars: 3.5, price: 'NT$1,700起', note: '免費宵夜拉麵+天然溫泉', features: ['天然溫泉', '免費宵夜拉麵', '免費冰棒'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=178235' },
      { name: 'JR Inn 旭川', stars: 3.5, price: 'NT$1,500起', note: '車站直結，CP值最高', features: ['車站直結', '大浴場', '早餐豐富'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=782763' },
      { name: 'Art Hotel 旭川', stars: 4, price: 'NT$1,800起', note: '空間寬敞，適合家庭', features: ['房間大', '停車場', '適合家庭'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=91697' },
    ],
  },
  {
    area: '札幌',
    hotels: [
      { name: 'JR Tower Hotel 日航札幌', stars: 5, price: 'NT$4,500起', note: '車站直結，評分9.2最高', features: ['車站直結', '高樓景觀', '溫泉SPA'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=65806' },
      { name: 'OMO3 札幌薄野（星野）', stars: 3.5, price: 'NT$1,800起', note: '滑雪巴士從飯店出發', features: ['滑雪巴士站', '薄野夜生活', '星野品質'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=35924992' },
      { name: 'Dormy Inn Premium 札幌', stars: 3.5, price: 'NT$2,000起', note: '天然溫泉+免費宵夜拉麵', features: ['天然溫泉', '免費宵夜拉麵', '薄野鬧區'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=161505' },
      { name: '札幌東急 REI', stars: 3.5, price: 'NT$2,200起', note: '薄野站1分，滑雪巴士站', features: ['地鐵1分', '滑雪巴士', '女性友善'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=3212' },
      { name: '京王廣場飯店札幌', stars: 4, price: 'NT$2,800起', note: '評分8.9，設施完善', features: ['游泳池', '多間餐廳', '寬敞客房'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=42890' },
      { name: 'GRIDS 札幌', stars: 2.5, price: 'NT$800起', note: '膠囊青旅，超值首選', features: ['超低價', '交誼廳', '近地鐵'], url: 'https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&hid=2119569' },
    ],
  },
]

function HotelCard({ hotel }) {
  return (
    <a
      href={hotel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bk-hotel"
    >
      <div className="bk-hotel-info">
        <div className="bk-hotel-top">
          <strong>{hotel.name}</strong>
          {hotel.price && <span className="bk-hotel-price">{hotel.price}</span>}
        </div>
        <div className="bk-hotel-stars">
          {Array.from({ length: Math.floor(hotel.stars) }).map((_, i) => (
            <Star key={i} size={10} fill="#fbbf24" color="#fbbf24" />
          ))}
          {hotel.stars % 1 > 0 && <Star size={10} fill="#fbbf24" color="#fbbf24" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        </div>
        <span className="bk-hotel-note">{hotel.note}</span>
        {hotel.features && (
          <div className="bk-hotel-features">
            {hotel.features.map((f) => (
              <span key={f} className="bk-hotel-feature">{f}</span>
            ))}
          </div>
        )}
      </div>
      <ExternalLink size={14} className="bk-hotel-ext" />
    </a>
  )
}

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
            <p>精選雪場周邊高 CP 值住宿，從背包客棧到溫馨民宿，每晚最低 NT$ 800 起。</p>
            <ul className="booking-features">
              <li>雪場接駁範圍內</li>
              <li>含早餐方案</li>
              <li>免費取消政策</li>
              <li>中文客服支援</li>
            </ul>
            <a href="https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&city=16997&currencyCode=TWD" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg booking-btn">
              搜尋札幌住宿 <ArrowRight size={18} />
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
            <p>機票 + 住宿 + 雪票一次打包，比分開訂省下 20-40%，還有專人協助規劃。</p>
            <ul className="booking-features">
              <li>機票+住宿+雪票</li>
              <li>機場接送服務</li>
              <li>裝備租借優惠</li>
              <li>滑雪教練預約</li>
            </ul>
            <a href="https://www.kkday.com/en-us/product/productlist?keyword=%E5%8C%97%E6%B5%B7%E9%81%93%E6%BB%91%E9%9B%AA&cid=14336" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg booking-btn">
              瀏覽行程 <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* 推薦飯店列表 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="bk-hotels-title">滑雪推薦住宿</h3>
          <p className="bk-hotels-subtitle">點擊直接查看 Agoda 即時房價</p>
          <div className="bk-hotels-grid">
            {recommendedHotels.map((group) => (
              <div key={group.area} className="bk-hotel-group glass">
                <h4 className="bk-hotel-area">{group.area}</h4>
                {group.hotels.map((h) => (
                  <HotelCard key={h.name} hotel={h} />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

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

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Star, Wifi, Coffee, ExternalLink, Loader2 } from 'lucide-react'

// 北海道各城市 Agoda cityId
const cities = [
  { id: 17021, name: '札幌', nameEn: 'Sapporo' },
  { id: 17958, name: '旭川', nameEn: 'Asahikawa' },
  { id: 14690, name: '小樽', nameEn: 'Otaru' },
  { id: 18041, name: '俱知安（新雪谷）', nameEn: 'Kutchan / Niseko' },
  { id: 18498, name: '富良野', nameEn: 'Furano' },
  { id: 15513, name: '函館', nameEn: 'Hakodate' },
  { id: 17470, name: '登別', nameEn: 'Noboribetsu' },
  { id: 18107, name: '帶廣', nameEn: 'Obihiro' },
]

function getDefaultDates() {
  const today = new Date()
  const checkIn = new Date(today)
  checkIn.setDate(today.getDate() + 30)
  const checkOut = new Date(checkIn)
  checkOut.setDate(checkIn.getDate() + 4)
  return {
    checkIn: checkIn.toISOString().split('T')[0],
    checkOut: checkOut.toISOString().split('T')[0],
  }
}

function HotelCard({ hotel }) {
  return (
    <motion.a
      href={hotel.landingURL}
      target="_blank"
      rel="noopener noreferrer"
      className="hs-hotel glass"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img
        src={hotel.imageURL}
        alt={hotel.hotelName}
        className="hs-hotel-img"
        loading="lazy"
      />
      <div className="hs-hotel-body">
        <div className="hs-hotel-header">
          <h4>{hotel.hotelName}</h4>
          <div className="hs-hotel-stars">
            {Array.from({ length: Math.floor(hotel.starRating) }).map((_, i) => (
              <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />
            ))}
          </div>
        </div>
        <div className="hs-hotel-meta">
          <span className="hs-hotel-score">{hotel.reviewScore?.toFixed(1)}</span>
          {hotel.freeWifi && <span className="hs-hotel-tag"><Wifi size={11} /> Free WiFi</span>}
          {hotel.includeBreakfast && <span className="hs-hotel-tag"><Coffee size={11} /> 含早餐</span>}
        </div>
        <div className="hs-hotel-price">
          {hotel.crossedOutRate > hotel.dailyRate && (
            <span className="hs-hotel-crossed">NT${Math.round(hotel.crossedOutRate).toLocaleString()}</span>
          )}
          <span className="hs-hotel-rate">NT${Math.round(hotel.dailyRate).toLocaleString()}</span>
          <span className="hs-hotel-per">/晚</span>
          {hotel.discountPercentage > 0 && (
            <span className="hs-hotel-discount">-{Math.round(hotel.discountPercentage)}%</span>
          )}
        </div>
        <span className="hs-hotel-cta">
          查看房型 <ExternalLink size={12} />
        </span>
      </div>
    </motion.a>
  )
}

export default function HotelSearch() {
  const defaults = getDefaultDates()
  const [cityId, setCityId] = useState(17021)
  const [checkIn, setCheckIn] = useState(defaults.checkIn)
  const [checkOut, setCheckOut] = useState(defaults.checkOut)
  const [adults, setAdults] = useState(2)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const res = await fetch('/api/agoda-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cityId,
          checkIn,
          checkOut,
          adults,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || '查詢失敗')
      }

      setResults(data.results || [])
    } catch (err) {
      setError(err.message || '無法連接伺服器，請稍後再試')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="hotel-search">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>住宿即時查價</h2>
          <p>選擇城市和日期，即時比較北海道飯店最低房價</p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          className="hs-form glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="hs-form-grid">
            <div className="hs-field">
              <label>城市</label>
              <select value={cityId} onChange={(e) => setCityId(Number(e.target.value))}>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}（{c.nameEn}）</option>
                ))}
              </select>
            </div>
            <div className="hs-field">
              <label>入住日期</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
            </div>
            <div className="hs-field">
              <label>退房日期</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
            </div>
            <div className="hs-field">
              <label>人數</label>
              <select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                {[1, 2, 3, 4].map(n => (
                  <option key={n} value={n}>{n} 人</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary hs-btn" onClick={handleSearch} disabled={loading}>
              {loading ? <Loader2 size={18} className="hs-spin" /> : <Search size={18} />}
              {loading ? '搜尋中...' : '查詢房價'}
            </button>
          </div>
        </motion.div>

        {/* Error */}
        {error && (
          <div className="hs-error glass">
            {error}
          </div>
        )}

        {/* Results */}
        {results && results.length > 0 && (
          <div className="hs-results">
            <p className="hs-results-count">找到 {results.length} 間飯店</p>
            <div className="hs-results-grid">
              {results.map((hotel) => (
                <HotelCard key={hotel.hotelId} hotel={hotel} />
              ))}
            </div>
            <p className="hs-powered">房價由 Agoda 提供 · 點擊查看完整房型與最新價格</p>
          </div>
        )}

        {results && results.length === 0 && (
          <div className="hs-empty glass">
            此日期無可用房間，請嘗試其他日期或城市
          </div>
        )}
      </div>
    </section>
  )
}

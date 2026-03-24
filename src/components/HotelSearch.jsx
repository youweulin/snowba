import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'

const cities = [
  { id: 'sapporo', name: '札幌', nameEn: 'Sapporo', agodaCity: 16997 },
  { id: 'asahikawa', name: '旭川', nameEn: 'Asahikawa', agodaCity: 16983 },
  { id: 'otaru', name: '小樽', nameEn: 'Otaru', agodaCity: 16993 },
  { id: 'niseko', name: '新雪谷', nameEn: 'Niseko', agodaCity: 18041 },
  { id: 'furano', name: '富良野', nameEn: 'Furano', agodaCity: 16986 },
  { id: 'hakodate', name: '函館', nameEn: 'Hakodate', agodaCity: 16987 },
  { id: 'noboribetsu', name: '登別', nameEn: 'Noboribetsu', agodaCity: 16994 },
  { id: 'toya', name: '洞爺湖', nameEn: 'Toya', agodaCity: 17001 },
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

export default function HotelSearch() {
  const defaults = getDefaultDates()
  const [selectedCity, setSelectedCity] = useState('sapporo')
  const [checkIn, setCheckIn] = useState(defaults.checkIn)
  const [checkOut, setCheckOut] = useState(defaults.checkOut)
  const [adults, setAdults] = useState(2)

  const city = cities.find(c => c.id === selectedCity)

  const agodaUrl = `https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&city=${city.agodaCity}&checkin=${checkIn}&checkout=${checkOut}&NumberofAdults=${adults}&Rooms=1&languageId=20&currencyCode=TWD`
  const bookingUrl = `https://www.booking.com/searchresults.zh-tw.html?aid=7966163&ss=${city.nameEn}&checkin=${checkIn}&checkout=${checkOut}&group_adults=${adults}&no_rooms=1`

  return (
    <section id="hotel-search">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>住宿查價</h2>
          <p>選擇城市和日期，直接比較北海道飯店最低房價</p>
        </motion.div>

        <motion.div
          className="hs-form glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="hs-form-grid">
            <div className="hs-field">
              <label>城市</label>
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
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
          </div>

          <div className="hs-btn-group">
            <a href={agodaUrl} target="_blank" rel="noopener noreferrer" className="hs-search-btn hs-agoda">
              <Search size={16} />
              Agoda 查房價
              <ExternalLink size={13} />
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="hs-search-btn hs-booking">
              <Search size={16} />
              Booking.com 查房價
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

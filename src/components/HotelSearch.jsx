import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'

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

export default function HotelSearch() {
  const defaults = getDefaultDates()
  const [cityId, setCityId] = useState(17021)
  const [checkIn, setCheckIn] = useState(defaults.checkIn)
  const [checkOut, setCheckOut] = useState(defaults.checkOut)
  const [adults, setAdults] = useState(2)

  const agodaUrl = `https://www.agoda.com/partners/partnersearch.aspx?pcs=1&cid=1913061&city=${cityId}&checkin=${checkIn}&checkout=${checkOut}&NumberofAdults=${adults}&Rooms=1&languageId=20&currencyCode=TWD`

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
            <a
              href={agodaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hs-btn"
            >
              <Search size={18} />
              查詢房價
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

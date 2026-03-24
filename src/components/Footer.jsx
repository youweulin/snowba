import { Snowflake } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <Snowflake size={24} />
              <span>Snowba 滑雪吧</span>
            </div>
            <p>一起去滑雪吧！用最少的預算，享受最棒的滑雪體驗。</p>
          </div>

          <div className="footer-col">
            <h4>快速連結</h4>
            <a href="#destinations">熱門雪場</a>
            <a href="#tips">省錢攻略</a>
            <a href="#booking">訂房訂行程</a>
          </div>

          <div className="footer-col">
            <h4>關於我們</h4>
            <a href="#">品牌故事</a>
            <a href="#">合作夥伴</a>
            <a href="#">聯絡我們</a>
          </div>

          <div className="footer-col">
            <h4>追蹤我們</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Line 官方帳號</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Snowba 滑雪吧. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

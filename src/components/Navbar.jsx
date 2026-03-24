import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Snowflake, Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar({ onSkiJapanese, onSafety, onApresSki }) {
  const [open, setOpen] = useState(false)
  const [guideOpen, setGuideOpen] = useState(false)
  const closeTimer = { current: null }

  const mainLinks = [
    { label: '熱門雪場', href: '#destinations' },
    { label: '省錢攻略', href: '#tips' },
    { label: '訂房訂行程', href: '#booking' },
  ]

  const guideLinks = [
    { label: '🛡️ 安全滑雪指南', action: onSafety },
    { label: '🍺 滑雪生活指南', action: onApresSki },
    { label: '📚 滑雪日語教室', action: onSkiJapanese },
  ]

  const handleGuideClick = (action) => {
    setGuideOpen(false)
    setOpen(false)
    if (action) action()
  }

  return (
    <nav className="navbar glass">
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={() => window.location.reload()}>
          <Snowflake size={24} />
          <span>Snowba 滑雪吧</span>
        </a>

        <div className="nav-links-desktop">
          {mainLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}

          {/* 指南下拉選單 */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => { clearTimeout(closeTimer.current); setGuideOpen(true) }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setGuideOpen(false), 250) }}
          >
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setGuideOpen(!guideOpen)}
            >
              更多指南 <ChevronDown size={14} />
            </button>
            {guideOpen && (
              <div className="nav-dropdown-menu glass">
                {guideLinks.map((g) => (
                  <button
                    key={g.label}
                    className="nav-dropdown-item"
                    onClick={() => handleGuideClick(g.action)}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#booking" className="btn btn-primary btn-sm">
            立即預訂
          </a>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {mainLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="nav-mobile-divider" />
            {guideLinks.map((g) => (
              <button
                key={g.label}
                className="nav-link nav-mobile-guide"
                onClick={() => handleGuideClick(g.action)}
              >
                {g.label}
              </button>
            ))}
            <a href="#booking" className="btn btn-primary" onClick={() => setOpen(false)}>
              立即預訂
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

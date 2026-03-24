import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Snowflake, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: '熱門雪場', href: '#destinations' },
    { label: '省錢攻略', href: '#tips' },
    { label: '訂房訂行程', href: '#booking' },
  ]

  return (
    <nav className="navbar glass">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <Snowflake size={24} />
          <span>Snowba 滑雪吧</span>
        </a>

        <div className="nav-links-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              立即預訂
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HokkaidoMap from './components/HokkaidoMap'
import Destinations from './components/Destinations'
import Itineraries from './components/Itineraries'
import Tips from './components/Tips'
import HotelSearch from './components/HotelSearch'
import Booking from './components/Booking'
import Footer from './components/Footer'
import SkiJapanese from './components/SkiJapanese'
import SafetyGuide from './components/SafetyGuide'
import ApresSkiGuide from './components/ApresSkiGuide'

function App() {
  const [page, setPage] = useState('home')
  const goHome = () => { setPage('home'); window.scrollTo(0, 0) }
  const goHomeAndScroll = (hash) => {
    if (page !== 'home') {
      setPage('home')
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }
  const nav = {
    page,
    goHomeAndScroll,
    onSkiJapanese: () => { setPage('ski-japanese'); window.scrollTo(0, 0) },
    onSafety: () => { setPage('safety'); window.scrollTo(0, 0) },
    onApresSki: () => { setPage('apres-ski'); window.scrollTo(0, 0) },
  }

  if (page === 'ski-japanese') {
    return (
      <>
        <Navbar {...nav} />
        <SkiJapanese onBack={goHome} />
        <Footer />
      </>
    )
  }

  if (page === 'safety') {
    return (
      <>
        <Navbar {...nav} />
        <SafetyGuide onBack={goHome} />
        <Footer />
      </>
    )
  }

  if (page === 'apres-ski') {
    return (
      <>
        <Navbar {...nav} />
        <ApresSkiGuide onBack={goHome} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar {...nav} />
      <Hero />
      <HokkaidoMap />
      <Destinations />
      <Itineraries />
      <Tips {...nav} />
      {/* <HotelSearch /> */}
      <Booking />
      <Footer />
    </>
  )
}

export default App

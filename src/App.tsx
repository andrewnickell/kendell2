import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import LawnCare from './pages/LawnCare'
import SeasonalCleanup from './pages/SeasonalCleanup'
import LandscapeDesign from './pages/LandscapeDesign'
import SnowRemoval from './pages/SnowRemoval'
import TreeServices from './pages/TreeServices'
import DumpTrailerRental from './pages/DumpTrailerRental'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/lawn-care" element={<LawnCare />} />
            <Route path="/services/seasonal-cleanup" element={<SeasonalCleanup />} />
            <Route path="/services/landscape-design" element={<LandscapeDesign />} />
            <Route path="/services/snow-removal" element={<SnowRemoval />} />
            <Route path="/services/tree-services" element={<TreeServices />} />
            <Route path="/services/dump-trailer-rental" element={<DumpTrailerRental />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Facebook } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-solid py-2' : 'nav-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="https://kendell-landscaping.com/images.squarespace-cdn.com/content/v1/613879197759b87d946180bc/9faa69c8-837c-46ab-b45c-1e7981da3dd0/logokendell26f7.png?format=1500w" alt="Kendell Landscaping Logo" className="h-16 md:h-20" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-white hover:text-green-200 transition-colors font-medium">Services</Link>
          <Link to="/about" className="text-white hover:text-green-200 transition-colors font-medium">About</Link>
          <Link to="/contact" className="btn btn-primary">Contact</Link>
          <a href="https://www.facebook.com/kendellprofessionalserviceslandscapingandlawncare/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-200 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-green-700">
          <nav className="flex flex-col items-center py-4">
            <Link to="/services" className="py-2 text-white hover:text-green-200 transition-colors">Services</Link>
            <Link to="/about" className="py-2 text-white hover:text-green-200 transition-colors">About</Link>
            <Link to="/contact" className="py-2 text-white hover:text-green-200 transition-colors btn btn-primary mt-2">Contact</Link>
            <a href="https://www.facebook.com/kendellprofessionalserviceslandscapingandlawncare/" target="_blank" rel="noopener noreferrer" className="py-2 text-white hover:text-green-200 transition-colors mt-2">
              <Facebook className="w-6 h-6" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
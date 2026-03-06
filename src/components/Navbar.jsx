import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { navLinks } from '../config/links'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }, [isDarkMode])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          🚀 MyApp
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                onClick={closeMenu}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Floating Dark Mode Button */}
        <button 
          className="dark-mode-btn" 
          onClick={toggleTheme}
          aria-label="Alternar Dark Mode"
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

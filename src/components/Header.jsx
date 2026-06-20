import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'About', path: '/about' },
    
  ]

  return (
    <header style={{ backgroundColor: '#f5f0e8' }} className="dark:bg-stone-900 border-b border-stone-200 dark:border-stone-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div style={{ backgroundColor: '#1a3a2a' }} className="w-9 h-9 rounded-full flex items-center justify-center">
            <span style={{ color: '#e8682a' }} className="text-sm font-bold">G</span>
          </div>
          <div>
            <div className="font-semibold text-base dark:text-white" style={{ color: '#1a1a1a' }}>GuestLens</div>
            <div className="text-xs dark:text-stone-400" style={{ color: '#8a7a6a' }}>TRISHUL ECO-HOMESTAYS</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-colors dark:text-stone-200"
              style={{
                color: location.pathname === link.path ? '#1a1a1a' : '#6a5a4a',
                backgroundColor: location.pathname === link.path ? '#e8e0d4' : 'transparent',
                padding: '6px 14px',
                borderRadius: '20px'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 rounded-full border transition-colors dark:text-white dark:border-stone-500"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
          >
            Sign in
          </Link>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors dark:border-stone-600 dark:text-white"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-stone-600"
            style={{ borderColor: '#1a1a1a' }}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-xl dark:text-white">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="text-sm font-medium dark:text-stone-200" style={{ color: '#1a1a1a' }} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="text-sm font-medium dark:text-stone-200" style={{ color: '#1a1a1a' }} onClick={() => setMenuOpen(false)}>Sign in</Link>
        </div>
      )}
    </header>
  )
}

export default Header
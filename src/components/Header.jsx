import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'About', path: '/about' },
  ]

  return (
    <header style={{ backgroundColor: '#f5f0e8' }} className="border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div style={{ backgroundColor: '#1a3a2a' }} className="w-9 h-9 rounded-full flex items-center justify-center">
            <span style={{ color: '#e8682a' }} className="text-sm font-bold">G</span>
          </div>
          <div>
            <div className="font-semibold text-base" style={{ color: '#1a1a1a' }}>GuestLens</div>
            <div className="text-xs" style={{ color: '#8a7a6a' }}>TRISHUL ECO-HOMESTAYS</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-colors"
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
            className="text-sm font-medium px-4 py-2 rounded-full border transition-colors"
            style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
          >
            Sign in
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="text-sm font-medium" style={{ color: '#1a1a1a' }} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="text-sm font-medium" style={{ color: '#1a1a1a' }} onClick={() => setMenuOpen(false)}>Sign in</Link>
        </div>
      )}
    </header>
  )
}

export default Header
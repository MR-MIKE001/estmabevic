import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrolled } from '@/hooks/useScrolled'
import { LOGO_B64 } from '@/assets/images'
import { NAV_ITEMS } from '@/utils/constants'

export default function Navbar() {
  const scrolled = useScrolled(48)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 shadow-[0_2px_40px_rgba(0,0,0,0.5)] backdrop-blur-md'
            : 'py-5 bg-transparent'
        }`}
        style={{ background: scrolled ? 'rgba(13,10,46,0.97)' : 'transparent' }}
      >
        {/* Gold top accent line */}
        <div className="gold-top-bar" />

        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Estmabevic Nigeria Limited — Home" className="flex-shrink-0">
            <img src={LOGO_B64} alt="Estmabevic Nigeria Limited"
              className="h-12 w-auto" width={120} height={48} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(n => (
              <Link key={n.path} to={n.path}
                className={`nav-link ${pathname === n.path ? 'active' : ''}`}
                aria-current={pathname === n.path ? 'page' : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-gold text-xs">
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(true)}
            className="md:hidden text-white p-2.5 rounded hover:bg-white/10 transition-colors"
            aria-label="Open navigation menu" aria-expanded={open}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        role="dialog" aria-modal="true" aria-label="Navigation menu"
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(13,10,46,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="gold-top-bar" />
        <button onClick={() => setOpen(false)}
          className="absolute top-5 right-6 text-white/60 hover:text-yellow-400 transition-colors"
          aria-label="Close menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img src={LOGO_B64} alt="Estmabevic Nigeria Limited" className="h-20 mb-12" />
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map(n => (
            <Link key={n.path} to={n.path} onClick={() => setOpen(false)}
              className={`text-2xl font-semibold transition-colors ${
                pathname === n.path ? 'text-yellow-400' : 'text-white/50 hover:text-yellow-400'
              }`}
              style={{ fontFamily: '"Cinzel", Georgia, serif', letterSpacing: '0.1em' }}
              aria-current={pathname === n.path ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-12 text-xs">
          <span>Get a Quote</span>
        </Link>
      </div>
    </>
  )
}

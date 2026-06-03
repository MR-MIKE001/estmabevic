import { Link } from 'react-router-dom'
import { CONSTRUCTION_B64 } from '@/assets/images'
import { STATS } from '@/utils/constants'

export default function Hero() {
  return (
    <section className="relative mb-60 min-h-screen flex items-center overflow-hidden noise"
      aria-label="Hero — Estmabevic Nigeria Limited">

      {/* BG image */}
      <div className="absolute inset-0">
        <img src={CONSTRUCTION_B64} alt="Estmabevic construction site"
          className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(105deg,rgba(13,10,46,.96) 0%,rgba(21,14,69,.88) 40%,rgba(13,10,46,.7) 70%,rgba(13,10,46,.45) 100%)' }} />
      </div>

      {/* Gold top bar */}
      <div className="gold-top-bar" />

      {/* Decorative vertical line */}
      <div className="absolute left-16 top-0 bottom-0 w-px hidden xl:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,.3) 30%, rgba(212,160,23,.15) 70%, transparent)' }} />

      {/* Decorative rings */}
      <div className="absolute right-[-15%] top-[10%] w-[600px] h-[600px] rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(212,160,23,.07)', animation: 'float 8s ease-in-out infinite' }} />
      <div className="absolute right-[-8%] top-[18%] w-[380px] h-[380px] rounded-full border pointer-events-none"
        style={{ borderColor: 'rgba(212,160,23,.05)' }} />

      {/* Content */}
      <div className="relative z-10 container py-36">
        <div className="max-w-3xl">
          {/* Est. badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2"
            style={{ background: 'rgba(212,160,23,.1)', border: '1px solid rgba(212,160,23,.3)' }}>
            <span className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#D4A017', boxShadow: '0 0 6px #D4A017' }} />
            <span className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: '"Cinzel", Georgia, serif', color: '#D4A017' }}>
              Est. October 2013 · Nigeria
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-semibold text-white leading-[1.0] mb-7 tracking-tight"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            }}
          >
             Solutions<br />
            <em className="text-gold not-italic">That Grow</em><br />
            Businesses.
          </h1>

          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-xl"
            style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
            Estmabevic Nigeria Limited delivers excellence in construction and hospitality
            management — from foundations to five-star experiences across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link to="/services" className="btn-gold">
              <span>Our Services</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-outline-gold">
              Get a Free Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-10 border-t border-white/10">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="stat-num">{s.n}</div>
                <div className="text-white/40 text-xs mt-1 tracking-wider uppercase"
                  style={{ fontFamily: '"Cinzel", Georgia, serif' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 inset-x-0 w-full" viewBox="0 0 1440 90"
        preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90L60 72C120 54 240 18 360 13.5C480 9 600 22.5 720 27C840 31.5 960 27 1080 24.8C1200 22.5 1320 22.5 1380 22.5L1440 22.5V90H0Z"
          fill="var(--cream-50)" />
      </svg>
    </section>
  )
}

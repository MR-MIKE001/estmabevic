import { Link } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'
import { PHONE1_RAW, PHONE1 } from '@/utils/constants'

export default function CTABanner() {
  return (
    <section className="section-sm relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#B8860B 0%,#D4A017 35%,#F0CC50 65%,#D4A017 100%)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.15) 0%,transparent 70%)' }} />

      <div className="container relative z-10 text-center py-8">
        <Reveal>
          <h2
            className="font-semibold leading-tight mb-4"
            style={{
              fontFamily: '"Cormorant Garamond",serif',
              color: '#0D0A2E',
              fontSize: 'clamp(2.5rem,5vw,3.75rem)',
            }}
          >
            Ready to Build Something<br />
            <em style={{ fontStyle: 'italic' }}>Extraordinary?</em>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto"
            style={{ fontFamily: '"Outfit",sans-serif', color: '#150E45' }}>
            Talk to our team today. Get a free consultation, site assessment, and
            transparent project quote at no cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-dark">
              Get a Free Quote
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href={`tel:${PHONE1_RAW}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm transition-all hover:bg-black/10"
              style={{
                background: 'rgba(13,10,46,.12)',
                color: '#0D0A2E',
                border: '1px solid rgba(13,10,46,.25)',
                fontFamily: '"Cinzel",serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
              }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE1}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import Reveal from '@/components/ui/Reveal'

/* ── SWAD product cards ────────────────────────────────── */
const PRODUCTS = [
  {
    name: 'HotelGo',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    tagline: 'Hotel PMS',
    desc: 'Complete Hotel Property Management System for effective, end-to-end hotel business operations and guest management.',
    accent: '#D4A017',
  },
  {
    name: 'SWAD Cloud',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    tagline: 'Cloud & Marketplace',
    desc: 'Secure cloud hosting infrastructure and a comprehensive digital tools marketplace for modern business operations.',
    accent: '#D4A017',
  },
  {
    name: 'Aria Messenger',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    tagline: 'Marketing Automation',
    desc: 'Automate and execute powerful multi-channel marketing campaigns that reach your customers wherever they are.',
    accent: '#D4A017',
  },
  {
    name: 'NetCaller',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    tagline: 'Cloud Communications',
    desc: 'Advanced cloud communication system that unifies voice, messaging, and collaboration tools for modern teams.',
    accent: '#D4A017',
  },
  {
    name: 'Custom Dev',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
    tagline: 'Bespoke Solutions',
    desc: 'Fully tailored digital solutions designed and built to match your specific business processes and requirements.',
    accent: '#D4A017',
  },
]

/* ── Marquee strip items (duplicate for infinite scroll) ── */
const MARQUEE = [...PRODUCTS, ...PRODUCTS]

export default function SWADPartnership() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#040B1A 0%,#0D0A2E 55%,#150E45 100%)' }}
      aria-labelledby="swad-heading"
    >
      {/* Gold top accent */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg,transparent,#D4A017 30%,#F0CC50 60%,transparent)' }} />

      {/* Mesh glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 50%,rgba(212,160,23,0.07) 0%,transparent 65%)' }} />

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage:'radial-gradient(circle,rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize:'28px 28px' }} />

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="container pt-20 pb-14">
          <Reveal className="text-center">
            {/* Official badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8"
              style={{ background:'rgba(212,160,23,0.1)', border:'1px solid rgba(212,160,23,0.35)' }}>
              <span className="w-2 h-2 rounded-full"
                style={{ background:'#D4A017', boxShadow:'0 0 8px #D4A017' }} />
              <span className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily:'"Cinzel",Georgia,serif', color:'#D4A017' }}>
                Official Regional Channel Partner
              </span>
              <span className="w-2 h-2 rounded-full"
                style={{ background:'#D4A017', boxShadow:'0 0 8px #D4A017' }} />
            </div>

            <h2
              id="swad-heading"
              className="font-semibold text-white mb-5"
              style={{ fontFamily:'"Cormorant Garamond",Georgia,serif', fontSize:'clamp(2.5rem,5vw,4rem)', lineHeight:1.08 }}
            >
              Trusted{' '}
              <span style={{
                background:'linear-gradient(135deg,#D4A017,#F0CC50 50%,#D4A017)',
                backgroundSize:'200% auto',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
                animation:'shimmer 3s linear infinite',
              }}>
                Partnerships
              </span>
            </h2>

            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-4"
              style={{ fontFamily:'"Outfit",system-ui,sans-serif' }}>
              Official Regional Channel Partner of{' '}
              <a
                href="https://www.swaddigitalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-colors"
                style={{ color:'#D4A017', textDecoration:'underline', textDecorationColor:'rgba(212,160,23,0.4)' }}
              >
                SWAD Digital Solutions Ltd.
              </a>
            </p>
            <p className="text-white/45 max-w-xl mx-auto"
              style={{ fontFamily:'"Outfit",system-ui,sans-serif', fontSize:'0.9375rem', lineHeight:1.75 }}>
              Authorized to represent and implement world-class software solutions
              tailored to modernize your business operations across the region.
            </p>
          </Reveal>
        </div>

        {/* ── Product cards grid ── */}
        <div className="container pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) as 0|1|2|3}>
                <article
                  className="group h-full flex flex-col p-7 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(212,160,23,0.15)',
                    borderRadius:'3px',
                  }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background:'rgba(212,160,23,0.1)', border:'1px solid rgba(212,160,23,0.25)' }}>
                    {p.icon}
                  </div>

                  {/* Tagline */}
                  <span className="text-xs tracking-[0.15em] uppercase mb-2 block"
                    style={{ fontFamily:'"Cinzel",Georgia,serif', color:'rgba(212,160,23,0.7)', fontSize:'0.625rem' }}>
                    {p.tagline}
                  </span>

                  {/* Name */}
                  <h3 className="text-white font-semibold text-lg mb-3"
                    style={{ fontFamily:'"Cormorant Garamond",Georgia,serif' }}>
                    {p.name}
                  </h3>

                  {/* Gold rule */}
                  <div className="w-6 h-px mb-4 flex-shrink-0"
                    style={{ background:'linear-gradient(90deg,#D4A017,transparent)' }} />

                  {/* Description */}
                  <p className="text-white/45 text-sm leading-relaxed flex-1"
                    style={{ fontFamily:'"Outfit",system-ui,sans-serif' }}>
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Infinite marquee strip ── */}
        <div className="relative overflow-hidden py-5 mb-2"
          style={{ background:'rgba(212,160,23,0.05)', borderTop:'1px solid rgba(212,160,23,0.12)', borderBottom:'1px solid rgba(212,160,23,0.12)' }}>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{ background:'linear-gradient(to right,#040B1A,transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{ background:'linear-gradient(to left,#040B1A,transparent)' }} />

          <div className="flex gap-10 items-center"
            style={{ animation:'marqueeScroll 28s linear infinite', width:'max-content' }}>
            {MARQUEE.map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex items-center gap-3 flex-shrink-0">
                <div className="w-7 h-7 flex items-center justify-center opacity-70"
                  style={{ border:'1px solid rgba(212,160,23,0.3)' }}>
                  {p.icon}
                </div>
                <span className="text-sm font-semibold whitespace-nowrap"
                  style={{ fontFamily:'"Cinzel",Georgia,serif', color:'rgba(212,160,23,0.65)', letterSpacing:'0.08em' }}>
                  {p.name}
                </span>
                <span className="text-white/15 text-xl" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA row ── */}
        <div className="container py-14">
          <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-8 p-10"
            style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(212,160,23,0.2)' }}>
            <div>
              <p className="text-xs tracking-[0.18em] uppercase mb-2"
                style={{ fontFamily:'"Cinzel",Georgia,serif', color:'#D4A017' }}>
                Powered by SWAD Digital Solutions
              </p>
              <p className="text-white font-semibold text-xl"
                style={{ fontFamily:'"Cormorant Garamond",Georgia,serif' }}>
                Ready to modernize your business with world-class software?
              </p>
            </div>
            <a
              href="https://wa.me/2348066673312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 font-semibold transition-all duration-250 hover:scale-105"
              style={{
                background:'linear-gradient(135deg,#25D366,#128C7E)',
                color:'#fff',
                fontFamily:'"Cinzel",Georgia,serif',
                fontSize:'0.75rem',
                letterSpacing:'0.1em',
                textTransform:'uppercase',
                borderRadius:'2px',
                boxShadow:'0 6px 24px rgba(37,211,102,0.3)',
                textDecoration:'none',
              }}
              aria-label="Talk to us about SWAD Solutions on WhatsApp"
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Talk to Us About SWAD Solutions
            </a>
          </Reveal>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="h-px w-full"
        style={{ background:'linear-gradient(90deg,transparent,#D4A017 30%,#F0CC50 60%,transparent)' }} />

      {/* Marquee keyframe injected via style tag */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

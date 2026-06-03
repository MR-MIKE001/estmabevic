import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const SECTORS = [
  { icon:'🏨', label:'Hotels & Resorts',          count:'50+ Properties'   },
  { icon:'🎓', label:'Schools & Universities',     count:'30+ Institutions' },
  { icon:'🏥', label:'Hospitals & Clinics',        count:'20+ Facilities'   },
  { icon:'🏛️', label:'Parastatals & Govt',         count:'15+ Agencies'     },
  { icon:'🏢', label:'Corporate Offices',          count:'100+ Offices'     },
  { icon:'🏠', label:'Residential',               count:'300+ Homes'       },
]

export default function ClientsSection() {
  return (
    <section className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#0D0A2E,#150E45)' }}
      aria-labelledby="clients-h">

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%,rgba(212,160,23,.07) 0%,transparent 60%)' }} />

      <div className="container relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="Who We Serve"
            title="Trusted Across"
            highlight="Every Sector"
            sub="From boutique hotels to government institutions, Estmabevic has earned the trust of clients who demand the highest standards."
            light center
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {SECTORS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="text-center p-5 transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,160,23,.15)' }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-white font-semibold text-sm mb-1"
                  style={{ fontFamily: '"Outfit",sans-serif' }}>{s.label}</div>
                <div className="text-xs" style={{ color: '#D4A017', fontFamily: '"Cinzel",serif', letterSpacing: '0.08em' }}>
                  {s.count}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonial */}
        <Reveal delay={2}>
          <div className="mt-20 p-10 text-center"
            style={{ background: 'rgba(212,160,23,.06)', border: '1px solid rgba(212,160,23,.2)' }}>
            <div className="text-5xl mb-6"
              style={{ fontFamily: '"Cormorant Garamond",serif', color: '#D4A017' }}>&ldquo;</div>
            <blockquote className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-6"
              style={{ fontFamily: '"Cormorant Garamond",serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem,2vw,1.35rem)' }}>
              Estmabevic delivered our hotel renovation on time and within budget.
              The quality of workmanship exceeded our expectations and the team was
              professional throughout. We have used them for three subsequent projects.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center text-xl"
                style={{ background: 'rgba(212,160,23,.15)', border: '1px solid rgba(212,160,23,.3)' }}>
                🏨
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm" style={{ fontFamily: '"Outfit",sans-serif' }}>
                  Hotel General Manager
                </p>
                <p className="text-xs" style={{ color: '#D4A017', fontFamily: '"Cinzel",serif', letterSpacing: '0.1em' }}>
                  5-Star Property, Calabar
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

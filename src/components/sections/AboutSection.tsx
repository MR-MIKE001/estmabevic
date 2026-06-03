import { Link } from 'react-router-dom'
import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { CONSTRUCTION_B64 } from '@/assets/images'

const VALUES = [
  { title: 'Integrity',  body: 'We build trust through transparency, honest pricing, and delivering exactly what we promise.' },
  { title: 'Excellence', body: 'Every project bears the Estmabevic hallmark of quality — no compromises on materials or craftsmanship.' },
  { title: 'Innovation', body: 'Proven construction methods combined with modern techniques to deliver buildings that last.' },
  { title: 'Community',  body: 'Rooted in Nigerian soil — we prioritise local talent and give back to the communities where we build.' },
]

export default function AboutSection() {
  return (
    <section className="section relative overflow-hidden noise"
      style={{ background: 'linear-gradient(160deg,#0D0A2E,#1E1460)' }}
      aria-labelledby="about-h">

      {/* Glow */}
      <div className="absolute right-[-20%] top-[-20%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(212,160,23,.06) 0%,transparent 70%)' }} />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div className="img-overlay overflow-hidden"
                style={{ borderRadius: '3px', boxShadow: '0 40px 80px rgba(0,0,0,.5)' }}>
                <img src={CONSTRUCTION_B64} alt="Estmabevic team at work"
                  className="w-full h-[500px] object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 p-6"
                style={{ background: 'linear-gradient(135deg,#B8860B,#D4A017)', boxShadow: '0 20px 50px rgba(184,134,11,.4)' }}>
                <div className="text-5xl font-bold" style={{ fontFamily: '"Cormorant Garamond",serif', color: '#0D0A2E' }}>11+</div>
                <div className="text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: '"Cinzel",serif', color: '#0D0A2E' }}>Years Building</div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={1}>
              <SectionHeader
                eyebrow="Our Story"
                title="More Than a"
                highlight="Contractor"
                sub="Founded in October 2013, Estmabevic Nigeria Limited has grown from a construction firm into a multi-disciplinary company with offices in Uyo and Calabar."
                light
              />
            </Reveal>
            <Reveal delay={2}>
              <p className="text-white/50 text-sm leading-relaxed mb-8"
                style={{ fontFamily: '"Outfit",sans-serif' }}>
                From our corporate headquarters at 267 Oron Road, Uyo and our Calabar branch at Pacunsun Suits,
                Akai Effa, we serve clients across hotels, schools, hospitals, parastatals, and corporate
                organisations — bringing the same dedication to every project, regardless of scale.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {VALUES.map(v => (
                  <div key={v.title} className="p-4"
                    style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(212,160,23,.15)' }}>
                    <h4 className="text-sm font-semibold mb-2"
                      style={{ fontFamily: '"Cinzel",serif', color: '#E5B830', letterSpacing: '0.1em' }}>
                      {v.title}
                    </h4>
                    <p className="text-white/40 text-xs leading-relaxed"
                      style={{ fontFamily: '"Outfit",sans-serif' }}>
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-gold inline-flex">
                <span>Our Full Story</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

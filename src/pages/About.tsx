import { useEffect } from 'react'
import PageHero      from '@/components/ui/PageHero'
import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner     from '@/components/sections/CTABanner'

const MILESTONES = [
  { year:'2013', event:'Company founded in Uyo, Akwa Ibom State in October. First construction project delivered.' },
  { year:'2015', event:'Expanded into hotel management services. Secured first hospitality management contract.' },
  { year:'2017', event:'Opened Calabar branch office at Pacunsun Suits, Akai Effa, Cross River State.' },
  { year:'2019', event:'Delivered 100th construction project. Grew team to 50+ full-time professionals.' },
  { year:'2021', event:'Secured major government and parastatal construction contracts across South-South Nigeria.' },
  { year:'2023', event:'Celebrated 10 years of excellence. Expanded service portfolio and client base nationwide.' },
  { year:'2024', event:'Continued growth in hospitality management, now overseeing operations across multiple properties.' },
]

const TEAM = [
  { name:'Managing Director',     role:'Leadership & Strategy',     icon:'👔' },
  { name:'Head of Construction',  role:'Engineering & Projects',    icon:'🏗️' },
  { name:'Hospitality Manager',   role:'Hotel Operations',          icon:'🏨' },
  { name:'Head of Business Dev.', role:'Client Relations & Growth', icon:'📈' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Estmabevic Nigeria Limited'
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Learn about Estmabevic Nigeria Limited — our story, mission, values, and team. Construction and hospitality management since 2013, offices in Uyo and Calabar.')
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Built on Trust,<br /><span className="text-gold italic">Driven by Excellence</span></>}
        sub="Over eleven years of building better homes and managing world-class hospitality operations across Nigeria."
      />

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'var(--cream-50)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { eyebrow:'Our Mission', title:'Building Excellence', icon:'🎯',
                body:'To deliver world-class construction and hospitality management services that transform communities, create lasting value for our clients, and set new standards of quality across Nigeria.' },
              { eyebrow:'Our Vision', title:'Industry Leadership', icon:'🚀',
                body:'To be the most trusted construction and hospitality management company in Nigeria — recognised for our integrity, technical expertise, and unwavering commitment to exceeding client expectations.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) as 1 | 2}>
                <div className="card-dark p-10 h-full">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h2 className="text-3xl font-semibold text-white mb-4"
                    style={{ fontFamily:'"Cormorant Garamond",serif' }}>{item.title}</h2>
                  <p className="text-white/55 leading-relaxed"
                    style={{ fontFamily:'"Outfit",sans-serif' }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-deep">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Our Journey" title="A Decade of" highlight="Milestones" light center />
          </Reveal>
          <div className="mt-16 max-w-3xl mx-auto">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                      style={{ background:'linear-gradient(135deg,#B8860B,#D4A017)' }}>
                      <span className="font-bold text-xs"
                        style={{ fontFamily:'"Cinzel",serif', color:'#0D0A2E' }}>{m.year}</span>
                    </div>
                    {i < MILESTONES.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ background:'rgba(212,160,23,.2)' }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-white/70 leading-relaxed"
                      style={{ fontFamily:'"Outfit",sans-serif' }}>{m.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background:'var(--cream-100)' }}>
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Our People" title="The Team Behind" highlight="Every Project" center />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="card-light p-8 text-center">
                  <div className="text-5xl mb-5">{t.icon}</div>
                  <h3 className="font-semibold text-lg mb-1"
                    style={{ fontFamily:'"Cormorant Garamond",serif', color:'#0D0A2E' }}>{t.name}</h3>
                  <p className="text-xs tracking-widest"
                    style={{ fontFamily:'"Cinzel",serif', color:'#B8860B', letterSpacing:'0.1em' }}>{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

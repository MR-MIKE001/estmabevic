import { useEffect } from 'react'
import PageHero      from '@/components/ui/PageHero'
import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner     from '@/components/sections/CTABanner'
import { CONSTRUCTION_B64, HOTEL_B64, HOSPITALITY_B64 } from '@/assets/images'
import { STATS } from '@/utils/constants'

const PROJECTS = [
  {
    image:    CONSTRUCTION_B64,
    category: 'Construction',
    location: 'Uyo, Akwa Ibom',
    title:    'Luxury Residential Estate',
    desc:     'A premium residential development comprising 24 units of 4-bedroom detached duplexes with modern amenities, perimeter security, and fully landscaped grounds.',
  },
  {
    image:    HOTEL_B64,
    category: 'Hospitality',
    location: 'Calabar, Cross River',
    title:    'Hotel Operations Takeover',
    desc:     'Full operational management of a 60-room boutique hotel, resulting in 35% increase in occupancy and 28% revenue growth within 12 months of engagement.',
  },
  {
    image:    HOSPITALITY_B64,
    category: 'Institutional',
    location: 'Uyo, Akwa Ibom',
    title:    'School Complex Construction',
    desc:     'Complete construction of a modern secondary school facility with 20 classrooms, science labs, library, sports facilities, and a fully equipped administrative block.',
  },
  {
    image:    CONSTRUCTION_B64,
    category: 'Construction',
    location: 'Calabar, Cross River',
    title:    'Commercial Office Block',
    desc:     'A 5-storey commercial building housing 30 office suites with underground parking, 24/7 generator backup, fibre connectivity, and state-of-the-art facilities.',
  },
  {
    image:    HOTEL_B64,
    category: 'Hospitality',
    location: 'Uyo, Akwa Ibom',
    title:    'Hotel Pre-Opening Management',
    desc:     'End-to-end pre-opening services for a new 80-room property — from staff recruitment and training to systems setup, SOPs, and grand opening coordination.',
  },
  {
    image:    CONSTRUCTION_B64,
    category: 'Healthcare',
    location: 'Uyo, Akwa Ibom',
    title:    'Private Hospital Facility',
    desc:     'Construction of a 50-bed private hospital with operating theatres, ICU, pharmacy, diagnostic imaging, and outpatient departments to international medical standards.',
  },
]

export default function Projects() {
  useEffect(() => {
    document.title = 'Our Projects | Estmabevic Nigeria Limited'
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Explore Estmabevic Nigeria Limited\'s portfolio of completed construction and hospitality management projects across Nigeria — residential estates, hotels, schools, and more.')
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Projects That<br /><span className="text-gold italic">Speak for Themselves</span></>}
        sub="A selection of our completed construction and hospitality projects across South-South Nigeria."
      />

      {/* Stats bar */}
      <div style={{ background: 'linear-gradient(135deg,#B8860B,#D4A017)' }}>
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: '"Cormorant Garamond",Georgia,serif', color: '#0D0A2E' }}
                >
                  {s.n}
                </div>
                <div
                  className="text-xs tracking-wider uppercase"
                  style={{ fontFamily: '"Cinzel",Georgia,serif', color: '#150E45', letterSpacing: '0.1em' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <section className="section" style={{ background: 'var(--cream-50)' }} aria-labelledby="portfolio-h">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Portfolio" title="Selected" highlight="Projects" center />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card-light group overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <div className="img-overlay h-52 flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="text-xs px-3 py-1"
                        style={{
                          background:   'rgba(13,10,46,0.85)',
                          border:       '1px solid rgba(212,160,23,0.4)',
                          color:        '#D4A017',
                          fontFamily:   '"Cinzel",Georgia,serif',
                          letterSpacing:'0.1em',
                        }}
                      >
                        {p.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    {/* Location */}
                    <p
                      className="text-xs mb-2 flex items-center gap-1.5"
                      style={{ fontFamily:'"Cinzel",Georgia,serif', color:'#D4A017', letterSpacing:'0.1em' }}
                    >
                      <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                      </svg>
                      {p.location}
                    </p>

                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ fontFamily:'"Cormorant Garamond",Georgia,serif', color:'#0D0A2E' }}
                    >
                      {p.title}
                    </h3>

                    <p
                      className="text-slate-500 text-sm leading-relaxed flex-1"
                      style={{ fontFamily:'"Outfit",system-ui,sans-serif' }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

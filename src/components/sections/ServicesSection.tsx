import { Link } from 'react-router-dom'
import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { CONSTRUCTION_B64, HOTEL_B64, HOSPITALITY_B64 } from '@/assets/images'

const SERVICES = [
  {
    image:   CONSTRUCTION_B64,
    eyebrow: 'Core Service',
    title:   'Construction',
    desc:    'From residential estates to commercial complexes and institutional facilities — we build structures that stand as testaments to engineering excellence, delivered on time and within budget.',
    features: ['Residential Buildings', 'Commercial Complexes', 'Renovation & Remodelling', 'Infrastructure Works'],
    href: '/services#construction',
    accentColor: '#D4A017',
  },
  {
    image:   HOTEL_B64,
    eyebrow: 'Hospitality',
    title:   'Hotel Management',
    desc:    'We partner with hotels, guesthouses, and resorts to deliver exceptional guest experiences, streamlined operations, and sustainable revenue growth across Nigerian properties.',
    features: ['Operations Management', 'Staff Training', 'Revenue Optimisation', 'Pre-Opening Services'],
    href: '/services#hospitality',
    accentColor: '#E5B830',
  },
  {
    image:   HOSPITALITY_B64,
    eyebrow: 'Sector Expertise',
    title:   'Institutional Projects',
    desc:    'Serving schools, hospitals, government parastatals, and corporate offices with bespoke construction and facility solutions that meet regulatory standards and operational excellence.',
    features: ['Schools & Universities', 'Hospitals & Clinics', 'Government Buildings', 'Corporate Facilities'],
    href: '/services#institutional',
    accentColor: '#F0CC50',
  },
]

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: 'var(--cream-50)' }} aria-labelledby="services-h">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="What We Do"
            title="Two Pillars of"
            highlight="Excellence"
            sub="Over a decade of delivering quality construction and managing world-class hospitality operations — two disciplines that define who we are."
            center
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i + 1) as 1 | 2 | 3}>
              <article className="card-light group flex flex-col h-full">
                {/* Image */}
                <div className="img-overlay h-52 flex-shrink-0">
                  <img src={s.image} alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Colour bar */}
                  <div className="absolute top-0 inset-x-0 h-1 z-10"
                    style={{ background: `linear-gradient(90deg, ${s.accentColor}, transparent)` }} />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="eyebrow text-xs" style={{ color: '#D4A017', marginBottom: 0 }}>
                      {s.eyebrow}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold mb-3"
                    style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#0D0A2E' }}>
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1"
                    style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-7">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600"
                        style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#D4A017' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={s.href} className="btn-outline-gold text-xs self-start"
                    style={{ borderColor: 'rgba(212,160,23,.4)' }}>
                    Learn More
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect } from 'react'
import PageHero      from '@/components/ui/PageHero'
import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import CTABanner     from '@/components/sections/CTABanner'
import { CONSTRUCTION_B64, HOTEL_B64 } from '@/assets/images'

const CONSTRUCTION = [
  { title:'Residential Construction', body:'Custom homes, duplexes, flats, and estates built to the highest specifications. From a modest family home to a luxury residence, we execute with equal dedication.' },
  { title:'Commercial Buildings',     body:'Office complexes, retail spaces, warehouses, and commercial developments built for durability, functionality, and aesthetic appeal.' },
  { title:'Institutional Facilities', body:'Schools, hospitals, government buildings, and religious facilities — structures that serve communities for generations.' },
  { title:'Renovation & Remodelling', body:'Transform existing spaces into modern, functional environments. Complete overhauls or targeted upgrades with minimal disruption.' },
  { title:'Project Management',       body:'End-to-end oversight — from design coordination and procurement to site supervision and quality control.' },
  { title:'Infrastructure Works',     body:'Roads, drainage systems, perimeter fencing, landscaping, and utilities to complement our building projects.' },
]

const HOSPITALITY = [
  { title:'Hotel Operations Management',  body:'Full operational management — front desk to housekeeping, F&B to security, ensuring seamless guest experiences every day.' },
  { title:'Revenue Optimisation',         body:'Data-driven strategies to improve occupancy rates, average daily rates, and RevPAR through smart pricing and distribution.' },
  { title:'Staff Training & Development', body:'Comprehensive training equipping hospitality staff with international service standards and operational excellence.' },
  { title:'Quality Assurance Systems',    body:'SOPs, mystery guest programmes, and quality benchmarks that consistently deliver five-star experiences.' },
  { title:'Food & Beverage Management',   body:'Menu development, kitchen management, supplier sourcing, and F&B cost control for restaurant and hotel dining operations.' },
  { title:'Pre-Opening Services',         body:'Complete setup, staffing, and launch management for new hotel properties — from concept to first guest check-in.' },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services | Estmabevic Nigeria Limited'
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Estmabevic Nigeria Limited offers construction, hotel management, and institutional facility services to hotels, schools, hospitals, parastatals across Nigeria.')
  }, [])

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title={<>Services Built<br /><span className="text-gold italic">for Excellence</span></>}
        sub="Two core disciplines. Dozens of specialised services. One standard: exceptional quality."
        bgImage={CONSTRUCTION_B64}
      />

      {/* Construction */}
      <section id="construction" className="section" style={{ background:'var(--cream-50)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <Reveal>
              <div className="img-overlay overflow-hidden" style={{ borderRadius:'3px', boxShadow:'0 20px 50px rgba(0,0,0,.15)' }}>
                <img src={CONSTRUCTION_B64} alt="Construction services" className="w-full h-80 object-cover" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeader
                eyebrow="Core Service"
                title="Construction"
                highlight="Services"
                sub="From the ground up — we build homes, commercial properties, and institutional facilities that stand as testaments to engineering excellence."
              />
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONSTRUCTION.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0|1|2}>
                <div className="card-light p-7 h-full">
                  <div className="w-1 h-8 mb-5" style={{ background:'linear-gradient(to bottom,#D4A017,#F0CC50)' }} />
                  <h3 className="font-semibold text-lg mb-3"
                    style={{ fontFamily:'"Cormorant Garamond",serif', color:'#0D0A2E' }}>{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed"
                    style={{ fontFamily:'"Outfit",sans-serif' }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section id="hospitality" className="section bg-mid">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <Reveal>
              <SectionHeader
                eyebrow="Hospitality Division"
                title="Hotel Management"
                highlight="Services"
                sub="We partner with hotel owners to deliver exceptional guest experiences, optimise revenue, and build hospitality businesses that thrive."
                light
              />
            </Reveal>
            <Reveal delay={1}>
              <div className="img-overlay overflow-hidden" style={{ borderRadius:'3px', boxShadow:'0 20px 50px rgba(0,0,0,.4)' }}>
                <img src={HOTEL_B64} alt="Hotel management services" className="w-full h-80 object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOSPITALITY.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0|1|2}>
                <div className="card-dark p-7 h-full">
                  <div className="w-1 h-8 mb-5" style={{ background:'linear-gradient(to bottom,#D4A017,#F0CC50)' }} />
                  <h3 className="font-semibold text-lg mb-3 text-white"
                    style={{ fontFamily:'"Cormorant Garamond",serif' }}>{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed"
                    style={{ fontFamily:'"Outfit",sans-serif' }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional */}
      <section id="institutional" className="section" style={{ background:'var(--cream-100)' }}>
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="Sector Expertise"
              title="Institutional &"
              highlight="Corporate Solutions"
              sub="Schools, hospitals, and government institutions have unique requirements. We deliver purpose-built solutions that meet sector-specific standards."
              center
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon:'🎓', title:'Educational Institutions', body:'Purpose-built classrooms, labs, libraries, and admin blocks designed to inspire learning.' },
              { icon:'🏥', title:'Healthcare Facilities',    body:'Clinics, hospitals, and diagnostic centres built to international healthcare infrastructure standards.' },
              { icon:'🏛️', title:'Government & Parastatals', body:'Administrative buildings, courthouses, and parastatal headquarters delivered with compliance.' },
              { icon:'🏢', title:'Corporate Offices',        body:'Modern, functional, prestigious office environments that reflect your corporate identity.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) as 0|1|2|3}>
                <div className="card-light p-7 text-center h-full">
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className="font-semibold text-lg mb-3"
                    style={{ fontFamily:'"Cormorant Garamond",serif', color:'#0D0A2E' }}>{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed"
                    style={{ fontFamily:'"Outfit",sans-serif' }}>{s.body}</p>
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

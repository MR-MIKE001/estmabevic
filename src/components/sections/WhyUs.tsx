import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const REASONS = [
  { icon:'🏅', title:'Certified & Registered',   body:'Fully registered with Nigerian regulatory bodies. All construction activities comply with COREN, ARCON, and state standards.' },
  { icon:'👷', title:'Expert Team',              body:'Multidisciplinary team of engineers, architects, hospitality managers, and project coordinators — decades of combined experience.' },
  { icon:'🌍', title:'Nationwide Reach',         body:'Offices in Uyo (Akwa Ibom) and Calabar (Cross River) — strategically positioned to serve clients across South-South Nigeria.' },
  { icon:'⏱️', title:'On-Time Delivery',         body:'Our project management systems ensure milestones are met and handovers happen on schedule, every time.' },
  { icon:'📋', title:'Transparent Pricing',      body:'No hidden costs. We provide detailed BOQs and comprehensive cost breakdowns before any project begins.' },
  { icon:'✅', title:'Quality Assurance',        body:'Rigorous quality control at every phase. Grade-A materials and strict supervision protocols across every site.' },
]

export default function WhyUs() {
  return (
    <section className="section" style={{ background: 'var(--cream-100)' }} aria-labelledby="why-h">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The Estmabevic"
            highlight="Difference"
            sub="Eleven years of delivering on our promises has built a reputation that our clients trust and our competitors respect."
            center
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) as 0 | 1 | 2}>
              <article className="card-light p-8 h-full">
                <div className="w-14 h-14 flex items-center justify-center mb-6 text-2xl"
                  style={{ background: 'linear-gradient(135deg,#0D0A2E,#1E1460)', border: '1px solid rgba(212,160,23,.2)' }}>
                  {r.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3"
                  style={{ fontFamily: '"Cormorant Garamond",serif', color: '#0D0A2E' }}>
                  {r.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: '"Outfit",sans-serif' }}>
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from '@/components/ui/Reveal'

const PRODUCTS = [
  {
    name: 'HotelGo',
    tagline: 'Hotel PMS',
    desc: 'Complete Hotel Property Management System for effective, end-to-end hotel business operations and guest management.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    name: 'SWAD Cloud',
    tagline: 'Cloud & Marketplace',
    desc: 'Secure cloud hosting infrastructure and a comprehensive digital tools marketplace for modern business operations.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
  {
    name: 'Aria Messenger',
    tagline: 'Marketing Automation',
    desc: 'Automate and execute powerful multi-channel marketing campaigns.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    name: 'NetCaller',
    tagline: 'Cloud Communications',
    desc: 'Unified voice, messaging, and collaboration tools for modern teams.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
  },
  {
    name: 'Custom Dev',
    tagline: 'Bespoke Solutions',
    desc: 'Tailored digital solutions built for your specific business needs.',
    icon: (
      <svg width="26" height="26" fill="none" stroke="#D4A017" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
  },
]

const MARQUEE = [...PRODUCTS, ...PRODUCTS]

export default function SWADPartnership() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="swad-heading"
    style={{ background: 'linear-gradient(160deg,#0D0A2E,#150E45)',paddingTop:"5rem",
        paddingBottom:"5rem"
     }}>

      {/* Header */}
      <div className="container pt-20 pb-14">
        <Reveal className="text-center">

          <h2 id="swad-heading" className="text-white text-4xl mb-4">
            Trusted <span className="text-yellow-500">Partnerships</span>
          </h2>

          {/* ✅ FIXED LINK */}
          <p className="text-white/60 max-w-xl mx-auto">
            Official Regional Channel Partner of{' '}
            <a
              href="https://www.swaddigitalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline"
            >
              SWAD Digital Solutions Ltd.
            </a>
          </p>

        </Reveal>
      </div>

      {/* Products */}
      <div className="container pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i % 4}>
              <article className="p-6 border border-yellow-500/20">

                <div className="mb-4">{p.icon}</div>

                <span className="text-xs text-yellow-500 uppercase">
                  {p.tagline}
                </span>

                <h3 className="text-white text-lg font-semibold">
                  {p.name}
                </h3>

                <p className="text-white/50 text-sm mt-2">
                  {p.desc}
                </p>

              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container py-10">
        <Reveal>
          <a
            href="https://wa.me/+2347011914628"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3"
          >
            Talk to Us on WhatsApp
          </a>
        </Reveal>
      </div>

    </section>
  )
}
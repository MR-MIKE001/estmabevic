import { useEffect } from 'react'
import PageHero      from '@/components/ui/PageHero'
import Reveal        from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import ContactForm   from '@/components/sections/ContactForm'
import { OFFICES, PHONE1_RAW, PHONE2_RAW } from '@/utils/constants'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Estmabevic Nigeria Limited'
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Contact Estmabevic Nigeria Limited. Corporate office: 267 Oron Road, Uyo, Akwa Ibom. Branch: Calabar, Cross River State. Call 08061126547 or email estmabevic@gmail.com.')
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Let&apos;s Build<br /><span className="text-gold italic">Something Together</span></>}
        sub="Reach out to our team for a free consultation, detailed quote, or to discuss your project requirements."
      />

      {/* Main contact section */}
      <section className="section" style={{ background: 'var(--cream-50)' }} aria-labelledby="contact-h">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <Reveal>
              <SectionHeader
                eyebrow="Send a Message"
                title="Tell Us About"
                highlight="Your Project"
                sub="Fill in the form below and a member of our team will get back to you within 24 hours."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>

            {/* Office cards + hours */}
            <Reveal delay={1}>
              <div className="space-y-6">
                {OFFICES.map(o => (
                  <address key={o.tag} className="not-italic card-dark p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-3xl">{o.icon}</div>
                      <div>
                        <span
                          className="eyebrow text-xs"
                          style={{ marginBottom: '4px' }}
                        >
                          {o.tag}
                        </span>
                        <h3
                          className="text-2xl font-semibold text-white"
                          style={{ fontFamily: '"Cormorant Garamond",Georgia,serif' }}
                        >
                          {o.city}
                        </h3>
                      </div>
                    </div>

                    <div
                      className="space-y-4 text-sm"
                      style={{ fontFamily: '"Outfit",system-ui,sans-serif' }}
                    >
                      {/* Address */}
                      <div className="flex gap-3">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: '#D4A017' }}>📍</span>
                        <p className="text-white/60 whitespace-pre-line">{o.address}</p>
                      </div>

                      {/* Phones */}
                      <div className="flex gap-3">
                        <span className="flex-shrink-0" style={{ color: '#D4A017' }}>📞</span>
                        <div>
                          {o.phones.map(phone => (
                            <a
                              key={phone}
                              href={`tel:${phone.replace(/\s/g, '')}`}
                              className="block text-white/60 hover:text-yellow-400 transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex gap-3">
                        <span className="flex-shrink-0" style={{ color: '#D4A017' }}>✉️</span>
                        <a
                          href={`mailto:${o.email}`}
                          className="text-white/60 hover:text-yellow-400 transition-colors"
                        >
                          {o.email}
                        </a>
                      </div>
                    </div>
                  </address>
                ))}

                {/* Business hours */}
                <div
                  className="p-8"
                  style={{
                    background: 'rgba(212,160,23,0.07)',
                    border:     '1px solid rgba(212,160,23,0.2)',
                  }}
                >
                  <h3 className="eyebrow mb-5">Business Hours</h3>
                  <div
                    className="space-y-3 text-sm"
                    style={{ fontFamily: '"Outfit",system-ui,sans-serif' }}
                  >
                    {[
                      { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM'  },
                      { day: 'Saturday',        hours: '9:00 AM – 4:00 PM'  },
                      { day: 'Sunday',          hours: 'Closed'              },
                    ].map(row => (
                      <div key={row.day} className="flex justify-between items-center">
                        <span className="text-white/50">{row.day}</span>
                        <span style={{ color: row.hours === 'Closed' ? 'rgba(255,255,255,0.3)' : '#D4A017' }}>
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick dial buttons */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                    <a
                      href={`tel:${PHONE1_RAW}`}
                      className="btn-gold text-xs justify-center"
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Main Office</span>
                    </a>
                    <a
                      href={`tel:${PHONE2_RAW}`}
                      className="btn-outline-gold text-xs justify-center"
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Alternate Line</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

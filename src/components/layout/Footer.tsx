import { Link } from 'react-router-dom'
import { LOGO_B64 } from '@/assets/images'
import { COMPANY, NAV_ITEMS, OFFICES, EMAIL, PHONE1, PHONE1_RAW } from '@/utils/constants'

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg,#040B1A,#0D0A2E)' }} role="contentinfo">
      <div className="divider-gold" />

      <div className="container pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <img src={LOGO_B64} alt={COMPANY} className="h-20 mb-6" width={160} height={80} />
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
              Building better homes and managing world-class hospitality operations
              across Nigeria since October 2013.
            </p>
            <div className="flex gap-3">
              {['Construction', 'Hospitality'].map(tag => (
                <span key={tag} className="text-xs px-3 py-1"
                  style={{
                    background: 'rgba(212,160,23,.1)',
                    border: '1px solid rgba(212,160,23,.25)',
                    color: '#D4A017',
                    fontFamily: '"Cinzel", Georgia, serif',
                    letterSpacing: '0.08em',
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-6">Pages</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_ITEMS.map(n => (
                  <li key={n.path}>
                    <Link to={n.path}
                      className="text-white/40 hover:text-yellow-400 text-sm transition-colors"
                      style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow mb-6">Our Offices</h3>
            <address className="not-italic space-y-5 text-sm text-white/45"
              style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
              {OFFICES.map(o => (
                <div key={o.tag}>
                  <p className="text-xs font-semibold mb-1"
                    style={{ color: '#D4A017', fontFamily: '"Cinzel", Georgia, serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {o.tag}
                  </p>
                  <p className="whitespace-pre-line">{o.address}</p>
                </div>
              ))}
              <div>
                <a href={`tel:${PHONE1_RAW}`}
                  className="block hover:text-yellow-400 transition-colors">{PHONE1}</a>
                <a href={`mailto:${EMAIL}`}
                  className="block hover:text-yellow-400 transition-colors">{EMAIL}</a>
              </div>
            </address>
          </div>
        </div>

        <div className="divider-subtle" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-white/20 text-xs" style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs"
            style={{ fontFamily: '"Cinzel", Georgia, serif', letterSpacing: '0.1em' }}>
            BUILDING BETTER HOMES · EST. OCTOBER 2013
          </p>
        </div>
      </div>
    </footer>
  )
}

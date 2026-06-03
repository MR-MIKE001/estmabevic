import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  sub: string
  bgImage?: string
}

export default function PageHero({ eyebrow, title, sub, bgImage }: Props) {
  return (
    <section
      className="relative min-h-[60vh] flex items-end overflow-hidden"
      style={bgImage
        ? undefined
        : { background: 'linear-gradient(160deg,#0D0A2E,#2A1C84)' }
      }
      aria-label={`${eyebrow} hero`}
    >
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(13,10,46,.95) 0%,rgba(21,14,69,.85) 50%,rgba(13,10,46,.6) 100%)' }} />
        </div>
      )}

      {/* Gold top bar */}
      <div className="gold-top-bar" />

      {/* Mesh glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 30%,rgba(212,160,23,.1),transparent 60%)' }} />

      {/* Bottom wave */}
      <svg className="absolute bottom-0 inset-x-0 w-full" viewBox="0 0 1440 80"
        preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 80L1440 0V80H0Z" fill="var(--cream-50)" />
      </svg>

      <div className="relative z-10 container pb-24 pt-40">
        <span className="eyebrow">{eyebrow}</span>
        <h1
          className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-6"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          {title}
        </h1>
        <p className="text-white/60 text-xl max-w-2xl"
          style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
          {sub}
        </p>
      </div>
    </section>
  )
}

interface Props {
  eyebrow?: string
  title: string
  highlight?: string
  sub?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ eyebrow, title, highlight, sub, light = false, center = false }: Props) {
  const align = center ? 'text-center' : ''
  return (
    <div className={align}>
      {eyebrow && (
        center
          ? <div className="ornament"><span className="eyebrow">{eyebrow}</span></div>
          : <span className="eyebrow">{eyebrow}</span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] mb-5 ${light ? 'text-white' : 'text-royal-900'}`}
        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: light ? '#fff' : '#0D0A2E' }}
      >
        {title}{' '}
        {highlight && <span className="text-gold">{highlight}</span>}
      </h2>
      {sub && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-slate-500'}`}
          style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

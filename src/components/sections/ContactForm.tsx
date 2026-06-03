import { useState } from 'react'

interface F { name:string; email:string; phone:string; service:string; message:string }
type E = Partial<Record<keyof F,string>>

export default function ContactForm() {
  const [form, setForm] = useState<F>({ name:'', email:'', phone:'', service:'', message:'' })
  const [errors, setErrors] = useState<E>({})
  const [done, setDone]     = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const e: E = {}
    if (!form.name.trim())    e.name    = 'Full name is required.'
    if (!form.email.trim())   e.email   = 'Email address is required.'
    if (!form.phone.trim())   e.phone   = 'Phone number is required.'
    if (!form.message.trim()) e.message = 'Please describe your project.'
    setErrors(e)
    return !Object.keys(e).length
  }

  const set = (k: keyof F) => (ev: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(p => ({ ...p, [k]: ev.target.value }))
    if (errors[k]) setErrors(p => ({ ...p, [k]: undefined }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setDone(true)
  }

  const cls = (k: keyof F) =>
    `form-field ${errors[k] ? 'form-field-error' : ''}`

  if (done) return (
    <div className="text-center py-14" aria-live="polite" role="alert"
      style={{ background:'rgba(212,160,23,.07)', border:'1px solid rgba(212,160,23,.25)' }}>
      <div className="text-5xl mb-5">✅</div>
      <h3 className="text-2xl font-semibold mb-3"
        style={{ fontFamily:'"Cormorant Garamond",serif', color:'#0D0A2E' }}>
        Message Received!
      </h3>
      <p className="text-slate-500 text-sm" style={{ fontFamily:'"Outfit",sans-serif' }}>
        Thank you, {form.name.split(' ')[0]}. Our team will contact you within 24 hours.
      </p>
    </div>
  )

  return (
    <form onSubmit={submit} noValidate aria-label="Contact form" className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold mb-2 uppercase tracking-widest"
            style={{ fontFamily:'"Cinzel",serif', color:'#0D0A2E', letterSpacing:'0.1em' }}>Full Name *</label>
          <input id="name" type="text" autoComplete="name" placeholder="Your full name"
            className={cls('name')} value={form.name} onChange={set('name')}
            aria-required="true" aria-describedby={errors.name?'err-name':undefined} />
          {errors.name && <p id="err-name" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold mb-2 uppercase tracking-widest"
            style={{ fontFamily:'"Cinzel",serif', color:'#0D0A2E', letterSpacing:'0.1em' }}>Email *</label>
          <input id="email" type="email" autoComplete="email" placeholder="your@email.com"
            className={cls('email')} value={form.email} onChange={set('email')}
            aria-required="true" aria-describedby={errors.email?'err-email':undefined} />
          {errors.email && <p id="err-email" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold mb-2 uppercase tracking-widest"
            style={{ fontFamily:'"Cinzel",serif', color:'#0D0A2E', letterSpacing:'0.1em' }}>Phone *</label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+234 800 000 0000"
            className={cls('phone')} value={form.phone} onChange={set('phone')}
            aria-required="true" aria-describedby={errors.phone?'err-phone':undefined} />
          {errors.phone && <p id="err-phone" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="block text-xs font-semibold mb-2 uppercase tracking-widest"
            style={{ fontFamily:'"Cinzel",serif', color:'#0D0A2E', letterSpacing:'0.1em' }}>Service</label>
          <select id="service" className={cls('service')} value={form.service} onChange={set('service')}>
            <option value="">Select service (optional)</option>
            {['Construction','Hotel Management','Renovation','Institutional Build','Facility Management','Other'].map(o=>
              <option key={o}>{o}</option>
            )}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold mb-2 uppercase tracking-widest"
          style={{ fontFamily:'"Cinzel",serif', color:'#0D0A2E', letterSpacing:'0.1em' }}>Project Details *</label>
        <textarea id="message" rows={5}
          placeholder="Describe your project — location, type, timeline, and any other details..."
          className={`${cls('message')} resize-none`} value={form.message} onChange={set('message')}
          aria-required="true" aria-describedby={errors.message?'err-msg':undefined} />
        {errors.message && <p id="err-msg" className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
      </div>

      <button type="submit" disabled={loading}
        className="btn-gold w-full justify-center"
        style={{ opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
        <span>{loading ? 'Sending…' : 'Send Message'}</span>
        {!loading && (
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  )
}

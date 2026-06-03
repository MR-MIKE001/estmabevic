import { useEffect } from 'react'
import Hero           from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection    from '@/components/sections/AboutSection'
import WhyUs           from '@/components/sections/WhyUs'
import ClientsSection  from '@/components/sections/ClientsSection'
import CTABanner       from '@/components/sections/CTABanner'
import Partnership from '@/components/sections/Partnership.'

export default function Home() {
  useEffect(() => {
    document.title = 'Estmabevic Nigeria Limited — Construction & Hospitality Management'
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Estmabevic Nigeria Limited — leading construction and hospitality management company in Nigeria. Serving hotels, schools, hospitals, and parastatals since October 2013.')
  }, [])

  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyUs />
      <ClientsSection />
      <Partnership/>
      <CTABanner />
    </>
  )
}

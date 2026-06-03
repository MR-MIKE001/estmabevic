import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect }  from 'react'
import Navbar  from '@/components/layout/Navbar'
import Footer  from '@/components/layout/Footer'
import Home     from '@/pages/Home'
import About    from '@/pages/About'
import Services from '@/pages/Services'
import Projects from '@/pages/Projects'
import Contact  from '@/pages/Contact'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

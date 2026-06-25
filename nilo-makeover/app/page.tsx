import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Packages } from '@/components/sections/Package'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { Academy } from '@/components/sections/Academy'
import { WhyUs } from '@/components/sections/WhyChooseUs'
import { InstagramFeed } from '@/components/sections/Instagram'
import { Faq } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/sections/floatingWhat'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Academy />
      <WhyUs />
      <InstagramFeed />
      <Faq />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

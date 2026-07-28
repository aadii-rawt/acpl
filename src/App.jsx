import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Marquee from './components/Marquee'
import PartnersSection from './components/PartnersSection'
import ServicesSection from './components/ServicesSection'
import BannerSection from './components/BannerSection'
import ProductSection from './components/ProductSection'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Request from './components/Request'
import TestimonialsSection from './components/TestimonialsSection'
import ResourcesSection from './components/ResourcesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-primary h-full relative w-full">

        <Header />
        <Hero />
        <Marquee />
        <PartnersSection />
        <ServicesSection />
        <BannerSection />
        <ProductSection />
        <Product2 />
        <Product3 />
        <Request />
        <TestimonialsSection />
        <ResourcesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App

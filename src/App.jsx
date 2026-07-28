import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Marquee from './components/Marquee'
import PartnersSection from './components/PartnersSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-primary h-full relative w-full pb-40">

        <Header />
        <Hero />
        <Marquee />
        <PartnersSection />
      </div>
    </>
  )
}

export default App

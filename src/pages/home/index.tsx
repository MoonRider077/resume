import React from 'react'
import Header from '@/components/header/Header'
import FirstSection from '@/components/banner/first/FirstSection'
import SecondSection from '@/components/banner/second/SecondSection'
import Portfolio from '@/components/banner/portfolio/Portfolio'
import Footer from '@/components/footer/Footer'

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <FirstSection />
    <SecondSection />
    <Portfolio />
    <Footer />
    </>
  )
}

export default Home
'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import DashboardSection from '@/components/DashboardSection'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <DashboardSection />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

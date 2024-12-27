'use client'

import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Publications from '../components/Publications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Publications />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}


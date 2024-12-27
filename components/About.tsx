'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '../app/constants/text'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {siteConfig.description}
        </motion.p>
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mr-4">LinkedIn</a>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
        </motion.div>
      </div>
    </section>
  )
}


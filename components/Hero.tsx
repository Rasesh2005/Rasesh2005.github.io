'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { siteConfig } from '../app/constants/text'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {siteConfig.title}
          </motion.p>
          <motion.div 
            className="flex gap-4 mt-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href={siteConfig.links.email} className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-700 transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white py-2 px-6 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
        {siteConfig.showPhoto && (
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={siteConfig.photoUrl}
              alt={siteConfig.name}
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}


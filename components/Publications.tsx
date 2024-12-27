'use client'

import { motion } from 'framer-motion'
import { publicationsData } from '../app/constants/data'
import Link from 'next/link'

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Publications
        </motion.h2>
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {publicationsData.map((publication, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <Link href={publication.link} className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 hover:underline">
                {publication.title}
              </Link>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{publication.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


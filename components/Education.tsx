'use client'

import { motion } from 'framer-motion'
import { educationData } from '../app/constants/data'

export default function Education() {
  return (
    <section id="education" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-2">{educationData.institution}</h3>
          <p className="text-gray-700 dark:text-gray-300">{educationData.degree}</p>
          <p className="text-gray-600 dark:text-gray-400">{educationData.duration}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">CPI: {educationData.cpi}</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Relevant Coursework: {educationData.coursework}
          </p>
        </motion.div>
      </div>
    </section>
  )
}


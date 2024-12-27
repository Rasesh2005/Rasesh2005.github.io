'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { achievementsData } from '../app/constants/data'
import Link from 'next/link'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-md flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              <div>
                <Link href={achievement.link} className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  {achievement.title}
                </Link>
                <p className="text-gray-600 dark:text-gray-400">{achievement.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


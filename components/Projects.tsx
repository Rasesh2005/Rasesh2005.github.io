'use client'

import { motion } from 'framer-motion'
import { projectsData } from '../app/constants/data'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={project.link} className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400 hover:underline">
                {project.title}
              </Link>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-blue-600 dark:text-blue-400">Technologies: {project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


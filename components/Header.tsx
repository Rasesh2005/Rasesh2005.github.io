'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  return (
    <motion.header 
      className="bg-gray-100 dark:bg-gray-900 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          {['about', 'skills', 'projects', 'education', 'achievements', 'publications', 'contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={`#${item}`} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </motion.header>
  )
}


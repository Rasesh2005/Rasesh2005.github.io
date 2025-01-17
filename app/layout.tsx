import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rasesh Udayakumar Shetty - Portfolio',
  description: 'Mathematics and Computing Undergraduate | AI/ML Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}>{children}</body>
    </html>
  )
}


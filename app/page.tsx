'use client'

import { ThemeProvider } from 'next-themes'
import Terminal from '../components/Terminal'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Terminal />
    </ThemeProvider>
  )
}

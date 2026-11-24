import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const mono = localFont({ src: './fonts/GeistMonoVF.woff', variable: '--font-mono', weight: '100 900' })

export const metadata: Metadata = {
  title: 'Rasesh Shetty',
  description: 'Systems programmer and competitive programmer. Mathematics and Computing at IIT (BHU) Varanasi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${mono.variable} font-mono text-sm leading-7 text-term-fg antialiased sm:text-[15px]`}>
        {children}
      </body>
    </html>
  )
}

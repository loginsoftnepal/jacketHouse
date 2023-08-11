import Navbar from '@/section/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/section/Footer/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })

export const metadata: Metadata = {
  title: 'Jacket House',
  description: 'Find all kinds of jacket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

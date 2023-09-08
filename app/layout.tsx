import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './providers'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

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
        <NextAuthProvider>
          <Toaster />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider> 
      </body>
    </html>
  )
}

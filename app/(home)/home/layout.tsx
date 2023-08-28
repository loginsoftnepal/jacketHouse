import Navbar from '@/section/Navbar/Navbar'
import '../../globals.css'
import { Footer } from '@/section/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

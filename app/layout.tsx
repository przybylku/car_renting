import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './Header'

const poppins = Poppins({weight: ["400", "300", "700", "800"], style: ["normal", "italic"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Car Renting',
  description: 'Rent new fancy car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}><Header/><main>{children}</main></body>
    </html>
  )
}

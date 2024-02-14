import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'BoredGamers',
  description: 'BoredGamers Official Website',
  icons: {
    icon: '/images/logo.png'
  }
}

const myFont = localFont({ src: '../../public/fonts/Gagalin-Regular.otf' })

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

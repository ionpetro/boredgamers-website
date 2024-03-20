import localFont from 'next/font/local'
import { Poppins, Baloo_2 } from 'next/font/google'
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


const baloo_2 = Baloo_2({
  weight: '700',
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Baloo+2:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${baloo_2.className} ${poppins.className}`}>{children}</body>
    </html>
  )
}

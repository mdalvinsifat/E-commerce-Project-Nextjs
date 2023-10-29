"use client"
import { Inter } from 'next/font/google'
import './globals.css'

import LayOut from './Layout/LayOut'
import "slick-carousel/slick/slick.css";
import { CardProvider } from './context/CardContext'

import Fotter from './Layout/Fotter'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

<CardProvider>


<LayOut></LayOut>

{children}
<Fotter/>
</CardProvider>



      </body>
    </html>
  )
}

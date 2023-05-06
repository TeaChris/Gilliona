import './globals.css'
// fonts from google fonts
import { Outfit, Exo } from 'next/font/google'
// local fonts
import localFont from 'next/font/local'

const outfit = Outfit({
  weight: '400',
  display: 'swap',
  variable: '--font-outfit',
  subsets: ['latin'],
})
const exo = Exo({
  weight: '400',
  display: 'swap',
  variable: '--font-exo',
  subsets: ['latin'],
})

const deglion = localFont({
  src: '../public/font/Deglion-DOzRm.ttf',
  weight: '400',
  display: 'swap',
  variable: '--font-deglion',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Gilliona: Women Fashion Landing Page',
  description:
    "Unleash your style with our chic fashion collection for women. Step up your style game with our trendy and affordable women's fashion collection. Shop now and stand out from the crowd!",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${exo.variable} ${outfit.variable} ${deglion.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

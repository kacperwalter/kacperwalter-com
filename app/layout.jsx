import './globals.scss'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Kacper Walter - Frontend Software Developer | kacperwalter.com',
  description: 'This website is about my consulting freelance job',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}

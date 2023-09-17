import { Rubik } from 'next/font/google'
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';
const rubik = Rubik({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik'
});

export const metadata = {
  title: 'Leroy Lau | CST Student',
  description: 'Portfolio site for Leroy, a student at BCIT in the CST Program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

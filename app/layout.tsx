import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})


export const metadata: Metadata = {
  title: 'BFSK',
  description: 'Bharatiya federation of Shotokan karate',
  keywords: [
    "BFSK",
    "Bharatiya federation of Shotokan karate",
    "karate",
    "karate classes",
    "karate classes in naihati",
    "karate classes in kankinara",
    "karate classes in bijoynagar",
    "karate classes in north 24 parganas",
    "karate classes in west bengal",
    "karate classes in india",
    "karate classes near me",
    "karate classes for kids",
    "karate classes for adults",
    "shotokan karate",
    "martial arts training",
    "self-defense training",
    "fitness and health",
    "confidence building",
    "discipline and respect",
    "competitive karate",
    "karate tournaments",
    "black belt programs",
    "fun and challenging activities",
    "naihati karate academy",
    "bijoynagar karate academy",
    "kankinara karate academy",
    "best karate schools in naihati",
    "best karate schools in kankinara",
    "learn karate near naihati",
    "learn karate near bijoynagar",
    "BFSK certified instructors",
    "experienced and qualified teachers",
    "traditional shotokan training",
    "small class sizes",
    "positive and supportive environment",
    "competitive success stories",
    "community events and activities",
    "karate for all ages",
    "karate classes for beginners",
    "karate classes for intermediate",
    "karate classes for advanced",
    "karate classes for kids",
    "karate classes for adults",
    "women's karate classes"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
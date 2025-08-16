import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RoastMe Chat - Le Chat qui te Roaste !',
  description: 'Discute avec un AI qui va te roaster de manière amusante !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
          {children}
        </div>
      </body>
    </html>
  )
}

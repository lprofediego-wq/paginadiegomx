// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profe Diego MX — Plataforma Educativa Premium',
  description: 'Prepárate y logra tu meta con los mejores cursos de admisión IPN, UNAM, Cálculo y más.',
  icons: { icon: 'https://i.ibb.co/d4m853YQ/logo-sin-letras.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc]`}>
        {children}
      </body>
    </html>
  )
}

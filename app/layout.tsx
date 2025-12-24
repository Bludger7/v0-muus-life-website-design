import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingSocials } from "@/components/floating-socials"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "muus.life | Mobilya Üretim & Tasarım",
  description: "Kişiye özel mobilya çözümleri ve kurumsal ölçekte mobilya üretimi yapan modern üretim firması.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <FloatingSocials />
      </body>
    </html>
  )
}

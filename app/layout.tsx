import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FloatingSocials } from "@/components/floating-socials"
import { LanguageProvider } from "@/lib/language-context"

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
  keywords: ["mobilya", "tasarım", "üretim", "özel mobilya", "muus.life"],
  authors: [{ name: "muus.life" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://muus.life",
  },
  openGraph: {
    title: "muus.life | Mobilya Üretim & Tasarım",
    description: "Kişiye özel mobilya çözümleri ve kurumsal ölçekte mobilya üretimi yapan modern üretim firması.",
    url: "https://muus.life",
    siteName: "muus.life",
    images: [
      {
        url: "https://muus.life/logo.png",
        width: 120,
        height: 40,
        alt: "muus.life logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "muus.life | Mobilya Üretim & Tasarım",
    description: "Kişiye özel mobilya çözümleri ve kurumsal ölçekte mobilya üretimi yapan modern üretim firması.",
    images: ["https://muus.life/logo.png"],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <FloatingSocials />
      </body>
    </html>
  )
}

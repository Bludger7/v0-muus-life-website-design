import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
  verification: {
    google: "DFcAXn8g7_IrBoPbdJxD6-gVCtsAWESx9tLGiGMEPqQ",
  },
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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGXP5Q6M');`}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MS7QKJL8T1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MS7QKJL8T1');
          `}
        </Script>
      </head>
      <body className={`${montserrat.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGXP5Q6M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <FloatingSocials />
      </body>
    </html>
  )
}

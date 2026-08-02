import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { FloatingSocials } from "@/components/floating-socials"
import { LanguageProvider } from "@/lib/language-context"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL } from "@/lib/contact-info"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// NOT: title/description/canonical/openGraph/twitter her sayfanin kendi
// page.tsx dosyasinda tanimlidir. Burada yalnizca tum sayfalarda ortak olan
// alanlar bulunur; boylece alt sayfalara yanlis canonical miras kalmaz.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Noyer Home | Ankara Ölçüye Özel Mobilya Üretimi",
    template: "%s",
  },
  generator: "v0.app",
  verification: {
    google: "DFcAXn8g7_IrBoPbdJxD6-gVCtsAWESx9tLGiGMEPqQ",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "mobilya",
    "tasarım",
    "üretim",
    "özel mobilya",
    "noyer home",
    "Noyer Home",
    "ölçüye özel mobilya",
    "mutfak dolabı ankara",
    "gardırop",
    "mobilya üretim ankara",
  ],
  authors: [{ name: "Noyer Home" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
        <JsonLd />

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

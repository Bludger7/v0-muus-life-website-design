import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ServiceCategories } from "@/components/service-categories"
import { ProcessStrip } from "@/components/process-strip"
import { QuoteCta } from "@/components/quote-cta"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Ölçüye Özel Mobilya Hizmetleri | Noyer Home Ankara"
const description =
  "Mutfak, gardırop, TV ünitesi, banyo, antre ve kurumsal mobilya üretimi. Keşif, tasarım, üretim ve montaj sürecini tek elden yürütüyoruz."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/hizmetler/` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/hizmetler/`,
    siteName: "Noyer Home",
    locale: "tr_TR",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Noyer Home ölçüye özel mobilya uygulaması" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-image.jpg`] },
}

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {/* Tek hizmet yapisi: kategori grid'i + surec seridi.
            Eski "Kurumsal / Kisiye Ozel" anlatimi ayni isi tekrar ettigi icin kaldirildi. */}
        <ServiceCategories />
        <ProcessStrip />
        <QuoteCta location="hizmetler" />
      </div>
      <Footer />
    </main>
  )
}

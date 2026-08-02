import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBand } from "@/components/trust-band"
import { ServiceCategories } from "@/components/service-categories"
import { ProcessStrip } from "@/components/process-strip"
import InstagramFeed from "@/components/instagram-feed"
import { QuoteCta } from "@/components/quote-cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Noyer Home | Ankara Ölçüye Özel Mobilya Üretimi"
const description =
  "Ankara'da mutfak, gardırop, TV ünitesi ve kurumsal projeler için ölçüye özel mobilya üretimi. Keşiften montaja tek elden."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/`,
    siteName: "Noyer Home",
    locale: "tr_TR",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Noyer Home ölçüye özel mobilya uygulaması" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-image.jpg`] },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBand />
      <ServiceCategories />
      <ProcessStrip />
      <InstagramFeed />
      {/* TUR 2A: Proje vitrini (<Portfolio />) gecici olarak kaldirildi.
          Gosterdigi gorsellerin gercek uygulama fotografi oldugu dogrulanmadi.
          Tur 2B'de dogrulanmis gorsellerle geri acilacak. */}
      <Contact />
      <QuoteCta location="home" />
      <Footer />
    </main>
  )
}

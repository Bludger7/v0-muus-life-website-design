import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Noyer Home İletişim ve Teklif | Ankara"
const description =
  "Ölçüye özel mobilya projeniz için teklif alın. Etimesgut/Ankara adresimiz, telefon numaralarımız ve teklif formu."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/iletisim/` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/iletisim/`,
    siteName: "Noyer Home",
    locale: "tr_TR",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Noyer Home ölçüye özel mobilya uygulaması" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-image.jpg`] },
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

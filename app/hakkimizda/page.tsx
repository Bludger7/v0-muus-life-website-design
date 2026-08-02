import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Noyer Home Hakkında | Ankara"
const description =
  "Ankara'da ölçüye özel ve kurumsal ölçekli mobilya üretimi yapan Noyer Home'un üretim yaklaşımı, misyonu ve ekibi."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/hakkimizda/` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/hakkimizda/`,
    siteName: "Noyer Home",
    locale: "tr_TR",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Noyer Home ölçüye özel mobilya uygulaması" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-image.jpg`] },
}

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <About />
        <Team />
      </div>
      <Footer />
    </main>
  )
}

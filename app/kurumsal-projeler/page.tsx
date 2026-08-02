// TUR 2A: Kurumsal proje gorselleri dogrulanana kadar galeri yayinda degil.
// Sayfa erisilebilir kalir ama noindex tasir, sitemap'te yoktur ve menu/footer'da
// bagi bulunmaz. Gercek gorseller onaylandiginda Tur 2B'de <OfficeProjects />
// geri acilacak (bilesen repoda duruyor).
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { GalleryPlaceholder } from "@/components/gallery-placeholder"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Kurumsal Proje Arşivi | Noyer Home"
const description =
  "Kurumsal proje arşivimiz hazırlanıyor. Ofis, mağaza ve restoran mobilya talepleriniz için bizimle iletişime geçebilirsiniz."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/kurumsal-projeler/` },
  robots: { index: false, follow: true },
}

export default function KurumsalProjelerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <GalleryPlaceholder location="kurumsal_projeler" />
      </div>
      <Footer />
    </main>
  )
}

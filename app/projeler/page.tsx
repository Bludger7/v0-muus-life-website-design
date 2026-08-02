// TUR 2A: Proje gorselleri dogrulanana kadar galeri yayinda degil.
// Sayfa erisilebilir kalir ama noindex tasir, sitemap'te yoktur ve menu/footer'da
// bagi bulunmaz. Gercek gorseller onaylandiginda Tur 2B'de <ProjectGallery />
// geri acilacak (bilesen ve veri dosyasi repoda duruyor).
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { GalleryPlaceholder } from "@/components/gallery-placeholder"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Proje Arşivi | Noyer Home"
const description = "Proje arşivimiz hazırlanıyor. Ölçüye özel mobilya talebiniz için bizimle iletişime geçebilirsiniz."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/projeler/` },
  robots: { index: false, follow: true },
}

export default function ProjelerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <GalleryPlaceholder location="projeler" />
      </div>
      <Footer />
    </main>
  )
}

// TUR 2A: URL gocu HENUZ CANLIYA ALINMADI. vercel.json yonlendirmesi devre disi
// oldugu icin bu eski adres calismaya devam eder. Proje gorselleri dogrulanana
// kadar burada da galeri gosterilmez; gecici arsiv mesaji yayindadir.
// Tur 2B: gorseller onaylandiginda 301 yonlendirmesi acilacak.
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { GalleryPlaceholder } from "@/components/gallery-placeholder"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

export const metadata: Metadata = {
  title: "Proje Arşivi | Noyer Home",
  description: "Proje arşivimiz hazırlanıyor. Ölçüye özel mobilya talebiniz için bizimle iletişime geçebilirsiniz.",
  alternates: { canonical: `${SITE_URL}/urunler/` },
  robots: { index: false, follow: true },
}

export default function UrunlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <GalleryPlaceholder location="urunler" />
      </div>
      <Footer />
    </main>
  )
}

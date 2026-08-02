import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/contact-info"

export const dynamic = "force-static"

// NOT: Eski /urunler ve /ofis-calismalari adresleri BILINCLI olarak engellenmez.
// Bu adresler vercel.json uzerinden 301 ile yeni adreslere yonlendiriliyor;
// robots ile engellenirlerse Google yonlendirmeyi goremez ve link degeri aktarilmaz.
// Sitemap'te yer almamalari ve sayfalarin noindex tasimasi yeterlidir.
//
// Gorsel klasorleri (/img, /images) da engellenmez; proje gorsellerinin
// Google Gorseller tarafindan taranabilmesi isteniyor.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Yalnizca build ic ciktilari; icerik degeri yok.
        disallow: ["/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}

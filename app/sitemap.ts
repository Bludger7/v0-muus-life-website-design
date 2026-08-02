import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/contact-info"

// Yalnizca yayinda ve indexlenebilir olan canonical sayfalar.
//
// TUR 2A: /projeler ve /kurumsal-projeler proje gorselleri dogrulanana kadar
// noindex tasidiklari icin sitemap'e ALINMAZ. Eski /urunler ve /ofis-calismalari
// adresleri de (URL gocu henuz canliya alinmadi) sitemap disindadir.
// Tur 2B: galeriler acildiginda /projeler ve /kurumsal-projeler geri eklenecek.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/hizmetler/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/hakkimizda/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/iletisim/", priority: 0.8, changeFrequency: "yearly" },
  ]

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}

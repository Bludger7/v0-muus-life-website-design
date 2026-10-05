import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/contact-info"

// Yalnizca yayinda ve indexlenebilir olan canonical sayfalar.
//
// /projeler gercek teslim fotograflariyla acildi (Ekim 2026). /kurumsal-projeler hala noindex.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/hizmetler/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projeler/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hakkimizda/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/iletisim/", priority: 0.8, changeFrequency: "yearly" },
    { path: "/kvkk-aydinlatma/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/gizlilik/", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cerez-politikasi/", priority: 0.2, changeFrequency: "yearly" },
  ]

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}

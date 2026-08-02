// Noyer Home proje galerisi verisi.
//
// ============================ TUR 2A DURUMU ============================
// Galeri LISTESI BILINCLI OLARAK BOSTUR.
//
// Onceki 24 gorselin gercek uygulama fotografi mi yoksa tasarim gorsellestirmesi
// (render) mi oldugu dogrulanamadi. Dogrulanmamis gorseli "projemiz" gibi
// yayinlamamak icin tamami galeriden cikarildi ve WebP dosyalari public disina,
// arsiv/webp-dogrulama-bekleyen/ klasorune tasindi.
//
// TUR 2B'de yapilacak:
//   1. Onaylanan gorselleri arsiv/webp-dogrulama-bekleyen/ -> public/img/ tasi
//   2. Asagidaki `projects` dizisine p(...) kayitlarini ekle
//   3. /projeler + /kurumsal-projeler sayfalarinda galeriyi geri ac,
//      menu/footer baglantilarini ve sitemap kayitlarini geri ekle,
//      vercel.json'daki 301 yonlendirmelerini etkinlestir
//
// Alt metin kurali (degismedi): yalnizca gorselde GORULEN mobilyayi/mekani
// tarif et; "gercek proje", "tamamlanan uygulama", "tarafimizdan uretildi",
// "musteri projesi" gibi iddialar KULLANILMAZ. Proje kunyesi (ad, ilce,
// musteri, tarih, malzeme markasi) dogrulanmadigi icin eklenmez.
// =======================================================================

export type ProjectCategory =
  | "mutfak"
  | "giyinme"
  | "yasam"
  | "antre"
  | "ofis"
  | "magaza"
  | "restoran"

export interface ProjectPhoto {
  /** public/img altindaki dosya adi (uzantisiz) */
  slug: string
  category: ProjectCategory
  /** Buyuk gorsel (lightbox) */
  src: string
  /** Kart/thumbnail surumu */
  thumb: string
  altTr: string
  altEn: string
  order: number
  featured: boolean
}

export const projectCategories: {
  key: ProjectCategory
  labelTr: string
  labelEn: string
}[] = [
  { key: "mutfak", labelTr: "Mutfak", labelEn: "Kitchen" },
  { key: "giyinme", labelTr: "Giyinme Odası", labelEn: "Dressing Room" },
  { key: "yasam", labelTr: "Yaşam Alanı", labelEn: "Living Space" },
  { key: "antre", labelTr: "Antre ve Vestiyer", labelEn: "Entryway" },
  { key: "ofis", labelTr: "Ofis", labelEn: "Office" },
  { key: "magaza", labelTr: "Mağaza", labelEn: "Retail" },
  { key: "restoran", labelTr: "Restoran ve Kafe", labelEn: "Restaurant & Cafe" },
]

const p = (
  slug: string,
  category: ProjectCategory,
  altTr: string,
  altEn: string,
  order: number,
  featured = false,
): ProjectPhoto => ({
  slug,
  category,
  src: `/img/${slug}.webp`,
  thumb: `/img/${slug}-thumb.webp`,
  altTr,
  altEn,
  order,
  featured,
})

export const projects: ProjectPhoto[] = [
  // TUR 2A: dogrulama bekleniyor - kayitlar Tur 2B'de geri eklenecek.
]

/** Ana sayfada gosterilen 3 one cikan gorsel. */
export const featuredProjects = projects.filter((x) => x.featured).slice(0, 3)

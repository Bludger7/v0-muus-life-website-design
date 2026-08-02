// TUR 2A: Bu bilesen su anda ana sayfada render edilmiyor. Gosterdigi one cikan
// gorsellerin gercek uygulama fotografi oldugu dogrulanmadi. Tur 2B'de geri acilacak.
"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { featuredProjects } from "@/lib/projects"

// Kart etiketleri kategori adidir; uydurma proje ismi kullanilmaz.
const cardLabelKey: Record<string, string> = {
  mutfak: "portfolio.card.kitchen",
  giyinme: "portfolio.card.wardrobe",
  ofis: "portfolio.card.corporate",
}

export function Portfolio() {
  const { t, language } = useLanguage()

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            {t("portfolio.title")}
          </h2>
          <div className="h-1 w-16 md:w-20 bg-[#704f36]" />
          <p className="text-sm md:text-base lg:text-lg text-slate-500">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {featuredProjects.map((photo) => (
            <Link
              key={photo.slug}
              href="/projeler"
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-4/3 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#704f36] focus-visible:ring-offset-2"
            >
              <Image
                src={photo.thumb}
                alt={language === "en" ? photo.altEn : photo.altTr}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-sm md:text-base font-semibold text-white drop-shadow">
                  {t(cardLabelKey[photo.category] ?? "portfolio.title")}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 rounded-lg bg-[#704f36] text-white font-medium text-sm md:text-base hover:bg-[#5c402b] transition-colors shadow-lg hover:shadow-xl"
          >
            {t("portfolio.showMore")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

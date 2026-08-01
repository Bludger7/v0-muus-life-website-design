"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChefHat, Shirt, Tv, Bath, Baby, Building2, Ruler } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// image: null -> imageless card (no suitable photo in public/images yet)
const categories = [
  { key: "kitchen", icon: ChefHat, image: "/images/mutfak12.jpg" },
  { key: "wardrobe", icon: Shirt, image: "/images/giyinmeodasi1.jpg" },
  { key: "living", icon: Tv, image: "/images/yasam2.jpg" },
  { key: "bathroom", icon: Bath, image: null },
  { key: "kids", icon: Baby, image: null },
  { key: "office", icon: Building2, image: "/images/ofis2.jpg" },
  { key: "other", icon: Ruler, image: "/images/antre3.jpg" },
]

export function ServiceCategories() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t("cat.title")}
          </h2>
          <div className="w-16 h-1 bg-[#704f36] mx-auto mb-6" />
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t("cat.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.key}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {cat.image ? (
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={t(`cat.${cat.key}`)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-lg">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white text-balance">{t(`cat.${cat.key}`)}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="h-44 md:h-48 flex flex-col items-center justify-center gap-3 bg-[#704f36]/5 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-[#704f36]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#704f36]" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 px-4 text-center text-balance">
                      {t(`cat.${cat.key}`)}
                    </h3>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{t(`cat.${cat.key}.desc`)}</p>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b] transition-colors w-full sm:w-auto sm:self-start"
                  >
                    {t("cat.quote")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

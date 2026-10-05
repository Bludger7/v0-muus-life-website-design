"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, ChefHat, Shirt, Tv, Bath, DoorOpen, Building2, Images, X, ChevronLeft, ChevronRight } from "lucide-react"
import { productionCovers, productionGallery } from "@/lib/production-gallery"
import { useLanguage } from "@/lib/language-context"

// Kart kapaklari ve galeri: lib/production-gallery.ts (Drive > Noyer_Home WEBSITE).
// Galerideki gorseller malzeme/model ornekleridir, proje fotografi olarak sunulmaz.
// "Ofis ve Kurumsal" icin gorsel gelene kadar ikonlu kart.
//
// "Genc ve Cocuk Odalari" gercek gorsel bulunana kadar grid disinda; teklif
// formunda secenek olarak duruyor.
const categories = [
  { key: "kitchen", icon: ChefHat, image: productionCovers.kitchen as string | null },
  { key: "wardrobe", icon: Shirt, image: productionCovers.wardrobe as string | null },
  { key: "living", icon: Tv, image: productionCovers.living as string | null },
  { key: "bathroom", icon: Bath, image: productionCovers.bathroom as string | null },
  { key: "antre", icon: DoorOpen, image: productionCovers.antre as string | null },
  { key: "office", icon: Building2, image: null as string | null },
]

export function ServiceCategories() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<string | null>(null)

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
                  <button
                    type="button"
                    onClick={() => setOpen(cat.key)}
                    aria-label={`${t(`cat.${cat.key}`)} — ${t("cat.gallery")}`}
                    className="relative h-44 md:h-48 overflow-hidden text-left cursor-zoom-in"
                  >
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
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-800">
                      <Images className="w-3.5 h-3.5" />
                      {productionGallery[cat.key]?.reduce((n, g) => n + g.images.length, 0)} {t("cat.models")}
                    </span>
                  </button>
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
      {open && <GalleryModal catKey={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

function GalleryModal({ catKey, onClose }: { catKey: string; onClose: () => void }) {
  const { t } = useLanguage()
  const groups = productionGallery[catKey] ?? []
  const [tab, setTab] = useState(0)
  const [big, setBig] = useState<number | null>(null)
  const imgs = groups[tab]?.images ?? []

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") (big !== null ? setBig(null) : onClose())
      if (big !== null && e.key === "ArrowRight") setBig((big + 1) % imgs.length)
      if (big !== null && e.key === "ArrowLeft") setBig((big - 1 + imgs.length) % imgs.length)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [big, imgs.length, onClose])

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center" onClick={onClose} role="dialog" aria-modal="true" aria-label={t(`cat.${catKey}`)}>
      <div className="relative w-full sm:max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-slate-900">{t(`cat.${catKey}`)}</h3>
            <p className="text-xs md:text-sm text-slate-500 mt-1">{t("cat.galleryNote")}</p>
          </div>
          <button type="button" onClick={onClose} aria-label={t("cat.close")} className="shrink-0 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>
        {groups.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {groups.map((g, i) => (
              <button key={g.material} type="button" onClick={() => setTab(i)}
                className={`h-9 px-3 rounded-full text-sm border transition-colors ${i === tab ? "bg-[#704f36] text-white border-[#704f36]" : "bg-white text-slate-700 border-slate-200 hover:border-[#704f36]"}`}>
                {g.material} <span className="opacity-70">({g.images.length})</span>
              </button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {imgs.map((im, i) => (
            <button key={im.src} type="button" onClick={() => setBig(i)} className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-100">
              <img src={im.thumb} alt={`${t(`cat.${catKey}`)} ${groups[tab].material} ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </button>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <Link href="/iletisim" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]">
            {t("cat.quote")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      {big !== null && imgs[big] && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center" onClick={(e) => { e.stopPropagation(); setBig(null) }}>
          <img src={imgs[big].src} alt="" className="max-w-[94vw] max-h-[88vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button type="button" aria-label={t("cat.close")} onClick={(e) => { e.stopPropagation(); setBig(null) }} className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"><X className="w-5 h-5" /></button>
          {imgs.length > 1 && (<>
            <button type="button" aria-label="Önceki" onClick={(e) => { e.stopPropagation(); setBig((big - 1 + imgs.length) % imgs.length) }} className="absolute left-2 md:left-6 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"><ChevronLeft className="w-6 h-6" /></button>
            <button type="button" aria-label="Sonraki" onClick={(e) => { e.stopPropagation(); setBig((big + 1) % imgs.length) }} className="absolute right-2 md:right-6 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"><ChevronRight className="w-6 h-6" /></button>
          </>)}
          <span className="absolute bottom-4 text-white/70 text-sm">{big + 1} / {imgs.length}</span>
        </div>
      )}
    </div>
  )
}

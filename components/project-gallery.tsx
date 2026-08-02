// TUR 2A: Bu bilesen su anda HICBIR SAYFADA render edilmiyor. lib/projects.ts
// icindeki galeri listesi dogrulama beklendigi icin bostur; /projeler sayfasi
// gecici olarak <GalleryPlaceholder /> gosteriyor. Tur 2B'de geri acilacak.
"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { projects, projectCategories, type ProjectCategory } from "@/lib/projects"

type Filter = ProjectCategory | "all"

export function ProjectGallery() {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  const visible = useMemo(
    () =>
      projects
        .filter((x) => filter === "all" || x.category === filter)
        .sort((a, b) => a.order - b.order),
    [filter],
  )

  const alt = useCallback(
    (i: number) => (language === "en" ? visible[i]?.altEn : visible[i]?.altTr) ?? "",
    [visible, language],
  )

  const open = (i: number) => {
    lastFocused.current = document.activeElement as HTMLElement
    setLightboxIndex(i)
  }
  const close = useCallback(() => {
    setLightboxIndex(null)
    lastFocused.current?.focus()
  }, [])
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? i : (i + 1) % visible.length)), [visible.length])
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  )

  // Klavye: Escape kapatir, ok tuslari gezinir
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close() }
      else if (e.key === "ArrowRight") { e.preventDefault(); next() }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex, close, next, prev])

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("gallery.all") },
    ...projectCategories.map((c) => ({
      key: c.key as Filter,
      label: language === "en" ? c.labelEn : c.labelTr,
    })),
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {t("gallery.title")}
          </h1>
          <div className="w-16 h-1 bg-[#704f36] mx-auto mb-6" />
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t("gallery.subtitle")}</p>
        </div>

        {/* Kategori filtreleri */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12" role="group" aria-label={t("gallery.filterLabel")}>
          {filters.map((f) => {
            const active = filter === f.key
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors cursor-pointer border ${
                  active
                    ? "bg-[#704f36] text-white border-[#704f36]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.map((photo, i) => (
            <button
              key={photo.slug}
              type="button"
              onClick={() => open(i)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#704f36] focus-visible:ring-offset-2"
            >
              <Image
                src={photo.thumb}
                alt={language === "en" ? photo.altEn : photo.altTr}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-500 text-sm py-10">{t("gallery.empty")}</p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && visible[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={alt(lightboxIndex)}
          onClick={close}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label={t("gallery.close")}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label={t("gallery.prev")}
            className="absolute left-2 sm:left-5 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label={t("gallery.next")}
            className="absolute right-2 sm:right-5 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[82vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visible[lightboxIndex].src}
              alt={alt(lightboxIndex)}
              fill
              sizes="(max-width: 768px) 92vw, 1200px"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 max-w-[90vw] text-center text-white text-xs sm:text-sm bg-black/60 px-4 py-2 rounded-full">
            <span className="font-medium">{alt(lightboxIndex)}</span>
            <span className="text-white/60"> · {lightboxIndex + 1}/{visible.length}</span>
          </p>
        </div>
      )}
    </section>
  )
}

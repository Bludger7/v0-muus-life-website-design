// TUR 2A: Bu bilesen su anda HICBIR SAYFADA render edilmiyor. Gosterdigi 30
// gorselin gercek uygulama fotografi oldugu dogrulanmadigi icin /kurumsal-projeler
// ve /ofis-calismalari sayfalari gecici olarak <GalleryPlaceholder /> gosteriyor.
// Gorsel dosyalari arsiv/webp-dogrulama-bekleyen/ klasorunde. Tur 2B'de geri acilacak.
"use client"

import { useState, useEffect, useCallback, TouchEvent } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

type GalleryImage = { slug: string; altTr: string; altEn: string }

const img = (slug: string, altTr: string, altEn: string): GalleryImage => ({ slug, altTr, altEn })

// Alt metinler yalnizca gorselde gorulen mobilyayi/mekani tarif eder.
// Gorsellerin gercek cekim mi tasarim gorsellestirmesi mi oldugu dogrulanmadigi
// icin "tamamlanan uygulama", "tarafimizdan uretildi" gibi iddialar kullanilmaz.
const officeImages: GalleryImage[] = [
  img("ofis-02", "Ofis bekleme alanı mobilya tasarımı", "Office waiting area furniture design"),
  img("ofis-03", "Ahşap kaplamalı kurumsal karşılama bankosu", "Corporate reception desk with wood cladding"),
  img("ofis-04", "Ofis girişi karşılama bankosu", "Reception desk at an office entrance"),
  img("ofis-05", "Ofis karşılama bankosu ve arkalık paneli", "Office reception desk and back panel"),
  img("ofis-06", "Çalışma masası ve duvar ünitesi", "Work desk and wall unit"),
  img("ofis-07", "Toplantı odası masası ve depolama üniteleri", "Meeting room table and storage units"),
  img("ofis-08", "Toplantı masası ve sunum duvarı", "Meeting table and presentation wall"),
  img("ofis-09", "Toplantı odası masası", "Meeting room table"),
  img("ofis-10", "Yönetici odası çalışma masası ve raf ünitesi", "Executive desk and shelving unit"),
  img("ofis-11", "Yönetici masası ve arkalık depolama", "Executive desk and rear storage"),
  img("ofis-12", "Yönetici odası mobilya tasarımı", "Executive office furniture design"),
  img("ofis-13", "Ofis çalışma masası ve dolap birimi", "Office desk and cabinet unit"),
  img("ofis-14", "Yönetici odası çalışma masası ve arkalık ünitesi", "Executive desk and rear storage unit"),
]

const storeImages: GalleryImage[] = [
  img("magaza-02", "Mağaza teşhir ve kasa alanı", "Retail display and checkout area"),
  img("magaza-01", "Mağaza teşhir ve raf sistemi tasarımı", "Retail display and shelving system design"),
  img("magaza-03", "Camlı teşhir üniteleri ve mağaza bankosu", "Glass display units and retail counter"),
  img("magaza-04", "Mağaza duvar rafları ve teşhir üniteleri", "Retail wall shelving and display units"),
  img("magaza-06", "Mağaza karşılama bankosu", "Retail reception counter"),
  img("magaza-08", "Mağaza kasa bankosu", "Retail checkout counter"),
  img("magaza-09", "Mağaza kasa bankosu ve teşhir alanı", "Retail checkout counter and display area"),
]

const restaurantImages: GalleryImage[] = [
  img("restoran-01", "Restoran oturma alanı mobilyaları", "Restaurant seating area furniture"),
  img("restoran-02", "Kafe sabit oturma birimleri", "Fixed seating units for a cafe"),
  img("restoran-03", "Kafe servis bankosu", "Cafe service counter"),
  img("restoran-04", "Lounge oturma alanı mobilyaları", "Lounge seating area furniture"),
  img("restoran-06", "Lobi oturma alanı mobilyaları", "Lobby seating area furniture"),
  img("restoran-07", "Karşılama bankosu", "Reception counter"),
  img("restoran-08", "Kafe iç mekân oturma birimleri", "Interior seating units for a cafe"),
  img("restoran-09", "Kafe servis alanı ve oturma birimleri", "Cafe service area and seating units"),
  img("restoran-10", "Karşılama bankosu ve arkalık paneli", "Reception counter and back panel"),
  img("restoran-11", "Kafe oturma alanı iç mekân tasarımı", "Cafe seating area interior design"),
]

const categories = [
  { key: "ofis", images: officeImages },
  { key: "magaza", images: storeImages },
  { key: "restorant", images: restaurantImages },
]

export function OfficeProjects() {
  const [activeTab, setActiveTab] = useState("ofis")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const { t, language } = useLanguage()

  const minSwipeDistance = 50

  const currentImages = categories.find(c => c.key === activeTab)?.images || []

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }, [currentImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }, [currentImages.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      switch (e.key) {
        case "Escape": closeLightbox(); break
        case "ArrowLeft": prevImage(); break
        case "ArrowRight": nextImage(); break
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, prevImage, nextImage])

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [lightboxOpen])

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) nextImage()
    if (distance < -minSwipeDistance) prevImage()
  }

  const tabLabels: Record<string, { tr: string; en: string }> = {
    ofis: { tr: "Ofis & Çalışma Alanları", en: "Office & Workspaces" },
    magaza: { tr: "Mağaza & Perakende", en: "Store & Retail" },
    restorant: { tr: "Restoran & Kafe", en: "Restaurant & Cafe" },
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {t("nav.office")}
          </h1>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {t("services.corporate.desc")}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              aria-pressed={activeTab === cat.key}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer ${
                activeTab === cat.key
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {language === "en" ? tabLabels[cat.key]?.en : tabLabels[cat.key]?.tr}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {currentImages.map((photo, idx) => (
            <div
              key={photo.slug}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={`/img/${photo.slug}-thumb.webp`}
                alt={language === "en" ? photo.altEn : photo.altTr}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={closeLightbox}
            aria-label={t("gallery.close")}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-slate-300 transition-colors z-20 p-2 bg-black/50 rounded-full"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label={t("gallery.prev")}
            className="absolute left-2 sm:left-4 text-white hover:text-slate-300 transition-colors z-20 p-2 bg-black/50 rounded-full hidden sm:flex items-center justify-center"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label={t("gallery.next")}
            className="absolute right-2 sm:right-4 text-white hover:text-slate-300 transition-colors z-20 p-2 bg-black/50 rounded-full hidden sm:flex items-center justify-center"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/img/${currentImages[currentImageIndex].slug}.webp`}
              alt={
                language === "en"
                  ? currentImages[currentImageIndex].altEn
                  : currentImages[currentImageIndex].altTr
              }
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {currentImages.length}
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:hidden">
            Kaydırarak geçiş yapın
          </div>
        </div>
      )}
    </section>
  )
}

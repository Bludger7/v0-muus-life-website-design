"use client"

import { useState, useEffect, useCallback, TouchEvent } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const officeImages = [
  "/images/ofis2.jpg",
  "/images/ofis3.jpg",
  "/images/ofis4.jpg",
  "/images/ofis5.jpg",
  "/images/ofis6.jpg",
  "/images/ofis7.jpg",
  "/images/ofis8.jpg",
  "/images/ofis9.jpg",
  "/images/ofis10.jpg",
  "/images/ofis11.jpg",
  "/images/ofis12.jpg",
  "/images/ofis13.jpg",
  "/images/ofis14.jpg",
]

const storeImages = [
  "/images/magaza2.jpg",
  "/images/magaza1.jpg",
  "/images/magaza,3.jpg",
  "/images/magaza4.jpg",
  "/images/magaza6.jpg",
  "/images/magaza8.jpg",
  "/images/magaza9.jpg",
]

const restaurantImages = [
  "/images/restorant1.jpg",
  "/images/restorant2.jpg",
  "/images/restorant3.jpg",
  "/images/restorant4.jpg",
  "/images/restorant6.jpg",
  "/images/restorant7.jpg",
  "/images/restorant8.jpg",
  "/images/restorant9.jpg",
  "/images/restorant10.jpg",
  "/images/restorant11.jpg",
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
  const { t } = useLanguage()

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
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer ${
                activeTab === cat.key
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tabLabels[cat.key]?.tr}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {currentImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${activeTab} ${idx + 1}`}
                fill
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
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-slate-300 transition-colors z-20 p-2 bg-black/50 rounded-full"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-2 sm:left-4 text-white hover:text-slate-300 transition-colors z-20 p-2 bg-black/50 rounded-full hidden sm:flex items-center justify-center"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-2 sm:right-4 text-white hover:text-slate-300 transition-colors z-20 p-2 bg-black/50 rounded-full hidden sm:flex items-center justify-center"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImages[currentImageIndex] || "/placeholder.svg"}
              alt="Lightbox Image"
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

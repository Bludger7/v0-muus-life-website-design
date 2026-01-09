"use client"

import { Building2, Home, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback, TouchEvent } from "react"
import { useLanguage } from "@/lib/language-context"



const categoryImages = {
  ofis: [
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
  ],
  magaza: [
    "/images/magaza2.jpg",
    "/images/magaza1.jpg",
    "/images/magaza,3.jpg",
    "/images/magaza4.jpg",
    "/images/magaza6.jpg",
    "/images/magaza8.jpg",
    "/images/magaza9.jpg",
  ],
  restorant: [
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
  ],
  mutfak: [
    "/images/mutfak12.jpg",
    "/images/mutfak1.jpg",
    "/images/mutfak2.jpg",
    "/images/mutfak5.jpg",
    "/images/mutfak6.jpg",
    "/images/mutfak7.jpg",
    "/images/mutfak15.jpg",
    "/images/mutfak8.jpg",
    "/images/mutfak20.jpg",
    "/images/mutfak21.jpg",
    "/images/mutfak22.jpg",
    "/images/mutfak23.jpg",
  ],
  giyinmeodasi: [
    "/images/giyinmeodasi1.jpg",
    "/images/giyinmeodasi3.jpg",
    "/images/giyinmeodasi4.jpg",
    "/images/giyinmeodası7.jpg",
    "/images/giyinmeodasi8.jpg",
    "/images/giyinmeodası9.jpg",
  ],
  yasam: [
    "/images/yasam2.jpg",
    "/images/yasam5.jpg",
    "/images/yasam6.jpg",
    "/images/yasam7.jpg",
    "/images/yasam8.jpg",
    "/images/yasam9.jpg",
    "/images/yasam10.jpg",
    "/images/yasam11.jpg",
    "/images/yasam12.jpg",
    "/images/yasam13.jpg",
    "/images/yasam16.jpg",
    "/images/yasam17.jpg",
    "/images/yasam20.jpg",
    "/images/yasam21.jpg",
  ],
  antre: [
    "/images/antre3.jpg",
    "/images/antre4.jpg",
    "/images/antre5.jpg",
    "/images/antre6.jpg",
    "/images/antre7.jpg",
    "/images/antre8.jpg",
    "/images/antre10.jpg",
  ],
}

export function Services() {
  const [expandedCategory, setExpandedCategory] = useState<Set<string>>(new Set())
  const [showAllImages, setShowAllImages] = useState<Record<string, boolean>>({})
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState<string>("")
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const { t } = useLanguage()

  // Minimum swipe distance
  const minSwipeDistance = 50

  const toggleCategory = (category: string) => {
    setExpandedCategory(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  const openLightbox = (category: string, index: number) => {
    setCurrentCategory(category)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    if (!currentCategory) return
    const images = categoryImages[currentCategory as keyof typeof categoryImages]
    if (!images) return
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }, [currentCategory])

  const prevImage = useCallback(() => {
    if (!currentCategory) return
    const images = categoryImages[currentCategory as keyof typeof categoryImages]
    if (!images) return
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [currentCategory])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          prevImage()
          break
        case "ArrowRight":
          nextImage()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, prevImage, nextImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  // Touch handlers for swipe
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
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }
  }

  const toggleShowAll = (category: string) => {
    setShowAllImages(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  return (
    <section id="services" className="py-24 bg-(--color-background)">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-(--color-foreground) tracking-tight mb-4">{t("services.title")}</h2>
          <div className="w-16 h-1 bg-(--color-accent) mx-auto mb-6"></div>
          <p className="text-(--color-muted-foreground)">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Kurumsal Projeler */}
          <div className="bg-(--color-card) shadow-sm border border-(--color-border) transition-all hover:shadow-md overflow-hidden rounded-md">
            <div className="bg-(--color-foreground) text-(--color-background) p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-(--color-accent) flex items-center justify-center rounded-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{t("services.corporate")}</h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-(--color-muted-foreground) mb-8 leading-relaxed">
                {t("services.corporate.desc")}
              </p>

              <div className="space-y-6">
                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("ofis")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.office")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.office.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("ofis") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("ofis") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.ofis.slice(0, showAllImages["ofis"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("ofis", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Ofis ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.ofis.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("ofis")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["ofis"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.ofis.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("magaza")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.store")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.store.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("magaza") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("magaza") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.magaza.slice(0, showAllImages["magaza"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("magaza", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Mağaza ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.magaza.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("magaza")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["magaza"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.magaza.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("restorant")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.restaurant")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.restaurant.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("restorant") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("restorant") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.restorant.slice(0, showAllImages["restorant"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("restorant", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Restoran ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.restorant.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("restorant")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["restorant"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.restorant.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-4 bg-(--color-card) border border-(--color-border) rounded-sm">
                  <h4 className="font-semibold text-(--color-foreground) mb-2">{t("services.project")}</h4>
                  <p className="text-sm text-(--color-muted-foreground)">
                    {t("services.project.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kişiye Özel Projeler */}
          <div className="bg-(--color-card) shadow-sm border border-(--color-border) transition-all hover:shadow-md overflow-hidden rounded-md">
            <div className="bg-(--color-foreground) text-(--color-background) p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-(--color-accent) flex items-center justify-center rounded-sm">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{t("services.custom")}</h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-(--color-muted-foreground) mb-8 leading-relaxed">
                {t("services.custom.desc")}
              </p>

              <div className="space-y-6">
                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("mutfak")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.kitchen")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.kitchen.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("mutfak") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("mutfak") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.mutfak.slice(0, showAllImages["mutfak"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("mutfak", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Mutfak ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.mutfak.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("mutfak")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["mutfak"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.mutfak.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("giyinmeodasi")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.wardrobe")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.wardrobe.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("giyinmeodasi") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("giyinmeodasi") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.giyinmeodasi.slice(0, showAllImages["giyinmeodasi"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("giyinmeodasi", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Giyinme Odası ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.giyinmeodasi.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("giyinmeodasi")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["giyinmeodasi"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.giyinmeodasi.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("yasam")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.living")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.living.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("yasam") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("yasam") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.yasam.slice(0, showAllImages["yasam"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("yasam", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Yaşam Alanı ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.yasam.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("yasam")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["yasam"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.yasam.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="border border-(--color-border) rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("antre")}
                    className="w-full flex items-center justify-between p-4 bg-(--color-card) hover:bg-(--color-background) transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-(--color-foreground) mb-1">{t("services.entry")}</h4>
                      <p className="text-sm text-(--color-muted-foreground)">
                        {t("services.entry.desc")}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-(--color-accent) transition-transform ${
                        expandedCategory.has("antre") ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory.has("antre") && (
                    <div className="p-4 bg-(--color-background) border-t border-(--color-border) animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.antre.slice(0, showAllImages["antre"] ? undefined : 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => openLightbox("antre", idx)}
                          >
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Antre ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                      {categoryImages.antre.length > 3 && (
                        <button
                          onClick={() => toggleShowAll("antre")}
                          className="mt-4 w-full py-2 text-sm font-medium text-(--color-accent) hover:opacity-80 border border-(--color-accent) rounded-sm hover:bg-slate-100 transition-colors"
                        >
                          {showAllImages["antre"] ? t("services.showLess") : `${t("services.showMore")} (${categoryImages.antre.length - 3})`}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && currentCategory && categoryImages[currentCategory as keyof typeof categoryImages] && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4" 
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-(--color-accent) transition-colors z-20 p-2 bg-black/50 rounded-full"
            aria-label="Kapat"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-2 sm:left-4 text-white hover:text-(--color-accent) transition-colors z-20 p-2 bg-black/50 rounded-full hidden sm:flex items-center justify-center"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-2 sm:right-4 text-white hover:text-(--color-accent) transition-colors z-20 p-2 bg-black/50 rounded-full hidden sm:flex items-center justify-center"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>

          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                categoryImages[currentCategory as keyof typeof categoryImages][currentImageIndex] || "/placeholder.svg"
              }
              alt="Lightbox Image"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>

          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {categoryImages[currentCategory as keyof typeof categoryImages].length}
          </div>

          {/* Mobile swipe hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:hidden">
            Kaydırarak geçiş yapın
          </div>
        </div>
      )}
    </section>
  )
}

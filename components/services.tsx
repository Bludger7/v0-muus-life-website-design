"use client"

import { Building2, Home, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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
    "/images/restorant5.jpg",
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
    "/images/mutfak17.jpg",
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
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentCategory, setCurrentCategory] = useState<string>("")

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const openLightbox = (category: string, index: number) => {
    setCurrentCategory(category)
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    const images = categoryImages[currentCategory as keyof typeof categoryImages]
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    const images = categoryImages[currentCategory as keyof typeof categoryImages]
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="services" className="py-24 bg-[#FAF9F7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0F1E2E] tracking-tight mb-4">Hizmetlerimiz</h2>
          <div className="w-16 h-1 bg-[#A34A1B] mx-auto mb-6"></div>
          <p className="text-[#0F1E2E]/70">
            Kişiye özel yaşam alanlarından kurumsal projelere kadar geniş bir yelpazede profesyonel mobilya üretim
            çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Kurumsal Projeler */}
          <div className="bg-white shadow-sm border border-[#d4d3d0] transition-all hover:shadow-md overflow-hidden rounded-md">
            <div className="bg-[#0F1E2E] text-[#FAF9F7] p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A34A1B] flex items-center justify-center rounded-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Kurumsal Projeler</h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-[#0F1E2E]/70 mb-8 leading-relaxed">
                muus.life, kurumsal firmalara özel mobilya üretiminde yüksek hassasiyet, seri üretim disiplini ve
                kurumsal kimliğe tam uyum sağlayan profesyonel çözümler sunar.
              </p>

              <div className="space-y-6">
                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("ofis")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">1. Ofis ve Çalışma Alanları</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        Yönetici odaları, çalışma masası sistemleri, toplantı alanları, depolama çözümleri.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "ofis" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "ofis" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.ofis.map((img, idx) => (
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
                    </div>
                  )}
                </div>

                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("magaza")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">2. Mağaza ve Perakende Alanları</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        Teşhir üniteleri, raf sistemleri, karşılama bankoları, mağaza dekorasyonu.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "magaza" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "magaza" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.magaza.map((img, idx) => (
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
                    </div>
                  )}
                </div>

                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("restorant")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">3. Restoran, Kafe ve Otel Alanları</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        Masa-sandalye grupları, sabit oturum alanları, servis üniteleri, otel mobilyaları.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "restorant" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "restorant" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.restorant.map((img, idx) => (
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
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white border border-[#d4d3d0] rounded-sm">
                  <h4 className="font-semibold text-[#0F1E2E] mb-2">4. Proje Yönetimi</h4>
                  <p className="text-sm text-[#0F1E2E]/60">
                    Marka uyumlu üretim, yerinde keşif, üretim takvimi oluşturma ve anahtar teslim montaj.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kişiye Özel Projeler */}
          <div className="bg-white shadow-sm border border-[#d4d3d0] transition-all hover:shadow-md overflow-hidden rounded-md">
            <div className="bg-[#0F1E2E] text-[#FAF9F7] p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A34A1B] flex items-center justify-center rounded-sm">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Kişiye Özel Projeler</h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-[#0F1E2E]/70 mb-8 leading-relaxed">
                muus.life, yaşam alanlarını tamamen kişiye uygun hale getiren ölçüye özel mobilya üretiminde uzman bir
                yapıya sahiptir.
              </p>

              <div className="space-y-6">
                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("mutfak")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">1. Mutfak Tasarımı</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        Ölçüye özel dolap sistemleri, modern ve klasik tasarım seçenekleri, üst düzey donanım.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "mutfak" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "mutfak" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.mutfak.map((img, idx) => (
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
                    </div>
                  )}
                </div>

                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("giyinmeodasi")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">2. Giyinme Odası ve Depolama</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        Walk-in giyinme odaları, ray dolaplar, özel modül kombinasyonları.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "giyinmeodasi" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "giyinmeodasi" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.giyinmeodasi.map((img, idx) => (
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
                    </div>
                  )}
                </div>

                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("yasam")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">3. Yaşam ve Dinlenme Alanları</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        TV üniteleri, kitaplıklar, yatak odası mobilyaları, başlık ve baza sistemleri.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "yasam" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "yasam" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.yasam.map((img, idx) => (
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
                    </div>
                  )}
                </div>

                <div className="border border-[#d4d3d0] rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleCategory("antre")}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F7] transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-[#0F1E2E] mb-1">4. Antre</h4>
                      <p className="text-sm text-[#0F1E2E]/60">
                        Vestiyer sistemleri, yerinde ölçüm, malzeme seçimi ve uçtan uca süreç yönetimi.
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A34A1B] transition-transform ${
                        expandedCategory === "antre" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedCategory === "antre" && (
                    <div className="p-4 bg-[#FAF9F7] border-t border-[#d4d3d0] animate-in slide-in-from-top duration-300">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categoryImages.antre.map((img, idx) => (
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#A34A1B] transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 text-white hover:text-[#A34A1B] transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 text-white hover:text-[#A34A1B] transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="relative w-full max-w-4xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image
              src={
                categoryImages[currentCategory as keyof typeof categoryImages][currentImageIndex] || "/placeholder.svg"
              }
              alt="Lightbox Image"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {categoryImages[currentCategory as keyof typeof categoryImages].length}
          </div>
        </div>
      )}
    </section>
  )
}

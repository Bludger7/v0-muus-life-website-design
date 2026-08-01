"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    categoryKey: "portfolio.cat.villa",
    image: "/modern-luxury-villa-exterior-architecture.jpg",
  },
  {
    id: 2,
    categoryKey: "portfolio.cat.office",
    image: "/modern-office-interior-sunlight.jpg",
  },
  {
    id: 3,
    categoryKey: "portfolio.cat.bedroom",
    image: "/luxury-bedroom.png",
  },
  {
    id: 4,
    categoryKey: "portfolio.cat.restaurant",
    image: "/upscale-restaurant-interior-dark-moody.jpg",
  },
  {
    id: 5,
    categoryKey: "portfolio.cat.commercial",
    image: "/modern-commercial-building-glass-facade.jpg",
  },
  {
    id: 6,
    categoryKey: "portfolio.cat.public",
    image: "/bright-modern-public-building-atrium.jpg",
  },
]

export function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)
  const { t } = useLanguage()

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">{t("portfolio.title")}</h2>
          <div className="h-1 w-16 md:w-20 bg-slate-800" />
          <p className="text-sm md:text-base lg:text-lg text-slate-500">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-4/3"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={t(project.categoryKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm z-10 text-right">
                <div className="text-xs font-semibold text-slate-900 leading-tight">{t(project.categoryKey)}</div>
                <div className="text-[10px] text-slate-500 leading-tight mt-0.5">Noyer Home</div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button 
              onClick={() => setShowAll(true)}
              size="lg" 
              className="rounded-md px-8 py-6 text-base shadow-lg transition-all hover:scale-105"
            >
              {t("portfolio.showMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

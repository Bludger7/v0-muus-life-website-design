"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mouse, ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/minimalist-bright-living-room-render-white-walls.jpg",
    alt: "Minimalist Interior Design",
  },
  {
    src: "/modern-luxury-villa-exterior-architecture.jpg",
    alt: "Modern Architecture",
  },
  {
    src: "/modern-furniture-production-workshop.jpg",
    alt: "Furniture Production Workshop",
  },
  {
    src: "/modern-office-space.png",
    alt: "Modern Office Space",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-(--color-foreground)" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-(--color-foreground)" />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-[var(--color-foreground)] w-8' : 'bg-[var(--color-foreground)]/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Existing code */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-(--color-foreground) max-w-4xl">
          Yaşayan Mekanlar Tasarlıyoruz
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl font-light">
          Profesyonel Mobilya Üretim & Tasarım Çözümleri
        </p>
        <Link href="#portfolio">
          <Button size="lg" className="rounded-md px-8 py-6 text-base mt-4 shadow-lg transition-all hover:scale-105">
            Çalışmalarımızı Keşfedin
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <Mouse className="w-6 h-6" />
      </div>
    </section>
  )
}

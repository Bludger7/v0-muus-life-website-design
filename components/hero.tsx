"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mouse, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const heroImages = [
  {
    src: "/images/slider1.jpg",
    alt: "Minimalist Interior Design",
  },
  {
    src: "/images/slider2.jpg",
    alt: "Modern Architecture",
  },
  {
    src: "/images/slider3.jpg",
    alt: "Furniture Production Workshop",
  },
  {
    src: "/images/slider4.jpg",
    alt: "Modern Office Space",
  },
  {
    src: "/images/slider5.jpg",
    alt: "Modern Office Space",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section id="home" className="relative h-[85vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
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
        {/* Stronger gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 md:h-3 rounded-full transition-all cursor-pointer hover:opacity-80 ${index === currentSlide ? 'bg-white w-8 md:w-10' : 'bg-white/50 w-2 md:w-3'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-4 md:gap-6 mt-10 md:mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-4 w-full sm:w-auto items-stretch sm:items-center">
          <a
            href="https://wa.me/905015307736?text=Merhaba%2C%20mobilya%20teklifi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="rounded-lg px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-lg transition-all hover:scale-105 w-full sm:w-auto bg-[#704f36] hover:bg-[#5c402b] text-white gap-2"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              {t("hero.ctaWhatsapp")}
            </Button>
          </a>
          <Link href="/urunler" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-lg px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-lg transition-all hover:scale-105 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto">
              {t("hero.cta")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <Mouse className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mouse } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/minimalist-bright-living-room-render-white-walls.jpg"
          alt="Minimalist Interior"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl">
          Ruhlu Mekanlar Tasarlıyoruz
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light">
          Profesyonel Mobilya Üretim & Tasarım Çözümleri
        </p>
        <Link href="#portfolio">
          <Button
            size="lg"
            className="bg-slate-800 hover:bg-slate-900 text-white rounded-md px-8 py-6 text-base mt-4 shadow-lg shadow-slate-200/50 transition-all hover:scale-105"
          >
            Çalışmalarımızı Keşfedin
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <Mouse className="w-6 h-6" />
      </div>
    </section>
  )
}

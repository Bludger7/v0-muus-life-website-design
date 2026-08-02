"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mouse, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { WHATSAPP_QUOTE_URL } from "@/lib/contact-info"
import { trackWhatsAppClick } from "@/lib/analytics"

// TUR 2A: Hero arka planindaki slider fotograflari (slider-1..5) kaldirildi.
// Bu gorsellerin gercek uygulama fotografi oldugu dogrulanmadigi icin yayindan
// cekildiler; dosyalar arsiv/webp-dogrulama-bekleyen/ klasorunde.
//
// Yerine PROJE FOTOGRAFI ICERMEYEN, tamamen CSS ile kurulmus marka arka plani
// kullaniliyor: antrasit (#3f3a37) zemin, ceviz (#704f36) isik lekeleri, krem
// (#f8f5f0) tonunda ince lamel dokusu ve dusuk opaklikta logo filigrani.

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative h-[85vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#3f3a37]"
    >
      {/* ---- Marka arka plani (dekoratif, tamamen CSS) ---- */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {/* Temel antrasit gradyan */}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#4a443f_0%,#3f3a37_45%,#312c29_100%)]" />

        {/* Ceviz tonlu yumusak isik lekeleri */}
        <div className="absolute -top-1/4 -left-1/4 w-[75vw] h-[75vw] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(112,79,54,0.50)_0%,rgba(112,79,54,0)_65%)]" />
        <div className="absolute -bottom-1/3 -right-1/4 w-[65vw] h-[65vw] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(112,79,54,0.34)_0%,rgba(112,79,54,0)_65%)]" />

        {/* Ince dikey lamel dokusu (mobilyadaki lamel detayina gonderme) */}
        <div className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(90deg,#f8f5f0_0px,#f8f5f0_1px,transparent_1px,transparent_28px)]" />

        {/* Logo filigrani */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt=""
            width={900}
            height={300}
            priority
            className="w-[88vw] max-w-3xl opacity-[0.06] brightness-0 invert select-none pointer-events-none"
          />
        </div>

        {/* Metin okunurlugu icin alt karartma */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3f3a37]/30 via-transparent to-[#28241f]/75" />

        {/* Ceviz vurgu cizgileri */}
        <div className="absolute top-0 inset-x-0 h-px bg-[#704f36]/60" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#704f36]" />
      </div>

      {/* ---- Icerik (metin ve CTA'lar degismedi) ---- */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-4 md:gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight text-balance">
          {t("hero.title")}
        </h1>

        <span aria-hidden="true" className="block w-16 md:w-20 h-1 bg-[#704f36] rounded-full" />

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-4 w-full sm:w-auto items-stretch sm:items-center">
          <a
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero")}
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
          {/* TUR 2A: Proje galerisi dogrulama bekledigi icin ikincil buton
              /hizmetler sayfasina yonlendirir. Tur 2B'de galeri acildiginda
              tekrar /projeler + t("hero.cta") yapilacak. */}
          <Link href="/hizmetler" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-lg transition-all hover:scale-105 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto"
            >
              {t("hero.cta2")}
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

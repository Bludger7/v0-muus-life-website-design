"use client"

import Link from "next/link"
import { MessageCircle, Images } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { WHATSAPP_QUOTE_URL } from "@/lib/contact-info"
import { trackWhatsAppClick } from "@/lib/analytics"

/**
 * Proje gorselleri dogrulanana kadar galeri sayfalarinda gosterilen gecici icerik.
 * Hicbir proje gorseli, sayi veya basari iddiasi icermez.
 * Gercek gorseller onaylandiginda Tur 2B'de galeri bilesenleri geri acilacak.
 */
export function GalleryPlaceholder({ location = "galeri" }: { location?: string }) {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
            <Images className="w-6 h-6 md:w-7 md:h-7 text-[#704f36]" aria-hidden="true" />
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            {t("placeholder.title")}
          </h1>
          <div className="w-16 h-1 bg-[#704f36] mx-auto my-5 md:my-6" />
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t("placeholder.text")}</p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(location)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#704f36] text-white text-sm md:text-base font-medium hover:bg-[#5c402b] transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.ctaWhatsapp")}
            </a>
            <Link
              href="/hizmetler"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-lg border border-slate-200 bg-white text-sm md:text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              {t("placeholder.services")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

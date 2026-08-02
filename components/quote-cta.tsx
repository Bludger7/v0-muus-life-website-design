"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { WHATSAPP_QUOTE_URL } from "@/lib/contact-info"
import { trackWhatsAppClick } from "@/lib/analytics"

export function QuoteCta({ location = "cta" }: { location?: string }) {
  const { t } = useLanguage()

  return (
    <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4 md:space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t("cta.text")}</p>
          <div className="pt-2">
            <a
              href={WHATSAPP_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(location)}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 md:px-8 rounded-lg bg-[#704f36] text-white text-sm md:text-base font-medium hover:bg-[#5c402b] transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.ctaWhatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

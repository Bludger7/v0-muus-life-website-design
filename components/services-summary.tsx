"use client"

import { Building2, Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function ServicesSummary() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">{t("services.title")}</h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Kurumsal Projeler */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 md:h-56 overflow-hidden">
              <Image
                src="/images/ofis2.jpg"
                alt="Kurumsal Projeler"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-lg">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{t("services.corporate")}</h3>
                </div>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                {t("services.corporate.desc")}
              </p>
              <Link 
                href="/hizmetler" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors group/link"
              >
                Detaylı İncele
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Kişiye Özel Projeler */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 md:h-56 overflow-hidden">
              <Image
                src="/images/mutfak12.jpg"
                alt="Kişiye Özel Projeler"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-lg">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{t("services.custom")}</h3>
                </div>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                {t("services.custom.desc")}
              </p>
              <Link 
                href="/hizmetler" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors group/link"
              >
                Detaylı İncele
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link 
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium text-sm md:text-base hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
          >
            {t("hero.cta2")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

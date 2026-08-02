"use client"

import { useLanguage } from "@/lib/language-context"

// TUR 2A: Bolumdeki atolye gorseli (atolye-uretim.webp) kaldirildi. Gorselin
// gercek bir Noyer Home atolyesine ait oldugu dogrulanmadigi halde alt metni
// "Modern Mobilya Uretim Atolyesi" iddiasini tasiyordu. Yerine yeni stok/AI/proje
// gorseli KONULMADI; bolum tek sutunlu, gorselsiz ve dengeli duzene alindi.

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Baslik */}
          <div className="text-center space-y-4 md:space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {t("about.title")}
            </h2>
            <span aria-hidden="true" className="block w-16 h-1 bg-[#704f36] mx-auto" />
          </div>

          {/* Metin */}
          <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">{t("about.p1")}</p>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">{t("about.p2")}</p>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">{t("about.p3")}</p>
          </div>

          {/* Misyon / Vizyon */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-12 pt-8 md:pt-10 border-t border-slate-100">
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-semibold text-slate-900 text-lg md:text-xl">{t("about.mission")}</h3>
              <span aria-hidden="true" className="block w-10 h-0.5 bg-[#704f36]/60" />
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{t("about.mission.text")}</p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-semibold text-slate-900 text-lg md:text-xl">{t("about.vision")}</h3>
              <span aria-hidden="true" className="block w-10 h-0.5 bg-[#704f36]/60" />
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{t("about.vision.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

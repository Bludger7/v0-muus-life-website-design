"use client"

import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{t("about.title")}</h2>
            <div className="w-16 h-1 bg-slate-900"></div>

            <p className="text-slate-600 leading-relaxed text-lg">
              {t("about.p1")}
            </p>

            <p className="text-slate-600 leading-relaxed text-lg">
              {t("about.p2")}
            </p>

            <p className="text-slate-600 leading-relaxed text-lg">
              {t("about.p3")}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-100">
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 text-xl">{t("about.mission")}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("about.mission.text")}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 text-xl">{t("about.vision")}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("about.vision.text")}
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-4/5 bg-slate-100 overflow-hidden rounded-lg">
            <img
              src="/modern-furniture-production-workshop.jpg"
              alt="Modern Mobilya Üretim Atölyesi"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

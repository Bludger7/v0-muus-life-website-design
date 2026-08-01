"use client"

import { Search, PencilRuler, Hammer, Truck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const steps = [
  { icon: Search, titleKey: "process.step1", descKey: "process.step1.desc" },
  { icon: PencilRuler, titleKey: "process.step2", descKey: "process.step2.desc" },
  { icon: Hammer, titleKey: "process.step3", descKey: "process.step3.desc" },
  { icon: Truck, titleKey: "process.step4", descKey: "process.step4.desc" },
]

export function ProcessStrip() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t("process.title")}
          </h2>
          <div className="w-16 h-1 bg-[#704f36] mx-auto mb-6" />
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t("process.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.titleKey}
                className="relative bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-5 md:p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-[#704f36]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#704f36]" />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-slate-200 leading-none select-none">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{t(step.titleKey)}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{t(step.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

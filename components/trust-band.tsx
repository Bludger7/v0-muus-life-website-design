"use client"

import { Ruler, MapPin, Wrench, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const items = [
  { icon: Ruler, key: "trust.custom" },
  { icon: MapPin, key: "trust.survey" },
  { icon: Wrench, key: "trust.install" },
  { icon: ShieldCheck, key: "trust.warranty" },
]

export function TrustBand() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-slate-100 bg-[var(--color-background)] py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.key} className="flex items-center justify-center gap-2.5 md:gap-3 text-center lg:text-left">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#704f36]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#704f36]" />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-700 leading-snug text-balance">
                  {t(item.key)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

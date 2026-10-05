"use client"

import { Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { INSTAGRAM_URL } from "@/lib/contact-info"

// @noyer.home hesabindan secilen reels. Instagram'in kendi oynaticisiyla gomulur.
// Yeni video eklemek icin reel kodunu (instagram.com/reel/KOD/) listeye ekleyin.
const REELS = ["DTYDxYSCN4n", "DTQh9McCKYU", "DSAr-ftCCxq", "DQmqdFqiMsy", "DQhbqQ5CMsy", "DO_nGaIiHrR"]

export default function InstagramFeed() {
  const { t } = useLanguage()
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t("social.media.title")}</h2>
        <div className="w-12 h-1 bg-slate-900 mx-auto mb-4"></div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm md:text-base text-slate-600 hover:text-[#704f36] transition-colors">
          <Instagram className="w-4 h-4" /> @noyer.home
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {REELS.map((code) => (
          <div key={code} className="w-full max-w-[400px] mx-auto rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
            <iframe
              src={`https://www.instagram.com/reel/${code}/embed/`}
              title={`Noyer Home Instagram ${code}`}
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
              allowFullScreen
              scrolling="no"
              className="block w-full h-[640px] border-0"
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]">
          <Instagram className="w-4 h-4" /> Instagram&apos;da takip et
        </a>
      </div>
    </section>
  )
}

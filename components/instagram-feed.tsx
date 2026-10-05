"use client"

import { useEffect, useRef } from "react"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { INSTAGRAM_URL } from "@/lib/contact-info"

// Eski Behold akisi (muus_life hesabi) Mart 2026'dan beri guncellenmiyordu ve
// Instagram CDN video linklerinin suresi doldugu icin videolar oynamiyordu.
// Yerine kendi sunucumuzdaki kisa proje videolari gosteriliyor.
const CLIPS = [
  "mamak-skyline-tower",
  "metafor-rezidans-anahtar-teslim-mobilya-projemiz",
  "eryaman-ata-dostlar-sitesi",
  "baglica-anahtar-teslim-daire",
  "bahcelievler-anahtar-teslim-mobilya",
  "yenimahalle-yda-park",
]

function Clip({ slug }: { slug: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.3 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-[9/16] overflow-hidden rounded-lg shadow-md bg-slate-100">
      <video ref={ref} src={`/video/projeler/${slug}.mp4`} poster={`/video/projeler/${slug}.jpg`} muted loop playsInline preload="none" className="w-full h-full object-cover" />
    </a>
  )
}

export default function InstagramFeed() {
  const { t } = useLanguage()
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 overflow-hidden">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{t("social.media.title")}</h2>
        <div className="w-12 h-1 bg-slate-900 mx-auto mb-4"></div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm md:text-base text-slate-600 hover:text-[#704f36] transition-colors">
          <Instagram className="w-4 h-4" /> @noyer.home
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
        {CLIPS.map((s) => <Clip key={s} slug={s} />)}
      </div>
      <div className="mt-8 flex justify-center">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]">
          <Instagram className="w-4 h-4" /> Instagram&apos;da takip et
        </a>
      </div>
    </section>
  )
}

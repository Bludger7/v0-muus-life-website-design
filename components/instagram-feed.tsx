"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { INSTAGRAM_URL } from "@/lib/contact-info"

// @noyer.home reels — dosyalar sitenin kendi sunucusunda (public/media/sosyal).
// NOT: Video yolu bilerek "/video/" icermiyor; bazi kurumsal guvenlik yazilimlari
// (or. Kaspersky Web Ilkesi) URL'de "video" gecen istekleri engelliyor.
const REELS = [
  { n: 1, url: "https://www.instagram.com/reel/DTYDxYSCN4n/" },
  { n: 2, url: "https://www.instagram.com/reel/DTQh9McCKYU/" },
  { n: 3, url: "https://www.instagram.com/reel/DSAr-ftCCxq/" },
  { n: 4, url: "https://www.instagram.com/reel/DQmqdFqiMsy/" },
  { n: 5, url: "https://www.instagram.com/reel/DQhbqQ5CMsy/" },
  { n: 6, url: "https://www.instagram.com/reel/DO_nGaIiHrR/" },
]

function Clip({ n, url }: { n: number; url: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.setAttribute("muted", "")
    v.setAttribute("playsinline", "")
    v.setAttribute("webkit-playsinline", "")
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }
  const src = `/media/sosyal/noyer-reel-${n}`
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl shadow-md bg-slate-200">
      <button type="button" onClick={toggle} aria-label={playing ? "Videoyu durdur" : "Videoyu oynat"} className="absolute inset-0 w-full h-full">
        <img src={`${src}.jpg`} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <video ref={ref} src={`${src}.mp4`} poster={`${src}.jpg`} muted autoPlay loop playsInline preload="metadata"
          onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover" />
        {!playing && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-black/55 flex items-center justify-center">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </span>
          </span>
        )}
      </button>
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Instagram'da aç"
        className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-slate-800 hover:text-[#704f36]">
        <Instagram className="w-4 h-4" />
      </a>
    </div>
  )
}

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto">
        {REELS.map((r) => <Clip key={r.n} {...r} />)}
      </div>
      <div className="mt-8 flex justify-center">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]">
          <Instagram className="w-4 h-4" /> Instagram&apos;da takip et
        </a>
      </div>
    </section>
  )
}

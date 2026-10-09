"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Images, MapPin, X, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react"
import { placeLabel, showcaseProjects, type ShowcaseProject } from "@/lib/showcase-projects"

type Filter = "all" | "konut" | "kurumsal"
const FILTERS: [Filter, string][] = [["all", "Tümü"], ["konut", "Konut"], ["kurumsal", "Ofis ve Kurumsal"]]

const cover = (p: ShowcaseProject) => p.images[0]?.thumb ?? p.video?.poster ?? ""
const onlyRender = (p: ShowcaseProject) => p.images.length > 0 && p.images.every((i) => i.render)

export function ProjectShowcase({ heading = true, limit }: { heading?: boolean; limit?: number }) {
  const [open, setOpen] = useState<ShowcaseProject | null>(null)
  const [filter, setFilter] = useState<Filter>("all")
  const filtered = useMemo(() => showcaseProjects.filter((p) => filter === "all" || p.category === filter), [filter])
  const list = limit ? filtered.slice(0, limit) : filtered

  return (
    <section id="projelerimiz" className="py-16 md:py-24 bg-[#f7f4ef]">
      <div className="container mx-auto px-4 md:px-6">
        {heading && (
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">Projelerimiz</h2>
            <div className="w-16 h-1 bg-[#704f36] mx-auto mb-6" />
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Atölyemizde ölçüye özel üretip yerinde monte ettiğimiz işler. 3D tasarım görselleri ayrıca etiketlenmiştir.
            </p>
          </div>
        )}

        {!limit && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {FILTERS.map(([k, label]) => (
              <button key={k} type="button" onClick={() => setFilter(k)}
                className={`h-10 px-4 rounded-full text-sm border transition-colors ${filter === k ? "bg-[#704f36] text-white border-[#704f36]" : "bg-white text-slate-700 border-slate-200 hover:border-[#704f36]"}`}>
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {list.map((p) => (
            <Link key={p.slug} href={`/projeler/${p.slug}/`}
              className="group flex flex-col justify-start text-left overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={cover(p)} alt={p.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 right-3 flex gap-1.5">
                  {p.images.length > 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-800">
                      <Images className="w-3.5 h-3.5" /> {p.images.length}
                    </span>
                  )}
                  {p.video && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-800">
                      <PlayCircle className="w-3.5 h-3.5" /> Video
                    </span>
                  )}
                </div>
                {onlyRender(p) && (
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#704f36] px-2.5 py-1 text-xs font-medium text-white">3D Tasarım</span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-[#704f36] mb-1.5">{p.category === "kurumsal" ? "Ofis ve Kurumsal" : "Konut"}</p>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" /> {placeLabel(p.location)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {limit && showcaseProjects.length > limit && (
          <div className="mt-10 flex justify-center">
            <Link href="/projeler" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-[#704f36] text-[#704f36] text-sm font-medium hover:bg-[#704f36] hover:text-white transition-colors">
              Tüm projeler ({showcaseProjects.length}) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

type Slide = { kind: "img"; src: string; thumb: string; render?: boolean } | { kind: "video"; src: string; thumb: string }

export function ProjectModal({ p, onClose, start = 0 }: { p: ShowcaseProject; onClose: () => void; start?: number }) {
  const slides: Slide[] = useMemo(() => {
    const s: Slide[] = p.images.filter((i) => !i.render).map((i) => ({ kind: "img" as const, ...i }))
    if (p.video) s.push({ kind: "video", src: p.video.src, thumb: p.video.poster })
    p.images.filter((i) => i.render).forEach((i) => s.push({ kind: "img", ...i }))
    return s
  }, [p])
  const [i, setI] = useState(start)
  const n = slides.length
  const cur = slides[i]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setI((x) => (x + 1) % n)
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + n) % n)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [n, onClose])

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col" role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}>
      <div className="flex items-center justify-between gap-4 px-4 md:px-6 py-3 text-white" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="font-semibold truncate">{p.title}</p>
          <p className="text-xs text-white/60">{placeLabel(p.location)}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Kapat" className="shrink-0 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="relative flex-1 flex items-center justify-center min-h-0" onClick={(e) => e.stopPropagation()}>
        {cur.kind === "video" ? (
          <video key={cur.src} ref={(v) => { if (v) { v.muted = true; v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.play().catch(() => {}) } }} src={cur.src} poster={cur.thumb} controls autoPlay muted playsInline loop preload="metadata" className="max-w-[94vw] max-h-full" />
        ) : (
          <img src={cur.src} alt={`${p.title} ${i + 1}`} className="max-w-[94vw] max-h-full object-contain" />
        )}
        {cur.kind === "img" && cur.render && (
          <span className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#704f36] px-3 py-1 text-xs font-medium text-white">3D Tasarım görseli</span>
        )}
        {n > 1 && (
          <>
            <button type="button" aria-label="Önceki" onClick={() => setI((i - 1 + n) % n)} className="absolute left-2 md:left-6 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"><ChevronLeft className="w-6 h-6" /></button>
            <button type="button" aria-label="Sonraki" onClick={() => setI((i + 1) % n)} className="absolute right-2 md:right-6 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center"><ChevronRight className="w-6 h-6" /></button>
          </>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 md:px-6 py-3" onClick={(e) => e.stopPropagation()}>
        {slides.map((s, k) => (
          <button key={s.src} type="button" onClick={() => setI(k)} aria-label={`${k + 1}. görsel`}
            className={`relative shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${k === i ? "border-white" : "border-transparent opacity-60"}`}>
            <img src={s.thumb} alt="" className="w-full h-full object-cover" />
            {s.kind === "video" && <PlayCircle className="absolute inset-0 m-auto w-6 h-6 text-white drop-shadow" />}
          </button>
        ))}
      </div>
    </div>
  )
}

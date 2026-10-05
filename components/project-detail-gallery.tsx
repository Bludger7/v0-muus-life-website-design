"use client"

import { useState } from "react"
import { PlayCircle } from "lucide-react"
import { ProjectModal } from "@/components/project-showcase"
import type { ShowcaseProject } from "@/lib/showcase-projects"

export function ProjectDetailGallery({ p }: { p: ShowcaseProject }) {
  const [open, setOpen] = useState<number | null>(null)
  const finals = p.images.filter((i) => !i.render)
  const renders = p.images.filter((i) => i.render)
  // ProjectModal slayt sirasi: son hal, video, render
  const idx = (kind: "f" | "v" | "r", k: number) => (kind === "f" ? k : kind === "v" ? finals.length : finals.length + (p.video ? 1 : 0) + k)
  const tile = "relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 group"
  return (
    <>
      {(finals.length > 0 || p.video) && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {finals.map((im, k) => (
            <button key={im.src} type="button" onClick={() => setOpen(idx("f", k))} className={tile}>
              <img src={im.thumb} alt={`${p.title} — uygulama fotoğrafı ${k + 1}`} loading={k < 3 ? "eager" : "lazy"} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </button>
          ))}
          {p.video && (
            <button type="button" onClick={() => setOpen(idx("v", 0))} className={tile}>
              <img src={p.video.poster} alt={`${p.title} — video`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/25"><PlayCircle className="w-14 h-14 text-white" /></span>
            </button>
          )}
        </div>
      )}
      {renders.length > 0 && (
        <>
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mt-10 mb-2">3D Tasarım Görselleri</h2>
          <p className="text-sm text-slate-500 mb-4">Aşağıdaki görseller tasarım aşamasındaki 3D çalışmalardır, uygulama fotoğrafı değildir.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {renders.map((im, k) => (
              <button key={im.src} type="button" onClick={() => setOpen(idx("r", k))} className={tile}>
                <img src={im.thumb} alt={`${p.title} — 3D tasarım ${k + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 rounded-full bg-[#704f36] px-2 py-0.5 text-[11px] text-white">3D Tasarım</span>
              </button>
            ))}
          </div>
        </>
      )}
      {open !== null && <ProjectModal p={p} start={open} onClose={() => setOpen(null)} />}
    </>
  )
}

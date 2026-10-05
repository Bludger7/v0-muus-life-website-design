"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const KEY = "noyer-cookie-consent"
type Choice = "granted" | "denied"

function apply(choice: Choice) {
  try { localStorage.setItem(KEY, choice) } catch {}
  const w = window as unknown as { gtag?: (...a: unknown[]) => void }
  w.gtag?.("consent", "update", { analytics_storage: choice })
}

export function CookieConsent() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(KEY) } catch {}
    if (!saved) setShow(true)
    const open = () => setShow(true)
    window.addEventListener("open-cookie-settings", open)
    return () => window.removeEventListener("open-cookie-settings", open)
  }, [])
  if (!show) return null
  const choose = (c: Choice) => { apply(c); setShow(false) }
  return (
    <div role="dialog" aria-label="Çerez tercihi" className="fixed bottom-0 inset-x-0 z-[90] p-3 md:p-4">
      <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-2xl border border-slate-200 p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed flex-1">
          Sitemizi geliştirmek için onay verirseniz anonim ziyaret istatistikleri (Google Analytics) kullanıyoruz.
          Ayrıntılar: <Link href="/cerez-politikasi/" className="underline text-[#704f36]">Çerez Politikası</Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button type="button" onClick={() => choose("denied")} className="h-10 px-4 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50">Reddet</button>
          <button type="button" onClick={() => choose("granted")} className="h-10 px-4 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]">Kabul et</button>
        </div>
      </div>
    </div>
  )
}

export function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="h-10 px-4 rounded-lg border border-[#704f36] text-[#704f36] text-sm font-medium hover:bg-[#704f36] hover:text-white">
      Çerez tercihlerimi yönet
    </button>
  )
}

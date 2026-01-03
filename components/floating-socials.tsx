"use client"

import { Instagram, Youtube, Share2 } from "lucide-react"
import { useState } from "react"

export function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {/* Social Media Icons - Hidden when closed */}
        <div
          className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
            isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4 pointer-events-none"
          }`}
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/905015307736?text=Merhabalar%20bilgi%20alabilir%20miyim?"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            aria-label="WhatsApp ile iletişime geç"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" className="md:w-7 md:h-7 fill-white stroke-none">
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.07 0C5.537 0 .181 5.37.19 11.964c0 2.109.549 4.113 1.578 5.854L0 24l6.335-1.652a11.861 11.861 0 005.735 1.52h.003c6.532 0 11.889-5.369 11.88-11.977a11.821 11.821 0 00-3.48-8.457" />
            </svg>
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/muus_life"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Instagram'da takip et"
          >
            <Instagram className="w-6 h-6 md:w-7 md:h-7" />
          </a>

          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@muuslife"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            aria-label="YouTube'da takip et"
          >
            <Youtube className="w-6 h-6 md:w-7 md:h-7" />
          </a>

          {/* Pinterest Button */}
          <a
            href="https://tr.pinterest.com/muuslife"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Pinterest'te takip et"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="md:w-7 md:h-7 text-white">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>

          {/* TikTok Button */}
          <a
            href="https://www.tiktok.com/@muus.life.mobilya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 md:w-14 md:h-14 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
            aria-label="TikTok'ta takip et"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              className="md:w-[26px] md:h-[26px] text-white"
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-[var(--color-accent-foreground)] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-label="Sosyal medya menüsünü aç/kapat"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

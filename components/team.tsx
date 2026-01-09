"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Team() {
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [shakeIndex, setShakeIndex] = useState<number | null>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Selahattin Hacıhasanoğlu",
      role: t("team.role.founder"),
      image: "/images/whatsapp-20image-202025-12-15-20at-2010.jpeg",
    },
    {
      name: "Gamze Turan",
      role: t("team.role.architect"),
      image: "/images/img-2094.jpeg",
    },
    {
      name: "Aleyna Kılınç",
      role: t("team.role.architect"),
      image: "/images/profil-20foto-c4-9fraf-c4-b1-20kare.jpg",
    },
    {
      name: "Mücahit Okcu",
      role: t("team.role.director"),
      image: "/images/mucahit.jpeg",
    },
    {
      name: "Emrah Bey",
      role: t("team.role.site"),
      image: "/images/IMG_4275.jpg",
    },
    {
      name: "Yunus Emre İnanç",
      role: t("team.role.operations"),
      image: "/images/yunush.jpg",
    },
  ]

  const handleMucahitClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    setShakeIndex(3) // Mücahit'in index'i

    // Shake animasyonunu kaldır
    setTimeout(() => setShakeIndex(null), 500)

    // Eğer 5 tıklama gerçekleştiyse easter egg'i göster
    if (newCount >= 5) {
      setShowEasterEgg(true)
      setClickCount(0)
    }

    // Timeout'u temizle ve yenisini başlat
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    // 3 saniye içinde yeni tıklama olmazsa sayacı sıfırla
    clickTimeoutRef.current = setTimeout(() => {
      setClickCount(0)
    }, 1000)
  }

  const closeEasterEgg = () => {
    setShowEasterEgg(false)
  }

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4"><span className="text-slate-600 font-light">{t("team.thePrefix")}</span>{t("team.title")}</h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group text-center transition-all hover:transform hover:-translate-y-2 duration-300 ${
                shakeIndex === index ? "animate-shake" : ""
              }`}
              onClick={index === 3 ? handleMucahitClick : undefined}
              style={{ cursor: index === 3 ? "pointer" : "default" }}
            >
              <div className="relative aspect-square mb-3 md:mb-6 overflow-hidden rounded-sm shadow-md">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{member.name}</h3>
              <p className="text-slate-600 text-xs md:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeEasterEgg}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeEasterEgg}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl animate-in zoom-in duration-500">
              <div className="relative aspect-square">
                <Image
                  src="/images/eastereggmuco.jpg"
                  alt="Easter Egg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center bg-linear-to-r from-slate-900 to-slate-700">
                <h3 className="text-2xl font-bold text-white mb-2">🎉 Komurcu akrep! 🎉</h3>
                <p className="text-slate-300">Patronun ilk satışı✨</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

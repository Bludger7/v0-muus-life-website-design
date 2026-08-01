"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle, Instagram, Youtube, AlertCircle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

const furnitureTypes = [
  { value: "mutfak", key: "form.type.kitchen" },
  { value: "gardirop", key: "form.type.wardrobe" },
  { value: "tv-salon", key: "form.type.living" },
  { value: "banyo", key: "form.type.bathroom" },
  { value: "genc-cocuk", key: "form.type.kids" },
  { value: "ofis", key: "form.type.office" },
  { value: "diger", key: "form.type.other" },
]

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const { t } = useLanguage()

  const formEnabled = Boolean(WEB3FORMS_KEY)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formEnabled) return

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload: Record<string, string> = {
      access_key: WEB3FORMS_KEY as string,
      subject: "Noyer Home - Yeni Teklif Talebi",
      from_name: "Noyer Home Web Sitesi",
    }
    formData.forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : ""
    })

    setStatus("loading")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">{t("contact.title")}</h2>
          <div className="h-1 w-16 bg-[#704f36]" />
          <p className="text-sm md:text-base lg:text-lg text-slate-500">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.name")}</label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder={t("contact.name")}
                  required
                  className="h-11 md:h-12 bg-slate-50 border-slate-200 focus:border-slate-400 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-phone" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.phoneField")}</label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="05XX XXX XX XX"
                  required
                  className="h-11 md:h-12 bg-slate-50 border-slate-200 focus:border-slate-400 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.emailOptional")}</label>
                <Input
                  id="contact-email"
                  name="email"
                  placeholder={t("contact.email")}
                  type="email"
                  className="h-11 md:h-12 bg-slate-50 border-slate-200 focus:border-slate-400 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-type" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.furnitureType")}</label>
                <select
                  id="contact-type"
                  name="furniture_type"
                  required
                  defaultValue=""
                  className="w-full h-11 md:h-12 px-3 rounded-md bg-slate-50 border border-slate-200 focus:border-slate-400 focus:outline-none text-sm md:text-base text-slate-900"
                >
                  <option value="" disabled>
                    {t("contact.furnitureTypeSelect")}
                  </option>
                  {furnitureTypes.map((type) => (
                    <option key={type.value} value={t(type.key)}>
                      {t(type.key)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-location" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.location")}</label>
                <Input
                  id="contact-location"
                  name="location"
                  placeholder={t("contact.locationPlaceholder")}
                  required
                  className="h-11 md:h-12 bg-slate-50 border-slate-200 focus:border-slate-400 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-size" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.size")}</label>
                <Input
                  id="contact-size"
                  name="approx_size"
                  placeholder={t("contact.sizePlaceholder")}
                  className="h-11 md:h-12 bg-slate-50 border-slate-200 focus:border-slate-400 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs md:text-sm font-semibold text-slate-900">{t("contact.message")}</label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder={t("contact.message")}
                  required
                  className="min-h-32 md:min-h-40 bg-slate-50 border-slate-200 focus:border-slate-400 resize-none text-sm md:text-base"
                />
              </div>

              <p className="text-xs text-slate-500">{t("contact.photoNote")}</p>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="contact-kvkk"
                  name="kvkk_consent"
                  value={t("contact.kvkkValue")}
                  required
                  className="mt-0.5 w-4 h-4 shrink-0 accent-[#704f36] cursor-pointer"
                />
                <label htmlFor="contact-kvkk" className="text-xs md:text-sm text-slate-600 leading-relaxed cursor-pointer">
                  {t("contact.kvkk")}
                </label>
              </div>

              {!formEnabled && (
                <div className="flex items-start gap-2 p-3 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs md:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t("contact.formDisabled")}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-start gap-2 p-3 rounded-md bg-green-50 border border-green-200 text-green-800 text-xs md:text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t("contact.success")}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2 p-3 rounded-md bg-red-50 border border-red-200 text-red-800 text-xs md:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t("contact.error")}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={!formEnabled || status === "loading"}
                className="w-full h-11 md:h-12 text-sm md:text-base bg-[#704f36] hover:bg-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>

            <Button
              variant="outline"
              className="w-full h-11 md:h-12 text-sm md:text-base border-slate-200 hover:bg-slate-50 gap-2 bg-transparent"
              onClick={() =>
                window.open("https://wa.me/905015307736?text=Merhaba%2C%20mobilya%20teklifi%20almak%20istiyorum", "_blank")
              }
            >
              <MessageCircle className="w-5 h-5" />
              {t("contact.whatsapp")}
            </Button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <a
              href="https://maps.app.goo.gl/ipK63ULuVAV9veNw9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow flex items-start gap-6 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-slate-100 transition-colors">
                <MapPin className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{t("contact.address")}</h3>
                <p className="text-slate-600">Şehit Osman Avcı Mah. Kaplan Cad. No:11</p>
                <p className="text-slate-600">Alpak&Neva ARMONIA Sitesi C Blok No:9, 06824</p>
                <p className="text-slate-600">Etimesgut/Ankara</p>
                <p className="text-blue-600 text-sm mt-2 font-medium">{t("contact.showMap")} &rarr;</p>
              </div>
            </a>

            <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{t("contact.phone")}</h3>
                <div className="flex flex-col items-start gap-1.5 text-slate-600 font-mono text-lg leading-relaxed">
                  <a href="tel:+905015307736" className="block w-full hover:underline">0501 530 77 36</a>
                  <a href="tel:+905015300767" className="block w-full hover:underline">0501 530 07 67</a>
                </div>
                <div className="mt-2">
                  <a href="mailto:bilgi@noyerhome.com" className="text-blue-600 font-medium hover:underline">bilgi@noyerhome.com</a>
                </div>
                <p className="text-slate-500 text-sm mt-2">{t("contact.hours")}</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-4">{t("contact.social")}</h3>
              <div className="flex flex-wrap gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/905015307736?text=Merhaba%2C%20mobilya%20teklifi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#704f36] hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" className="fill-white stroke-none">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.07 0C5.537 0 .181 5.37.19 11.964c0 2.109.549 4.113 1.578 5.854L0 24l6.335-1.652a11.861 11.861 0 005.735 1.52h.003c6.532 0 11.889-5.369 11.88-11.977a11.821 11.821 0 00-3.48-8.457" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/noyer.home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#704f36] hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@noyerhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#704f36] hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                {/* Pinterest */}
                <a
                  href="https://tr.pinterest.com/noyerhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#704f36] hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Pinterest"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@noyerhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#704f36] hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-white">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

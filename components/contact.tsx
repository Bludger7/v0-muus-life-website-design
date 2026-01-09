"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle, Upload, X, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const [files, setFiles] = useState<File[]>([])
  const { t } = useLanguage()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    files.forEach((file) => {
      formData.append("files", file)
    })

    // TODO: Implement email sending with attachments
    console.log("[v0] Form submitted with files:", files)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{t("contact.title")}</h2>
          <p className="text-slate-500 text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">{t("contact.name")}</label>
                <Input
                  name="name"
                  placeholder={t("contact.name")}
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:border-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">{t("contact.email")}</label>
                <Input
                  name="email"
                  placeholder={t("contact.email")}
                  type="email"
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:border-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">{t("contact.message")}</label>
                <Textarea
                  name="message"
                  placeholder={t("contact.message")}
                  required
                  className="min-h-40 bg-slate-50 border-slate-200 focus:border-slate-400 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">{t("contact.file")}</label>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center gap-2 h-12 px-4 border-2 border-dashed border-slate-200 rounded-md hover:border-slate-400 cursor-pointer bg-slate-50 transition-colors"
                  >
                    <Upload className="w-5 h-5 text-slate-500" />
                    <span className="text-sm text-slate-600">{t("contact.fileSelect")}</span>
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="space-y-2 mt-3">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-slate-50 rounded-md border border-slate-200"
                      >
                        <span className="text-sm text-slate-700 truncate flex-1">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="ml-2 p-1 hover:bg-slate-200 rounded"
                        >
                          <X className="w-4 h-4 text-slate-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full h-12 text-base bg-slate-800 hover:bg-slate-900">
                {t("contact.send")}
              </Button>
            </form>

            <Button
              variant="outline"
              className="w-full h-12 text-base border-slate-200 hover:bg-slate-50 gap-2 bg-transparent"
              onClick={() =>
                window.open("https://wa.me/905015307736?text=Merhabalar%20bilgi%20alabilir%20miyim?", "_blank")
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
                <div className="text-slate-600 font-mono text-lg">
                  <a href="tel:+905015307736" className="block hover:underline">0501 530 77 36</a>
                  <a href="tel:+905015300767" className="block mt-1 hover:underline">0501 530 07 67</a>
                </div>
                <div className="mt-2">
                  <a href="mailto:bilgi@muus.life" className="text-blue-600 font-medium hover:underline">bilgi@muus.life</a>
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
                  href="https://wa.me/905015307736?text=Merhabalar%20bilgi%20alabilir%20miyim?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" className="fill-white stroke-none">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.07 0C5.537 0 .181 5.37.19 11.964c0 2.109.549 4.113 1.578 5.854L0 24l6.335-1.652a11.861 11.861 0 005.735 1.52h.003c6.532 0 11.889-5.369 11.88-11.977a11.821 11.821 0 00-3.48-8.457" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/muus_life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@muuslife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                {/* Pinterest */}
                <a
                  href="https://tr.pinterest.com/muuslife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Pinterest"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@muus.life.mobilya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-full shadow-sm flex items-center justify-center transition-all hover:scale-110"
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

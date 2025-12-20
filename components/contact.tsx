"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle, Upload, X } from "lucide-react"

export function Contact() {
  const [files, setFiles] = useState<File[]>([])

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">İletişime Geçin</h2>
          <div className="h-1 w-20 bg-slate-800" />
          <p className="text-slate-500 text-lg">Vizyonunuzu birlikte hayata geçirelim</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Ad Soyad</label>
                <Input
                  name="name"
                  placeholder="Ad Soyad"
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:border-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">E-posta</label>
                <Input
                  name="email"
                  placeholder="E-posta"
                  type="email"
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:border-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Mesajınız</label>
                <Textarea
                  name="message"
                  placeholder="Mesajınız"
                  required
                  className="min-h-[160px] bg-slate-50 border-slate-200 focus:border-slate-400 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Dosya Ekle (İsteğe bağlı)</label>
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
                    <span className="text-sm text-slate-600">Dosya seçin veya sürükleyin</span>
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
                Gönder
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
              WhatsApp ile iletişim
            </Button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <a
              href="https://share.google/jFXedXUDGI9kDfjky"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow flex items-start gap-6 group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-100 transition-colors">
                <MapPin className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Adres</h3>
                <p className="text-slate-600">Şehit Osman Avcı, Kaplan Cd.</p>
                <p className="text-slate-600">no:11 No 9, 06824</p>
                <p className="text-slate-600">Etimesgut/Ankara</p>
                <p className="text-blue-600 text-sm mt-2 font-medium">Haritada Göster &rarr;</p>
              </div>
            </a>

            <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">İletişim</h3>
                <p className="text-slate-600 font-mono text-lg">0501 530 77 36</p>
                <p className="text-slate-500 text-sm mt-1">Hafta içi 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

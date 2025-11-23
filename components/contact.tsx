"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export function Contact() {
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
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Ad Soyad</label>
                <Input placeholder="Ad Soyad" className="h-12 bg-slate-50 border-slate-200 focus:border-slate-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">E-posta</label>
                <Input
                  placeholder="E-posta"
                  type="email"
                  className="h-12 bg-slate-50 border-slate-200 focus:border-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Mesajınız</label>
                <Textarea
                  placeholder="Mesajınız"
                  className="min-h-[160px] bg-slate-50 border-slate-200 focus:border-slate-400 resize-none"
                />
              </div>
              <Button className="w-full h-12 text-base bg-slate-800 hover:bg-slate-900">Gönder</Button>
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

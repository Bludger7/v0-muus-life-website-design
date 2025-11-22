import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Hash, MessageCircle } from "lucide-react"

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
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile iletişim
            </Button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Adres</h3>
                <p className="text-slate-600">Tallinn</p>
                <p className="text-slate-600">Estonia, European Union</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                <Hash className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Vergi Numarası</h3>
                <p className="text-slate-600 font-mono">EE102xxxxxx</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm overflow-hidden shadow-sm">
                <div className="flex flex-col w-full h-full">
                  <div className="bg-[#0072CE] h-1/3 w-full" />
                  <div className="bg-black h-1/3 w-full" />
                  <div className="bg-white h-1/3 w-full" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">e-Residency Certified</h3>
                <p className="text-sm text-slate-500 mb-2">Digital Business Excellence</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Operating from Estonia's advanced digital infrastructure, we provide seamless global services with
                  European quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

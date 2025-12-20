import { Building2, Home } from "lucide-react"
import Image from "next/image"

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Hizmetlerimiz</h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600">
            Kişiye özel yaşam alanlarından kurumsal projelere kadar geniş bir yelpazede profesyonel mobilya üretim
            çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Kurumsal Projeler */}
          <div className="bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md overflow-hidden">
            <div className="bg-slate-900 text-white p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Kurumsal Projeler</h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-slate-600 mb-8 leading-relaxed">
                muus.life, kurumsal firmalara özel mobilya üretiminde yüksek hassasiyet, seri üretim disiplini ve
                kurumsal kimliğe tam uyum sağlayan profesyonel çözümler sunar.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/modern-office-space.png"
                    alt="Modern Ofis Alanı"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/commercial-interior.jpg"
                    alt="Ticari İç Mekan"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/luxury-restaurant-interior.png"
                    alt="Restoran Tasarımı"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">1. Ofis ve Çalışma Alanları</h4>
                  <p className="text-sm text-slate-500">
                    Yönetici odaları, çalışma masası sistemleri, toplantı alanları, depolama çözümleri.
                  </p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">2. Mağaza ve Perakende Alanları</h4>
                  <p className="text-sm text-slate-500">
                    Teşhir üniteleri, raf sistemleri, karşılama bankoları, mağaza dekorasyonu.
                  </p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">3. Restoran, Kafe ve Otel Alanları</h4>
                  <p className="text-sm text-slate-500">
                    Masa-sandalye grupları, sabit oturum alanları, servis üniteleri, otel mobilyaları.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">4. Kurumsal Kimlik & Proje Yönetimi</h4>
                  <p className="text-sm text-slate-500">
                    Marka uyumlu üretim, yerinde keşif, üretim takvimi oluşturma ve anahtar teslim montaj.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kişiye Özel Projeler */}
          <div className="bg-white shadow-sm border border-slate-100 transition-all hover:shadow-md overflow-hidden">
            <div className="bg-slate-900 text-white p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Kişiye Özel Projeler</h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-slate-600 mb-8 leading-relaxed">
                muus.life, yaşam alanlarını tamamen kişiye uygun hale getiren ölçüye özel mobilya üretiminde uzman bir
                yapıya sahiptir.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/luxury-kitchen.png"
                    alt="Lüks Mutfak Tasarımı"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/cozy-bedroom.png"
                    alt="Yatak Odası"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  <Image
                    src="/modern-walk-in-closet.jpg"
                    alt="Giyinme Odası"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">1. Mutfak Tasarımı</h4>
                  <p className="text-sm text-slate-500">
                    Ölçüye özel dolap sistemleri, modern ve klasik tasarım seçenekleri, üst düzey donanım.
                  </p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">2. Giyinme Odası ve Depolama</h4>
                  <p className="text-sm text-slate-500">
                    Walk-in giyinme odaları, ray dolaplar, özel modül kombinasyonları.
                  </p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">3. Yaşam ve Dinlenme Alanları</h4>
                  <p className="text-sm text-slate-500">
                    TV üniteleri, kitaplıklar, yatak odası mobilyaları, başlık ve baza sistemleri.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">4. Antre & Proje Yönetimi</h4>
                  <p className="text-sm text-slate-500">
                    Vestiyer sistemleri, yerinde ölçüm, malzeme seçimi ve uçtan uca süreç yönetimi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

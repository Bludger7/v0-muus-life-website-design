import { Building2, Home } from "lucide-react"

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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kurumsal Projeler */}
          <div className="bg-white p-8 md:p-10 shadow-sm border border-slate-100 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Kurumsal Projeler</h3>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed">
              muus.life, kurumsal firmalara özel mobilya üretiminde yüksek hassasiyet, seri üretim disiplini ve kurumsal
              kimliğe tam uyum sağlayan profesyonel çözümler sunar.
            </p>

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

          {/* Kişiye Özel Projeler */}
          <div className="bg-white p-8 md:p-10 shadow-sm border border-slate-100 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-sm">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Kişiye Özel Projeler</h3>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed">
              muus.life, yaşam alanlarını tamamen kişiye uygun hale getiren ölçüye özel mobilya üretiminde uzman bir
              yapıya sahiptir.
            </p>

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
    </section>
  )
}

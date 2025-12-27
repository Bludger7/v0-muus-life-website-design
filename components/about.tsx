export function About() {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Hakkımızda</h2>
            <div className="w-16 h-1 bg-slate-900"></div>

            <p className="text-slate-600 leading-relaxed text-lg">
              muus.life, kişiye özel ve kurumsal ölçekli mobilya üretiminde, tasarımı mühendislik disipliniyle birleştiren
              çağdaş bir üretim markasıdır. Her projede estetik bütünlüğü, malzeme kalitesini ve uzun ömürlü kullanım
              deneyimini aynı standartta sunmayı hedefler.
            </p>

            <p className="text-slate-600 leading-relaxed text-lg">
              Üretim yaklaşımımız; ölçüye özel tasarım, yüksek dayanıklılık ve kusursuz işçilik üzerine kuruludur. Ev,
              ofis ve ticari alanlar için geliştirilen tüm çözümlerimiz, baştan sona kontrollü ve şeffaf bir süreçle
              hayata geçirilir.
            </p>

            <p className="text-slate-600 leading-relaxed text-lg">
              muus.life, tekil yaşam alanlarından kapsamlı kurumsal projelere kadar her işinde kalıcı memnuniyet,
              sürdürülebilir kalite ve zamansız tasarım anlayışını esas alır.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-8 pt-8 border-t border-slate-100">
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 text-xl">Misyonumuz</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  İhtiyaca özel, yüksek kaliteli ve uzun ömürlü mobilyalar üretmek. Her müşterimizin yaşam ve çalışma
                  alanını, işlevselliği artıran ve kalite standardını yükselten çözümlerle yeniden şekillendirmek.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 text-xl">Vizyonumuz</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Türkiye’de ve uluslararası pazarda kişiye özel ve kurumsal mobilya üretimi denildiğinde akla gelen
                  öncü marka olmak.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] bg-slate-100 overflow-hidden rounded-lg">
            <img
              src="/modern-furniture-production-workshop.jpg"
              alt="Modern Mobilya Üretim Atölyesi"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

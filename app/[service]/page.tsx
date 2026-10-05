import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, MessageCircle, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProcessStrip } from "@/components/process-strip"
import { services, serviceBySlug } from "@/lib/services"
import { showcaseProjects } from "@/lib/showcase-projects"
import { productionCovers, productionGallery } from "@/lib/production-gallery"
import { SITE_URL, WHATSAPP_QUOTE_URL } from "@/lib/contact-info"

export const dynamicParams = false
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params
  const s = serviceBySlug(service)
  if (!s) return {}
  const url = `${SITE_URL}/${s.slug}/`
  const img = productionCovers[s.key]?.replace("-k.webp", ".webp")
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: url },
    openGraph: { title: s.title, description: s.description, url, siteName: "Noyer Home", locale: "tr_TR", type: "website", images: img ? [{ url: `${SITE_URL}${img}` }] : undefined },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  const s = serviceBySlug(service)
  if (!s) notFound()
  const projects = s.projects.map((slug) => showcaseProjects.find((p) => p.slug === slug)).filter(Boolean) as typeof showcaseProjects
  const models = (productionGallery[s.key] ?? []).flatMap((g) => g.images.slice(0, 2)).slice(0, 8)
  const hero = productionCovers[s.key]?.replace("-k.webp", ".webp")
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.name,
      areaServed: { "@type": "City", name: "Ankara" },
      provider: { "@type": "FurnitureStore", name: "Noyer Home", url: `${SITE_URL}/` },
      url: `${SITE_URL}/${s.slug}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler/` },
        { "@type": "ListItem", position: 3, name: s.name, item: `${SITE_URL}/${s.slug}/` },
      ],
    },
  ]
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Navbar />
      <section className="relative pt-16">
        <div className="relative h-[46vh] min-h-[320px] overflow-hidden bg-[#3f3a37]">
          {hero && <img src={hero} alt={s.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b2622]/90 via-[#2b2622]/40 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-10 max-w-6xl">
            <nav className="text-xs text-white/70 mb-3" aria-label="Sayfa yolu">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link> / <Link href="/hizmetler/" className="hover:text-white">Hizmetler</Link> / <span className="text-white">{s.name}</span>
            </nav>
            <h1 className="text-2xl md:text-5xl font-bold text-white max-w-3xl">{s.h1}</h1>
            <p className="inline-flex items-center gap-1.5 text-white/80 text-sm mt-3"><MapPin className="w-4 h-4" /> Ankara&apos;nın tüm ilçelerinde yerinde keşif</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]"><MessageCircle className="w-4 h-4" /> WhatsApp&apos;tan Teklif Al</a>
              <a href="#projeler" className="inline-flex items-center h-11 px-5 rounded-lg border border-white/40 text-white text-sm font-medium hover:bg-white/10">Projeleri Gör</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 text-slate-700 leading-relaxed space-y-4">
            {s.intro.map((t) => <p key={t.slice(0, 20)}>{t}</p>)}
          </div>
          <div className="rounded-xl bg-[#f7f4ef] p-5">
            <h2 className="font-bold text-slate-900 mb-3">Neler üretiyoruz?</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {s.includes.map((x) => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-[#704f36] shrink-0 mt-0.5" />{x}</li>)}
            </ul>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-14 mb-5">Malzeme ve kapak seçenekleri</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {s.materials.map((m) => (
            <div key={m.name} className="rounded-xl border border-slate-100 p-5">
              <p className="font-semibold text-slate-900 mb-1">{m.name}</p>
              <p className="text-sm text-slate-600">{m.text}</p>
            </div>
          ))}
        </div>

        {models.length > 0 && (
          <>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-14 mb-2">Model örnekleri</h2>
            <p className="text-sm text-slate-500 mb-5">İlham için seçtiğimiz model ve malzeme örnekleri; tüm ürünler ölçünüze özel üretilir.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {models.map((im) => (
                <div key={im.src} className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-100">
                  <img src={im.thumb} alt={`${s.name} model örneği`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <ProcessStrip />

      {projects.length > 0 && (
        <section id="projeler" className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">{s.name} uyguladığımız projeler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projeler/${p.slug}/`} className="group block rounded-xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <img src={p.images[0]?.thumb ?? p.video?.poster} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900 group-hover:text-[#704f36]">{p.title}</p>
                  <p className="text-sm text-slate-500">{p.location === "Ankara" ? "Ankara" : `${p.location}, Ankara`}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 md:px-6 pb-16 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-5">Sık sorulan sorular</h2>
        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {s.faq.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none flex justify-between gap-4 font-medium text-slate-900">{f.q}<span className="text-[#704f36] group-open:rotate-45 transition-transform">+</span></summary>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#704f36] text-white p-6 md:p-8 text-center">
          <p className="text-lg md:text-xl font-bold mb-2">Ölçünüze özel teklif alın</p>
          <p className="text-sm text-white/80 mb-5">Ankara&apos;da yerinde keşif yapıp ihtiyacınıza uygun çözümü birlikte planlayalım.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-white text-[#704f36] text-sm font-semibold"><MessageCircle className="w-4 h-4" /> WhatsApp&apos;tan Yazın</a>
            <Link href="/iletisim/" className="inline-flex items-center h-11 px-5 rounded-lg border border-white/50 text-white text-sm font-medium">Teklif Formu</Link>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-sm font-semibold text-slate-900 mb-3">Diğer hizmetlerimiz</p>
          <div className="flex flex-wrap gap-2">
            {services.filter((x) => x.slug !== s.slug).map((x) => (
              <Link key={x.slug} href={`/${x.slug}/`} className="h-9 px-3 inline-flex items-center rounded-full border border-slate-200 text-sm text-slate-700 hover:border-[#704f36] hover:text-[#704f36]">{x.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

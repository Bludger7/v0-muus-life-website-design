import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectDetailGallery } from "@/components/project-detail-gallery"
import { showcaseProjects, placeLabel } from "@/lib/showcase-projects"
import { servicesForProject } from "@/lib/services"
import { SITE_URL, WHATSAPP_QUOTE_URL } from "@/lib/contact-info"

export const dynamicParams = false
export function generateStaticParams() {
  return showcaseProjects.map((p) => ({ slug: p.slug }))
}

const find = (slug: string) => showcaseProjects.find((p) => p.slug === slug)
const place = placeLabel

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = find(slug)
  if (!p) return {}
  const onlyRender = p.images.length > 0 && p.images.every((i) => i.render)
  const title = `${p.title} | ${place(p.location)} | Noyer Home`
  const description = onlyRender
    ? `${p.title} — ${place(p.location)}. Noyer Home 3D tasarım çalışması ve ölçüye özel mobilya planlaması.`
    : `${p.title} — ${place(p.location)}. Noyer Home atölyesinde ölçüye özel üretilip yerinde monte edilen mobilyalardan teslim fotoğrafları.`
  const img = p.images[0]?.src ?? p.video?.poster
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/projeler/${p.slug}/` },
    openGraph: { title, description, url: `${SITE_URL}/projeler/${p.slug}/`, siteName: "Noyer Home", locale: "tr_TR", type: "article", images: img ? [{ url: `${SITE_URL}${img}` }] : undefined },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = find(slug)
  if (!p) notFound()
  const svc = servicesForProject(p.slug)
  const others = showcaseProjects.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3)
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE_URL}/projeler/` },
      { "@type": "ListItem", position: 3, name: p.title, item: `${SITE_URL}/projeler/${p.slug}/` },
    ],
  }
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-16 max-w-6xl">
        <nav className="text-xs text-slate-500 mb-4" aria-label="Sayfa yolu">
          <Link href="/" className="hover:text-[#704f36]">Ana Sayfa</Link> / <Link href="/projeler/" className="hover:text-[#704f36]">Projeler</Link> / <span className="text-slate-700">{p.title}</span>
        </nav>
        <p className="text-xs uppercase tracking-wider text-[#704f36] mb-2">{p.category === "kurumsal" ? "Ofis ve Kurumsal" : "Konut"}</p>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">{p.title}</h1>
        <p className="inline-flex items-center gap-1.5 text-sm text-slate-500 mb-6"><MapPin className="w-4 h-4" /> {place(p.location)}</p>
        <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
          {p.images.some((i) => !i.render)
            ? `Bu projede mobilyaları ${place(p.location)} adresindeki mekâna özel ölçü alarak tasarladık, Noyer Home atölyesinde ürettik ve yerinde monte ettik. Aşağıda teslim sonrası çekilmiş fotoğrafları${p.video ? " ve videoyu" : ""} inceleyebilirsiniz.`
            : `${place(p.location)} için hazırladığımız 3D tasarım çalışması. Mobilyalar mekânın ölçülerine göre planlandı.`}
        </p>
        <ProjectDetailGallery p={p} />

        {svc.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Bu projede yer alan hizmetler</h2>
            <div className="flex flex-wrap gap-2">
              {svc.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/`} className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-[#704f36] hover:text-[#704f36]">
                  {s.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-[#f7f4ef] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div>
            <p className="text-lg font-bold text-slate-900">Benzer bir mobilya mı istiyorsunuz?</p>
            <p className="text-sm text-slate-600">Ankara&apos;da yerinde keşif yapıp ölçünüze özel teklif hazırlayalım.</p>
          </div>
          <div className="flex gap-2">
            <a href={WHATSAPP_QUOTE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[#704f36] text-white text-sm font-medium hover:bg-[#5c402b]"><MessageCircle className="w-4 h-4" /> WhatsApp&apos;tan Teklif</a>
            <Link href="/iletisim/" className="inline-flex items-center h-11 px-5 rounded-lg border border-[#704f36] text-[#704f36] text-sm font-medium">İletişim</Link>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Diğer projeler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link key={o.slug} href={`/projeler/${o.slug}/`} className="group block rounded-xl overflow-hidden border border-slate-100 bg-white">
                  <div className="relative aspect-[4/3] bg-slate-100"><img src={o.images[0]?.thumb ?? o.video?.poster} alt={o.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" /></div>
                  <p className="p-3 text-sm font-semibold text-slate-900 group-hover:text-[#704f36]">{o.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}

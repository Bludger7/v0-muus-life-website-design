import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-4 md:px-6 pt-28 pb-16 max-w-3xl text-slate-700 text-sm md:text-base leading-relaxed [&_h2]:text-lg [&_h2]:md:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1 [&_a]:text-[#704f36] [&_a]:underline">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-xs text-slate-500 mb-8">Son güncelleme: {updated}</p>
        {children}
      </article>
      <Footer />
    </main>
  )
}

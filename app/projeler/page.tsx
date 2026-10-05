// Proje vitrini: lib/showcase-projects.ts (yalnizca teslim/son hal fotograflari).
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ProjectShowcase } from "@/components/project-showcase"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/contact-info"

const title = "Projelerimiz | Noyer Home Ankara"
const description = "Noyer Home atölyesinde ölçüye özel üretilip Ankara'da monte edilen mutfak, gardırop, TV ünitesi ve vestiyer projelerinden teslim fotoğrafları."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/projeler/` },
}

export default function ProjelerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <ProjectShowcase />
      </div>
      <Footer />
    </main>
  )
}

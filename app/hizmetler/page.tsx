import { Navbar } from "@/components/navbar"
import { ServiceCategories } from "@/components/service-categories"
import { ProcessStrip } from "@/components/process-strip"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <ServiceCategories />
        <Services />
        <ProcessStrip />
      </div>
      <Footer />
    </main>
  )
}

import { Navbar } from "@/components/navbar"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function HizmetlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </main>
  )
}

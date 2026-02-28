import { Navbar } from "@/components/navbar"
import { Portfolio } from "@/components/portfolio"
import { Footer } from "@/components/footer"

export default function UrunlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Portfolio />
      </div>
      <Footer />
    </main>
  )
}

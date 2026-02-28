import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <About />
        <Team />
      </div>
      <Footer />
    </main>
  )
}

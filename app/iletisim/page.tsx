import { Navbar } from "@/components/navbar"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBand } from "@/components/trust-band"
import { ServiceCategories } from "@/components/service-categories"
import { ProcessStrip } from "@/components/process-strip"
import InstagramFeed from "@/components/instagram-feed"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBand />
      <ServiceCategories />
      <ProcessStrip />
      <InstagramFeed />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

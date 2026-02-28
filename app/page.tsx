import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesSummary } from "@/components/services-summary"
import InstagramFeed from "@/components/instagram-feed"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesSummary />
      <InstagramFeed />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

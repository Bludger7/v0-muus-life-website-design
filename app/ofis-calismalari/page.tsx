"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OfficeProjects } from "../../components/office-projects"

export default function OfisCalismalariPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <OfficeProjects />
      </div>
      <Footer />
    </main>
  )
}
